import { describe, expect, test } from "vitest";
import { z } from "zod";
import { z as z3 } from "zod/v3";
import { Schema } from "effect";
import * as effect3Schema from "@effect/schema/Schema";
import * as v from "valibot";
import { type } from "arktype";
import { Value as TypeBoxValue } from "@sinclair/typebox/value";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";
import { zod3Adapter } from "../src/runtimes/zod3/index.ts";
import { effectAdapter } from "../src/runtimes/effect/index.ts";
import { effect3Adapter } from "../src/runtimes/effect3/index.ts";
import { valibotAdapter } from "../src/runtimes/valibot/index.ts";
import { arktypeAdapter } from "../src/runtimes/arktype/index.ts";

const runtimes = [
  ["zod", zodAdapter],
  ["zod3", zod3Adapter],
  ["effect", effectAdapter],
  ["effect3", effect3Adapter],
  ["valibot", valibotAdapter],
  ["arktype", arktypeAdapter],
] as const;

const accepts = (runtime: string, schema: unknown, value: unknown): boolean => {
  switch (runtime) {
    case "zod":
      return z.safeParse(schema, value).success;
    case "zod3":
      return (schema as z3.ZodType).safeParse(value).success;
    case "effect":
      return Schema.is(schema as Schema.Schema<unknown>)(value);
    case "effect3":
      return effect3Schema.is(schema as effect3Schema.Schema<unknown>)(value);
    case "valibot":
      return v.safeParse(schema as v.GenericSchema, value).success;
    case "arktype":
      return !((schema as (input: unknown) => unknown)(value) instanceof type.errors);
  }
};

describe("empty JSON Schema combinators", () => {
  test.each([
    ["oneOf", { oneOf: [] }],
    ["anyOf", { anyOf: [] }],
    ["enum", { enum: [] }],
  ] as const)("%s is never in every direct runtime", (_name, schemaDef) => {
    const node = openApiToIr(schemaDef, { getRefName: (ref) => ref });
    expect(node.kind).toBe("never");
    for (const [runtime, adapter] of runtimes) {
      const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
      const schema = (() => {
        switch (runtime) {
          case "zod":
            return new Function("z", `return ${source}`)(z);
          case "zod3":
            return new Function("z", `return ${source}`)(z3);
          case "effect":
            return new Function("Schema", `return ${source}`)(Schema);
          case "effect3":
            return new Function("S", `return ${source}`)(effect3Schema);
          case "valibot":
            return new Function("v", `return ${source}`)(v);
          case "arktype":
            return new Function("type", `return ${source}`)(type);
        }
      })();
      expect(accepts(runtime, schema, undefined), `${runtime}: ${source}`).toBe(false);
      expect(accepts(runtime, schema, "value"), `${runtime}: ${source}`).toBe(false);
    }
  });

  test("typebox emits a usable never schema", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "empty combinators", version: "1" },
      paths: {},
      components: { schemas: { Empty: { oneOf: [] } } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/empty-combinators");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      Empty: Parameters<typeof TypeBoxValue.Check>[0];
    };
    expect(TypeBoxValue.Check(module.Empty, undefined)).toBe(false);
    expect(TypeBoxValue.Check(module.Empty, "value")).toBe(false);
  });
});

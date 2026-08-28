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
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";
import { zod3Adapter } from "../src/runtimes/zod3/index.ts";
import { effectAdapter } from "../src/runtimes/effect/index.ts";
import { effect3Adapter } from "../src/runtimes/effect3/index.ts";
import { valibotAdapter } from "../src/runtimes/valibot/index.ts";
import { arktypeAdapter } from "../src/runtimes/arktype/index.ts";

const objectSchema = {
  type: "object",
  properties: { name: { type: "string" } },
  required: ["name"],
  additionalProperties: { type: "number" },
} as const;

const valid = { name: "typed-openapi", count: 1 };
const missingExtra = { name: "typed-openapi" };
const wrongExtra = { name: "typed-openapi", count: "one" };
const wrongNamedProperty = { name: 123, count: 1 };

const parseResult = (runtime: string, source: string) => {
  switch (runtime) {
    case "zod":
      return new Function("z", `return ${source}`)(z) as z.ZodType;
    case "zod3":
      return new Function("z", `return ${source}`)(z3) as z3.ZodType;
    case "effect":
      return new Function("Schema", `return ${source}`)(Schema) as Schema.Schema<unknown>;
    case "effect3":
      return new Function("S", `return ${source}`)(effect3Schema) as effect3Schema.Schema<unknown>;
    case "valibot":
      return new Function("v", `return ${source}`)(v) as v.GenericSchema;
    case "arktype":
      return new Function("type", `return ${source}`)(type) as (value: unknown) => unknown;
    default:
      throw new Error(`Unhandled runtime ${runtime}`);
  }
};

const accepts = (runtime: string, schema: unknown, value: unknown): boolean => {
  switch (runtime) {
    case "zod":
    case "zod3":
      return (schema as z.ZodType).safeParse(value).success;
    case "effect":
      return Schema.is(schema as Schema.Schema<unknown>)(value);
    case "effect3":
      return effect3Schema.is(schema as effect3Schema.Schema<unknown>)(value);
    case "valibot":
      return v.safeParse(schema as v.GenericSchema, value).success;
    case "arktype":
      return !((schema as (input: unknown) => unknown)(value) instanceof type.errors);
    default:
      return false;
  }
};

describe("typed additionalProperties with named properties", () => {
  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
  ] as const)("%s validates extras without revalidating named properties", (runtime, adapter) => {
    const node = openApiToIr(objectSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, valid)).toBe(true);
    expect(accepts(runtime, schema, missingExtra)).toBe(true);
    expect(accepts(runtime, schema, wrongExtra)).toBe(false);
    expect(accepts(runtime, schema, wrongNamedProperty)).toBe(false);
  });

  test("typebox validates extras without revalidating named properties", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "additional-properties", version: "1" },
      paths: {},
      components: { schemas: { NamedObject: objectSchema } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/additional-properties");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      NamedObject: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.NamedObject, valid)).toBe(true);
    expect(TypeBoxValue.Check(module.NamedObject, missingExtra)).toBe(true);
    expect(TypeBoxValue.Check(module.NamedObject, wrongExtra)).toBe(false);
    expect(TypeBoxValue.Check(module.NamedObject, wrongNamedProperty)).toBe(false);
  });
});

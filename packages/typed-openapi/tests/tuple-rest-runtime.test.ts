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

const tupleSchema = {
  type: "array",
  prefixItems: [{ type: "string" }, { type: "number" }],
  items: { type: "boolean" },
} as const;

const valid = ["header", 200, true, false];
const tooShort = ["header"];
const wrongOrder = ["header", "200"];
const wrongRest = ["header", 200, "true"];

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

describe("variadic tuple runtime schemas", () => {
  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
  ] as const)("%s preserves fixed prefix and repeated rest validation", (runtime, adapter) => {
    const node = openApiToIr(tupleSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, valid)).toBe(true);
    expect(accepts(runtime, schema, tooShort)).toBe(false);
    expect(accepts(runtime, schema, wrongOrder)).toBe(false);
    expect(accepts(runtime, schema, wrongRest)).toBe(false);
  });

  test("typebox preserves fixed prefix and repeated rest validation", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "tuple-rest", version: "1" },
      paths: {},
      components: { schemas: { Tuple: tupleSchema } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/tuple-rest");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      Tuple: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.Tuple, valid)).toBe(true);
    expect(TypeBoxValue.Check(module.Tuple, tooShort)).toBe(false);
    expect(TypeBoxValue.Check(module.Tuple, wrongOrder)).toBe(false);
    expect(TypeBoxValue.Check(module.Tuple, wrongRest)).toBe(false);
  });
});

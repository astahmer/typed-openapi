import { describe, expect, test } from "vitest";
import { z } from "zod";
import { z as z3 } from "zod/v3";
import { Schema, Struct } from "effect";
import * as effect3Schema from "@effect/schema/Schema";
import * as v from "valibot";
import { type } from "arktype";
import { Type } from "@sinclair/typebox";
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
import { typeboxAdapter } from "../src/runtimes/typebox/index.ts";
import { typiaAdapter } from "../src/runtimes/typia/index.ts";

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

const patternedObjectSchema = {
  type: "object",
  properties: { name: { type: "string" } },
  required: ["name"],
  patternProperties: { "^x-": { type: "number" } },
  additionalProperties: { type: "boolean" },
} as const;

const patternOnlyObjectSchema = {
  type: "object",
  patternProperties: { "^x-": { type: "number" } },
  additionalProperties: { type: "boolean" },
} as const;

const implicitAdditionalPropertiesSchema = {
  type: "object",
  properties: { name: { type: "string" } },
  required: ["name"],
} as const;

const emptyObjectSchema = {
  additionalProperties: false,
} as const;

const allOfPatternSchema = {
  allOf: [
    {
      type: "object",
      properties: { name: { type: "string" } },
      required: ["name"],
      patternProperties: { "^x-": { type: "number" } },
      additionalProperties: true,
    },
    {
      type: "object",
      properties: { id: { type: "number" } },
      required: ["id"],
      additionalProperties: true,
    },
  ],
} as const;

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
    case "typebox":
      return new Function("Type", `return ${source}`)(Type);
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
    case "typebox":
      return TypeBoxValue.Check(schema as Parameters<typeof TypeBoxValue.Check>[0], value);
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
  ] as const)("%s rejects properties for an explicitly empty object", (runtime, adapter) => {
    const node = openApiToIr(emptyObjectSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, {})).toBe(true);
    expect(accepts(runtime, schema, { unexpected: true })).toBe(false);
  });

  test("typebox rejects properties for an explicitly empty object", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "empty-object", version: "1" },
      paths: {},
      components: { schemas: { EmptyObject: emptyObjectSchema } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/empty-object");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      EmptyObject: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.EmptyObject, {})).toBe(true);
    expect(TypeBoxValue.Check(module.EmptyObject, { unexpected: true })).toBe(false);
  });

  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
  ] as const)("%s rejects extra properties when additionalProperties is omitted", (runtime, adapter) => {
    const node = openApiToIr(implicitAdditionalPropertiesSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, { name: "typed-openapi" })).toBe(true);
    expect(accepts(runtime, schema, { name: "typed-openapi", extra: true })).toBe(false);
  });

  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
    ["typebox", typeboxAdapter],
  ] as const)("%s allOf of closed objects composes combined keys", (runtime, adapter) => {
    const irCtx = { getRefName: (ref: string) => ref.replace(/^.*\//, "") };
    const resourcesSchema = {
      type: "object",
      properties: {
        Memory: { type: "integer" },
        CpuShares: { type: "integer" },
      },
    };
    const extraSchema = {
      type: "object",
      properties: {
        Binds: { type: "array", items: { type: "string" } },
        BindOptions: {
          type: "object",
          properties: { NonRecursive: { type: "boolean" } },
        },
      },
    };
    const resources = openApiToIr(resourcesSchema, irCtx);
    const hostConfig = openApiToIr({ allOf: [{ $ref: "#/components/schemas/Resources" }, extraSchema] }, irCtx);
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), {
      schemaNodes: new Map([["Resources", resources]]),
    });
    const source = `const Resources = ${adapter.emitNode(resources, ctx)}; return ${adapter.emitNode(hostConfig, ctx)};`;
    if (runtime === "arktype") {
      expect(source).toContain('onUndeclaredKey("ignore")');
      expect(source).toContain('onUndeclaredKey("reject")');
      expect(source).not.toContain(".narrow(");
    }
    if (runtime === "typebox") {
      expect(source).toContain("Type.Composite");
    }
    const schema = (() => {
      switch (runtime) {
        case "zod":
          return new Function("z", source)(z);
        case "zod3":
          return new Function("z", source)(z3);
        case "effect":
          return new Function("Schema", "Struct", source)(Schema, Struct);
        case "effect3":
          return new Function("S", source)(effect3Schema);
        case "valibot":
          return new Function("v", source)(v);
        case "arktype":
          return new Function("type", source)(type);
        case "typebox":
          return new Function("Type", source)(Type);
      }
    })();

    expect(accepts(runtime, schema, { Memory: 1, Binds: [] })).toBe(true);
    if (runtime !== "effect" && runtime !== "effect3") {
      expect(accepts(runtime, schema, { Memory: 1, Binds: [], extra: true })).toBe(false);
    }
  });

  test("typia allOf of closed objects uses the union of member keys", () => {
    const irCtx = { getRefName: (ref: string) => ref.replace(/^.*\//, "") };
    const resources = openApiToIr({ type: "object", properties: { Memory: { type: "integer" } } }, irCtx);
    const hostConfig = openApiToIr(
      {
        allOf: [
          { $ref: "#/components/schemas/Resources" },
          { type: "object", properties: { Binds: { type: "array", items: { type: "string" } } } },
        ],
      },
      irCtx,
    );
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), {
      schemaNodes: new Map([["Resources", resources]]),
    });
    const source = typiaAdapter.emitNode(hostConfig, ctx);
    expect(source).toContain('"Memory"');
    expect(source).toContain('"Binds"');
    expect(source).toContain("Object.keys(input).every");
  });

  test("arktype type.module closed objects emit + reject", () => {
    const irCtx = { getRefName: (ref: string) => ref.replace(/^.*\//, "") };
    const node = openApiToIr(
      {
        type: "object",
        properties: {
          name: { type: "string" },
          child: { $ref: "#/components/schemas/Node" },
        },
        required: ["name"],
      },
      irCtx,
    );
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(["Node"]), {
      schemaNodes: new Map([["Node", node]]),
    });
    const source = arktypeAdapter.emitNamedSchemas([{ name: "Node", node }], ctx);
    expect(source).toContain("type.module");
    expect(source).toContain('"+": "reject"');
  });

  test.each([
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
  ] as const)("%s emits a closed object when additionalProperties is omitted", (_runtime, adapter) => {
    const node = openApiToIr(implicitAdditionalPropertiesSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(source).not.toContain("StructWithRest");
    expect(source).not.toContain("Schema.extend");
    expect(source).not.toContain("Object.keys");
  });

  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
  ] as const)(
    "%s allows extra properties when additionalProperties is omitted and openapi.additionalPropertiesDefault is true",
    (runtime, adapter) => {
      const node = openApiToIr(implicitAdditionalPropertiesSchema, {
        getRefName: (ref) => ref,
        additionalPropertiesDefault: true,
      });
      const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
      const schema = parseResult(runtime, source);

      expect(accepts(runtime, schema, { name: "typed-openapi", extra: true })).toBe(true);
    },
  );

  test("typebox rejects extra properties when additionalProperties is omitted", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "implicit-additional-properties", version: "1" },
      paths: {},
      components: { schemas: { ImplicitObject: implicitAdditionalPropertiesSchema } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/implicit-additional-properties");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      ImplicitObject: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.ImplicitObject, { name: "typed-openapi" })).toBe(true);
    expect(TypeBoxValue.Check(module.ImplicitObject, { name: "typed-openapi", extra: true })).toBe(false);
  });

  test("typebox allows extra properties when openapi.additionalPropertiesDefault is true", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "implicit-additional-properties-openapi", version: "1" },
      paths: {},
      components: { schemas: { ImplicitObject: implicitAdditionalPropertiesSchema } },
    } as OpenAPIObject;
    const source = generateFile({
      ...mapOpenApiEndpoints(doc, { openapi: { additionalPropertiesDefault: true } }),
      runtime: "typebox",
      schemasOnly: true,
    });
    const directory = join(__dirname, "tmp/implicit-additional-properties-openapi");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      ImplicitObject: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.ImplicitObject, { name: "typed-openapi", extra: true })).toBe(true);
  });

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

  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
  ] as const)("%s applies patternProperties only to matching keys", (runtime, adapter) => {
    const node = openApiToIr(patternedObjectSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, { name: "typed-openapi", "x-count": 1, enabled: true })).toBe(true);
    expect(accepts(runtime, schema, { name: "typed-openapi", "x-count": "one", enabled: true })).toBe(false);
    expect(accepts(runtime, schema, { name: "typed-openapi", enabled: true })).toBe(true);
    expect(accepts(runtime, schema, { name: "typed-openapi", enabled: 1 })).toBe(false);
  });

  test("typebox applies patternProperties only to matching keys", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "pattern-properties", version: "1" },
      paths: {},
      components: { schemas: { PatternedObject: patternedObjectSchema } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/pattern-properties");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      PatternedObject: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.PatternedObject, { name: "typed-openapi", "x-count": 1, enabled: true })).toBe(
      true,
    );
    expect(TypeBoxValue.Check(module.PatternedObject, { name: "typed-openapi", "x-count": "one", enabled: true })).toBe(
      false,
    );
    expect(TypeBoxValue.Check(module.PatternedObject, { name: "typed-openapi", enabled: true })).toBe(true);
    expect(TypeBoxValue.Check(module.PatternedObject, { name: "typed-openapi", enabled: 1 })).toBe(false);
  });

  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
  ] as const)("%s handles patternProperties on objects without named properties", (runtime, adapter) => {
    const node = openApiToIr(patternOnlyObjectSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, { "x-count": 1, enabled: true })).toBe(true);
    expect(accepts(runtime, schema, { "x-count": "one", enabled: true })).toBe(false);
    expect(accepts(runtime, schema, { enabled: true })).toBe(true);
    expect(accepts(runtime, schema, { enabled: 1 })).toBe(false);
  });

  test("typebox handles patternProperties on objects without named properties", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "pattern-only-properties", version: "1" },
      paths: {},
      components: { schemas: { PatternOnlyObject: patternOnlyObjectSchema } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/pattern-only-properties");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      PatternOnlyObject: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.PatternOnlyObject, { "x-count": 1, enabled: true })).toBe(true);
    expect(TypeBoxValue.Check(module.PatternOnlyObject, { "x-count": "one", enabled: true })).toBe(false);
    expect(TypeBoxValue.Check(module.PatternOnlyObject, { enabled: true })).toBe(true);
    expect(TypeBoxValue.Check(module.PatternOnlyObject, { enabled: 1 })).toBe(false);
  });

  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
  ] as const)("%s preserves patternProperties through allOf", (runtime, adapter) => {
    const node = openApiToIr(allOfPatternSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, { name: "typed-openapi", id: 1, "x-count": 2, enabled: true })).toBe(true);
    expect(accepts(runtime, schema, { name: "typed-openapi", id: 1, "x-count": "two", enabled: true })).toBe(false);
  });

  test("typebox preserves patternProperties through allOf", async () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "allof-pattern-properties", version: "1" },
      paths: {},
      components: { schemas: { AllOfPattern: allOfPatternSchema } },
    } as OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", schemasOnly: true });
    const directory = join(__dirname, "tmp/allof-pattern-properties");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "schemas.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      AllOfPattern: Parameters<typeof TypeBoxValue.Check>[0];
    };

    expect(TypeBoxValue.Check(module.AllOfPattern, { name: "typed-openapi", id: 1, "x-count": 2, enabled: true })).toBe(
      true,
    );
    expect(
      TypeBoxValue.Check(module.AllOfPattern, { name: "typed-openapi", id: 1, "x-count": "two", enabled: true }),
    ).toBe(false);
  });
});

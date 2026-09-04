import { beforeAll, describe, expect, test } from "vitest";
import { z } from "zod";
import { z as z3 } from "zod/v3";
import { Schema, Struct } from "effect";
import * as effect3Schema from "@effect/schema/Schema";
import * as v from "valibot";
import { type } from "arktype";
import { Type } from "@sinclair/typebox";
import { Value as TypeBoxValue } from "@sinclair/typebox/value";
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, dirname } from "node:path";
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

const require = createRequire(import.meta.url);
const ttscBin = join(dirname(require.resolve("ttsc/package.json")), "lib/launcher/ttsc.js");

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

const decodeUnknown = (runtime: string, schema: unknown, value: unknown): unknown => {
  switch (runtime) {
    case "effect":
      return Schema.decodeUnknownSync(schema as Schema.Schema<unknown>)(value);
    case "effect3":
      return effect3Schema.decodeUnknownSync(schema as effect3Schema.Schema<unknown>)(value);
    default:
      throw new Error(`Unhandled decode runtime ${runtime}`);
  }
};

const compileTypiaGuards = async (
  schemas: Record<string, unknown>,
): Promise<Record<string, (input: unknown) => boolean>> => {
  const directory = join(__dirname, "tmp/typia-runtime");
  mkdirSync(join(directory, "dist"), { recursive: true });
  const source = generateFile({
    ...mapOpenApiEndpoints({
      openapi: "3.1.0",
      info: { title: "typia-runtime", version: "1" },
      paths: {},
      components: { schemas },
    } as OpenAPIObject),
    runtime: "typia",
    schemasOnly: true,
    includeClient: false,
  });
  writeFileSync(join(directory, "schemas.ts"), source);
  writeFileSync(
    join(directory, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        strict: true,
        module: "ESNext",
        moduleResolution: "bundler",
        target: "ES2022",
        outDir: "dist",
        skipLibCheck: true,
        declaration: false,
      },
      include: ["schemas.ts"],
    }),
  );
  try {
    execFileSync(
      process.execPath,
      [ttscBin, "--project", join(directory, "tsconfig.json"), "--emit", "--cwd", directory],
      {
        encoding: "utf8",
        timeout: 330_000,
        stdio: ["ignore", "pipe", "inherit"],
      },
    );
  } catch (error) {
    const err = error as { stdout?: string; stderr?: string; message: string };
    throw new Error(`ttsc failed:\n${err.stdout ?? ""}${err.stderr ?? ""}${err.message}`);
  }
  return (await import(pathToFileURL(join(directory, "dist/schemas.js")).href + `?t=${Date.now()}`)) as Record<
    string,
    (input: unknown) => boolean
  >;
};

describe("typed additionalProperties with named properties", () => {
  let isHostConfig: (input: unknown) => boolean;
  let isImplicitObject: (input: unknown) => boolean;

  beforeAll(async () => {
    const compiled = await compileTypiaGuards({
      Resources: { type: "object", properties: { Memory: { type: "integer" } } },
      HostConfig: {
        allOf: [
          { $ref: "#/components/schemas/Resources" },
          { type: "object", properties: { Binds: { type: "array", items: { type: "string" } } } },
        ],
      },
      ImplicitObject: implicitAdditionalPropertiesSchema,
    });
    isHostConfig = compiled.isHostConfig;
    isImplicitObject = compiled.isImplicitObject;
    if (!isHostConfig || !isImplicitObject) {
      throw new Error(
        `compiled typia output is missing guards: ${Object.keys(compiled)
          .filter((key) => key.startsWith("is"))
          .join(", ")}`,
      );
    }
  }, 360_000);
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
    expect(accepts(runtime, schema, { Memory: 1, Binds: [], BindOptions: { NonRecursive: true } })).toBe(true);
    expect(accepts(runtime, schema, { Memory: 1, Binds: 123 })).toBe(false);
    if (runtime === "effect" || runtime === "effect3") {
      expect(accepts(runtime, schema, { Memory: 1, Binds: [], extra: true })).toBe(true);
      expect(decodeUnknown(runtime, schema, { Memory: 1, Binds: [], extra: true })).toEqual({ Memory: 1, Binds: [] });
      expect(
        decodeUnknown(runtime, schema, { Memory: 1, Binds: [], BindOptions: { NonRecursive: true, extra: true } }),
      ).toEqual({
        Memory: 1,
        Binds: [],
        BindOptions: { NonRecursive: true },
      });
    } else {
      expect(accepts(runtime, schema, { Memory: 1, Binds: [], extra: true })).toBe(false);
    }
  });

  test("arktype allOf of closed objects with defaults composes instead of throwing", () => {
    const irCtx = { getRefName: (ref: string) => ref.replace(/^.*\//, "") };
    const resources = openApiToIr(
      {
        type: "object",
        properties: {
          Memory: { type: "integer", default: 0 },
          CpuShares: { type: "integer" },
        },
      },
      irCtx,
    );
    const hostConfig = openApiToIr(
      {
        allOf: [
          { $ref: "#/components/schemas/Resources" },
          {
            type: "object",
            properties: {
              Binds: { type: "array", items: { type: "string" } },
              BindOptions: {
                type: "object",
                properties: { NonRecursive: { type: "boolean", default: false } },
              },
            },
          },
        ],
      },
      irCtx,
    );
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), {
      schemaNodes: new Map([["Resources", resources]]),
    });
    const source = `const Resources = ${arktypeAdapter.emitNode(resources, ctx)}; return ${arktypeAdapter.emitNode(hostConfig, ctx)};`;
    expect(source).not.toContain(".narrow(");
    const schema = new Function("type", source)(type) as (value: unknown) => unknown;
    expect(accepts("arktype", schema, { Memory: 1, Binds: [] })).toBe(true);
    expect(accepts("arktype", schema, { Memory: 1, Binds: [], extra: true })).toBe(false);
  });

  test("typia allOf of closed objects accepts combined keys and rejects extras", () => {
    expect(isHostConfig({ Memory: 1, Binds: [] })).toBe(true);
    expect(isHostConfig({ Memory: 1, extra: true })).toBe(false);
    expect(isHostConfig({ Memory: 1, Binds: 123 })).toBe(false);
  });

  test("arktype type.module closed objects reject extra keys", () => {
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
    const source = `${arktypeAdapter
      .emitNamedSchemas([{ name: "Node", node }], ctx)
      .replace(/^export type .*$/gm, "")
      .replaceAll("export const ", "const ")}\nreturn Node;`;
    expect(source).toContain("type.module");
    expect(source).toContain('"+": "reject"');
    const Node = new Function("type", source)(type) as (value: unknown) => unknown;
    expect(accepts("arktype", Node, { name: "typed-openapi" })).toBe(true);
    expect(accepts("arktype", Node, { name: "typed-openapi", extra: true })).toBe(false);
  });

  test.each([
    ["zod", zodAdapter],
    ["zod3", zod3Adapter],
    ["valibot", valibotAdapter],
    ["arktype", arktypeAdapter],
    ["typebox", typeboxAdapter],
  ] as const)("%s allOf of a nullable closed object still accepts sibling keys", (runtime, adapter) => {
    const irCtx = { getRefName: (ref: string) => ref.replace(/^.*\//, "") };
    const clusterInfo = openApiToIr({ type: "object", properties: { ID: { type: "string" } }, nullable: true }, irCtx);
    const swarm = openApiToIr(
      {
        allOf: [
          { $ref: "#/components/schemas/ClusterInfo" },
          { type: "object", properties: { JoinTokens: { type: "string" } } },
        ],
      },
      irCtx,
    );
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), {
      schemaNodes: new Map([["ClusterInfo", clusterInfo]]),
    });
    const source = `const ClusterInfo = ${adapter.emitNode(clusterInfo, ctx)}; return ${adapter.emitNode(swarm, ctx)};`;
    if (runtime === "typebox") {
      expect(source).toContain("Type.Composite");
      expect(source).toContain("Type.Exclude");
    }
    const schema = (() => {
      switch (runtime) {
        case "zod":
          return new Function("z", source)(z);
        case "zod3":
          return new Function("z", source)(z3);
        case "valibot":
          return new Function("v", source)(v);
        case "arktype":
          return new Function("type", source)(type);
        case "typebox":
          return new Function("Type", source)(Type);
      }
    })();
    expect(accepts(runtime, schema, { ID: "swarm", JoinTokens: "token" })).toBe(true);
    expect(accepts(runtime, schema, { ID: "swarm", JoinTokens: "token", extra: true })).toBe(false);
    expect(accepts(runtime, schema, null)).toBe(false);
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
    ["effect", effectAdapter],
    ["effect3", effect3Adapter],
  ] as const)("%s strips extra properties when additionalProperties is omitted", (runtime, adapter) => {
    const node = openApiToIr(implicitAdditionalPropertiesSchema, { getRefName: (ref) => ref });
    const source = adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = parseResult(runtime, source);

    expect(accepts(runtime, schema, { name: "typed-openapi" })).toBe(true);
    expect(accepts(runtime, schema, { name: "typed-openapi", extra: true })).toBe(true);
    expect(decodeUnknown(runtime, schema, { name: "typed-openapi", extra: true })).toEqual({ name: "typed-openapi" });
    expect(accepts(runtime, schema, { name: 123 })).toBe(false);
  });

  test("typia rejects extra properties when additionalProperties is omitted", () => {
    expect(isImplicitObject({ name: "typed-openapi" })).toBe(true);
    expect(isImplicitObject({ name: "typed-openapi", extra: true })).toBe(false);
    expect(isImplicitObject({ name: 123 })).toBe(false);
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

  test("arktype allOf of two patterned objects flattens instead of throwing", () => {
    const node = openApiToIr(
      {
        allOf: [
          {
            type: "object",
            properties: { name: { type: "string" } },
            required: ["name"],
            patternProperties: { "^x-": { type: "number" } },
          },
          {
            type: "object",
            properties: { id: { type: "number" } },
            required: ["id"],
            patternProperties: { "^y-": { type: "boolean" } },
          },
        ],
      },
      { getRefName: (ref) => ref },
    );
    const source = arktypeAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(source).not.toContain(".and(");
    const schema = new Function("type", `return ${source}`)(type) as (value: unknown) => unknown;
    expect(accepts("arktype", schema, { name: "typed-openapi", id: 1, "x-n": 2, "y-ok": true })).toBe(true);
    expect(accepts("arktype", schema, { name: "typed-openapi", id: 1, "x-n": "two" })).toBe(false);
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

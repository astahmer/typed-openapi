import { describe, expect, test } from "vitest";
import { type } from "arktype";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { irToTs } from "../src/schema-ir/ir-to-ts.ts";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { configFileSchema } from "../src/config.ts";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { getRuntimeAdapter } from "../src/runtimes/registry.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import type { SchemaTransform } from "../src/types.ts";

const irCtx = { getRefName: (ref: string) => ref };

/** Map a number-with-brand-format schema to a branded type + a zod runtime transform. */
const brandTransform: SchemaTransform = (schema) => {
  if (schema.type === "number" && schema.format === "brand") {
    return { type: 'string & { __brand: "foo" }', runtime: "z.string()" };
  }
  return undefined;
};

describe("custom schema transforms (transformSchema)", () => {
  test("openApiToIr produces a custom node from a transform result", () => {
    const node = openApiToIr(
      { type: "number", format: "brand" },
      {
        ...irCtx,
        transformSchema: brandTransform,
      },
    );
    expect(node.kind).toBe("custom");
    if (node.kind === "custom") {
      expect(node.type).toBe('string & { __brand: "foo" }');
      expect(node.runtime).toBe("z.string()");
      expect(node.fallback?.kind).toBe("number");
    }
  });

  test("irToTs emits the transform type", () => {
    const node = openApiToIr(
      { type: "number", format: "brand" },
      {
        ...irCtx,
        transformSchema: brandTransform,
      },
    );
    expect(irToTs(node)).toBe('string & { __brand: "foo" }');
  });

  test("transform without a result leaves default emission", () => {
    const node = openApiToIr({ type: "string" }, { ...irCtx, transformSchema: brandTransform });
    expect(node.kind).toBe("string");
  });

  test("runtime-only transform keeps default type but overrides runtime", () => {
    const node = openApiToIr(
      { type: "number" },
      {
        ...irCtx,
        transformSchema: () => ({ runtime: "z.any()" }),
      },
    );
    expect(node.kind).toBe("custom");
    if (node.kind === "custom") {
      expect(irToTs(node)).toBe("number");
      expect(node.runtime).toBe("z.any()");
      expect(node.fallback?.kind).toBe("number");
    }
  });

  test("runtime adapters emit the transform runtime expression", () => {
    const node = openApiToIr(
      { type: "number", format: "brand" },
      {
        ...irCtx,
        transformSchema: brandTransform,
      },
    );
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set());
    const zod = getRuntimeAdapter("zod");
    expect(zod.emitNode(node, ctx)).toBe("z.string()");
    const valibot = getRuntimeAdapter("valibot");
    expect(valibot.emitNode(node, ctx)).toBe("z.string()"); // runtime expr is raw passthrough
  });

  test("type-only transform emits per-adapter typed permissive validator", () => {
    const node = openApiToIr(
      { type: "number", format: "brand" },
      {
        ...irCtx,
        transformSchema: (schema) =>
          schema.type === "number" && schema.format === "brand" ? { type: "Foo" } : undefined,
      },
    );
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set());

    const cases: Array<[import("../src/runtimes/types.ts").OutputRuntime, string]> = [
      ["zod", "z.ZodType<Foo>"],
      ["zod3", "z.ZodType<Foo>"],
      ["valibot", "v.GenericSchema<Foo>"],
      ["effect", "Schema<Foo, unknown>"],
      ["effect3", "Schema<Foo, unknown>"],
      ["arktype", 'import("arktype").Type<Foo>'],
      ["typebox", "Type.Unsafe<Foo>"],
      ["typia", "typia.createIs<Foo>()"],
    ];
    for (const [runtime, needle] of cases) {
      const adapter = getRuntimeAdapter(runtime);
      expect(adapter.emitNode(node, ctx)).toContain(needle);
    }
  });

  test("generateFile none-runtime uses transform type", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/thing": {
          get: {
            operationId: "getThing",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      required: ["id"],
                      properties: { id: { type: "number", format: "brand" } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as OpenAPIObject;

    const file = generateFile({
      ...mapOpenApiEndpoints(doc, { transformSchema: brandTransform }),
      transformSchema: brandTransform,
    });
    expect(file).toContain('string & { __brand: "foo" }');
  });

  test("generateFile zod runtime uses transform runtime expression", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/thing": {
          get: {
            operationId: "getThing",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      required: ["id"],
                      properties: { id: { type: "number", format: "brand" } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as OpenAPIObject;

    const file = generateFile({
      ...mapOpenApiEndpoints(doc, { transformSchema: brandTransform }),
      runtime: "zod",
      transformSchema: brandTransform,
    });
    expect(file).toContain("z.string()");
  });

  test("runtimeTypeDeclarations sidecar carries the transform type", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/thing": {
          get: {
            operationId: "getThing",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      required: ["id"],
                      properties: { id: { type: "number", format: "brand" } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as OpenAPIObject;

    const declarations = generateFile({
      ...mapOpenApiEndpoints(doc, { transformSchema: brandTransform }),
      transformSchema: brandTransform,
      runtimeTypeDeclarations: "./x.types.d.ts",
    });
    expect(declarations).toContain('string & { __brand: "foo" }');
  });

  test("component schemas are transformed via ref resolver", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/thing": {
          get: {
            operationId: "getThing",
            responses: {
              "200": {
                description: "ok",
                content: { "application/json": { schema: { $ref: "#/components/schemas/Branded" } } },
              },
            },
          },
        },
      },
      components: {
        schemas: {
          Branded: { type: "object", required: ["id"], properties: { id: { type: "number", format: "brand" } } },
        },
      },
    } as OpenAPIObject;

    const file = generateFile({
      ...mapOpenApiEndpoints(doc, { transformSchema: brandTransform }),
      transformSchema: brandTransform,
    });
    expect(file).toContain('string & { __brand: "foo" }');
  });

  test("config file schema passes transformSchema through", () => {
    const transform: SchemaTransform = () => undefined;
    const result = configFileSchema({ input: "./x.yaml", transformSchema: transform });
    expect(result instanceof type.errors).toBe(false);
    // `result` is a data object; the function survives ArkType validation.
    expect(typeof (result as { transformSchema?: unknown }).transformSchema).toBe("function");
  });

  test("Temporal-style date transform end to end (none runtime)", () => {
    const temporalTransform: SchemaTransform = (schema) => {
      if (schema.type === "string" && schema.format === "date-time") {
        return { type: "Temporal.Instant" };
      }
      return undefined;
    };
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/event": {
          get: {
            operationId: "getEvent",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      required: ["at"],
                      properties: { at: { type: "string", format: "date-time" } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as OpenAPIObject;

    const file = generateFile({
      ...mapOpenApiEndpoints(doc, { transformSchema: temporalTransform }),
      transformSchema: temporalTransform,
    });
    expect(file).toContain("Temporal.Instant");
    expect(file).not.toContain("__reviveTransforms");
  });
});

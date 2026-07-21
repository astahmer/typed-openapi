import { describe, expect, test } from "vitest";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { irToTs } from "../src/schema-ir/ir-to-ts.ts";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { getRuntimeAdapter } from "../src/runtimes/registry.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";

const irCtx = { getRefName: (ref: string) => ref };

describe("transform dates / bigint", () => {
  test("irToTs maps date-time to Date and int64 to bigint when flags on", () => {
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);

    expect(irToTs(dateNode)).toBe("string");
    expect(irToTs(int64Node)).toBe("number");
    expect(irToTs(dateNode, { transformDates: true })).toBe("Date");
    expect(irToTs(int64Node, { transformBigInt: true })).toBe("bigint");
  });

  test("none runtime types + revive helper when transformDates", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/order": {
          get: {
            operationId: "getOrder",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      required: ["shipDate", "id"],
                      properties: {
                        shipDate: { type: "string", format: "date-time" },
                        id: { type: "integer", format: "int64" },
                      },
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
      ...mapOpenApiEndpoints(doc),
      transformDates: true,
      transformBigInt: true,
    });

    expect(file).toContain("shipDate: Date");
    expect(file).toContain("id: bigint");
    expect(file).toContain("__reviveTransforms");
    expect(file).toContain("return __reviveTransforms(json)");
    expect(file).toContain("__BIGINT_KEYS");
    expect(file).toContain("__DATE_KEYS");
  });

  test("zod emit transforms date-time and int64", () => {
    const adapter = getRuntimeAdapter("zod");
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), {
      transformDates: true,
      transformBigInt: true,
    });
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);

    expect(adapter.emitNode(dateNode, ctx)).toContain("Invalid Date");
    expect(adapter.emitNode(dateNode, ctx)).toContain("new Date(s)");
    expect(adapter.emitNode(int64Node, ctx)).toContain("z.coerce.bigint()");
  });

  test("valibot emit transforms date-time", () => {
    const adapter = getRuntimeAdapter("valibot");
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), { transformDates: true });
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    expect(adapter.emitNode(dateNode, ctx)).toContain("Invalid Date");
    expect(adapter.emitNode(dateNode, ctx)).toContain("new Date(s)");
  });

  test("valibot emit transforms int64 to bigint", () => {
    const adapter = getRuntimeAdapter("valibot");
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), { transformBigInt: true });
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);
    expect(adapter.emitNode(int64Node, ctx)).toContain("BigInt(x)");
  });

  test("arktype emit pipes date-time and int64", () => {
    const adapter = getRuntimeAdapter("arktype");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set(), {
      transformDates: true,
      transformBigInt: true,
    });
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);
    expect(adapter.emitNode(dateNode, ctx)).toContain("Invalid Date");
    expect(adapter.emitNode(dateNode, ctx)).toContain("new Date(s as string)");
    expect(adapter.emitNode(int64Node, ctx)).toContain("BigInt(");
  });

  test("zod3 emit transforms date and int64", () => {
    const adapter = getRuntimeAdapter("zod3");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set(), {
      transformDates: true,
      transformBigInt: true,
    });
    const dateOnly = openApiToIr({ type: "string", format: "date" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);
    expect(adapter.emitNode(dateOnly, ctx)).toContain("Invalid Date");
    expect(adapter.emitNode(int64Node, ctx)).toContain("bigint");
  });

  test("typebox emit transforms date-time and int64", () => {
    const adapter = getRuntimeAdapter("typebox");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set(), {
      transformDates: true,
      transformBigInt: true,
    });
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);
    expect(adapter.emitNode(dateNode, ctx)).toContain("Type.Transform");
    expect(adapter.emitNode(dateNode, ctx)).toContain("Invalid Date");
    expect(adapter.emitNode(int64Node, ctx)).toContain("BigInt");
  });

  test("typia types become Date/bigint when flags on", () => {
    const adapter = getRuntimeAdapter("typia");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set(), {
      transformDates: true,
      transformBigInt: true,
    });
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);
    expect(adapter.emitNode(dateNode, ctx)).toContain("Date");
    expect(adapter.emitNode(int64Node, ctx)).toContain("bigint");
  });

  test("none runtime with transformBigInt emits bigint revive helpers", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/x": {
          get: {
            operationId: "getX",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      required: ["id"],
                      properties: { id: { type: "integer", format: "int64" } },
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
      ...mapOpenApiEndpoints(doc),
      transformBigInt: true,
    });

    expect(file).toContain("id: bigint");
    expect(file).toContain("__reviveTransforms");
    expect(file).toContain("__BIGINT_KEYS");
    expect(file).toContain("BigInt(value)");
  });

  test("irToTs maps format date to Date when transformDates", () => {
    const dateOnly = openApiToIr({ type: "string", format: "date" }, irCtx);
    expect(irToTs(dateOnly, { transformDates: true })).toBe("Date");
  });

  test("flags off leave string/number types", () => {
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);
    expect(irToTs(dateNode, { transformDates: false })).toBe("string");
    expect(irToTs(int64Node, { transformBigInt: false })).toBe("number");
  });
});

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
    expect(file).toContain("__reviveDates");
    expect(file).toContain("return __reviveDates(json)");
  });

  test("zod emit transforms date-time and int64", () => {
    const adapter = getRuntimeAdapter("zod");
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), {
      transformDates: true,
      transformBigInt: true,
    });
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    const int64Node = openApiToIr({ type: "integer", format: "int64" }, irCtx);

    expect(adapter.emitNode(dateNode, ctx)).toContain(".transform((s) => new Date(s))");
    expect(adapter.emitNode(int64Node, ctx)).toContain("z.coerce.bigint()");
  });

  test("valibot emit transforms date-time", () => {
    const adapter = getRuntimeAdapter("valibot");
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), { transformDates: true });
    const dateNode = openApiToIr({ type: "string", format: "date-time" }, irCtx);
    expect(adapter.emitNode(dateNode, ctx)).toContain("v.transform((s) => new Date(s))");
  });
});

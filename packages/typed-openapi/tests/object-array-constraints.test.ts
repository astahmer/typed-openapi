import { describe, expect, test } from "vitest";
import { z } from "zod";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";

describe("uniqueItems / minProperties / maxProperties", () => {
  test("zod emits refine for uniqueItems and property counts", () => {
    const node = openApiToIr(
      {
        type: "object",
        minProperties: 1,
        maxProperties: 3,
        properties: {
          tags: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
          },
        },
      },
      { getRefName: (r) => r },
    );
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toContain("uniqueItems");
    expect(src).toContain("minProperties");
    expect(src).toContain("maxProperties");

    const schema = new Function("z", `return ${src}`)(z) as z.ZodType;
    expect(schema.safeParse({ tags: ["a", "b"] }).success).toBe(true);
    expect(schema.safeParse({ tags: ["a", "a"] }).success).toBe(false);
    expect(schema.safeParse({}).success).toBe(false); // minProperties 1
  });
});

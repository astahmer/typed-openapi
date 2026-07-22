import { describe, expect, test } from "vitest";
import * as S from "@effect/schema/Schema";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { effect3Adapter } from "../src/runtimes/effect3/index.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";

describe("effect3 adapter fidelity", () => {
  test("emits not / uniqueItems / minProperties and validates", () => {
    const node = openApiToIr(
      {
        type: "object",
        minProperties: 1,
        properties: {
          tags: { type: "array", items: { type: "string" }, uniqueItems: true },
          role: { not: { type: "string", enum: ["admin"] } },
        },
      },
      { getRefName: (r) => r },
    );
    const src = effect3Adapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toContain("S.filter");
    expect(src).toContain("new Set(arr).size");
    expect(src).toContain("!S.is(");

    const schema = new Function("S", `return ${src}`)(S);
    expect(S.is(schema)({ tags: ["a", "b"], role: "user" })).toBe(true);
    expect(S.is(schema)({ tags: ["a", "a"] })).toBe(false);
    expect(S.is(schema)({ tags: ["a"], role: "admin" })).toBe(false);
  });
});

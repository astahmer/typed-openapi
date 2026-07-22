import { describe, expect, test } from "vitest";
import { Schema } from "effect";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { effectAdapter } from "../src/runtimes/effect/index.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";

describe("effect adapter API", () => {
  test("emits Schema v4 check refinements", () => {
    const node = openApiToIr(
      {
        type: "object",
        required: ["email", "age"],
        properties: {
          email: { type: "string", format: "email", minLength: 3 },
          age: { type: "integer", minimum: 0, maximum: 120 },
          id: { type: "string", format: "uuid" },
        },
      },
      { getRefName: (r) => r },
    );

    const ctx = createEmitCtx(resolveValidationPolicy("strict"));
    const src = effectAdapter.emitNamedSchema("Person", node, ctx);

    expect(src).toContain("Schema.isMinLength(3)");
    expect(src).toContain("Schema.isGreaterThanOrEqualTo(0)");
    expect(src).toContain("Schema.isUUID()");
    expect(src).toContain(".check(");
    expect(src).not.toContain("Schema.minLength");
    expect(src).not.toContain("Schema.UUID");

    // Smoke: evaluate emitted expression shape via hand-built equivalent
    const Person = Schema.Struct({
      email: Schema.String.check(Schema.isPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Schema.isMinLength(3)),
      age: Schema.Int.check(Schema.isGreaterThanOrEqualTo(0), Schema.isLessThanOrEqualTo(120)),
      id: Schema.optional(Schema.String.check(Schema.isUUID())),
    });
    expect(Schema.is(Person)({ email: "a@b.co", age: 1 })).toBe(true);
    expect(Schema.is(Person)({ email: "nope", age: 1 })).toBe(false);
  });
});

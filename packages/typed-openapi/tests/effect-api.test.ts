import { describe, expect, test } from "vitest";
import { Schema } from "effect";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { effectAdapter } from "../src/runtimes/effect/index.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";

describe("effect adapter API", () => {
  test("emits pipe refinements that exist on Schema", () => {
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

    expect(src).toContain("Schema.minLength(3)");
    expect(src).toContain("Schema.greaterThanOrEqualTo(0)");
    expect(src).toContain("Schema.UUID");
    expect(src).not.toContain("Schema.isMinLength");
    expect(src).not.toContain(".check(");

    // Smoke: evaluate emitted expression shape via hand-built equivalent
    const Person = Schema.Struct({
      email: Schema.String.pipe(Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Schema.minLength(3)),
      age: Schema.Int.pipe(Schema.greaterThanOrEqualTo(0), Schema.lessThanOrEqualTo(120)),
      id: Schema.optional(Schema.UUID),
    });
    expect(Schema.is(Person)({ email: "a@b.co", age: 1 })).toBe(true);
    expect(Schema.is(Person)({ email: "nope", age: 1 })).toBe(false);
  });
});

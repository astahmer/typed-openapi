import { describe, expect, test } from "vitest";
import { getRuntimeAdapter } from "../src/runtimes/registry.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import type { SchemaNode } from "../src/schema-ir/types.ts";

const arktype = getRuntimeAdapter("arktype");

const enumGender: SchemaNode = {
  kind: "enum",
  values: ["MALE", "FEMALE", "NON_BINARY", "NOT_SPECIFIED"],
  meta: {},
};

const stringNode: SchemaNode = { kind: "string", constraints: {}, meta: {} };
const nullNode: SchemaNode = { kind: "null", meta: {} };

const ternaryUnion: SchemaNode = {
  kind: "union",
  members: [enumGender, stringNode, nullNode],
  meta: {},
};

const binaryUnion: SchemaNode = {
  kind: "union",
  members: [enumGender, stringNode],
  meta: {},
};

describe("arktype type.module unions", () => {
  test("ternary enum|string|null nests as binary tuples (not flat 5-tuple)", () => {
    const ctx = createEmitCtx(resolveValidationPolicy("loose"), new Set(["Gender"]));
    const src = arktype.emitNamedSchemas!([{ name: "Gender", node: ternaryUnion }], ctx);
    // Nested: [enum, "|", [string, "|", null]] — avoids TS2322 flat 5-elem vs 3-elem.
    expect(src).toContain("type.module({");
    expect(src).toContain('"|", [type("string"), "|", type("null")]');
    expect(src).not.toMatch(/type\.enumerated\([^)]+\), "\|", type\("string"\), "\|", type\("null"\)/);
  });

  test('binary unions stay a single [A, "|", B] tuple', () => {
    const ctx = createEmitCtx(resolveValidationPolicy("loose"), new Set(["OpenGender"]));
    const src = arktype.emitNamedSchemas!([{ name: "OpenGender", node: binaryUnion }], ctx);
    expect(src).toMatch(/\[type\.enumerated\([^)]+\), "\|", type\("string"\)\]/);
  });

  test("outside type.module still uses .or() chains", () => {
    const ctx = createEmitCtx(resolveValidationPolicy("loose"));
    const src = arktype.emitNamedSchemas!([{ name: "Gender", node: ternaryUnion }], ctx);
    expect(src).toContain(".or(");
    expect(src).not.toContain("type.module({");
    expect(src).not.toContain('"|", [');
  });

  test("array of module union wraps items in type(...) before .array()", () => {
    const ctx = createEmitCtx(resolveValidationPolicy("loose"), new Set(["Item", "List"]));
    const item: SchemaNode = {
      kind: "union",
      members: [
        { kind: "literal", value: "a", meta: {} },
        {
          kind: "object",
          properties: { x: stringNode },
          required: ["x"],
          additionalProperties: false,
          constraints: {},
          meta: {},
          partial: false,
        },
      ],
      meta: {},
    };
    const list: SchemaNode = { kind: "array", items: item, constraints: {}, meta: {} };
    const src = arktype.emitNamedSchemas!(
      [
        { name: "Item", node: item },
        { name: "List", node: list },
      ],
      ctx,
    );
    expect(src).toMatch(/type\(\[[\s\S]*\]\)\.array\(\)/);
  });

  test("min+max string length uses 0 <= string <= N form", () => {
    const ctx = createEmitCtx(resolveValidationPolicy("strict"));
    const node: SchemaNode = {
      kind: "string",
      constraints: { minLength: 0, maxLength: 30 },
      meta: {},
    };
    const expr = arktype.emitNode(node, ctx);
    expect(expr).toContain('"0 <= string <= 30"');
    expect(expr).not.toContain("string >= 0 <=");
  });
});

import { describe, expect, test } from "vitest";
import { getRuntimeAdapter } from "../src/runtimes/registry.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
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
    const ctx = createEmitCtx("loose", new Set(["Gender"]));
    const src = arktype.emitNamedSchemas!([{ name: "Gender", node: ternaryUnion }], ctx);
    // Nested: [enum, "|", [string, "|", null]] — avoids TS2322 flat 5-elem vs 3-elem.
    expect(src).toContain("type.module({");
    expect(src).toContain('"|", [type("string"), "|", type("null")]');
    expect(src).not.toMatch(/type\.enumerated\([^)]+\), "\|", type\("string"\), "\|", type\("null"\)/);
  });

  test('binary unions stay a single [A, "|", B] tuple', () => {
    const ctx = createEmitCtx("loose", new Set(["OpenGender"]));
    const src = arktype.emitNamedSchemas!([{ name: "OpenGender", node: binaryUnion }], ctx);
    expect(src).toMatch(/\[type\.enumerated\([^)]+\), "\|", type\("string"\)\]/);
  });

  test("outside type.module still uses .or() chains", () => {
    const ctx = createEmitCtx("loose");
    const src = arktype.emitNamedSchemas!([{ name: "Gender", node: ternaryUnion }], ctx);
    expect(src).toContain(".or(");
    expect(src).not.toContain("type.module({");
    expect(src).not.toContain('"|", [');
  });
});

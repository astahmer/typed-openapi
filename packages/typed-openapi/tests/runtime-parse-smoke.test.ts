import { describe, expect, test } from "vitest";
import { z } from "zod";
import * as v from "valibot";
import { Schema, Exit } from "effect";
import { type } from "arktype";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy, type ValidationPreset } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";
import { valibotAdapter } from "../src/runtimes/valibot/index.ts";
import { effectAdapter } from "../src/runtimes/effect/index.ts";
import { arktypeAdapter } from "../src/runtimes/arktype/index.ts";

const constrainedSchema = {
  type: "object",
  required: ["email", "age", "tags"],
  properties: {
    email: { type: "string", format: "email", minLength: 3, maxLength: 100 },
    age: { type: "integer", minimum: 0, maximum: 150, exclusiveMaximum: true },
    tags: {
      type: "array",
      items: { type: "string", pattern: "^[a-z]+$" },
      minItems: 1,
      maxItems: 10,
    },
    id: { type: "string", format: "uuid" },
  },
} as const;

const good = {
  email: "a@b.co",
  age: 30,
  tags: ["red"],
  id: "550e8400-e29b-41d4-a716-446655440000",
};

const badEmail = { ...good, email: "not-an-email" };
const badAge = { ...good, age: 150 }; // exclusive max
const badTags = { ...good, tags: [] };

const irCtx = { getRefName: (r: string) => r };

describe("runtime parse smoke", () => {
  test("zod: loose accepts bad email; formats/strict reject", () => {
    const node = openApiToIr(constrainedSchema, irCtx);

    const looseSrc = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("loose")));
    const formatsSrc = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("formats")));
    const strictSrc = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));

    // Evaluate emitted expressions in a sandbox with z bound
    const evalZod = (src: string) => new Function("z", `return ${src}`)(z) as z.ZodType;

    expect(evalZod(looseSrc).safeParse(badEmail).success).toBe(true);
    expect(evalZod(formatsSrc).safeParse(badEmail).success).toBe(false);
    expect(evalZod(strictSrc).safeParse(badEmail).success).toBe(false);
    expect(evalZod(strictSrc).safeParse(badAge).success).toBe(false);
    expect(evalZod(strictSrc).safeParse(badTags).success).toBe(false);
    expect(evalZod(strictSrc).safeParse(good).success).toBe(true);
  });

  test("valibot: strict rejects invalid email / empty tags", () => {
    const node = openApiToIr(constrainedSchema, irCtx);
    const src = valibotAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = new Function("v", `return ${src}`)(v);
    expect(v.safeParse(schema, good).success).toBe(true);
    expect(v.safeParse(schema, badEmail).success).toBe(false);
    expect(v.safeParse(schema, badTags).success).toBe(false);
  });

  test("effect: strict Schema.is rejects bad email", () => {
    const node = openApiToIr(constrainedSchema, irCtx);
    const src = effectAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = new Function("Schema", `return ${src}`)(Schema);
    expect(Schema.is(schema)(good)).toBe(true);
    expect(Schema.is(schema)(badEmail)).toBe(false);
    const decoded = Schema.decodeUnknownExit(schema)(badAge);
    expect(Exit.isFailure(decoded)).toBe(true);
  });

  test("arktype: strict rejects bad email", () => {
    const node = openApiToIr(constrainedSchema, irCtx);
    const src = arktypeAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = new Function("type", `return ${src}`)(type);
    expect(schema(good) instanceof type.errors ? schema(good) : null).toBe(null);
    const result = schema(badEmail);
    expect(result instanceof type.errors || (result as any)?.arkKind === "errors").toBe(true);
  });

  test.each([["loose"], ["formats"], ["strict"]] as const)(
    "zod validation preset %s emits distinguishable checks",
    (preset: ValidationPreset) => {
      const node = openApiToIr(constrainedSchema, irCtx);
      const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy(preset)));
      if (preset === "loose") {
        expect(src).not.toContain("z.email()");
        expect(src).not.toContain(".min(");
      }
      if (preset === "formats") {
        expect(src).toContain("z.email()");
        expect(src).not.toContain(".min(3)");
      }
      if (preset === "strict") {
        expect(src).toContain("z.email()");
        expect(src).toContain(".min(3)");
        expect(src).toContain(".min(1)"); // minItems
      }
    },
  );
});

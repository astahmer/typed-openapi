import { describe, expect, test } from "vitest";
import { z } from "zod";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { irToTs } from "../src/schema-ir/ir-to-ts.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";

const irCtx = { getRefName: (r: string) => r };

describe("advanced OpenAPI keywords", () => {
  test("not → IR + zod refine rejects matching values", () => {
    const node = openApiToIr({ not: { type: "string", enum: ["forbidden"] } }, irCtx);
    expect(node.kind).toBe("not");
    expect(irToTs(node)).toBe("unknown");

    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = new Function("z", `return ${src}`)(z) as z.ZodType;
    expect(schema.safeParse("ok").success).toBe(true);
    expect(schema.safeParse("forbidden").success).toBe(false);
  });

  test("discriminator → z.discriminatedUnion", () => {
    const node = openApiToIr(
      {
        oneOf: [
          {
            type: "object",
            required: ["kind", "meow"],
            properties: {
              kind: { type: "string", enum: ["cat"] },
              meow: { type: "boolean" },
            },
          },
          {
            type: "object",
            required: ["kind", "bark"],
            properties: {
              kind: { type: "string", enum: ["dog"] },
              bark: { type: "boolean" },
            },
          },
        ],
        discriminator: { propertyName: "kind" },
      },
      irCtx,
    );
    expect(node.kind).toBe("union");
    if (node.kind === "union") {
      expect(node.discriminator?.propertyName).toBe("kind");
    }
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("loose")));
    expect(src).toContain('z.discriminatedUnion("kind"');
    const schema = new Function("z", `return ${src}`)(z) as z.ZodType;
    expect(schema.safeParse({ kind: "cat", meow: true }).success).toBe(true);
    expect(schema.safeParse({ kind: "dog", bark: true }).success).toBe(true);
  });

  test("discriminator.mapping remaps wire values via .extend", () => {
    const irCtxNamed = {
      getRefName: (ref: string) => ref.replace("#/components/schemas/", ""),
    };
    const node = openApiToIr(
      {
        oneOf: [{ $ref: "#/components/schemas/Dog" }, { $ref: "#/components/schemas/Cat" }],
        discriminator: {
          propertyName: "petType",
          mapping: {
            canine: "#/components/schemas/Dog",
            feline: "#/components/schemas/Cat",
          },
        },
      },
      irCtxNamed,
    );
    expect(node.kind).toBe("union");
    if (node.kind === "union") {
      expect(node.discriminator?.mapping?.canine).toBe("#/components/schemas/Dog");
    }

    const Dog = z.object({ petType: z.literal("Dog"), bark: z.boolean() });
    const Cat = z.object({ petType: z.literal("Cat"), meow: z.boolean() });
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("loose")));
    expect(src).toContain('.extend({ petType: z.literal("canine") })');
    expect(src).toContain('.extend({ petType: z.literal("feline") })');

    const schema = new Function("z", "Dog", "Cat", `return ${src}`)(z, Dog, Cat) as z.ZodType;
    expect(schema.safeParse({ petType: "canine", bark: true }).success).toBe(true);
    expect(schema.safeParse({ petType: "feline", meow: true }).success).toBe(true);
    expect(schema.safeParse({ petType: "Dog", bark: true }).success).toBe(false);
  });

  test("contentEncoding base64 maps like format byte under formats+", () => {
    const node = openApiToIr({ type: "string", contentEncoding: "base64" }, irCtx);
    const loose = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("loose")));
    const formats = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("formats")));
    expect(loose).toBe("z.string()");
    expect(formats).toContain("z.base64()");
  });
});

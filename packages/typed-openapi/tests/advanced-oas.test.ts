import { describe, expect, test } from "vitest";
import { z } from "zod";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { irToTs } from "../src/schema-ir/ir-to-ts.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";
import { effectAdapter } from "../src/runtimes/effect/index.ts";
import { valibotAdapter } from "../src/runtimes/valibot/index.ts";
import { arktypeAdapter } from "../src/runtimes/arktype/index.ts";
import { typiaAdapter } from "../src/runtimes/typia/index.ts";

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

  test("discriminator + null member peels null out of discriminatedUnion", () => {
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
          { type: "null" },
        ],
        discriminator: { propertyName: "kind" },
      },
      irCtx,
    );
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("loose")));
    expect(src).toContain('z.discriminatedUnion("kind"');
    expect(src).toContain("z.union([");
    expect(src).toContain("z.null()");
    // null must not be a discUnion member
    expect(src).not.toMatch(/discriminatedUnion\([^)]*z\.null\(\)/);
    const schema = new Function("z", `return ${src}`)(z) as z.ZodType;
    expect(schema.safeParse({ kind: "cat", meow: true }).success).toBe(true);
    expect(schema.safeParse(null).success).toBe(true);
    expect(schema.safeParse({ kind: "bird" }).success).toBe(false);
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
      expect(node.discriminator?.mapping?.["canine"]).toBe("#/components/schemas/Dog");
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

  test("discriminator.mapping emit for effect / valibot / arktype", () => {
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
    const ctx = createEmitCtx(resolveValidationPolicy("loose"));
    const effectSrc = effectAdapter.emitNode(node, ctx);
    expect(effectSrc).toContain('Schema.Literal("canine")');
    expect(effectSrc).toContain("Schema.extend");
    const valibotSrc = valibotAdapter.emitNode(node, ctx);
    expect(valibotSrc).toContain('v.literal("canine")');
    expect(valibotSrc).toContain("v.intersect");
    const arkSrc = arktypeAdapter.emitNode(node, ctx);
    expect(arkSrc).toContain('"canine"');
    expect(arkSrc).toContain(".and(type(");
  });

  test("arktype not narrow rejects matching values", async () => {
    const { type } = await import("arktype");
    const node = openApiToIr({ not: { type: "string", enum: ["forbidden"] } }, irCtx);
    const src = arktypeAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toContain(".narrow(");
    expect(src).toContain('mustBe("not")');
    const schema = new Function("type", `return ${src}`)(type);
    expect(schema.allows("ok")).toBe(true);
    expect(schema.allows("forbidden")).toBe(false);
  });

  test("typia emit includes tags for string constraints", () => {
    const node = openApiToIr({ type: "string", minLength: 2, maxLength: 8, format: "email" }, irCtx);
    const src = typiaAdapter.emitNamedSchema("Email", node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toContain("tags.MinLength<2>");
    expect(src).toContain("tags.MaxLength<8>");
    expect(src).toContain('tags.Format<"email">');
    expect(typiaAdapter.imports()).toContain("{ tags }");
  });

  test("contentEncoding base64 maps like format byte under formats+", () => {
    const node = openApiToIr({ type: "string", contentEncoding: "base64" }, irCtx);
    const loose = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("loose")));
    const formats = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("formats")));
    expect(loose).toBe("z.string()");
    expect(formats).toContain("z.base64()");
  });
});

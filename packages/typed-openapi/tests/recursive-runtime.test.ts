import { describe, expect, test } from "vitest";
import { z } from "zod";
import { z as z3 } from "zod/v3";
import { Schema } from "effect";
import * as effect3Schema from "@effect/schema/Schema";
import * as v from "valibot";
import { Type as TypeBox, type TSchema } from "@sinclair/typebox";
import { Value as TypeBoxValue } from "@sinclair/typebox/value";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";
import { findRecursiveSchemaNames } from "../src/runtimes/shared.ts";
import { emitRuntimeFile } from "../src/runtimes/emit-runtime-file.ts";
import { getRuntimeAdapter } from "../src/runtimes/registry.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";

const fixturePath = `${__dirname}/samples/recursive.openapi.yaml`;

const stripModuleNoise = (src: string) =>
  src
    .replace(/import[\s\S]*?from\s+["'][^"']+["'];?\s*/g, "")
    .replace(/^export type [^\n]*(?:\n|$)/gm, "")
    .replace(/export interface [\s\S]*?\}\s*/g, "")
    .replace(/: z\.ZodType<[^>]+>/g, "")
    .replace(/: v\.GenericSchema<[^>]+>/g, "")
    .replace(/: Schema\.Schema<[^>]+>/g, "")
    .replace(/: S\.Schema<[^>]+>/g, "")
    .replace(/\bexport\s+/g, "");

const forwardReferenceDoc = {
  openapi: "3.0.3",
  info: { title: "forward reference", version: "1" },
  paths: {},
  components: {
    schemas: {
      First: {
        type: "object",
        required: ["second"],
        properties: { second: { $ref: "#/components/schemas/Second" } },
      },
      Second: { type: "object", properties: { value: { type: "string" } } },
    },
  },
} as OpenAPIObject;

const reversedNamedSchemas = () => {
  const ctx = mapOpenApiEndpoints(forwardReferenceDoc);
  return {
    ctx,
    namedSchemas: ctx.refs
      .getOrderedSchemas()
      .filter(([, infos]) => infos.kind === "schemas")
      .map(([node, infos]) => ({ name: infos.normalized, node }))
      .reverse(),
  };
};

describe("recursive runtime schemas", async () => {
  const openApiDoc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
  const ctx = mapOpenApiEndpoints(openApiDoc);

  test("detects recursive component names", () => {
    const irCtx = { getRefName: (ref: string) => ctx.refs.getInfosByRef(ref).normalized };
    const named = ctx.refs
      .getOrderedSchemas()
      .filter(([, infos]) => infos.kind === "schemas")
      .map(([, infos]) => ({
        name: infos.normalized,
        node: openApiToIr(ctx.refs.get(infos.ref), irCtx),
      }));
    const recursive = findRecursiveSchemaNames(named);
    expect(recursive.has("Category")).toBe(true);
    expect(recursive.has("Node")).toBe(true);
  });

  test("zod emits z.lazy and parses nested trees", () => {
    const src = generateFile({ ...ctx, runtime: "zod", schemasOnly: true, validation: "loose" });
    expect(src).toContain("z.lazy(() =>");
    expect(src).toMatch(/export const Category(?:: z\.ZodType<Category>)? = z\.lazy/);

    const body = stripModuleNoise(src);
    const Category = new Function("z", `${body}\nreturn Category;`)(z) as z.ZodType;

    const tree = { name: "root", children: [{ name: "child", children: [] }] };
    expect(Category.safeParse(tree).success).toBe(true);
    expect(Category.safeParse({ name: 1 }).success).toBe(false);
  });

  test("zod runtime sidecars keep recursive schemas lazy at module load", () => {
    const src = generateFile({
      ...ctx,
      runtime: "zod",
      schemasOnly: true,
      validation: "loose",
      runtimeTypeDeclarations: "./recursive.types.js",
    });
    expect(src).toContain("export type Category = __TypedOpenapi.Schemas.Category;");
    expect(src).toMatch(/export const Category = z\.lazy\(\(\) =>/);

    const body = stripModuleNoise(src);
    const Category = new Function("z", `${body}\nreturn Category;`)(z) as z.ZodType;
    expect(Category.safeParse({ name: "root", children: [{ name: "child", children: [] }] }).success).toBe(true);
  });

  test("zod runtime sidecars load mutually recursive schemas", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "mutual recursion", version: "1" },
      paths: {},
      components: {
        schemas: {
          Left: {
            type: "object",
            properties: { right: { $ref: "#/components/schemas/Right" } },
          },
          Right: {
            type: "object",
            properties: { left: { $ref: "#/components/schemas/Left" } },
          },
        },
      },
    } as OpenAPIObject;
    const generated = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "zod",
      schemasOnly: true,
      runtimeTypeDeclarations: "./mutual.types.js",
    });

    const body = stripModuleNoise(generated);
    const { Left, Right } = new Function("z", `${body}\nreturn { Left, Right };`)(z) as {
      Left: z.ZodType;
      Right: z.ZodType;
    };
    expect(Left.safeParse({ right: { left: { right: {} } } }).success).toBe(true);
    expect(Right.safeParse({ left: { right: { left: {} } } }).success).toBe(true);
  });

  test("zod runtime sidecars load nullable recursive schemas", () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "nullable recursion", version: "1" },
      paths: {},
      components: {
        schemas: {
          Node: {
            type: "object",
            nullable: true,
            required: ["value"],
            properties: {
              value: { type: "string" },
              child: { $ref: "#/components/schemas/Node" },
            },
          },
        },
      },
    } as OpenAPIObject;
    const generated = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "zod",
      schemasOnly: true,
      runtimeTypeDeclarations: "./nullable.types.js",
    });

    const body = stripModuleNoise(generated);
    const { Node } = new Function("z", `${body}\nreturn { Node };`)(z) as { Node: z.ZodType };
    expect(Node.safeParse(null).success).toBe(true);
    expect(Node.safeParse({ value: "root", child: { value: "leaf" } }).success).toBe(true);
  });

  test("zod defers a later schema reference even when declaration order is supplied externally", () => {
    const { ctx, namedSchemas } = reversedNamedSchemas();
    const generated = emitRuntimeFile({
      adapter: getRuntimeAdapter("zod"),
      refs: ctx.refs,
      endpointList: [],
      validation: resolveValidationPolicy("strict"),
      schemasOnly: true,
      namedSchemas,
      typeNamespace: "__TypedOpenapi",
    });

    expect(generated).toContain("second: z.lazy(() => Second)");
    const body = stripModuleNoise(generated);
    const { First } = new Function("z", `${body}\nreturn { First };`)(z) as { First: z.ZodType };
    expect(First.safeParse({ second: { value: "ok" } }).success).toBe(true);
  });

  test.each(["zod", "zod3", "effect", "effect3", "valibot", "arktype", "typebox"] as const)(
    "%s defers externally reversed forward references at runtime",
    async (runtime) => {
      const { ctx, namedSchemas } = reversedNamedSchemas();
      const generated = emitRuntimeFile({
        adapter: getRuntimeAdapter(runtime),
        refs: ctx.refs,
        endpointList: [],
        validation: resolveValidationPolicy("strict"),
        schemasOnly: true,
        namedSchemas,
        typeNamespace: "__TypedOpenapi",
      });
      const body = stripModuleNoise(generated);

      const First =
        runtime === "zod"
          ? new Function("z", `${body}\nreturn First;`)(z)
          : runtime === "zod3"
            ? new Function("z", `${body}\nreturn First;`)(z3)
            : runtime === "effect"
              ? new Function("Schema", `${body}\nreturn First;`)(Schema)
              : runtime === "effect3"
                ? new Function("S", `${body}\nreturn First;`)(effect3Schema)
                : runtime === "valibot"
                  ? new Function("v", `${body}\nreturn First;`)(v)
                  : runtime === "arktype"
                    ? new Function("type", `${body}\nreturn First;`)((await import("arktype")).type)
                    : new Function("Type", `${body}\nreturn First;`)(TypeBox);

      if (runtime === "zod" || runtime === "zod3") {
        expect(First.safeParse({ second: { value: "ok" } }).success).toBe(true);
      } else if (runtime === "effect" || runtime === "effect3") {
        const schemaNamespace = runtime === "effect" ? Schema : effect3Schema;
        expect(schemaNamespace.is(First)({ second: { value: "ok" } })).toBe(true);
      } else if (runtime === "valibot") {
        expect(v.safeParse(First, { second: { value: "ok" } }).success).toBe(true);
      } else if (runtime === "arktype") {
        expect(First({ second: { value: "ok" } }).second.value).toBe("ok");
      } else {
        expect(TypeBoxValue.Check(First, { second: { value: "ok" } })).toBe(true);
      }
    },
  );

  test("typebox modules keep mutually recursive schemas as real runtime refs", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "mutual recursion", version: "1" },
      paths: {},
      components: {
        schemas: {
          Left: {
            type: "object",
            properties: { right: { $ref: "#/components/schemas/Right" } },
          },
          Right: {
            type: "object",
            properties: { left: { $ref: "#/components/schemas/Left" } },
          },
        },
      },
    } as OpenAPIObject;
    const generated = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "typebox",
      schemasOnly: true,
      validation: "loose",
    });

    expect(generated).toContain("Type.Module({");
    expect(generated).toContain('Type.Ref("Right")');
    const body = stripModuleNoise(generated);
    const { Left, Right } = new Function("Type", `${body}\nreturn { Left, Right };`)(TypeBox) as {
      Left: TSchema;
      Right: TSchema;
    };
    expect(TypeBoxValue.Check(Left, { right: { left: { right: {} } } })).toBe(true);
    expect(TypeBoxValue.Check(Right, { left: { right: { left: {} } } })).toBe(true);
  });

  test("effect emits Schema.suspend", () => {
    const src = generateFile({ ...ctx, runtime: "effect", schemasOnly: true, validation: "loose" });
    expect(src).toContain("Schema.suspend(() =>");
    const Category = new Function("Schema", `${stripModuleNoise(src)}\nreturn Category;`)(Schema);
    expect(Schema.is(Category)({ name: "root", children: [{ name: "a" }] })).toBe(true);
  });

  test("valibot emits v.lazy", () => {
    const src = generateFile({ ...ctx, runtime: "valibot", schemasOnly: true, validation: "loose" });
    expect(src).toContain("v.lazy(() =>");
    const Category = new Function("v", `${stripModuleNoise(src)}\nreturn Category;`)(v);
    expect(v.safeParse(Category, { name: "root", children: [] }).success).toBe(true);
  });

  test("arktype emits type.module and parses nested trees", async () => {
    const { type } = await import("arktype");
    const src = generateFile({ ...ctx, runtime: "arktype", schemasOnly: true, validation: "loose" });
    expect(src).toContain("type.module({");
    expect(src).toContain('"Category[]"');

    const body = stripModuleNoise(src).replace(/const __schemas/, "var __schemas");
    const Category = new Function("type", `${body}\nreturn Category;`)(type);
    const tree = { name: "root", children: [{ name: "child" }] };
    expect(Category(tree).name).toBe("root");
    expect(Category({ name: 1 }).name).toBeUndefined();
  });
});

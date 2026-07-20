import { describe, expect, test } from "vitest";
import { z } from "zod";
import { Schema } from "effect";
import * as v from "valibot";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";
import { findRecursiveSchemaNames } from "../src/runtimes/shared.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";

const fixturePath = `${__dirname}/samples/recursive.openapi.yaml`;

const stripModuleNoise = (src: string) =>
  src
    .replace(/import[\s\S]*?from\s+["'][^"']+["'];?\s*/g, "")
    .replace(/export type [\s\S]*?;\s*/g, "")
    .replace(/\bexport\s+/g, "");

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
    expect(src).toMatch(/export const Category = z\.lazy/);

    const body = stripModuleNoise(src);
    const Category = new Function("z", `${body}\nreturn Category;`)(z) as z.ZodType;

    const tree = { name: "root", children: [{ name: "child", children: [] }] };
    expect(Category.safeParse(tree).success).toBe(true);
    expect(Category.safeParse({ name: 1 }).success).toBe(false);
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
});

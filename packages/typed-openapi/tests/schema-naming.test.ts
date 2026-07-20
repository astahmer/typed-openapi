import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

const fixturePath = `${__dirname}/samples/filter-fixture.openapi.yaml`;
const recursivePath = `${__dirname}/samples/recursive.openapi.yaml`;

describe("schemaNaming prefer-inline", () => {
  test("inlines single-use Tag into Pet; keeps Pet named", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      endpointPatterns: ["/pets"],
      schemaNaming: "prefer-inline",
      schemasOnly: true,
      includeClient: false,
    });
    expect(src).toContain("export type Pet");
    expect(src).not.toContain("export type Tag");
    // Tag shape inlined into Pet
    expect(src).toMatch(/Pet\s*=/);
    expect(src).toContain("tag?:");
  });

  test("recursive schemas stay named under prefer-inline", async () => {
    const doc = (await SwaggerParser.parse(recursivePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      schemaNaming: "prefer-inline",
      schemasOnly: true,
      includeClient: false,
    });
    expect(src).toContain("export type Category");
    expect(src).toContain("export type Node");
  });

  test("shouldNameSchema can force naming a single-use schema", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      endpointPatterns: ["/pets"],
      schemaNaming: "prefer-inline",
      shouldNameSchema: ({ name }) => name === "Tag",
      schemasOnly: true,
      includeClient: false,
    });
    expect(src).toContain("export type Tag");
  });
});

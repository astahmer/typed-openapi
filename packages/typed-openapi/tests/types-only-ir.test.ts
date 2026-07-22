import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

describe("types-only IR emission", () => {
  test("named schemas and endpoint refs come from Schema IR", async () => {
    const openApiDoc = (await SwaggerParser.parse(`${__dirname}/samples/petstore.yaml`)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);
    const out = generateFile({ ...ctx, runtime: "none", schemasOnly: false, includeClient: false });

    expect(out).toContain("export namespace Schemas");
    expect(out).toContain("export type Pet =");
    // Endpoint responses should prefix component refs
    expect(out).toContain("Schemas.Pet");
    // Enums from IR
    expect(out).toMatch(/"available"\s*\|\s*"pending"\s*\|\s*"sold"/);
  });

  test("jsdoc descriptions flow from IR meta", async () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {},
      components: {
        schemas: {
          Thing: {
            type: "object",
            description: "A thing",
            properties: {
              name: { type: "string", description: "The name" },
            },
          },
        },
      },
    } as unknown as OpenAPIObject;

    const ctx = mapOpenApiEndpoints(doc);
    const out = generateFile({ ...ctx, runtime: "none", jsdoc: true, schemasOnly: true });
    expect(out).toContain("A thing");
    expect(out).toContain("The name");
  });
});

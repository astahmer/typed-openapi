import { it, expect } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";

import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { prettify } from "../src/format.ts";

it("should use custom success status codes", async () => {
  const openApiDoc: OpenAPIObject = {
    openapi: "3.0.0",
    info: { title: "Test API", version: "1.0.0" },
    paths: {
      "/test": {
        get: {
          operationId: "getTest",
          responses: {
            200: {
              description: "Success",
              content: {
                "application/json": {
                  schema: { type: "object", properties: { message: { type: "string" } } },
                },
              },
            },
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: { type: "object", properties: { id: { type: "string" } } },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: { type: "object", properties: { error: { type: "string" } } },
                },
              },
            },
          },
        },
      },
    },
  };

  const endpoints = mapOpenApiEndpoints(openApiDoc);

  // Test with default success status codes (should include 200 and 201)
  const defaultGenerated = await prettify(generateFile(endpoints));
  expect(defaultGenerated).toContain("export type SuccessStatusCode =");
  expect(defaultGenerated).toContain("200, 201, 202");

  // Test with custom success status codes (only 200)
  const customGenerated = await prettify(
    generateFile({
      ...endpoints,
      successStatusCodes: [200] as const,
    }),
  );

  // Should only contain 200 in the StatusCode type
  expect(customGenerated).toContain("const successStatusCodes = [200] as const");
  expect(customGenerated).not.toContain("const successStatusCodes = [201] as const");

  // The ApiResponse type should use the custom StatusCode
  expect(customGenerated).toContain("TStatusCode extends SuccessStatusCode");
});

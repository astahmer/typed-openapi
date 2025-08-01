import { it, expect } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";

import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { prettify } from "../src/format.ts";

it("should exclude API client when includeClient is false", async () => {
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
          },
        },
      },
    },
  };

  const endpoints = mapOpenApiEndpoints(openApiDoc);

  // Test with includeClient: false
  const withoutClient = await prettify(
    generateFile({
      ...endpoints,
      includeClient: false,
    }),
  );

  // Should not contain ApiClientTypes or ApiClient sections
  expect(withoutClient).not.toContain("// <ApiClientTypes>");
  expect(withoutClient).not.toContain("// <ApiClient>");
  expect(withoutClient).not.toContain("export class ApiClient");
  expect(withoutClient).not.toContain("export type EndpointParameters");
  expect(withoutClient).not.toContain("export type SuccessStatusCode");
  expect(withoutClient).not.toContain("export type TypedApiResponse");

  // Should still contain schemas and endpoints
  expect(withoutClient).toContain("export namespace Schemas");
  expect(withoutClient).toContain("export namespace Endpoints");
  expect(withoutClient).toContain("export type EndpointByMethod");

  // Test with includeClient: true (default)
  const withClient = await prettify(
    generateFile({
      ...endpoints,
      includeClient: true,
    }),
  );

  // Should contain ApiClientTypes and ApiClient sections
  expect(withClient).toContain("// <ApiClientTypes>");
  expect(withClient).toContain("// <ApiClient>");
  expect(withClient).toContain("export class ApiClient");
  expect(withClient).toContain("export type EndpointParameters");
  expect(withClient).toContain("export type SuccessStatusCode");
  expect(withClient).toContain("export type TypedApiResponse");
});

import { describe, test } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";

import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

describe("issue with 4XX response status code keys", () => {
  test("quotes 4XX response keys in generated output", async ({ expect }) => {
    const openApiDoc: OpenAPIObject = {
      openapi: "3.0.3",
      info: { title: "Test API Spec", version: "1.0.0" },
      paths: {
        "/test": {
          get: {
            operationId: "getTest",
            responses: {
              "200": {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                      type: "string",
                    },
                  },
                },
              },
              "4XX": {
                description: "Client error",
              },
            },
          },
        },
      },
    };

    const generated = generateFile(mapOpenApiEndpoints(openApiDoc));

    expect(generated).toContain("200: string");
    expect(generated).toContain('"4XX": unknown');
    expect(generated).not.toContain("4XX: unknown");
  });
});

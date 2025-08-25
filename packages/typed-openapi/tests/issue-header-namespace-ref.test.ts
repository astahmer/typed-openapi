import { describe, test } from "vitest";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../src/generator.ts";
import { prettify } from "../src/pretty.export.ts";

const openApiDoc: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Test API Spec", version: "1.0.0" },
  paths: {
    "/test": {
      get: {
        operationId: "getTest",
        responses: {
          "200": {
            description: "Response",
            content: {
              "application/json": {
                schema: {
                  type: "string"
                },
              },
            },
            headers: {
              "X-RateLimit-Limit": {
                $ref: "#/components/headers/x-rate-limit-limit",
              },
              "X-RateLimit-Remaining": {
                $ref: "#/components/headers/x-rate-limit-remaining",
              },
              "X-RateLimit-Reset": {
                $ref: "#/components/headers/x-rate-limit-reset",
              },
            },
          },
        },
      },
    },
  },
  components: {
    headers: {
      "x-rate-limit-limit": {
        example: 5000,
        schema: {
          type: "integer",
        },
      },
      "x-rate-limit-remaining": {
        example: 4999,
        schema: {
          type: "integer",
        },
      },
      "x-rate-limit-reset": {
        example: 1590701888,
        schema: {
          type: "integer",
          format: "timestamp",
        },
      },
    },
  },
};

describe("namespaced header ref is wrong", () => {
  test("should not resolve response as unknown", async ({ expect }) => {
    const result = mapOpenApiEndpoints(openApiDoc);
    // Find the endpoint by alias (see getAlias logic: 'get_GetTest')
    const endpoint = result.endpointList.find((e) => e.meta.alias === "get_GetTest");
    expect(endpoint).toBeDefined();

    const response200 = endpoint?.responseHeaders?.["200"];
    expect(response200?.value).toBe('{ "X-RateLimit-Limit": number, "X-RateLimit-Remaining": number, "X-RateLimit-Reset": number }')


    const file = generateFile(result);
    const output = await prettify(file);
    expect(output).toContain(`{ "X-RateLimit-Limit": number; "X-RateLimit-Remaining": number; "X-RateLimit-Reset": number }`);
  });
});

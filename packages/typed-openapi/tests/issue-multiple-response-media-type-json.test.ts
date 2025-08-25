import { describe, test } from "vitest";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import type { OpenAPIObject } from "openapi3-ts/oas31";

const openApiDoc: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Test API Spec", version: "1.0.0" },
  paths: {
    "/test": {
      get: {
        operationId: "getTest",
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Response" },
                },
              },
              "application/vnd.github.v3.star+json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      starred_at: { type: "string", format: "date-time" },
                      repo: { $ref: "#/components/schemas/Response" },
                    },
                  },
                },
              },
              "application/idk-some-other+ignored": {
                schema: { type: "boolean" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Response: {
        type: "object",
        properties: {
          id: { type: "integer" },
          name: { type: "string" },
        },
      },
    },
  },
};

describe("issue with multiple valid response media types", () => {
  test("should not resolve response as unknown", ({ expect }) => {
    const result = mapOpenApiEndpoints(openApiDoc);
    const endpoint = result.endpointList.find((e) => e.meta.alias === "get_GetTest");
    expect(endpoint).toBeDefined();

    const response200 = endpoint?.responses?.["200"];
    expect(response200).toMatchObject({ type: "union", value: "(Array<Response> | Array<Partial<{ starred_at: string, repo: Response }>>)" });
  });
});

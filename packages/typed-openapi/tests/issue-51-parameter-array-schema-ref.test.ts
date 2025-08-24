import { describe, test } from "vitest";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";
import { prettify } from "../src/format.ts";


import type { OpenAPIObject, ParameterObject } from "openapi3-ts/oas31";

const minimalSpec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Test API Spec", version: "1.0.0" },
  components: {
    schemas: {
      Test: {
        enum: ["FOO", "BAR"],
        type: "string",
      },
    },
  },
  paths: {
    "/test": {
      get: {
        operationId: "getTest",
        parameters: [
          {
            in: "query",
            name: "test",
            required: false,
            schema: {
              type: "array",
              items: { $ref: "#/components/schemas/Test" },
            },
          } as ParameterObject,
        ],
        responses: {
          "200": {
            description: "",
            content: {
              "application/json": { schema: {} },
            },
          },
        },
      },
    },
  },
  servers: [{ url: "https://api.example.com" }],
};

describe("issue #51 - Schemas namespace missing for schema refs within parameter arrays", () => {
  test("parameter array $ref should use Schemas namespace", async ({ expect }) => {
    const file = generateFile(mapOpenApiEndpoints(minimalSpec));
    const output = await prettify(file);
    expect(output).toContain("query: Partial<{ test: Array<Schemas.Test> }>");
    // This should fail with current code, as it produces Array<Test> instead of Array<Schemas.Test>
  });
});

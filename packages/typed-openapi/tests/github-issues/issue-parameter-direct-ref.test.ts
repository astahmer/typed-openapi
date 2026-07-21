import { describe, test } from "vitest";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { generateFile } from "../../src/generator.ts";
import { prettify } from "../../src/format.ts";

import type { OpenAPIObject, ParameterObject } from "openapi3-ts/oas31";

const spec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Test", version: "1.0.0" },
  components: {
    schemas: {
      Status: {
        type: "string",
        enum: ["active", "inactive"],
      },
    },
  },
  paths: {
    "/items": {
      get: {
        operationId: "getItems",
        parameters: [
          {
            in: "query",
            name: "status",
            required: false,
            schema: { $ref: "#/components/schemas/Status" },
          } as ParameterObject,
        ],
        responses: {
          "200": {
            description: "",
            content: { "application/json": { schema: {} } },
          },
        },
      },
    },
  },
};

describe("parameter direct $ref should reference named schema, not inline it", () => {
  test("query parameter with $ref schema uses Schemas namespace", async ({ expect }) => {
    const file = generateFile(mapOpenApiEndpoints(spec));
    const output = await prettify(file);
    expect(output).toContain("query?: Partial<{ status: Schemas.Status }>;");
    expect(output).not.toContain('z.literal("active")');
  });
});

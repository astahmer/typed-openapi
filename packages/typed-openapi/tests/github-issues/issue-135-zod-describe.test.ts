import { describe, test, expect } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { generateFile } from "../../src/generator.ts";
import { prettify } from "../../src/format.ts";

const spec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Issue 135 API", version: "1.0.0" },
  paths: {
    "/pets": {
      get: {
        operationId: "getPets",
        parameters: [
          {
            in: "query",
            name: "limit",
            schema: {
              type: "integer",
              description: "Maximum number of pets",
            },
          },
        ],
        responses: {
          "200": {
            description: "",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Pets" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Pets: {
        type: "array",
        description: "A list of pets",
        items: { $ref: "#/components/schemas/Pet" },
      },
      Pet: {
        type: "object",
        description: "A pet",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            description: "The pet's name",
          },
        },
      },
    },
  },
};

describe("issue #135 - z.describe() from OpenAPI descriptions", () => {
  test.each(["zod", "zod3"] as const)(
    "emits .describe() for %s when includeDescriptions is true",
    async (runtime) => {
      const file = generateFile({
        ...mapOpenApiEndpoints(spec),
        runtime,
        includeDescriptions: true,
        schemasOnly: true,
      });
      const output = await prettify(file);

      expect(output).toContain('.describe("A list of pets")');
      expect(output).toContain('.describe("A pet")');
      expect(output).toContain('.describe("The pet\'s name")');
      expect(output).not.toContain('.describe("Maximum number of pets")');
    },
    30_000,
  );

  test.each(["zod", "zod3"] as const)(
    "omits .describe() for %s by default",
    async (runtime) => {
      const file = generateFile({
        ...mapOpenApiEndpoints(spec),
        runtime,
        schemasOnly: true,
      });
      const output = await prettify(file);

      expect(output).not.toContain(".describe(");
    },
    30_000,
  );
});

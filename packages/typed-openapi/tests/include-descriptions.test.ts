import { it, expect } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";

import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { prettify } from "../src/format.ts";

const openApiDoc: OpenAPIObject = {
  openapi: "3.0.0",
  info: { title: "Test API", version: "1.0.0" },
  components: {
    schemas: {
      User: {
        description: "A user record",
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
            description: "Display name",
          },
        },
      },
    },
  },
};

it("emits description comments only when enabled", async () => {
  const withDescriptions = await prettify(
    generateFile({
      ...mapOpenApiEndpoints(openApiDoc),
      schemasOnly: true,
      jsdoc: true,
    }),
  );

  expect(withDescriptions).toMatch(/\/\*\*[\s\S]*?A user record[\s\S]*?\*\/\n\s*export type User =/);
  expect(withDescriptions).toMatch(/\/\*\*[\s\S]*?Display name[\s\S]*?\*\/\n\s*name: string;/);

  const withoutDescriptions = await prettify(
    generateFile({
      ...mapOpenApiEndpoints(openApiDoc),
      schemasOnly: true,
    }),
  );

  expect(withoutDescriptions).not.toMatch(/A user record/);
  expect(withoutDescriptions).not.toMatch(/Display name/);
});

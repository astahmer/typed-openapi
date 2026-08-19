import { it, expect } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";

import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { prettify } from "../src/format.ts";

const openApiDoc: OpenAPIObject = {
  openapi: "3.0.0",
  info: { title: "Test API", version: "1.0.0" },
  paths: {
    "/test": {
      get: {
        operationId: "getTest",
        responses: { 200: { description: "Success" } },
      },
    },
    "/old-test": {
      get: {
        operationId: "getOldTest",
        deprecated: true,
        responses: { 200: { description: "Success" } },
      },
    },
  },
  components: {
    schemas: {
      Example: {
        type: "object",
        required: ["oldField", "newField"],
        properties: {
          oldField: { type: "string", deprecated: true, description: "Use newField instead." },
          newField: { type: "string" },
        },
      },
      OldExample: {
        type: "object",
        deprecated: true,
        properties: { value: { type: "string" } },
      },
    },
  },
};

it("keeps deprecated schemas/properties tagged but drops deprecated endpoints by default", async () => {
  const endpoints = mapOpenApiEndpoints(openApiDoc);
  const output = await prettify(generateFile({ ...endpoints, jsdoc: true }));

  expect(output).toContain("oldField");
  expect(output).toContain("@deprecated");
  expect(output).toContain("export type OldExample");
  expect(output).not.toContain('"/old-test"');
});

it("excludes deprecated endpoints unless opted in via includeDeprecated", async () => {
  const included = mapOpenApiEndpoints(openApiDoc, { includeDeprecatedEndpoints: true });
  const output = await prettify(generateFile({ ...included, includeDeprecated: ["endpoints"] }));

  expect(output).toContain('"/old-test"');
});

it("drops deprecated schemas/properties entirely when not listed in includeDeprecated", async () => {
  const included = mapOpenApiEndpoints(openApiDoc, { includeDeprecatedEndpoints: true });
  const output = await prettify(generateFile({ ...included, includeDeprecated: ["endpoints"] }));

  expect(output).not.toContain("oldField");
  expect(output).not.toContain("export type OldExample");
});

it("keeps a deprecated schema (tagged) instead of dropping it when another endpoint still references it", async () => {
  const docWithReference: OpenAPIObject = {
    ...openApiDoc,
    paths: {
      ...openApiDoc.paths,
      "/old-schema": {
        get: {
          operationId: "getOldSchema",
          responses: {
            200: {
              description: "Success",
              content: { "application/json": { schema: { $ref: "#/components/schemas/OldExample" } } },
            },
          },
        },
      },
    },
  };

  const endpoints = mapOpenApiEndpoints(docWithReference);
  // "schemas" is NOT listed — OldExample would normally be dropped, except it's still referenced below.
  const output = await prettify(generateFile({ ...endpoints, includeDeprecated: ["endpoints"] }));

  // `OldExample` must stay (tagged) — dropping it would leave `Schemas.OldExample` dangling below.
  expect(output).toContain("export type OldExample");
  expect(output).toContain("Schemas.OldExample");
});

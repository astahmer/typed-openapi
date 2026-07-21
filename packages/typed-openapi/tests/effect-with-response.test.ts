import { describe, expect, test } from "vitest";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import type { OpenAPIObject } from "openapi3-ts/oas31";

describe("EffectApiClient withResponse", () => {
  test("emits withResponse / throwOnStatusError handling with real status envelope", () => {
    const openApiDoc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/items": {
          post: {
            operationId: "createItem",
            responses: {
              "201": {
                description: "created",
                content: { "application/json": { schema: { type: "object", properties: { id: { type: "number" } } } } },
              },
              "400": {
                description: "bad",
                content: {
                  "application/json": { schema: { type: "object", properties: { message: { type: "string" } } } },
                },
              },
            },
          },
        },
      },
    } satisfies OpenAPIObject;

    const src = generateFile({
      ...mapOpenApiEndpoints(openApiDoc),
      runtime: "none",
      client: "effect",
      includeClient: true,
    });

    expect(src).toContain("const withResponse = Boolean(requestParams?.withResponse)");
    expect(src).toContain("throwOnStatusError");
    expect(src).toContain("return (withResponse ? typedResponse : data)");
    expect(src).not.toContain("status: 200, data");
  });
});

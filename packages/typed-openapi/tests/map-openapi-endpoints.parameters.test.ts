import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { describe, test } from "vitest";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

describe("map-openapi-endpoints parameters", () => {
  test("maps the Xquik search endpoint", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/xquik-search.openapi.yaml")) as OpenAPIObject;

    const endpoint = mapOpenApiEndpoints(openApiDoc).endpointList[0];

    expect(endpoint).toMatchObject({
      method: "get",
      path: "/x/tweets/search",
      requestFormat: "json",
      responseFormat: "json",
      meta: {
        alias: "get_SearchTweets",
        hasParameters: true,
        areParametersRequired: true,
      },
      operation: {
        operationId: "searchTweets",
        security: [{ apiKey: [] }, { oauthBearer: [] }, {}],
      },
    });
    expect(endpoint?.parameters?.query).toMatchObject({
      kind: "object",
      partial: false,
      required: ["q"],
      properties: {
        q: { kind: "string" },
        queryType: { kind: "enum" },
        cursor: { kind: "string" },
        limit: { kind: "number", integer: true },
      },
    });
    expect(endpoint?.responses?.["200"]).toBeDefined();
  });

  test("operation parameters override matching path parameters", ({ expect }) => {
    const openApiDoc = {
      openapi: "3.1.0",
      info: { title: "Parameter overrides", version: "1.0.0" },
      paths: {
        "/search": {
          parameters: [{ name: "limit", in: "query", required: true, schema: { type: "string" } }],
          get: {
            operationId: "search",
            parameters: [{ name: "limit", in: "query", required: false, schema: { type: "integer" } }],
            responses: { "200": { description: "Search results" } },
          },
        },
      },
    } satisfies OpenAPIObject;

    const endpoint = mapOpenApiEndpoints(openApiDoc).endpointList[0];

    expect(endpoint?.meta).toMatchObject({ hasParameters: true, areParametersRequired: false });
    expect(endpoint?.parameters?.query).toMatchObject({
      kind: "object",
      partial: true,
      required: [],
      properties: {
        limit: { kind: "number", integer: true },
      },
    });
  });
});

import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { describe, it, expect } from "vitest";

const openApiDoc = {
  openapi: "3.0.0",
  info: { title: "Test", version: "1.0.0" },
  paths: {
    "/foo/bar": {
      get: { operationId: "import", responses: { 200: { description: "ok" } } },
      post: { operationId: "Record", responses: { 200: { description: "ok" } } },
    },
    "/user/profile": {
      get: { operationId: "user/profile", responses: { 200: { description: "ok" } } },
    },
    "/import": {
      get: { operationId: "import", responses: { 200: { description: "ok" } } },
    },
    "/set": {
      get: { operationId: "set", responses: { 200: { description: "ok" } } },
    },
    "/normal": {
      get: { operationId: "normal", responses: { 200: { description: "ok" } } },
    },
  },
} as any;

describe("mapOpenApiEndpoints with NameTransformOptions for endpoints", () => {
  it("avoids reserved words and invalid chars", () => {
    const ctx = mapOpenApiEndpoints(openApiDoc);
    const aliases = ctx.endpointList.map((e) => e.meta.alias);
    expect(aliases).toMatchInlineSnapshot(`
      [
        "get_Import",
        "post_Record",
        "get_User_profile",
        "get_Import",
        "get_Set",
        "get_Normal",
      ]
    `);
  });

  it("applies transformEndpointName and avoids reserved words", () => {
    const ctx = mapOpenApiEndpoints(openApiDoc, {
      nameTransform: { transformEndpointName: (endpoint) => `E_${endpoint.alias}_E` },
    });
    const aliases = ctx.endpointList.map((e) => e.meta.alias);
    expect(aliases).toMatchInlineSnapshot(`
      [
        "E_get_Import_E",
        "E_post_Record_E",
        "E_get_User_profile_E",
        "E_get_Import_E",
        "E_get_Set_E",
        "E_get_Normal_E",
      ]
    `);
  });
});

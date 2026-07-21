import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateMswFile, openApiPathToMswPath, stubFromSchema } from "../src/msw.generator.ts";
import type { SchemaNode } from "../src/schema-ir/types.ts";

describe("msw.generator unit", () => {
  test("openApiPathToMswPath converts braces to colon params", () => {
    expect(openApiPathToMswPath("/pet/{petId}")).toBe("/pet/:petId");
    expect(openApiPathToMswPath("/store/order/{orderId}/items/{itemId}")).toBe("/store/order/:orderId/items/:itemId");
  });

  test("stubFromSchema prefers examples then defaults", () => {
    const withExample: SchemaNode = {
      kind: "string",
      constraints: {},
      meta: { examples: ["from-example"], default: "from-default" },
    };
    expect(stubFromSchema(withExample)).toBe("from-example");

    const withDefault: SchemaNode = {
      kind: "number",
      integer: true,
      constraints: {},
      meta: { default: 42 },
    };
    expect(stubFromSchema(withDefault)).toBe(42);
  });

  test("stubFromSchema emits faker markers when faker=true", () => {
    const email: SchemaNode = {
      kind: "string",
      constraints: { format: "email" },
      meta: {},
    };
    expect(stubFromSchema(email, true)).toBe("__FAKER__.internet.email()");
  });

  test("petstore generates handlers and mock factories", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);
    const file = generateMswFile({ endpointList: ctx.endpointList, doc: openApiDoc });

    expect(file).toContain('import { http, HttpResponse } from "msw"');
    expect(file).toContain("export const handlers = [");
    expect(file).toContain("http.get");
    expect(file).toContain("http.post");
    expect(file).toContain("/pet/:petId");
    expect(file).toContain("HttpResponse.json");
    expect(file).toContain("export const get");
    expect(file).toContain("Mock = () =>");
    expect(file).not.toContain("@faker-js/faker");
  });

  test("faker mode imports @faker-js/faker", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);
    const file = generateMswFile({ endpointList: ctx.endpointList, doc: openApiDoc, faker: true });
    expect(file).toContain('import { faker } from "@faker-js/faker"');
  });
});

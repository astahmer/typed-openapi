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

  test("stubFromSchema covers object array union enum tuple intersection", () => {
    const objectNode: SchemaNode = {
      kind: "object",
      required: ["id", "name"],
      partial: false,
      additionalProperties: false,
      properties: {
        id: { kind: "number", integer: true, constraints: {}, meta: {} },
        name: { kind: "string", constraints: {}, meta: {} },
        skip: { kind: "boolean", meta: {} },
      },
      constraints: {},
      meta: {},
    };
    expect(stubFromSchema(objectNode)).toEqual({ id: 0, name: "string" });

    const arrayNode: SchemaNode = {
      kind: "array",
      items: { kind: "string", constraints: { format: "uuid" }, meta: {} },
      constraints: {},
      meta: {},
    };
    expect(stubFromSchema(arrayNode)).toEqual(["00000000-0000-4000-8000-000000000000"]);

    const unionNode: SchemaNode = {
      kind: "union",
      members: [
        { kind: "literal", value: "a", meta: {} },
        { kind: "literal", value: "b", meta: {} },
      ],
      meta: {},
    };
    expect(stubFromSchema(unionNode)).toBe("a");

    const enumNode: SchemaNode = {
      kind: "enum",
      values: ["available", "pending"],
      meta: {},
    };
    expect(stubFromSchema(enumNode)).toBe("available");

    const tupleNode: SchemaNode = {
      kind: "tuple",
      items: [
        { kind: "string", constraints: {}, meta: {} },
        { kind: "number", integer: false, constraints: {}, meta: {} },
      ],
      meta: {},
    };
    expect(stubFromSchema(tupleNode)).toEqual(["string", 0]);

    const intersectionNode: SchemaNode = {
      kind: "intersection",
      members: [
        {
          kind: "object",
          required: ["a"],
          partial: false,
          additionalProperties: false,
          properties: { a: { kind: "literal", value: 1, meta: {} } },
          constraints: {},
          meta: {},
        },
        {
          kind: "object",
          required: ["b"],
          partial: false,
          additionalProperties: false,
          properties: { b: { kind: "literal", value: 2, meta: {} } },
          constraints: {},
          meta: {},
        },
      ],
      meta: {},
    };
    expect(stubFromSchema(intersectionNode)).toEqual({ a: 1, b: 2 });
  });

  test("stubFromSchema resolves $ref via schemaByName", () => {
    const pet: SchemaNode = {
      kind: "object",
      required: ["name"],
      partial: false,
      additionalProperties: false,
      properties: {
        name: { kind: "string", constraints: {}, meta: {} },
      },
      constraints: {},
      meta: {},
    };
    const refNode: SchemaNode = { kind: "ref", name: "Pet", meta: {} };
    expect(stubFromSchema(refNode, false, 0, { Pet: pet })).toEqual({ name: "string" });
  });

  test("stubFromSchema ref remains placeholder without schemaByName", () => {
    const refNode: SchemaNode = { kind: "ref", name: "Pet", meta: {} };
    expect(stubFromSchema(refNode)).toEqual({ __ref: "Pet" });
  });

  test("joinMswBasePath normalizes wildcard and trailing slash", async () => {
    const { joinMswBasePath } = await import("../src/msw.generator.ts");
    expect(joinMswBasePath("*", "/pet/:id")).toBe("*/pet/:id");
    expect(joinMswBasePath("https://api.example.com/", "/pet/:id")).toBe("https://api.example.com/pet/:id");
  });

  test("faker markers rewrite to faker.* in emitted source", () => {
    const endpointList = [
      {
        method: "get" as const,
        path: "/ping",
        meta: { alias: "getPing", operationId: "getPing", tags: [] as string[] },
        operation: { responses: { "200": { description: "ok" } } },
        parameters: {},
        requestFormat: "json" as const,
        responseFormat: "json" as const,
        responses: {
          "200": {
            kind: "string" as const,
            constraints: { format: "email" },
            meta: {},
          },
        },
      },
    ];
    const file = generateMswFile({
      endpointList: endpointList as never,
      doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
      faker: true,
    });
    expect(file).toContain("faker.internet.email()");
    expect(file).not.toContain("__FAKER__");
  });

  test("operation example wins over schema stub", () => {
    const endpointList = [
      {
        method: "get" as const,
        path: "/thing",
        meta: { alias: "getThing", operationId: "getThing", tags: [] as string[] },
        operation: {
          responses: {
            "200": {
              description: "ok",
              content: {
                "application/json": {
                  example: { hello: "from-example" },
                },
              },
            },
          },
        },
        parameters: {},
        requestFormat: "json" as const,
        responseFormat: "json" as const,
        responses: {
          "200": {
            kind: "object" as const,
            required: ["hello"],
            partial: false,
            additionalProperties: false,
            properties: {
              hello: { kind: "string" as const, constraints: {}, meta: {} },
            },
            constraints: {},
            meta: {},
          },
        },
      },
    ];
    const file = generateMswFile({
      endpointList: endpointList as never,
      doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
    });
    expect(file).toContain('"hello": "from-example"');
    expect(file).not.toContain('"hello": "string"');
  });

  test("SSE endpoints emit text/event-stream response", () => {
    const endpointList = [
      {
        method: "get" as const,
        path: "/events",
        meta: { alias: "getEvents", operationId: "getEvents", tags: [] as string[] },
        operation: { responses: { "200": { description: "ok" } } },
        parameters: {},
        requestFormat: "json" as const,
        responseFormat: "sse" as const,
        responses: { "200": { kind: "unknown" as const, meta: {} } },
      },
    ];
    const file = generateMswFile({
      endpointList: endpointList as never,
      doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
    });
    expect(file).toContain('headers: { "Content-Type": "text/event-stream" }');
    expect(file).toContain("data: {}\\n\\n");
  });

  test("pickSuccessStatus prefers 200 then other 2xx; missing → null body", () => {
    const with201 = [
      {
        method: "post" as const,
        path: "/x",
        meta: { alias: "postX", operationId: "postX", tags: [] as string[] },
        operation: { responses: { "201": { description: "created" } } },
        parameters: {},
        requestFormat: "json" as const,
        responseFormat: "json" as const,
        responses: {
          "201": { kind: "literal" as const, value: "created", meta: {} },
        },
      },
    ];
    const file201 = generateMswFile({
      endpointList: with201 as never,
      doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
    });
    expect(file201).toContain("status: 201");
    expect(file201).toContain('"created"');

    const noSuccess = [
      {
        method: "get" as const,
        path: "/y",
        meta: { alias: "getY", operationId: "getY", tags: [] as string[] },
        operation: { responses: { "404": { description: "missing" } } },
        parameters: {},
        requestFormat: "json" as const,
        responseFormat: "json" as const,
        responses: {
          "404": { kind: "literal" as const, value: "missing", meta: {} },
        },
      },
    ];
    const file404 = generateMswFile({
      endpointList: noSuccess as never,
      doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
    });
    expect(file404).toContain("() => (null)");
    expect(file404).toContain("status: 200");
  });
});

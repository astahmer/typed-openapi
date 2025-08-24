import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";
import { createRefResolver } from "../src/ref-resolver.ts";
import { tsFactory } from "../src/ts-factory.ts";

describe("generator", () => {
  const openApiDoc = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    components: {
      schemas: {
        import: { type: "string" },
        set: { type: "object", properties: { id: { type: "string" } } },
        Record: { type: "number" },
        normal: { type: "boolean" },
      },
    },
  } as any;

  describe("createRefResolver with NameTransformOptions", () => {
    test("avoids reserved words", () => {
      const resolver = createRefResolver(openApiDoc, tsFactory);
      const infos = Array.from(resolver.infos.values()).map((i) => i.normalized);
      expect(infos).toMatchInlineSnapshot(`
      [
        "Schema_import",
        "Schema_set",
        "Schema_Record",
        "normal",
      ]
    `);
    });

    test("applies transformSchemaName and avoids reserved words", () => {
      const resolver = createRefResolver(openApiDoc, tsFactory, {
        transformSchemaName: (name) => `X_${name}_X`,
      });
      const infos = Array.from(resolver.infos.values()).map((i) => i.normalized);
      expect(infos).toMatchInlineSnapshot(`
      [
        "X_import_X",
        "X_set_X",
        "X_Record_X",
        "X_normal_X",
      ]
    `);
    });
  });

  test("petstore", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const ref = createRefResolver(openApiDoc, tsFactory);
    expect(ref).toMatchInlineSnapshot(`
      {
        "directDependencies": Map {
          "#/components/schemas/Order" => Set {},
          "#/components/schemas/Customer" => Set {
            "#/components/schemas/Address",
          },
          "#/components/schemas/Address" => Set {},
          "#/components/schemas/Category" => Set {},
          "#/components/schemas/User" => Set {},
          "#/components/schemas/Tag" => Set {},
          "#/components/schemas/Pet" => Set {
            "#/components/schemas/Category",
            "#/components/schemas/Tag",
          },
          "#/components/schemas/ApiResponse" => Set {},
          "#/components/requestBodies/Pet" => Set {},
          "#/components/requestBodies/UserArray" => Set {},
        },
        "get": [Function],
        "getInfosByRef": [Function],
        "getOrderedSchemas": [Function],
        "infos": Map {
          "#/components/schemas/Order" => {
            "kind": "schemas",
            "name": "Order",
            "normalized": "Order",
            "ref": "#/components/schemas/Order",
          },
          "#/components/schemas/Customer" => {
            "kind": "schemas",
            "name": "Customer",
            "normalized": "Customer",
            "ref": "#/components/schemas/Customer",
          },
          "#/components/schemas/Address" => {
            "kind": "schemas",
            "name": "Address",
            "normalized": "Address",
            "ref": "#/components/schemas/Address",
          },
          "#/components/schemas/Category" => {
            "kind": "schemas",
            "name": "Category",
            "normalized": "Category",
            "ref": "#/components/schemas/Category",
          },
          "#/components/schemas/User" => {
            "kind": "schemas",
            "name": "User",
            "normalized": "User",
            "ref": "#/components/schemas/User",
          },
          "#/components/schemas/Tag" => {
            "kind": "schemas",
            "name": "Tag",
            "normalized": "Tag",
            "ref": "#/components/schemas/Tag",
          },
          "#/components/schemas/Pet" => {
            "kind": "schemas",
            "name": "Pet",
            "normalized": "Pet",
            "ref": "#/components/schemas/Pet",
          },
          "#/components/schemas/ApiResponse" => {
            "kind": "schemas",
            "name": "ApiResponse",
            "normalized": "ApiResponse",
            "ref": "#/components/schemas/ApiResponse",
          },
          "#/components/requestBodies/Pet" => {
            "kind": "requestBodies",
            "name": "Pet",
            "normalized": "Pet",
            "ref": "#/components/requestBodies/Pet",
          },
          "#/components/requestBodies/UserArray" => {
            "kind": "requestBodies",
            "name": "UserArray",
            "normalized": "UserArray",
            "ref": "#/components/requestBodies/UserArray",
          },
        },
        "transitiveDependencies": Map {
          "#/components/schemas/Order" => Set {},
          "#/components/schemas/Customer" => Set {
            "#/components/schemas/Address",
          },
          "#/components/schemas/Address" => Set {},
          "#/components/schemas/Category" => Set {},
          "#/components/schemas/User" => Set {},
          "#/components/schemas/Tag" => Set {},
          "#/components/schemas/Pet" => Set {
            "#/components/schemas/Category",
            "#/components/schemas/Tag",
          },
          "#/components/schemas/ApiResponse" => Set {},
          "#/components/requestBodies/Pet" => Set {},
          "#/components/requestBodies/UserArray" => Set {},
        },
        "unwrap": [Function],
      }
    `);
  });
});

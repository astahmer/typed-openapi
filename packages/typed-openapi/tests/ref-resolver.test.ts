import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { describe, test } from "vitest";
import { createRefResolver } from "../src/ref-resolver";
import { tsFactory } from "../src/ts-factory";

describe("generator", () => {
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

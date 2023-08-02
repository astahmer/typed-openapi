import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { describe, test } from "vitest";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints";

describe("map-openapi-endpoints", () => {
  test("petstore", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/petstore.yaml")) as OpenAPIObject;
    expect(mapOpenApiEndpoints(openApiDoc)).toMatchInlineSnapshot(`
      {
        "endpointList": [
          {
            "meta": {
              "alias": "put_UpdatePet",
              "areParametersRequired": false,
              "hasParameters": false,
            },
            "method": "put",
            "operation": {
              "description": "Update an existing pet by Id",
              "operationId": "updatePet",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pet",
                    },
                  },
                  "application/x-www-form-urlencoded": {
                    "schema": {
                      "$ref": "#/components/schemas/Pet",
                    },
                  },
                  "application/xml": {
                    "schema": {
                      "$ref": "#/components/schemas/Pet",
                    },
                  },
                },
                "description": "Update an existent pet in the store",
                "required": true,
              },
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pet",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "$ref": "#/components/schemas/Pet",
                      },
                    },
                  },
                  "description": "Successful operation",
                },
                "400": {
                  "description": "Invalid ID supplied",
                },
                "404": {
                  "description": "Pet not found",
                },
                "405": {
                  "description": "Validation exception",
                },
              },
              "security": [
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "Update an existing pet",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "body": {
                "type": "ref",
                "value": "Pet",
              },
            },
            "path": "/pet",
            "response": {
              "type": "ref",
              "value": "Pet",
            },
          },
          {
            "meta": {
              "alias": "post_AddPet",
              "areParametersRequired": false,
              "hasParameters": false,
            },
            "method": "post",
            "operation": {
              "description": "Add a new pet to the store",
              "operationId": "addPet",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pet",
                    },
                  },
                  "application/x-www-form-urlencoded": {
                    "schema": {
                      "$ref": "#/components/schemas/Pet",
                    },
                  },
                  "application/xml": {
                    "schema": {
                      "$ref": "#/components/schemas/Pet",
                    },
                  },
                },
                "description": "Create a new pet in the store",
                "required": true,
              },
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pet",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "$ref": "#/components/schemas/Pet",
                      },
                    },
                  },
                  "description": "Successful operation",
                },
                "405": {
                  "description": "Invalid input",
                },
              },
              "security": [
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "Add a new pet to the store",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "body": {
                "type": "ref",
                "value": "Pet",
              },
            },
            "path": "/pet",
            "response": {
              "type": "ref",
              "value": "Pet",
            },
          },
          {
            "meta": {
              "alias": "get_FindPetsByStatus",
              "areParametersRequired": false,
              "hasParameters": true,
            },
            "method": "get",
            "operation": {
              "description": "Multiple status values can be provided with comma separated strings",
              "operationId": "findPetsByStatus",
              "parameters": [
                {
                  "description": "Status values that need to be considered for filter",
                  "explode": true,
                  "in": "query",
                  "name": "status",
                  "required": false,
                  "schema": {
                    "default": "available",
                    "enum": [
                      "available",
                      "pending",
                      "sold",
                    ],
                    "type": "string",
                  },
                },
              ],
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "items": {
                          "$ref": "#/components/schemas/Pet",
                        },
                        "type": "array",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "items": {
                          "$ref": "#/components/schemas/Pet",
                        },
                        "type": "array",
                      },
                    },
                  },
                  "description": "successful operation",
                },
                "400": {
                  "description": "Invalid status value",
                },
              },
              "security": [
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "Finds Pets by status",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "query": {
                "type": "ref",
                "value": "Partial<{ status: \\"available\\" | \\"pending\\" | \\"sold\\" }>",
              },
            },
            "path": "/pet/findByStatus",
            "response": {
              "type": "array",
              "value": "Array<Pet>",
            },
          },
          {
            "meta": {
              "alias": "get_FindPetsByTags",
              "areParametersRequired": false,
              "hasParameters": true,
            },
            "method": "get",
            "operation": {
              "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
              "operationId": "findPetsByTags",
              "parameters": [
                {
                  "description": "Tags to filter by",
                  "explode": true,
                  "in": "query",
                  "name": "tags",
                  "required": false,
                  "schema": {
                    "items": {
                      "type": "string",
                    },
                    "type": "array",
                  },
                },
              ],
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "items": {
                          "$ref": "#/components/schemas/Pet",
                        },
                        "type": "array",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "items": {
                          "$ref": "#/components/schemas/Pet",
                        },
                        "type": "array",
                      },
                    },
                  },
                  "description": "successful operation",
                },
                "400": {
                  "description": "Invalid tag value",
                },
              },
              "security": [
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "Finds Pets by tags",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "query": {
                "type": "ref",
                "value": "Partial<{ tags: Array<string> }>",
              },
            },
            "path": "/pet/findByTags",
            "response": {
              "type": "array",
              "value": "Array<Pet>",
            },
          },
          {
            "meta": {
              "alias": "get_GetPetById",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "get",
            "operation": {
              "description": "Returns a single pet",
              "operationId": "getPetById",
              "parameters": [
                {
                  "description": "ID of pet to return",
                  "in": "path",
                  "name": "petId",
                  "required": true,
                  "schema": {
                    "format": "int64",
                    "type": "integer",
                  },
                },
              ],
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pet",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "$ref": "#/components/schemas/Pet",
                      },
                    },
                  },
                  "description": "successful operation",
                },
                "400": {
                  "description": "Invalid ID supplied",
                },
                "404": {
                  "description": "Pet not found",
                },
              },
              "security": [
                {
                  "api_key": [],
                },
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "Find pet by ID",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "path": {
                "petId": {
                  "type": "keyword",
                  "value": "number",
                },
              },
            },
            "path": "/pet/{petId}",
            "response": {
              "type": "ref",
              "value": "Pet",
            },
          },
          {
            "meta": {
              "alias": "post_UpdatePetWithForm",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "post",
            "operation": {
              "description": "",
              "operationId": "updatePetWithForm",
              "parameters": [
                {
                  "description": "ID of pet that needs to be updated",
                  "in": "path",
                  "name": "petId",
                  "required": true,
                  "schema": {
                    "format": "int64",
                    "type": "integer",
                  },
                },
                {
                  "description": "Name of pet that needs to be updated",
                  "in": "query",
                  "name": "name",
                  "schema": {
                    "type": "string",
                  },
                },
                {
                  "description": "Status of pet that needs to be updated",
                  "in": "query",
                  "name": "status",
                  "schema": {
                    "type": "string",
                  },
                },
              ],
              "responses": {
                "405": {
                  "description": "Invalid input",
                },
              },
              "security": [
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "Updates a pet in the store with form data",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "path": {
                "petId": {
                  "type": "keyword",
                  "value": "number",
                },
              },
              "query": {
                "name": {
                  "type": "keyword",
                  "value": "string",
                },
                "status": {
                  "type": "keyword",
                  "value": "string",
                },
              },
            },
            "path": "/pet/{petId}",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
          {
            "meta": {
              "alias": "delete_DeletePet",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "delete",
            "operation": {
              "description": "delete a pet",
              "operationId": "deletePet",
              "parameters": [
                {
                  "description": "",
                  "in": "header",
                  "name": "api_key",
                  "required": false,
                  "schema": {
                    "type": "string",
                  },
                },
                {
                  "description": "Pet id to delete",
                  "in": "path",
                  "name": "petId",
                  "required": true,
                  "schema": {
                    "format": "int64",
                    "type": "integer",
                  },
                },
              ],
              "responses": {
                "400": {
                  "description": "Invalid pet value",
                },
              },
              "security": [
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "Deletes a pet",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "header": {
                "api_key": {
                  "type": "keyword",
                  "value": "string",
                },
              },
              "path": {
                "petId": {
                  "type": "keyword",
                  "value": "number",
                },
              },
            },
            "path": "/pet/{petId}",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
          {
            "meta": {
              "alias": "post_UploadFile",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "post",
            "operation": {
              "description": "",
              "operationId": "uploadFile",
              "parameters": [
                {
                  "description": "ID of pet to update",
                  "in": "path",
                  "name": "petId",
                  "required": true,
                  "schema": {
                    "format": "int64",
                    "type": "integer",
                  },
                },
                {
                  "description": "Additional Metadata",
                  "in": "query",
                  "name": "additionalMetadata",
                  "required": false,
                  "schema": {
                    "type": "string",
                  },
                },
              ],
              "requestBody": {
                "content": {
                  "application/octet-stream": {
                    "schema": {
                      "format": "binary",
                      "type": "string",
                    },
                  },
                },
              },
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/ApiResponse",
                      },
                    },
                  },
                  "description": "successful operation",
                },
              },
              "security": [
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets",
                  ],
                },
              ],
              "summary": "uploads an image",
              "tags": [
                "pet",
              ],
            },
            "parameters": {
              "body": {
                "type": "keyword",
                "value": "string",
              },
              "path": {
                "petId": {
                  "type": "keyword",
                  "value": "number",
                },
              },
              "query": {
                "additionalMetadata": {
                  "type": "keyword",
                  "value": "string",
                },
              },
            },
            "path": "/pet/{petId}/uploadImage",
            "response": {
              "type": "ref",
              "value": "ApiResponse",
            },
          },
          {
            "meta": {
              "alias": "get_GetInventory",
              "areParametersRequired": false,
              "hasParameters": false,
            },
            "method": "get",
            "operation": {
              "description": "Returns a map of status codes to quantities",
              "operationId": "getInventory",
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "additionalProperties": {
                          "format": "int32",
                          "type": "integer",
                        },
                        "type": "object",
                      },
                    },
                  },
                  "description": "successful operation",
                },
              },
              "security": [
                {
                  "api_key": [],
                },
              ],
              "summary": "Returns pet inventories by status",
              "tags": [
                "store",
              ],
            },
            "parameters": undefined,
            "path": "/store/inventory",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
          {
            "meta": {
              "alias": "post_PlaceOrder",
              "areParametersRequired": false,
              "hasParameters": false,
            },
            "method": "post",
            "operation": {
              "description": "Place a new order in the store",
              "operationId": "placeOrder",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Order",
                    },
                  },
                  "application/x-www-form-urlencoded": {
                    "schema": {
                      "$ref": "#/components/schemas/Order",
                    },
                  },
                  "application/xml": {
                    "schema": {
                      "$ref": "#/components/schemas/Order",
                    },
                  },
                },
              },
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Order",
                      },
                    },
                  },
                  "description": "successful operation",
                },
                "405": {
                  "description": "Invalid input",
                },
              },
              "summary": "Place an order for a pet",
              "tags": [
                "store",
              ],
            },
            "parameters": {
              "body": {
                "type": "ref",
                "value": "Order",
              },
            },
            "path": "/store/order",
            "response": {
              "type": "ref",
              "value": "Order",
            },
          },
          {
            "meta": {
              "alias": "get_GetOrderById",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "get",
            "operation": {
              "description": "For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.",
              "operationId": "getOrderById",
              "parameters": [
                {
                  "description": "ID of order that needs to be fetched",
                  "in": "path",
                  "name": "orderId",
                  "required": true,
                  "schema": {
                    "format": "int64",
                    "type": "integer",
                  },
                },
              ],
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Order",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "$ref": "#/components/schemas/Order",
                      },
                    },
                  },
                  "description": "successful operation",
                },
                "400": {
                  "description": "Invalid ID supplied",
                },
                "404": {
                  "description": "Order not found",
                },
              },
              "summary": "Find purchase order by ID",
              "tags": [
                "store",
              ],
            },
            "parameters": {
              "path": {
                "orderId": {
                  "type": "keyword",
                  "value": "number",
                },
              },
            },
            "path": "/store/order/{orderId}",
            "response": {
              "type": "ref",
              "value": "Order",
            },
          },
          {
            "meta": {
              "alias": "delete_DeleteOrder",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "delete",
            "operation": {
              "description": "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
              "operationId": "deleteOrder",
              "parameters": [
                {
                  "description": "ID of the order that needs to be deleted",
                  "in": "path",
                  "name": "orderId",
                  "required": true,
                  "schema": {
                    "format": "int64",
                    "type": "integer",
                  },
                },
              ],
              "responses": {
                "400": {
                  "description": "Invalid ID supplied",
                },
                "404": {
                  "description": "Order not found",
                },
              },
              "summary": "Delete purchase order by ID",
              "tags": [
                "store",
              ],
            },
            "parameters": {
              "path": {
                "orderId": {
                  "type": "keyword",
                  "value": "number",
                },
              },
            },
            "path": "/store/order/{orderId}",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
          {
            "meta": {
              "alias": "post_CreateUser",
              "areParametersRequired": false,
              "hasParameters": false,
            },
            "method": "post",
            "operation": {
              "description": "This can only be done by the logged in user.",
              "operationId": "createUser",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/User",
                    },
                  },
                  "application/x-www-form-urlencoded": {
                    "schema": {
                      "$ref": "#/components/schemas/User",
                    },
                  },
                  "application/xml": {
                    "schema": {
                      "$ref": "#/components/schemas/User",
                    },
                  },
                },
                "description": "Created user object",
              },
              "responses": {
                "default": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/User",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "$ref": "#/components/schemas/User",
                      },
                    },
                  },
                  "description": "successful operation",
                },
              },
              "summary": "Create user",
              "tags": [
                "user",
              ],
            },
            "parameters": {
              "body": {
                "type": "ref",
                "value": "User",
              },
            },
            "path": "/user",
            "response": {
              "type": "ref",
              "value": "User",
            },
          },
          {
            "meta": {
              "alias": "post_CreateUsersWithListInput",
              "areParametersRequired": false,
              "hasParameters": false,
            },
            "method": "post",
            "operation": {
              "description": "Creates list of users with given input array",
              "operationId": "createUsersWithListInput",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "items": {
                        "$ref": "#/components/schemas/User",
                      },
                      "type": "array",
                    },
                  },
                },
              },
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/User",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "$ref": "#/components/schemas/User",
                      },
                    },
                  },
                  "description": "Successful operation",
                },
                "default": {
                  "description": "successful operation",
                },
              },
              "summary": "Creates list of users with given input array",
              "tags": [
                "user",
              ],
            },
            "parameters": {
              "body": {
                "type": "array",
                "value": "Array<User>",
              },
            },
            "path": "/user/createWithList",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
          {
            "meta": {
              "alias": "get_LoginUser",
              "areParametersRequired": false,
              "hasParameters": true,
            },
            "method": "get",
            "operation": {
              "description": "",
              "operationId": "loginUser",
              "parameters": [
                {
                  "description": "The user name for login",
                  "in": "query",
                  "name": "username",
                  "required": false,
                  "schema": {
                    "type": "string",
                  },
                },
                {
                  "description": "The password for login in clear text",
                  "in": "query",
                  "name": "password",
                  "required": false,
                  "schema": {
                    "type": "string",
                  },
                },
              ],
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "string",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "type": "string",
                      },
                    },
                  },
                  "description": "successful operation",
                  "headers": {
                    "X-Expires-After": {
                      "description": "date in UTC when token expires",
                      "schema": {
                        "format": "date-time",
                        "type": "string",
                      },
                    },
                    "X-Rate-Limit": {
                      "description": "calls per hour allowed by the user",
                      "schema": {
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                  },
                },
                "400": {
                  "description": "Invalid username/password supplied",
                },
              },
              "summary": "Logs user into the system",
              "tags": [
                "user",
              ],
            },
            "parameters": {
              "query": {
                "type": "ref",
                "value": "Partial<{ username: string, password: string }>",
              },
            },
            "path": "/user/login",
            "response": {
              "type": "keyword",
              "value": "string",
            },
          },
          {
            "meta": {
              "alias": "get_LogoutUser",
              "areParametersRequired": false,
              "hasParameters": false,
            },
            "method": "get",
            "operation": {
              "description": "",
              "operationId": "logoutUser",
              "parameters": [],
              "responses": {
                "default": {
                  "description": "successful operation",
                },
              },
              "summary": "Logs out current logged in user session",
              "tags": [
                "user",
              ],
            },
            "parameters": undefined,
            "path": "/user/logout",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
          {
            "meta": {
              "alias": "get_GetUserByName",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "get",
            "operation": {
              "description": "",
              "operationId": "getUserByName",
              "parameters": [
                {
                  "description": "The name that needs to be fetched. Use user1 for testing. ",
                  "in": "path",
                  "name": "username",
                  "required": true,
                  "schema": {
                    "type": "string",
                  },
                },
              ],
              "responses": {
                "200": {
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/User",
                      },
                    },
                    "application/xml": {
                      "schema": {
                        "$ref": "#/components/schemas/User",
                      },
                    },
                  },
                  "description": "successful operation",
                },
                "400": {
                  "description": "Invalid username supplied",
                },
                "404": {
                  "description": "User not found",
                },
              },
              "summary": "Get user by user name",
              "tags": [
                "user",
              ],
            },
            "parameters": {
              "path": {
                "username": {
                  "type": "keyword",
                  "value": "string",
                },
              },
            },
            "path": "/user/{username}",
            "response": {
              "type": "ref",
              "value": "User",
            },
          },
          {
            "meta": {
              "alias": "put_UpdateUser",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "put",
            "operation": {
              "description": "This can only be done by the logged in user.",
              "operationId": "updateUser",
              "parameters": [
                {
                  "description": "name that need to be deleted",
                  "in": "path",
                  "name": "username",
                  "required": true,
                  "schema": {
                    "type": "string",
                  },
                },
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/User",
                    },
                  },
                  "application/x-www-form-urlencoded": {
                    "schema": {
                      "$ref": "#/components/schemas/User",
                    },
                  },
                  "application/xml": {
                    "schema": {
                      "$ref": "#/components/schemas/User",
                    },
                  },
                },
                "description": "Update an existent user in the store",
              },
              "responses": {
                "default": {
                  "description": "successful operation",
                },
              },
              "summary": "Update user",
              "tags": [
                "user",
              ],
            },
            "parameters": {
              "body": {
                "type": "ref",
                "value": "User",
              },
              "path": {
                "username": {
                  "type": "keyword",
                  "value": "string",
                },
              },
            },
            "path": "/user/{username}",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
          {
            "meta": {
              "alias": "delete_DeleteUser",
              "areParametersRequired": true,
              "hasParameters": true,
            },
            "method": "delete",
            "operation": {
              "description": "This can only be done by the logged in user.",
              "operationId": "deleteUser",
              "parameters": [
                {
                  "description": "The name that needs to be deleted",
                  "in": "path",
                  "name": "username",
                  "required": true,
                  "schema": {
                    "type": "string",
                  },
                },
              ],
              "responses": {
                "400": {
                  "description": "Invalid username supplied",
                },
                "404": {
                  "description": "User not found",
                },
              },
              "summary": "Delete user",
              "tags": [
                "user",
              ],
            },
            "parameters": {
              "path": {
                "username": {
                  "type": "keyword",
                  "value": "string",
                },
              },
            },
            "path": "/user/{username}",
            "response": {
              "type": "keyword",
              "value": "unknown",
            },
          },
        ],
        "refs": {
          "get": [Function],
          "getName": [Function],
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
          "schemas": Map {
            "#/components/schemas/Order" => {
              "type": "ref",
              "value": "Partial<{ id: number, petId: number, quantity: number, shipDate: string, status: \\"placed\\" | \\"approved\\" | \\"delivered\\", complete: boolean }>",
            },
            "#/components/schemas/Customer" => {
              "type": "ref",
              "value": "Partial<{ id: number, username: string, address: Array<Address> }>",
            },
            "#/components/schemas/Address" => {
              "type": "ref",
              "value": "Partial<{ street: string, city: string, state: string, zip: string }>",
            },
            "#/components/schemas/Category" => {
              "type": "ref",
              "value": "Partial<{ id: number, name: string }>",
            },
            "#/components/schemas/User" => {
              "type": "ref",
              "value": "Partial<{ id: number, username: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number }>",
            },
            "#/components/schemas/Tag" => {
              "type": "ref",
              "value": "Partial<{ id: number, name: string }>",
            },
            "#/components/schemas/Pet" => {
              "type": "object",
              "value": "{ id?: number | undefined, name: string, category?: Category | undefined, photoUrls: Array<string>, tags?: Array<Tag> | undefined, status?: \\"available\\" | \\"pending\\" | \\"sold\\" | undefined }",
            },
            "#/components/schemas/ApiResponse" => {
              "type": "ref",
              "value": "Partial<{ code: number, type: string, message: string }>",
            },
            "#/components/requestBodies/Pet" => {
              "type": "keyword",
              "value": "unknown",
            },
            "#/components/requestBodies/UserArray" => {
              "type": "keyword",
              "value": "unknown",
            },
          },
          "unwrap": [Function],
        },
      }
    `);
  });
});

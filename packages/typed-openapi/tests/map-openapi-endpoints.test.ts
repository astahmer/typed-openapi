import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { describe, test } from "vitest";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints";

describe("map-openapi-endpoints", () => {
  test("petstore", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    expect(mapOpenApiEndpoints(openApiDoc)).toMatchInlineSnapshot(`
      {
        "doc": {
          "components": {
            "requestBodies": {
              "Pet": {
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
                "description": "Pet object that needs to be added to the store",
              },
              "UserArray": {
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
                "description": "List of user object",
              },
            },
            "schemas": {
              "Address": {
                "properties": {
                  "city": {
                    "example": "Palo Alto",
                    "type": "string",
                  },
                  "state": {
                    "example": "CA",
                    "type": "string",
                  },
                  "street": {
                    "example": "437 Lytton",
                    "type": "string",
                  },
                  "zip": {
                    "example": "94301",
                    "type": "string",
                  },
                },
                "type": "object",
                "xml": {
                  "name": "address",
                },
              },
              "ApiResponse": {
                "properties": {
                  "code": {
                    "format": "int32",
                    "type": "integer",
                  },
                  "message": {
                    "type": "string",
                  },
                  "type": {
                    "type": "string",
                  },
                },
                "type": "object",
                "xml": {
                  "name": "##default",
                },
              },
              "Category": {
                "properties": {
                  "id": {
                    "example": 1,
                    "format": "int64",
                    "type": "integer",
                  },
                  "name": {
                    "example": "Dogs",
                    "type": "string",
                  },
                },
                "type": "object",
                "xml": {
                  "name": "category",
                },
              },
              "Customer": {
                "properties": {
                  "address": {
                    "items": {
                      "$ref": "#/components/schemas/Address",
                    },
                    "type": "array",
                    "xml": {
                      "name": "addresses",
                      "wrapped": true,
                    },
                  },
                  "id": {
                    "example": 100000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "username": {
                    "example": "fehguy",
                    "type": "string",
                  },
                },
                "type": "object",
                "xml": {
                  "name": "customer",
                },
              },
              "Order": {
                "properties": {
                  "complete": {
                    "type": "boolean",
                  },
                  "id": {
                    "example": 10,
                    "format": "int64",
                    "type": "integer",
                  },
                  "petId": {
                    "example": 198772,
                    "format": "int64",
                    "type": "integer",
                  },
                  "quantity": {
                    "example": 7,
                    "format": "int32",
                    "type": "integer",
                  },
                  "shipDate": {
                    "format": "date-time",
                    "type": "string",
                  },
                  "status": {
                    "description": "Order Status",
                    "enum": [
                      "placed",
                      "approved",
                      "delivered",
                    ],
                    "example": "approved",
                    "type": "string",
                  },
                },
                "type": "object",
                "xml": {
                  "name": "order",
                },
              },
              "Pet": {
                "properties": {
                  "category": {
                    "$ref": "#/components/schemas/Category",
                  },
                  "id": {
                    "example": 10,
                    "format": "int64",
                    "type": "integer",
                  },
                  "name": {
                    "example": "doggie",
                    "type": "string",
                  },
                  "photoUrls": {
                    "items": {
                      "type": "string",
                      "xml": {
                        "name": "photoUrl",
                      },
                    },
                    "type": "array",
                    "xml": {
                      "wrapped": true,
                    },
                  },
                  "status": {
                    "description": "pet status in the store",
                    "enum": [
                      "available",
                      "pending",
                      "sold",
                    ],
                    "type": "string",
                  },
                  "tags": {
                    "items": {
                      "$ref": "#/components/schemas/Tag",
                    },
                    "type": "array",
                    "xml": {
                      "wrapped": true,
                    },
                  },
                },
                "required": [
                  "name",
                  "photoUrls",
                ],
                "type": "object",
                "xml": {
                  "name": "pet",
                },
              },
              "Tag": {
                "properties": {
                  "id": {
                    "format": "int64",
                    "type": "integer",
                  },
                  "name": {
                    "type": "string",
                  },
                },
                "type": "object",
                "xml": {
                  "name": "tag",
                },
              },
              "User": {
                "properties": {
                  "email": {
                    "example": "john@email.com",
                    "type": "string",
                  },
                  "firstName": {
                    "example": "John",
                    "type": "string",
                  },
                  "id": {
                    "example": 10,
                    "format": "int64",
                    "type": "integer",
                  },
                  "lastName": {
                    "example": "James",
                    "type": "string",
                  },
                  "password": {
                    "example": "12345",
                    "type": "string",
                  },
                  "phone": {
                    "example": "12345",
                    "type": "string",
                  },
                  "userStatus": {
                    "description": "User Status",
                    "example": 1,
                    "format": "int32",
                    "type": "integer",
                  },
                  "username": {
                    "example": "theUser",
                    "type": "string",
                  },
                },
                "type": "object",
                "xml": {
                  "name": "user",
                },
              },
            },
            "securitySchemes": {
              "api_key": {
                "in": "header",
                "name": "api_key",
                "type": "apiKey",
              },
              "petstore_auth": {
                "flows": {
                  "implicit": {
                    "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
                    "scopes": {
                      "read:pets": "read your pets",
                      "write:pets": "modify pets in your account",
                    },
                  },
                },
                "type": "oauth2",
              },
            },
          },
          "externalDocs": {
            "description": "Find out more about Swagger",
            "url": "http://swagger.io",
          },
          "info": {
            "contact": {
              "email": "apiteam@swagger.io",
            },
            "description": "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
      Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
      You can now help us improve the API whether it's by making changes to the definition itself or to the code.
      That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

      _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the \`Edit > Load Petstore OAS 2.0\` menu option!_

      Some useful links:
      - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
      - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
            "license": {
              "name": "Apache 2.0",
              "url": "http://www.apache.org/licenses/LICENSE-2.0.html",
            },
            "termsOfService": "http://swagger.io/terms/",
            "title": "Swagger Petstore - OpenAPI 3.0",
            "version": "1.0.11",
          },
          "openapi": "3.0.3",
          "paths": {
            "/pet": {
              "post": {
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
              "put": {
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
            },
            "/pet/findByStatus": {
              "get": {
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
            },
            "/pet/findByTags": {
              "get": {
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
            },
            "/pet/{petId}": {
              "delete": {
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
              "get": {
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
              "post": {
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
            },
            "/pet/{petId}/uploadImage": {
              "post": {
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
            },
            "/store/inventory": {
              "get": {
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
            },
            "/store/order": {
              "post": {
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
            },
            "/store/order/{orderId}": {
              "delete": {
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
              "get": {
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
            },
            "/user": {
              "post": {
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
            },
            "/user/createWithList": {
              "post": {
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
            },
            "/user/login": {
              "get": {
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
            },
            "/user/logout": {
              "get": {
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
            },
            "/user/{username}": {
              "delete": {
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
              "get": {
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
              "put": {
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
            },
          },
          "servers": [
            {
              "url": "https://petstore3.swagger.io/api/v3",
            },
          ],
          "tags": [
            {
              "description": "Everything about your Pets",
              "externalDocs": {
                "description": "Find out more",
                "url": "http://swagger.io",
              },
              "name": "pet",
            },
            {
              "description": "Access to Petstore orders",
              "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://swagger.io",
              },
              "name": "store",
            },
            {
              "description": "Operations about user",
              "name": "user",
            },
          ],
        },
        "endpointList": [
          {
            "meta": {
              "alias": "put_UpdatePet",
              "areParametersRequired": false,
              "hasParameters": true,
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
              "hasParameters": true,
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
                "value": "Partial<{ status: "available" | "pending" | "sold" }>",
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
                "type": "ref",
                "value": "Partial<{ name: string, status: string }>",
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
                "type": "ref",
                "value": "Partial<{ api_key: string }>",
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
                "type": "ref",
                "value": "Partial<{ additionalMetadata: string }>",
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
              "hasParameters": true,
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
              "hasParameters": true,
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
              "hasParameters": true,
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
              "type": "ref",
              "value": "User",
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
        "factory": {
          "any": [Function],
          "array": [Function],
          "boolean": [Function],
          "intersection": [Function],
          "literal": [Function],
          "never": [Function],
          "number": [Function],
          "object": [Function],
          "optional": [Function],
          "reference": [Function],
          "string": [Function],
          "union": [Function],
          "unknown": [Function],
        },
        "refs": {
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
        },
      }
    `);
  });

  test("path and operation parameters", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/parameters.yaml")) as OpenAPIObject;
    expect(mapOpenApiEndpoints(openApiDoc).endpointList).toMatchInlineSnapshot(`
      [
        {
          "meta": {
            "alias": "get_UsersId",
            "areParametersRequired": true,
            "hasParameters": true,
          },
          "method": "get",
          "operation": {
            "parameters": [
              {
                "description": "If true, the endpoint returns only the user metadata.",
                "in": "query",
                "name": "metadata",
                "required": false,
                "schema": {
                  "type": "boolean",
                },
              },
            ],
            "responses": {
              "200": {
                "description": "OK",
              },
            },
            "summary": "Gets a user by ID",
          },
          "parameters": {
            "path": {
              "id": {
                "type": "keyword",
                "value": "number",
              },
            },
            "query": {
              "type": "ref",
              "value": "Partial<{ metadata: boolean }>",
            },
          },
          "path": "/users/{id}",
          "response": {
            "type": "keyword",
            "value": "unknown",
          },
        },
      ]
    `);
  });
});

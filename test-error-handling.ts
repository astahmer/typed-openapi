import { generateFile, mapOpenApiEndpoints } from "./packages/typed-openapi/src/index.ts";

// Simple test OpenAPI spec with error responses
const openApiSpec = {
  openapi: "3.0.3",
  info: {
    title: "Error Handling Test API",
    version: "1.0.0"
  },
  paths: {
    "/users/{id}": {
      get: {
        operationId: "getUserById",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" }
          }
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    name: { type: "string" }
                  },
                  required: ["id", "name"]
                }
              }
            }
          },
          "401": {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: { type: "string" },
                    code: { type: "number" }
                  },
                  required: ["error", "code"]
                }
              }
            }
          },
          "404": {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" }
                  },
                  required: ["message"]
                }
              }
            }
          },
          "500": {
            description: "Server error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: { type: "string" }
                  },
                  required: ["error"]
                }
              }
            }
          }
        }
      }
    }
  }
};

// Generate the client
const mapped = mapOpenApiEndpoints(openApiSpec as any);
const client = generateFile(mapped);

console.log("Generated client with error handling:");
console.log(client);

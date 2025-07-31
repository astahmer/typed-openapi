import { generateFile, mapOpenApiEndpoints } from "./packages/typed-openapi/src/index.ts";

// Test OpenAPI spec with error responses
const openApiSpec = {
  openapi: "3.0.3",
  info: {
    title: "Test API",
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
          "404": {
            description: "Not found",
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
          }
        }
      }
    }
  }
};

// Generate the client
const mapped = mapOpenApiEndpoints(openApiSpec as any);
const client = generateFile(mapped);

// Extract just the usage examples to see the new API
const usageStart = client.indexOf("// With error handling");
const usageEnd = client.indexOf("*/\n\n// </ApiClient");
const usage = client.substring(usageStart, usageEnd);

console.log("New API usage examples:");
console.log(usage);

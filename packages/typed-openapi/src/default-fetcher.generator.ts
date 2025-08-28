// The contents of api-client.example.ts (kept in sync with the file)
export const generateDefaultFetcher = (options: {
  envApiBaseUrl?: string | undefined;
  clientPath?: string | undefined;
  fetcherName?: string | undefined;
  apiName?: string | undefined;
}) => {
  const {
    envApiBaseUrl = "API_BASE_URL",
    clientPath = "./openapi.client.ts",
    fetcherName = "defaultFetcher",
    apiName = "api",
  } = options;
  return `/**
 * Generic API Client for typed-openapi generated code
 *
 * This is a simple, production-ready wrapper that you can copy and customize.
 * It handles:
 * - Path parameter replacement
 * - Query parameter serialization
 * - JSON request/response handling
 * - Basic error handling
 *
 * Usage:
 * 1. Replace './${clientPath}' with your actual generated file path
 * 2. Set your ${envApiBaseUrl}
 * 3. Customize error handling and headers as needed
 */

import { type Fetcher, createApiClient } from "${clientPath}";

// Basic configuration
const ${envApiBaseUrl} = process.env["${envApiBaseUrl}"] || "https://api.example.com";

/**
 * Simple fetcher implementation without external dependencies
 */
const ${fetcherName}: Fetcher["fetch"] = async (input) => {
  const headers = new Headers();

  // Handle query parameters
  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }

  // Handle request body for mutation methods
  const body = ["post", "put", "patch", "delete"].includes(input.method.toLowerCase())
    ? JSON.stringify(input.parameters?.body)
    : undefined;

  if (body) {
    headers.set("Content-Type", "application/json");
  }

  // Add custom headers
  if (input.parameters?.header) {
    Object.entries(input.parameters.header).forEach(([key, value]) => {
      if (value != null) {
        headers.set(key, String(value));
      }
    });
  }

  const response = await fetch(input.url, {
    method: input.method.toUpperCase(),
    ...(body && { body }),
    headers,
    ...input.overrides,
  });

  return response;
};

export const ${apiName} = createApiClient({ fetch: ${fetcherName} }, API_BASE_URL);`;
};

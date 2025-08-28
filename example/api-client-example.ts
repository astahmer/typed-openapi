/**
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
 * 1. Replace './tmp/generated-client' with your actual generated file path
 * 2. Set your baseUrl
 * 3. Customize error handling and headers as needed
 */

import { type Fetcher, createApiClient } from "../tmp/generated-client.ts";

// Basic configuration
const API_BASE_URL = process.env["API_BASE_URL"] || "https://api.example.com";
const VALIDATE_REQUESTS = true; // Set to false to skip request validation
const VALIDATE_RESPONSES = true; // Set to false to skip response validation

/**
 * Simple fetcher implementation without external dependencies
 */
const fetcher: Fetcher["fetch"] = async (input) => {
  const headers = new Headers();

  // Handle query parameters
  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }

  // Handle request body for mutation methods
  const body = ["post", "put", "patch", "delete"].includes(input.method.toLowerCase())
    ? JSON.stringify(input.parameters?.body)
    : undefined;

  if (VALIDATE_REQUESTS) {
      try {
        // Example for Zod validation:
        // const endpoint = EndpointByMethod[input.method as keyof typeof EndpointByMethod];
        // const pathSchema = endpoint?.[input.url as keyof typeof endpoint];
        // if (pathSchema?.body) {
        //   pathSchema.body.parse(input.parameters?.body);
        // }

        // For now, just log that validation would happen here
        console.debug("Request validation would happen here for:", input.method, input.url);
      } catch (error) {
        throw new ValidationError("Request body validation failed", "request", error);
      }
    }

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

  // TODO: Add response validation here
  if (VALIDATE_RESPONSES) {
    try {
      // Clone response for validation (since response can only be read once)
      const responseClone = response.clone();
      const responseData = await responseClone.json();

      // Example for Zod validation:
      // const endpoint = EndpointByMethod[input.method as keyof typeof EndpointByMethod];
      // const pathSchema = endpoint?.[input.url as keyof typeof endpoint];
      // const statusSchema = pathSchema?.responses?.[response.status as keyof typeof pathSchema.responses];
      // if (statusSchema) {
      //   statusSchema.parse(responseData);
      // }

      // For now, just log that validation would happen here
      console.debug("Response validation would happen here for:", input.method, input.url, response.status);
    } catch (error) {
      throw new ValidationError("Response validation failed", "response", error);
    }
  }

  return response;
};

export const api = createApiClient({ fetch: fetcher }, API_BASE_URL);

class ValidationError extends Error {
  constructor(
    message: string,
    public readonly type: "request" | "response",
    public readonly validationErrors: unknown,
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

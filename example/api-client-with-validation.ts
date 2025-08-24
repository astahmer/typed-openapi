/**
 * Validating API Client for typed-openapi generated code
 *
 * This version includes input/output validation using the generated schemas.
 * It validates:
 * - Request body against schema before sending
 * - Response data against schema after receiving
 * - Provides type-safe error handling with schema validation errors
 *
 * Usage:
 * 1. Replace './generated/api' with your actual generated file path
 * 2. Set your API_BASE_URL
 * 3. Choose your validation runtime (zod, yup, etc.)
 * 4. Customize error handling as needed
 */

// TODO: Replace with your generated API client imports
// import { type EndpointParameters, type Fetcher, createApiClient } from './generated/api';

// For validation - import your chosen runtime's types and schemas
// Example for Zod:
// import { z } from 'zod';
// import { EndpointByMethod } from './generated/api';

// Basic configuration
const API_BASE_URL = process.env["API_BASE_URL"] || "https://api.example.com";
const VALIDATE_REQUESTS = true; // Set to false to skip request validation
const VALIDATE_RESPONSES = true; // Set to false to skip response validation

// Generic types for when you haven't imported the generated types yet
type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

type Fetcher = (method: string, url: string, params?: EndpointParameters) => Promise<Response>;

// Validation error class
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

/**
 * Validating fetcher implementation
 *
 * This example shows the structure for validation.
 * You'll need to adapt it based on your chosen validation library.
 */
const validatingFetcher: Fetcher = async (method, apiUrl, params) => {
  const headers = new Headers();

  // Replace path parameters (supports both {param} and :param formats)
  const actualUrl = replacePathParams(apiUrl, (params?.path ?? {}) as Record<string, string>);
  const url = new URL(actualUrl);

  // Handle query parameters
  if (params?.query) {
    const searchParams = new URLSearchParams();
    Object.entries(params.query).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach((val) => val != null && searchParams.append(key, String(val)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });
    url.search = searchParams.toString();
  }

  // Handle request body for mutation methods
  let body: string | undefined;
  if (["post", "put", "patch", "delete"].includes(method.toLowerCase()) && params?.body) {
    // TODO: Add request validation here
    if (VALIDATE_REQUESTS) {
      try {
        // Example for Zod validation:
        // const endpoint = EndpointByMethod[method as keyof typeof EndpointByMethod];
        // const pathSchema = endpoint?.[actualUrl as keyof typeof endpoint];
        // if (pathSchema?.body) {
        //   pathSchema.body.parse(params.body);
        // }

        // For now, just log that validation would happen here
        console.debug("Request validation would happen here for:", method, actualUrl);
      } catch (error) {
        throw new ValidationError("Request body validation failed", "request", error);
      }
    }

    body = JSON.stringify(params.body);
    headers.set("Content-Type", "application/json");
  }

  // Add custom headers
  if (params?.header) {
    Object.entries(params.header).forEach(([key, value]) => {
      if (value != null) {
        headers.set(key, String(value));
      }
    });
  }

  const response = await fetch(url, {
    method: method.toUpperCase(),
    ...(body && { body }),
    headers,
  });

  if (!response.ok) {
    // You can customize error handling here
    const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
    (error as any).response = response;
    (error as any).status = response.status;
    throw error;
  }

  // TODO: Add response validation here
  if (VALIDATE_RESPONSES) {
    try {
      // Clone response for validation (since response can only be read once)
      const responseClone = response.clone();
      const responseData = await responseClone.json();

      // Example for Zod validation:
      // const endpoint = EndpointByMethod[method as keyof typeof EndpointByMethod];
      // const pathSchema = endpoint?.[actualUrl as keyof typeof endpoint];
      // const statusSchema = pathSchema?.responses?.[response.status as keyof typeof pathSchema.responses];
      // if (statusSchema) {
      //   statusSchema.parse(responseData);
      // }

      // For now, just log that validation would happen here
      console.debug("Response validation would happen here for:", method, actualUrl, response.status);
    } catch (error) {
      throw new ValidationError("Response validation failed", "response", error);
    }
  }

  return response;
};

/**
 * Replace path parameters in URL
 * Supports both OpenAPI format {param} and Express format :param
 */
function replacePathParams(url: string, params: Record<string, string>): string {
  return url
    .replace(/{(\w+)}/g, (_, key: string) => params[key] || `{${key}}`)
    .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => params[key] || `:${key}`);
}

// TODO: Uncomment and replace with your generated createApiClient
// export const api = createApiClient(validatingFetcher, API_BASE_URL);

// Export the validation error for error handling
export { ValidationError };

// Example usage with error handling:
/*
try {
  const result = await api.post('/users', {
    body: { name: 'John', email: 'john@example.com' }
  });
  const user = await result.json();
  console.log('Created user:', user);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`${error.type} validation failed:`, error.validationErrors);
  } else {
    console.error('API error:', error);
  }
}
*/

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
 * 1. Replace './generated/api' with your actual generated file path
 * 2. Set your API_BASE_URL
 * 3. Customize error handling and headers as needed
 */

import { type Fetcher, createApiClient  } from "../tmp/generated-client.ts";

// Basic configuration
const API_BASE_URL = process.env["API_BASE_URL"] || "https://api.example.com";

/**
 * Simple fetcher implementation without external dependencies
 */
const fetcher: Fetcher = async (method, apiUrl, params) => {
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
  const body = ["post", "put", "patch", "delete"].includes(method.toLowerCase())
    ? JSON.stringify(params?.body)
    : undefined;

  if (body) {
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

export const api = createApiClient(fetcher, API_BASE_URL);

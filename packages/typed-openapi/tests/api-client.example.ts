/**
 * Generic API Client for typed-openapi generated code
 *
 * This is a simple, production-ready wrapper that you can copy and customize.
 * It handles:
 * - Path parameter replacement
 * - Query parameter serialization
 * - Cookie header encoding
 * - Body encoding by `requestFormat` (json / form-data / form-url / binary / text)
 * - Basic error handling
 *
 * Usage:
 * 1. Replace './tmp/generated-client' with your actual generated file path
 * 2. Set your baseUrl
 * 3. Customize error handling and headers as needed
 *
 * Keep in sync with src/default-fetcher.generator.ts
 */

import { type Fetcher, type RequestFormat, createApiClient } from "../tmp/generated-client.ts";
import { encodeRequestBody } from "../src/encode-request-body.ts";

// Basic configuration
const API_BASE_URL = process.env["API_BASE_URL"] || "https://api.example.com";

const isMutationMethod = (method: string) => ["post", "put", "patch", "delete"].includes(method.toLowerCase());

/**
 * Simple fetcher implementation without external dependencies
 */
const fetcher: Fetcher["fetch"] = async (input) => {
  const headers = new Headers(input.overrides?.headers);

  // Handle query parameters
  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }

  // Cookie params (OpenAPI `in: cookie`)
  if (input.parameters?.cookie) {
    const parts = Object.entries(input.parameters.cookie)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (parts.length) {
      const existing = headers.get("cookie");
      headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
    }
  }

  let body: BodyInit | undefined;
  if (isMutationMethod(input.method)) {
    const encoded = encodeRequestBody(input.requestFormat as RequestFormat, input.parameters?.body);
    body = encoded.body;
    if (encoded.contentType && !headers.has("content-type")) {
      headers.set("Content-Type", encoded.contentType);
    }
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
    ...(body !== undefined && { body }),
    ...input.overrides,
    headers,
  });

  return response;
};

export const api = createApiClient({ fetch: fetcher }, API_BASE_URL);

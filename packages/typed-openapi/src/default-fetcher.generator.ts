// The contents of api-client.example.ts (kept in sync with the file)
export const generateDefaultFetcher = (options: {
  envApiBaseUrl?: string | undefined;
  clientPath?: string | undefined;
  fetcherName?: string | undefined;
  apiName?: string | undefined;
  /** When the generated client uses EffectApiClient */
  client?: "promise" | "effect";
}) => {
  const {
    envApiBaseUrl = "API_BASE_URL",
    clientPath = "./openapi.client.ts",
    fetcherName = "defaultFetcher",
    apiName = "api",
    client = "promise",
  } = options;

  const isEffect = client === "effect";
  const importLine = isEffect
    ? `import { type Fetcher, createEffectApiClient } from "${clientPath}";`
    : `import { type Fetcher, createApiClient } from "${clientPath}";`;
  const exportLine = isEffect
    ? `export const ${apiName} = createEffectApiClient({ fetch: ${fetcherName} }, ${envApiBaseUrl});`
    : `export const ${apiName} = createApiClient({ fetch: ${fetcherName} }, ${envApiBaseUrl});`;

  return `/**
 * Generic API Client for typed-openapi generated code
 *
 * This is a simple, production-ready wrapper that you can copy and customize.
 * It handles:
 * - Path parameter replacement
 * - Query parameter serialization
 * - Cookie header encoding
 * - JSON request/response handling
 * - Basic error handling
 *
 * Usage:
 * 1. Replace './${clientPath}' with your actual generated file path
 * 2. Set your ${envApiBaseUrl}
 * 3. Customize error handling and headers as needed
 */

${importLine}

// Basic configuration
const ${envApiBaseUrl} = process.env["${envApiBaseUrl}"] || "https://api.example.com";

/**
 * Simple fetcher implementation without external dependencies.
 * Compatible with both ApiClient and EffectApiClient (promise fetcher is wrapped).
 */
const ${fetcherName}: Fetcher["fetch"] = async (input) => {
  const headers = new Headers(input.overrides?.headers);

  // Handle query parameters
  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }

  // Cookie params (OpenAPI \`in: cookie\`)
  if (input.parameters?.cookie) {
    const parts = Object.entries(input.parameters.cookie)
      .filter(([, value]) => value != null)
      .map(([key, value]) => \`\${key}=\${String(value)}\`);
    if (parts.length) {
      const existing = headers.get("cookie");
      headers.set("cookie", existing ? \`\${existing}; \${parts.join("; ")}\` : parts.join("; "));
    }
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
    ...input.overrides,
    headers,
  });

  return response;
};

${exportLine}
`;
};

import { encodeRequestBody } from "./encode-request-body.ts";

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
    ? `import { type Fetcher, type RequestFormat, createEffectApiClient } from "${clientPath}";`
    : `import { type Fetcher, type RequestFormat, createApiClient } from "${clientPath}";`;
  const exportLine = isEffect
    ? `export const ${apiName} = createEffectApiClient({ fetch: ${fetcherName} }, ${envApiBaseUrl});`
    : `export const ${apiName} = createApiClient({ fetch: ${fetcherName} }, ${envApiBaseUrl});`;

  // Inline the real helper (types erased; re-annotate for the generated file).
  const encodeRequestBodySource = `const encodeRequestBody = (${encodeRequestBody.toString()}) as (
  requestFormat: RequestFormat,
  body: unknown,
) => { body?: BodyInit; contentType?: string };`;

  return `/**
 * Generic API Client for typed-openapi generated code
 *
 * This is a simple, production-ready wrapper that you can copy and customize.
 * It handles:
 * - Path parameter replacement
 * - Query parameter serialization
 * - Cookie header encoding
 * - Body encoding by \`requestFormat\` (json / form-data / form-url / binary / text)
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

const isMutationMethod = (method: string) => ["post", "put", "patch", "delete"].includes(method.toLowerCase());

/** Encode body according to OpenAPI requestBody content type (\`requestFormat\`). */
${encodeRequestBodySource}

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
  if (input.parameters?.cookie && typeof input.parameters.cookie === "object") {
    const parts = Object.entries(input.parameters.cookie)
      .filter(([, value]) => value != null)
      .map(([key, value]) => \`\${key}=\${String(value)}\`);
    if (parts.length) {
      const existing = headers.get("cookie");
      headers.set("cookie", existing ? \`\${existing}; \${parts.join("; ")}\` : parts.join("; "));
    }
  }

  let body: BodyInit | undefined;
  if (isMutationMethod(input.method)) {
    const encoded = encodeRequestBody(input.requestFormat, input.parameters?.body);
    body = encoded.body;
    if (encoded.contentType && !headers.has("content-type")) {
      headers.set("Content-Type", encoded.contentType);
    }
  }

  // Add custom headers
  if (input.parameters?.header && typeof input.parameters.header === "object") {
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

${exportLine}
`;
};

import type { OpenAPIObject } from "openapi3-ts/oas31";
import { capitalize } from "pastable/server";
import { encodeRequestBody } from "./encode-request-body.ts";
import { generateAuthHelpersSource, parseSecuritySchemes } from "./security.ts";

// The contents of api-client.example.ts (kept in sync with the file)
export const generateDefaultFetcher = (options: {
  envApiBaseUrl?: string | undefined;
  clientPath?: string | undefined;
  fetcherName?: string | undefined;
  apiName?: string | undefined;
  /** When the generated client uses EffectApiClient */
  client?: "promise" | "effect";
  /** OpenAPI doc — when provided, emit AuthCredentials + applyAuth from securitySchemes */
  doc?: OpenAPIObject;
}) => {
  const {
    envApiBaseUrl = "API_BASE_URL",
    clientPath = "./openapi.client.ts",
    fetcherName = "defaultFetcher",
    apiName = "api",
    client = "promise",
    doc,
  } = options;

  const schemes = doc ? parseSecuritySchemes(doc) : [];
  const hasAuth = schemes.length > 0;
  const authSource = hasAuth ? generateAuthHelpersSource(schemes) : "";

  const isEffect = client === "effect";
  const importLine = isEffect
    ? `import { type Fetcher, type RequestFormat, createEffectApiClient } from "${clientPath}";`
    : `import { type Fetcher, type RequestFormat, createApiClient } from "${clientPath}";`;
  const createLine = isEffect
    ? `createEffectApiClient({ fetch: ${fetcherName} }, baseUrl)`
    : `createApiClient({ fetch: ${fetcherName} }, baseUrl)`;
  const exportLine = `/** Create a client with an explicit base URL when your runtime owns environment access. */
export const create${capitalize(apiName)} = (baseUrl = ${envApiBaseUrl}) => ${createLine};

export const ${apiName} = create${capitalize(apiName)}();`;

  // Inline the real helper (types erased; re-annotate for the generated file).
  const encodeRequestBodySource = `const encodeRequestBody = (${encodeRequestBody.toString()}) as (
  requestFormat: RequestFormat,
  body: unknown,
) => { body?: BodyInit; contentType?: string };`;

  const authConfigBlock = hasAuth
    ? `
export type DefaultFetcherConfig = {
  /** Return credentials for OpenAPI securitySchemes (sync or async). */
  getAuth?: () => AuthCredentials | Promise<AuthCredentials>;
};

let fetcherConfig: DefaultFetcherConfig = {};

/** Configure auth (and future fetcher options). Call before requests. */
export const configureFetcher = (config: DefaultFetcherConfig) => {
  fetcherConfig = { ...fetcherConfig, ...config };
};
`
    : "";

  const authApplyBlock = hasAuth
    ? `
  const auth = await fetcherConfig.getAuth?.();
  if (auth) applyAuth(headers, input.url, auth, input.security ?? []);
`
    : "";

  return `/**
 * Generic API Client for typed-openapi generated code
 *
 * Generated transport for a typed-openapi client.
 * It handles:
 * - Query parameter serialization
 * - Body encoding by \`requestFormat\` (json / form-data / form-url / binary / text)
 * - Operation headers and request overrides
${hasAuth ? " * - OpenAPI securitySchemes via \`configureFetcher({ getAuth })\`" : ""}
 *
 * Usage:
 * 1. Import create${capitalize(apiName)}() or ${apiName} from this file
 * 2. Pass a base URL to create${capitalize(apiName)}() when your runtime owns environment access
${hasAuth ? " * 3. Call configureFetcher({ getAuth: () => ({ ... }) })\n" : ""} * ${hasAuth ? "4" : "3"}. Customize error handling and headers as needed
 */

${importLine}

// Basic configuration. Pass an explicit URL to create${capitalize(apiName)}() in browser-only runtimes.
const ${envApiBaseUrl} =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.["${envApiBaseUrl}"] ??
  "https://api.example.com";

const isMutationMethod = (method: string) => ["post", "put", "patch", "delete"].includes(method.toLowerCase());

/** Encode body according to OpenAPI requestBody content type (\`requestFormat\`). */
${encodeRequestBodySource}
${hasAuth ? `\n${authSource}\n${authConfigBlock}` : ""}
/**
 * Simple fetcher implementation without external dependencies.
 * Compatible with both ApiClient and EffectApiClient (promise fetcher is wrapped).
 */
export const ${fetcherName}: Fetcher["fetch"] = async (input) => {
  const headers = new Headers(input.overrides?.headers);
  // Handle query parameters
  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }
${authApplyBlock}

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

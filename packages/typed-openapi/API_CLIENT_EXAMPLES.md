# API Client Examples

These are production-ready API client wrappers for your generated typed-openapi code. Copy the one that fits your needs
and customize it.

> **Prefer `--default-fetcher`.** It matches the current `Fetcher` shape (`fetch(input)` with `requestFormat`, cookies,
> etc.). The checked-in example at [`tests/integrations/api-client.example.ts`](./tests/integrations/api-client.example.ts) stays in sync with
> `src/default-fetcher.generator.ts`.

## Basic API Client ([api-client.example.ts](./tests/integrations/api-client.example.ts))

A simple, dependency-free client that handles:

- Path parameter replacement (`{id}` and `:id` formats)
- Query parameter serialization (including arrays)
- Cookie header encoding (`parameters.cookie` → `Cookie`)
- Body encoding by `requestFormat` (`json` / `form-data` / `form-url` / `binary` / `text`)
- SSE responses (`responseFormat: "sse"` → `ReadableStream` via `response.body`, no JSON parse)
- Custom headers
- Basic error handling

```typescript
/**
 * Keep in sync with src/default-fetcher.generator.ts
 */
import { type Fetcher, type RequestFormat, createApiClient } from "../tmp/generated-client.ts";
import { encodeRequestBody } from "../src/encode-request-body.ts";

const API_BASE_URL = process.env["API_BASE_URL"] || "https://api.example.com";

const isMutationMethod = (method: string) => ["post", "put", "patch", "delete"].includes(method.toLowerCase());

const fetcher: Fetcher["fetch"] = async (input) => {
  const headers = new Headers(input.overrides?.headers);

  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }

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

  if (input.parameters?.header) {
    Object.entries(input.parameters.header).forEach(([key, value]) => {
      if (value != null) headers.set(key, String(value));
    });
  }

  return fetch(input.url, {
    method: input.method.toUpperCase(),
    ...(body !== undefined && { body }),
    ...input.overrides,
    headers,
  });
};

export const api = createApiClient({ fetch: fetcher }, API_BASE_URL);
```

### Setup

1. Generate with `--default-fetcher` **or** copy `tests/integrations/api-client.example.ts`
2. Point the import at your generated API file
3. Set `API_BASE_URL`

### Usage

```typescript
const users = await api.get("/users", {
  query: { page: 1, limit: 10, tags: ["admin", "user"] },
});

const newUser = await api.post("/users", {
  body: { name: "John", email: "john@example.com" },
});

const user = await api.get("/users/{id}", {
  path: { id: "123" },
});

// Cookies (OpenAPI `in: cookie`)
await api.get("/session", {
  cookie: { sessionId: "abc" },
});

// Multipart / binary — requestFormat comes from the OpenAPI requestBody content type
await api.post("/pet/{petId}/uploadImage", {
  path: { petId: 1 },
  body: formDataOrBlob,
});
```

## Validating API Client

When generating with `--runtime zod` (or valibot / effect / typebox / typia / …), the built-in `ApiClient` already
validates via `--validate-side` (`input` | `output` | `both`). Prefer that over a hand-rolled wrapper.

```typescript
import { createApiClient, EndpointByMethod } from "./generated/api";
import { z } from "zod"; // if runtime=zod

const api = createApiClient({ fetch: fetcher }, "https://api.example.com", { validate: "both" });

// Override per-call or globally:
api.setValidate("input");
```

Custom `onValidate` hook (swap Zod parse for your own):

```typescript
api.setOnValidate(async ({ side, schema, value }) => {
  // schema is the emitted runtime schema for that param group / response
  return (schema as z.ZodType).parse(value);
});
```

## Customization Ideas

- **Authentication**: token handling, refresh, auth headers
- **Retries**: retry failed requests
- **Caching**: response caching with TTL
- **Logging**: request/response logging
- **SSE**: read `ReadableStream` from SSE endpoints (`text/event-stream`) with your own event parser — output validation
  is skipped for `responseFormat: "sse"`

## Error Handling with withResponse

```typescript
const result = await api.get("/users/{id}", {
  path: { id: "123" },
  withResponse: true,
});

if (result.ok) {
  const user = result.data;
  console.log("Status:", result.status);
} else {
  console.error(`Error ${result.status}:`, result.data);
}
```

## TanStack Query Integration

- [TANSTACK_QUERY_EXAMPLES.md](./TANSTACK_QUERY_EXAMPLES.md)
- [TANSTACK_QUERY_ERROR_HANDLING.md](./TANSTACK_QUERY_ERROR_HANDLING.md)

Works with both promise `ApiClient` and Effect `EffectApiClient` (`--client effect`): the generated TanStack wrapper
uses `Effect.runPromise` when needed.

Key features:

- Type-safe mutations with `withResponse` / `selectFn`
- Automatic error type inference from OpenAPI specs
- Cookie params in query keys when present

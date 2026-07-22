---
title: Promise client and default fetcher
description: See what `--default-fetcher` writes, what it handles, and when to keep your own transport.
sidebar:
  label: Client & fetcher
  order: 1
---

The default client type is `promise`. It describes typed operations but does not make HTTP requests until you give it a fetcher.

Use it for ordinary `async`/`await` code. It does not require React, a runtime schema library, or a particular HTTP package.

## What `--default-fetcher` writes

The flag writes a second TypeScript file next to the generated client. It exports `api`, created with the generated `defaultFetcher`.

```sh
pnpm exec typed-openapi ./openapi.yaml \
  --output src/api/openapi.ts \
  --default-fetcher \
  --format
```

The generated fetcher:

- receives a `URL` with path parameters already substituted;
- writes serialized query parameters to that URL;
- receives operation headers and cookies already prepared by the generated client;
- encodes JSON, multipart, URL-encoded, binary, and text bodies from `requestFormat`;
- forwards `overrides` to native `fetch` and returns the native `Response`.

This is the implementation shape it writes. The auth block is added only when the OpenAPI document has `securitySchemes`:

```ts
const API_BASE_URL =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.["API_BASE_URL"] ?? "https://api.example.com";

export const defaultFetcher: Fetcher["fetch"] = async (input) => {
  const headers = new Headers(input.overrides?.headers);

  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }

  // When the spec has security schemes, the generated file then calls:
  // applyAuth(headers, input.url, auth, input.security ?? []);

  let body: BodyInit | undefined;
  if (["post", "put", "patch", "delete"].includes(input.method.toLowerCase())) {
    const encoded = encodeRequestBody(input.requestFormat, input.parameters?.body);
    body = encoded.body;
    if (encoded.contentType && !headers.has("content-type")) {
      headers.set("Content-Type", encoded.contentType);
    }
  }

  for (const [key, value] of Object.entries(input.parameters?.header ?? {})) {
    if (value != null) headers.set(key, String(value));
  }

  return fetch(input.url, {
    method: input.method.toUpperCase(),
    ...(body !== undefined && { body }),
    ...input.overrides,
    headers,
  });
};

export const createApi = (baseUrl = API_BASE_URL) =>
  createApiClient({ fetch: defaultFetcher }, baseUrl);

export const api = createApi();
```

`encodeRequestBody()` is also written into that file. It uses `JSON.stringify()` for JSON, lets `fetch` provide the multipart boundary for `FormData`, uses `URLSearchParams` for form posts, and rejects an invalid binary body before making a request.

## Configure the generated file

The generated default reads `globalThis.process?.env?.API_BASE_URL` when it exists. For a browser app, keep the generated file unchanged and create the client with the base URL your bundler exposes:

```ts
import { createApi } from "./api/api.client";

export const api = createApi(import.meta.env.VITE_API_URL);
```

If your OpenAPI document has security schemes, configure the generated fetcher once before requests:

```ts
import { configureFetcher } from "./api/api.client";

configureFetcher({
  getAuth: async () => ({ bearerAuth: "token-from-session" }),
});
```

Credential keys come from OpenAPI security-scheme names. The fetcher only applies the first security requirement that the returned credentials satisfy for that operation; it sends no credential for an operation that declares none. Read [bodies, cookies, and auth](/clients/requests-auth-and-bodies/) for every supported placement.

## Call the client

```ts
import { api } from "./api/api.client";

const pets = await api.get("/pet/findByStatus", {
  query: { status: "available" },
});

const created = await api.post("/pet", {
  body: { id: 7, name: "Mochi", status: "available" },
});
```

Every path, query, header, cookie, body, success response, and declared error body is inferred from the selected OpenAPI operation. The path string is checked too, so a typo does not silently turn into an untyped request.

## Use the generic request method

`request()` is useful when the HTTP verb is data-driven but the endpoint is still known to TypeScript:

```ts
const response = await api.request("GET", "/pet/{petId}", {
  path: { petId: 7 },
});

const pet = await response.json();
```

## Bring your own fetcher

Wrap the exported generated fetcher when you only need tracing, retry, or logging. This preserves body encoding, cookies, headers, query parameters, and security behavior.

```ts
import { createApiClient, type Fetcher } from "./openapi";
import { defaultFetcher } from "./api.client";

const fetcher: Fetcher["fetch"] = async (input) => {
  console.info("API request", input.method, input.path);
  return defaultFetcher(input);
};

export const api = createApiClient({ fetch: fetcher }, "https://api.example.com");
```

## When not to use it

Keep your own fetcher when the application already has a transport that owns retry, tracing, auth refresh, request signing, or environment access. Implement the generated `Fetcher["fetch"]` contract and preserve `input.urlSearchParams`, `input.parameters`, `input.requestFormat`, and `input.security`. The client types work in Node because the response contract is smaller than the DOM `Response` type.

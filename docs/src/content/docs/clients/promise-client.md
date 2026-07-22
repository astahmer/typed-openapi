---
title: Promise client and default fetcher
description: See what `--default-fetcher` writes, what it handles, and when to keep your own transport.
sidebar:
  label: Promise client
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
- merges operation headers and OpenAPI cookie parameters;
- encodes JSON, multipart, URL-encoded, binary, and text bodies from `requestFormat`;
- forwards `overrides` to native `fetch` and returns the native `Response`.

This is the implementation shape it writes (the auth block is added only when the OpenAPI document has `securitySchemes`):

```ts
const API_BASE_URL = process.env["API_BASE_URL"] || "https://api.example.com";

const defaultFetcher: Fetcher["fetch"] = async (input) => {
  const headers = new Headers(input.overrides?.headers);

  if (input.urlSearchParams) {
    input.url.search = input.urlSearchParams.toString();
  }

  if (input.parameters?.cookie && typeof input.parameters.cookie === "object") {
    const cookies = Object.entries(input.parameters.cookie)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (cookies.length) headers.set("cookie", cookies.join("; "));
  }

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

export const api = createApiClient({ fetch: defaultFetcher }, API_BASE_URL);
```

`encodeRequestBody()` is also written into that file. It uses `JSON.stringify()` for JSON, lets `fetch` provide the multipart boundary for `FormData`, uses `URLSearchParams` for form posts, and rejects an invalid binary body before making a request.

## Configure the generated file

The generated base URL line uses `process.env["API_BASE_URL"]`. Keep it in Node projects. Change it in browser-only projects to the environment mechanism your bundler exposes, for example `import.meta.env` in Vite. The generator cannot safely guess that policy.

If your OpenAPI document has security schemes, configure the generated fetcher once before requests:

```ts
import { configureFetcher } from "./api/api.client";

configureFetcher({
  getAuth: async () => ({ bearerAuth: "token-from-session" }),
});
```

Credential keys come from OpenAPI security-scheme names. Read [bodies, cookies, and auth](/clients/requests-auth-and-bodies/) for every supported placement.

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

Create the client with an adapter around `fetch`, Axios, Ky, or an existing transport. The important part is honoring `requestFormat`, query parameters, headers, and cookies.

```ts
import { createApiClient, type Fetcher } from "./openapi";

const fetcher: Fetcher["fetch"] = async (input) => {
  if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();

  return fetch(input.url, {
    method: input.method.toUpperCase(),
    headers: input.overrides?.headers,
  });
};

export const api = createApiClient({ fetch: fetcher }, "https://api.example.com");
```

## When not to use it

Keep your own fetcher when the application already has a transport that owns retry, tracing, auth refresh, request signing, or environment access. Implement the generated `Fetcher["fetch"]` contract and preserve `input.urlSearchParams`, `input.parameters`, and `input.requestFormat`. The client types work in Node because the response contract is smaller than the DOM `Response` type.

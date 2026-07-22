---
title: Promise client and generated fetcher
description: Call endpoints with type inference, or bring your own fetch implementation.
sidebar:
  label: Promise client
  order: 1
---

The default client type is `promise`. It is intentionally headless: generation describes endpoints, while a fetcher decides how your app sends HTTP requests.

Choose this client for ordinary `async`/`await` code. It does not force React, a runtime schema library, or a particular HTTP package into your application.

## Use the generated Fetch client

Generate both client types and a Fetch-based implementation:

```sh
pnpm exec typed-openapi ./openapi.yaml \
  --output src/api/openapi.ts \
  --default-fetcher \
  --format
```

`src/api/api.client.ts` exports `api`. Set its environment variable and call it by the documented path template:

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

For a complete Fetch implementation—including body encoding, cookies, and SSE support—prefer `--default-fetcher` and edit the generated file.

## Keep transport policy in one place

The generated Fetch client is the right place for a base URL and OpenAPI-driven authentication. Keep cross-cutting policy—retry, tracing, correlation IDs, or a custom `fetch` implementation—inside the fetcher rather than repeating it at every operation call. See [bodies, cookies, and auth](/clients/requests-auth-and-bodies/) for the request contract it must preserve.

:::note[Browser and Node]
The client uses a small `FetcherResponse` contract instead of requiring the DOM `Response` type, so generated types stay usable in Node projects too.
:::

---
title: Request bodies, cookies, and auth
description: Let the OpenAPI request body and security scheme drive the emitted Fetch behavior.
sidebar:
  order: 4
---

The generated client tells a fetcher how to encode each operation with `requestFormat`. The generated default fetcher implements every built-in format.

| OpenAPI content type | `requestFormat` | Generated behavior |
| --- | --- | --- |
| `application/json` | `json` | `JSON.stringify()` |
| `multipart/form-data` | `form-data` | `FormData` and browser-provided boundary |
| `application/x-www-form-urlencoded` | `form-url` | `URLSearchParams` |
| `application/octet-stream` | `binary` | raw `Blob`, buffer, bytes, or string |
| `text/plain` | `text` | `String(body)` |

## Post JSON, multipart, and cookies

```ts
await api.post("/pets", {
  body: { name: "Mochi" },
});

await api.post("/pet/{petId}/uploadImage", {
  path: { petId: 7 },
  body: new FormData(),
});

await api.get("/session", {
  cookie: { sessionId: "session_123" },
  header: { "x-request-id": crypto.randomUUID() },
});
```

## Use OpenAPI `securitySchemes`

When the document declares security schemes, `--default-fetcher` emits `AuthCredentials` and `configureFetcher()`. Bearer, Basic, OAuth2/OpenID Connect, and API keys in headers, queries, or cookies are applied automatically.

```ts
import { configureFetcher } from "./api/api.client";

configureFetcher({
  getAuth: async () => ({
    bearerAuth: "token-from-your-session",
    apiKey: "public-key",
  }),
});
```

`mutualTLS` and unknown schemes remain represented in the credentials type but are not applied by the default fetcher; configure those at the transport or platform layer.

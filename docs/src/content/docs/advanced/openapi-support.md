---
title: OpenAPI details that matter
description: Handle external refs, response formats, default values, multiple success responses, and recursive schemas.
sidebar:
  order: 3
---

## Bundle multi-file OpenAPI documents

The CLI uses Swagger Parser bundling, so external `$ref` files are supported. Point it at the root document; referenced files resolve from that document’s location.

```text
openapi/
├── main.yaml
└── schemas.yaml
```

```sh
pnpm exec typed-openapi ./openapi/main.yaml --output src/api/openapi.ts
```

## Handle multiple success responses

Success status codes default to the `2xx` and `3xx` ranges. A method’s inferred return type covers every declared successful response body. Use `withResponse` when your application needs the status and headers too.

```ts
const result = await api.get("/export", { withResponse: true });
if (result.ok) {
  console.log(result.status, result.headers.get("content-type"));
}
```

## Stream server-sent events

When an operation declares `text/event-stream`, the generated response is a `ReadableStream`. Output validation is intentionally skipped because an event stream is not a single JSON value.

```ts
const stream = await api.get("/events");
const reader = stream.getReader();
```

## Work with binary responses and bodies

Binary schemas and request bodies use `Blob`. For an endpoint that returns `application/octet-stream`:

```ts
const archive = await api.get("/exports/{id}/archive", { path: { id: "exp_123" } });
await saveBlob(archive);
```

The generated default fetcher also accepts `Blob`, `ArrayBuffer`, `Uint8Array`, or strings for binary request bodies.

## Defaults, recursion, and read/write fields

- Runtime adapters emit OpenAPI `default` values.
- Recursive component schemas use each adapter’s lazy/suspend strategy.
- Inline request objects omit `readOnly` fields; inline response objects omit `writeOnly` fields.
- Named `$ref` schemas stay shared across endpoint contexts.

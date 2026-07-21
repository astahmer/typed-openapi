# medium: binary requestFormat silently corrupts plain objects

- **status:** open
- **revision:** nyvnvqtr (`feat: default fetcher encodes form-data, form-url, binary, text`)
- **resolved_by:**
- **paths:** packages/typed-openapi/src/encode-request-body.ts, packages/typed-openapi/src/default-fetcher.generator.ts

## Comment

For `requestFormat: "binary"`, `encodeRequestBody` falls back to `String(body)` when the payload is not a string,
`Blob`, or buffer view. Passing a plain object (easy to do when the OpenAPI schema is an object with a binary field, or
when callers pass the wrong shape) produces the literal body `"[object Object]"` with `application/octet-stream`. That
fails quietly at runtime rather than rejecting the input.

## Evidence

```ts
case "binary": {
  if (typeof body === "string" || body instanceof Blob || body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
    return { body: body as BodyInit, contentType: "application/octet-stream" };
  }
  return { body: String(body), contentType: "application/octet-stream" };
}
```

Tests cover Blob / bytes / string only (`encode-request-body.test.ts`); there is no assertion for object payloads.

The helper is inlined into every `--default-fetcher` output via `encodeRequestBody.toString()`, so the behavior affects
all generated fetchers.

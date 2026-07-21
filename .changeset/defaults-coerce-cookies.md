---
"typed-openapi": minor
---

Defaults, coerce, cookies, ApiResponse, and readOnly/writeOnly.

- Emit OAS `default` on runtime schemas (zod `.default`, valibot/effect equivalents)
- `--coerce` / `--no-coerce` for path|query|cookie|header number/boolean string coercion (default on when runtime ≠
  none)
- Cookie parameters (`in: cookie`, including `content` schemas) + Cookie header encoding
- `FetcherResponse` replaces DOM `Response` on the generated client (avoids clashing with OAS `ApiResponse` schemas);
  request params use `InferSchemaInput` (`z.input` / Encoded)
- Strip `readOnly` from request bodies and `writeOnly` from responses

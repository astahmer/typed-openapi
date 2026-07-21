---
"typed-openapi": minor
---

EffectApiClient error channel + leaner generated TypeScript inference.

- Remap non-status failures to `HttpClientError` (original in `cause`); status errors stay `TypedStatusError`
- Type Effect request params with `InferSchemaInput` (same encoded/input types as the promise client)
- Speed up IDE/tsc on large clients: `OptionalUndefinedKeys` once on `InferSchemaInput`, direct `InferSuccessData`,
  overload order for `withResponse`
- TanStack Query wrappers take `ApiCallParams` so path/query/body stay typed with both clients

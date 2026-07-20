---
"typed-openapi": patch
---

Honor OpenAPI `requestFormat` in the client and default fetcher.

- Pass `requestFormat` into `Fetcher.fetch` (from generated `endpointRequestFormats`)
- `--default-fetcher` encodes form-data / form-url / binary / text (not only JSON)

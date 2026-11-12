---
"typed-openapi": patch
---

Accept numeric UTC offsets for `format: date-time` in the zod and zod3 runtimes. OpenAPI `date-time` is an RFC 3339
date-time, which allows `+00:00` as well as `Z`, but the emitted `z.iso.datetime()` / `.datetime()` only accepted `Z`.

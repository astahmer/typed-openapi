---
"typed-openapi": major
---

Replace generated per-endpoint MSW mock factories with a typed method/path facade. Generated MSW files now expose `mock.<method>(path)` for typed response factories and custom resolvers, alongside the default `handlers` list and `mswWorkerOptions`.

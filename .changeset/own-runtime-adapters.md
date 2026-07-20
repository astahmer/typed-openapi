---
"typed-openapi": major
---

Replace `@sinclair/typebox-codegen` with a first-party Schema IR and pluggable runtime adapters.

- Runtimes: `zod`, `zod3`, `effect`, `effect3`, `valibot`, `arktype` (plus `none`)
- New `--validation loose|formats|strict` for constraint depth
- Subpath exports: `typed-openapi/runtimes`, `typed-openapi/runtimes/*`
- Dropped shipped adapters for yup / io-ts / typebox (easy to re-add via the adapter contract)

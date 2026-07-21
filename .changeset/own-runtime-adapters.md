---
"typed-openapi": major
---

Replace `@sinclair/typebox-codegen` with a first-party Schema IR and pluggable runtime adapters.

- Runtimes: `zod`, `zod3`, `effect`, `effect3`, `valibot`, `arktype`, `typebox`, `typia` (plus `none`)
- New `--validation loose|formats|strict` for constraint depth
- Subpath exports: `typed-openapi/runtimes`, `typed-openapi/runtimes/*`
- Dropped shipped adapters for yup / io-ts (re-add via the adapter contract; typebox/typia ship again)
- **Removed exports:** `Box` / `createBoxFactory` / `openApiSchemaToTs` / `ts-factory` — use Schema IR + `generateFile`
- Optional peers: `zod`, `effect`, `@effect/schema`, `valibot`, `arktype`, `@sinclair/typebox`, `typia` — install only
  what you emit

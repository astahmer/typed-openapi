# Effect Schema runtime for typed-openapi

**Superseded** by the own-runtime-adapters rewrite (2026-07-20).

The Sinclair `typebox-codegen` path (including `ModelToEffect` + post-process) was removed. Runtime emission now goes:

`OpenAPI → Schema IR → RuntimeAdapter` (`packages/typed-openapi/src/schema-ir`, `packages/typed-openapi/src/runtimes`).

Use:

```sh
typed-openapi spec.yaml --runtime effect
typed-openapi spec.yaml --runtime effect3
typed-openapi spec.yaml --runtime zod --validation strict
```

See root `README.md` and the Cursor plan “Own runtime adapters (kill Sinclair)” for the full design.

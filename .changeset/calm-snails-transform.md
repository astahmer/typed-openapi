---
"typed-openapi": minor
---

Add a `transformSchema` option for custom type and runtime transforms, expressible in TS/JS config files via `defineConfig`. The callback runs on each OpenAPI SchemaObject before IR conversion and can return `{ type }`, `{ runtime }`, or both to override the generated TypeScript and/or the runtime validator expression — for example branding integers, mapping `format: date-time` to `Temporal.Instant`, or supplying a per-runtime validator.

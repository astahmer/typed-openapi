---
"typed-openapi": patch
---

Deduplicate Effect defaulted schemas, tighten generated client types, typecheck snapshots.

- Intern reusable Effect `optionalWith` / default helpers (`Boolean_default_false_prop`, …) instead of inlining
  transforms
- Avoid double-defaults on nullable schemas (IR keeps default on the outer union only)
- Rename client surface to `FetcherResponse` (petstore has an OAS schema named `ApiResponse`)
- Reduce `as any` / `as never` in generated clients; widen `EndpointParameters` for assignability
- `--default-fetcher` uses `createEffectApiClient` when `--client effect`
- Snapshot files are typechecked in CI via `snapshots-typecheck.test.ts`

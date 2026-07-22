# C007 — TanStack generator emits `as EndpointParameters` casts for CI tsc

- **Status:** open
- **Severity:** low
- **Introduced in:** `mxnklztq` — `fix(tanstack): cast query params for CI exactOptionalPropertyTypes`
- **Files:** `packages/typed-openapi/src/tanstack-query.generator.ts`

## Comment

Generated client uses:

```ts
createQueryKey(path as string, params[0] as EndpointParameters | undefined, true);
```

and `delete keyParams["_infinite"]` for index-signature/`exactOptionalPropertyTypes` compliance. Correct for CI, but
casts paper over `ApiCallParams` vs `EndpointParameters` mismatch. Prefer widening `createQueryKey` / aligning param
types so the generated code needs no assertion.

## Suggested fix

Type `createQueryKey`’s options as `EndpointParameters | ApiCallParams | undefined` (or a shared bag type) so
`params[0]` assigns cleanly.

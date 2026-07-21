# Shipping notes

Historical triage / SSE / multipart work is done. Remaining is **ship the branch**.

Regression suites:

- `packages/typed-openapi/tests/github-issues/` (issue-specific + `regression.test.ts`)
- `packages/typed-openapi/tests/integrations/` (MSW + runtime matrix)
- `packages/typed-openapi/tests/tstyche/` (per-runtime + effect-client type suites)

**Do not comment on GitHub until the PR merges.** Close via PR description keywords (changesets are changelog-only —
GitHub does **not** auto-close from `.changeset/*.md`).

## Suggested PR description

```md
## Summary

- First-party Schema IR + runtime adapters (zod / zod3 / effect / effect3 / valibot / arktype / typebox / typia);
  `--runtime effect` targets Effect Schema v4 (`effect3` keeps `@effect/schema`)
- Effect-native client (`--client effect`) with remapped errors (`TypedStatusError | HttpClientError`), typed request
  params via `InferSchemaInput`, and TanStack wrappers that `Effect.runPromise` when needed
- Defaults, coerce, cookies, `FetcherResponse`, validate-side / filters / schema-naming
- SSE (`text/event-stream` → `ReadableStream`), binary/`Blob`, default-fetcher `requestFormat` encoding
- Faster generated-client TypeScript inference; MSW + tstyche coverage for promise/effect clients

## Test plan

- [ ] `pnpm --filter typed-openapi test:unit`
- [ ] `pnpm --filter typed-openapi test:runtime:run`
- [ ] `pnpm --filter typed-openapi test:matrix:integration`
- [ ] `pnpm --filter typed-openapi test:types` (tstyche)
- [ ] Spot-check playground / `typed-openapi/node` import on Vercel build

Closes #93 Closes #29 Closes #26 Closes #61 Closes #32 Closes #27 Closes #18 Closes #121 Closes #34 Closes #46 Closes
#91 Closes #114 Closes #62
```

# medium: CI no longer runs `packages/web` tests

- **status:** open
- **revision:** lovktzts (`test:all`)
- **resolved_by:**
- **paths:** `.github/workflows/build-and-test.yaml`

## Comment

CI workflow drops the root `pnpm test` step and consolidates on `pnpm --filter typed-openapi test:all`. That
orchestrator only exercises `packages/typed-openapi` (unit, matrix, runtime MSW, attest, tstyche).

`packages/web` declares `"test": "vitest"` but is never invoked in CI after this change. Regressions in the Vercel
playground (including the new `fs` shim / config-entry split from vvxwlxun) would not fail the pipeline.

**Fix:** Add `pnpm --filter web test` (or `vitest run`) as a separate CI step, or extend `test:all` / root `test:all` to
cover web.

## Evidence

Before (removed steps):

```yaml
- name: Run integration test (MSW)
  run: pnpm -F typed-openapi test:runtime
- name: Test
  run: pnpm test
- name: Test types
  run: pnpm --filter typed-openapi test:types
```

After:

```yaml
- name: Test all (unit, types, attest, matrix, runtime, bench)
  run: pnpm --filter typed-openapi test:all
```

Root `package.json` `"test"` still targets typed-openapi only; web is orphaned from automation.

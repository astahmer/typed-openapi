# C011 — Kombo/typecheck diagnostic filters duplicated in three places

- **Status:** resolved
- **Severity:** medium
- **Introduced in:** visible across `snwootwz` / `wmpxtssu` / `pxqupsry`
- **Resolved in:** review follow-up — `test: shared typecheck diagnostic filters`
- **Files:** `tests/helpers/typecheck-filters.ts` (+ matrix / snapshots / audit consumers)

## Comment

Nearly identical allowlists diverged (`wmpxtssu` vs snapshots/audit), causing C005.

## Resolution

Single `filterTypecheckDiagnostics` helper; matrix/snapshots/audit delegate to it. Unit coverage in helper consumers +
`tests/review-fixes.test.ts`.

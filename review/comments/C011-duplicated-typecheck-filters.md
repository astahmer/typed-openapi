# C011 — Kombo/typecheck diagnostic filters duplicated in three places

- **Status:** open
- **Severity:** medium
- **Introduced in:** visible across `snwootwz` / `wmpxtssu` / `pxqupsry`
- **Files:**
  - `tests/integrations/runtime-client-matrix.typecheck.test.ts`
  - `tests/snapshots-typecheck.test.ts`
  - `tests/tsc-audit-samples.test.ts`

## Comment

Nearly identical allowlists diverged (`wmpxtssu` vs snapshots/audit), causing C005. Export one helper (e.g. `tests/helpers/typecheck-filters.ts`) used by all three, with unit tests for keep/drop rules.

## Suggested fix

Shared `filterKomboClientDiagnostics(out, { runtime, allowCircular })` + matrix usage.ts pass-through.

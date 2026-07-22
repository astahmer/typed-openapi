# C009 — Kombo + arktype still relies on TS2322/2339/2345 allowlists

- **Status:** open
- **Severity:** medium
- **Introduced in:** long-standing; reaffirmed by `pxqupsry` after `pmosvyqp`
- **Files:** matrix / snapshots / audit typecheck filters; `src/runtimes/arktype/index.ts`

## Comment

Nested binary module unions (`pmosvyqp`) improve emit shape, but large Kombo schemas still need arktype Infer noise
filtered. That is acceptable technical debt if documented and scoped (runtime === arktype + kombo only). Do not broaden
filters back to TS2456/7022/7024/zod TS2345.

## Follow-up

Track upstream arktype typing limits; periodically try removing TS2322 from the allowlist after arktype upgrades.

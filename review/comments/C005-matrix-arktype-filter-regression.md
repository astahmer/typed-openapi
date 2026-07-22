# C005 — Matrix typecheck dropped arktype Infer allowlist while claiming to keep it

- **Status:** resolved
- **Severity:** high
- **Introduced in:** `wmpxtssu` — `test: stop filtering TS7022/7024 and zod disc+null TS2345`
- **Resolved in:** `pxqupsry` — `test: restore kombo arktype Infer filters in matrix typecheck`
- **Files:** `tests/integrations/runtime-client-matrix.typecheck.test.ts`

## Comment

Commit message: “Keep only arktype Infer noise + leftover TS2502 allowlists.” Diff for the matrix filter only kept `TS2502` — arktype `TS2322` / `TS2339` / `TS2345` were never in that filter before and were not added. Snapshots/audit still filtered arktype Infer noise; matrix typecheck then failed on kombo+arktype (`Source has 5 element(s) but target allows only 3`) until later fixes.

## Resolution

`pmosvyqp` nested module unions; `pxqupsry` restored arktype Infer filters (+ unit coverage of `filterDiagnostics`). Remaining debt tracked in **C009**.

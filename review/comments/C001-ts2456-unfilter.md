# C001 — Unfiltering TS2456 is correct but depends on interface emit

- **Status:** resolved
- **Severity:** info
- **Introduced in:** `snwootwz` — `test: stop filtering TS2456 in kombo typechecks`
- **Resolved in:** precondition from parent `wmnmwstk` (out of review range); validated by later kombo
  snapshot/typecheck green
- **Files:** `tests/integrations/runtime-client-matrix.typecheck.test.ts`, `tests/snapshots-typecheck.test.ts`,
  `tests/tsc-audit-samples.test.ts`

## Comment

Removing the TS2456 allowlist is the right regression gate for recursive schemas, but only if named recursive
records/objects emit as `interface` (or otherwise break the circular alias cycle). This revision assumes that; it does
not itself emit interfaces.

## Resolution

Parent work (`wmnmwstk`) emits interfaces for recursive record/object schemas. Subsequent kombo typechecks stay green
without TS2456 filters. No action in this range.

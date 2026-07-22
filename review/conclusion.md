# Review conclusion — `snwootwz` → tip (+ follow-ups)

## Verdict

Stack is **merge-worthy** after review follow-ups. High-severity IR/runtime/security holes from the reviewed range are
fixed and tested. Remaining opens are intentional debt or low-priority polish.

## Open comments (actionable later)

| ID                                                      | Severity | Summary                                                                            | File                                   |
| ------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------- | -------------------------------------- |
| [C007](./comments/C007-tanstack-casts.md)               | low      | TanStack generator still emits `as EndpointParameters` casts                       | `C007-tanstack-casts.md`               |
| [C009](./comments/C009-arktype-kombo-allowlist-debt.md) | medium   | Kombo+arktype still needs TS2322/2339/2345 allowlists                              | `C009-arktype-kombo-allowlist-debt.md` |
| [C010](./comments/C010-vitest-fs-env-gate.md)           | low      | Web Vitest fs bypass via `process.env.VITEST` (works; optional `vitest.config.ts`) | `C010-vitest-fs-env-gate.md`           |

## Resolved in-range / by follow-up

| ID                                                          | Notes                                         |
| ----------------------------------------------------------- | --------------------------------------------- |
| [C001](./comments/C001-ts2456-unfilter.md)                  | TS2456 unfilter OK given recursive interfaces |
| [C002](./comments/C002-complex-enum-to-null.md)             | Complex enums → literal unions                |
| [C003](./comments/C003-nullable-recursive-skip-explicit.md) | Nullable recursive explicit types             |
| [C004](./comments/C004-readonlyarray-replace.md)            | `readonlyArrays` IrToTs option                |
| [C005](./comments/C005-matrix-arktype-filter-regression.md) | Matrix arktype filter restored (`pxqupsry`)   |
| [C006](./comments/C006-apikey-missing-in.md)                | Incomplete apiKey → unsupported               |
| [C008](./comments/C008-tstyche-suite-newline.md)            | gen-tstyche newline (`trxmplup`)              |
| [C011](./comments/C011-duplicated-typecheck-filters.md)     | Shared typecheck filter helper                |
| [C012](./comments/C012-tests-snapshots-timeouts.md)         | Snapshot/timeout noise — info only            |

## Suggested next steps (not blocking)

1. **C009** — After next arktype bump, try dropping TS2322 from kombo allowlist.
2. **C007** — Widen `createQueryKey` options type to remove generated casts.
3. **C010** — Optional dedicated `vitest.config.ts` without browser `fs` alias.

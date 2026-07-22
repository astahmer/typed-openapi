# C012 — Snapshot / timeout / oxfmt revisions

- **Status:** resolved
- **Severity:** info
- **Revisions:** `vmlknkoz`, `tkwnxtsp`, `yuzqrysk`, `wknkwwyx`, `ykrnqlrx`, `wzlqnvpn`, `spwzwtrl`, `kpovwyyt`, plus
  coverage in `mkpuylru` tests

## Comment

Test coverage additions (`const-and-circular`, `const-literal.e2e`, `lazy-recursive-types.e2e`, arktype module unions,
security exactOptional) are solid. Snapshot refreshes are mechanical. E2E timeout bumps (`lazy-recursive`,
`const-literal`) are load-related — prefer shared `E2E_TSC_TIMEOUT` constant later (nit).

No blocking issues in these revisions.

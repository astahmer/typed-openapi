---
"typed-openapi": patch
---

Issue triage: fix/verify GitHub regressions (#93, #29, #26, #61, #32, #27, #18, #121, #34, #46, #91).

- Optional all-optional param groups (`query?:`) so calls like `api.get("/pet/findByStatus")` typecheck (#32)
- Ref-resolver supports `#/definitions/*` nested refs (#27)
- Exotic schema types (e.g. FHIR) map to `unknown` instead of throwing (#18)
- README documents Fetcher `requestFormat` contract
- Regression suite: `tests/github-issues.regression.test.ts`

Note: put `Closes #N` in the **PR description** for GitHub auto-close (changesets do not close issues).
#114 / #62 closed as not planned (obsolete / out of scope).

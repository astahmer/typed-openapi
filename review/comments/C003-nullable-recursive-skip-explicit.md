# C003 — Nullable recursive schemas skip explicit runtime type annotations

- **Status:** resolved
- **Severity:** high
- **Introduced in:** `lumokwqm` — `fix(runtimes): explicit types for recursive lazy schemas`
- **Resolved in:** review follow-up — `fix(runtimes): explicit types for nullable recursive schemas`
- **Files:** `packages/typed-openapi/src/runtimes/zod/index.ts`, `zod3/`, `valibot/`, `effect/`, `effect3/`

## Comment

Explicit annotations were gated on `!isNullOr(node)`, so nullable recursive schemas fell back to circular `infer` /
`typeof` (TS7022/7024 class).

## Resolution

Zod/valibot always emit explicit type + annotation for recursive names. Effect/effect3 emit `NameCore` +
`Name = NameCore | null` with `Schema.Schema<NameCore>` when nullable. Covered by `tests/review-fixes.test.ts` and
`tests/integrations/nullable-recursive.e2e.test.ts`.

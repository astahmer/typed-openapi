# C004 — `ReadonlyArray` rewrite via global `Array<` replace is brittle

- **Status:** resolved
- **Severity:** low
- **Introduced in:** `lumokwqm` — `fix(runtimes): explicit types for recursive lazy schemas`
- **Resolved in:** review follow-up — `fix(types): readonlyArrays IrToTs option`
- **Files:** `packages/typed-openapi/src/schema-ir/ir-to-ts.ts`, `packages/typed-openapi/src/runtimes/shared.ts`

## Comment

`decl.replace(/\bArray</g, "ReadonlyArray<")` was fragile.

## Resolution

`IrToTsOptions.readonlyArrays` emits `ReadonlyArray` at the array/tuple cases; `emitExplicitSchemaTypeDecl` passes the
flag through (no string replace).

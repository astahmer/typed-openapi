# C004 — `ReadonlyArray` rewrite via global `Array<` replace is brittle

- **Status:** open
- **Severity:** low
- **Introduced in:** `lumokwqm` — `fix(runtimes): explicit types for recursive lazy schemas`
- **Files:** `packages/typed-openapi/src/runtimes/shared.ts` (`emitExplicitSchemaTypeDecl`)

## Comment

```ts
decl = decl.replace(/\bArray</g, "ReadonlyArray<");
```

This can rewrite unrelated identifiers that merely contain `Array<` in generated type text (unlikely but fragile). Prefer an `irToTs` / `buildIrToTsOptions` flag (`readonlyArrays: true`) so emission is intentional.

## Suggested fix

Thread `readonlyArrays` through `IrToTsOptions` and emit `ReadonlyArray<…>` at the array case.

# C003 — Nullable recursive schemas skip explicit runtime type annotations

- **Status:** open
- **Severity:** high
- **Introduced in:** `lumokwqm` — `fix(runtimes): explicit types for recursive lazy schemas`
- **Files:** `packages/typed-openapi/src/runtimes/zod/index.ts`, `zod3/`, `valibot/`, `effect/`, `effect3/`

## Comment

Explicit `z.ZodType<T>` / `Schema.Schema<T>` / `v.GenericSchema<T>` is gated on `!isNullOr(node)` / `!nullInner`:

```ts
if (ctx.recursiveNames.has(name)) {
  body = z.lazy(() => body);
  if (!isNullOr(node)) {
    const typeDecl = emitExplicitSchemaTypeDecl(...);
    return `${typeDecl}\nexport const ${name}: z.ZodType<${name}> = ${body}`;
  }
}
```

Nullable recursive schemas fall back to `z.infer<typeof name>`-style circular inference — the exact TS7022/7024 class this revision meant to eliminate. Kombo may not hit this path often, but any `nullable: true` recursive component will.

## Suggested fix

Always emit `emitExplicitSchemaTypeDecl` for recursive names. Prefer declaring the full schema type (including null) or `Core | null` consistently with the emitted value.

## Tests needed

- Unit: generated zod/effect/valibot source for recursive+nullable contains explicit type + annotation
- E2E: tsc of that fixture has no TS7022/7024

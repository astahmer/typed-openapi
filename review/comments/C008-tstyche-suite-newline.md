# C008 — `gen-tstyche-suites` smashed login assertion onto one line

- **Status:** resolved
- **Severity:** medium
- **Introduced in:** latent bug surfaced by CI `gen:fixtures` (noticed during release gate)
- **Resolved in:** `trxmplup` — `fix(test): restore newline in gen-tstyche-suites login case`
- **Files:** `packages/typed-openapi/scripts/gen-tstyche-suites.ts`

## Comment

Template emitted:

```ts
const result = await ${loginCall(runtime)};    expect(result).type.toBeAssignableTo<
```

`pnpm gen:fixtures` rewrites checked-in tstyche suites. Broken output is valid-ish TS but unreadable and easy to
regress.

## Resolution

Newline restored. Suites regenerate clean. Consider a small unit assertion that generated suite source contains a
newline between the `await` and `expect` (optional follow-up).

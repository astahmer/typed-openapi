# C002 — Multi-value `enum` with object/array members coerced to `null`

- **Status:** resolved
- **Severity:** high
- **Introduced in:** `pvmmknlp` — `fix(ir): preserve enum literal types; object/array const`
- **Resolved in:** review follow-up — `fix(ir): map complex enums to literal unions`
- **Files:** `packages/typed-openapi/src/schema-ir/openapi-to-ir.ts`

## Comment

`const` / single-element `enum` correctly use `literalFromEnumValue` (objects → object nodes, arrays → tuples).
Multi-value `enum` still did:

```ts
v === null || typeof v === "string" || typeof v === "number" || typeof v === "boolean" ? v : null;
```

JSON Schema allows `enum: [{…}, {…}]`. Those members became `null` in IR `enum.values`.

## Resolution

`enumToIr`: primitives → `kind: "enum"`; otherwise → `kind: "union"` of `literalFromEnumValue` members. Covered by
`tests/review-fixes.test.ts` + object-enum e2e typecheck.

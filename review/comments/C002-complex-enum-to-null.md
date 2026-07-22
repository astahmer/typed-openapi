# C002 — Multi-value `enum` with object/array members coerced to `null`

- **Status:** open
- **Severity:** high
- **Introduced in:** `pvmmknlp` — `fix(ir): preserve enum literal types; object/array const`
- **Files:** `packages/typed-openapi/src/schema-ir/openapi-to-ir.ts`

## Comment

`const` / single-element `enum` correctly use `literalFromEnumValue` (objects → object nodes, arrays → tuples). Multi-value `enum` still does:

```ts
v === null || typeof v === "string" || typeof v === "number" || typeof v === "boolean" ? v : null
```

Same pattern in both the `schemaType && isPrimitiveType` branch and the `!schemaType && schema.enum` branch.

JSON Schema allows `enum: [{…}, {…}]`. Those members become `null` in IR `enum.values`, which is silently wrong and can accept/emit incorrect types.

`LiteralValue` / `kind: "enum"` only support primitives — complex multi-enums should become `kind: "union"` of `literalFromEnumValue` members instead of stuffing `null`.

## Suggested fix

If every enum value is a primitive/`null` → keep `kind: "enum"`. Otherwise → `kind: "union"` with `members: values.map(literalFromEnumValue)`.

## Tests needed

- Unit: IR for `enum: [{a:1},{a:2}]` and mixed `[1, {x:true}]`
- Integration: zod/valibot parse of object-enum schemas
- E2E: generated none-runtime type rejects wrong object shape

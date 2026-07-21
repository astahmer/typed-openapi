# medium: ArkType adapter silently drops `not` constraints

- **status:** open
- **revision:** tqsykwzn (`feat: support not, discriminator, contentEncoding in IR`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/runtimes/arktype/index.ts:158`

## Comment

OpenAPI `not` is converted to IR and tested for zod/valibot/effect, but the ArkType emitter always returns
`type("unknown")` for `not` nodes. Generated ArkType schemas accept values that should be rejected, while other runtimes
in the same release emit a negation check.

This is a runtime fidelity gap that can slip through because petstore/docker snapshots may not cover `not`.

Suggested fix: emit an ArkType exclusion if supported, or at minimum document the limitation in CHANGELOG/runtime matrix
and consider failing codegen when `not` is present and runtime is `arktype`.

## Evidence

ArkType emitter:

```typescript
case "not":
  // ArkType negation is limited; fall back to unknown
  return `type("unknown")`;
```

Contrast zod (same revision family):

```typescript
case "not": {
  const inner = emitNode(node.schema, ctx);
  return `z.unknown().refine((data) => !${inner}.safeParse(data).success, { message: "not" })`;
}
```

`advanced-oas.test.ts` validates `not` for zod only, not arktype.

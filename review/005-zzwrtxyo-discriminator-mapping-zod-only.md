# medium: `discriminator.mapping` honored only for zod/zod3 emitters

- **status:** open
- **revision:** zzwrtxyo (`feat: honor OAS discriminator.mapping in zod/zod3 emit`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/runtimes/zod/index.ts:104`,
  `packages/typed-openapi/src/runtimes/effect/index.ts`, `packages/typed-openapi/src/runtimes/valibot/index.ts`,
  `packages/typed-openapi/src/runtimes/arktype/index.ts`

## Comment

IR preserves `discriminator.mapping` from OpenAPI, and zzwrtxyo adds mapped emit for zod/zod3 via
`findMappedUnionMember` + `.extend({ prop: z.literal(...) })`. Effect, effect3, valibot, and arktype union emitters
ignore `node.discriminator.mapping` and fall back to a plain union/discriminated union without remapped wire values.

APIs that rely on mapping (e.g. wire value `canine` → `Dog` schema) will validate incorrectly at runtime for non-zod
runtimes even though the TypeScript types may look correct.

Suggested fix: port mapping logic to other adapters (or shared helper), and extend `advanced-oas.test.ts` beyond zod.

## Evidence

Zod handles mapping:

```typescript
if (node.discriminator?.propertyName) {
  const mapping = node.discriminator.mapping;
  const members =
    mapping && Object.keys(mapping).length > 0
      ? Object.entries(mapping).flatMap(([value, target]) => {
          /* findMappedUnionMember + extend */
        })
      : node.members.map((m) => emitNode(m, ctx));
  return `z.discriminatedUnion(${quote(prop)}, [${members.join(", ")}])`;
}
```

Grep shows `discriminator` usage only in `zod/index.ts`, `zod3/index.ts`, and `shared.ts` helper — not in
effect/valibot/arktype emitters.

Test added in zzwrtxyo: `"discriminator.mapping remaps wire values via .extend"` (zod only).

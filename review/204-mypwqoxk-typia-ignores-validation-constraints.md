# medium: Typia adapter emits structural types only — no OpenAPI constraints

- **status:** open
- **revision:** mypwqoxk (`feat: re-add typebox and typia runtime adapters`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/runtimes/typia/index.ts`, `packages/typed-openapi/src/runtimes/FUTURE.md`

## Comment

Typia runtime builds validators via `irToTs(node)` → `typia.createIs<…>()`. `irToTs` collapses constrained nodes to
plain TS (`string`, `number`, …) with **no** min/max/pattern/enum narrowing from the Schema IR.

Other shipped adapters use `applyStringConstraints`, `applyNumberConstraints`, etc. from `shared.ts` so `--validation`
presets affect emitted runtime checks. Typia skips `EmitCtx` entirely (`_ctx` unused).

Users selecting `--runtime typia` get compile-time-friendly guards that do **not** enforce OpenAPI validation rules at
runtime — divergent from typebox/zod/effect in the same matrix.

`FUTURE.md` explicitly recommends constraint helpers for new adapters; typia should either wire them (codegen typia tags
/ custom guards) or document the limitation in CLI help and runtime docs.

## Evidence

```9:14:packages/typed-openapi/src/runtimes/typia/index.ts
const emitNode = (node: SchemaNode, _ctx: EmitCtx): string => {
  if (node.kind === "ref" && !node.generics?.length && node.name !== "Partial" && node.name !== "Record") {
    return `is${node.name}`;
  }
  return createIs(toTs(node));
};
```

`irToTs` for `kind: "string"` always returns `"string"` (no pattern/format). Tests assert shape (`isPet`,
`createIs<Blob>`) but not constraint enforcement.

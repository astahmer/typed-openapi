# high: Tree-shaking drops schemas only referenced via `not`

- **status:** open
- **revision:** zkklvsts (`feat: endpoint/schema filters with configurable tree-shaking`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/filter-spec.ts:146`, `packages/typed-openapi/src/ref-resolver.ts:180`

## Comment

When `--endpoint` / `--tree-shake-schemas` is active, kept names start from endpoint IR (`collectRefNamesFromNode`
**does** walk `kind: "not"`). Expansion then uses `refs.transitiveDependencies` from `setSchemaDependencies`, which
**never** walks OAS `schema.not`.

So inlined/`not` on the endpoint IR is fine, but a component like `Pet` with `not: { $ref: Forbidden }` only contributes
`Pet` from the endpoint. After tree-shaking, `Forbidden` is dropped while emitted `Pet` still references it → broken
generated symbols.

Suggested fix: teach `setSchemaDependencies` to `visit(schema.not)` (and other unvisited composition keywords), and/or
expand `kept` by walking IR of kept named schemas, not only ref-resolver edges.

Still open at tip (`@-` / `ltuzzrus`).

## Evidence

Tree-shake expansion relies on ref-resolver transitive deps:

```typescript
const expand = (name: string) => {
  const deps = refs.transitiveDependencies.get(ref);
  for (const depRef of deps) kept.add(infos.normalized);
};
```

But dependency extraction skips `not`:

```typescript
const setSchemaDependencies = (schema, deps) => {
  const visit = (schema) => {
    if (schema.allOf) {
      /* ... */ return;
    }
    if (schema.oneOf) {
      /* ... */ return;
    }
    if (schema.anyOf) {
      /* ... */ return;
    }
    // schema.not is never visited
  };
};
```

`collectRefNamesFromNode` _does_ walk IR `not` nodes, but endpoint schemas are usually bare `$ref`s, so nested `not`
refs never enter `kept`.

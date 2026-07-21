# medium: Invalid `--endpoint` / `--schema` regex crashes codegen

- **status:** open
- **revision:** zkklvsts (`feat: endpoint/schema filters with configurable tree-shaking`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/filter-spec.ts:80`

## Comment

Filter patterns are compiled with bare `new RegExp(p)` and no try/catch. A typo in config/CLI (unclosed bracket, invalid
escape) throws a `SyntaxError` and aborts generation with an opaque stack trace instead of a config validation error
pointing at the offending pattern.

Suggested fix: wrap compilation in a helper that throws `Invalid config: endpointPatterns[0]: …` (same style as
`loadConfigFile` arktype errors), and add a unit test for malformed patterns.

## Evidence

```typescript
const compilePatterns = (patterns: string[] | undefined): RegExp[] => (patterns ?? []).map((p) => new RegExp(p));
```

No guardrails in `makeEndpointPredicate`, `applySpecFilters`, or `loadConfigFile`.

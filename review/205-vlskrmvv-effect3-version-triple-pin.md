# low: effect@3.22.0 pinned in three places — drift risk

- **status:** open
- **revision:** vlskrmvv (`chore: nest effect@3 under @effect/schema for dual majors`)
- **resolved_by:**
- **paths:** `.pnpmfile.cjs`, `pnpm-workspace.yaml`, `packages/typed-openapi/package.json` (effect3 devDep)

## Comment

Dual-major support nests effect@3 under `@effect/schema` via:

1. `.pnpmfile.cjs` — forces `effect: "3.22.0"` dependency, strips peer
2. `pnpm-workspace.yaml` — `overrides` + `packageExtensions` with same pin
3. `packages/typed-openapi/package.json` — `effect3` devDependency (separate version string)

Bumping effect3 for security/features requires updating all three consistently; mismatch could resurrect peer-dedup bugs
the batch was fixing. Consider a single workspace catalog / `pnpm.overrides` source of truth and dropping redundant
`.pnpmfile.cjs` if overrides suffice.

Not blocking if versions stay aligned; worth a follow-up hygiene pass.

## Evidence

`.pnpmfile.cjs`:

```js
effect: "3.22.0",
```

`pnpm-workspace.yaml`:

```yaml
overrides:
  "@effect/schema>effect": "3.22.0"
packageExtensions:
  "@effect/schema":
    dependencies:
      effect: "3.22.0"
```

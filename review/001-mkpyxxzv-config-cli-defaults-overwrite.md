# high: Config file values silently overwritten by CLI parser defaults

- **status:** open
- **revision:** mkpyxxzv (`feat: typed-openapi config file with validation overrides`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/config.ts:68`, `packages/typed-openapi/src/cli.ts:25`,
  `packages/typed-openapi/src/generate-client-files.ts:102`

## Comment

`mergeConfigWithCli` merges every CLI option whose value is not `undefined`. Commander/cac always injects defaults for
several flags (`jsdoc: true`, `includeClient: true`, `format: false`, `schemasOnly: false`), so a config file that sets
e.g. `"jsdoc": false` or `"format": true` is overwritten even when the user did not pass those flags on the command
line.

This breaks the stated contract ("CLI wins when set") and makes config files unreliable for the booleans most likely to
be configured project-wide.

Suggested fix: only merge CLI keys that were explicitly provided (cac exposes this via parsed command metadata), or
remove defaults from the CLI definition and apply defaults after the merge in `generateClientFiles`.

## Evidence

`mergeConfigWithCli` overwrites whenever `value !== undefined`:

```typescript
for (const [key, value] of Object.entries(cliOptions)) {
  if (value !== undefined) base[key] = value;
}
```

Repro with simulated CLI defaults:

```javascript
mergeConfigWithCli(
  { jsdoc: false, format: true, includeClient: false, schemasOnly: true },
  { jsdoc: true, format: false, includeClient: true, schemasOnly: false },
);
// → { jsdoc: true, format: false, includeClient: true, schemasOnly: false }
```

CLI defaults that always win today: `--jsdoc` (default `true`), `--include-client` (default `true`), `--format` (default
`false`), `--schemas-only` (default `false`).

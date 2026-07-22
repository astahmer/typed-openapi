# C010 — Vitest `fs` shim bypass depends on `process.env.VITEST`

- **Status:** open
- **Severity:** low
- **Introduced in:** `nxywwqym` — `fix(web): use real node:fs under Vitest (skip browser fs shim)`
- **Files:** `packages/web/vite.config.ts`

## Comment

`const isVitest = Boolean(process.env.VITEST)` is the usual Vitest signal and works in CI. Slightly clearer: dedicated `vitest.config.ts` that merges Vite config without browser `fs` aliases, so playground browser builds never depend on env timing.

Current fix is fine; playground-runtimes tests pass. Optional hardening only.

---
"typed-openapi": minor
---

Effect-native client, validation sides, filters, and exact dependency pins.

- `--client promise|effect` (default `effect` when `--runtime` is `effect`/`effect3`)
- `--validate-side none|input|output|both` plus `onValidate` on generated clients
- Endpoint/schema filters (`--endpoint`, `--schema`) with configurable `--tree-shake-schemas`
- `--schema-naming auto|always-name|prefer-inline`
- Install peer `effect` for `--client effect` and/or `--runtime effect` / `effect3`

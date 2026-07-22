---
"typed-openapi": minor
---

`--runtime effect` targets Effect Schema v4; keep v3 via `--runtime effect3`.

- Emit Effect Schema v4 APIs (`Schema.check`, `Schema.suspend`, …) for `--runtime effect` (peer `effect` ≥ 4)
- Nest the Effect 3 / `@effect/schema` adapter under `--runtime effect3`
- Arktype: safer pattern narrow + skip defaults on `.parse` model paths that broke smoke/typecheck

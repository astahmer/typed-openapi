---
"typed-openapi": minor
---

Runtime clients now emit a sibling `.types.d.ts` declaration sidecar by default, keeping generated clients responsive in TypeScript. Publish or copy that file together with its runtime module; pass `--no-runtime-types` to opt out.

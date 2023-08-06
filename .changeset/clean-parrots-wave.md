---
"typed-openapi": patch
---

- replace dprint by prettier 2.X (cause v3 needs async and dprint has trouble with finding the wasm module)
- only wrap in TS namespaces when NOT using a runtime (= generating TS types only)

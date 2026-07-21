---
"typed-openapi": patch
---

Keep the browser playground build free of Node `fs` config helpers.

- Stop re-exporting config loaders from the main `typed-openapi` entry (use `typed-openapi/node`)
- Expand the web `fs` shim with `existsSync` / `readFileSync` for any residual Node imports

---

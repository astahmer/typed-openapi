---
"typed-openapi": patch
---

Fix generated auth helper type narrowing so `selectSecuritySchemes` produces a `Set<keyof AuthCredentials>` without TypeScript index errors.

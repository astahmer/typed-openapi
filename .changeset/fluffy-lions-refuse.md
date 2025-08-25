---
"typed-openapi": patch
---

Fix type inference on success calls when not using `withResponse: true` while having multiple responses (ex: one for status 200 and another or status 304) with one that has a resulting schema of `unknown`

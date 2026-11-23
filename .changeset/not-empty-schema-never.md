---
"typed-openapi": patch
---

Type `not` of a schema that accepts every value (`{}`, `true`, or a schema with only annotations) as `never`, the same as the `false` schema. An optional property declared `{ "not": {} }` is now `prop?: never` instead of `prop?: unknown`.

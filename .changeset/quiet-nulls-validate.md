---
"typed-openapi": patch
---

Emit `v.null()` for null literal and enum members in Valibot schemas so generated clients typecheck and retain exact
nullable enum types.

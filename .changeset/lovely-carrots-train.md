---
"typed-openapi": minor
---

Thanks to @0237h:

Allow for finer marking of optional parameters Current behavior allows only for marking _all_ parameters as optional, or
none.

This change checks first if all parameters are optional, keeping the old behavior if that's the case, otherwise iterates
through the parameters to mark only those that **should** be optional from the OpenAPI spec.

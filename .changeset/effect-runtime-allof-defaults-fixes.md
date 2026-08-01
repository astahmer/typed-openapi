---
"typed-openapi": patch
---

fix(effect): handle `allOf` intersections mixing `$ref` with inline enum/scalar members, and defer default schemas that reference component schemas past their temporal dead zone

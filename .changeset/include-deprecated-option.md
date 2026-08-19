---
"typed-openapi": patch
---

Add `includeDeprecated` option (CLI `--include-deprecated`, config `includeDeprecated`) to control which
`deprecated: true` OpenAPI members are kept in generated output: `"endpoints"`, `"schemas"`, `"properties"`. Kept
members are tagged `@deprecated`; anything not listed is omitted entirely. Defaults to `["schemas", "properties"]`, so
named schemas and object properties keep their previous behavior (present, now tagged) while deprecated operations
continue to be dropped from codegen unless `"endpoints"` is opted in.

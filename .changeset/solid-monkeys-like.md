---
"typed-openapi": patch
---

fix: parameter $ref schema inlined instead of referencing named schema
https://github.com/astahmer/typed-openapi/pull/127 thanks @ptbrowne

## Problem

When a parameter's `schema` is a direct `$ref`, the generated output inlines the full type instead of referencing the
named schema:

```diff
- query: Partial<{ status: "active" | "inactive" }>;  // inlined ❌
+ query: Partial<{ status: Schemas.Status }>;          // named ref ✅
```

## Root cause & fix

In `map-openapi-endpoints.ts`, `param.schema` was passed through `refs.unwrap()` before being handed to
`openApiSchemaToTs`:

```patch
- const schema = openApiSchemaToTs({ schema: refs.unwrap(param.schema ?? {}), ctx });
+ const schema = openApiSchemaToTs({ schema: param.schema ?? {}, ctx });
```

Note: I'm not sure whether the second `refs.unwrap` was ever intentional, or just added by analogy with the first one.
All existing tests still pass after removing it, so if there was a reason for it, it isn't covered.

## Added test

`tests/issue-parameter-direct-ref.test.ts` — covers a query parameter whose schema is a direct `$ref` to a named
component schema.

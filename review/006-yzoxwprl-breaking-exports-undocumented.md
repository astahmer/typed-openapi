# medium: Programmatic Box/tsFactory exports removed without CHANGELOG note

- **status:** open
- **revision:** yzoxwprl (`refactor(typed-openapi): remove Box IR bridge`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/index.ts:1`, `packages/typed-openapi/CHANGELOG.md:3`

## Comment

yzoxwprl deletes the Box bridge (`box.ts`, `box-factory.ts`, `openapi-schema-to-ts.ts`, `ts-factory.ts`) and removes
their re-exports from the package entry. Consumers embedding typed-openapi programmatically (custom codegen, prior
`@sinclair/typebox-codegen` integrations) lose public APIs with no migration path documented in the 3.0.0 changelog
entry (lpkxoqml), which mentions runtime adapter changes but not removal of `Box` / `createBoxFactory` /
`openApiSchemaToTs` / `tsFactory`.

Suggested fix: add an explicit "Removed exports" subsection to CHANGELOG 3.0.0 pointing integrators to Schema IR
(`openApiToIr`, `generateFile`, runtime adapters), and optionally provide a deprecated re-export shim for one major if
feasible.

## Evidence

Index diff in yzoxwprl:

```diff
-export * from "./box-factory.ts";
-export * from "./openapi-schema-to-ts.ts";
-export * from "./ts-factory.ts";
```

CHANGELOG 3.0.0 (lpkxoqml) documents runtime adapter overhaul but contains no mention of `Box`, `box-factory`,
`openapi-schema-to-ts`, or `ts-factory` removal.

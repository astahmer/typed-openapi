# typed-openapi

## 3.1.0

### Minor Changes

- 95f9867: Runtime clients now emit a sibling `.types.d.ts` declaration sidecar by default, keeping generated clients responsive in TypeScript. Publish or copy that file together with its runtime module; pass `--no-runtime-types` to opt out.

### Patch Changes

- ea96f79: Allow HTTP(S) OpenAPI inputs to use `--input-dir` for the default generated client output.
- 9b52524: Fix generated auth helper type narrowing so `selectSecuritySchemes` produces a `Set<keyof AuthCredentials>` without TypeScript index errors.

## 3.0.1

### Patch Changes

- 6150bd7: Stop installing runtime packages with the CLI; generated clients require only their selected runtime.

## 4.0.0

### Major Changes

- 20a4436: Replace `@sinclair/typebox-codegen` with a first-party Schema IR and pluggable runtime adapters.

  - Runtimes: `zod`, `zod3`, `effect`, `effect3`, `valibot`, `arktype`, `typebox`, `typia` (plus `none`)
  - New `--validation loose|formats|strict` for constraint depth
  - Subpath exports: `typed-openapi/runtimes`, `typed-openapi/runtimes/*`
  - Dropped shipped adapters for yup / io-ts (re-add via the adapter contract; typebox/typia ship again)
  - **Removed exports:** `Box` / `createBoxFactory` / `openApiSchemaToTs` / `ts-factory` — use Schema IR + `generateFile`
  - Optional peers: `zod`, `effect`, `@effect/schema`, `valibot`, `arktype`, `@sinclair/typebox`, `typia` — install only
    what you emit

### Minor Changes

- 20a4436: Defaults, coerce, cookies, ApiResponse, and readOnly/writeOnly.

  - Emit OAS `default` on runtime schemas (zod `.default`, valibot/effect equivalents)
  - `--coerce` / `--no-coerce` for path|query|cookie|header number/boolean string coercion (default on when runtime ≠
    none)
  - Cookie parameters (`in: cookie`, including `content` schemas) + Cookie header encoding
  - `FetcherResponse` replaces DOM `Response` on the generated client (avoids clashing with OAS `ApiResponse` schemas);
    request params use `InferSchemaInput` (`z.input` / Encoded)
  - Strip `readOnly` from request bodies and `writeOnly` from responses

- 20a4436: EffectApiClient error channel + leaner generated TypeScript inference.

  - Remap non-status failures to `HttpClientError` (original in `cause`); status errors stay `TypedStatusError`
  - Type Effect request params with `InferSchemaInput` (same encoded/input types as the promise client)
  - Speed up IDE/tsc on large clients: `OptionalUndefinedKeys` once on `InferSchemaInput`, direct `InferSuccessData`,
    overload order for `withResponse`
  - TanStack Query wrappers take `ApiCallParams` so path/query/body stay typed with both clients

- 20a4436: Effect-native client, validation sides, filters, and exact dependency pins.

  - `--client promise|effect` (default `effect` when `--runtime` is `effect`/`effect3`)
  - `--validate-side none|input|output|both` plus `onValidate` on generated clients
  - Endpoint/schema filters (`--endpoint`, `--schema`) with configurable `--tree-shake-schemas`
  - `--schema-naming auto|always-name|prefer-inline`
  - Install peer `effect` for `--client effect` and/or `--runtime effect` / `effect3`

- 20a4436: `--runtime effect` targets Effect Schema v4; keep v3 via `--runtime effect3`.

  - Emit Effect Schema v4 APIs (`Schema.check`, `Schema.suspend`, …) for `--runtime effect` (peer `effect` ≥ 4)
  - Nest the Effect 3 / `@effect/schema` adapter under `--runtime effect3`
  - Arktype: safer pattern narrow + skip defaults on `.parse` model paths that broke smoke/typecheck

- 20a4436: SSE responses, binary SchemaNode, typebox/typia adapters, TanStack+Effect.

  - Recognize `text/event-stream` → `responseFormat: "sse"` (`ReadableStream`, skip output validation)
  - OAS `format: binary|byte` → IR `binary` typed as `Blob`
  - Re-add `--runtime typebox` and `--runtime typia`
  - TanStack Query wrappers call `Effect.runPromise` when `--client effect`
  - Sync API_CLIENT_EXAMPLES with requestFormat / cookies / SSE

- 20a4436: TanStack infinite/suspense/queryKey/invalidate helpers; MSW mock generation; defineConfig + TS config; securitySchemes
  auth on default fetcher; date/bigint transforms.

### Patch Changes

- 20a4436: Deduplicate Effect defaulted schemas, tighten generated client types, typecheck snapshots.

  - Intern reusable Effect `optionalWith` / default helpers (`Boolean_default_false_prop`, …) instead of inlining
    transforms
  - Avoid double-defaults on nullable schemas (IR keeps default on the outer union only)
  - Rename client surface to `FetcherResponse` (petstore has an OAS schema named `ApiResponse`)
  - Reduce `as any` / `as never` in generated clients; widen `EndpointParameters` for assignability
  - `--default-fetcher` uses `createEffectApiClient` when `--client effect`
  - Snapshot files are typechecked in CI via `snapshots-typecheck.test.ts`

- 20a4436: Issue triage: fix/verify GitHub regressions (#93, #29, #26, #61, #32, #27, #18, #121, #34, #46, #91, #114, #62).

  - Optional all-optional param groups (`query?:`) so calls like `api.get("/pet/findByStatus")` typecheck (#32)
  - Ref-resolver supports `#/definitions/*` nested refs (#27)
  - Exotic schema types (e.g. FHIR) map to `unknown` instead of throwing (#18)
  - TypeBox / Typia runtimes address #114 / #62 (`--runtime typebox` / `--runtime typia` + `InferSchemaInput`)
  - README documents Fetcher `requestFormat` contract
  - Regression suite: `tests/github-issues/` (`regression.test.ts` + `issue-*.test.ts`)

  Note: put `Closes #N` in the **PR description** for GitHub auto-close (changesets do not close issues).

- 20a4436: Honor OpenAPI `requestFormat` in the client and default fetcher.

  - Pass `requestFormat` into `Fetcher.fetch` (from generated `endpointRequestFormats`; only non-json overrides, default
    `"json"`)
  - `--default-fetcher` encodes form-data / form-url / binary / text (not only JSON)

- 20a4436: Keep the browser playground build free of Node `fs` config helpers.

  - Stop re-exporting config loaders from the main `typed-openapi` entry (use `typed-openapi/node`)
  - Expand the web `fs` shim with `existsSync` / `readFileSync` for any residual Node imports

## 3.0.0

### Major Changes

- Replace `@sinclair/typebox-codegen` with a first-party Schema IR and pluggable runtime adapters.

  - Runtimes: `none` | `zod` (v4) | `zod3` | `effect` (Effect Schema v4) | `effect3` (`@effect/schema`) | `valibot` |
    `arktype` | `typebox` | `typia`
  - New CLI `--validation loose|formats|strict` controls how deep OpenAPI constraints are applied
  - Subpath exports: `typed-openapi/runtimes`, `typed-openapi/runtimes/*`
  - Dropped shipped yup / io-ts emitters (re-add via the adapter contract if needed); TypeBox/Typia ship again

  **Removed public exports** (use Schema IR + `generateFile` / runtime adapters instead):

  - `Box` / `createBoxFactory` / `box-factory`
  - `openApiSchemaToTs` / `ts-factory` / Sinclair TypeBox bridge helpers

  **Peer dependencies (all optional):** install only the runtime you generate for.

  | Runtime   | Peer                                              |
  | --------- | ------------------------------------------------- |
  | `zod`     | `zod` ^4                                          |
  | `zod3`    | `zod` ^3                                          |
  | `effect`  | `effect` ^4 (built-in Schema)                     |
  | `effect3` | `@effect/schema` (+ nested `effect` ^3)           |
  | `valibot` | `valibot` ^1                                      |
  | `arktype` | `arktype` ^2 (also a hard dep for CLI validation) |
  | `typebox` | `@sinclair/typebox`                               |
  | `typia`   | `typia`                                           |

## 2.2.7

### Patch Changes

- 4d72d21: fix: parameter $ref schema inlined instead of referencing named schema
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

## 2.2.6

### Patch Changes

- cdd33d6: Fix generated clients so array-valued enum literals and referenced `additionalProperties` render valid
  TypeScript
- cdd33d6: Fix generated response objects to quote digit-starting status keys like `4XX`, which avoids invalid
  JavaScript syntax in emitted clients.
- cdd33d6: add jsdoc flag

## 2.2.5

### Patch Changes

- c312ff1: Fix GitHub Actions installs for `oxfmt` by forcing pnpm to reinstall optional dependencies, which ensures the
  native formatter binding is present before build and test steps.

## 2.2.4

### Patch Changes

- 5d58477: fix broken nullable in disriminated unions

## 2.2.3

### Patch Changes

- c40f9ad: Fix recursive record type generation

## 2.2.2

### Patch Changes

- b564cd5: chore(BREAKING): rm tanstack local withResponse option cause useMutation cant infer the generics passed at
  this point so it doesnt have any effect on the output type (it works at runtime but desynchronized with its typing)

  chore: rename TypedResponseError -> TypedStatusError (happens on expected error status code) to distinguish it better
  from TypedErrorResponse

## 2.2.1

### Patch Changes

- e8526b5: fix: tanstack inference in some edge cases

## 2.2.0

### Minor Changes

- 04a41a6: feat: allow specifying overrides on any request fix: infer/narrow response with multiple json media types
  fix: properly handle mutation errors while retaining genericity on output based on mutationFn withResponse: true/false
  feat: decodePathParams/encodeSearchParams/parseResponseData feat: allow passing overrides/withResponse even if there's
  no endpoint parameters

## 2.1.2

### Patch Changes

- 057e156: Fix type inference on success calls when not using `withResponse: true` while having multiple responses (ex:
  one for status 200 and another or status 304) with one that has a resulting schema of `unknown`

## 2.1.1

### Patch Changes

- 2923a0f: Fix responseHeaders generation by inlining the type instead of referencing it.

## 2.1.0

### Minor Changes

- 213f6ee: fix: make a union of multiple responses on the same status code (due to different media types)

  refactor: remove Endpoint["response"] arbitrarly choosen "main" response in favor of listing all possible success code

  refactor: responseHeaders now uses a Record<StatusCode, Headers> instead of simply being the typed headers of the
  "main" response feat: TypedHeaders

  refactor: rename+export success/error interfaces

## 2.0.2

### Patch Changes

- f1f0e89: Allow any response type with media type containing application + json

## 2.0.1

### Patch Changes

- e1de70a: Fix Schemas namespace missing for schema refs within parameter arrays #51
  https://github.com/astahmer/typed-openapi/issues/51
- 47243f1: Accept any response content type of '_/_' as successful response
  https://github.com/astahmer/typed-openapi/issues/52
- abbab94: fix: Wrong codegen for additionalProperties #57 https://github.com/astahmer/typed-openapi/issues/57
- 8a4c6c9: - New CLI option allow generating a fetcher and a standalone API client file (matching the example in
  `api-client.example.ts`).
  - Output paths for both the TanStack Query client and default fetcher can now be absolute or relative.
  - The standalone API client filename is configurable (defaults to `api.client.ts`). -> This makes it easier to start
    using the generated API clients

## 2.0.0

### Major Changes

- 8f1eaa5: Add comprehensive type-safe error handling and configurable status codes

  - **Type-safe error handling**: Added discriminated unions for API responses with `SafeApiResponse` and
    `InferResponseByStatus` types that distinguish between success and error responses based on HTTP status codes
  - **TypedResponseError class**: Introduced `TypedResponseError` that extends the native Error class to include typed
    response data for easier error handling
  - Expose `successStatusCodes` and `errorStatusCodes` arrays on the generated API client instance for runtime access
  - **withResponse parameter**: Enhanced API clients to optionally return both the parsed data and the original Response
    object for advanced use cases
  - **throwOnStatusError option**: Added `throwOnStatusError` option to automatically throw `TypedResponseError` for
    error status codes, simplifying error handling in async/await patterns, defaulting to `true` (unless `withResponse`
    is set to true)
  - **TanStack Query integration**: The above features are fully integrated into the TanStack Query client generator:
    - Advanced mutation options supporting `withResponse` and `selectFn` parameters
    - Automatic error type inference based on OpenAPI error schemas instead of generic Error type
    - Type-safe error handling with discriminated unions for mutations
    - Response-like error objects that extend Response with additional `data` property for consistency
  - **Configurable status codes**: Made success and error status codes fully configurable:
    - New `--success-status-codes` and `--error-status-codes` CLI options
    - `GeneratorOptions` now accepts `successStatusCodes` and `errorStatusCodes` arrays
    - Default error status codes cover comprehensive 4xx and 5xx ranges
  - **Enhanced CLI options**: Added new command-line options for better control:
    - `--include-client` to control whether to generate API client types and implementation
    - `--include-client=false` to only generate the schemas and endpoints
  - **Enhanced types**: expose `SuccessStatusCode` / `ErrorStatusCode` type and their matching runtime typed arrays
  - **Comprehensive documentation**: Added detailed examples and guides for error handling patterns

  This release significantly improves the type safety and flexibility of generated API clients, especially for error
  handling scenarios.

## 1.5.1

### Patch Changes

- 4d21f2e: Allow transforming schema & endpoint names; automatically prevents generating reserved TS/JS keyords names

  Fix https://github.com/astahmer/typed-openapi/issues/90

## 1.5.0

### Minor Changes

- 734c5d0: Add response headers in endpoint types

## 1.4.5

### Patch Changes

- 0749aff: closes #85. Adds support for extended types with allOf.

## 1.4.4

### Patch Changes

- 326124b: closes: #82 by supporting enum without type

## 1.4.3

### Patch Changes

- fb0fe07: closes: #79 by handling singleton enum of type number

## 1.4.2

### Patch Changes

- 9f70b13: Ensure dir is created before generating files

## 1.4.1

### Patch Changes

- f367a04: Treat boolean values as literal in enum

## 1.4.0

### Minor Changes

- dad912c: feat: add build-and-test github workflow
- 0440b2b: add `?:` to get optional parameters instead of having to set those to undefined
- a718a33: Add CLI option `--schemas-only` to allow generation of only the schema without endpoints and api client

## 1.3.2

### Patch Changes

- ceb15f6: Export generateClientFiles fn (same used as in the CLI)

## 1.3.1

### Patch Changes

- 86a384f: add mutation selectFn + endpoint type-only property in .mutation

## 1.3.0

### Minor Changes

- 91b005f: add parenthesis to handle priority between union/intersection

  this fixes an issue where `(A | B | C) & D` would be ambiguous and could be interpreted as `A | B | (C & D`

## 1.2.0

### Minor Changes

- ed15081: Rename .options to .queryOptions

## 1.1.2

### Patch Changes

- 4846bc4: fix mutationOptions parameters typings

## 1.1.1

### Patch Changes

- 73c1ef1: feat: mutationOptions + .mutation (if input is not available before)

## 1.1.0

### Minor Changes

- f029e94: Fetcher is now expected to return a Response, so that the api client can have a .request method that returns
  the raw object

  all methods (get post etc) will be parsed using the overridable "parseResponse" api client fn property

- c1b9dcb: fix: anyOf to ts

  https://github.com/astahmer/typed-openapi/issues/31

### Patch Changes

- d7eda3d: rm AllEndpoints type
- 2abc8b4: chore: export Fetcher type
- 6dfbd19: fix: tanstack client output path
- f66571d: chore: make "endpoint" a type-only property
- 93bd157: better endpoint alias
- da6af35: fix: unused QueryClient import

## 1.0.1

### Patch Changes

- 4a909eb: Fix CLI & package.json by removing CJS usage

## 1.0.0

### Major Changes

- 8ec5d0b: bump all deps

### Minor Changes

- 8ec5d0b: Add @tanstack/react-query generated client
- 8ec5d0b: Fix `Schemas.null` references in TS output
- 8ec5d0b: Better output when using `schema.additionalProperties`, especially when specifying
  `additionalProperties.type`

## 0.10.1

### Patch Changes

- dd91027: Move changesets to devDeps

## 0.10.0

### Minor Changes

- be0ba5f: Bump @sinclair/typebox-codegen version

### Patch Changes

- 739e5b5: Add options to `Method` type in `generateApiClient` function as fix for
  [#55](https://github.com/astahmer/typed-openapi/issues/55)

## 0.9.0

### Minor Changes

- b122616: Add requestFormat property to endpoint schema.
  - json
  - form-data
  - form-url
  - binary
  - text

## 0.8.0

### Minor Changes

- d260cd4: Fix zod and yup runtime generated endpoint schema type errors due to long operationId

## 0.7.0

### Minor Changes

- cf83e52: Add type cast in ApiClient methods to match the desired type

## 0.6.0

### Minor Changes

- c5daa58: Upgraded codegen dependency to provide newer runtime validator output

  This is a BREAKING CHANGE for valibot/yup users

## 0.5.0

### Minor Changes

- f0886a0: Thanks to @0237h:

  Allow for finer marking of optional parameters Current behavior allows only for marking _all_ parameters as optional,
  or none.

  This change checks first if all parameters are optional, keeping the old behavior if that's the case, otherwise
  iterates through the parameters to mark only those that **should** be optional from the OpenAPI spec.

## 0.4.1

### Patch Changes

- 4fac0aa: Fix typecast in zod-based ApiClient methods

## 0.4.0

### Minor Changes

- ffcdaa7: zod-runtime: add typecast in ApiClient methods to match the desired type

## 0.3.0

### Minor Changes

- b9b4772: Fix default response behavior (only use "default" as a fallback)
- 23f3dc3: Support path parameters

### Patch Changes

- bb937d4: fix: refer Schema namespace in generated body type

## 0.2.0

### Minor Changes

- 00eb659: Fixed parameter.body on post endpoints - #8.

## 0.1.5

### Patch Changes

- 7f0ecd4: fix: query/path/headers parameters are all marked as required if one of them is required

## 0.1.4

### Patch Changes

- ae34ed1: support OpenAPI v3.0 schema.nullable

  ```json
  {
    "type": "object",
    "properties": {
      "id": { "type": "integer" },
      "parent_id": {
        "type": "integer",
        "nullable": true
      },
      "children": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/TestClass"
        }
      }
    },
    "required": ["id", "parent_id"]
  }
  ```

  output:

  ```diff
  export type TestClass = {
      id: number;
  -    parent_id: number;
  +    parent_id: number | null;
      children?: Array<TestClass> | undefined
  };
  ```

- 088f3e4: Fix optional types

  ```json
  {
    "type": "object",
    "properties": { "str": { "type": "string" }, "nb": { "type": "number" } },
    "required": ["str"]
  }
  ```

  output:

  ```diff
  export type _Test = {
      str: string;
  -    "nb?": number | undefined
  +    nb?: number | undefined
  };
  ```

## 0.1.3

### Patch Changes

- 8568d69: Not a CLI anymore ! Exposed functions & types to be used when installed from npm

## 0.1.2

### Patch Changes

- 0947ac5: - replace dprint by prettier 2.X (cause v3 needs async and dprint has trouble with finding the wasm module)
  - only wrap in TS namespaces when NOT using a runtime (= generating TS types only)

## 0.1.1

### Patch Changes

- 95e8477: init

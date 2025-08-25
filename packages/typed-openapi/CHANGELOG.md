# typed-openapi

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

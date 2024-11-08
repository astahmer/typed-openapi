# typed-openapi

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

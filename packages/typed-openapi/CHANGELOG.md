# typed-openapi

## 0.2.0

### Minor Changes

- 91a850a: Fixed parameter.body on post endpoints - #8.

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

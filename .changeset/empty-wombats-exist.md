---
"typed-openapi": patch
---

support OpenAPI v3.0 schema.nullable

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

---
"typed-openapi": patch
---

Fix optional types

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

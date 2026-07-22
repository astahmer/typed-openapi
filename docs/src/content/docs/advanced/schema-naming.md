---
title: Name generated schemas
description: Decide when component schemas are exported as named types and customize generated names in library code.
sidebar:
  label: Schema naming
  order: 4
---

`schemaNaming` controls when a component schema receives its own exported name. It does not change the OpenAPI contract; it changes how the generated TypeScript is organized.

```ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/openapi.ts",
  schemaNaming: "always-name",
});
```

| Mode | Result | Use it when |
| --- | --- | --- |
| `auto` | Names reusable and recursive components; inlines straightforward single-use shapes. | Most applications. |
| `always-name` | Exports a stable name for every component schema. | Consumers import schemas or generated output is a public SDK. |
| `prefer-inline` | Inlines single-use, non-recursive components where it is safe. | Application-local clients where shorter output matters. |

Recursive schemas remain named in every mode so their generated types can refer to themselves.

## Customize names in library code

When the built-in modes are not enough, pass `nameTransform` to `mapOpenApiEndpoints()` before calling `generateFile()`:

```ts
import { generateFile, mapOpenApiEndpoints } from "typed-openapi";

const context = mapOpenApiEndpoints(document, {
  nameTransform: {
    transformSchemaName: (name) => `Api${name}`,
    transformEndpointName: ({ alias }) => `api${alias}`,
  },
});

const source = generateFile(context);
```

Return valid, unique TypeScript identifiers. Treat a transform change as an API change for consumers of the generated file, and inspect the generated diff for collisions before adopting it.

---
title: Use typed-openapi as a library
description: Build custom code-generation tooling with the same endpoint mapper and file generator as the CLI.
sidebar:
  order: 4
---

The CLI is a thin layer over public library exports. Use them when a build tool, framework plugin, or custom OpenAPI workflow needs to generate in memory instead of writing files.

```ts
import { generateFile, mapOpenApiEndpoints } from "typed-openapi";
import type { OpenAPIObject } from "openapi3-ts/oas31";

export function generateClient(document: OpenAPIObject) {
  const context = mapOpenApiEndpoints(document);

  return generateFile({
    ...context,
    runtime: "zod",
    validation: "strict",
    transformDates: true,
  });
}
```

## Useful public exports

| Export | Use it for |
| --- | --- |
| `generateFile()` | Turn mapped endpoints into the main client source string. |
| `mapOpenApiEndpoints()` | Map an OpenAPI document into endpoint and schema context. |
| `generateTanstackQueryFile()` | Generate the TanStack companion module. |
| `generateMswFile()` | Generate MSW handlers and mock factories. |
| `defineConfig()` | Type a TS/JS config file. |
| `applySpecFilters()` | Reuse endpoint/schema filtering in custom workflows. |
| `getRuntimeAdapter()` | Inspect a shipped runtime adapter. |

For Node-only file generation, import the package’s `typed-openapi/node` export. Runtime adapter exports are also available from `typed-openapi/runtimes` and their individual subpaths.

---
title: Use typed-openapi as a library
description: Build custom code-generation tooling with the same endpoint mapper and file generator as the CLI.
sidebar:
  label: Library API
  order: 4
---

The CLI is a thin layer over public library exports. Use them when a build tool, framework plugin, or custom OpenAPI workflow needs to generate in memory instead of writing files.

The library API is best for orchestration. Keep the OpenAPI mapping and source generation pure, then decide separately whether to write a file, compare a snapshot, send a response, or feed a formatter.

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

`mapOpenApiEndpoints()` creates the normalized endpoint and schema context once. `generateFile()` consumes that context and returns source text, so custom tooling can inspect or filter the context before emitting a file.

## Useful public exports

| Export | Use it for |
| --- | --- |
| `generateFile()` | Turn mapped endpoints into the main client source string. |
| `mapOpenApiEndpoints()` | Map an OpenAPI document into endpoint and schema context. |
| `generateTanstackQueryFile()` | Generate the TanStack companion module. |
| `generateMswFile()` | Generate MSW handlers and mock factories. |
| `defineConfig()` | Type a TS/JS config file. |
| `applySpecFilters()` | Reuse endpoint/schema filtering in custom workflows. |

## Filter in a custom workflow

Callback filters are useful when a regex is not precise enough. `filterEndpoints` receives `method`, `path`, `operationId`, generated `alias`, and OpenAPI `tags`; it combines with any `endpointPatterns` using **AND**. Filtering endpoints turns schema tree-shaking on by default. `filterSchemas` is an additional schema allowlist when tree-shaking is active.

```ts
const context = mapOpenApiEndpoints(document);

const source = generateFile({
  ...context,
  filterEndpoints: ({ method, path, tags }) =>
    method === "get" && path.startsWith("/catalog") && tags?.includes("public") === true,
  filterSchemas: (name) => name === "Pagination",
});
```

## Generate files from Node

Use the Node entry point when a build tool needs the CLI's file-writing behavior. `generateClientFiles()` accepts the OpenAPI input and the same output options as the CLI; omit the input when the selected config provides it.

```ts
import { generateClientFiles, loadConfig } from "typed-openapi/node";

const config = await loadConfig("./typed-openapi.config.ts");
console.log(config.output);

await generateClientFiles(undefined, {
  config: "./typed-openapi.config.ts",
});
```

The Node entry point also exports `findDefaultConfigPath()`, `loadConfigFile()`, `mergeConfigWithCli()`, and `resolveValidationFromOptions()` for tooling that needs to inspect or compose configuration. Runtime adapter exports are available from `typed-openapi/runtimes` and their individual subpaths.

For custom schema and endpoint identifiers, see [schema naming](/advanced/schema-naming/).

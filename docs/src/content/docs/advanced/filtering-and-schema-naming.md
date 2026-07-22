---
title: Filter endpoints and schemas
description: Generate a small client for one API domain and keep only the schemas it needs.
sidebar:
  label: Filter your client
  order: 1
---

One large OpenAPI document does not need to produce one large client. Generate a client per product area—catalog, billing, or internal admin—and import only the one your app owns.

## Make a focused client from config

Put the selection in `typed-openapi.config.ts`, not in a one-off command. This example emits a catalog-only client, its fetcher, and TanStack Query companion:

```ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/catalog.ts",
  defaultFetcher: "catalog.client.ts",
  tanstack: "catalog.query.ts",
  endpointPatterns: [
    "^/catalog(?:/|$)",
    "^/search$",
  ],
  format: true,
});
```

Run the same command every time the specification changes:

```sh
pnpm exec typed-openapi
```

With endpoint filtering enabled, component schemas not reachable from those operations are removed automatically. The generated `catalog.ts` contains only matching endpoints and the types they need.

## Write patterns that match what the generator sees

Each regular expression is tested independently against an operation's method (`get`), path, operation ID, generated alias, and tags. Repeated patterns are **OR** rules. A path pattern is usually the clearest way to split a client:

```sh
# Keep everything under /catalog and every operation tagged `search`.
pnpm exec typed-openapi openapi.yaml \
  --endpoint '^/catalog(?:/|$)' \
  --endpoint '^search$' \
  --output src/api/catalog.ts
```

Do not write `^GET /catalog`: method and path are separate match targets, so that expression matches neither. If you need an exact method-and-path rule, use the library API's `filterEndpoints` callback; config files support the portable pattern-based split shown above.

## Keep an extra shared schema

`schemaPatterns` adds schemas that are not reachable from the selected endpoints—for example, a pagination type imported elsewhere in your app:

```ts
export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/catalog.ts",
  endpointPatterns: ["^/catalog(?:/|$)"],
  schemaPatterns: ["^Pagination$", "^SortDirection$"],
});
```

The CLI equivalent is `--schema`. It is an allowlist addition, not an endpoint filter:

```sh
pnpm exec typed-openapi openapi.yaml \
  --endpoint '^/catalog(?:/|$)' \
  --schema 'PetSearchFilters|Pagination' \
  --output src/api/catalog.ts
```

## Control schema tree-shaking

```sh
# Keep all components even when an endpoint filter is set.
pnpm exec typed-openapi openapi.yaml --endpoint '^/catalog' --no-tree-shake-schemas

# Explicitly remove unreferenced components.
pnpm exec typed-openapi openapi.yaml --tree-shake-schemas
```

Keep tree-shaking on for application clients. Turn it off only when consumers rely on arbitrary component schemas that are not referenced by the selected operations.

## Choose a naming strategy

`--schema-naming` controls when a component schema receives its own exported name.

```sh
# Keep stable names for every component.
pnpm exec typed-openapi openapi.yaml --schema-naming always-name

# Inline a single-use, non-recursive component when it improves readability.
pnpm exec typed-openapi openapi.yaml --schema-naming prefer-inline
```

`auto` is the default. Recursive schemas remain safely named so their generated types can refer to themselves.

Use `always-name` when consumers import schemas directly or generated output is part of a public SDK. Use `prefer-inline` for application-local code where shorter output is easier to read.

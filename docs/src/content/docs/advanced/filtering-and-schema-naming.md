---
title: Filter endpoints and schemas
description: Generate a focused client from a large specification without keeping unrelated schemas.
sidebar:
  label: Filters & naming
  order: 1
---

Use repeatable `--endpoint` patterns to include only operations that match their method, path, operation ID, alias, or tags.

Start broad and inspect the generated diff before tightening a pattern. Each repeated flag is an additional inclusion rule, so the example below keeps the union of public `GET` operations and catalog-tagged operations.

```sh
# Keep public GET operations and any operation tagged `catalog`.
pnpm exec typed-openapi openapi.yaml \
  --endpoint '^GET /public' \
  --endpoint 'catalog' \
  --output src/api/public.ts
```

When endpoint filtering is active, unused component schemas are removed by default. Keep a schema that is only needed by your application code with `--schema`.

```sh
pnpm exec typed-openapi openapi.yaml \
  --endpoint '^GET /pets' \
  --schema 'PetSearchFilters|Pagination' \
  --output src/api/pets.ts
```

## Control schema tree-shaking

```sh
# Keep all components even when an endpoint filter is set.
pnpm exec typed-openapi openapi.yaml --endpoint '^GET /pets' --no-tree-shake-schemas

# Explicitly remove unreferenced components.
pnpm exec typed-openapi openapi.yaml --tree-shake-schemas
```

## Choose a naming strategy

`--schema-naming` controls when a component schema receives its own exported name.

```sh
# Keep stable names for every component.
pnpm exec typed-openapi openapi.yaml --schema-naming always-name

# Inline a single-use, non-recursive component when it improves readability.
pnpm exec typed-openapi openapi.yaml --schema-naming prefer-inline
```

`auto` is the default. Recursive schemas remain safely named so their generated types can refer to themselves.

:::tip[Prefer stable names in published packages]
Use `always-name` when consumers import schemas directly or generated output is part of a public SDK. Use `prefer-inline` for application-local code where shorter output is easier to read.
:::

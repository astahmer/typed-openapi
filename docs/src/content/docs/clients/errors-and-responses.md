---
title: Errors and response modes
description: Choose throwing calls or a discriminated response union with typed error bodies.
sidebar:
  order: 2
---

By default, a successful call returns its response data. A configured error status throws a `TypedStatusError` containing the parsed, status-specific body.

```ts
const pet = await api.get("/pet/{petId}", { path: { petId: 7 } });
// `pet` is the successful response body.
```

## Prefer an explicit response union

Pass `withResponse: true` when a UI or workflow needs to handle expected failures without `try`/`catch`.

```ts
const result = await api.post("/pet", {
  body: { id: 7, name: "Mochi" },
  withResponse: true,
});

if (result.ok) {
  console.log(result.status, result.data.name);
} else if (result.status === 400) {
  // `result.data` narrows to the schema declared for status 400.
  console.error(result.data);
}
```

## Configure what is success or error

The default success range is `2xx,3xx` and the default error range is `4xx,5xx`. Override either when an API uses an unusual status convention.

```sh
pnpm exec typed-openapi ./openapi.yaml \
  --success-status-codes 200,201,202 \
  --error-status-codes 400,404,409,422
```

`throwOnStatusError: false` is available per request when you want response access without opting into the complete `withResponse` shape.

```ts
const response = await api.get("/pet/{petId}", {
  path: { petId: 7 },
  throwOnStatusError: false,
});
```

For React mutation ergonomics, see [TanStack Query](/integrations/tanstack-query/).

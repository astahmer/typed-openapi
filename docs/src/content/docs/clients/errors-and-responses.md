---
title: Errors and response modes
description: Choose throwing calls or a discriminated response union with typed error bodies.
sidebar:
  label: Errors & responses
  order: 3
---

By default, a successful call returns its response data. A configured error status throws a `TypedStatusError` containing the parsed, status-specific body.

```ts
const pet = await api.get("/pet/{petId}", { path: { petId: 7 } });
// `pet` is the successful response body.
```

## Pick the failure model deliberately

| Need | Use | Result |
| --- | --- | --- |
| A straightforward call where failure stops the flow | default | data on success; a `TypedStatusError` for configured error statuses |
| An expected business failure such as `409` or `422` | `withResponse: true` | a discriminated `{ ok, status, data }` result |
| Keep parsed data for configured error statuses | `throwOnStatusError: false` | suppresses `TypedStatusError`; still returns parsed data |

Network, parsing, and validation failures remain failures in every mode. `withResponse` is for declared HTTP outcomes, not a blanket `Result` wrapper around every possible error.

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

This is especially useful for forms: a `422` can populate field errors while unexpected transport failures still reach the app's normal error boundary.

## Configure what is success or error

The default success range is `2xx,3xx` and the default error range is `4xx,5xx`. Override either when an API uses an unusual status convention.

```sh
pnpm exec typed-openapi ./openapi.yaml \
  --success-status-codes 200,201,202 \
  --error-status-codes 400,404,409,422
```

`throwOnStatusError: false` is available per request when a configured error status should return parsed data instead of throwing. Use `withResponse: true` when the caller needs status, headers, or response metadata.

```ts
const pet = await api.get("/pet/{petId}", {
  path: { petId: 7 },
  throwOnStatusError: false,
});

// `pet` is parsed response data, even for a configured error status.
```

Use global status-code flags only when the whole API has a nonstandard convention. For ordinary endpoints, declare responses in OpenAPI and let `withResponse` narrow the body by status.

For React mutation ergonomics, see [TanStack Query](../../integrations/tanstack-query/).

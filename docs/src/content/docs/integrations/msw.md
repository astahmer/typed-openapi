---
title: MSW mocks
description: Generate request handlers and per-endpoint mock factories from your OpenAPI document.
sidebar:
  order: 2
---

Generate MSW 2 handlers directly from the endpoints that are in your OpenAPI document.

```sh
pnpm add -D msw
pnpm exec typed-openapi openapi.yaml \
  --output src/api/openapi.ts \
  --msw src/mocks/handlers.ts \
  --msw-base-url https://api.example.com
```

The generated file exports `handlers`, a `get…Mock()` factory for each endpoint, and `mswWorkerOptions`.

## Start the browser worker

```ts
// src/mocks/browser.ts
import { setupWorker } from "msw/browser";
import { handlers, mswWorkerOptions } from "./handlers";

export const worker = setupWorker(...handlers);
worker.start(mswWorkerOptions);
```

## Override one endpoint in a test

Keep generated handlers as the default and layer a scenario-specific response above them.

```ts
import { http, HttpResponse } from "msw";
import { server } from "./server";

server.use(
  http.get("https://api.example.com/pet/:petId", () =>
    HttpResponse.json({ id: 7, name: "Mochi", status: "available" }),
  ),
);
```

## Generate richer fixtures with Faker

When `@faker-js/faker` is installed, add `--msw-faker` to have mock factories use it. Without it, the generator builds deterministic values from OpenAPI examples, defaults, and schema heuristics.

```sh
pnpm add -D @faker-js/faker
pnpm exec typed-openapi openapi.yaml --msw --msw-faker
```

SSE endpoints get an MSW response with `text/event-stream`; standard responses use `HttpResponse.json()`.

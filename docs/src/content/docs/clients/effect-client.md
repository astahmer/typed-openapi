---
title: Effect-native client
description: Generate methods that return Effect with a typed error channel.
sidebar:
  order: 2
---

Choose the Effect client when your application already uses Effect for retries, dependencies, tracing, or error handling. Operations stay in `Effect`; no Promise boundary is introduced until you decide to run one.

Keep that choice in config so every regeneration uses the same client style:

```ts
import { defineConfig } from "typed-openapi";

export default defineConfig({
  input: "./openapi.yaml",
  output: "./src/api/openapi.ts",
  runtime: "effect",
  client: "effect",
  defaultFetcher: "api.client.ts",
});
```

Or make the same client from the command line:

```sh
pnpm add effect
pnpm exec typed-openapi ./openapi.yaml \
  --runtime effect \
  --client effect \
  --default-fetcher \
  --output src/api/openapi.ts
```

`effect` and `effect3` select the Effect client by default, so `--client effect` is optional for those runtimes.

## Run an operation

Generated methods return an `Effect`, not a Promise:

```ts
import { Effect } from "effect";
import { api } from "./api/api.client";
import { HttpClientError, TypedStatusError } from "./api/openapi";

const program = api.get("/pet/{petId}", { path: { petId: 7 } }).pipe(
  Effect.tap((pet) => Effect.log(`Loaded ${pet.name}`)),
);

const pet = await Effect.runPromise(program);
```

## Handle the error channel

Status errors are `TypedStatusError`; transport, decoding, parsing, and validation failures are remapped to `HttpClientError`, which keeps the original problem in `cause`.

```ts
const program = api.get("/pet/{petId}", { path: { petId: 7 } }).pipe(
  Effect.catchAll((error) => {
    if (error instanceof TypedStatusError) return Effect.succeed({ kind: "status-error", error });
    if (error instanceof HttpClientError) return Effect.fail(error.cause);
    return Effect.fail(error);
  }),
);
```

The generated [TanStack helpers](/integrations/tanstack-query/) automatically use `Effect.runPromise` when the API client is Effect-native.

---
title: TanStack Query
description: Generate typed query options, mutations, pagination, cache keys, and invalidation helpers.
sidebar:
  order: 1
---

Generate a TanStack Query companion file beside your API client:

```sh
pnpm add @tanstack/react-query
pnpm exec typed-openapi openapi.yaml \
  --output src/api/openapi.ts \
  --default-fetcher \
  --tanstack src/api/query.ts
```

## Create a typed query

```tsx
import { useQuery } from "@tanstack/react-query";
import { TanstackQueryApiClient } from "../api/query";
import { api } from "../api/api.client";

const queryApi = new TanstackQueryApiClient(api);

export function Pet({ petId }: { petId: number }) {
const query = useQuery(
    queryApi.get("/pet/{petId}", { path: { petId } }).queryOptions,
  );

  return <pre>{JSON.stringify(query.data, null, 2)}</pre>;
}
```

The same generated call exposes `suspenseQueryOptions` for Suspense-based routes and works with `fetchQuery()` or `ensureQueryData()` outside React.

```ts
const options = queryApi.get("/pet/{petId}", { path: { petId: 7 } }).suspenseQueryOptions;
const pet = await queryClient.ensureQueryData(options);
```

## Create a typed mutation

`mutationOptions` contains a correctly typed `mutationFn` and status-aware error type.

```tsx
import { useMutation } from "@tanstack/react-query";

const createPet = useMutation(
  queryApi.mutation("post", "/pet", { withResponse: true }).mutationOptions,
);

createPet.mutate(
  { body: { id: 7, name: "Mochi" } },
  {
    onSuccess(result) {
      if (result.ok) console.log(result.data.name);
      else if (result.status === 400) console.error(result.data);
    },
  },
);
```

## Infinite queries and cache invalidation

When an endpoint accepts a page parameter, opt into the generated infinite-query helper and name that parameter:

```ts
const feed = queryApi.get("/pets", { query: { limit: 20 } });

const options = feed.infiniteQueryOptions({
  initialPageParam: 0,
  pageParamKey: "page",
  getNextPageParam: (lastPage) => lastPage.nextPage,
});
```

Use stable keys outside components too:

```ts
import { invalidateEndpoint, queryKeyFactory } from "../api/query";

await invalidateEndpoint(queryClient, "/pet/findByStatus", {
  query: { status: "available" },
});

const key = queryKeyFactory.endpoint("/pet/findByStatus", {
  query: { status: "available" },
});
```

Effect-native clients work here too: the generated wrapper executes their operations with `Effect.runPromise`.

# Review: `lsptvpkn` — feat(tanstack)

**Change:** `feat(tanstack): infiniteQueryOptions, suspense helpers, queryKeyFactory, invalidate`

**Files:** `tanstack-query.generator.ts`, unit + e2e tests

---

## Summary

Adds TanStack Query v5 surface: `suspenseQueryOptions`, `infiniteQueryOptions` (with `pageParamKey`),
`queryKeyFactory`, `invalidateEndpoint`, and per-query `invalidate` / `invalidateInfinite`. Effect client parity
kept via `Effect.runPromise`.

Overall direction is good and matches README claims. A few design/correctness nits remain.

---

## Comments

### TS-1 · medium · `queryKeyFactory.all` does not match real keys

**File:** `packages/typed-openapi/src/tanstack-query.generator.ts` (~L201–205)

`queryKeyFactory.all` is `["typed-openapi"]`, but endpoint keys are shaped as
`[{ _id, query?, path?, …, _infinite? }]`.

TanStack partial matching is **array-prefix** based, so:

```ts
queryClient.invalidateQueries({ queryKey: queryKeyFactory.all });
```

will **not** invalidate endpoint queries. Either:

1. Reshape keys to `["typed-openapi", path, params]` (breaking, but hierarchical), or
2. Drop / document `all` as decorative only, or
3. Provide an `invalidateAll` that uses a predicate.

**Status:** open

---

### TS-2 · low · `callExpr` / `infiniteCallExpr` are identical

**File:** `tanstack-query.generator.ts` (~L18–24)

Both assign the same template string. Dead duplication — keep one.

**Status:** open

---

### TS-3 · low · `suspenseQueryOptions` duplicates `queryOptions`

**File:** `tanstack-query.generator.ts` (~L41–67)

Bodies are copy-pasted. Fine for API discoverability, but generated size grows per HTTP method.
Consider sharing one `queryOptions(...)` result assigned to both fields, or document that they are aliases.

**Status:** open (nit / optional)

---

### TS-4 · low · mutation `invalidate` uses `mutationKey` as a query key

**File:** `tanstack-query.generator.ts` (~L299–301)

`invalidateQueries({ queryKey: mutationKey })` rarely matches cached **queries**. Callers usually want to
invalidate related endpoint query keys after a successful mutation. Rename or document as niche.

**Status:** open

---

### TS-5 · test gap · infinite / suspense not exercised at runtime

Existing e2e only checks `queryKeyFactory` + `invalidateEndpoint`. Missing:

- `infiniteQueryOptions` fetch with `pageParamKey` merge
- `invalidate` / `invalidateInfinite` on method return values
- `suspenseQueryOptions` / `queryOptions` via `QueryClient.fetchQuery`

**Status:** open → addressed by follow-up tests in this review pass (coverage), behavior issues above remain

---

## Verdict

Approve with follow-ups on **TS-1** (key hierarchy) before advertising `queryKeyFactory.all` as an invalidation root.

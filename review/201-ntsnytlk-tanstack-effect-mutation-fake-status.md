# medium: TanStack + Effect mutation synthesizes `status: 200`

- **status:** open
- **revision:** ntsnytlk (`feat: TanStack Query wrappers support EffectApiClient`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/src/tanstack-query.generator.ts`

## Comment

When `client: "effect"`, the generated mutation path never calls the API with `withResponse: true`. On success it
fabricates:

```ts
{ ok: true as const, status: 200, data }
```

Real HTTP semantics are lost: `201 Created`, `204 No Content`, redirect statuses, and actual `ok`/`status` from the
fetch layer are discarded. Promise-client mutations preserve the real `Response` envelope via `withResponse: true`.

Query hooks use `withResponse: false` and only return data — fine. Mutations with `withResponse: true` or `selectFn`
expecting a typed status envelope will be wrong for Effect clients.

**Fix:** Thread `withResponse` through to EffectApiClient (if supported) or document that Effect TanStack mutations
cannot return faithful response metadata.

## Evidence

```59:66:packages/typed-openapi/src/tanstack-query.generator.ts
  const mutationFnBody = isEffectClient
    ? `const data = await Effect.runPromise((this.client as any)[method](path, {
                ...params as any,
            }) as Effect.Effect<any, unknown>);
                // EffectApiClient fails the Effect on error statuses — no Response envelope.
                const finalResponse = withResponse ? ({ ok: true as const, status: 200, data } as never) : data;
```

Contrast promise branch (lines 67–78) which uses `withResponse: true` and reads `response.status`.

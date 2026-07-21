# nit: abort test accepts any `Error`, not `HttpClientError`

- **status:** open
- **revision:** rznmotnz (`test: add EffectApiClient MSW integration suite`)
- **resolved_by:**
- **paths:** `packages/typed-openapi/tests/integrations/effect-msw.test.ts`

## Comment

The `abort via overrides.signal` case asserts rejection with
`e instanceof Error || (e as HttpClientError)?.name === "HttpClientError"`. The first disjunct matches virtually any
thrown/rejected value in JS, so the test would pass even if abort surfaced a raw `DOMException`, an unwrapped fetch
error, or an untagged plain object — contradicting the batch goal of remapping non-status failures to `HttpClientError`.

Prefer `Effect.flip` + `expect(err).toBeInstanceOf(HttpClientError)` (and optionally inspect `cause`) to match the other
error-channel tests in the same file.

## Evidence

```ts
// packages/typed-openapi/tests/integrations/effect-msw.test.ts
await expect(fiber).rejects.toSatisfy(
  (e: unknown) => e instanceof Error || (e as HttpClientError)?.name === "HttpClientError",
);
```

Contrast with typed 403/404 cases that assert `TypedStatusError` via `Effect.flip`.

---
"typed-openapi": minor
---

**Breaking:** Generated TanStack Query clients no longer consume TanStack Query's `AbortSignal` by default. TanStack
Query does not cancel unused queries unless the query function consumes this lazy signal; consuming it opts requests
into cancellation, which can discard in-flight work and cause duplicate development requests under React StrictMode
instead of preserving completed results in the cache. Set `consumeQuerySignal: true` on `TanstackQueryApiClient` when
cancelling the underlying request is desired, such as for downloads or large searches.

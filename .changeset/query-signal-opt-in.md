---
"typed-openapi": patch
---

Do not consume TanStack Query's abort signal in generated query clients by default. Set `consumeQuerySignal: true` on
`TanstackQueryApiClient` when cancelling the underlying request is desired.

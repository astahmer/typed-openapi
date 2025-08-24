---
"typed-openapi": patch
---

- New CLI option allow generating a fetcher and a standalone API client file (matching the example in `api-client.example.ts`).
- Output paths for both the TanStack Query client and default fetcher can now be absolute or relative.
- The standalone API client filename is configurable (defaults to `api.client.ts`).
-> This makes it easier to start using the generated API clients

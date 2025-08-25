---
"typed-openapi": minor
---

fix: make a union of multiple responses on the same status code (due to different media types)

refactor: remove Endpoint["response"] arbitrarly choosen "main" response in favor of listing all possible success code

refactor: responseHeaders now uses a Record<StatusCode, Headers> instead of simply being the typed headers of the "main" response
feat: TypedHeaders

refactor: rename+export success/error interfaces


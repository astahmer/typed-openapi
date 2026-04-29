---
"typed-openapi": patch
---

Fix generated response objects to quote digit-starting status keys like `4XX`, which avoids invalid JavaScript syntax in emitted clients.
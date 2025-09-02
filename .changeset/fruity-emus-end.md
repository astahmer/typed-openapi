---
"typed-openapi": patch
---

chore(BREAKING): rm tanstack local withResponse option cause useMutation cant infer the generics passed at this point so it doesnt have any effect on the output type (it works at runtime but desynchronized with its typing)

chore: rename TypedResponseError -> TypedStatusError (happens on expected error status code) to distinguish it better from TypedErrorResponse

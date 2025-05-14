---
"typed-openapi": minor
---

add parenthesis to handle priority between union/intersection

this fixes an issue where `(A | B | C) & D` would be
ambiguous and could be interpreted as `A | B | (C & D`

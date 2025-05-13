---
"typed-openapi": minor
---

Fetcher is now expected to return a Response, so that the api client can have a .request method that returns the raw object

all methods (get post etc) will be parsed using the overridable "parseResponse" api client fn property

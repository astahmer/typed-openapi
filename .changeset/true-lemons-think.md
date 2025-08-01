---
"typed-openapi": minor
---

Add comprehensive type-safe error handling and configurable status codes

- **Type-safe error handling**: Added discriminated unions for API responses with `SafeApiResponse` and `TypedApiResponse` types that distinguish between success and error responses based on HTTP status codes
- **withResponse parameter**: Enhanced API clients to optionally return both the parsed data and the original Response object for advanced use cases
- **TanStack Query integration**: Added complete TanStack Query client generation with:
  - Advanced mutation options supporting `withResponse` and `selectFn` parameters
  - Automatic error type inference based on OpenAPI error schemas instead of generic Error type
  - Type-safe error handling with discriminated unions for mutations
  - Response-like error objects that extend Response with additional `data` property for consistency
- **Configurable status codes**: Made success and error status codes fully configurable:
  - New `--success-status-codes` and `--error-status-codes` CLI options
  - `GeneratorOptions` now accepts `successStatusCodes` and `errorStatusCodes` arrays
  - Default error status codes cover comprehensive 4xx and 5xx ranges
- **Enhanced CLI options**: Added new command-line options for better control:
  - `--include-client` to control whether to generate API client types and implementation
  - `--include-client=false` to only generate the schemas and endpoints
- **Enhanced types**: Renamed `StatusCode` to `TStatusCode` and added reusable `ErrorStatusCode` type
- **Comprehensive documentation**: Added detailed examples and guides for error handling patterns

This release significantly improves the type safety and flexibility of generated API clients, especially for error handling scenarios.

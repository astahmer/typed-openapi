---
"typed-openapi": major
---

Add comprehensive type-safe error handling and configurable status codes

- **Type-safe error handling**: Added discriminated unions for API responses with `SafeApiResponse` and `InferResponseByStatus` types that distinguish between success and error responses based on HTTP status codes
- **TypedResponseError class**: Introduced `TypedResponseError` that extends the native Error class to include typed response data for easier error handling
- Expose `successStatusCodes` and `errorStatusCodes` arrays on the generated API client instance for runtime access
- **withResponse parameter**: Enhanced API clients to optionally return both the parsed data and the original Response object for advanced use cases
- **throwOnStatusError option**: Added `throwOnStatusError` option to automatically throw `TypedResponseError` for error status codes, simplifying error handling in async/await patterns, defaulting to `true` (unless `withResponse` is set to true)
- **TanStack Query integration**: The above features are fully integrated into the TanStack Query client generator:
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
- **Enhanced types**: expose `SuccessStatusCode` / `ErrorStatusCode` type and their matching runtime typed arrays
- **Comprehensive documentation**: Added detailed examples and guides for error handling patterns

This release significantly improves the type safety and flexibility of generated API clients, especially for error handling scenarios.

# Type-Safe Error Handling

The typed-openapi generator now supports type-safe error handling by extracting all response status codes and their corresponding schemas from your OpenAPI specification.

## Features

### Error Response Types

For each endpoint, the generator now creates a `responses` field containing all status codes and their types:

```typescript
export type get_GetUserById = {
  method: "GET";
  path: "/users/{id}";
  parameters: { path: { id: string } };
  response: { id: string; name: string };  // Success response (2xx)
  responses: {
    200: { id: string; name: string };     // Success
    401: { error: string; code: number };  // Unauthorized  
    404: { message: string };              // Not Found
    500: { error: string };                // Server Error
  };
};
```

### Safe Methods

The API client now includes "safe" versions of all HTTP methods (`getSafe`, `postSafe`, etc.) that return a discriminated union allowing type-safe error handling:

```typescript
const result = await api.getSafe("/users/{id}", { path: { id: "123" } });

if (result.ok) {
  // TypeScript knows result.data is { id: string; name: string }
  console.log(`User: ${result.data.name}`);
} else {
  // TypeScript knows this is an error and provides proper types
  if (result.status === 401) {
    // result.error is { error: string; code: number }
    console.error(`Auth failed: ${result.error.error}`);
  } else if (result.status === 404) {
    // result.error is { message: string }
    console.error(`Not found: ${result.error.message}`);
  }
}
```

### Traditional Methods Still Available

The original methods (`get`, `post`, etc.) are still available and work exactly as before for users who prefer traditional error handling:

```typescript
try {
  const user = await api.get("/users/{id}", { path: { id: "123" } });
  console.log(user.name);
} catch (error) {
  // Handle error traditionally
  console.error("Request failed:", error);
}
```

## Usage Examples

### Basic Error Handling

```typescript
const api = createApiClient(fetch);

async function getUser(id: string) {
  const result = await api.getSafe("/users/{id}", { path: { id } });
  
  if (result.ok) {
    return result.data; // Typed as success response
  }
  
  // Handle specific error cases
  switch (result.status) {
    case 401:
      throw new Error(`Unauthorized: ${result.error.error}`);
    case 404:
      return null; // User not found
    case 500:
      throw new Error(`Server error: ${result.error.error}`);
    default:
      throw new Error(`Unknown error: ${result.status}`);
  }
}
```

### Comprehensive Error Handling

```typescript
async function handleApiCall<T>(apiCall: () => Promise<T>) {
  const result = await apiCall();
  
  if (result.ok) {
    return { success: true, data: result.data };
  }
  
  return { 
    success: false, 
    error: {
      status: result.status,
      message: getErrorMessage(result.error),
    }
  };
}

function getErrorMessage(error: unknown): string {
  if (typeof error === 'object' && error && 'message' in error) {
    return error.message as string;
  }
  if (typeof error === 'object' && error && 'error' in error) {
    return error.error as string;
  }
  return 'Unknown error';
}
```

## OpenAPI Error Response Support

The generator supports all OpenAPI response definitions:

- **Status codes**: `200`, `401`, `404`, `500`, etc.
- **Default responses**: `default` for catch-all error handling
- **Content types**: Primarily `application/json`, with fallback to `unknown` for other types
- **Schema references**: `$ref` to components/schemas for error types

## Benefits

1. **Type Safety**: Full TypeScript support for both success and error cases
2. **IntelliSense**: Auto-completion for error properties based on OpenAPI spec
3. **Compile-time Checking**: Catch error handling mistakes at build time
4. **Documentation**: Error handling is self-documenting through types
5. **Backward Compatibility**: Existing code continues to work unchanged

## Migration

No breaking changes! Existing code using regular methods (`get`, `post`, etc.) continues to work exactly as before. The new safe methods are additive:

- Keep using `api.get()` for traditional error handling
- Use `api.getSafe()` when you want type-safe error handling
- Mix and match approaches as needed in your codebase

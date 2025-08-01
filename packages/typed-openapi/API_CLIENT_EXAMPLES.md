# API Client Examples

These are production-ready API client wrappers for your generated typed-openapi code. Copy the one that fits your needs and customize it.

## Basic API Client (`api-client-example.ts`)

A simple, dependency-free client that handles:
- Path parameter replacement (`{id}` and `:id` formats)
- Query parameter serialization (including arrays)
- JSON request/response handling
- Custom headers
- Basic error handling

### Setup

1. Copy the file to your project
2. Update the import path to your generated API file:
   ```typescript
   import { type EndpointParameters, type Fetcher, createApiClient } from './generated/api';
   ```
3. Set your API base URL:
   ```typescript
   const API_BASE_URL = process.env['API_BASE_URL'] || 'https://your-api.com';
   ```
4. Uncomment the client creation:
   ```typescript
   export const api = createApiClient(fetcher, API_BASE_URL);
   ```

### Usage

```typescript
// GET request with query params
const users = await api.get('/users', {
  query: { page: 1, limit: 10, tags: ['admin', 'user'] }
});

// POST request with body
const newUser = await api.post('/users', {
  body: { name: 'John', email: 'john@example.com' }
});

// With path parameters
const user = await api.get('/users/{id}', {
  path: { id: '123' }
});

// With custom headers
const result = await api.get('/protected', {
  header: { Authorization: 'Bearer your-token' }
});
```

## Validating API Client (`api-client-with-validation.ts`)

Extends the basic client with schema validation for:
- Request body validation before sending
- Response validation after receiving
- Type-safe validation error handling

### Setup

1. Follow the basic client setup steps above
2. Import your validation library and schemas:
   ```typescript
   // For Zod
   import { z } from 'zod';
   import { EndpointByMethod } from './generated/api';

   // For Yup
   import * as yup from 'yup';
   import { EndpointByMethod } from './generated/api';
   ```
3. Implement the validation logic in the marked TODO sections
4. Configure validation settings:
   ```typescript
   const VALIDATE_REQUESTS = true;  // Validate request bodies
   const VALIDATE_RESPONSES = true; // Validate response data
   ```

### Validation Implementation Example (Zod)

```typescript
// Request validation
if (VALIDATE_REQUESTS && params?.body) {
  const endpoint = EndpointByMethod[method as keyof typeof EndpointByMethod];
  const pathSchema = endpoint?.[actualUrl as keyof typeof endpoint];
  if (pathSchema?.body) {
    pathSchema.body.parse(params.body); // Throws if invalid
  }
}

// Response validation
const responseData = await responseClone.json();
const endpoint = EndpointByMethod[method as keyof typeof EndpointByMethod];
const pathSchema = endpoint?.[actualUrl as keyof typeof endpoint];
const statusSchema = pathSchema?.responses?.[response.status];
if (statusSchema) {
  statusSchema.parse(responseData); // Throws if invalid
}
```

### Error Handling

```typescript
try {
  const result = await api.post('/users', {
    body: { name: 'John', email: 'invalid-email' }
  });
} catch (error) {
  if (error instanceof ValidationError) {
    if (error.type === 'request') {
      console.error('Invalid request data:', error.validationErrors);
    } else {
      console.error('Invalid response data:', error.validationErrors);
    }
  } else {
    console.error('Network or HTTP error:', error);
  }
}
```

## Customization Ideas

- **Authentication**: Add token handling, refresh logic, or auth headers
- **Retries**: Implement retry logic for failed requests
- **Caching**: Add response caching with TTL
- **Logging**: Add request/response logging for debugging
- **Rate limiting**: Implement client-side rate limiting
- **Metrics**: Add performance monitoring and error tracking
- **Base URL per environment**: Different URLs for dev/staging/prod

## Error Handling Enhancement

You can enhance error handling by creating custom error classes:

```typescript
class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly response: Response
  ) {
    super(`HTTP ${status}: ${statusText}`);
    this.name = 'ApiError';
  }
}

// In your fetcher:
if (!response.ok) {
  throw new ApiError(response.status, response.statusText, response);
}
```

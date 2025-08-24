# TanStack Query Error Handling Examples

This document demonstrates how the generated TanStack Query client provides type-safe error handling based on OpenAPI error schemas.

## Error Type Inference

The TanStack Query client automatically infers error types from your OpenAPI spec's error responses (status codes 400-511).

### OpenAPI Spec Example

```yaml
paths:
  /users:
    post:
      responses:
        '201':
          description: Created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          description: Validation Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ValidationError'
        '409':
          description: Conflict
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ConflictError'
        '500':
          description: Server Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServerError'

components:
  schemas:
    User:
      type: object
      properties:
        id: { type: string }
        name: { type: string }
        email: { type: string }

    ValidationError:
      type: object
      properties:
        message: { type: string }
        fields:
          type: array
          items: { type: string }

    ConflictError:
      type: object
      properties:
        message: { type: string }
        existingId: { type: string }

    ServerError:
      type: object
      properties:
        message: { type: string }
        code: { type: string }
```

## Generated Error Types

For the above spec, the TanStack Query client generates:

```typescript
// Error type is automatically inferred as:
type CreateUserError =
  | Omit<Response, 'status'> & { status: 400; data: ValidationError }
  | Omit<Response, 'status'> & { status: 409; data: ConflictError }
  | Omit<Response, 'status'> & { status: 500; data: ServerError }
```

## Usage Examples

### Basic Usage with Type-Safe Error Handling

```typescript
import { useMutation } from '@tanstack/react-query';
import { tanstackApi } from './generated/tanstack-query-client';

function CreateUserForm() {
  const createUser = useMutation({
    ...tanstackApi.mutation("post", "/users").mutationOptions,
    onError: (error) => {
      // error is fully typed based on your OpenAPI spec!
      // error is also a Response instance with additional data property
      console.log(error instanceof Response); // true

      if (error.status === 400) {
        // error.data is typed as ValidationError
        console.error('Validation failed:', error.data.message);
        console.error('Invalid fields:', error.data.fields);
      } else if (error.status === 409) {
        // error.data is typed as ConflictError
        console.error('User already exists:', error.data.existingId);
      } else if (error.status === 500) {
        // error.data is typed as ServerError
        console.error('Server error:', error.data.code, error.data.message);
      }
    },
    onSuccess: (user) => {
      // user is typed as User
      console.log('Created user:', user.name);
    }
  });

  return (
    <form onSubmit={() => createUser.mutate({
      body: { name: 'John', email: 'john@example.com' }
    })}>
      {/* form content */}
    </form>
  );
}
```

### Advanced Usage with withResponse

```typescript
function AdvancedCreateUserForm() {
  const createUser = useMutation({
    ...tanstackApi.mutation("post", "/users", {
      withResponse: true,
      selectFn: (response) => ({
        success: response.ok,
        user: response.ok ? response.data : null,
        error: response.ok ? null : response.data,
        statusCode: response.status,
        headers: response.headers
      })
    }).mutationOptions,
    onError: (error) => {
      // Same typed error handling as above
      // error is also a Response instance
      console.log(error.ok); // false
      console.log(error.headers); // Response headers

      switch (error.status) {
        case 400:
          toast.error(`Validation: ${error.data.fields.join(', ')}`);
          break;
        case 409:
          toast.error('Email already taken');
          break;
        case 500:
          toast.error(`Server error: ${error.data.code}`);
          break;
      }
    },
    onSuccess: (result) => {
      if (result.success) {
        toast.success(`Welcome ${result.user!.name}!`);
        // Access response headers
        const rateLimit = result.headers.get('x-rate-limit-remaining');
      }
    }
  });

  // ... rest of component
}
```

### Error Type Discrimination in Action

```typescript
// The error parameter is automatically discriminated based on status
const handleError = (error: CreateUserError) => {
  switch (error.status) {
    case 400:
      // TypeScript knows error.data is ValidationError
      return {
        title: 'Validation Failed',
        message: error.data.message,
        details: error.data.fields.map(field => `${field} is invalid`)
      };

    case 409:
      // TypeScript knows error.data is ConflictError
      return {
        title: 'User Exists',
        message: `User already exists with ID: ${error.data.existingId}`,
        action: 'login'
      };

    case 500:
      // TypeScript knows error.data is ServerError
      return {
        title: 'Server Error',
        message: `Internal error (${error.data.code}): ${error.data.message}`,
        action: 'retry'
      };
  }
};
```

## Benefits

- **Full Type Safety**: Error types are automatically inferred from your OpenAPI spec
- **No Manual Type Definitions**: Types are generated, not hand-written
- **Discriminated Unions**: TypeScript can narrow error types based on status codes
- **IDE Support**: Full autocomplete and type checking for error properties
- **Runtime Safety**: Errors are thrown with consistent structure: `{ status, data }`

## Error Structure

All errors thrown by TanStack Query mutations are **Response-like objects** that extend the native Response with additional type safety:

```typescript
interface ApiError<TData = unknown> extends Omit<Response, 'status'> {
  status: number;  // HTTP status code (400-511) - properly typed
  data: TData;     // Typed error response body
  // All other Response properties are available:
  // ok: boolean
  // headers: Headers
  // url: string
  // etc.
}
```

### Key Benefits of Response-like Errors

- **instanceof Response**: Error objects are proper Response instances
- **Consistent API**: Both success and error responses follow the same Response pattern
- **Full Response Access**: Access to headers, URL, and other Response properties
- **Type Safety**: The `status` property is properly typed based on configured error status codes

### Example Usage

```typescript
try {
  await mutation.mutationFn(params);
} catch (error) {
  console.log(error instanceof Response); // true
  console.log(error.ok); // false
  console.log(error.status); // 400, 401, etc. (properly typed)
  console.log(error.data); // Typed error response body
  console.log(error.headers.get('content-type')); // Response headers
  console.log(error.url); // Request URL
}
```

This makes error handling predictable and type-safe across your entire application while maintaining consistency with the Response API.

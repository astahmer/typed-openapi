# TanStack Query Integration Examples

This document shows how to use the generated TanStack Query client with the new `withResponse` and `selectFn` options.

## Basic Setup

```typescript
import { TanstackQueryApiClient } from './generated/tanstack-query-client';
import { createApiClient } from './generated/api-client';

// Create the API client and TanStack Query wrapper
const apiClient = createApiClient(fetch);
const queryClient = new TanstackQueryApiClient(apiClient);
```

## Usage Patterns

### 1. Basic Usage (Data Only)

```typescript
const basicMutation = queryClient.mutation("post", "/users");
// Type: { mutationFn: (params) => Promise<User> }

// In React component
const createUser = useMutation(basicMutation.mutationOptions);
```

### 2. With Response Object for Error Handling

```typescript
const withResponseMutation = queryClient.mutation("post", "/users", {
  withResponse: true
});
// Type: { mutationFn: (params) => Promise<SafeApiResponse<UserEndpoint>> }

// Usage with error handling
const createUser = useMutation({
  ...withResponseMutation.mutationOptions,
  onSuccess: (response) => {
    if (response.ok) {
      console.log('User created:', response.data);
      console.log('Status:', response.status);
      console.log('Headers:', response.headers.get('location'));
    } else {
      if (response.status === 400) {
        console.error('Validation error:', response.data);
      } else if (response.status === 409) {
        console.error('User already exists:', response.data);
      }
    }
  }
});
```

### 3. Custom Response Transformation

```typescript
// Transform response data without withResponse
const customSelectMutation = queryClient.mutation("post", "/users", {
  selectFn: (user) => ({
    userId: user.id,
    userName: user.name,
    isActive: true
  })
});
// Type: { mutationFn: (params) => Promise<{ userId: string, userName: string, isActive: boolean }> }
```

### 4. Advanced: Response Object + Custom Transformation

```typescript
const advancedMutation = queryClient.mutation("post", "/users", {
  withResponse: true,
  selectFn: (response) => {
    if (response.ok) {
      return {
        success: true,
        user: response.data,
        timestamp: new Date().toISOString()
      };
    } else {
      return {
        success: false,
        error: response.data,
        statusCode: response.status
      };
    }
  }
});
// Type: { mutationFn: (params) => Promise<{ success: boolean, user?: User, error?: ErrorType, statusCode?: number, timestamp?: string }> }
```

## Complete React Example

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TanstackQueryApiClient } from './generated/tanstack-query-client';

function UserForm() {
  const queryClient = useQueryClient();

  // Mutation with error handling
  const createUserMutation = queryClient.mutation("post", "/users", {
    withResponse: true,
    selectFn: (response) => ({
      success: response.ok,
      user: response.ok ? response.data : null,
      error: response.ok ? null : response.data,
      statusCode: response.status
    })
  });

  const createUser = useMutation({
    ...createUserMutation.mutationOptions,
    onSuccess: (result) => {
      if (result.success) {
        // Invalidate and refetch users list
        queryClient.invalidateQueries(['users']);
        toast.success(`User ${result.user.name} created successfully!`);
      } else {
        if (result.statusCode === 400) {
          toast.error(`Validation error: ${result.error.message}`);
        } else if (result.statusCode === 409) {
          toast.error('A user with this email already exists');
        } else {
          toast.error('An unexpected error occurred');
        }
      }
    },
    onError: (error) => {
      // Type-safe error handling - error is a TypedResponseError with data property
      if (error instanceof TypedResponseError) {
        if (error.status === 400) {
          toast.error(`Validation failed: ${error.response.data.message}`);
        } else if (error.status === 500) {
          toast.error('Server error occurred');
        } else {
          toast.error('Network error occurred');
        }
      }
    }
  });

  const handleSubmit = (userData: { name: string; email: string }) => {
    createUser.mutate({ body: userData });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button
        type="submit"
        disabled={createUser.isPending}
      >
        {createUser.isPending ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}
```

## Error Handling

The TanStack Query client provides automatic error type inference based on your OpenAPI error schemas. For detailed examples, see [TANSTACK_QUERY_ERROR_HANDLING.md](./TANSTACK_QUERY_ERROR_HANDLING.md).

Key features:
- **Type-safe errors**: Errors are typed as `{ status: number, data: ErrorSchemaType }`
- **Status code discrimination**: Different error types based on HTTP status codes
- **Full IDE support**: Autocomplete and type checking for error properties

## Type Safety Benefits

- **Full type inference**: All parameters and return types are automatically inferred
- **Error type discrimination**: Different error types based on status codes with full type safety
- **Response object access**: Headers, status, and other Response properties when needed
- **Custom transformations**: Type-safe data transformations with `selectFn`
- **Zero runtime overhead**: All type checking happens at compile time

# typed-openapi

Generate a Typescript API client from an OpenAPI spec

See [the online playground](https://typed-openapi-astahmer.vercel.app/)

![Screenshot 2023-08-08 at 00 48 42](https://github.com/astahmer/typed-openapi/assets/47224540/3016fa92-e09a-41f3-a95f-32caa41325da)

[![pkg.pr.new](https://pkg.pr.new/badge/astahmer/typed-openapi)](https://pkg.pr.new/~/astahmer/typed-openapi)

## Features

- Headless API client, [bring your own fetcher](packages/typed-openapi/API_CLIENT_EXAMPLES.md#basic-api-client-api-client-examplets) (fetch, axios, ky, etc...) !
- Generates a fully typesafe API client with just types by default (instant suggestions)
- **Type-safe error handling** with discriminated unions and configurable success status codes
- **TanStack Query integration** with `withResponse` and `selectFn` options for advanced error handling
- Or you can also generate a client with runtime validation using one of the following runtimes:
  - [zod](https://zod.dev/)
  - [typebox](https://github.com/sinclairzx81/typebox)
  - [arktype](https://arktype.io/)
  - [valibot](https://valibot.dev/)
  - [io-ts](https://gcanti.github.io/io-ts/)
  - [yup](https://github.com/jquense/yup)

The generated client is a single file that can be used in the browser or in node. Runtime validation schemas are
provided by the excellent [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen)

## Install & usage

```sh
pnpm add typed-openapi
```

It exports a bunch of functions that can be used to build your own tooling on top of it. You can look at the
[CLI code](packages/typed-openapi/src/cli.ts) so see how to use them.

## CLI

```sh
npx typed-openapi -h
```

```sh
typed-openapi/1.5.0

Usage:
  $ typed-openapi <input>

Commands:
  <input>  Generate

For more info, run any command with the `--help` flag:
  $ typed-openapi --help

Options:
  -o, --output <path>             Output path for the api client ts file (defaults to `<input>.<runtime>.ts`)
  -r, --runtime <n>               Runtime to use for validation; defaults to `none`; available: Type<"arktype" | "io-ts" | "none" | "typebox" | "valibot" | "yup" | "zod"> (default: none)
  --schemas-only                  Only generate schemas, skipping client generation (defaults to false) (default: false)
  --include-client                Include API client types and implementation (defaults to true) (default: true)
  --success-status-codes <codes>  Comma-separated list of success status codes for type-safe error handling (defaults to 2xx and 3xx ranges)
  --tanstack [name]               Generate tanstack client with withResponse support for error handling, defaults to false, can optionally specify a name for the generated file
  -h, --help                      Display this message
  -v, --version                   Display version number
```

## Non-goals

- Caring too much about the runtime validation code. If that works (thanks to
  [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen)), that's great, otherwise I'm not really interested
  in fixing it. If you are, feel free to open a PR.

- Supporting all the OpenAPI spec. Regex, dates, files, whatever, that's not the point here.
  [openapi-zod-client](https://github.com/astahmer/openapi-zod-client) does a great job at that, but it's slow to
  generate the client and the suggestions in the IDE are not instant. I'm only interested in supporting the subset of
  the spec that makes the API client typesafe and fast to provide suggetions in the IDE.

- Splitting the generated client into multiple files. Nope. Been there, done that. Let's keep it simple.

Basically, let's focus on having a fast and typesafe API client generation instead.

## Usage Examples

### API Client Setup

The generated client is headless - you need to provide your own fetcher. Here are ready-to-use examples:

- **[Basic API Client](packages/typed-openapi/API_CLIENT_EXAMPLES.md#basic-api-client-api-client-examplets)** - Simple, dependency-free wrapper
- **[Validating API Client](packages/typed-openapi/API_CLIENT_EXAMPLES.md#validating-api-client-api-client-with-validationts)** - With request/response validation

### Type-Safe Error Handling

The generated client supports two response modes:

```typescript
// Default: Direct data return (simpler, but no error details)
const user = await api.get("/users/{id}", {
  path: { id: "123" }
}); // user is directly typed as User object

// WithResponse: Full Response object with typed ok/status and data
const result = await api.get("/users/{id}", {
  path: { id: "123" },
  withResponse: true
});

// result is the actual Response object with typed ok/status overrides plus data access
if (result.ok) {
  // Access data directly (already parsed)
  const user = result.data; // Type: User
  console.log("User:", user.name);

  // Or use json() method for compatibility
  const userFromJson = await result.json(); // Same as result.data
  console.log("User from json():", userFromJson.name);

  console.log("Status:", result.status); // Typed as success status codes
  console.log("Headers:", result.headers); // Access to all Response properties
} else {
  // Access error data directly
  const error = result.data; // Type based on status code
  if (result.status === 404) {
    console.log("User not found:", error.message);
  } else if (result.status === 401) {
    console.log("Unauthorized:", error.details);
  }
}
```### Success Response Type-Narrowing

When endpoints have multiple success responses (200, 201, etc.), the type is automatically narrowed based on status:

```typescript
const result = await api.post("/users", {
  body: { name: "John" },
  withResponse: true
});

if (result.ok) {
  if (result.status === 201) {
    // result.data typed as CreateUserResponse (201)
    console.log("Created user:", result.data.id);
  } else if (result.status === 200) {
    // result.data typed as ExistingUserResponse (200)
    console.log("Existing user:", result.data.email);
  }
}
```

### Generic Request Method

For dynamic endpoint calls or when you need more control:

```typescript
// Type-safe generic request method
const response = await api.request("GET", "/users/{id}", {
  path: { id: "123" },
  query: { include: ["profile", "settings"] }
});

const user = await response.json(); // Fully typed based on endpoint
```

### TanStack Query Integration

Generate TanStack Query wrappers for your endpoints:

```bash
npx typed-openapi api.yaml --runtime zod --tanstack
```

## useQuery / fetchQuery / ensureQueryData

```ts
// Basic query
const accessiblePagesQuery = useQuery(
  tanstackApi.get('/authorization/accessible-pages').queryOptions
);

// Query with query parameters
const membersQuery = useQuery(
  tanstackApi.get('/authorization/organizations/:organizationId/members/search', {
    path: { organizationId: 'org123' },
    query: { searchQuery: 'john' }
  }).queryOptions
);

// With additional query options
const departmentCostsQuery = useQuery({
  ...tanstackApi.get('/organizations/:organizationId/department-costs', {
    path: { organizationId: params.orgId },
    query: { period: selectedPeriod },
  }).queryOptions,
  staleTime: 30 * 1000,
  // placeholderData: keepPreviousData,
  // etc
});
```

or if you need it in a router `beforeLoad` / `loader`:

```ts
import { tanstackApi } from '#api';

await queryClient.fetchQuery(
  tanstackApi.get('/:organizationId/remediation/accounting-lines/metrics', {
    path: { organizationId: params.orgId },
  }).queryOptions,
);
```

## useMutation

The mutation API supports both basic usage and advanced error handling with `withResponse` and custom transformations with `selectFn`. **Note**: All mutation errors are Response-like objects with type-safe error inference based on your OpenAPI error schemas.

```ts
// Basic mutation (returns data only)
const basicMutation = useMutation({
  ...tanstackApi.mutation("post", '/authorization/organizations/:organizationId/invitations').mutationOptions,
  onError: (error) => {
    // error is a Response-like object with typed data based on OpenAPI spec
    console.log(error instanceof Response); // true
    console.log(error.status); // 400, 401, etc. (properly typed)
    console.log(error.data); // Typed error response body
  }
});

// With error handling using withResponse
const mutationWithErrorHandling = useMutation(
  tanstackApi.mutation("post", '/users', {
    withResponse: true
  }).mutationOptions
);

// With custom response transformation
const customMutation = useMutation(
  tanstackApi.mutation("post", '/users', {
    selectFn: (user) => ({ userId: user.id, userName: user.name })
  }).mutationOptions
);

// Advanced: withResponse + selectFn for comprehensive error handling
const advancedMutation = useMutation(
  tanstackApi.mutation("post", '/users', {
    withResponse: true,
    selectFn: (response) => ({
      success: response.ok,
      user: response.ok ? response.data : null,
      error: response.ok ? null : response.data,
      statusCode: response.status
    })
  }).mutationOptions
);
```

### Usage Examples:

```ts
// Basic usage
basicMutation.mutate({
  body: {
    emailAddress: 'user@example.com',
    department: 'engineering',
    roleName: 'admin'
  }
});

// With error handling
mutationWithErrorHandling.mutate(
  { body: userData },
  {
    onSuccess: (response) => {
      if (response.ok) {
        toast.success(`User ${response.data.name} created!`);
      } else {
        if (response.status === 400) {
          toast.error(`Validation error: ${response.data.message}`);
        } else if (response.status === 409) {
          toast.error('User already exists');
        }
      }
    }
  }
);

// Advanced usage with custom transformation
advancedMutation.mutate(
  { body: userData },
  {
    onSuccess: (result) => {
      if (result.success) {
        console.log('Created user:', result.user.name);
      } else {
        console.error(`Error ${result.statusCode}:`, result.error);
      }
    }
  }
);
```

## useMutation without the tanstack api

If you need to make a custom mutation you could use the `api` directly:

```ts
const { mutate: login, isPending } = useMutation({
  mutationFn: async (type: 'google' | 'microsoft') => {
    return api.post(`/authentication/${type}`, { body: { redirectUri: search.redirect } });
  },
  onSuccess: (data) => {
    window.location.replace(data.url);
  },
  onError: (error, type) => {
    console.error(error);
    toast({
      title: t(`toast.login.${type}.error`),
      icon: 'warning',
      variant: 'critical',
    });
  },
});
```

## Alternatives

[openapi-zod-client](https://github.com/astahmer/openapi-zod-client), which generates a
[zodios](https://github.com/ecyrbe/zodios) client but can be slow to provide IDE suggestions when the OpenAPI spec is
large. Also, you might not always want to use zod or even runtime validation, hence this project.

## Contributing

- `pnpm i`
- `pnpm build`
- `pnpm test`

When you're done with your changes, please run `pnpm changeset` in the root of the repo and follow the instructions
described [here](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md).

// Example: How to use the type-safe error handling

// This is what the generated types would look like:
type GetUserByIdEndpoint = {
  method: "GET";
  path: "/users/{id}";
  requestFormat: "json";
  parameters: {
    path: { id: string };
  };
  response: { id: string; name: string };
  responses: {
    200: { id: string; name: string };
    401: { error: string; code: number };
    404: { message: string };
    500: { error: string };
  };
};

// The SafeApiResponse type creates a discriminated union:
type SafeApiResponse<TEndpoint> = TEndpoint extends { response: infer TSuccess; responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? ApiResponse<TSuccess, TResponses>
    : { ok: true; status: number; data: TSuccess }
  : TEndpoint extends { response: infer TSuccess }
    ? { ok: true; status: number; data: TSuccess }
    : never;

type ApiResponse<TSuccess, TErrors extends Record<string, unknown> = {}> = {
  ok: true;
  status: number;
  data: TSuccess;
} | {
  [K in keyof TErrors]: {
    ok: false;
    status: K extends string ? (K extends `${number}` ? number : never) : never;
    error: TErrors[K];
  }
}[keyof TErrors];

// Example usage:
async function handleUserRequest(api: any, userId: string) {
  // Using the safe method for type-safe error handling
  const result = await api.getSafe("/users/{id}", { path: { id: userId } });

  if (result.ok) {
    // TypeScript knows result.data is { id: string; name: string }
    console.log(`User found: ${result.data.name} (ID: ${result.data.id})`);
    return result.data;
  } else {
    // TypeScript knows this is an error case
    if (result.status === 401) {
      // TypeScript knows result.error is { error: string; code: number }
      console.error(`Authentication failed: ${result.error.error} (Code: ${result.error.code})`);
      throw new Error("Unauthorized");
    } else if (result.status === 404) {
      // TypeScript knows result.error is { message: string }
      console.error(`User not found: ${result.error.message}`);
      return null;
    } else if (result.status === 500) {
      // TypeScript knows result.error is { error: string }
      console.error(`Server error: ${result.error.error}`);
      throw new Error("Server error");
    }
  }
}

// Alternative: Using traditional try/catch with status code checking
async function handleUserRequestTraditional(api: any, userId: string) {
  try {
    // Using the regular method - only gets success response type
    const user = await api.get("/users/{id}", { path: { id: userId } });
    console.log(`User found: ${user.name} (ID: ${user.id})`);
    return user;
  } catch (error) {
    // No type safety here - error is unknown
    console.error("Request failed:", error);
    throw error;
  }
}

export { handleUserRequest, handleUserRequestTraditional };

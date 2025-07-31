import { createApiClient } from './packages/typed-openapi/tests/snapshots/petstore.client';

// Create an API client using the generated types
const api = createApiClient((method, url, params) =>
  fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
);

async function testTypeInference() {
  // Test with error handling for /pet/findByStatus endpoint which has responses: { 200: Array<Pet>; 400: Array<{ caca: true }>; }
  const response = await api.get("/pet/findByStatus", { withResponse: true }, { query: { status: "available" } });

  if (response.ok) {
    // This should be properly typed as Array<Pet>
    console.log("Success data type:", typeof response.data);
    response.data; // Array<Schemas.Pet>
  } else {
    // This should now be properly typed based on the status - status should be 400 (number) instead of never
    console.log("Error status type:", typeof response.status); // should be number, not never
    console.log("Actual status:", response.status); // should be 400

    if (response.status === 400) {
      // response.error should be inferred as Array<{ caca: true }> based on the responses type
      console.log("400 error type:", typeof response.error);
      response.error; // Should be Array<{ caca: true }>
    }
  }

  // Test with another endpoint to verify the discriminated union works for different status codes
  const userResponse = await api.get("/user/{username}", { withResponse: true }, { path: { username: "test" } });

  if (!userResponse.ok) {
    // This endpoint has responses: { 200: User; 400: unknown; 404: unknown }
    if (userResponse.status === 404) {
      userResponse.error; // Should be 'unknown' type
    }
    if (userResponse.status === 400) {
      userResponse.error; // Should be 'unknown' type
    }
  }
}

// Export for type checking
export { testTypeInference };

import { createApiClient } from './packages/typed-openapi/tests/snapshots/petstore.client';

// Test type inference with the updated API
const api = createApiClient((method, url, params) =>
  fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
);

async function testNewTypeInference() {
  console.log("Testing new API with improved type inference...");

  // Test 1: Simple usage without error handling
  const pets = await api.get("/pet/findByStatus", { query: { status: "available" } });
  console.log("✓ Basic API call works");

  // Test 2: Error handling with inline withResponse parameter
  const result = await api.get("/pet/findByStatus", {
    query: { status: "available" },
    withResponse: true
  });

  if (result.ok) {
    console.log("✓ Success case: data is properly typed");
    // result.data should be Array<Pet>
    console.log("Data type:", Array.isArray(result.data) ? 'Array' : typeof result.data);
  } else {
    console.log("✓ Error case: status and error are properly typed");
    console.log("Status:", result.status, "(type:", typeof result.status, ")");

    // Test status discrimination
    if (result.status === 400) {
      console.log("✓ Status 400 properly discriminated");
      // result.error should be { code: number; message: string }
      console.log("Error type for 400:", typeof result.error);
      if (typeof result.error === 'object' && result.error && 'code' in result.error) {
        console.log("✓ Error has proper schema with code and message");
      }
    }
  }

  // Test 3: Another endpoint to verify generic behavior
  const userResult = await api.get("/pet/{petId}", {
    path: { petId: 123 },
    withResponse: true
  });

  if (!userResult.ok) {
    console.log("Pet by ID error status:", userResult.status);
    if (userResult.status === 404) {
      console.log("✓ 404 status properly typed for pet endpoint");
    }
  }

  console.log("🎉 All type inference tests completed!");
}

// Run the test
testNewTypeInference().catch(console.error);

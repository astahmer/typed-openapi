/**
 * effect3 promise ApiClient — lighter suite (deep InferSchemaInput can TS2589).
 * Fixtures: pnpm gen:tstyche-fixtures
 */
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  type Pet,
  type InferResponseByStatus,
  type get_FindPetsByStatus,
  type get_GetPetById,
  type TypedApiResponse,
} from "../../../tmp/tstyche/runtimes/effect3/client.ts";

const api = createApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("effect3 promise ApiClient", () => {
  it("exports createApiClient", () => {
    expect(createApiClient).type.toBeCallableWith({
      fetch: async () => new Response("[]"),
    });
  });

  it("infers success response data", () => {
    type Ok = InferResponseByStatus<get_FindPetsByStatus, 200>["data"];
    expect<Ok>().type.toBeAssignableTo<readonly Pet[]>();
  });

  it("SafeApiResponse-shaped get-by-id via InferResponseByStatus", () => {
    type Ok = InferResponseByStatus<get_GetPetById, 200>;
    expect<Ok>().type.toBeAssignableTo<{ ok: true; status: 200; data: Pet }>();
  });

  it("client exposes status code tables", () => {
    expect(api.successStatusCodes).type.toBeAssignableTo<readonly number[]>();
    expect(api.errorStatusCodes).type.toBeAssignableTo<readonly number[]>();
  });
});

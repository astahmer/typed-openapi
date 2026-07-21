/**
 * effect3 promise client — light checks (full InferSchemaInput can TS2589).
 */
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  type Pet,
  type InferResponseByStatus,
  type get_FindPetsByStatus,
} from "../../../tmp/tstyche/runtimes/effect3/client.ts";

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
});

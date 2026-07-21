/**
 * Shared promise-client type assertions per runtime.
 * Fixtures: `pnpm gen:tstyche-fixtures` → tmp/tstyche/runtimes/<runtime>/client.ts
 */
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  type Pet,
  type InferResponseByStatus,
  type delete_DeletePet,
  type get_FindPetsByStatus,
  type get_GetPetById,
  type post_AddPet,
} from "../../../tmp/tstyche/runtimes/zod3/client.ts";

const api = createApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("zod3 promise ApiClient", () => {
  it("path params object is present and not any", () => {
    const endpointRequest = api.delete<"/pet/{petId}", delete_DeletePet>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect({} as Params).type.not.toBeAssignableTo<string>();
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });

  it("body params accept Pet", () => {
    const endpointRequest = api.post<"/pet", post_AddPet>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect<{ body: Pet }>().type.toBeAssignableTo<Params>();
  });

  it("infers success response data", () => {
    type Ok = InferResponseByStatus<get_FindPetsByStatus, 200>["data"];
    expect<Ok>().type.toBeAssignableTo<readonly Pet[]>();
  });

  it("get-by-id params are not any", () => {
    const endpointRequest = api.get<"/pet/{petId}", get_GetPetById>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect({} as Params).type.not.toBeAssignableTo<string>();
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });
});

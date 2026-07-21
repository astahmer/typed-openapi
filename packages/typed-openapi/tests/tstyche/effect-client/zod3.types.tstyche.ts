/**
 * Shared EffectApiClient type assertions per runtime.
 */
import { Effect } from "effect";
import { describe, expect, it } from "tstyche";
import {
  createEffectApiClient,
  type Pet,
  type HttpClientError,
  type TypedStatusError,
  type delete_DeletePet,
  type get_FindPetsByStatus,
  type get_GetPetById,
  type post_AddPet,
} from "../../../tmp/tstyche/effect-client/zod3/client.ts";

const api = createEffectApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("zod3 EffectApiClient", () => {
  it("error channel is only TypedStatusError | HttpClientError", () => {
    const endpointRequest = api.get<"/pet/findByStatus", get_FindPetsByStatus>;
    type Err = Effect.Error<ReturnType<typeof endpointRequest>>;
    expect<TypedStatusError>().type.toBeAssignableTo<Err>();
    expect<HttpClientError>().type.toBeAssignableTo<Err>();
    expect<Error>().type.not.toBeAssignableTo<Err>();
    expect<string>().type.not.toBeAssignableTo<Err>();
  });

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
    const endpointRequest = api.get<"/pet/findByStatus", get_FindPetsByStatus>;
    type Ok = Effect.Success<ReturnType<typeof endpointRequest>>;
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

/**
 * EffectApiClient (runtime none) — Schemas/Endpoints namespaces.
 */
import { Effect } from "effect";
import { describe, expect, it } from "tstyche";
import {
  createEffectApiClient,
  type Endpoints,
  type HttpClientError,
  type Schemas,
  type TypedStatusError,
} from "../../../tmp/tstyche/effect-client/none/client.ts";

const api = createEffectApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("none EffectApiClient", () => {
  it("error channel is only TypedStatusError | HttpClientError", () => {
    const endpointRequest = api.get<"/pet/findByStatus", Endpoints.get_FindPetsByStatus>;
    type Err = Effect.Error<ReturnType<typeof endpointRequest>>;
    expect<TypedStatusError>().type.toBeAssignableTo<Err>();
    expect<HttpClientError>().type.toBeAssignableTo<Err>();
    expect<Error>().type.not.toBeAssignableTo<Err>();
    expect<string>().type.not.toBeAssignableTo<Err>();
  });

  it("path params object is present and not any", () => {
    const endpointRequest = api.delete<"/pet/{petId}", Endpoints.delete_DeletePet>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect({} as Params).type.not.toBeAssignableTo<string>();
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });

  it("body params accept Pet", () => {
    const endpointRequest = api.post<"/pet", Endpoints.post_AddPet>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect<{ body: Schemas.Pet }>().type.toBeAssignableTo<Params>();
  });

  it("infers success response data", () => {
    const endpointRequest = api.get<"/pet/findByStatus", Endpoints.get_FindPetsByStatus>;
    type Ok = Effect.Success<ReturnType<typeof endpointRequest>>;
    expect<Ok>().type.toBeAssignableTo<readonly Schemas.Pet[]>();
  });

  it("get-by-id params are not any", () => {
    const endpointRequest = api.get<"/pet/{petId}", Endpoints.get_GetPetById>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect({} as Params).type.not.toBeAssignableTo<string>();
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });
});

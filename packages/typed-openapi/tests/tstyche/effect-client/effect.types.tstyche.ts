/**
 * effect EffectApiClient — MSW / integration type parity (Effect success + error channel).
 * Fixtures: pnpm gen:tstyche-fixtures → tmp/tstyche/effect-client/effect/
 */
import { Effect } from "effect";
import { describe, expect, it } from "tstyche";
import {
  createEffectApiClient,
  type Pet,
  type HttpClientError,
  type TypedStatusError,
  type InferResponseByStatus,
  type delete_DeletePet,
  type get_FindPetsByStatus,
  type get_GetPetById,
  type post_AddPet,
  type post_UpdatePetWithForm,
  type get_LoginUser,
} from "../../../tmp/tstyche/effect-client/effect/client.ts";

const api = createEffectApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("effect EffectApiClient", () => {
  it("error channel is only TypedStatusError | HttpClientError", () => {
    const endpointRequest = api.get<"/pet/findByStatus", get_FindPetsByStatus>;
    type Err = Effect.Error<ReturnType<typeof endpointRequest>>;
    expect<TypedStatusError>().type.toBeAssignableTo<Err>();
    expect<HttpClientError>().type.toBeAssignableTo<Err>();
    expect<Error>().type.not.toBeAssignableTo<Err>();
    expect<string>().type.not.toBeAssignableTo<Err>();
  });

  it("has successStatusCodes and errorStatusCodes", () => {
    expect(api.successStatusCodes).type.toBeAssignableTo<readonly number[]>();
    expect(api.errorStatusCodes).type.toBeAssignableTo<readonly number[]>();
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

  it("form update has path params", () => {
    const endpointRequest = api.post<"/pet/{petId}", post_UpdatePetWithForm>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });

  it("request() success data matches get()", () => {
    const viaGet = api.get<"/pet/findByStatus", get_FindPetsByStatus>;
    const viaRequest = api.request<"get", "/pet/findByStatus", get_FindPetsByStatus>;
    type GetOk = Effect.Success<ReturnType<typeof viaGet>>;
    type ReqOk = Effect.Success<ReturnType<typeof viaRequest>>;
    expect<GetOk>().type.toBeAssignableTo<ReqOk>();
    expect<ReqOk>().type.toBeAssignableTo<GetOk>();
  });

  it("InferResponseByStatus aligns with Effect success for findByStatus 200", () => {
    type FromEndpoint = InferResponseByStatus<get_FindPetsByStatus, 200>["data"];
    const endpointRequest = api.get<"/pet/findByStatus", get_FindPetsByStatus>;
    type FromCall = Effect.Success<ReturnType<typeof endpointRequest>>;
    expect<FromCall>().type.toBeAssignableTo<FromEndpoint>();
  });

  it("login endpoint exists and accepts optional query", () => {
    const endpointRequest = api.get<"/user/login", get_LoginUser>;
    type Params = Parameters<typeof endpointRequest>[1];
    expect({} as Params).type.toBeAssignableTo<undefined | { query?: unknown; overrides?: RequestInit }>();
  });

  it("overrides are accepted on get-by-id", () => {
    const endpointRequest = api.get<"/pet/{petId}", get_GetPetById>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    type HasOverrides = Params extends { overrides?: RequestInit } ? true : false;
    expect<HasOverrides>().type.toBe<true>();
    void "42";
  });
});

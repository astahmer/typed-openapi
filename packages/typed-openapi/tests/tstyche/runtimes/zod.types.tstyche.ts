/**
 * zod promise ApiClient — MSW / integration type parity.
 * Fixtures: pnpm gen:tstyche-fixtures → tmp/tstyche/runtimes/zod/
 */
import { mutationOptions, queryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  type Pet,
  type User,
  type Tag,
  type TypedApiResponse,
  type TypedStatusError,
  type TypedSuccessResponse,
  type InferSuccessData,
  type delete_DeletePet,
  type get_FindPetsByStatus,
  type get_FindPetsByTags,
  type get_GetPetById,
  type get_GetPetEmpty,
  type get_GetUserByName,
  type get_LoginUser,
  type post_AddPet,
  type post_UpdatePetWithForm,
} from "../../../tmp/tstyche/runtimes/zod/client.ts";
import type { TanstackQueryApiClient } from "../../../tmp/tstyche/runtimes/zod/tanstack.ts";

const api = createApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("zod promise ApiClient", () => {
  it("has successStatusCodes and errorStatusCodes", () => {
    expect(api.successStatusCodes).type.toBeAssignableTo<readonly number[]>();
    expect(api.errorStatusCodes).type.toBeAssignableTo<readonly number[]>();
  });

  it("overrides.signal accepts AbortSignal", () => {
    const controller = new AbortController();
    expect<{ overrides?: { signal?: AbortSignal } }>().type.toBeAssignableTo<{
      overrides?: RequestInit;
    }>();
    void controller;
  });

  it("infer response with multiple status / withResponse: undefined", async () => {
    const result = await api.get("/pet/findByStatus", { query: {} });
    expect(result).type.toBeAssignableTo<readonly Pet[]>();
  });

  it("infer/narrow response with multiple status / withResponse: true", async () => {
    const result = await api.get("/pet/findByStatus", { query: {}, withResponse: true });
    expect(result).type.toBeAssignableTo<
      TypedApiResponse<
        {
          200: readonly Pet[];
          304: unknown;
          400: { code: number; message: string };
        },
        never
      >
    >();
    if (result.ok) {
      expect(result.status).type.toBeAssignableTo<200 | 304>();
      if (result.status === 200) {
        expect(result.data).type.toBeAssignableTo<readonly Pet[]>();
      }
    } else {
      expect(result.status).type.toBe<400>();
      expect(result.data).type.toBeAssignableTo<{ code: number; message: string }>();
    }
  });

  it("infer/narrow response with distinct success schemas / withResponse: true", async () => {
    const result = await api.get("/user/{username}", { path: { username: "xxx" }, withResponse: true });
    expect(result).type.toBeAssignableTo<
      TypedApiResponse<
        {
          200: User;
          201: { id: number; username: string };
          400: { code: number; message: string };
          404: unknown;
        },
        never
      >
    >();
    if (result.ok && result.status === 200) {
      expect(result.data).type.toBeAssignableTo<User>();
    }
  });

  it("infer response with multiple json media types / withResponse: undefined", async () => {
    const result = await api.get("/pet/findByTags", { query: {} });
    expect(result).type.toBeAssignableTo<readonly Pet[] | readonly User[] | readonly Tag[]>();
  });

  it("infer/narrow response with multiple json media types / withResponse: true", async () => {
    const result = await api.get("/pet/findByTags", { query: {}, withResponse: true });
    expect(result).type.toBeAssignableTo<
      TypedApiResponse<{ 200: readonly Pet[] | readonly User[] | readonly Tag[]; 400: unknown }, never>
    >();
  });

  it("header params merge with overrides/HeadersInit", async () => {
    const endpointRequest = api.delete<"/pet/{petId}", delete_DeletePet>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect({} as Params).type.toBeAssignableTo<{ overrides?: { headers?: HeadersInit } }>();
    expect({} as Params).type.toBeAssignableTo<{ overrides?: RequestInit }>();
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });

  it("can pass overrides when endpoint parameters are never", () => {
    const endpointRequest = api.get<"/pet/empty", get_GetPetEmpty>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    type HasOverrides = Params extends { overrides?: RequestInit } ? true : false;
    expect<HasOverrides>().type.toBe<true>();
  });

  it("infer response using api.request / withResponse: undefined", async () => {
    const result = await api.request("get", "/pet/findByStatus", { query: {} });
    expect(result).type.toBeAssignableTo<readonly Pet[]>();
  });

  it("infer/narrow response using api.request / withResponse: true", async () => {
    const result = await api.request("get", "/pet/findByStatus", { query: {}, withResponse: true });
    expect(result).type.toBeAssignableTo<
      TypedApiResponse<
        {
          200: readonly Pet[];
          304: unknown;
          400: { code: number; message: string };
        },
        never
      >
    >();
  });

  it("infer path param object (not any)", () => {
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

  it("infer query + path params for form update", () => {
    const endpointRequest = api.post<"/pet/{petId}", post_UpdatePetWithForm>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });

  it("get-by-id params are not any", () => {
    const endpointRequest = api.get<"/pet/{petId}", get_GetPetById>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;
    expect({} as Params).type.not.toBeAssignableTo<string>();
    type HasPath = Params extends { path: unknown } ? true : false;
    expect<HasPath>().type.toBe<true>();
  });

  it("infer response with typed headers / user/login", async () => {
    const result = await api.get("/user/login", { query: {}, withResponse: true });
    expect(result).type.toBeAssignableTo<
      TypedApiResponse<
        { 200: string; 400: unknown },
        {
          200: { "X-Rate-Limit": number; "X-Expires-After": string };
          400: { "X-Error": string };
        }
      >
    >();
    if (result.status === 200) {
      expect(result).type.toBeAssignableTo<
        TypedSuccessResponse<string, 200, { "X-Rate-Limit": number; "X-Expires-After": string }>
      >();
    }
  });

  it("error union with withResponse + throwOnStatusError false", async () => {
    const res = await api.get("/pet/{petId}", {
      path: { petId: 42 },
      withResponse: true,
      throwOnStatusError: false,
    });
    expect(res).type.toBeAssignableTo<
      TypedApiResponse<
        {
          200: Pet;
          400: { code: number; message: string };
          404: { code: number; message: string };
        },
        never
      >
    >();
  });

  it("post /pet returns Pet data by default", async () => {
    const pet = { name: "Doggo", photoUrls: [] as string[] } as Pet;
    const result = await api.post("/pet", { body: pet });
    expect(result).type.toBeAssignableTo<Pet>();
  });

  it("TypedStatusError is constructible from error response shape", () => {
    expect<TypedStatusError>().type.toBeAssignableTo<Error>();
  });

  it("TanstackQueryApiClient query", async () => {
    const tanstack = {} as TanstackQueryApiClient;
    const query = tanstack.get("/pet/{petId}", { path: { petId: 42 } });
    const output = await query.queryOptions.queryFn?.({} as never);
    expect(output).type.toBeAssignableTo<Pet | undefined>();
  });

  it("TanstackQueryApiClient mutation withResponse: undefined", async () => {
    const tanstack = {} as TanstackQueryApiClient;
    const mutation = tanstack.mutation("get", "/pet/{petId}");
    const input = {} as Parameters<NonNullable<typeof mutation.mutationOptions.mutationFn>>[0];
    expect(input).type.toBeAssignableTo<{ withResponse?: boolean; throwOnStatusError?: boolean }>();
    const output = await mutation.mutationOptions.mutationFn!({ path: { petId: 42 } });
    expect(output).type.toBeAssignableTo<Pet>();
  });

  it("TanstackQueryApiClient mutation withResponse: true", async () => {
    const tanstack = {} as TanstackQueryApiClient;
    const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
    const output = await mutation.mutationOptions.mutationFn!({ path: { petId: 42 } });
    expect(output).type.toBeAssignableTo<TypedSuccessResponse<Pet, 200, never>>();
  });

  it("TanstackQueryApiClient useMutation error channel", () => {
    const tanstack = {} as TanstackQueryApiClient;
    const hookMutation = useMutation(tanstack.mutation("get", "/pet/{petId}").mutationOptions);
    expect(hookMutation.error).type.toBeAssignableTo<TypedStatusError | null>();
  });

  it("TanstackQueryApiClient has working typings for options helpers", () => {
    const tanstack = {} as TanstackQueryApiClient;
    const mutation = tanstack.mutation("get", "/pet/{petId}");
    // @ts-expect-error!
    mutationOptions(mutation);
    mutationOptions(mutation.mutationOptions);
    const query = tanstack.get("/pet/{petId}", { path: { petId: 42 } });
    // @ts-expect-error!
    queryOptions(query);
    queryOptions(query.queryOptions);
  });

  it("TanstackQueryApiClient useQuery data", () => {
    const tanstack = {} as TanstackQueryApiClient;
    const queryWithSomeResponseUnknownData = tanstack.get("/pet/findByStatus", { query: { status: "available" } });
    const queryHook = useQuery(queryWithSomeResponseUnknownData.queryOptions);
    expect(queryHook.data).type.toBeAssignableTo<readonly Pet[] | undefined>();
  });
});

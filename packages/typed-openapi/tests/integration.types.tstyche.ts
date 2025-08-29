// Integration test for generated query client using TSTyche
// This test ensures the generated client (TS types only, no schema validation) has no inference errors

import { mutationOptions, queryOptions, useMutation } from "@tanstack/react-query";
import { describe, expect, it } from "tstyche";
import {
  type Endpoints,
  type Schemas,
  type TypedApiResponse,
  type TypedErrorResponse,
  type TypedSuccessResponse
} from "../tmp/generated-client.ts";
import { type TanstackQueryApiClient } from "../tmp/generated-tanstack.ts";
import { api } from "./api-client.example.ts";

describe("Example API Client", () => {
  it("infer response with multiple status and one schema unknown / withResponse: undefined", async () => {
    const result = await api.get("/pet/findByStatus", { query: {} });
    expect(result).type.toBe<Schemas.Pet[]>();
  });

  it("infer/narrow response with multiple status and one schema unknown / withResponse: true", async () => {
    const result = await api.get("/pet/findByStatus", { query: {}, withResponse: true });
    expect(result).type.toBe<
      TypedApiResponse<
        {
          200: Array<Schemas.Pet>;
          304: unknown;
          400: {
            code: number;
            message: string;
          };
        },
        never
      >
    >();

    if (result.ok) {
      expect(result.status).type.toBe<200 | 304>();
      expect(result.data).type.toBe<unknown>();

      if (result.status === 200) {
        expect(result.data).type.toBe<Array<Schemas.Pet>>();
      }
    } else {
      expect(result.status).type.toBe<400>();
      expect(result.data).type.toBe<{
        code: number;
        message: string;
      }>();
    }
  });

  it("infer/narrow response with multiple status and distinct schemas / withResponse: true", async () => {
    const result = await api.get("/user/{username}", { path: { username: "xxx" }, withResponse: true });
    expect(result).type.toBe<
      TypedApiResponse<
        {
          200: Schemas.User;
          201: {
            id: number;
            username: string;
          };
          400: {
            code: number;
            message: string;
          };
          404: unknown;
        },
        never
      >
    >();

    if (result.ok) {
      expect(result.status).type.toBe<200 | 201>();
      expect(result.data).type.toBe<
        | Partial<{
            id: number;
            username: string;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            phone: string;
            userStatus: number;
          }>
        | {
            id: number;
            username: string;
          }
      >();

      if (result.status === 200) {
        expect(result.data).type.toBe<
          Partial<{
            id: number;
            username: string;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            phone: string;
            userStatus: number;
          }>
        >();
      } else if (result.status === 201) {
        expect(result.data).type.toBe<{
          id: number;
          username: string;
        }>();
      }
    } else {
      expect(result.status).type.toBe<400 | 404>();
      expect(result.data).type.toBe<unknown>();

      if (result.status === 400) {
        expect(result.data).type.toBe<{
          code: number;
          message: string;
        }>();
      }
    }
  });

  it("infer response with multiple json media types / withResponse: undefined", async () => {
    const result = await api.get("/pet/findByTags", { query: {} });
    expect(result).type.toBe<
      | Schemas.Pet[]
      | Partial<{
          id: number;
          username: string;
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          phone: string;
          userStatus: number;
        }>[]
      | Partial<{
          id: number;
          name: string;
        }>[]
    >();
  });

  it("infer/narrow response with multiple json media types / withResponse: true", async () => {
    const result = await api.get("/pet/findByTags", { query: {}, withResponse: true });
    expect(result).type.toBe<
      TypedApiResponse<
        {
          200: Array<Schemas.Pet> | Array<Schemas.User> | Array<Schemas.Tag>;
          400: unknown;
        },
        never
      >
    >();

    if (result.ok) {
      expect(result.status).type.toBe<200>();
    } else {
      expect(result.status).type.toBe<400>();
    }
  });

  it("header specific typings are merged with overrides/HeadersInit", async () => {
    // @ts-expect-error Property 'header' is missing in type
    await api.delete("/pet/{petId}", {
      path: { petId: 42 },
    });

    const endpointRequest = api.delete<"/pet/{petId}", Endpoints.delete_DeletePet>;
    const input = {} as Parameters<typeof endpointRequest>[1];

    expect(input).type.toBeAssignableTo<Endpoints.delete_DeletePet["parameters"]>();
    expect(input).type.toBeAssignableTo<Endpoints.delete_DeletePet["parameters"] & { overrides?: { headers?: HeadersInit } }>();
    expect(input).type.toBeAssignableTo<{ overrides?: RequestInit }>();
  });

  it("can pass overrides even if there's no parameters on the endpoint schema", async () => {
      const endpointRequest = api.get<"/pet/empty", Endpoints.get_GetPetEmpty>;
    const input = {} as Parameters<typeof endpointRequest>[1];

    expect(input).type.toBeAssignableTo<undefined|{ overrides?: { headers?: HeadersInit }; withResponse?: true }>();
    });


  it("infer response using api.request / withResponse: undefined", async () => {
    const result = await api.request("get", "/pet/findByStatus", { query: {} });
    expect(result).type.toBe<Schemas.Pet[]>();
  });

  it("infer/narrow response using api.request / withResponse: true", async () => {
    const result = await api.request("get", "/pet/findByStatus", { query: {}, withResponse: true });
    expect(result).type.toBe<
      TypedApiResponse<
        {
          200: Array<Schemas.Pet>;
          304: unknown;
          400: {
            code: number;
            message: string;
          };
        },
        never
      >
    >();

    if (result.ok) {
      expect(result.status).type.toBe<200 | 304>();
      expect(result.data).type.toBe<unknown>();

      if (result.status === 200) {
        expect(result.data).type.toBe<Array<Schemas.Pet>>();
      }
    } else {
      expect(result.status).type.toBe<400>();
      expect(result.data).type.toBe<{
        code: number;
        message: string;
      }>();
    }
  });

  it("infer path param", async () => {
    const endpointRequest = api.delete<"/pet/{petId}", Endpoints.delete_DeletePet>;
    const input = {} as Parameters<typeof endpointRequest>[1];

    expect(input).type.toBeAssignableTo<{
      path: {
        petId: number;
      };
    }>();
  });

  it("infer body param", async () => {
    const endpointRequest = api.post<"/pet", Endpoints.post_AddPet>;
    const input = {} as Parameters<typeof endpointRequest>[1];

    expect(input).type.toBeAssignableTo<{ body: Schemas.Pet }>();
  });

  it("infer query param", async () => {
    const endpointRequest = api.post<"/pet/{petId}", Endpoints.post_UpdatePetWithForm>;
    const input = {} as Parameters<typeof endpointRequest>[1];

    expect(input).type.toBeAssignableTo<{
      query: Partial<{
        name: string;
        status: string;
      }>;
    }>();
  });

  it("infer response with typed headers /user/login", async () => {
    const result = await api.get("/user/login", { query: {}, withResponse: true });
    expect(result).type.toBe<
      TypedApiResponse<
        {
          200: string;
          400: unknown;
        },
        {
          200: {
            "X-Rate-Limit": number;
            "X-Expires-After": string;
          };
          400: {
            "X-Error": string;
          };
        }
      >
    >();
    if (result.status === 200) {
      expect(result).type.toBe<
        TypedSuccessResponse<string, 200, { "X-Rate-Limit": number; "X-Expires-After": string }>
      >();
    }
  });

  it("infer error type for throwOnStatusError false with withResponse", async () => {
    const res = await api.get("/pet/{petId}", {
      path: { petId: 9999 },
      withResponse: true,
      throwOnStatusError: false,
    });
    expect(res).type.toBe<
      TypedApiResponse<
        {
          200: Schemas.Pet;
          400: {
            code: number;
            message: string;
          };
          404: {
            code: number;
            message: string;
          };
        },
        never
      >
    >();
    if (!res.ok) {
      expect(res.status).type.toBe<400 | 404>();
      expect(res.data).type.toBe<{ code: number; message: string }>();
    }
  });

  it("TanstackQueryApiClient query", async () => {
    const tanstack = {} as TanstackQueryApiClient;

    const query = tanstack.get("/pet/{petId}", { path: { petId: 42 } });
    const output = await query.queryOptions.queryFn?.({} as any);
    expect(output).type.toBe<Schemas.Pet | undefined>();
  });

  it("TanstackQueryApiClient mutation withResponse: undefined (global+local)", async () => {
    const tanstack = {} as TanstackQueryApiClient;

    const mutation = tanstack.mutation("get", "/pet/{petId}");
    const input = {} as Parameters<typeof mutation.mutationOptions.mutationFn>[0];
    expect(input).type.toBeAssignableTo<Endpoints.get_GetPetById["parameters"]>();
    expect(input).type.toBeAssignableTo<{
      withResponse?: boolean;
      throwOnStatusError?: boolean;
    }>();
    expect(input).type.toBeAssignableTo<{
      path: {
        petId: number;
      };
    }>();

    const output = await mutation.mutationOptions.mutationFn({ path: { petId: 42 } });
    expect(output).type.toBe<Schemas.Pet>();
  });

  it("TanstackQueryApiClient mutation withResponse: true (global) / withResponse: undefined (local)", async () => {
    const tanstack = {} as TanstackQueryApiClient;

    const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
    const input = {} as Parameters<typeof mutation.mutationOptions.mutationFn>[0];
    expect(input).type.toBeAssignableTo<Endpoints.get_GetPetById["parameters"]>();
    expect(input).type.toBeAssignableTo<{
      withResponse?: boolean;
      throwOnStatusError?: boolean;
    }>();
    expect(input).type.toBeAssignableTo<{
      path: {
        petId: number;
      };
    }>();

    const output = await mutation.mutationOptions.mutationFn({ path: { petId: 42 } });
    expect(output).type.toBe<TypedSuccessResponse<Schemas.Pet, 200, never>>();
  });

  it("TanstackQueryApiClient mutation withResponse: false (global) / withResponse: true (local)", async () => {
    const tanstack = {} as TanstackQueryApiClient;

    const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: false });
    const input = {} as Parameters<typeof mutation.mutationOptions.mutationFn>[0];
    expect(input).type.toBeAssignableTo<Endpoints.get_GetPetById["parameters"]>();
    expect(input).type.toBeAssignableTo<{
      withResponse?: boolean;
      throwOnStatusError?: boolean;
    }>();
    expect(input).type.toBeAssignableTo<{
      path: {
        petId: number;
      };
    }>();

    const output = await mutation.mutationOptions.mutationFn({ path: { petId: 42 }, withResponse: true });
    expect(output).type.toBe<TypedSuccessResponse<Schemas.Pet, 200, never>>();
  });

  it("TanstackQueryApiClient mutation withResponse: true (local) / withResponse: false (local)", async () => {
    const tanstack = {} as TanstackQueryApiClient;

    const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
    const input = {} as Parameters<typeof mutation.mutationOptions.mutationFn>[0];
    expect(input).type.toBeAssignableTo<Endpoints.get_GetPetById["parameters"]>();
    expect(input).type.toBeAssignableTo<{
      withResponse?: boolean;
      throwOnStatusError?: boolean;
    }>();
    expect(input).type.toBeAssignableTo<{
      path: {
        petId: number;
      };
    }>();

    const output = await mutation.mutationOptions.mutationFn({ path: { petId: 42 }, withResponse: false });
    expect(output).type.toBe<Schemas.Pet>();
  });

  it("TanstackQueryApiClient mutation withResponse: undefined (global+local) -> onSuccess/onError", async () => {
    const tanstack = {} as TanstackQueryApiClient;

    const mutation = tanstack.mutation("get", "/pet/{petId}").mutationOptions;
    const output = await mutation.mutationFn!({ path: { petId: 42 } });
    expect(output).type.toBe<Schemas.Pet>();

    const hookMutation = useMutation(tanstack.mutation("get", "/pet/{petId}").mutationOptions);
    expect(hookMutation.error).type.toBe<
      | TypedErrorResponse<
          {
            code: number;
            message: string;
          },
          400,
          never
        >
      | TypedErrorResponse<
          {
            code: number;
            message: string;
          },
          404,
          never
        >
      | null
    >();

    const hookOutput = hookMutation.mutateAsync({ path: { petId: 42 } });
    expect(hookOutput).type.toBe<Promise<Schemas.Pet>>();
  });

  it("TanstackQueryApiClient has working typings", () => {
    const tanstack = {} as TanstackQueryApiClient;

    const mutation = tanstack.mutation("get", "/pet/{petId}");
    // @ts-expect-error  Type 'string' is not assignable to type 'MutationFunction<unknown, void>'.
    mutationOptions(mutation);
    mutationOptions(mutation.mutationOptions);

    const query = tanstack.get("/pet/{petId}", { path: { petId: 42 } });
    // @ts-expect-error  Type '"You need to pass .queryOptions to the useQuery hook"' is not assignable to type
    queryOptions(query);
    queryOptions(query.queryOptions);
  });
});

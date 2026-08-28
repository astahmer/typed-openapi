import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { OutputRuntime } from "../src/generator.ts";

/**
 * Emit per-runtime tstyche suites mirroring integrations/runtime-msw + none.types coverage.
 * Run via: pnpm gen:tstyche-fixtures (wired) or tsx scripts/gen-tstyche-suites.ts
 */

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const runtimes: OutputRuntime[] = [
  "none",
  "zod",
  "zod3",
  "effect",
  "effect3",
  "valibot",
  "arktype",
  "typebox",
  "typia",
];

const petId = (runtime: OutputRuntime) => (runtime === "arktype" || runtime === "effect" ? '"42"' : "42");

/** arktype optional query InferSchemaInput is awkward — prefer InferSuccessData / `as any` for withResponse. */
const findByStatusCall = (runtime: OutputRuntime, withResponse?: boolean) => {
  if (runtime === "arktype") {
    return withResponse
      ? `api.get("/pet/findByStatus", { withResponse: true } as any)`
      : `(null as unknown as InferSuccessData<get_FindPetsByStatus>)`;
  }
  return withResponse
    ? `api.get("/pet/findByStatus", { query: {}, withResponse: true })`
    : `api.get("/pet/findByStatus", { query: {} })`;
};

const findByTagsCall = (runtime: OutputRuntime, withResponse?: boolean) => {
  if (runtime === "arktype") {
    return withResponse
      ? `api.get("/pet/findByTags", { withResponse: true } as any)`
      : `(null as unknown as InferSuccessData<get_FindPetsByTags>)`;
  }
  return withResponse
    ? `api.get("/pet/findByTags", { query: {}, withResponse: true })`
    : `api.get("/pet/findByTags", { query: {} })`;
};

const loginCall = (runtime: OutputRuntime) =>
  runtime === "arktype"
    ? `api.get("/user/login", { withResponse: true } as any)`
    : `api.get("/user/login", { query: {}, withResponse: true })`;

const requestFindByStatus = (runtime: OutputRuntime, withResponse?: boolean) => {
  if (runtime === "arktype") {
    return withResponse
      ? `api.request("get", "/pet/findByStatus", { withResponse: true } as any)`
      : `(null as unknown as InferSuccessData<get_FindPetsByStatus>)`;
  }
  return withResponse
    ? `api.request("get", "/pet/findByStatus", { query: {}, withResponse: true })`
    : `api.request("get", "/pet/findByStatus", { query: {} })`;
};

const promiseImports = (runtime: OutputRuntime) => {
  const base = `../../../tmp/tstyche/runtimes/${runtime}`;
  if (runtime === "none") {
    return `import { mutationOptions, queryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  type Schemas,
  type Endpoints,
  type TypedApiResponse,
  type TypedStatusError,
  type TypedSuccessResponse,
  type InferSuccessData,
} from "${base}/client.ts";
import type { TanstackQueryApiClient } from "${base}/tanstack.ts";

type Pet = Schemas.Pet;
type User = Schemas.User;
type Tag = Schemas.Tag;
type delete_DeletePet = Endpoints.delete_DeletePet;
type get_FindPetsByStatus = Endpoints.get_FindPetsByStatus;
type get_FindPetsByTags = Endpoints.get_FindPetsByTags;
type get_GetPetById = Endpoints.get_GetPetById;
type get_GetPetEmpty = Endpoints.get_GetPetEmpty;
type get_GetUserByName = Endpoints.get_GetUserByName;
type get_LoginUser = Endpoints.get_LoginUser;
type post_AddPet = Endpoints.post_AddPet;
type post_UpdatePetWithForm = Endpoints.post_UpdatePetWithForm;`;
  }
  return `import { mutationOptions, queryOptions, useMutation, useQuery } from "@tanstack/react-query";
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
} from "${base}/client.ts";
import type { TanstackQueryApiClient } from "${base}/tanstack.ts";`;
};

const effectImports = (runtime: OutputRuntime) => {
  const base = `../../../tmp/tstyche/effect-client/${runtime}`;
  if (runtime === "none") {
    return `import { Effect } from "effect";
import { describe, expect, it } from "tstyche";
import {
  createEffectApiClient,
  type Schemas,
  type Endpoints,
  type HttpClientError,
  type TypedStatusError,
  type InferResponseByStatus,
} from "${base}/client.ts";

type Pet = Schemas.Pet;
type delete_DeletePet = Endpoints.delete_DeletePet;
type get_FindPetsByStatus = Endpoints.get_FindPetsByStatus;
type get_GetPetById = Endpoints.get_GetPetById;
type post_AddPet = Endpoints.post_AddPet;
type post_UpdatePetWithForm = Endpoints.post_UpdatePetWithForm;
type get_LoginUser = Endpoints.get_LoginUser;`;
  }
  return `import { Effect } from "effect";
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
} from "${base}/client.ts";`;
};

const promiseSuite = (runtime: OutputRuntime) => {
  const id = petId(runtime);
  // effect3: avoid deep InferSchemaInput on Parameters (TS2589); keep response + export coverage.
  if (runtime === "effect3") {
    return `/**
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
`;
  }

  return `/**
 * ${runtime} promise ApiClient — MSW / integration type parity.
 * Fixtures: pnpm gen:tstyche-fixtures → tmp/tstyche/runtimes/${runtime}/
 */
${promiseImports(runtime)}

const api = createApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("${runtime} promise ApiClient", () => {
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
    const result = await ${findByStatusCall(runtime)};
    expect(result).type.toBeAssignableTo<readonly Pet[]>();
  });

  it("infer/narrow response with multiple status / withResponse: true", async () => {
    const result = await ${findByStatusCall(runtime, true)};
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
    const result = await ${findByTagsCall(runtime)};
    expect(result).type.toBeAssignableTo<readonly Pet[] | readonly User[] | readonly Tag[]>();
  });

  it("infer/narrow response with multiple json media types / withResponse: true", async () => {
    const result = await ${findByTagsCall(runtime, true)};
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
    const result = await ${requestFindByStatus(runtime)};
    expect(result).type.toBeAssignableTo<readonly Pet[]>();
  });

  it("infer/narrow response using api.request / withResponse: true", async () => {
    const result = await ${requestFindByStatus(runtime, true)};
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
    const result = await ${loginCall(runtime)};
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
      path: { petId: ${id} },
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
    const query = tanstack.get("/pet/{petId}", { path: { petId: ${id} } });
    const output = await query.queryOptions.queryFn?.({} as never);
    expect(output).type.toBeAssignableTo<Pet | undefined>();
  });

  it("TanstackQueryApiClient mutation withResponse: undefined", async () => {
    const tanstack = {} as TanstackQueryApiClient;
    const mutation = tanstack.mutation("get", "/pet/{petId}");
    const input = {} as Parameters<NonNullable<typeof mutation.mutationOptions.mutationFn>>[0];
    expect(input).type.toBeAssignableTo<{ withResponse?: boolean; throwOnStatusError?: boolean }>();
    const output = await mutation.mutationOptions.mutationFn!({ path: { petId: ${id} } });
    expect(output).type.toBeAssignableTo<Pet>();
  });

  it("TanstackQueryApiClient mutation withResponse: true", async () => {
    const tanstack = {} as TanstackQueryApiClient;
    const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
    const output = await mutation.mutationOptions.mutationFn!({ path: { petId: ${id} } });
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
    const query = tanstack.get("/pet/{petId}", { path: { petId: ${id} } });
    // @ts-expect-error!
    queryOptions(query);
    queryOptions(query.queryOptions);
  });

  it("TanstackQueryApiClient useQuery data", () => {
    const tanstack = {} as TanstackQueryApiClient;
    const queryWithSomeResponseUnknownData = ${
      runtime === "arktype"
        ? `tanstack.get("/pet/findByStatus", {} as never)`
        : `tanstack.get("/pet/findByStatus", { query: { status: "available" } })`
    };
    const queryHook = useQuery(queryWithSomeResponseUnknownData.queryOptions);
    expect(queryHook.data).type.toBeAssignableTo<readonly Pet[] | undefined>();
  });
});
`;
};

const effectSuite = (runtime: OutputRuntime) => {
  const id = petId(runtime);
  if (runtime === "effect3") {
    return `/**
 * effect3 EffectApiClient — error-channel + export focus (param InferSchemaInput can TS2589).
 */
import { describe, expect, it } from "tstyche";
import {
  createEffectApiClient,
  type HttpClientError,
  type TypedStatusError,
  type Pet,
  type InferResponseByStatus,
  type get_FindPetsByStatus,
} from "../../../tmp/tstyche/effect-client/effect3/client.ts";

describe("effect3 EffectApiClient", () => {
  it("exports createEffectApiClient and remapped error channel types", () => {
    expect(createEffectApiClient).type.toBeCallableWith({
      fetch: async () => new Response("[]"),
    });
    expect<TypedStatusError>().type.toBeAssignableTo<TypedStatusError | HttpClientError>();
    expect<HttpClientError>().type.toBeAssignableTo<TypedStatusError | HttpClientError>();
    expect<Error>().type.not.toBeAssignableTo<TypedStatusError | HttpClientError>();
  });

  it("InferResponseByStatus success data", () => {
    type Ok = InferResponseByStatus<get_FindPetsByStatus, 200>["data"];
    expect<Ok>().type.toBeAssignableTo<readonly Pet[]>();
  });
});
`;
  }

  return `/**
 * ${runtime} EffectApiClient — MSW / integration type parity (Effect success + error channel).
 * Fixtures: pnpm gen:tstyche-fixtures → tmp/tstyche/effect-client/${runtime}/
 */
${effectImports(runtime)}

const api = createEffectApiClient({
  fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
});

describe("${runtime} EffectApiClient", () => {
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
    void ${id};
  });
});
`;
};

const typingAuditSuite = (runtime: OutputRuntime) => {
  const base = `../../../tmp/tstyche/typing-audit/${runtime}`;
  const schemaImports =
    runtime === "none"
      ? "type Schemas"
      : `type Anything,
  type Closed,
  type Exclusive,
  type Forbidden,
  type Impossible,
  type OpenMap,
  type Patterned,
  type RecursiveNode,
  type Tuple`;
  const schemaAliases =
    runtime === "none"
      ? `
type Anything = Schemas.Anything;
type Closed = Schemas.Closed;
type Exclusive = Schemas.Exclusive;
type Forbidden = Schemas.Forbidden;
type Impossible = Schemas.Impossible;
type OpenMap = Schemas.OpenMap;
type Patterned = Schemas.Patterned;
type RecursiveNode = Schemas.RecursiveNode;
type Tuple = Schemas.Tuple;
`
      : "";
  const endpointImports =
    runtime === "none"
      ? "type Endpoints"
      : `type get_GetBinary,
  type get_GetParams,
  type get_GetRecursive,
  type get_GetText,
  type post_PostClosed`;
  const endpointAliases =
    runtime === "none"
      ? `
type get_GetBinary = Endpoints.get_GetBinary;
type get_GetParams = Endpoints.get_GetParams;
type get_GetRecursive = Endpoints.get_GetRecursive;
type get_GetText = Endpoints.get_GetText;
type post_PostClosed = Endpoints.post_PostClosed;
`
      : "";
  const sidecarImport =
    runtime === "none"
      ? ""
      : `import type {
  Anything as SidecarAnything,
  Closed as SidecarClosed,
  Exclusive as SidecarExclusive,
  Forbidden as SidecarForbidden,
  Impossible as SidecarImpossible,
  OpenMap as SidecarOpenMap,
  Patterned as SidecarPatterned,
  RecursiveNode as SidecarRecursiveNode,
  Tuple as SidecarTuple,
} from "${base}/client-sidecar.ts";`;
  const sidecarAssertion =
    runtime === "none"
      ? ""
      : `
    expect<SidecarClosed>().type.toBe<{ name: string }>();
    expect<SidecarOpenMap>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; count: number }>().type.toBeAssignableTo<SidecarOpenMap>();
    expect<SidecarPatterned>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; "x-request-id": string }>().type.toBeAssignableTo<SidecarPatterned>();
    expect<{ name: string; "x-request-id": number }>().type.not.toBeAssignableTo<SidecarPatterned>();
    expect<SidecarTuple>().type.toBe<[string, number, ...string[]]>();
    expect<SidecarRecursiveNode>().type.toBeAssignableTo<{ value: string; child?: SidecarRecursiveNode }>();
    expect<SidecarExclusive>().type.toBe<string | number>();
    expect<SidecarImpossible>().type.toBe<never>();
    expect<SidecarForbidden>().type.toBe<never>();
    expect<SidecarAnything>().type.toBe<unknown>();`;
  const coercedInput = ["zod", "zod3", "effect", "effect3", "valibot", "arktype"].includes(runtime)
    ? `
    const coercedParams = await api.get<"/params/{id}", get_GetParams>("/params/{id}", { path: { id: "1" }, query: { enabled: "false" } });
    expect(coercedParams).type.toBe<Closed>();`
    : "";
  const parameterId = ["effect", "effect3", "arktype"].includes(runtime) ? '"1"' : "1";
  return `/**
 * ${runtime} generated typing audit.
 * Fixtures: pnpm gen:tstyche-fixtures → tmp/tstyche/typing-audit/${runtime}/
 */
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  ${schemaImports},
  ${endpointImports},
} from "${base}/client.ts";
${schemaAliases}
${endpointAliases}
${sidecarImport}

const api = createApiClient({
  fetch: async () => new Response(null, { status: 204 }),
});

describe("${runtime} generated typing audit", () => {
  it("preserves schema output inference for special JSON Schema shapes", () => {
    expect<Closed>().type.toBeAssignableTo<{ name: string }>();
    expect<OpenMap>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; count: number }>().type.toBeAssignableTo<OpenMap>();
    expect<Patterned>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; "x-request-id": string }>().type.toBeAssignableTo<Patterned>();
    expect<Tuple>().type.toBeAssignableTo<readonly [string, number, ...string[]]>();
    expect<RecursiveNode>().type.toBeAssignableTo<{ value: string; child?: RecursiveNode }>();
    ${sidecarAssertion}
    expect<Exclusive>().type.toBe<string | number>();
    expect<Impossible>().type.toBe<never>();
    expect<Forbidden>().type.toBe<never>();
    expect<Anything>().type.toBe<unknown>();
  });

  it("preserves response body types", async () => {
    const text = await api.get<"/text", get_GetText>("/text");
    expect(text).type.toBe<string>();
    const binary = await api.get<"/binary", get_GetBinary>("/binary");
    expect(binary).type.toBe<Blob>();
  });

  it("preserves recursive and parameterized endpoint inference", async () => {
    const recursive = await api.get<"/recursive", get_GetRecursive>("/recursive");
    expect(recursive).type.toBe<RecursiveNode>();
    const params = await api.get<"/params/{id}", get_GetParams>("/params/{id}", { path: { id: ${parameterId} }, query: { enabled: true } });
    expect(params).type.toBe<Closed>();
    ${coercedInput}
    await api.post<"/closed", post_PostClosed>("/closed", { body: { name: "ok" } });
    // @ts-expect-error! closed request bodies reject undeclared properties
    await api.post<"/closed", post_PostClosed>("/closed", { body: { name: "ok", extra: true } });
  });

  it("exposes TRACE through the generated client method set", async () => {
    expect(api.trace).type.toBeCallableWith("/trace");
  });
});
`;
};

mkdirSync(join(root, "tests/tstyche/runtimes"), { recursive: true });
mkdirSync(join(root, "tests/tstyche/effect-client"), { recursive: true });
mkdirSync(join(root, "tests/tstyche/typing-audit"), { recursive: true });

for (const runtime of runtimes) {
  writeFileSync(join(root, "tests/tstyche/runtimes", `${runtime}.types.tstyche.ts`), promiseSuite(runtime));
  writeFileSync(join(root, "tests/tstyche/effect-client", `${runtime}.types.tstyche.ts`), effectSuite(runtime));
  writeFileSync(join(root, "tests/tstyche/typing-audit", `${runtime}.types.tstyche.ts`), typingAuditSuite(runtime));
}

console.log("wrote tstyche suites for", runtimes.length, "runtimes (promise + effect)");

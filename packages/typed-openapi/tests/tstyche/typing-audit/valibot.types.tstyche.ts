/**
 * valibot generated typing audit.
 * Fixtures: pnpm gen:tstyche-fixtures → tmp/tstyche/typing-audit/valibot/
 */
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  type Anything,
  type Closed,
  type Exclusive,
  type Forbidden,
  type Impossible,
  type OpenMap,
  type Patterned,
  type RecursiveNode,
  type Tuple,
  type get_GetBinary,
  type get_GetParams,
  type get_GetRecursive,
  type get_GetText,
  type post_PostClosed,
} from "../../../tmp/tstyche/typing-audit/valibot/client.ts";


import type {
  Anything as SidecarAnything,
  Closed as SidecarClosed,
  Exclusive as SidecarExclusive,
  Forbidden as SidecarForbidden,
  Impossible as SidecarImpossible,
  OpenMap as SidecarOpenMap,
  Patterned as SidecarPatterned,
  RecursiveNode as SidecarRecursiveNode,
  Tuple as SidecarTuple,
} from "../../../tmp/tstyche/typing-audit/valibot/client-sidecar.ts";

const api = createApiClient({
  fetch: async () => new Response(null, { status: 204 }),
});

describe("valibot generated typing audit", () => {
  it("preserves schema output inference for special JSON Schema shapes", () => {
    expect<Closed>().type.toBeAssignableTo<{ name: string }>();
    expect<OpenMap>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; count: number }>().type.toBeAssignableTo<OpenMap>();
    expect<Patterned>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; "x-request-id": string }>().type.toBeAssignableTo<Patterned>();
    expect<Tuple>().type.toBeAssignableTo<readonly [string, number, ...string[]]>();
    expect<RecursiveNode>().type.toBeAssignableTo<{ value: string; child?: RecursiveNode }>();
    
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
    expect<SidecarAnything>().type.toBe<unknown>();
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
    const params = await api.get<"/params/{id}", get_GetParams>("/params/{id}", { path: { id: 1 }, query: { enabled: true } });
    expect(params).type.toBe<Closed>();
    
    const coercedParams = await api.get<"/params/{id}", get_GetParams>("/params/{id}", { path: { id: "1" }, query: { enabled: "false" } });
    expect(coercedParams).type.toBe<Closed>();
    await api.post<"/closed", post_PostClosed>("/closed", { body: { name: "ok" } });
    // @ts-expect-error! closed request bodies reject undeclared properties
    await api.post<"/closed", post_PostClosed>("/closed", { body: { name: "ok", extra: true } });
  });

  it("exposes TRACE through the generated client method set", async () => {
    expect(api.trace).type.toBeCallableWith("/trace");
  });
});

/**
 * none generated typing audit.
 * Fixtures: pnpm gen:tstyche-fixtures → tmp/tstyche/typing-audit/none/
 */
import { describe, expect, it } from "tstyche";
import {
  createApiClient,
  type Schemas,
  type Endpoints,
} from "../../../tmp/tstyche/typing-audit/none/client.ts";

type Anything = Schemas.Anything;
type Closed = Schemas.Closed;
type Exclusive = Schemas.Exclusive;
type Forbidden = Schemas.Forbidden;
type Impossible = Schemas.Impossible;
type OpenMap = Schemas.OpenMap;
type Patterned = Schemas.Patterned;
type RecursiveNode = Schemas.RecursiveNode;
type Tuple = Schemas.Tuple;


type get_GetBinary = Endpoints.get_GetBinary;
type get_GetParams = Endpoints.get_GetParams;
type get_GetRecursive = Endpoints.get_GetRecursive;
type get_GetText = Endpoints.get_GetText;
type post_PostClosed = Endpoints.post_PostClosed;



const api = createApiClient({
  fetch: async () => new Response(null, { status: 204 }),
});

describe("none generated typing audit", () => {
  it("preserves schema output inference for special JSON Schema shapes", () => {
    expect<Closed>().type.toBeAssignableTo<{ name: string }>();
    expect<OpenMap>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; count: number }>().type.toBeAssignableTo<OpenMap>();
    expect<Patterned>().type.toBeAssignableTo<{ name: string }>();
    expect<{ name: string; "x-request-id": string }>().type.toBeAssignableTo<Patterned>();
    expect<Tuple>().type.toBeAssignableTo<readonly [string, number, ...string[]]>();
    expect<RecursiveNode>().type.toBeAssignableTo<{ value: string; child?: RecursiveNode }>();
    
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
    
    await api.post<"/closed", post_PostClosed>("/closed", { body: { name: "ok" } });
    // @ts-expect-error! closed request bodies reject undeclared properties
    await api.post<"/closed", post_PostClosed>("/closed", { body: { name: "ok", extra: true } });
  });

  it("exposes TRACE through the generated client method set", async () => {
    expect(api.trace).type.toBeCallableWith("/trace");
  });
});

import { Effect } from "effect";
import type { SchemaError } from "effect/SchemaError";
import { describe, expect, it } from "tstyche";
import {
  createEffectApiClient,
  type HttpClientError,
  type TypedStatusError,
  type get_ContainerArchive,
} from "../../../tmp/tstyche/docker-effect/client.ts";

const api = createEffectApiClient({
  fetch: async () => new Response(null, { status: 200 }),
});

describe("docker EffectApiClient archive params", () => {
  it("types path+query for GET /containers/{id}/archive (not any)", () => {
    const endpointRequest = api.get<"/containers/{id}/archive", get_ContainerArchive>;
    type Params = NonNullable<Parameters<typeof endpointRequest>[1]>;

    expect({} as Params).type.not.toBeAssignableTo<string>();
    expect<Params>().type.toBeAssignableTo<{
      path: { id: string };
      query: { path: string };
    }>();
    expect<{ path: { id: string } }>().type.not.toBeAssignableTo<Params>();
  });

  it("error channel excludes SchemaError / bare Error", () => {
    const endpointRequest = api.get<"/containers/{id}/archive", get_ContainerArchive>;
    type Err = Effect.Error<ReturnType<typeof endpointRequest>>;
    expect<TypedStatusError>().type.toBeAssignableTo<Err>();
    expect<HttpClientError>().type.toBeAssignableTo<Err>();
    expect<SchemaError>().type.not.toBeAssignableTo<Err>();
    expect<Error>().type.not.toBeAssignableTo<Err>();
  });
});

import { Effect } from "effect";
import type { SchemaError } from "effect/SchemaError";
import { describe, expect, it } from "tstyche";
import { createEffectApiClient, type HttpClientError, type TypedStatusError } from "../tmp/generated-effect-client.ts";

describe("EffectApiClient types", () => {
  it("error channel includes TypedStatusError, HttpClientError, and SchemaError", () => {
    const api = createEffectApiClient({
      fetch: async () => new Response("[]", { status: 200, headers: { "content-type": "application/json" } }),
    });
    const effect = api.get("/pets");

    type Err = Effect.Error<typeof effect>;
    expect<TypedStatusError>().type.toBeAssignableTo<Err>();
    expect<HttpClientError>().type.toBeAssignableTo<Err>();
    expect<SchemaError>().type.toBeAssignableTo<Err>();
    expect<string>().type.not.toBeAssignableTo<Err>();
  });
});

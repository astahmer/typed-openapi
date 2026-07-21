/**
 * effect3 EffectApiClient — error-channel focus (param InferSchemaInput can TS2589).
 */
import { describe, expect, it } from "tstyche";
import {
  createEffectApiClient,
  type HttpClientError,
  type TypedStatusError,
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
});

/**
 * EffectApiClient MSW integration — runtime parity with runtime-msw.test.ts
 * (promise client). Uses the none-runtime effect fixture from gen:tstyche-fixtures.
 */
import { Effect } from "effect";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  createEffectApiClient,
  HttpClientError,
  TypedStatusError,
} from "../../tmp/tstyche/effect-client/none/client.ts";

const mockPets = [{ id: 1, name: "Fluffy", photoUrls: [] as string[], status: "available" as const }];

const server = setupServer(
  http.get("http://localhost/pet/findByStatus", ({ request }) => {
    const status = new URL(request.url).searchParams.get("status");
    if (status === "pending") {
      return HttpResponse.json({ code: 400, message: "Invalid status" }, { status: 400 });
    }
    return HttpResponse.json(mockPets);
  }),
  http.get("http://localhost/pet/42", () => HttpResponse.json({ id: 42, name: "Spot", photoUrls: [], status: "sold" })),
  http.get("http://localhost/pet/9999", () =>
    HttpResponse.json({ code: 404, message: "Pet not found" }, { status: 404 }),
  ),
  http.post("http://localhost/pet", async ({ request }) => {
    const body = (await request.json()) as object;
    return HttpResponse.json({ ...body, id: 99 });
  }),
  http.post("http://localhost/pet/42", ({ request }) => {
    const url = new URL(request.url);
    return HttpResponse.json({
      name: url.searchParams.get("name"),
      status: url.searchParams.get("status"),
    });
  }),
  http.delete("http://localhost/pet/42", ({ request }) => {
    if (request.headers.get("api_key") === "secret") return HttpResponse.text("deleted");
    return HttpResponse.text("forbidden", { status: 403 });
  }),
  http.get("http://localhost/pet/111", async () => {
    await new Promise((r) => setTimeout(r, 200));
    return HttpResponse.json({ id: 111, name: "Slow", photoUrls: [], status: "pending" });
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

const api = createEffectApiClient(
  {
    fetch: async (input) => {
      const headers = new Headers(input.overrides?.headers);
      if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();
      if (input.parameters?.header) {
        for (const [k, v] of Object.entries(input.parameters.header)) {
          if (v != null) headers.set(k, String(v));
        }
      }
      const init: RequestInit = { method: input.method, headers, ...input.overrides };
      if (input.parameters?.body != null && ["post", "put", "patch", "POST", "PUT", "PATCH"].includes(input.method)) {
        headers.set("Content-Type", "application/json");
        init.body = JSON.stringify(input.parameters.body);
      }
      return fetch(input.url, init);
    },
  },
  "http://localhost",
);

describe("EffectApiClient MSW", () => {
  it("exposes successStatusCodes and errorStatusCodes", () => {
    expect(api.successStatusCodes.length).toBeGreaterThan(0);
    expect(api.errorStatusCodes).toContain(404);
  });

  it("get /pet/findByStatus", async () => {
    const result = await Effect.runPromise(api.get("/pet/findByStatus", { query: {} }));
    expect(result).toEqual(mockPets);
  });

  it("get /pet/{petId} with path", async () => {
    const result = await Effect.runPromise(api.get("/pet/{petId}", { path: { petId: 42 } }));
    expect(result).toMatchObject({ id: 42, name: "Spot" });
  });

  it("post /pet with body", async () => {
    const result = await Effect.runPromise(api.post("/pet", { body: { name: "Doggo", photoUrls: [] } }));
    expect(result).toMatchObject({ id: 99, name: "Doggo" });
  });

  it("post /pet/{petId} with path + query", async () => {
    const result = await Effect.runPromise(
      api.post("/pet/{petId}", {
        path: { petId: 42 },
        query: { name: "x", status: "available" },
      }),
    );
    expect(result).toEqual({ name: "x", status: "available" });
  });

  it("delete /pet/{petId} with header", async () => {
    const result = await Effect.runPromise(
      api.delete("/pet/{petId}", {
        path: { petId: 42 },
        header: { api_key: "secret" },
      }),
    );
    expect(result).toBe("deleted");
  });

  it("request() mirrors get()", async () => {
    const result = await Effect.runPromise(api.request("get", "/pet/findByStatus", { query: {} }));
    expect(result).toEqual(mockPets);
  });

  it("throws TypedStatusError on forbidden delete", async () => {
    const err = await Effect.runPromise(
      api.delete("/pet/{petId}", { path: { petId: 42 }, header: { api_key: "wrong" } }).pipe(Effect.flip),
    );
    expect(err).toBeInstanceOf(TypedStatusError);
    expect((err as TypedStatusError).status).toBe(403);
  });

  it("error channel surfaces TypedStatusError for 404", async () => {
    const err = await Effect.runPromise(api.get("/pet/{petId}", { path: { petId: 9999 } }).pipe(Effect.flip));
    expect(err).toBeInstanceOf(TypedStatusError);
    expect((err as TypedStatusError).response.data).toEqual({
      code: 404,
      message: expect.any(String),
    });
  });

  it("abort via overrides.signal", async () => {
    const controller = new AbortController();
    const fiber = Effect.runPromise(
      api.get("/pet/{petId}", {
        path: { petId: 111 },
        overrides: { signal: controller.signal },
      }),
    );
    controller.abort();
    await expect(fiber).rejects.toBeInstanceOf(HttpClientError);
  });
});

// Integration test for generated query client using MSW
// This test ensures the generated client (TS types only, no schema validation) has no runtime errors

import { mutationOptions, queryOptions } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createApiClient, TypedResponseError } from "../tmp/generated-client.ts";
import { TanstackQueryApiClient } from "../tmp/generated-tanstack.ts";
import { api } from "./api-client.example.js";

// Mock handler for a real endpoint from petstore.yaml
const mockPets = [
  {
    id: 1,
    name: "Fluffy",
    photoUrls: [],
    status: "available",
  },
];
const server = setupServer(
  // GET with query (simulate error for status=pending)
  http.get("http://localhost/pet/findByStatus", ({ request }) => {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    if (status === "pending") {
      return HttpResponse.json({ code: 400, message: "Invalid status" }, { status: 400 });
    }
    return HttpResponse.json(mockPets);
  }),
  // GET with path (success)
  http.get("http://localhost/pet/42", () => {
    return HttpResponse.json({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
  }),
  // GET with path (404 error)
  http.get("http://localhost/pet/9999", () => {
    return HttpResponse.json({ code: 404, message: "Pet not found" }, { status: 404 });
  }),
  // POST with body
  http.post("http://localhost/pet", async ({ request }) => {
    let body: any = await request.json();
    if (body == null || typeof body !== "object") body = {};
    return HttpResponse.json({ ...body, id: 99 });
  }),
  // POST with path and query (no body expected)
  http.post("http://localhost/pet/42", ({ request }) => {
    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    const status = url.searchParams.get("status");
    return HttpResponse.json({ name, status });
  }),
  // DELETE with header
  http.delete("http://localhost/pet/42", ({ request }) => {
    if (request.headers.get("api_key") === "secret") {
      return HttpResponse.text("deleted");
    }
    return HttpResponse.text("forbidden", { status: 403 });
  }),
  // GET with headers
  http.get("http://localhost/user/login", () => {
    return HttpResponse.json(
      {
        success: true,
      },
      {
        status: 200,
        headers: {
          "X-Rate-Limit": "10",
          "X-Expires-After": "60",
        },
      },
    );
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("minimalist test", () => {
  it("should fetch /pet/findByStatus and receive mocked pets", async () => {
    const fetcher = (method: string, url: string) => fetch(url, { method });
    const mini = createApiClient(
      {
        transformRequest(input) {
          return fetcher(input.method, input.url);
        },
      },
      "http://localhost",
    );
    const result = await mini.get("/pet/findByStatus", { query: {} });
    expect(result).toEqual(mockPets);
  });
});

describe("Example API Client", () => {
  beforeAll(() => {
    api.baseUrl = "http://localhost";
  });

  it("has access to successStatusCodes and errorStatusCodes", async () => {
    expect(api.successStatusCodes).toEqual([
      200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
    ]);
    expect(api.errorStatusCodes).toEqual([
      400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
      425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
    ]);
  });

  it("should fetch /pet/findByStatus and receive mocked pets", async () => {
    const result = await api.get("/pet/findByStatus", { query: {} });
    expect(result).toEqual(mockPets);
  });

  it("should fetch /pet/:petId with path param", async () => {
    const result = await api.get("/pet/{petId}", { path: { petId: 42 } });
    expect(result).toEqual({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
  });

  it("should post /pet with body param", async () => {
    const newPet = { name: "Rex", photoUrls: ["img.jpg"] };
    const result = await api.post("/pet", { body: newPet });
    expect(result).toMatchObject(newPet);
    expect(result.id).toBe(99);
  });

  it("should post /pet/:petId with path and query params", async () => {
    const result = await api.post("/pet/{petId}", {
      path: { petId: 42 },
      query: { name: "Buddy", status: "pending" },
    });
    expect(result).toEqual({ name: "Buddy", status: "pending" });
  });

  it("should delete /pet/:petId with header param", async () => {
    const result = await api.delete("/pet/{petId}", {
      path: { petId: 42 },
      header: { api_key: "secret" },
    });
    expect(result).toBe("deleted");
  });

  it("can use .request", async () => {
    const res = await api.request("get", "/pet/findByStatus", { query: {} });
    expect(res).toEqual(mockPets);
  });

  it("can use .request withResponse: true", async () => {
    const res = await api.request("get", "/pet/findByStatus", { query: {}, withResponse: true });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual(mockPets);
  });

  it("can use .request to post and get a Response object", async () => {
    const newPet = { name: "Tiger", photoUrls: [] };
    const data = await api.request("post", "/pet", { body: newPet });
    expect(data).toMatchObject(newPet);
    expect(data.id).toBe(99);
  });

   it("can use .request to post withResponse: true", async () => {
    const newPet = { name: "Tiger", photoUrls: [] };
    const res = await api.request("post", "/pet", { body: newPet, withResponse: true });
    expect(res.status).toBe(200);
    expect(res.ok).toBe(true);
    if (!res.ok) throw new Error("res.ok is false");

    const data = await res.json();
    expect(data).toMatchObject(newPet);
    expect(data.id).toBe(99);
  });

  it("should throw and handle error for forbidden delete", async () => {
    api.baseUrl = "http://localhost";
    await expect(
      api.delete("/pet/{petId}", {
        path: { petId: 42 },
        header: { api_key: "wrong" },
      }),
    ).rejects.toMatchObject({
      message: expect.stringContaining("403"),
      status: 403,
    });
  });

  it("has typed headers", async () => {
    const result = await api.get("/user/login", { query: {}, withResponse: true });
    if (result.status !== 200) throw new Error("result.status is not 200");

    expect(result.headers.get("X-Rate-Limit")).toEqual("10");
    expect(result.headers.get("X-Expires-After")).toEqual("60");
  });

  describe("Type-safe error handling and withResponse", () => {
    beforeAll(() => {
      api.baseUrl = "http://localhost";
    });

    it("should return a discriminated union for success and error (get /pet/{petId} with withResponse)", async () => {
      // Success
      const res = await api.get("/pet/{petId}", { path: { petId: 42 }, withResponse: true });
      expect(res instanceof Response).toBe(true);
      expect(res.ok).toBe(true);
      expect(res.status).toBe(200);
      expect(res.data).toEqual({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
      // Error (simulate 404)
      const errorRes = await api.get("/pet/{petId}", { path: { petId: 9999 }, withResponse: true });
      expect(errorRes instanceof Response).toBe(true);
      expect(errorRes.ok).toBe(false);
      expect(errorRes.status).toBe(404);
      expect(errorRes.data).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should return both data and Response object with withResponse param (post /pet)", async () => {
      const newPet = { name: "TanStack", photoUrls: [] };
      const res = await api.post("/pet", { body: newPet, withResponse: true });
      expect(res instanceof Response).toBe(true);
      expect(res.ok).toBe(true);
      if (!res.ok) throw new Error("res.ok is false");

      expect(res.status).toBe(200);
      expect(res.data.name).toBe("TanStack");
      expect(res.data.id).toBe(99);
      expect(typeof res.headers.get).toBe("function");
    });

    it("should handle error status codes as error in union (get /pet/findByStatus with error)", async () => {
      const errorRes = await api.get("/pet/findByStatus", { query: { status: "pending" }, withResponse: true });
      expect(errorRes instanceof Response).toBe(true);
      expect(errorRes.ok).toBe(false);
      expect(errorRes.status).toBe(400);
      expect(errorRes.data).toEqual({ code: 400, message: expect.any(String) });
    });

    it("should support configurable status codes (simulate 201)", async () => {
      const res = await api.post("/pet", { body: { name: "Created", photoUrls: [] }, withResponse: true });
      expect(res instanceof Response).toBe(true);
      expect([200, 201]).toContain(res.status);
      expect(res.ok).toBe(true);
      if (!res.ok) throw new Error("res.ok is false");

      expect(res.data.name).toBe("Created");
    });

    it("should throw when throwOnStatusError is true with withResponse", async () => {
      let err: unknown;
      try {
        await api.get("/pet/{petId}", { path: { petId: 9999 }, withResponse: true, throwOnStatusError: true });
      } catch (e) {
        err = e;
      }

      const error = err as TypedResponseError;
      expect(error).toBeInstanceOf(TypedResponseError);
      expect(error.message).toContain("404");
      expect(error.status).toBe(404);
      expect(error.response.data).toEqual({ code: 404, message: expect.any(String) });
      expect(error.response).toBeDefined();
    });

    it("should not throw when throwOnStatusError is false with withResponse: true", async () => {
      const res = await api.get("/pet/{petId}", {
        path: { petId: 9999 },
        withResponse: true,
        throwOnStatusError: false,
      });
      expect(res instanceof Response).toBe(true);
      expect(res.ok).toBe(false);
      expect(res.status).toBe(404);
      expect(res.data).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should not throw when throwOnStatusError is false with withResponse: false", async () => {
      const res = await api.get("/pet/{petId}", {
        path: { petId: 9999 },
        withResponse: false,
        throwOnStatusError: false,
      });
      expect(res).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should throw by default when withResponse: undefined + response has an error status", async () => {
      let err: unknown;
      try {
        await api.get("/pet/{petId}", { path: { petId: 9999 } });
      } catch (e) {
        err = e as TypedResponseError;
      }
      const error = err as TypedResponseError;
      expect(error).toBeInstanceOf(TypedResponseError);
      expect(error.message).toContain("404");
      expect(error.status).toBe(404);
      expect(error.response.data).toEqual({ code: 404, message: expect.any(String) });
      expect(error.response).toBeDefined();
    });
  });

  const tanstack = new TanstackQueryApiClient(api);

  describe("TanstackQueryApiClient integration", () => {
    it("should return data for a successful mutation", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}");
      const result = await mutation.mutationOptions.mutationFn!({ path: { petId: 42 } });
      expect(result).toEqual({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
    });

    it("should throw TypedResponseError for error status", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}");
      let err: unknown;
      try {
        await mutation.mutationOptions.mutationFn!({ path: { petId: 9999 } });
      } catch (e) {
        err = e;
      }
      expect(err).toBeInstanceOf(TypedResponseError);
      expect((err as TypedResponseError).status).toBe(404);
      expect((err as TypedResponseError).response.data).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should support withResponse and return union-style result", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
      const result = await mutation.mutationOptions.mutationFn!({ path: { petId: 42 } });
      expect(result instanceof Response).toBe(true);
      expect(result.ok).toBe(true);
      expect(result.status).toBe(200);
      expect(result.data).toEqual({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
    });

    it("should support withResponse and return error union result", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
      const result = await mutation.mutationOptions.mutationFn!({ path: { petId: 9999 } });
      expect(result instanceof Response).toBe(true);
      expect(result.ok).toBe(false);
      expect(result.status).toBe(404);
      expect(result.data).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should throw when throwOnStatusError is true (tanstack)", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
      let err: unknown;
      try {
        await mutation.mutationOptions.mutationFn!({ path: { petId: 9999 }, throwOnStatusError: true });
      } catch (e) {
        err = e;
      }
      const error = err as TypedResponseError;
      expect(error).toBeInstanceOf(TypedResponseError);
      expect(error.status).toBe(404);
      const data = error.response.data ?? error.response?.data ?? (await error.response?.json?.());
      expect(data).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should support withResponse as a local param (success)", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}");
      const result = await mutation.mutationOptions.mutationFn!({ path: { petId: 42 }, withResponse: true });
      expect(result instanceof Response).toBe(true);
      expect(result.ok).toBe(true);
      expect(result.status).toBe(200);
      expect(result.data).toEqual({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
    });

    it("should support withResponse as a local param (error)", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}");
      const result = await mutation.mutationOptions.mutationFn!({ path: { petId: 9999 }, withResponse: true });
      expect(result instanceof Response).toBe(true);
      expect(result.ok).toBe(false);
      expect(result.status).toBe(404);
      expect(result.data).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should support overriding mutation withResponse with local param (success)", async () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}", { withResponse: true });
      const result = await mutation.mutationOptions.mutationFn!({ path: { petId: 42 }, withResponse: false });
      expect(result).toEqual({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
    });

    it("has working typings", () => {
      const mutation = tanstack.mutation("get", "/pet/{petId}");
      // @ts-expect-error
      mutationOptions(mutation);
      mutationOptions(mutation.mutationOptions);

      const query = tanstack.get("/pet/{petId}", { path: { petId: 42 } });
      // @ts-expect-error
      queryOptions(query);
      queryOptions(query.queryOptions);
    });
  });
});

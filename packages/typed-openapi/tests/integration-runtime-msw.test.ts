// Integration test for generated query client using MSW
// This test ensures the generated client (TS types only, no schema validation) has no runtime errors

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { api } from "./api-client.example.js";
import { createApiClient } from "../tmp/generated-client.ts";

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
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("minimalist test", () => {
  it("should fetch /pet/findByStatus and receive mocked pets", async () => {
    const fetcher = (method: string, url: string) => fetch(url, { method });
    const mini = createApiClient(fetcher, "http://localhost");
    const result = await mini.get("/pet/findByStatus", { query: {} });
    expect(result).toEqual(mockPets);
  });
});

describe("Example API Client", () => {
  beforeAll(() => {
    api.baseUrl = "http://localhost";
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

  it("should use .request to get a Response object", async () => {
    const res = await api.request("get", "/pet/findByStatus", { query: {} });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual(mockPets);
  });

  it("should use .request to post and get a Response object", async () => {
    const newPet = { name: "Tiger", photoUrls: [] };
    const res = await api.request("post", "/pet", { body: newPet });
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

  describe("Type-safe error handling and withResponse", () => {
    beforeAll(() => {
      api.baseUrl = "http://localhost";
    });

    it("should return a discriminated union for success and error (get /pet/{petId} with withResponse)", async () => {
      // Success
      const res = await api.get("/pet/{petId}", { path: { petId: 42 }, withResponse: true });
      expect(res.ok).toBe(true);
      expect(res.status).toBe(200);
      expect(res.data).toEqual({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
      // Error (simulate 404)
      const errorRes = await api.get("/pet/{petId}", { path: { petId: 9999 }, withResponse: true });
      expect(errorRes.ok).toBe(false);
      expect(errorRes.status).toBe(404);
      expect(errorRes.data).toEqual({ code: 404, message: expect.any(String) });
    });

    it("should return both data and Response object with withResponse param (post /pet)", async () => {
      const newPet = { name: "TanStack", photoUrls: [] };
      const res = await api.post("/pet", { body: newPet, withResponse: true });
      expect(res.ok).toBe(true);
      if (!res.ok) throw new Error("res.ok is false");

      expect(res.status).toBe(200);
      expect(res.data.name).toBe("TanStack");
      expect(res.data.id).toBe(99);
      expect(typeof res.headers.get).toBe("function");
    });

    it("should handle error status codes as error in union (get /pet/findByStatus with error)", async () => {
      // Simulate error (400) for status=pending
      const errorRes = await api.get("/pet/findByStatus", { query: { status: "pending" }, withResponse: true });
      expect(errorRes.ok).toBe(false);
      expect(errorRes.status).toBe(400);
      expect(errorRes.data).toEqual({ code: 400, message: expect.any(String) });
    });

    it("should support configurable status codes (simulate 201)", async () => {
      // Simulate a 200 response for POST /pet (MSW handler returns 200)
      const res = await api.post("/pet", { body: { name: "Created", photoUrls: [] }, withResponse: true });
      expect([200, 201]).toContain(res.status);
      expect(res.ok).toBe(true);
      if (!res.ok) throw new Error("res.ok is false");

      expect(res.data.name).toBe("Created");
    });
  });
});

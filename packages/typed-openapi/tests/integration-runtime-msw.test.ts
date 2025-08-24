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
  // GET with query
  http.get("http://localhost/pet/findByStatus", () => {
    return HttpResponse.json(mockPets);
  }),
  // GET with path
  http.get("http://localhost/pet/42", () => {
    return HttpResponse.json({ id: 42, name: "Spot", photoUrls: [], status: "sold" });
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

describe("Generated Query Client (runtime)", () => {
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
});

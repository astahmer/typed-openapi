import { describe, test } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.js";
import { generateFile } from "../src/generator.js";
import { prettify } from "../src/format.js";

describe("multiple success responses", () => {
  test("should handle 200 vs 201 responses with different schemas", async ({ expect }) => {
    const openApiDoc: OpenAPIObject = {
      openapi: "3.0.3",
      info: {
        title: "Multi Success API",
        version: "1.0.0"
      },
      paths: {
        "/users": {
          post: {
            operationId: "createOrUpdateUser",
            requestBody: {
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      email: { type: "string" }
                    },
                    required: ["name", "email"]
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "User updated",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        name: { type: "string" },
                        email: { type: "string" },
                        updated: { type: "boolean", const: true },
                        updatedAt: { type: "string", format: "date-time" }
                      },
                      required: ["id", "name", "email", "updated", "updatedAt"]
                    }
                  }
                }
              },
              "201": {
                description: "User created",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        name: { type: "string" },
                        email: { type: "string" },
                        created: { type: "boolean", const: true },
                        createdAt: { type: "string", format: "date-time" }
                      },
                      required: ["id", "name", "email", "created", "createdAt"]
                    }
                  }
                }
              },
              "400": {
                description: "Validation error",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: { type: "string" },
                        errors: { 
                          type: "array",
                          items: { type: "string" }
                        }
                      },
                      required: ["message", "errors"]
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    const mapped = mapOpenApiEndpoints(openApiDoc);
    const generated = await prettify(generateFile(mapped));

    // Check that the endpoint has proper response types
    expect(generated).toContain("post_CreateOrUpdateUser");
    
    // Check that different success responses have different schemas
    expect(generated).toContain("updated: boolean");
    expect(generated).toContain("created: boolean");
    expect(generated).toContain("Array<string>");
    
    // Verify the SafeApiResponse type is present for error handling
    expect(generated).toContain("SafeApiResponse");

    expect(generated).toMatchInlineSnapshot(`
      "export namespace Schemas {
        // <Schemas>
        // </Schemas>
      }

      export namespace Endpoints {
        // <Endpoints>

        export type post_CreateOrUpdateUser = {
          method: "POST";
          path: "/users";
          requestFormat: "json";
          parameters: {
            body: { name: string; email: string };
          };
          response: { id: string; name: string; email: string; updated: boolean; updatedAt: string };
          responses: {
            200: { id: string; name: string; email: string; updated: boolean; updatedAt: string };
            201: { id: string; name: string; email: string; created: boolean; createdAt: string };
            400: { message: string; errors: Array<string> };
          };
        };

        // </Endpoints>
      }

      // <EndpointByMethod>
      export type EndpointByMethod = {
        post: {
          "/users": Endpoints.post_CreateOrUpdateUser;
        };
      };

      // </EndpointByMethod>

      // <EndpointByMethod.Shorthands>
      export type PostEndpoints = EndpointByMethod["post"];
      // </EndpointByMethod.Shorthands>

      // <ApiClientTypes>
      export type EndpointParameters = {
        body?: unknown;
        query?: Record<string, unknown>;
        header?: Record<string, unknown>;
        path?: Record<string, unknown>;
      };

      export type MutationMethod = "post" | "put" | "patch" | "delete";
      export type Method = "get" | "head" | "options" | MutationMethod;

      type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

      export type DefaultEndpoint = {
        parameters?: EndpointParameters | undefined;
        response: unknown;
        responses?: Record<string, unknown>;
        responseHeaders?: Record<string, unknown>;
      };

      export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
        operationId: string;
        method: Method;
        path: string;
        requestFormat: RequestFormat;
        parameters?: TConfig["parameters"];
        meta: {
          alias: string;
          hasParameters: boolean;
          areParametersRequired: boolean;
        };
        response: TConfig["response"];
        responses?: TConfig["responses"];
        responseHeaders?: TConfig["responseHeaders"];
      };

      export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

      // Status code type for success responses
      export type StatusCode =
        | 200
        | 201
        | 202
        | 203
        | 204
        | 205
        | 206
        | 207
        | 208
        | 226
        | 300
        | 301
        | 302
        | 303
        | 304
        | 305
        | 306
        | 307
        | 308;

      // Error handling types
      export type ApiResponse<
        TSuccess,
        TAllResponses extends Record<string | number, unknown> = {},
      > = keyof TAllResponses extends never
        ? {
            ok: true;
            status: number;
            data: TSuccess;
          }
        : {
            [K in keyof TAllResponses]: K extends string
              ? K extends \`\${infer TStatusCode extends number}\`
                ? TStatusCode extends StatusCode
                  ? {
                      ok: true;
                      status: TStatusCode;
                      data: TAllResponses[K];
                    }
                  : {
                      ok: false;
                      status: TStatusCode;
                      error: TAllResponses[K];
                    }
                : never
              : K extends number
                ? K extends StatusCode
                  ? {
                      ok: true;
                      status: K;
                      data: TAllResponses[K];
                    }
                  : {
                      ok: false;
                      status: K;
                      error: TAllResponses[K];
                    }
                : never;
          }[keyof TAllResponses];

      export type SafeApiResponse<TEndpoint> = TEndpoint extends { response: infer TSuccess; responses: infer TResponses }
        ? TResponses extends Record<string, unknown>
          ? ApiResponse<TSuccess, TResponses>
          : { ok: true; status: number; data: TSuccess }
        : TEndpoint extends { response: infer TSuccess }
          ? { ok: true; status: number; data: TSuccess }
          : never;

      type RequiredKeys<T> = {
        [P in keyof T]-?: undefined extends T[P] ? never : P;
      }[keyof T];

      type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

      // </ApiClientTypes>

      // <ApiClient>
      export class ApiClient {
        baseUrl: string = "";

        constructor(public fetcher: Fetcher) {}

        setBaseUrl(baseUrl: string) {
          this.baseUrl = baseUrl;
          return this;
        }

        parseResponse = async <T,>(response: Response): Promise<T> => {
          const contentType = response.headers.get("content-type");
          if (contentType?.includes("application/json")) {
            return response.json();
          }
          return response.text() as unknown as T;
        };

        // <ApiClient.post>
        post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"] & { withResponse?: false }>
        ): Promise<TEndpoint["response"]>;

        post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"] & { withResponse: true }>
        ): Promise<SafeApiResponse<TEndpoint>>;

        post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<any>
        ): Promise<any> {
          const requestParams = params[0];
          const withResponse = requestParams?.withResponse;

          // Remove withResponse from params before passing to fetcher
          const { withResponse: _, ...fetchParams } = requestParams || {};

          if (withResponse) {
            return this.fetcher("post", this.baseUrl + path, Object.keys(fetchParams).length ? fetchParams : undefined).then(
              async (response) => {
                const data = await this.parseResponse(response);
                if (response.ok) {
                  return { ok: true, status: response.status, data };
                } else {
                  return { ok: false, status: response.status, error: data };
                }
              },
            );
          } else {
            return this.fetcher("post", this.baseUrl + path, requestParams).then((response) =>
              this.parseResponse(response),
            ) as Promise<TEndpoint["response"]>;
          }
        }
        // </ApiClient.post>

        // <ApiClient.request>
        /**
         * Generic request method with full type-safety for any endpoint
         */
        request<
          TMethod extends keyof EndpointByMethod,
          TPath extends keyof EndpointByMethod[TMethod],
          TEndpoint extends EndpointByMethod[TMethod][TPath],
        >(
          method: TMethod,
          path: TPath,
          ...params: MaybeOptionalArg<TEndpoint extends { parameters: infer Params } ? Params : never>
        ): Promise<
          Omit<Response, "json"> & {
            /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json) */
            json: () => Promise<TEndpoint extends { response: infer Res } ? Res : never>;
          }
        > {
          return this.fetcher(method, this.baseUrl + (path as string), params[0] as EndpointParameters);
        }
        // </ApiClient.request>
      }

      export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
        return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
      }

      /**
       Example usage:
       const api = createApiClient((method, url, params) =>
         fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
       );
       api.get("/users").then((users) => console.log(users));
       api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
       api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

       // With error handling
       const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
       if (result.ok) {
         console.log(result.data);
       } else {
         console.error(\`Error \${result.status}:\`, result.error);
       }
      */

      // </ApiClient
      "
    `);
  });
});

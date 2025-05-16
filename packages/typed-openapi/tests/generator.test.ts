import { describe, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";
import { prettify } from "../src/format.ts";

describe("generator", () => {
  test("petstore", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    expect(await prettify(generateFile(mapOpenApiEndpoints(openApiDoc)))).toMatchInlineSnapshot(`
      "export namespace Schemas {
        // <Schemas>
        export type Order = Partial<{
          id: number;
          petId: number;
          quantity: number;
          shipDate: string;
          status: "placed" | "approved" | "delivered";
          complete: boolean;
        }>;
        export type Address = Partial<{ street: string; city: string; state: string; zip: string }>;
        export type Customer = Partial<{ id: number; username: string; address: Array<Address> }>;
        export type Category = Partial<{ id: number; name: string }>;
        export type User = Partial<{
          id: number;
          username: string;
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          phone: string;
          userStatus: number;
        }>;
        export type Tag = Partial<{ id: number; name: string }>;
        export type Pet = {
          id?: number | undefined;
          name: string;
          category?: Category | undefined;
          photoUrls: Array<string>;
          tags?: Array<Tag> | undefined;
          status?: ("available" | "pending" | "sold") | undefined;
        };
        export type ApiResponse = Partial<{ code: number; type: string; message: string }>;

        // </Schemas>
      }

      export namespace Endpoints {
        // <Endpoints>

        export type put_UpdatePet = {
          method: "PUT";
          path: "/pet";
          requestFormat: "json";
          parameters: {
            body: Schemas.Pet;
          };
          response: Schemas.Pet;
        };
        export type post_AddPet = {
          method: "POST";
          path: "/pet";
          requestFormat: "json";
          parameters: {
            body: Schemas.Pet;
          };
          response: Schemas.Pet;
        };
        export type get_FindPetsByStatus = {
          method: "GET";
          path: "/pet/findByStatus";
          requestFormat: "json";
          parameters: {
            query: Partial<{ status: "available" | "pending" | "sold" }>;
          };
          response: Array<Schemas.Pet>;
        };
        export type get_FindPetsByTags = {
          method: "GET";
          path: "/pet/findByTags";
          requestFormat: "json";
          parameters: {
            query: Partial<{ tags: Array<string> }>;
          };
          response: Array<Schemas.Pet>;
        };
        export type get_GetPetById = {
          method: "GET";
          path: "/pet/{petId}";
          requestFormat: "json";
          parameters: {
            path: { petId: number };
          };
          response: Schemas.Pet;
        };
        export type post_UpdatePetWithForm = {
          method: "POST";
          path: "/pet/{petId}";
          requestFormat: "json";
          parameters: {
            query: Partial<{ name: string; status: string }>;
            path: { petId: number };
          };
          response: unknown;
        };
        export type delete_DeletePet = {
          method: "DELETE";
          path: "/pet/{petId}";
          requestFormat: "json";
          parameters: {
            path: { petId: number };
            header: Partial<{ api_key: string }>;
          };
          response: unknown;
        };
        export type post_UploadFile = {
          method: "POST";
          path: "/pet/{petId}/uploadImage";
          requestFormat: "binary";
          parameters: {
            query: Partial<{ additionalMetadata: string }>;
            path: { petId: number };

            body: string;
          };
          response: Schemas.ApiResponse;
        };
        export type get_GetInventory = {
          method: "GET";
          path: "/store/inventory";
          requestFormat: "json";
          parameters: never;
          response: Record<string, number>;
        };
        export type post_PlaceOrder = {
          method: "POST";
          path: "/store/order";
          requestFormat: "json";
          parameters: {
            body: Schemas.Order;
          };
          response: Schemas.Order;
        };
        export type get_GetOrderById = {
          method: "GET";
          path: "/store/order/{orderId}";
          requestFormat: "json";
          parameters: {
            path: { orderId: number };
          };
          response: Schemas.Order;
        };
        export type delete_DeleteOrder = {
          method: "DELETE";
          path: "/store/order/{orderId}";
          requestFormat: "json";
          parameters: {
            path: { orderId: number };
          };
          response: unknown;
        };
        export type post_CreateUser = {
          method: "POST";
          path: "/user";
          requestFormat: "json";
          parameters: {
            body: Schemas.User;
          };
          response: Schemas.User;
        };
        export type post_CreateUsersWithListInput = {
          method: "POST";
          path: "/user/createWithList";
          requestFormat: "json";
          parameters: {
            body: Array<Schemas.User>;
          };
          response: Schemas.User;
        };
        export type get_LoginUser = {
          method: "GET";
          path: "/user/login";
          requestFormat: "json";
          parameters: {
            query: Partial<{ username: string; password: string }>;
          };
          response: string;
        };
        export type get_LogoutUser = {
          method: "GET";
          path: "/user/logout";
          requestFormat: "json";
          parameters: never;
          response: unknown;
        };
        export type get_GetUserByName = {
          method: "GET";
          path: "/user/{username}";
          requestFormat: "json";
          parameters: {
            path: { username: string };
          };
          response: Schemas.User;
        };
        export type put_UpdateUser = {
          method: "PUT";
          path: "/user/{username}";
          requestFormat: "json";
          parameters: {
            path: { username: string };

            body: Schemas.User;
          };
          response: unknown;
        };
        export type delete_DeleteUser = {
          method: "DELETE";
          path: "/user/{username}";
          requestFormat: "json";
          parameters: {
            path: { username: string };
          };
          response: unknown;
        };

        // </Endpoints>
      }

      // <EndpointByMethod>
      export type EndpointByMethod = {
        put: {
          "/pet": Endpoints.put_UpdatePet;
          "/user/{username}": Endpoints.put_UpdateUser;
        };
        post: {
          "/pet": Endpoints.post_AddPet;
          "/pet/{petId}": Endpoints.post_UpdatePetWithForm;
          "/pet/{petId}/uploadImage": Endpoints.post_UploadFile;
          "/store/order": Endpoints.post_PlaceOrder;
          "/user": Endpoints.post_CreateUser;
          "/user/createWithList": Endpoints.post_CreateUsersWithListInput;
        };
        get: {
          "/pet/findByStatus": Endpoints.get_FindPetsByStatus;
          "/pet/findByTags": Endpoints.get_FindPetsByTags;
          "/pet/{petId}": Endpoints.get_GetPetById;
          "/store/inventory": Endpoints.get_GetInventory;
          "/store/order/{orderId}": Endpoints.get_GetOrderById;
          "/user/login": Endpoints.get_LoginUser;
          "/user/logout": Endpoints.get_LogoutUser;
          "/user/{username}": Endpoints.get_GetUserByName;
        };
        delete: {
          "/pet/{petId}": Endpoints.delete_DeletePet;
          "/store/order/{orderId}": Endpoints.delete_DeleteOrder;
          "/user/{username}": Endpoints.delete_DeleteUser;
        };
      };

      // </EndpointByMethod>

      // <EndpointByMethod.Shorthands>
      export type PutEndpoints = EndpointByMethod["put"];
      export type PostEndpoints = EndpointByMethod["post"];
      export type GetEndpoints = EndpointByMethod["get"];
      export type DeleteEndpoints = EndpointByMethod["delete"];
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
      };

      export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

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

        // <ApiClient.put>
        put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ): Promise<TEndpoint["response"]> {
          return this.fetcher("put", this.baseUrl + path, params[0]).then((response) =>
            this.parseResponse(response),
          ) as Promise<TEndpoint["response"]>;
        }
        // </ApiClient.put>

        // <ApiClient.post>
        post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ): Promise<TEndpoint["response"]> {
          return this.fetcher("post", this.baseUrl + path, params[0]).then((response) =>
            this.parseResponse(response),
          ) as Promise<TEndpoint["response"]>;
        }
        // </ApiClient.post>

        // <ApiClient.get>
        get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ): Promise<TEndpoint["response"]> {
          return this.fetcher("get", this.baseUrl + path, params[0]).then((response) =>
            this.parseResponse(response),
          ) as Promise<TEndpoint["response"]>;
        }
        // </ApiClient.get>

        // <ApiClient.delete>
        delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ): Promise<TEndpoint["response"]> {
          return this.fetcher("delete", this.baseUrl + path, params[0]).then((response) =>
            this.parseResponse(response),
          ) as Promise<TEndpoint["response"]>;
        }
        // </ApiClient.delete>

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
      */

      // </ApiClient
      "
    `);
  });

  test("petstore schema only", async ({ expect }) => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    expect(await prettify(generateFile({...mapOpenApiEndpoints(openApiDoc), schemasOnly: true}))).toMatchInlineSnapshot(`
      "export namespace Schemas {
        // <Schemas>
        export type Order = Partial<{
          id: number;
          petId: number;
          quantity: number;
          shipDate: string;
          status: "placed" | "approved" | "delivered";
          complete: boolean;
        }>;
        export type Address = Partial<{ street: string; city: string; state: string; zip: string }>;
        export type Customer = Partial<{ id: number; username: string; address: Array<Address> }>;
        export type Category = Partial<{ id: number; name: string }>;
        export type User = Partial<{
          id: number;
          username: string;
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          phone: string;
          userStatus: number;
        }>;
        export type Tag = Partial<{ id: number; name: string }>;
        export type Pet = {
          id?: number | undefined;
          name: string;
          category?: Category | undefined;
          photoUrls: Array<string>;
          tags?: Array<Tag> | undefined;
          status?: ("available" | "pending" | "sold") | undefined;
        };
        export type ApiResponse = Partial<{ code: number; type: string; message: string }>;

        // </Schemas>
      }
      "
    `);
  });

  test("nullable string", async ({ expect }) => {
    expect(await prettify(generateFile(mapOpenApiEndpoints({
      "openapi": "3.0.0",
      "info": {
        "version": "1.0.0",
        "title": "Demo API"
      },
      "components": {
        "schemas": {
          "SerializedUserSession": {
            "type": "object",
            "properties": {
              "accessToken": {
                "type": "string"
              },
              "accessTokenExpirationDate": {
                "type": "number"
              },
              "me": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "firstName": {
                    "type": "string",
                    // @ts-expect-error - OpenAPI 3.1 does not have nullable, but OpenAPI 3.0 does
                    "nullable": true
                  },
                  "lastName": {
                    "type": "string",
                    // @ts-expect-error - OpenAPI 3.1 does not have nullable, but OpenAPI 3.0 does
                    "nullable": true
                  },
                  "profilePictureURL": {
                    "type": "string",
                    // @ts-expect-error - OpenAPI 3.1 does not have nullable, but OpenAPI 3.0 does
                    "nullable": true
                  },
                  "email": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "email"
                ]
              },
              "refreshToken": {
                "type": "string"
              },
              "refreshTokenExpirationDate": {
                "type": "number"
              }
            },
            "required": [
              "accessToken",
              "accessTokenExpirationDate",
              "me",
              "refreshToken",
              "refreshTokenExpirationDate"
            ]
          },
        },
      },
      "paths": {
        // "/authentication/refresh": {
        //   "post": {
        //     "summary": "Refresh authentication tokens",
        //     "tags": [
        //       "Authentication"
        //     ],
        //     "requestBody": {
        //       "content": {
        //         "application/json": {
        //           "schema": {
        //             "type": "object",
        //             "properties": {
        //               "accessToken": {
        //                 "type": "string",
        //                 "pattern": "^\\w+ [A-Za-z0-9-_=]+\\.[A-Za-z0-9-_=]+\\.?[A-Za-z0-9-_.+/=]*$"
        //               },
        //               "refreshToken": {
        //                 "type": "string",
        //                 "format": "uuid"
        //               }
        //             },
        //             "required": [
        //               "accessToken",
        //               "refreshToken"
        //             ]
        //           }
        //         }
        //       }
        //     },
        //     "responses": {
        //       "200": {
        //         "description": "Refresh the access and refresh tokens",
        //         "content": {
        //           "application/json": {
        //             "schema": {
        //               "$ref": "#/components/schemas/SerializedUserSession"
        //             }
        //           }
        //         }
        //       },
        //       "401": {
        //         "description": "Unauthorized",
        //         "content": {
        //           "application/json": {
        //             "schema": {
        //               "type": "string"
        //             }
        //           }
        //         }
        //       },
        //       "500": {
        //         "description": "Internal server error",
        //         "content": {
        //           "application/json": {
        //             "schema": {
        //               "type": "string"
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // },
        "/authorization/organizations/:organizationId/members/search": {
          "get": {
            "summary": "Search for members in an organization",
            "tags": [
              "Authorization",
              "Members"
            ],
            "parameters": [
              {
                "schema": {
                  "type": "string",
                  "format": "uuid"
                },
                "required": true,
                "name": "organizationId",
                "in": "path"
              },
              {
                "schema": {
                  "type": "string"
                },
                "required": false,
                "name": "searchQuery",
                "in": "query"
              },
              {
                "schema": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "type": "string",
                        "enum": [
                          "super-admin"
                        ]
                      },
                      {
                        "type": "string",
                        "enum": [
                          "buyer"
                        ]
                      },
                      {
                        "type": "string",
                        "enum": [
                          "admin"
                        ]
                      },
                      {
                        "type": "string",
                        "enum": [
                          "coordinator"
                        ]
                      },
                      {
                        "type": "string",
                        "enum": [
                          "requestor"
                        ]
                      }
                    ]
                  }
                },
                "required": false,
                "name": "includeRoles",
                "in": "query"
              }
            ],
            "responses": {
              "200": {
                "description": "Retrieve a list of members for a specific organization",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "members": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string"
                              },
                              "firstName": {
                                "type": "string",
                                "nullable": true
                              },
                              "lastName": {
                                "type": "string",
                                "nullable": true
                              },
                              "email": {
                                "type": "string"
                              },
                              "profilePictureURL": {
                                "type": "string",
                                "nullable": true
                              }
                            },
                            "required": [
                              "id",
                              "email"
                            ]
                          }
                        }
                      },
                      "required": [
                        "members"
                      ]
                    }
                  }
                }
              }
            }
          }
        },
      }
    })))).toMatchInlineSnapshot(`
      "export namespace Schemas {
        // <Schemas>
        export type SerializedUserSession = {
          accessToken: string;
          accessTokenExpirationDate: number;
          me: {
            id: string;
            firstName?: (string | null) | undefined;
            lastName?: (string | null) | undefined;
            profilePictureURL?: (string | null) | undefined;
            email: string;
          };
          refreshToken: string;
          refreshTokenExpirationDate: number;
        };

        // </Schemas>
      }

      export namespace Endpoints {
        // <Endpoints>

        export type get__authorization_organizations__organizationId_members_search = {
          method: "GET";
          path: "/authorization/organizations/:organizationId/members/search";
          requestFormat: "json";
          parameters: {
            query: Partial<{
              searchQuery: string;
              includeRoles: Array<"super-admin" | "buyer" | "admin" | "coordinator" | "requestor">;
            }>;
            path: { organizationId: string };
          };
          response: {
            members: Array<{
              id: string;
              firstName?: (string | null) | undefined;
              lastName?: (string | null) | undefined;
              email: string;
              profilePictureURL?: (string | null) | undefined;
            }>;
          };
        };

        // </Endpoints>
      }

      // <EndpointByMethod>
      export type EndpointByMethod = {
        get: {
          "/authorization/organizations/:organizationId/members/search": Endpoints.get__authorization_organizations__organizationId_members_search;
        };
      };

      // </EndpointByMethod>

      // <EndpointByMethod.Shorthands>
      export type GetEndpoints = EndpointByMethod["get"];
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
      };

      export type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Response>;

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

        // <ApiClient.get>
        get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
          path: Path,
          ...params: MaybeOptionalArg<TEndpoint["parameters"]>
        ): Promise<TEndpoint["response"]> {
          return this.fetcher("get", this.baseUrl + path, params[0]).then((response) =>
            this.parseResponse(response),
          ) as Promise<TEndpoint["response"]>;
        }
        // </ApiClient.get>

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
      */

      // </ApiClient
      "
    `);
  });
});

import { groupBy } from "pastable/server";
import { Box } from "./box";
import { prettify } from "./format";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints";
import { AnyBox, BoxRef } from "./types";

export const generateTsRouter = ({ refs, endpointList }: ReturnType<typeof mapOpenApiEndpoints>) => {
  const schemas = refs.schemas;

  let file = "// Schemas\n";
  schemas.forEach((schema, ref) => {
    const infos = refs.infos.get(ref);
    if (!infos?.name) return;
    if (infos.kind !== "schemas") return;

    file += `export type ${infos.normalized} = ${schema.value}\n`;
  });

  file += "\n// Endpoints\n";
  endpointList.map((endpoint) => {
    const parameters = endpoint.parameters ?? {};
    file += `export type ${endpoint.meta.alias} = {
      method: "${endpoint.method.toUpperCase()}",
      path: "${endpoint.path}",
      ${
        endpoint.meta.hasParameters
          ? `parameters: {
            ${parameters.query ? `query:  ${parameterObjectToString(parameters.query)},` : ""}
        ${parameters.path ? `path:  ${parameterObjectToString(parameters.path)},` : ""}
        ${parameters.header ? `header:  ${parameterObjectToString(parameters.header)},` : ""}
          }`
          : "parameters: never,"
      }
      response: ${endpoint.response.value},
    }\n`;
  });

  file += generateApiClient(endpointList);

  return prettify(file);
};

const parameterObjectToString = (parameters: Box<BoxRef> | Record<string, AnyBox>) => {
  if (parameters instanceof Box) return parameters.value;

  let str = "{";
  for (const [key, box] of Object.entries(parameters)) {
    str += `${key}: ${box.value},\n`;
  }
  return str + "}";
};

const generateApiClient = (endpointList: ReturnType<typeof mapOpenApiEndpoints>["endpointList"]) => {
  const byMethods = groupBy(endpointList, "method");

  let content = `\nexport type EndpointByMethod= {
    ${Object.entries(byMethods)
      .map(([method, list]) => {
        return `${method}: {
          ${list.map((endpoint) => `"${endpoint.path}": ${endpoint.meta.alias}`)}
        }`;
      })
      .join("\n")}
    }`;

  content += `
${byMethods.get?.length ? `type GetEndpoints = EndpointByMethod["get"];` : ""}
${byMethods.post?.length ? `type PostEndpoints = EndpointByMethod["post"];` : ""}
${byMethods.put?.length ? `type PutEndpoints = EndpointByMethod["put"];` : ""}
${byMethods.patch?.length ? `type PatchEndpoints = EndpointByMethod["patch"];` : ""}
${byMethods.delete?.length ? `type DeleteEndpoints = EndpointByMethod["delete"];` : ""}

export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (method: Method, url: string, parameters?: EndpointParameters | undefined) => Promise<Endpoint["response"]>;

export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  ${
    byMethods.get?.length
      ? `get<Path extends keyof GetEndpoints>(path: Path, params?: GetEndpoints[Path]["parameters"]) {
    return this.fetcher("get", this.baseUrl + path, params);
  }`
      : ""
  }

  ${
    byMethods.post?.length
      ? `post<Path extends keyof PostEndpoints>(path: Path, params?: PostEndpoints[Path]["parameters"]) {
    return this.fetcher("post", this.baseUrl + path, params);
  }`
      : ""
  }

  ${
    byMethods.put?.length
      ? `put<Path extends keyof PutEndpoints>(path: Path, params?: PutEndpoints[Path]["parameters"]) {
    return this.fetcher("put", this.baseUrl + path, params);
  }`
      : ""
  }

  ${
    byMethods.patch?.length
      ? `patch<Path extends keyof PatchEndpoints>(path: Path, params?: PatchEndpoints[Path]["parameters"]) {
    return this.fetcher("patch", this.baseUrl + path, params);
  }`
      : ""
  }

  ${
    byMethods.delete?.length
      ? `delete<Path extends keyof DeleteEndpoints>(path: Path, params?: DeleteEndpoints[Path]["parameters"]) {
    return this.fetcher("delete", this.baseUrl + path, params);
  }`
      : ""
  }
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
}
`;

  return content;
};

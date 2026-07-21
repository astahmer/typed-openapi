import type { ExampleObject, MediaTypeObject, OpenAPIObject, ResponseObject } from "openapi3-ts/oas31";
import type { Endpoint } from "./map-openapi-endpoints.ts";
import type { SchemaNode } from "./schema-ir/types.ts";
import { sanitizeName } from "./sanitize-name.ts";

export type MswGeneratorOptions = {
  endpointList: Endpoint[];
  doc: OpenAPIObject;
  /** When true, emit `@faker-js/faker` based factories (peer optional). */
  faker?: boolean;
  /** Base path prefix for handlers (e.g. full URL or "*"). Default "*". */
  baseUrl?: string;
};

const openApiPathToMsw = (path: string): string => path.replace(/\{([^}]+)\}/g, ":$1");

const isSuccessStatus = (status: string) => {
  if (status === "default") return false;
  const code = Number(status);
  return !Number.isNaN(code) && code >= 200 && code < 300;
};

const pickSuccessStatus = (responses: Record<string, SchemaNode> | undefined): string | undefined => {
  if (!responses) return undefined;
  const keys = Object.keys(responses);
  const exact = keys.find((k) => k === "200") ?? keys.find(isSuccessStatus);
  return exact;
};

const unwrapExample = (media: MediaTypeObject | undefined): unknown => {
  if (!media) return undefined;
  if (media.example !== undefined) return media.example;
  const examples = media.examples;
  if (examples) {
    const first = Object.values(examples)[0] as ExampleObject | undefined;
    if (first && "value" in first) return first.value;
  }
  return undefined;
};

const exampleFromOperation = (endpoint: Endpoint, status: string): unknown => {
  const responseOrRef = endpoint.operation.responses?.[status];
  if (!responseOrRef || typeof responseOrRef !== "object") return undefined;
  // Prefer already-resolved content on operation (SwaggerParser usually inlines)
  const response = responseOrRef as ResponseObject;
  const content = response.content;
  if (!content) return undefined;
  for (const mediaType of Object.keys(content)) {
    if (mediaType.includes("json") || mediaType === "*/*") {
      const ex = unwrapExample(content[mediaType]);
      if (ex !== undefined) return ex;
    }
  }
  return undefined;
};

/** Deterministic stub value from Schema IR (examples / defaults / type heuristics). */
export const stubFromSchema = (node: SchemaNode, faker = false): unknown => {
  if (node.meta.examples?.length) return node.meta.examples[0];
  if (node.meta.default !== undefined) return node.meta.default;

  switch (node.kind) {
    case "string": {
      const fmt = node.constraints.format;
      if (faker) {
        if (fmt === "email") return "__FAKER__.internet.email()";
        if (fmt === "uuid") return "__FAKER__.string.uuid()";
        if (fmt === "uri" || fmt === "url") return "__FAKER__.internet.url()";
        if (fmt === "date-time") return "__FAKER__.date.recent().toISOString()";
        if (fmt === "date") return "__FAKER__.date.recent().toISOString().slice(0, 10)";
        return "__FAKER__.lorem.word()";
      }
      if (fmt === "email") return "user@example.com";
      if (fmt === "uuid") return "00000000-0000-4000-8000-000000000000";
      if (fmt === "uri" || fmt === "url") return "https://example.com";
      if (fmt === "date-time") return "2020-01-01T00:00:00.000Z";
      if (fmt === "date") return "2020-01-01";
      return "string";
    }
    case "number":
      return faker ? (node.integer ? "__FAKER__.number.int()" : "__FAKER__.number.float()") : 0;
    case "boolean":
      return faker ? "__FAKER__.datatype.boolean()" : true;
    case "null":
      return null;
    case "literal":
      return node.value;
    case "enum":
      return node.values[0] ?? null;
    case "array":
      return [stubFromSchema(node.items, faker)];
    case "tuple":
      return node.items.map((item) => stubFromSchema(item, faker));
    case "object": {
      const out: Record<string, unknown> = {};
      const keys = node.partial
        ? Object.keys(node.properties)
        : node.required.length
          ? node.required
          : Object.keys(node.properties);
      for (const key of keys.slice(0, 12)) {
        const prop = node.properties[key];
        if (prop) out[key] = stubFromSchema(prop, faker);
      }
      return out;
    }
    case "union":
      return node.members[0] ? stubFromSchema(node.members[0], faker) : null;
    case "intersection": {
      const merged: Record<string, unknown> = {};
      for (const member of node.members) {
        const v = stubFromSchema(member, faker);
        if (v && typeof v === "object" && !Array.isArray(v)) Object.assign(merged, v);
      }
      return Object.keys(merged).length ? merged : null;
    }
    case "ref":
      return { __ref: node.name };
    case "record":
      return {};
    case "binary":
      return null;
    case "stream":
      return null;
    case "unknown":
    case "any":
      return null;
    case "never":
      return null;
    case "not":
      return null;
    default: {
      const _exhaustive: never = node;
      return _exhaustive;
    }
  }
};

const jsLiteral = (value: unknown, faker: boolean): string => {
  if (typeof value === "string" && value.startsWith("__FAKER__.")) {
    return "faker." + value.slice("__FAKER__.".length);
  }
  if (value && typeof value === "object" && !Array.isArray(value) && "__ref" in (value as object)) {
    const name = (value as { __ref: string }).__ref;
    return `{ /* $ref: ${name} */ }`;
  }
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const entries = Object.entries(value as Record<string, unknown>);
    if (!entries.length) return "{}";
    return `{ ${entries.map(([k, v]) => `${JSON.stringify(k)}: ${jsLiteral(v, faker)}`).join(", ")} }`;
  }
  if (Array.isArray(value)) {
    return `[${value.map((v) => jsLiteral(v, faker)).join(", ")}]`;
  }
  return JSON.stringify(value);
};

export const generateMswFile = (options: MswGeneratorOptions): string => {
  const { endpointList, faker = false, baseUrl = "*" } = options;
  const lines: string[] = [];

  lines.push(`/**`);
  lines.push(` * MSW handlers generated by typed-openapi`);
  lines.push(
    ` * ${faker ? "Uses @faker-js/faker for mock factories." : "Deterministic stubs from schema examples/defaults."}`,
  );
  lines.push(` */`);
  lines.push(`import { http, HttpResponse } from "msw";`);
  if (faker) {
    lines.push(`import { faker } from "@faker-js/faker";`);
  }
  lines.push(``);

  // Per-endpoint mock factories
  const factoryNames: string[] = [];
  for (const endpoint of endpointList) {
    const status = pickSuccessStatus(endpoint.responses);
    const alias = sanitizeName(endpoint.meta.alias, "endpoint");
    const factoryName = `get${alias.charAt(0).toUpperCase()}${alias.slice(1)}Mock`;
    factoryNames.push(factoryName);

    let bodyExpr: string;
    if (status) {
      const fromOp = exampleFromOperation(endpoint, status);
      if (fromOp !== undefined) {
        bodyExpr = jsLiteral(fromOp, false);
      } else {
        const schema = endpoint.responses![status]!;
        bodyExpr = jsLiteral(stubFromSchema(schema, faker), faker);
      }
    } else {
      bodyExpr = "null";
    }

    lines.push(`export const ${factoryName} = () => (${bodyExpr});`);
  }

  lines.push(``);
  lines.push(`const baseUrl = ${JSON.stringify(baseUrl)};`);
  lines.push(``);
  lines.push(`export const handlers = [`);

  for (const endpoint of endpointList) {
    const mswPath = openApiPathToMsw(endpoint.path);
    const method = endpoint.method.toLowerCase();
    const alias = sanitizeName(endpoint.meta.alias, "endpoint");
    const factoryName = `get${alias.charAt(0).toUpperCase()}${alias.slice(1)}Mock`;
    const status = pickSuccessStatus(endpoint.responses) ?? "200";
    const statusNum = Number(status) || 200;

    if (endpoint.responseFormat === "sse") {
      lines.push(`  http.${method}(\`\${baseUrl}${mswPath}\`, () => {`);
      lines.push(`    return new HttpResponse("data: {}\\n\\n", {`);
      lines.push(`      status: ${statusNum},`);
      lines.push(`      headers: { "Content-Type": "text/event-stream" },`);
      lines.push(`    });`);
      lines.push(`  }),`);
      continue;
    }

    lines.push(`  http.${method}(\`\${baseUrl}${mswPath}\`, () => {`);
    lines.push(`    return HttpResponse.json(${factoryName}() as never, { status: ${statusNum} });`);
    lines.push(`  }),`);
  }

  lines.push(`];`);
  lines.push(``);
  lines.push(`export const mswWorkerOptions = { onUnhandledRequest: "bypass" as const };`);
  void factoryNames;

  return lines.join("\n") + "\n";
};

/** Convert OpenAPI `{param}` path to MSW `:param` path (exported for tests). */
export const openApiPathToMswPath = openApiPathToMsw;

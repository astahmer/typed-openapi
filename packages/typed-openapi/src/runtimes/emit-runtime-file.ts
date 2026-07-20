import { Box } from "../box.ts";
import type { Endpoint } from "../map-openapi-endpoints.ts";
import type { RefResolver } from "../ref-resolver.ts";
import { boxToIr } from "../schema-ir/box-to-ir.ts";
import { openApiToIr } from "../schema-ir/openapi-to-ir.ts";
import type { SchemaIrConvertContext, SchemaNode } from "../schema-ir/types.ts";
import type { AnyBox, AnyBoxDef } from "../types.ts";
import { wrapWithQuotesIfNeeded } from "../string-utils.ts";
import { findRecursiveSchemaNames } from "./shared.ts";
import { createEmitCtx, type RuntimeAdapter } from "./types.ts";
import type { ValidationPolicy } from "./validation.ts";

export type EmitRuntimeFileArgs = {
  adapter: RuntimeAdapter;
  refs: RefResolver;
  endpointList: Endpoint[];
  validation: ValidationPolicy;
  schemasOnly?: boolean;
};

const irCtxFromRefs = (refs: RefResolver): SchemaIrConvertContext => ({
  getRefName: (ref: string) => refs.getInfosByRef(ref).normalized,
});

const isBoxLike = (value: unknown): value is AnyBox =>
  typeof value === "object" && value !== null && "type" in value && "value" in value;

const emitParameters = (
  adapter: RuntimeAdapter,
  parameters: Endpoint["parameters"],
  ctx: ReturnType<typeof createEmitCtx>,
  irCtx: SchemaIrConvertContext,
): string => {
  if (!parameters) return adapter.never();

  const parts: string[] = [];
  for (const key of ["query", "path", "header", "body"] as const) {
    const value = parameters[key];
    if (!value) continue;

    if (key === "body" || isBoxLike(value)) {
      parts.push(`${key}: ${adapter.emitNode(boxToIr(value as AnyBox, irCtx), ctx)}`);
      continue;
    }

    const properties: Record<string, SchemaNode> = {};
    const required: string[] = [];
    for (const [prop, box] of Object.entries(value as Record<string, AnyBox>)) {
      properties[prop] = boxToIr(box, irCtx);
      if (box.type !== "optional") required.push(prop);
    }
    const node: SchemaNode = {
      kind: "object",
      properties,
      required,
      additionalProperties: false,
      constraints: {},
      meta: {},
      partial: required.length === 0,
    };
    parts.push(`${key}: ${adapter.emitNode(node, ctx)}`);
  }

  return `{ ${parts.join(", ")} }`;
};

const emitResponses = (
  adapter: RuntimeAdapter,
  responses: Record<string, AnyBox> | undefined,
  ctx: ReturnType<typeof createEmitCtx>,
  irCtx: SchemaIrConvertContext,
): string => {
  if (!responses) return `{ }`;
  const parts = Object.entries(responses).map(([status, box]) => {
    return `${wrapWithQuotesIfNeeded(status)}: ${adapter.emitNode(boxToIr(box, irCtx), ctx)}`;
  });
  return `{ ${parts.join(", ")} }`;
};

const emitResponseHeaders = (
  adapter: RuntimeAdapter,
  headers: Record<string, Box<AnyBoxDef>> | undefined,
  ctx: ReturnType<typeof createEmitCtx>,
  irCtx: SchemaIrConvertContext,
): string => {
  if (!headers) return "";
  const parts = Object.entries(headers).map(([status, box]) => {
    return `${wrapWithQuotesIfNeeded(status.toLowerCase())}: ${adapter.emitNode(boxToIr(box, irCtx), ctx)}`;
  });
  return `responseHeaders: { ${parts.join(", ")} },`;
};

export const emitRuntimeFile = ({
  adapter,
  refs,
  endpointList,
  validation,
  schemasOnly,
}: EmitRuntimeFileArgs): string => {
  const irCtx = irCtxFromRefs(refs);

  const namedSchemas = refs
    .getOrderedSchemas()
    .filter(([, infos]) => infos?.name && infos.kind === "schemas")
    .map(([, infos]) => {
      const schema = refs.get(infos.ref);
      const node = openApiToIr(schema, irCtx);
      return { name: infos.normalized, node };
    });

  const recursiveNames = findRecursiveSchemaNames(namedSchemas);
  const ctx = createEmitCtx(validation, recursiveNames);

  let file = `${adapter.imports()}\n\n`;

  file += `// <Schemas>\n`;
  for (const { name, node } of namedSchemas) {
    file += `${adapter.emitNamedSchema(name, node, ctx)}\n\n`;
  }
  file += `// </Schemas>\n`;

  if (schemasOnly) return file;

  file += `\n// <Endpoints>\n`;
  for (const endpoint of endpointList) {
    const parameters = emitParameters(adapter, endpoint.parameters, ctx, irCtx);
    const responses = emitResponses(adapter, endpoint.responses, ctx, irCtx);
    const responseHeaders = emitResponseHeaders(adapter, endpoint.responseHeaders, ctx, irCtx);

    file += `export type ${endpoint.meta.alias} = typeof ${endpoint.meta.alias};\n`;
    file += `export const ${endpoint.meta.alias} = {\n`;
    file += `  method: ${adapter.literalString(endpoint.method.toUpperCase())},\n`;
    file += `  path: ${adapter.literalString(endpoint.path)},\n`;
    file += `  requestFormat: ${adapter.literalString(endpoint.requestFormat)},\n`;
    file += `  parameters: ${endpoint.meta.hasParameters ? parameters : adapter.never()},\n`;
    file += `  responses: ${responses},\n`;
    if (responseHeaders) file += `  ${responseHeaders}\n`;
    file += `};\n\n`;
  }
  file += `// </Endpoints>\n`;

  return file;
};

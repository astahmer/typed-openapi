import { getEntry } from "astro:content";
import { defineMiddleware } from "astro:middleware";
import { appendVaryAccept, preferredType } from "./lib/accept.mjs";

const MARKDOWN_404 = `# Page not found

The requested typed-openapi documentation page does not exist.

Try one of these entry points:

- [Documentation index](/)
- [Generate your first client](/getting-started/)
- [CLI reference](/reference/cli/)
- [AI agent guide](/ai/)
- [Full machine-readable index](/llms.txt)
- [XML sitemap](/sitemap.xml)
`;

const MARKDOWN_406 = `# Not acceptable

This documentation URL provides HTML and Markdown representations.

Request it with \`Accept: text/html\` or \`Accept: text/markdown\`.
`;

const MARKDOWN_HOME = `# typed-openapi

Generate type-safe TypeScript clients, runtime validators, and typed API integrations from OpenAPI documents.

## Start here

- [Getting started](/getting-started/)
- [Configuration](/configuration/)
- [Playground](/playground/)
- [AI agent guide](/ai/)
- [Full machine-readable index](/llms.txt)

## Developer resources

- [CLI reference](/reference/cli/)
- [Promise client and fetcher](/clients/promise-client/)
- [Effect-native client](/clients/effect-client/)
- [Runtime adapters](/validation/runtimes/)
- [TanStack Query](/integrations/tanstack-query/)
- [Library API](/advanced/library-api/)
- [Source repository](https://github.com/astahmer/typed-openapi)
`;

const MARKDOWN_PLAYGROUND = `# typed-openapi Playground

Prototype generated TypeScript from an OpenAPI YAML or JSON document in the browser.

- [Documentation home](/)
- [Getting started](/getting-started/)
- [AI agent guide](/ai/)
- [Full machine-readable index](/llms.txt)
`;

function documentId(pathname: string): string | null {
  const base = import.meta.env.BASE_URL;
  const path = base !== "/" && pathname.startsWith(base) ? pathname.slice(base.length - 1) : pathname;
  const normalized = path.replace(/^\/+|\/+$/g, "");

  if (normalized === "") return "index";
  if (normalized.includes(".") || normalized.startsWith("_astro/") || normalized.startsWith("playground/app/")) {
    return null;
  }

  return normalized;
}

async function markdownForPath(pathname: string): Promise<string | null> {
  const id = documentId(pathname);
  if (id === null) return null;
  if (id === "index") return MARKDOWN_HOME;
  if (id === "playground") return MARKDOWN_PLAYGROUND;

  const entry = await getEntry("docs", id);
  return entry?.body ?? null;
}

function markdownResponse(body: string, status = 200) {
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
  });
  appendVaryAccept(headers);
  return new Response(body, { status, headers });
}

function notAcceptableResponse() {
  const headers = new Headers({ "Content-Type": "text/markdown; charset=utf-8" });
  appendVaryAccept(headers);
  return new Response(MARKDOWN_406, { status: 406, headers });
}

export const onRequest = defineMiddleware(async (context, next) => {
  const requestedType = preferredType(context.request.headers.get("accept"));
  const isDocumentRequest = documentId(context.url.pathname) !== null;

  if (isDocumentRequest && requestedType === null) return notAcceptableResponse();

  if (isDocumentRequest && requestedType === "text/markdown") {
    const markdown = await markdownForPath(context.url.pathname);
    return markdownResponse(markdown ?? MARKDOWN_404, markdown === null ? 404 : 200);
  }

  const response = await next();
  appendVaryAccept(response.headers);
  return response;
});

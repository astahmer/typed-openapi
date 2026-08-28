import { next, rewrite } from "@vercel/functions";
import { appendVaryAccept, preferredType } from "./src/lib/accept.mjs";

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
  const normalized = pathname.replace(/^\/+|\/+$/g, "");

  if (normalized === "") return "index";
  if (normalized.includes(".") || normalized.startsWith("_astro/") || normalized.startsWith("playground/app/")) {
    return null;
  }

  return normalized;
}

export default function middleware(request: Request): Response {
  const url = new URL(request.url);
  const id = documentId(url.pathname);

  if (id === null) return next();

  const requestedType = preferredType(request.headers.get("accept"));
  if (requestedType === null) {
    const headers = new Headers({ "Content-Type": "text/markdown; charset=utf-8" });
    appendVaryAccept(headers);
    return new Response(MARKDOWN_406, { status: 406, headers });
  }

  if (requestedType === "text/markdown") {
    const headers = new Headers({ "Content-Type": "text/markdown; charset=utf-8" });
    appendVaryAccept(headers);
    if (id === "index") return new Response(MARKDOWN_HOME, { headers });
    if (id === "playground") return new Response(MARKDOWN_PLAYGROUND, { headers });
    return rewrite(new URL(`/__markdown/${id}.md`, url), { headers });
  }

  const headers = new Headers();
  appendVaryAccept(headers);
  return next({ headers });
}

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

import { appendVaryAccept, preferredType } from "../src/lib/accept.mjs";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("chooses the best documented representation from Accept", () => {
  assert.equal(preferredType(null), "text/html");
  assert.equal(preferredType("text/markdown"), "text/markdown");
  assert.equal(preferredType("text/html;q=0.9, text/markdown;q=1"), "text/markdown");
  assert.equal(preferredType("text/markdown;q=0.5, text/html;q=1"), "text/html");
  assert.equal(preferredType("text/html;q=0, */*;q=1"), "text/markdown");
  assert.equal(preferredType("text/markdown;q=0, */*;q=1"), "text/html");
  assert.equal(preferredType("application/json"), null);
});

test("adds both representation-affecting request headers to Vary", () => {
  const headers = new Headers({ Vary: "Origin" });
  appendVaryAccept(headers);
  assert.equal(headers.get("Vary"), "Origin, Accept, Accept-Encoding");

  appendVaryAccept(headers);
  assert.equal(headers.get("Vary"), "Origin, Accept, Accept-Encoding");
});

test("publishes agent navigation and machine-readable discovery files", async () => {
  const [notFound, llms, robots, sitemap, sitemapIndex, config] = await Promise.all([
    read("src/content/docs/404.md"),
    read("public/llms.txt"),
    read("public/robots.txt"),
    read("public/sitemap.xml"),
    read("public/sitemap-index.xml"),
    read("astro.config.mjs"),
  ]);

  assert.match(notFound, /\[Full machine-readable index\]\(\/llms\.txt\)/);
  assert.match(notFound, /\[XML sitemap\]\(\/sitemap\.xml\)/);
  assert.match(llms, /^# typed-openapi/m);
  assert.match(llms, /developer-resources\//);
  assert.match(llms, /github\.com\/astahmer\/typed-openapi/);
  assert.match(robots, /Sitemap: https:\/\/typed-openapi-docs\.vercel\.app\/sitemap-index\.xml/);
  assert.match(sitemap, /https:\/\/typed-openapi-docs\.vercel\.app\/developer-resources\//);
  assert.match(sitemapIndex, /https:\/\/typed-openapi-docs\.vercel\.app\/sitemap\.xml/);
  assert.match(config, /\"@type\": \"SoftwareApplication\"/);
  assert.match(config, /https:\/\/schema\.org/);
  assert.match(config, /https:\/\/typed-openapi-docs\.vercel\.app/);
});

test("keeps Vercel Markdown negotiation out of Astro Edge middleware", async () => {
  const [middleware, config, buildScript] = await Promise.all([
    read("middleware.ts"),
    read("astro.config.mjs"),
    read("scripts/build-playground.mjs"),
  ]);

  assert.match(middleware, /@vercel\/functions/);
  assert.doesNotMatch(middleware, /astro:middleware/);
  assert.doesNotMatch(config, /middlewareMode/);
  assert.match(buildScript, /build-markdown\.mjs/);
});

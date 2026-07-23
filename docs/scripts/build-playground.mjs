import { spawnSync } from "node:child_process";

const normalizeBase = (value) => {
  const path = value ?? "/";
  return `/${path}`.replace(/\/+/g, "/").replace(/([^/])$/, "$1/");
};

const docsBase = normalizeBase(process.env.DOCS_BASE ?? process.env.ASTRO_BASE);
const site = process.env.SITE_URL;
const withBase = (path) => `${docsBase}${path.replace(/^\//, "")}`;
const absoluteUrl = (path) => (site ? new URL(withBase(path), site).href : withBase(path));
const run = (command, args, env = {}) => {
  const result = spawnSync(command, args, {
    cwd: new URL("..", import.meta.url),
    env: { ...process.env, ...env },
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

run("pnpm", ["--filter", "typed-openapi", "build"]);
run("pnpm", ["--filter", "typed-openapi-web", "build"], {
  VITE_BASE: `${docsBase}playground/app/`,
  VITE_DOCS_BASE: docsBase,
  VITE_OG_IMAGE: absoluteUrl("og-playground.png"),
  VITE_OG_URL: absoluteUrl("playground/app/index.html"),
});
run(process.execPath, ["./scripts/embed-playground.mjs"]);

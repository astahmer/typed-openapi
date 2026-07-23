import { spawnSync } from "node:child_process";

const normalizeBase = (value) => {
  const path = value ?? "/";
  return `/${path}`.replace(/\/+/g, "/").replace(/([^/])$/, "$1/");
};

const docsBase = normalizeBase(process.env.DOCS_BASE ?? process.env.ASTRO_BASE);
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
});
run(process.execPath, ["./scripts/embed-playground.mjs"]);

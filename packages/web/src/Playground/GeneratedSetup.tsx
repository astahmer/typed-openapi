import { useState } from "react";
import type { OutputRuntime } from "typed-openapi";
import type { ClientKind, ValidateSide, ValidationLevel } from "./Playground.machine";

type SetupOptions = {
  runtime: OutputRuntime;
  validation: ValidationLevel;
  client: ClientKind;
  validateSide: ValidateSide;
  coerce: boolean;
  runtimeTypes: boolean;
  defaultFetcher: boolean;
  tanstack: boolean;
  msw: boolean;
};

const outputPath = (runtime: OutputRuntime) => `src/api/openapi${runtime === "none" ? ".client" : `.${runtime}`}.ts`;

const cliFor = (options: SetupOptions) => {
  const flags = [`--output ${outputPath(options.runtime)}`];
  if (options.runtime !== "none") {
    flags.push(
      `--runtime ${options.runtime}`,
      `--validation ${options.validation}`,
      `--client ${options.client}`,
      `--validate-side ${options.validateSide}`,
      options.coerce ? "--coerce" : "--no-coerce",
      options.runtimeTypes ? "--runtime-types" : "--no-runtime-types",
    );
  }
  if (options.defaultFetcher) flags.push("--default-fetcher");
  if (options.tanstack) flags.push("--tanstack");
  if (options.msw) flags.push("--msw");
  return `pnpm exec typed-openapi openapi.yaml ${flags.join(" ")}`;
};

const configFor = (options: SetupOptions) => {
  const fields = [`input: "./openapi.yaml"`, `output: "./${outputPath(options.runtime)}"`];
  if (options.runtime !== "none") {
    fields.push(
      `runtime: "${options.runtime}"`,
      `validation: "${options.validation}"`,
      `client: "${options.client}"`,
      `validateSide: "${options.validateSide}"`,
      `coerce: ${options.coerce}`,
      `runtimeTypes: ${options.runtimeTypes}`,
    );
  }
  if (options.defaultFetcher) fields.push("defaultFetcher: true");
  if (options.tanstack) fields.push("tanstack: true");
  if (options.msw) fields.push("msw: true");

  return `import { defineConfig } from "typed-openapi";

export default defineConfig({
  ${fields.join(",\n  ")},
});`;
};

export const GeneratedSetup = (options: SetupOptions) => {
  const [format, setFormat] = useState<"cli" | "config">("cli");
  const [copied, setCopied] = useState(false);
  const content = format === "cli" ? cliFor(options) : configFor(options);

  const copy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1_200);
  };

  return (
    <details className="playground-setup">
      <summary>Copy a CLI command or config file</summary>
      <div className="playground-setup-content">
        <div className="playground-setup-actions" role="tablist" aria-label="Setup format">
          <button data-active={format === "cli" || undefined} type="button" role="tab" onClick={() => setFormat("cli")}>
            CLI
          </button>
          <button data-active={format === "config" || undefined} type="button" role="tab" onClick={() => setFormat("config")}>
            Config
          </button>
          <button className="playground-copy-button" type="button" onClick={copy}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre><code>{content}</code></pre>
        <p>Replace <code>openapi.yaml</code> with your spec path before running it.</p>
      </div>
    </details>
  );
};

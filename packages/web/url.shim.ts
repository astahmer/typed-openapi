/** Browser stub for `url` / `node:url`. typed-openapi's config/format loaders are never used in the playground. */
export const pathToFileURL = (inputPath: string): URL => new URL(inputPath, window.location.href);

export const fileURLToPath = (input: string | URL): string =>
  typeof input === "string" ? new URL(input).pathname : input.pathname;

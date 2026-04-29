import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

type OxcFormatOptions = import("oxfmt").FormatConfig;

export type PrettifyOptions = OxcFormatOptions & {
  enabled?: boolean;
  filePath?: string;
};

const defaultFilePath = "generated.ts";
const require = createRequire(import.meta.url);

async function formatWithBundledOxfmt(
  filePath: string,
  input: string,
  options?: OxcFormatOptions,
): Promise<string> {
  const packageJsonPath = require.resolve("oxfmt/package.json");
  const packageRoot = dirname(packageJsonPath);
  const indexSource = await readFile(join(packageRoot, "dist", "index.js"), "utf8");
  const match = indexSource.match(/from ["']\.\/(apis-[^"']+\.js)["']/);
  const internalFile = match?.[1];

  if (!internalFile) {
    throw new Error("Unable to locate oxfmt's bundled JS formatter");
  }

  const internalUrl = pathToFileURL(join(packageRoot, "dist", internalFile)).href;
  const { r: formatFile } = await import(internalUrl);

  return formatFile({
    code: input,
    options: {
      printWidth: 120,
      trailingComma: "all",
      ...options,
      filepath: filePath,
    },
  });
}

/** @see https://github.dev/stephenh/ts-poet/blob/5ea0dbb3c9f1f4b0ee51a54abb2d758102eda4a2/src/Code.ts#L231 */
async function maybePretty(input: string, options?: PrettifyOptions | null) {
  const { enabled, filePath = defaultFilePath, ...formatOptions } = options ?? {};

  if (enabled === false) {
    return input;
  }

  try {
    const { format } = await import("oxfmt");
    const result = await format(filePath, input, {
      printWidth: 120,
      trailingComma: "all",
      ...formatOptions,
    });

    if (result.errors.length > 0) {
      console.warn(`Failed to format code in ${filePath}`);
      console.warn(result.errors);
      return input;
    }

    return result.code;
  } catch {
    try {
      return await formatWithBundledOxfmt(filePath, input, formatOptions);
    } catch (err) {
      console.warn(`Failed to format code in ${filePath}`);
      console.warn(err);
      return input; // assume it's invalid syntax and ignore
    }
  }
}

export const prettify = (str: string, options?: PrettifyOptions | null) => maybePretty(str, options);

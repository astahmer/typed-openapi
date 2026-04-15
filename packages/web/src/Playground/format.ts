import prettier, { type Options } from "prettier";
import parserTypescript from "prettier/parser-typescript";

/** @see https://github.dev/stephenh/ts-poet/blob/5ea0dbb3c9f1f4b0ee51a54abb2d758102eda4a2/src/Code.ts#L231 */
function maybePretty(input: string, options?: Options | null): string {
  try {
    const formatted = prettier.format(input, {
      parser: "typescript",
      plugins: [parserTypescript],
      ...options,
    });

    // Prettier 3 switched format() to async, which does not fit this synchronous browser update path.
    if (typeof formatted !== "string") {
      return input;
    }

    return formatted;
  } catch (err) {
    console.warn("Failed to format code");
    console.warn(err);
    return input; // assume it's invalid syntax and ignore
  }
}

export const prettify = (str: string, options?: Options | null) =>
  maybePretty(str, { printWidth: 120, trailingComma: "all", ...options });

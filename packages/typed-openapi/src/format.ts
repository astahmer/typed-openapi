type OxcFormatOptions = import("oxfmt").FormatConfig;

export type PrettifyOptions = OxcFormatOptions & {
  enabled?: boolean;
  filePath?: string;
};

const defaultFilePath = "generated.ts";

/** @see https://github.dev/stephenh/ts-poet/blob/5ea0dbb3c9f1f4b0ee51a54abb2d758102eda4a2/src/Code.ts#L231 */
async function maybePretty(input: string, options?: PrettifyOptions | null) {
  if (options?.enabled === false) {
    return input;
  }

  const { enabled: _enabled, filePath = defaultFilePath, ...formatOptions } = options ?? {};

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
  } catch (err) {
    console.warn(`Failed to format code in ${filePath}`);
    console.warn(err);
    return input; // assume it's invalid syntax and ignore
  }
}

export const prettify = (str: string, options?: PrettifyOptions | null) => maybePretty(str, options);

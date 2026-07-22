/**
 * Shared tsc diagnostic filters for kombo / matrix / snapshot / audit typechecks.
 * Keep allowlists identical — divergence caused arktype Infer regressions.
 */

export type TypecheckFilterOptions = {
  /** Sample is kombo (or other deep recursive OAS). */
  allowCircular?: boolean;
  runtime?: string;
  /**
   * When set, diagnostics that mention this path are always kept
   * (e.g. matrix `usage.ts` assertions).
   */
  alwaysKeepPathSubstring?: string;
};

/** Drop known generated-client noise; never hide fixed circular/lazy/disc+null bugs. */
export const filterTypecheckDiagnostics = (out: string, options: TypecheckFilterOptions = {}): string => {
  const { allowCircular = false, runtime, alwaysKeepPathSubstring } = options;
  return out
    .split("\n")
    .filter((line) => {
      if (!line.includes("error TS")) return true;
      if (alwaysKeepPathSubstring && line.includes(alwaysKeepPathSubstring)) return true;
      if (allowCircular) {
        return !(
          // Do NOT filter TS2456 / TS7022 / TS7024 / zod TS2345 — those are fixed.
          (
            line.includes("error TS2502") ||
            // ArkType deep union/tuple assignability + property access on large Kombo schemas.
            (runtime === "arktype" && line.includes("error TS2322")) ||
            (runtime === "arktype" && line.includes("error TS2339")) ||
            (runtime === "arktype" && line.includes("error TS2345")) ||
            line.includes("error TS2719") ||
            line.includes("error TS2536")
          )
        );
      }
      if (
        (runtime === "typebox" || runtime === "typia") &&
        line.includes("error TS2536") &&
        line.includes("/client.ts(")
      ) {
        return false;
      }
      return true;
    })
    .join("\n");
};

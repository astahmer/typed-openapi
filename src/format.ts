import { createFromBuffer, GlobalConfiguration } from "@dprint/formatter";
import * as fs from "fs";
import { join } from "path";

const tsPluginPath = join(__dirname, "..", "node_modules", "@dprint", "typescript", "plugin.wasm");
const buffer = fs.readFileSync(tsPluginPath);
const formatter = createFromBuffer(buffer);

formatter.setConfig({ lineWidth: 120, indentWidth: 2 }, {});

export const prettify = (code: string, options?: GlobalConfiguration) =>
  formatter.formatText("code.ts", code, options as any);

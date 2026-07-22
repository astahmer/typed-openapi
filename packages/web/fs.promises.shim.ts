/** Browser stub for `fs/promises` / `node:fs/promises` (Vite fs → fs.shim breaks `/promises`). */
export const readFile = async (_path: string, _encoding?: string): Promise<string> => {
  return "";
};

export const writeFile = async (_path: string, _data: string): Promise<void> => {};

export const mkdir = async (_path: string, _opts?: { recursive?: boolean }): Promise<void> => {};

const fsPromises = { readFile, writeFile, mkdir };

export default fsPromises;

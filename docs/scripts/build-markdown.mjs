import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const docsRoot = fileURLToPath(new URL("../src/content/docs", import.meta.url));
const outputRoot = fileURLToPath(new URL("../public/__markdown", import.meta.url));

const stripFrontmatter = (source) => source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await markdownFiles(path)));
    } else if (entry.isFile() && [".md", ".mdx"].includes(extname(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

await rm(outputRoot, { recursive: true, force: true });

for (const sourcePath of await markdownFiles(docsRoot)) {
  const sourceRelativePath = relative(docsRoot, sourcePath).split(sep).join("/");
  const outputRelativePath = sourceRelativePath.replace(/\.(?:md|mdx)$/, ".md");
  const outputPath = join(outputRoot, outputRelativePath);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, stripFrontmatter(await readFile(sourcePath, "utf8")));
}

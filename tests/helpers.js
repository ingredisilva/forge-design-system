import { dirname, join, normalize } from "node:path";
import { readdirSync, readFileSync } from "node:fs";

export function readText(path) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

export function readJson(path) {
  return JSON.parse(readText(path));
}

export function walkFiles(dir, predicate = () => true) {
  const results = [];

  for (const entry of readdirSync(join(process.cwd(), dir), { withFileTypes: true })) {
    const relativePath = `${dir}/${entry.name}`.replaceAll("\\", "/");

    if (entry.isDirectory()) {
      results.push(...walkFiles(relativePath, predicate));
      continue;
    }

    if (predicate(relativePath)) {
      results.push(relativePath);
    }
  }

  return results;
}

export function unique(values) {
  return [...new Set(values)];
}

export function extractIconIds(source) {
  return [...source.matchAll(/id="k88-icon-([a-z0-9-]+)"/g)].map((match) => match[1]);
}

export function extractIconReferences(source) {
  return [...source.matchAll(/#k88-icon-([a-z0-9-]+)/g)].map((match) => match[1]);
}

export function readCssBundle(entryPath, seen = new Set()) {
  const normalizedPath = normalize(entryPath).replaceAll("\\", "/");

  if (seen.has(normalizedPath)) {
    return "";
  }

  seen.add(normalizedPath);

  const source = readText(normalizedPath);
  const baseDir = dirname(normalizedPath).replaceAll("\\", "/");

  return source.replace(/@import\s+"([^"]+)";/g, (_, importPath) => {
    const childPath = normalize(join(baseDir, importPath)).replaceAll("\\", "/");
    return readCssBundle(childPath, seen);
  });
}

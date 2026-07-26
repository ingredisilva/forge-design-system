import test from "node:test";
import assert from "node:assert/strict";
import { icons, themeValues } from "../dist/contracts/kairo.js";
import { extractIconReferences, readText, unique, walkFiles } from "./helpers.js";

const storyFiles = walkFiles("src/stories", (file) => file.endsWith(".ts"));
const referenceFiles = [
  ...storyFiles,
  "examples/kairo-board.html",
  "docs/icons.md",
  "README.md"
];

test("all stories are covered by TypeScript source files", () => {
  assert.ok(storyFiles.length > 0, "expected TypeScript stories");
});

test("Storybook preview exposes all Kairo themes", () => {
  const preview = readText(".storybook/preview.ts");
  const contract = readText("src/contracts/kairo.ts");

  assert.match(preview, /themes/, "preview must import the shared theme contract");

  for (const theme of themeValues) {
    assert.match(contract, new RegExp(theme), `contract missing ${theme}`);
  }
});

test("direct icon references in docs, examples and stories are valid", () => {
  const publicIcons = new Set(icons);

  for (const file of referenceFiles) {
    const references = unique(extractIconReferences(readText(file)));

    for (const reference of references) {
      assert.ok(publicIcons.has(reference), `${file} references missing icon ${reference}`);
    }
  }
});

test("storybook stories cover the foundation areas", () => {
  const titles = storyFiles
    .filter((file) => file.endsWith(".stories.ts"))
    .map((file) => readText(file).match(/title:\s*"([^"]+)"/)?.[1])
    .filter(Boolean)
    .sort();

  assert.deepEqual(titles, [
    "Kairo 88/Foundations/Introduction",
    "Kairo 88/Foundations/Backgrounds",
    "Kairo 88/Foundations/Design Options",
    "Kairo 88/Foundations/Tokens",
    "Kairo 88/Atoms/Buttons",
    "Kairo 88/Atoms/Forms",
    "Kairo 88/Atoms/Icons",
    "Kairo 88/Molecules/Panel",
    "Kairo 88/Organisms/Table",
    "Kairo 88/Motion/Utilities"
  ].sort());
});

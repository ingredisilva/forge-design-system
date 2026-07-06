import test from "node:test";
import assert from "node:assert/strict";
import { icons } from "../src/contracts/kairo.js";
import { extractIconIds, readText, unique } from "./helpers.js";

const sprite = readText("src/icons/kairo-icons.svg");
const symbols = [...sprite.matchAll(/<symbol id="k88-icon-([a-z0-9-]+)" viewBox="([^"]+)">([\s\S]*?)<\/symbol>/g)].map(
  ([, name, viewBox, content]) => ({ name, viewBox, content })
);

test("icon sprite contains exactly the public icon contract", () => {
  const symbolNames = symbols.map((symbol) => symbol.name).sort();
  const publicNames = [...icons].sort();

  assert.deepEqual(symbolNames, publicNames);
  assert.equal(unique(symbolNames).length, symbolNames.length, "duplicate symbol ids found");
});

test("every icon uses the standard 24px viewBox and inherited color", () => {
  for (const symbol of symbols) {
    assert.equal(symbol.viewBox, "0 0 24 24", `${symbol.name} must use viewBox 0 0 24 24`);
    assert.match(symbol.content, /currentColor/, `${symbol.name} must inherit color`);
    assert.doesNotMatch(symbol.content, /(stroke|fill)="#/i, `${symbol.name} must not hard-code colors`);
  }
});

test("all icon references point to existing sprite symbols", () => {
  const referenced = [
    ...extractIconIds(readText("src/icons/kairo-icons.svg")),
    ...extractIconIds(readText("src/stories/shared/story-utils.js"))
  ];

  for (const name of referenced) {
    assert.ok(icons.includes(name), `unknown icon reference: ${name}`);
  }
});

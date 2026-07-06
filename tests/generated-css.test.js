import test from "node:test";
import assert from "node:assert/strict";
import { buildTokensCss } from "../scripts/generate-css-tokens.js";
import { readJson, readText } from "./helpers.js";

test("generated CSS token file is in sync with token sources", () => {
  const tokens = readJson("tokens/kairo-88.tokens.json");
  const themes = readJson("tokens/kairo-88.themes.json");
  const expected = buildTokensCss(tokens, themes);
  const actual = readText("src/styles/foundations/tokens.css");

  assert.equal(actual, expected);
});


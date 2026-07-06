import test from "node:test";
import assert from "node:assert/strict";
import { themes, themeValues } from "../src/contracts/kairo.js";
import { readJson } from "./helpers.js";

const themeConfig = readJson("tokens/kairo-88.themes.json");

test("systems-84 is exposed as the second official design option", () => {
  assert.equal(themes[1].value, "systems-84");
  assert.ok(themeValues.includes("systems-84"), "contract must expose systems-84");
  assert.ok(themeConfig.themes["systems-84"], "theme tokens must define systems-84");
});

test("systems-84 preserves the ingrd technical palette", () => {
  const systems84 = themeConfig.themes["systems-84"];

  assert.equal(systems84.colors.bg, "#0b0f14");
  assert.equal(systems84.colors.surface, "#121a22");
  assert.equal(systems84.colors.surfaceRaised, "#16202a");
  assert.equal(systems84.colors.primary, "#9fb7a5");
  assert.equal(systems84.colors.accent, "#d6a84f");
  assert.equal(systems84.colors.info, "#7aa2c7");
  assert.equal(systems84.colors.danger, "#e84a4a");
});

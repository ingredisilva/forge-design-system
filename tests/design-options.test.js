import test from "node:test";
import assert from "node:assert/strict";
import { themes, themeValues } from "../dist/contracts/kairo.js";
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

test("cyberpunk-1984 is exposed as the third official design option", () => {
  assert.equal(themes[2].value, "cyberpunk-1984");
  assert.ok(themeValues.includes("cyberpunk-1984"), "contract must expose cyberpunk-1984");
  assert.ok(themeConfig.themes["cyberpunk-1984"], "theme tokens must define cyberpunk-1984");
});

test("cyberpunk-1984 preserves the analog intelligence palette", () => {
  const cyberpunk1984 = themeConfig.themes["cyberpunk-1984"];

  assert.equal(cyberpunk1984.colors.bg, "#090c0a");
  assert.equal(cyberpunk1984.colors.surface, "#141915");
  assert.equal(cyberpunk1984.colors.surfaceRaised, "#1b231d");
  assert.equal(cyberpunk1984.colors.text, "#e5e1cf");
  assert.equal(cyberpunk1984.colors.primary, "#c6d86b");
  assert.equal(cyberpunk1984.colors.accent, "#e04b32");
  assert.equal(cyberpunk1984.colors.info, "#77a9a0");
  assert.equal(cyberpunk1984.colors.danger, "#f05a47");
});

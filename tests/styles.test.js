import test from "node:test";
import assert from "node:assert/strict";
import { themeValues } from "../dist/contracts/kairo.js";
import { readCssBundle } from "./helpers.js";

const css = readCssBundle("src/styles/kairo.css");

const requiredColorVars = [
  "--k88-color-bg",
  "--k88-color-surface",
  "--k88-color-surface-raised",
  "--k88-color-overlay",
  "--k88-color-text",
  "--k88-color-text-muted",
  "--k88-color-border",
  "--k88-color-border-strong",
  "--k88-color-control-border",
  "--k88-color-primary",
  "--k88-color-primary-text",
  "--k88-color-accent",
  "--k88-color-accent-text",
  "--k88-color-info",
  "--k88-color-success",
  "--k88-color-warning",
  "--k88-color-danger",
  "--k88-color-danger-text"
];

function themeBlock(theme) {
  const marker = `[data-theme="${theme}"]`;
  const start = css.indexOf(marker);
  assert.notEqual(start, -1, `missing theme selector: ${theme}`);

  const open = css.indexOf("{", start);
  const close = css.indexOf("}", open);
  return css.slice(open + 1, close);
}

function varsFromBlock(block) {
  return Object.fromEntries(
    [...block.matchAll(/(--k88-[a-z0-9-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()])
  );
}

function hexToRgb(hex) {
  return [0, 2, 4].map((offset) => Number.parseInt(hex.slice(1 + offset, 3 + offset), 16) / 255);
}

function linearize(channel) {
  return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(linearize);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

test("all themes define the required semantic color variables", () => {
  for (const theme of themeValues) {
    const vars = varsFromBlock(themeBlock(theme));

    for (const variable of requiredColorVars) {
      assert.ok(vars[variable], `${theme} missing ${variable}`);
      assert.match(vars[variable], /^#[0-9a-fA-F]{6}$/, `${theme} ${variable} must be hex`);
    }
  }
});

test("theme contrast clears AA for reading and filled action pairs", () => {
  for (const theme of themeValues) {
    const vars = varsFromBlock(themeBlock(theme));
    const checks = [
      ["text/bg", vars["--k88-color-text"], vars["--k88-color-bg"]],
      ["text/surface", vars["--k88-color-text"], vars["--k88-color-surface"]],
      ["text/raised", vars["--k88-color-text"], vars["--k88-color-surface-raised"]],
      ["muted/bg", vars["--k88-color-text-muted"], vars["--k88-color-bg"]],
      ["muted/surface", vars["--k88-color-text-muted"], vars["--k88-color-surface"]],
      ["muted/raised", vars["--k88-color-text-muted"], vars["--k88-color-surface-raised"]],
      ["primary button", vars["--k88-color-primary-text"], vars["--k88-color-primary"]],
      ["accent surface", vars["--k88-color-accent-text"], vars["--k88-color-accent"]],
      ["danger button", vars["--k88-color-danger-text"], vars["--k88-color-danger"]]
    ];

    for (const [label, foreground, background] of checks) {
      assert.ok(contrast(foreground, background) >= 4.5, `${theme} ${label} contrast is below AA`);
    }
  }
});

test("functional control boundaries clear non-text contrast", () => {
  for (const theme of themeValues) {
    const vars = varsFromBlock(themeBlock(theme));
    const controlBorder = vars["--k88-color-control-border"];
    const adjacentSurfaces = [
      ["page", vars["--k88-color-bg"]],
      ["surface", vars["--k88-color-surface"]]
    ];

    for (const [label, background] of adjacentSurfaces) {
      assert.ok(contrast(controlBorder, background) >= 3, `${theme} control border/${label} contrast is below 3:1`);
    }
  }
});

test("components use semantic background roles without removing legacy borders", () => {
  assert.match(css, /::selection\s*\{[^}]*var\(--k88-color-accent-text(?:,|\))/, "selection must use accent text");
  assert.match(css, /\.k88-input\s*\{[^}]*var\(--k88-color-control-border(?:,|\))/, "inputs must use control border");
  assert.match(css, /\.k88-panel\s*\{[^}]*var\(--k88-color-border\)/, "panels must preserve divider border");
  assert.match(css, /\.k88-button\[data-variant="danger"\]\s*\{[^}]*var\(--k88-color-danger-text(?:,|\))/, "danger buttons must use danger text");
});

test("new semantic roles preserve legacy custom-theme fallbacks", () => {
  assert.match(css, /var\(--k88-color-control-border,\s*var\(--k88-color-border-strong\)\)/, "control border needs a legacy fallback");
  assert.match(css, /var\(--k88-color-accent-text,\s*var\(--k88-color-primary-text\)\)/, "accent text needs a legacy fallback");
  assert.match(css, /var\(--k88-color-danger-text,\s*#ffffff\)/, "danger text needs its previous color as fallback");
});

test("core component and motion classes exist", () => {
  const selectors = [
    ".k88-button",
    ".k88-icon",
    ".k88-icon-button",
    ".k88-panel",
    ".k88-badge",
    ".k88-system-label",
    ".k88-clearance-label",
    ".k88-field",
    ".k88-input",
    ".k88-table",
    ".k88-technical-grid",
    ".k88-blueprint-grid",
    ".k88-intelligence-grid",
    ".k88-signal-noise",
    ".k88-scanline",
    ".k88-animate-in",
    ".k88-animate-pulse",
    ".k88-animate-spin",
    ".k88-animate-flicker",
    ".k88-animate-sweep"
  ];

  for (const selector of selectors) {
    assert.match(css, new RegExp(selector.replace(".", "\\.")), `missing selector ${selector}`);
  }
});

test("motion has reduced-motion safeguards", () => {
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/, "missing reduced-motion media query");
  assert.match(css, /animation-duration:\s*1ms\s*!important/, "missing reduced animation duration override");
  assert.match(css, /\.k88-animate-sweep::after\s*\{[\s\S]*display:\s*none;/, "sweep overlay must be disabled for reduced motion");
  assert.match(css, /\.k88-scanline::after\s*\{\s*animation:\s*none;\s*display:\s*none;/, "scanline must stop under reduced motion");
});

test("texture utilities preserve a usable surface fallback", () => {
  for (const selector of ["technical-grid", "blueprint-grid", "intelligence-grid"]) {
    assert.match(css, new RegExp(`\\.k88-${selector}\\s*\\{[^}]*background-image:`), `${selector} must compose over a background color`);
  }

  assert.match(css, /\.k88-signal-noise\s*\{[^}]*var\(--k88-color-surface-raised\)/, "signal noise must include a solid fallback");
});

test("forced colors preserve controls, focus, and status labels", () => {
  assert.match(css, /@media\s*\(forced-colors:\s*active\)/, "missing forced-colors support");
  assert.match(css, /outline:\s*2px solid Highlight/, "forced colors must preserve focus visibility");
  assert.match(css, /border-color:\s*ButtonText/, "forced colors must preserve control boundaries");
  assert.match(css, /\.k88-clearance-label/, "forced colors must include status labels");
});

test("CSS avoids negative letter spacing and viewport-scaled type", () => {
  assert.doesNotMatch(css, /letter-spacing:\s*-/i, "negative letter spacing is not allowed");
  assert.doesNotMatch(css, /font-size:\s*(calc|clamp|min|max)\(/i, "viewport or dynamic font sizing is not part of the base system");
});

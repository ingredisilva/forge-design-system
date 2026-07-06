import test from "node:test";
import assert from "node:assert/strict";
import { readJson } from "./helpers.js";

const tokens = readJson("tokens/kairo-88.tokens.json");

function walkTokens(node, path = []) {
  if (node && typeof node === "object" && "$value" in node) {
    return [{ path, token: node }];
  }

  if (!node || typeof node !== "object") {
    return [];
  }

  return Object.entries(node ?? {}).flatMap(([key, value]) => walkTokens(value, [...path, key]));
}

function resolveReference(reference) {
  const path = reference.slice(1, -1).split(".");
  let cursor = tokens;

  for (const segment of path) {
    cursor = cursor?.[segment];
  }

  return cursor;
}

test("tokens expose the expected foundation groups", () => {
  for (const group of ["color", "space", "radius", "font", "icon", "motion"]) {
    assert.ok(tokens[group], `missing token group: ${group}`);
  }
});

test("token references resolve to existing tokens", () => {
  const references = walkTokens(tokens)
    .map(({ token }) => token.$value)
    .filter((value) => typeof value === "string" && /^\{.+\}$/.test(value));

  assert.ok(references.length > 0, "expected at least one token reference");

  for (const reference of references) {
    const target = resolveReference(reference);
    assert.ok(target, `unresolved token reference: ${reference}`);
    assert.ok("$value" in target, `reference does not point to a token value: ${reference}`);
  }
});

test("color tokens are hex values or references", () => {
  const colorTokens = walkTokens(tokens.color);

  for (const { path, token } of colorTokens) {
    assert.equal(token.$type, "color", `invalid color type at ${path.join(".")}`);
    assert.match(token.$value, /^(#[0-9a-fA-F]{6}|\{color\.[a-zA-Z0-9.]+\})$/, `invalid color value at ${path.join(".")}`);
  }
});

test("dimension tokens use non-negative px values", () => {
  const dimensionTokens = walkTokens({
    space: tokens.space,
    radius: tokens.radius,
    fontSize: tokens.font.size,
    iconSize: tokens.icon.size
  });

  for (const { path, token } of dimensionTokens) {
    assert.match(token.$value, /^\d+px$/, `dimension must be px at ${path.join(".")}`);
    assert.ok(Number.parseInt(token.$value, 10) >= 0, `dimension must be non-negative at ${path.join(".")}`);
  }
});

test("component radius tokens keep the industrial Kairo shape", () => {
  for (const [name, token] of Object.entries(tokens.radius)) {
    const radius = Number.parseInt(token.$value, 10);
    assert.ok(radius <= 8, `radius ${name} is larger than the 8px system limit`);
  }
});

test("motion tokens stay short and intentional", () => {
  for (const [name, token] of Object.entries(tokens.motion.duration)) {
    assert.equal(token.$type, "duration", `invalid duration type for ${name}`);
    assert.match(token.$value, /^\d+ms$/, `duration ${name} must use ms`);
    assert.ok(Number.parseInt(token.$value, 10) <= 1200, `duration ${name} is too long for product UI`);
  }

  for (const [name, token] of Object.entries(tokens.motion.easing)) {
    assert.equal(token.$type, "cubicBezier", `invalid easing type for ${name}`);
    assert.equal(token.$value.length, 4, `easing ${name} must have four points`);
    for (const point of token.$value) {
      assert.equal(typeof point, "number", `easing ${name} contains a non-number point`);
    }
  }
});

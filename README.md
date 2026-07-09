# Kairo 88 Design System

Kairo 88 is a design system for digital products with a Japanese 80s aesthetic: precise, nocturnal, editorial, tactile interfaces inspired by city pop, consumer electronics, arcades, urban signage, and CRT displays.

The goal is not to turn every app into decorative nostalgia. The system should be useful first and memorable second: high readability, predictable components, consistent tokens, and visual details that create identity without getting in the way of daily use.

## Core Idea

**A modern product with the soul of an 80s Japanese electronic panel.**

Users should feel that they are using a reliable, fast, beautiful tool with subtle period cues: neon contrast over an urban night base, fine lines, rigid grids, microtextures, technical typography, luminous states, and a palette that mixes paper, ink, glass, metal, and light.

## Principles

1. **Signal before ornament**
   Every color, border, shadow, and animation should help readability, hierarchy, or feedback.

2. **Grid as rhythm**
   Layouts use strong alignment, predictable spacing, and controlled density. The reference is editorial and industrial, not decorative landing-page composition.

3. **Nostalgia with precision**
   The aesthetic comes from materials, light, typography, and proportion. Avoid decorative kanji, tourist cliches, or cultural elements without purpose.

4. **Urban night, clear paper**
   The system starts with an expressive dark mode and an editorial light mode. Both share the same tokens instead of becoming separate systems.

5. **Tactile, not heavy**
   Components may evoke buttons, displays, labels, and panels while staying lightweight, responsive, and accessible.

6. **One library, many products**
   The visual signature should survive dashboards, internal tools, websites, games, docs, and mobile apps without requiring a redesign per project.

## Project Structure

- [.storybook](.storybook): Storybook configuration for documenting and testing the library.
- [docs/atomic-design.md](docs/atomic-design.md): organization by foundations, atoms, molecules, and organisms.
- [docs/conceito.md](docs/conceito.md): concept, visual language, usage rules, and component direction.
- [docs/design-options.md](docs/design-options.md): official visual presets, including `systems-84` from the ingrd portfolio.
- [docs/icones.md](docs/icones.md): icon direction, sizes, names, and usage rules.
- [docs/motion.md](docs/motion.md): animation principles, durations, easing, and reusable patterns.
- [docs/publishing.md](docs/publishing.md): production publishing checklist for npm, releases, and Storybook Pages.
- [docs/roadmap.md](docs/roadmap.md): recommended path for turning the concept into a real library.
- [docs/storybook.md](docs/storybook.md): how to use Storybook as the design system workbench.
- [docs/testing.md](docs/testing.md): test strategy for tokens, CSS, icons, stories, and builds.
- [tokens/kairo-88.tokens.json](tokens/kairo-88.tokens.json): initial semantic tokens in JSON.
- [tokens/kairo-88.themes.json](tokens/kairo-88.themes.json): semantic themes used to generate CSS.
- [src/contracts/kairo.js](src/contracts/kairo.js): shared contract for themes, icons, and Storybook ordering.
- [src/styles/kairo.css](src/styles/kairo.css): public CSS entrypoint, organized with Atomic Design.
- [src/icons/kairo-icons.svg](src/icons/kairo-icons.svg): initial SVG sprite with functional icons.
- [src/stories](src/stories): stories for concept, tokens, components, icons, and motion.
- [scripts/generate-css-tokens.js](scripts/generate-css-tokens.js): generates `src/styles/foundations/tokens.css`.
- [examples/kairo-board.html](examples/kairo-board.html): static showcase of the concept with switchable themes.

## Storybook

Install dependencies and run:

```bash
npm install
npm run build:tokens
npm run storybook
```

Storybook runs at `http://localhost:6006` and includes a theme selector for `midnight`, `systems-84`, `daylight`, `arcade`, and `paper`.

## Tests

```bash
npm test
npm run test:ci
```

`npm test` validates tokens, CSS, icons, and stories with Node's native test runner. `npm run test:ci` runs the suite and also builds Storybook.

## Intended Usage

Consumer projects should import the CSS tokens and set a theme attribute on the root element:

```html
<html data-theme="kairo-midnight">
```

```html
<html data-theme="systems-84">
```

```css
@import "@ingredisilva/kairo-88/styles";
```

The final package should expose tokens, base CSS, and components through adapters without forcing every project to use the same framework.

## Publishing

This package is prepared for public npm publishing as `@ingredisilva/kairo-88`.

Before publishing a release:

```bash
npm run test:ci
npm run pack:dry-run
```

The first release should be published manually with an npm account that has 2FA enabled:

```bash
npm publish --access public
```

After the first release, use the tag-based GitHub Actions release workflow with npm Trusted Publishing.

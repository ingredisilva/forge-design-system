# Design Options

Kairo 88 now has two official visual directions. Both use the same atoms, molecules, organisms, scale tokens, icons, and motion. The difference lives in the theme preset and the visual primitives applied to the product.

## Kairo 88

The main design system preset.

Use it when an app needs a more expressive Japanese 80s feel: controlled city pop, functional neon, display panels, urban signage, and creative product energy.

Current themes:

- `kairo-midnight`
- `kairo-daylight`
- `kairo-arcade`
- `kairo-paper`

## Systems 84

The second design option, brought in from the ingrd portfolio.

Use it when an app should feel more technical, editorial, and lab-like: clean terminal, blueprint grids, industrial green, amber alerts, rigid panels, and mono microcopy.

Theme:

- `systems-84`

## Usage

```html
<html data-theme="systems-84">
```

```css
@import "@alloysforge/kairo-88/styles";
```

## Visual Primitives

- `.k88-system-label`: mono bracket label inherited from the `SYSTEMS_84` language.
- `.k88-technical-grid`: technical background grid for panels, dashboards, and headers.
- `.k88-blueprint-grid`: more diagrammatic grid for system maps, previews, and technical areas.
- `.k88-scanline`: subtle terminal/readout overlay with `prefers-reduced-motion` support.

## Rules

- Use `systems-84` as a complete preset, not as a loose palette mixed into Kairo 88.
- Keep radius low and borders visible.
- Prefer short mono text and uppercase only for labels and metadata.
- Use scan, sweep, pulse, or spin motion only when it communicates status, reading, or progress.
- Do not use Japanese elements as empty ornament; labels should communicate real context.

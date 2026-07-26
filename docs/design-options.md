# Design Options

Kairo 88 has three official visual directions. All use the same atoms, molecules, organisms, scale tokens, icons, and motion. The difference lives in the theme preset and the visual primitives applied to the product.

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

## Cyberpunk 1984 / Kojima

The third design option is inspired by early Japanese techno-thrillers and Kojima-era narrative interfaces: military networks, analog surveillance, consumer electronics, classified dossiers, and the anxiety of automated systems.

Use it when a product benefits from tension, operational storytelling, intelligence analysis, security workflows, system maps, incident response, or game-like command surfaces.

Theme:

- `cyberpunk-1984`

This is an original Kairo 88 interpretation. It must not reproduce names, logos, characters, typography, screens, or other protected material from a specific game or franchise.

### Design Pillars

- **Paranoid systems:** interfaces imply observation, interception, clearance, and incomplete information.
- **Military consumer technology:** olive phosphor, aged ivory, safety red, stamped labels, and compact hardware proportions.
- **Analog signal under digital control:** scanlines, tracking noise, timestamps, grid references, and restrained interference support real state.
- **Narrative metadata:** labels should reveal mission, source, channel, confidence, or clearance instead of acting as decoration.
- **Controlled tension:** red is reserved for exposure, denial, destructive action, and compromised states.

### Typography and Layout

- Use display type for short command headings and mono type for coordinates, timestamps, identifiers, and evidence metadata.
- Keep letter spacing at zero; hierarchy comes from weight, size, case, borders, and alignment.
- Prefer asymmetric operational layouts with a dominant readout and narrow evidence or status columns.
- Keep corners tight, borders visible, and surfaces layered like physical terminal modules.

### Motion

- Prefer cursor steps, signal sweeps, short acquisition pulses, and brief tracking interference.
- Motion must confirm scanning, transmission, lock, warning, or state change.
- Never use continuous glitch as ambient decoration, and always preserve the reduced-motion fallback.

## Usage

```html
<html data-theme="systems-84">
```

```html
<html data-theme="cyberpunk-1984">
```

```css
@import "@alloysforge/kairo-88/styles";
```

## Visual Primitives

- `.k88-system-label`: mono bracket label inherited from the `SYSTEMS_84` language.
- `.k88-clearance-label`: safety-red clearance or restricted-state label.
- `.k88-technical-grid`: technical background grid for panels, dashboards, and headers.
- `.k88-blueprint-grid`: more diagrammatic grid for system maps, previews, and technical areas.
- `.k88-intelligence-grid`: surveillance and evidence grid with a restrained diagonal trace.
- `.k88-signal-noise`: static analog tracking texture for feeds and signal readouts.
- `.k88-scanline`: subtle terminal/readout overlay with `prefers-reduced-motion` support.

## Rules

- Use `systems-84` as a complete preset, not as a loose palette mixed into Kairo 88.
- Use `cyberpunk-1984` as a complete preset; do not scatter its alert palette across unrelated themes.
- Treat Kojima as a creative-era reference, never as an affiliation or a license to copy franchise material.
- Keep radius low and borders visible.
- Prefer short mono text and uppercase only for labels and metadata.
- Use scan, sweep, pulse, or spin motion only when it communicates status, reading, or progress.
- Do not use Japanese elements as empty ornament; labels should communicate real context.

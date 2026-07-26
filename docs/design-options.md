# Design Options

Kairo 88 has four official visual directions. All use the same atoms, molecules, organisms, scale tokens, icons, and motion. The difference lives in the theme preset and the visual primitives applied to the product.

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

## Neko Mirai 84

The fourth direction imagines a humane Japanese future as it might have been pictured in 1984: precise domestic electronics, warm daylight, railway journeys, wind, gardens, hand-drawn animation warmth, and cats as attentive companions rather than mascots.

Use it for welcoming product surfaces, personal tools, creative software, learning, care, travel, cozy games, or any experience that needs technical credibility without menace.

Theme:

- `neko-mirai-84`

It combines the operational clarity of `cyberpunk-1984` with an optimistic emotional register. The direction is original: do not reproduce characters, creatures, logos, type treatments, scenes, or props from a particular filmmaker, studio, game, or franchise.

### Design Pillars

- **A future worth living in:** technology feels maintained, calm, domestic, and useful.
- **Companion intelligence:** cats represent presence, curiosity, and assistance only when the product has a real companion, helper, pet, or guide role.
- **Nature inside the machine:** morning sky, tea green, warm paper, wind traces, and ume pink soften technical grids without erasing them.
- **Feminine without stereotype:** warmth comes from care, color balance, typography, and confident composition—not bows, infantilization, or cosmetic clutter.
- **Animated restraint:** small arrivals, drifting indicators, and responsive signals suggest hand-drawn life while keeping work areas still.

### Typography and Layout

- Keep the established UI and mono families so the theme remains part of Kairo 88.
- Use sentence case for welcoming copy and uppercase mono only for status, routes, times, and device metadata.
- Pair orderly panels with one breathable region rather than filling every area with cards.
- Prefer warm solid surfaces, visible controls, fine grids, and an occasional soft diagonal suggesting wind or travel.

### Cats

- Use the `companion` icon for a real assistant, guide, pet state, or companion profile.
- Use `.k88-companion-label` for companion availability or relationship status.
- Do not scatter paws, ears, faces, or meows across unrelated controls.
- Critical actions still use conventional text and status semantics.

## Usage

```html
<html data-theme="systems-84">
```

```html
<html data-theme="cyberpunk-1984">
```

```html
<html data-theme="neko-mirai-84">
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
- `.k88-breeze-grid`: calm technical grid with dot and wind-trace cues for welcome, route, companion, and ambient status regions.
- `.k88-signal-noise`: static analog tracking texture for feeds and signal readouts.
- `.k88-scanline`: subtle terminal/readout overlay with `prefers-reduced-motion` support.
- `.k88-companion-label`: calm online, nearby, ready, or relationship-state label.

## Rules

- Use `systems-84` as a complete preset, not as a loose palette mixed into Kairo 88.
- Use `cyberpunk-1984` as a complete preset; do not scatter its alert palette across unrelated themes.
- Use `neko-mirai-84` as a complete preset; keep cats purposeful and the interface product-first.
- Treat Kojima as a creative-era reference, never as an affiliation or a license to copy franchise material.
- Treat animation filmmakers and studios as atmosphere references, never as a license to imitate protected characters, scenes, or signature assets.
- Keep radius low and borders visible.
- Prefer short mono text and uppercase only for labels and metadata.
- Use scan, sweep, pulse, or spin motion only when it communicates status, reading, or progress.
- Do not use Japanese elements as empty ornament; labels should communicate real context.

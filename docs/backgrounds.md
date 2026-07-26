# Backgrounds

Kairo 88 backgrounds are semantic product layers, not decorative presets. Applications should choose a role first and add texture only when it communicates context.

## Semantic Roles

| Token | Role | Typical use |
| --- | --- | --- |
| `--k88-color-bg` | Page | Application shell and full-page background. |
| `--k88-color-surface` | Surface | Panels, forms, tables, and primary content regions. |
| `--k88-color-surface-raised` | Raised surface | Menus, popovers, elevated tools, and selected regions. |
| `--k88-color-overlay` | Overlay base | Scrims composed with transparency by the consuming component. |
| `--k88-color-border` | Divider | Quiet layout separation and table rules. |
| `--k88-color-control-border` | Control boundary | Inputs and interactive boundaries that must remain visually identifiable. |
| `--k88-color-accent` | Accent surface | Selection and short emphasis regions. |
| `--k88-color-accent-text` | Accent content | Text and icons placed on the accent surface. |
| `--k88-color-danger` | Danger surface | Destructive or compromised actions. |
| `--k88-color-danger-text` | Danger content | Text and icons placed on the danger surface. |

The existing `border`, `primaryText`, and other public variables remain available. The new roles are additive and separate functional contrast from decorative hierarchy.

## Contrast Contract

- Normal and muted text must reach `4.5:1` against page, surface, and raised surface.
- Filled primary, accent, and danger content must reach `4.5:1` against their semantic background.
- Functional control boundaries must reach `3:1` against page and surface.
- Decorative dividers do not need to look like interactive control boundaries.
- Focus indicators must remain visible in standard and forced-color modes.

These requirements are enforced for every public theme by `tests/styles.test.js`.

## Texture Utilities

### `.k88-technical-grid`

Use for dashboards, technical headers, alignment areas, and low-density readouts.

### `.k88-blueprint-grid`

Use for diagrams, system maps, coordinates, and technical previews. Avoid behind paragraphs or form fields.

### `.k88-intelligence-grid`

Use for evidence maps, surveillance views, classified metadata, and the `cyberpunk-1984` direction.

### `.k88-breeze-grid`

Use for welcome regions, routes, companion status, gentle progress, and the `neko-mirai-84` direction. It keeps the Kairo grid but adds a restrained dot rhythm and diagonal wind trace.

### `.k88-signal-noise`

Use for analog feeds, signal diagnostics, and short status surfaces. It includes a raised-surface fallback.

### `.k88-scanline`

Use for bounded readouts rather than full application pages. The animated overlay is removed when the user requests reduced motion.

## Content Zones

Textures should frame information, not compete with it. Dense copy, inputs, tables, and metadata should sit on a solid semantic surface inside the textured region.

```html
<section class="k88-intelligence-grid" data-theme="cyberpunk-1984">
  <div class="k88-surface">
    <h2>Signal report</h2>
    <p>Readable content remains on a solid surface.</p>
  </div>
</section>
```

Do not combine more than one grid utility on the same element. `k88-signal-noise` and `k88-scanline` may be combined only for a bounded signal readout with short content.

The breeze grid is not a page wallpaper. Pair it with a solid content zone and use companion motifs only when the surface has an actual guide, pet, helper, route, or ambient-status function.

## Overlay Composition

The overlay token is intentionally opaque so consumers can choose the correct strength for modal, drawer, or media contexts.

```css
.app-scrim {
  background: color-mix(in srgb, var(--k88-color-overlay), transparent 36%);
}
```

Do not place reading text directly on a scrim.

## Accessibility Modes

- `prefers-reduced-motion` removes the scanline overlay and sweep animation.
- `forced-colors` restores system focus, control boundaries, labels, and status indicators.
- Texture utilities retain a solid background fallback or compose over an explicit `background-color`.
- Color never replaces text or icon status communication.

## Storybook

Use `Kairo 88 / Foundations / Backgrounds / Matrix` to review every semantic surface and texture across all public themes.

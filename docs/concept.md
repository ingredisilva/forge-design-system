# Concept: Kairo 88

## Mother Line

**Kairo 88 is a visual system for digital tools that feel born between a night-train control panel, a 1986 Japanese technology magazine, and a stereo with LEDs turned on.**

It should feel:

- precise, like equipment;
- cinematic, like a city at night;
- editorial, like a printed magazine;
- tactile, like a physical button;
- calm, like a tool that knows what it is doing.

## References Translated Into Product Language

### City Pop and LP Covers

Use color as atmosphere, not excess. Gradients may exist as special surfaces, hero backgrounds, charts, or premium states, but the main UI should work through solid fields, borders, and clear hierarchy.

Practical translation:

- accents in cyan, magenta, coral, amber, and mint;
- blue-black backgrounds for night themes;
- warm paper for light surfaces;
- geometric blocks, horizontal lines, and controlled asymmetrical compositions.

### Japanese 80s Electronics

Use panel logic: short labels, clear groupings, luminous states, and buttons with firm visual response.

Practical translation:

- compact buttons with icons and objective labels;
- 1px or 2px borders;
- low radius;
- active states with subtle glow;
- variants that recall physical controls without heavy skeuomorphism.

### Urban and Subway Signage

Use contrast and orientation. Users should always know where they are, what is clickable, and what action comes next.

Practical translation:

- navigation with strong states;
- legible breadcrumbs and tabs;
- status colors with stable meaning;
- grids for dense pages, tables, and forms.

### Editorial and Technical Manuals

Use concise headings, well-aligned metadata, and information blocks that feel deliberately typeset.

Practical translation:

- typography with moderate weights;
- smaller headings inside panels;
- uppercase labels only when they help scanning;
- mono for technical data, IDs, commands, and metrics.

## What To Avoid

- Kanji, hiragana, or katakana as decoration when the text has no real meaning.
- Pagodas, samurai, rising sun motifs, temples, and other generic visual shortcuts.
- Generic vaporwave dominated by purple/blue, palm trees, and infinite grids.
- Gradients on every surface.
- Cards inside cards.
- Oversized radius in operational components.
- Constant animation in work areas.
- Low contrast in the name of aesthetics.

## Personality

Kairo 88 speaks to the user like a competent and slightly cinematic tool.

UI tone:

- short;
- precise;
- confident;
- no jokes in critical flows;
- more expressive microcopy in empty states, onboarding, and completion moments.

Examples:

- "Synchronized"
- "Ready to review"
- "Upload failed"
- "Nothing in queue"
- "Open panel"
- "Export package"

## Palette

### Bases

- **Ink Night**: main dark background, almost black with a blue bias.
- **Carbon Rail**: raised dark surface.
- **Paper Warm**: light background with editorial warmth.
- **Porcelain**: clean light surface.
- **Steel Line**: borders, dividers, and inactive elements.

### Accents

- **Neon Cyan**: focus, links, primary action in dark theme.
- **Signal Magenta**: selection, expressive highlight, charts.
- **Vermilion**: error, strong alert, destructive action.
- **Amber Lamp**: warning, attention, pending states.
- **Mint Glass**: success, confirmed states, positive tags.
- **Indigo Dusk**: depth, navigation, secondary states.

### Recommended Proportion

- 70% neutrals and surfaces;
- 20% text, borders, and structure;
- 10% accents.

This proportion keeps the aesthetic present without turning work apps into posters.

## Typography

Recommended families:

- **Interface**: `Noto Sans`, `Noto Sans JP`, `Inter`, `system-ui`.
- **Technical display**: `IBM Plex Sans`, `Sora`, or `Space Grotesk`.
- **Mono**: `IBM Plex Mono`, `Roboto Mono`, `ui-monospace`.

Rules:

- body between 14px and 16px;
- labels between 11px and 13px;
- contained internal headings, with no hero-scale type inside panels;
- normal letter spacing by default;
- uppercase only in short labels, chips, and metadata.

## Shape

### Radius

- `2px`: technical controls, chips, badges.
- `4px`: buttons, inputs, selects.
- `8px`: cards and repeated containers.

Avoid radius larger than 8px as a default. Kairo 88 should feel cut, assembled, and industrial.

### Border

Borders are part of the identity. Use fine lines to structure information and strong lines only for focus, selection, or warning.

### Shadow

Shadows should be restrained. In dark themes, prefer glow and illuminated borders. In light themes, use short, dry shadows, like print over paper.

## Layout

Base:

- 4px spacing scale;
- 8px composition grid;
- containers with max-width by product type;
- sidebars and toolbars with stable dimensions;
- dense dashboards with enough breathing room between groups.

Recipes:

- operational tools: fixed sidebar, compact top bar, content with tables or panels;
- editorial apps: strong main column, side metadata, and visible separators;
- games and visual experiences: full-bleed main scene, technical HUD in layers;
- product sites: first viewport with a real image or strong visual scene, not only a gradient.

## Components

### Buttons

Buttons should feel like panel controls:

- 36px base height;
- icons on the left when the action is operational;
- visible focus;
- luminous primary variant;
- secondary variant with border;
- ghost variant only in toolbars or compact navigation.

### Inputs

Inputs should feel like clean terminal fields:

- solid background;
- always-visible border;
- external label;
- objective error messages;
- focus with cyan or amber border depending on context.

### Cards

Cards are for repeated items, modals, and truly contained tools. Page sections should not become floating cards.

### Navigation

Navigation needs an explicit active state: side rail, technical underline, illuminated bar, or controlled fill.

### Tables

Tables are first-class citizens:

- adjustable density;
- sticky header when useful;
- optional subtle zebra striping;
- status with color + text;
- row actions with icons.

### Feedback

Toasts, alerts, and banners use the same status logic:

- error: vermilion;
- warning: amber;
- success: mint;
- information: cyan;
- neutral: steel.

### Icons

Icons are panel signals, not illustrations. Use simple stroke, `currentColor`, a 24px `viewBox`, and intent-based names. The library may accept Lucide or another equivalent package in adapters, but it should preserve a Kairo naming layer to avoid product coupling.

Rules:

- operational buttons should combine icon and text when the action is not universal;
- toolbars can use icon-only buttons with tooltips;
- status needs icon + text or icon + label;
- decorative icons should be rare;
- critical actions should never depend only on an icon.

## Motion

Motion should feel like electronic response:

- transitions between 120ms and 220ms;
- firm easing;
- loading states with horizontal sweep or short pulse;
- icons can spin, pulse, or light up when they communicate progress or life;
- boot sequence only in special experiences, never in recurring flows;
- no permanent animation in work screens.

## Texture

Textures are optional and controlled:

- 1px scanline with very low opacity;
- fine noise on hero surfaces or covers;
- occasional halftone for illustrations and empty states;
- never reduce text readability.

## Themes

### Midnight

Main theme. Night background, neon accents, carbon surfaces, and cool borders.

Ideal use:

- dashboards;
- creative tools;
- devtools;
- games;
- apps with night usage.

### Daylight

Editorial light theme. Warm paper, ink lines, and more contained accents.

Ideal use:

- docs;
- operational SaaS;
- long forms;
- reading tools.

### Arcade

Expressive theme. More contrast, more accent, more glow.

Ideal use:

- demos;
- interactive marketing;
- games;
- special states.

### Paper

Minimal theme. Almost no neon, closer to a technical manual.

Ideal use:

- documentation;
- administration;
- corporate environments.

## Accessibility

Required rules:

- minimum AA contrast for common text;
- focus always visible;
- state never communicated by color alone;
- interactive targets of at least 36px on desktop and 44px on touch;
- reduced motion support;
- text must not depend on negative letter spacing or viewport-fluid type.

## Visual Signature

An app using Kairo 88 should be recognizable through:

- luminous accents over a controlled base;
- present borders;
- low radius;
- technical and legible typography;
- active states with display energy;
- grid composition;
- retro details used sparingly.

If the interface feels like a poster, it went too far. If it feels like plain dark Bootstrap, it still needs soul.

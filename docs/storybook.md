# Storybook

Storybook is the official Kairo 88 workbench. It should document visual decisions, expose isolated components, show hard-to-reach states, and act as a visual review surface before any consumer project updates the library version.

## Stack

- Storybook 10;
- Web Components with Vite;
- CSS and tokens as the source of truth;
- stories in TypeScript, rendering DOM/HTML;
- Atomic Design organization.

This keeps the design system independent from React, Vue, or any product framework. Adapters can come later.

## Commands

```bash
npm install
npm run build:tokens
npm run storybook
npm run build-storybook
npm test
```

## Organization

- `.storybook/main.ts`: registers stories, addon docs, framework, and icon sprite.
- `.storybook/preview.ts`: imports global CSS and adds the theme selector.
- `.storybook/storybook-theme.css`: presentation-only styles for stories.
- `src/stories/foundations`: concept, tokens, scales, and themes.
- `src/stories/foundations/design-options.stories.ts`: comparison between Kairo 88, `systems-84`, `cyberpunk-1984`, and `neko-mirai-84`.
- `src/stories/atoms`: buttons, fields, badges, and icons.
- `src/stories/molecules`: small compositions, such as panel.
- `src/stories/organisms`: composed sections, such as table.
- `src/stories/motion`: animation utilities and signal panel.

## Rules

- A story must not depend on a consumer app.
- A story must use real library classes and tokens.
- Presentation-only styling lives in `.storybook/storybook-theme.css`.
- A story must live in the correct Atomic Design layer.
- A new component needs at least one story with its main states.
- A new component needs a test for its visual contract or expected behavior.
- Critical states must show text, icon, and color.
- Motion must respect `prefers-reduced-motion`.

## Next Steps

- add stories for `select`, `checkbox`, `radio`, `switch`, `toast`, `modal`, and `tabs`;
- add visual tests when the pipeline exists;
- create density stories for tables and dashboards;
- publish `storybook-static` as internal documentation.

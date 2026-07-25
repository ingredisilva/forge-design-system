# Testing

Kairo 88 should be maintained as infrastructure. Any token, CSS, icon, or story change should fail fast when it breaks the visual contract or documentation.

## Commands

```bash
npm test
npm run test:storybook
npm run test:ci
```

The test scripts run `npm run build:tokens` before the suite to ensure generated CSS reflects the token sources.

## What `npm test` Covers

### Tokens

- foundation groups exist;
- references such as `{color.accent.neonCyan}` resolve;
- colors use hex values or valid references;
- dimensions use `px`;
- radius respects the 8px limit;
- motion remains short and intentional.

### CSS

- all themes expose the semantic color variables;
- the CSS bundle is read by resolving imports through Atomic Design;
- `src/styles/foundations/tokens.css` is synchronized with token files;
- primary contrast pairs pass AA;
- base component classes exist;
- motion classes exist;
- `prefers-reduced-motion` is present;
- base CSS avoids negative letter spacing and viewport-scaled type.

### Icons

- the sprite has the same names exposed in `story-utils`;
- all icons use `viewBox="0 0 24 24"`;
- all icons inherit color with `currentColor`;
- direct references in docs, examples, and stories point to existing symbols.

### Stories

- JavaScript files pass syntax checks;
- preview exposes all themes;
- the main Storybook areas remain covered: foundations, atoms, molecules, organisms, and motion.

## What `test:storybook` Covers

`test:storybook` runs the Storybook test build. Use it when you want to validate the integration between stories, Vite, global CSS, addon docs, and static assets.

## What `test:ci` Covers

`test:ci` runs the unit suite and then the full Storybook build. This should be the default command for CI.

## Evolution

When the library gains behavior-heavy components, add:

- interaction tests;
- visual snapshots;
- axe/accessibility checks;
- adapter tests, such as React or Vue;
- consumer smoke tests in an example app.

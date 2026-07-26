# Product Roadmap

## Purpose

This roadmap moves Kairo 88 from a published foundation package to a production-ready design system used safely across multiple products.

Work is ordered by user risk and dependency. Accessibility and visual reliability come before component volume, and framework adapters come only after the CSS and token contracts are stable.

## Current Baseline

- [x] Atomic Design CSS structure.
- [x] Generated semantic theme tokens.
- [x] TypeScript contracts and Storybook stories.
- [x] Public themes: `kairo-midnight`, `systems-84`, `cyberpunk-1984`, `neko-mirai-84`, `kairo-daylight`, `kairo-arcade`, and `kairo-paper`.
- [x] Buttons, inputs, badges, labels, panels, tables, icons, textures, and motion utilities.
- [x] Unit tests for tokens, generated CSS, theme contrast, icons, and story coverage.
- [x] CI, npm release, and Storybook Pages workflows.
- [x] Published package and documented consumer installation.

## Priority Model

- **P0:** blocks accessible production use or can create regressions across every consumer.
- **P1:** required for complete product workflows and reliable visual review.
- **P2:** improves adoption, framework ergonomics, and maintainability.
- **P3:** expands the system after its contracts and governance are stable.

## Milestone 0.1.1: Background Reliability

Priority: P0
Status: In progress

Outcome: every solid background, textured surface, control boundary, and reduced-motion state is safe for production.

### Foundations

- Add `--k88-color-control-border` instead of using the decorative divider token for form boundaries.
- Add `--k88-color-accent-text` instead of reusing primary button text on accent backgrounds.
- Define explicit semantic roles for page, surface, raised surface, divider, control boundary, and overlay.
- Document where technical grid, blueprint grid, intelligence grid, signal noise, and scanline may be used.
- Define a texture-free content zone for paragraphs, forms, tables, and dense metadata.

### CSS

- Move input and interactive control boundaries to the control-border token.
- Preserve the quieter border token for panels, table dividers, and layout separation.
- Disable scanline animation completely under `prefers-reduced-motion`.
- Verify that texture utilities compose with `background-color` and do not erase consumer fallbacks.
- Add forced-colors behavior for controls, focus indicators, and status labels.

### Tests

- Test normal and muted text against page, surface, and raised-surface backgrounds.
- Test selection text against accent backgrounds.
- Require at least `3:1` contrast for functional control boundaries.
- Require at least `4.5:1` for normal text and `3:1` for large text.
- Verify that animated texture overlays stop under reduced motion.
- Add a Storybook matrix showing every background utility in every theme.

### Exit Criteria

- All semantic text pairs pass WCAG AA.
- Every input and control boundary reaches `3:1` against its adjacent surface.
- No continuously animated background remains active under reduced motion.
- Background guidance and visual examples are published in Storybook.
- `npm run test:ci` and the consumer smoke test pass.

## Milestone 0.2.0: Interaction-Ready Atoms

Priority: P1

Outcome: product teams can build complete, accessible forms without creating local replacements.

### Components

- Select.
- Checkbox.
- Radio.
- Switch.
- Textarea.
- Chip and removable chip.
- Tooltip.
- Spinner and progress.
- Field help, error, success, required, read-only, disabled, and loading states.

### Engineering

- Keep state styles driven by semantic tokens.
- Define stable control dimensions and density variants.
- Add keyboard and focus-visible behavior.
- Add accessible names, descriptions, validation messaging, and error relationships.
- Cover pointer, keyboard, touch, and disabled behavior.

### Exit Criteria

- Every atom has a typed contract, Storybook story, accessibility notes, and state coverage.
- Controls work at desktop and mobile dimensions without layout shift.
- Keyboard-only workflows are complete.
- Automated accessibility checks report no critical or serious violations.

## Milestone 0.3.0: Product Workflows

Priority: P1

Outcome: Kairo 88 supports repeated application workflows, not only isolated controls.

### Molecules

- Form group and form actions.
- Search field.
- Alert.
- Toast.
- Pagination.
- Tabs.
- Empty state.
- Command item.

### Organisms

- Navigation rail.
- Top bar.
- Modal.
- Drawer.
- Command palette.
- Data table with sorting, selection, loading, empty, and error states.
- Responsive form layout.

### Visual Regression

- Add deterministic screenshots for every theme and critical state.
- Test at representative desktop and mobile viewports.
- Include focus, hover, disabled, error, loading, empty, and overflow states.
- Block pull requests when approved visual baselines change unexpectedly.

### Exit Criteria

- At least one consumer-style dashboard and one form workflow use only library primitives.
- Critical flows pass keyboard, accessibility, visual, and responsive checks.
- Components do not require consumer CSS overrides for their documented use cases.

## Milestone 0.4.0: Consumer Integration

Priority: P2

Outcome: projects can adopt and upgrade the package with predictable effort.

### Package Architecture

- Keep the framework-independent CSS, tokens, icons, and TypeScript contract as the core package.
- Publish documented CSS layer ordering and supported browser targets.
- Add a consumer fixture that installs the packed tarball rather than importing repository files.
- Add export-contract tests for every public package path.
- Define a compatibility matrix for Node, browsers, Storybook, and future adapters.

### Adapters

- Add a React adapter only after two real consumers need the same component behavior.
- Add Vue or other adapters only from demonstrated product demand.
- Keep adapter APIs aligned with the framework-independent semantic contract.
- Test adapters against the packed package and shared interaction expectations.

### Documentation

- Add copy-ready installation examples for Vite, Next.js, Vue, and static HTML.
- Publish theme-selection and persistence examples.
- Generate README and theme gallery images from Storybook to prevent stale screenshots.
- Add migration notes for every public token or contract change.

### Exit Criteria

- A clean consumer project installs the tarball and renders every public theme.
- Public exports, CSS, icons, JSON, and types resolve without repository-relative paths.
- Upgrade instructions exist for every breaking or deprecated API.

## Milestone 1.0.0: Stable Governance

Priority: P2

Outcome: Kairo 88 has a stable public contract and a repeatable contribution and release model.

### Governance

- Define component proposal and design review templates.
- Define token naming, deprecation, and removal policies.
- Add a compatibility and browser-support policy.
- Require changelog entries for user-visible changes.
- Require accessibility, visual, interaction, and consumer checks before release.
- Establish ownership for foundations, components, documentation, and release automation.

### Release Readiness

- No unresolved P0 accessibility findings.
- Public contracts remain stable across at least two minor releases.
- Trusted Publishing and tag releases are verified end to end.
- Storybook Pages matches the released npm version.
- At least two real projects consume the package without private patches.

## Later Backlog

Priority: P3

- Date and time controls.
- Combobox and autocomplete.
- Tree and hierarchical navigation.
- Charts and data-visualization tokens.
- Drag and drop.
- Internationalization and bidirectional layout.
- High-contrast theme.
- Native mobile token adapters.

## Definition of Done

A component or foundation change is complete only when it has:

- semantic tokens without unexplained visual hard-coding;
- typed public contracts where applicable;
- hover, active, focus, disabled, loading, empty, and error states where applicable;
- dark, light, `systems-84`, `cyberpunk-1984`, and `neko-mirai-84` coverage;
- responsive and overflow behavior;
- keyboard and screen-reader behavior;
- contrast and reduced-motion validation;
- Storybook documentation and examples;
- unit, interaction, visual, and consumer tests proportional to risk;
- changelog or migration documentation when public behavior changes.

## Required Release Gates

```bash
npm ci
npm run test:ci
npm run pack:dry-run
```

The release workflow must also pass accessibility checks, visual regression checks, and packed-package consumer tests once those gates are introduced.

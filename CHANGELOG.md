# Changelog

All notable changes to Kairo 88 will be documented in this file.

This project follows semantic versioning once published.

## [Unreleased]

## [0.3.0] - 2026-07-26

### Added

- `neko-mirai-84`, an optimistic Japanese 1984 theme with warm paper, morning sky, ume pink, tea green, and a companion-led product tone.
- `companion` icon, companion status label, and breeze-grid visual primitive for purposeful guide, pet, route, and ambient-status surfaces.

### Fixed

- Theme comparison stories now isolate inherited text colors when dark and light presets are rendered together.

## [0.2.0] - 2026-07-26

### Added

- `cyberpunk-1984` theme with an original Japanese 80s analog intelligence and techno-thriller direction.
- Intelligence grid, signal noise, and clearance label visual primitives.
- Semantic `overlay`, `controlBorder`, `accentText`, and `dangerText` theme tokens.
- Storybook background matrix and production usage guidance.
- Forced-colors support for controls, focus indicators, and status labels.
- TypeScript theme and icon contracts with compiled package exports and declarations.
- Component previews in the README and a production-readiness roadmap.

### Changed

- Storybook configuration, stories, token generation, and public contracts now use TypeScript.
- Inputs now use a functional control boundary while legacy divider borders remain available.
- Selection and danger buttons now use dedicated semantic text colors.
- Scanline animation is removed when reduced motion is requested.

## [0.1.0] - 2026-07-09

### Added

- Initial Kairo 88 design system foundations.
- Atomic Design CSS structure for foundations, atoms, molecules, organisms, and motion.
- Generated CSS token pipeline from JSON token sources.
- Public themes: `kairo-midnight`, `systems-84`, `kairo-daylight`, `kairo-arcade`, and `kairo-paper`.
- SVG icon sprite and public icon contract.
- Storybook documentation and production build.
- Test coverage for tokens, generated CSS, icon contract, stories, themes, and motion safeguards.

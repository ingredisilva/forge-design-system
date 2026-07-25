# Roadmap

## Phase 0: Foundation

Goal: turn the concept into reusable rules.

- consolidate color, spacing, typography, radius, shadow, and motion tokens;
- define `midnight`, `daylight`, `arcade`, and `paper` themes;
- organize CSS and stories with Atomic Design;
- generate theme CSS from tokens;
- create CSS variables consumable by any app;
- configure Storybook as the documentation workbench;
- document accessibility and density rules.

## Phase 1: Primitives

Goal: create basic blocks without locking into a framework.

- reset/base CSS;
- typography;
- icon sprite and contract;
- motion utilities;
- button;
- input;
- select;
- checkbox;
- radio;
- switch;
- badge;
- chip;
- tooltip;
- spinner/progress.

## Phase 2: Product Components

Goal: cover real workflows.

- navigation rail;
- top bar;
- tabs;
- command palette;
- modal;
- drawer;
- toast;
- alert;
- card;
- table;
- empty state;
- pagination;
- date/time controls;
- form layout.

## Phase 3: Adapters

Goal: support usage across multiple projects.

- pure CSS package;
- React package;
- Vue package, if needed;
- JSON token package;
- documentation with examples;
- Storybook build for published documentation;
- app templates.

## Phase 4: Governance

Goal: maintain consistency across projects.

- semantic versioning;
- changelog;
- compatibility matrix;
- visual snapshots;
- contribution checklist;
- rules for creating new components.

## Quality Criteria

A component only enters the library when it has:

- tokens without visual hard-coding;
- hover, active, focus, disabled, and loading states when applicable;
- behavior in dark and light themes;
- short documentation;
- usage examples;
- contrast validation;
- stable dimensions on desktop and mobile.

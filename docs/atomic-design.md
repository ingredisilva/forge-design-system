# Atomic Design

Kairo 88 uses Atomic Design as its composition architecture. The point is not to create pretty folders; it is to limit responsibility, reduce coupling, and make it clear where each decision belongs.

## Layers

### Foundations

The base of the system:

- tokens;
- themes;
- reset/base;
- typography;
- spacing;
- radius;
- motion;
- icon contract.

Main files:

- `tokens/kairo-88.tokens.json`;
- `tokens/kairo-88.themes.json`;
- `src/styles/foundations`;
- `src/contracts/kairo.ts`.

### Atoms

The smallest reusable blocks with their own visual behavior:

- button;
- icon;
- icon button;
- status dot;
- badge;
- field;
- input.

Atoms should not know about molecules or organisms.

### Molecules

Small combinations of atoms that already represent an interface unit:

- panel;
- grouped controls;
- summary with label + metric + status.

Molecules can contain atoms, but they should not assume page layout.

### Organisms

Sections or composed components for real workflows:

- table;
- navigation rail;
- top bar;
- command palette;
- modals and drawers.

Organisms can contain molecules and atoms.

### Templates and Pages

These do not exist as package exports yet. When they arrive, they should live in examples or consumer apps, not in the library core, unless they are official reusable templates.

## CSS

The public entrypoint remains:

```css
@import "@alloysforge/kairo-88/styles";
```

Internally, it imports:

- `foundations/tokens.css`;
- `foundations/base.css`;
- `atoms/*.css`;
- `molecules/*.css`;
- `organisms/*.css`;
- `motion/*.css`.

## Generated Tokens

`src/styles/foundations/tokens.css` is generated. Do not edit it manually.

Use:

```bash
npm run build:tokens
```

Sources:

- `tokens/kairo-88.tokens.json`;
- `tokens/kairo-88.themes.json`.

## Promotion Rule

A component moves up a layer when it gains responsibility:

- if it is an indivisible piece, it is an atom;
- if it combines atoms into a small unit, it is a molecule;
- if it solves a section or workflow, it is an organism.

If a piece needs to know about app data, routes, permissions, or API calls, it does not belong in the design system core.

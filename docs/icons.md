# Icons

## Direction

Kairo 88 icons feel like panel signals: clean strokes, simple geometry, slightly technical corners, and immediate readability. They are not mascots or tiny illustrations. They are commands, states, and orientation points.

The system should remain compatible with stroke icon libraries such as Lucide in frontend adapters. Custom icons are reserved for visual signature, navigation, states, and symbols the library needs to carry without external dependencies.

## Principles

1. **Function first**
   An icon exists to identify an action, state, or area. If it does not improve scannability, use text.

2. **Consistent visual weight**
   All icons use `viewBox="0 0 24 24"`, stroke between `1.75` and `2`, and no fill by default.

3. **Inherited color**
   Icons use `currentColor`. The component controls color, state, and contrast.

4. **Text for critical actions**
   Destructive, financial, irreversible, or ambiguous actions need a visible label.

5. **Purposeful animation**
   Icons can spin, pulse, or sweep when they communicate progress, life, or state change. Do not animate decorative icons in work screens.

## Sizes

- `xs`: 16px, used in badges, metadata, and dense tables.
- `sm`: 20px, used in compact buttons, tabs, and menus.
- `md`: 24px, used in navigation, empty states, and toolbars.
- `lg`: 32px, used in empty states, summary cards, and visual calls.

Clickable controls should have a target area larger than the icon:

- desktop: 36px;
- touch: 44px.

## Names

Use intent-based names, not visual-shape names:

- `dashboard`
- `component`
- `tokens`
- `status`
- `guidelines`
- `play`
- `review`
- `check`
- `alert`
- `spark`
- `sync`
- `palette`
- `terminal`
- `system-map`

When an adapter uses an external library, map it in one place. Example: `dashboard` can point to `LayoutDashboard` in React without spreading library-specific names through the product.

## HTML Usage

```html
<svg class="k88-icon" aria-hidden="true">
  <use href="/src/icons/kairo-icons.svg#k88-icon-dashboard"></use>
</svg>
```

Informational icons should have accessible text:

```html
<svg class="k88-icon" role="img" aria-label="Synchronized">
  <use href="/src/icons/kairo-icons.svg#k88-icon-check"></use>
</svg>
```

## Visual Rules

- Do not mix filled icons with stroke icons in the same toolbar.
- Do not use an icon as the only status differentiator; combine it with text, label, or tooltip.
- Do not stretch SVG.
- Do not use gradients inside functional icons.
- Do not create overly illustrative icons for common actions.
- Do not use Japanese decorative icons without a clear function.

## States

- `default`: text color or muted text.
- `hover`: same color as text with raised surface.
- `active`: primary accent or selected surface.
- `disabled`: reduced opacity and no animation.
- `danger`: semantic danger color, always with text for critical actions.

## Allowed Animations

- `spin`: continuous progress.
- `pulse`: live, connected, or monitoring service.
- `flicker`: short confirmation, like an LED turning on.
- `sweep`: reading, scanner, or signal refresh.

All of them must respect `prefers-reduced-motion`.

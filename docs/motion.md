# Motion

## Direction

Kairo 88 motion should feel like electronic response: fast, precise, and luminous. The reference is a display lighting up, a physical button responding, or a scan line moving across a panel. Nothing should feel rubbery, theatrical, or constantly animated.

## Principles

1. **Feedback before spectacle**
   Motion confirms cause and effect: click, focus, loading, selection, success, alert.

2. **Short by default**
   Most transitions stay between `120ms` and `240ms`.

3. **Energy in the right moments**
   More expressive animation belongs in onboarding, empty states, demos, and visual experiences.

4. **No operational noise**
   Dashboards, tables, and forms should not have permanent animations competing with data.

5. **Reduced motion is required**
   Everything that moves must degrade well with `prefers-reduced-motion`.

## Tokens

- `micro`: 90ms, almost instant response.
- `fast`: 120ms, hover, press, and focus.
- `base`: 180ms, common state changes.
- `slow`: 240ms, panel and toast entrance.
- `emphasis`: 360ms, visual confirmation or special highlight.
- `loop`: 1200ms, subtle continuous progress.

Easing:

- `standard`: common transitions.
- `snap`: press, pop, and short entrance.
- `scan`: linear sweep, loading, and signal reading.

## Patterns

### Press

Buttons and controls move down 1px or reduce scale to confirm touch. The return should be quick.

### Focus Glow

Focus uses border and halo. The glow is functional, not decoration.

### Boot

Screen or panel entrance can use opacity plus a small vertical offset. Use it for blocks that appear after navigation, never for bulk table rows.

### Pulse

Live, online, or monitoring states can pulse with a light shadow. The pulse should be slow and optional.

### Sweep

A luminous band crosses a surface to indicate scanning, refresh, or loading.

### Flicker

Short confirmation, like an LED turning on. It should happen once, not loop.

### Spin

Only for indeterminate loading. Use simple icons.

## Utility Classes

- `.k88-animate-in`
- `.k88-animate-pulse`
- `.k88-animate-sweep`
- `.k88-animate-spin`
- `.k88-animate-flicker`

These classes are the first technical base. Real components can encapsulate the same animations with semantic names.

## When Not To Use Motion

- In long lists with many simultaneous items.
- In labels, financial data, or critical metrics.
- In persistent alerts.
- In any element that must remain stable for reading.

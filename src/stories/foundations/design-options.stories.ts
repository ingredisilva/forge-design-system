import { badge, icon, renderStory, storyHeader, type KairoIcon } from "../shared/story-utils";

export default {
  title: "Kairo 88/Foundations/Design Options",
  tags: ["autodocs"]
};

type DesignOption = {
  theme: string;
  label: string;
  title: string;
  lede: string;
  meta: string;
  primaryIcon: KairoIcon;
};

function designOption({ theme, label, title, lede, meta, primaryIcon }: DesignOption): string {
  return `
    <section data-theme="${theme}" class="k88-panel k88-scanline" style="background: var(--k88-color-surface); color: var(--k88-color-text); overflow: hidden">
      <div class="k88-technical-grid" style="padding: var(--k88-space-5)">
        <div class="sb-k88-row" style="justify-content: space-between">
          <span class="k88-system-label">${label}</span>
          ${badge("info", meta, primaryIcon)}
        </div>

        <div style="margin-top: var(--k88-space-8); display: grid; gap: var(--k88-space-3)">
          <h2 style="font: 700 24px/1.1 var(--k88-font-display); margin: 0">${title}</h2>
          <p style="color: var(--k88-color-text-muted); font: 400 14px/1.7 var(--k88-font-ui); margin: 0">${lede}</p>
        </div>

        <div class="sb-k88-row" style="margin-top: var(--k88-space-6)">
          <button class="k88-button" type="button">${icon(primaryIcon, "sm")}Open panel</button>
          <button class="k88-button" type="button" data-variant="secondary">${icon("review", "sm")}Review</button>
        </div>
      </div>
    </section>
  `;
}

export const Presets = {
  render: () =>
    renderStory(`
      ${storyHeader(
        "Foundations",
        "Design Options",
        "The library has four visual directions: the Japanese 80s Kairo base, technical Systems 84, tense Cyberpunk 1984, and the gentle, companion-led future of Neko Mirai 84."
      )}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${designOption({
          theme: "kairo-midnight",
          label: "KAIRO_88",
          title: "Contained neon for product UI",
          lede: "More city pop, electronic display, and urban signage. Ideal for apps with visual energy, dashboards, and creative tools.",
          meta: "SIGNAL",
          primaryIcon: "spark"
        })}

        ${designOption({
          theme: "systems-84",
          label: "SYSTEMS_84",
          title: "Technical lab and terminal",
          lede: "Almost-black background, rigid panels, blueprint grid, industrial green, amber alerts, and mono microcopy.",
          meta: "SYS_READY",
          primaryIcon: "terminal"
        })}

        ${designOption({
          theme: "cyberpunk-1984",
          label: "CP_1984",
          title: "Analog intelligence techno-thriller",
          lede: "Phosphor olive, aged ivory, safety red, surveillance grids, classified metadata, and restrained signal interference.",
          meta: "CLEARANCE_04",
          primaryIcon: "system-map"
        })}

        ${designOption({
          theme: "neko-mirai-84",
          label: "NEKO_MIRAI_84",
          title: "A gentle future with precise controls",
          lede: "Warm paper, morning sky, ume pink, tea green, domestic electronics, wind, travel, and a feline companion spirit. Optimistic without becoming childish.",
          meta: "COMPANION_ON",
          primaryIcon: "companion"
        })}
      </div>

      <div class="k88-panel" data-theme="systems-84" style="color: var(--k88-color-text); margin-top: var(--k88-space-8); overflow: hidden">
        <div class="k88-panel__header">
          <div class="k88-panel__title">${icon("system-map", "xs")}Systems 84 primitives</div>
          <div class="k88-panel__meta">FROM INGRD PORTFOLIO</div>
        </div>
        <div class="k88-panel__body">
          <div class="sb-k88-grid">
            <div class="k88-blueprint-grid" style="border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-system-label">BLUEPRINT GRID</span>
            </div>
            <div class="k88-scanline" style="background: var(--k88-color-surface-raised); border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-system-label">SCANLINE</span>
            </div>
            <div class="k88-technical-grid" style="border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-system-label">TECHNICAL GRID</span>
            </div>
          </div>
        </div>
      </div>

      <div class="k88-panel" data-theme="cyberpunk-1984" style="color: var(--k88-color-text); margin-top: var(--k88-space-4); overflow: hidden">
        <div class="k88-panel__header">
          <div class="k88-panel__title">${icon("terminal", "xs")}Cyberpunk 1984 primitives</div>
          <div class="k88-panel__meta">ORIGINAL KAIRO INTERPRETATION</div>
        </div>
        <div class="k88-panel__body">
          <div class="sb-k88-grid">
            <div class="k88-intelligence-grid" style="border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-clearance-label">CLEARANCE 04</span>
            </div>
            <div class="k88-signal-noise" style="border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-system-label">SIGNAL TRACE</span>
            </div>
            <div class="k88-scanline" style="background: var(--k88-color-surface-raised); border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-system-label">ANALOG FEED</span>
            </div>
          </div>
        </div>
      </div>

      <div class="k88-panel" data-theme="neko-mirai-84" style="color: var(--k88-color-text); margin-top: var(--k88-space-4); overflow: hidden">
        <div class="k88-panel__header">
          <div class="k88-panel__title">${icon("companion", "xs")}Neko Mirai 84 primitives</div>
          <div class="k88-panel__meta">GENTLE FUTURE / 1984</div>
        </div>
        <div class="k88-panel__body">
          <div class="sb-k88-grid">
            <div class="k88-breeze-grid" style="background-color: var(--k88-color-surface-raised); border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-companion-label">COMPANION ONLINE</span>
            </div>
            <div class="k88-technical-grid" style="background-color: var(--k88-color-surface); border: 1px solid var(--k88-color-border); min-height: 150px; padding: var(--k88-space-4)">
              <span class="k88-system-label">MORNING ROUTE</span>
            </div>
            <div style="align-content: end; background: linear-gradient(155deg, var(--k88-color-surface-raised), color-mix(in srgb, var(--k88-color-accent), transparent 82%)); border: 1px solid var(--k88-color-border); display: grid; min-height: 150px; padding: var(--k88-space-4)">
              <span style="color: var(--k88-color-text-muted); font: 500 12px/1.6 var(--k88-font-ui)">Technology feels cared for, inhabited, and ready to help.</span>
            </div>
          </div>
        </div>
      </div>
    `)
};

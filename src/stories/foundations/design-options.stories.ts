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
    <section data-theme="${theme}" class="k88-panel k88-scanline" style="background: var(--k88-color-surface); overflow: hidden">
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
        "The library now has two visual directions: Kairo 88 as the Japanese 80s product system base and Systems 84 as the technical preset imported from the ingrd portfolio."
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
      </div>

      <div class="k88-panel" data-theme="systems-84" style="margin-top: var(--k88-space-8); overflow: hidden">
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
    `)
};

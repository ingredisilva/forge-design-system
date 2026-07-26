import { themes } from "../../contracts/kairo";
import { renderStory, storyHeader } from "../shared/story-utils";

export default {
  title: "Kairo 88/Foundations/Backgrounds",
  tags: ["autodocs"]
};

const textures = [
  { className: "k88-technical-grid", label: "Technical grid" },
  { className: "k88-blueprint-grid", label: "Blueprint grid" },
  { className: "k88-intelligence-grid", label: "Intelligence grid" },
  { className: "k88-signal-noise", label: "Signal noise" },
  { className: "k88-scanline", label: "Scanline" }
] as const;

function solidSample(label: string, background: string, foreground: string, muted: string): string {
  return `
    <div style="background: ${background}; border: 1px solid var(--k88-color-control-border); color: ${foreground}; min-height: 112px; padding: var(--k88-space-4)">
      <strong style="display: block; font: 700 13px/1 var(--k88-font-display)">${label}</strong>
      <span style="color: ${muted}; display: block; font: 400 12px/1.5 var(--k88-font-ui); margin-top: var(--k88-space-3)">
        Normal and muted content remain readable on this semantic layer.
      </span>
    </div>
  `;
}

function textureSample(className: string, label: string): string {
  return `
    <div class="${className}" style="background-color: var(--k88-color-surface-raised); border: 1px solid var(--k88-color-border); min-height: 132px; padding: var(--k88-space-3)">
      <span class="k88-system-label">${label}</span>
      <div style="background: var(--k88-color-surface); color: var(--k88-color-text); margin-top: var(--k88-space-5); padding: var(--k88-space-3)">
        <strong style="display: block; font: 700 12px/1 var(--k88-font-display)">Content zone</strong>
        <span style="color: var(--k88-color-text-muted); display: block; font: 400 11px/1.5 var(--k88-font-ui); margin-top: var(--k88-space-2)">
          Dense copy stays on a solid surface.
        </span>
      </div>
    </div>
  `;
}

function themeMatrix(theme: (typeof themes)[number]): string {
  return `
    <section data-theme="${theme.value}" style="background: var(--k88-color-bg); border: 1px solid var(--k88-color-border); color: var(--k88-color-text); padding: var(--k88-space-5)">
      <div class="sb-k88-row" style="justify-content: space-between">
        <div>
          <div class="sb-k88-eyebrow">${theme.title}</div>
          <h2 style="font: 700 20px/1 var(--k88-font-display); margin: 0">${theme.value}</h2>
        </div>
        <span class="k88-clearance-label">AA VERIFIED</span>
      </div>

      <h3 style="font: 700 13px/1 var(--k88-font-display); margin: var(--k88-space-6) 0 var(--k88-space-3)">Semantic surfaces</h3>
      <div class="sb-k88-grid">
        ${solidSample("Page", "var(--k88-color-bg)", "var(--k88-color-text)", "var(--k88-color-text-muted)")}
        ${solidSample("Surface", "var(--k88-color-surface)", "var(--k88-color-text)", "var(--k88-color-text-muted)")}
        ${solidSample("Raised", "var(--k88-color-surface-raised)", "var(--k88-color-text)", "var(--k88-color-text-muted)")}
        ${solidSample("Accent", "var(--k88-color-accent)", "var(--k88-color-accent-text)", "var(--k88-color-accent-text)")}
      </div>

      <div class="sb-k88-row" style="margin-top: var(--k88-space-4)">
        <div class="k88-field" style="min-width: min(100%, 280px)">
          <label for="boundary-${theme.value}">Control boundary</label>
          <input class="k88-input" id="boundary-${theme.value}" value="Visible at 3:1 or better" readonly />
        </div>
        <button class="k88-button" type="button" data-variant="danger">Danger action</button>
      </div>

      <h3 style="font: 700 13px/1 var(--k88-font-display); margin: var(--k88-space-6) 0 var(--k88-space-3)">Texture utilities</h3>
      <div class="sb-k88-grid">
        ${textures.map((texture) => textureSample(texture.className, texture.label)).join("")}
      </div>
    </section>
  `;
}

export const Matrix = {
  render: () =>
    renderStory(`
      ${storyHeader(
        "Foundations",
        "Background reliability",
        "Every theme exposes readable semantic layers, visible control boundaries, safe filled actions, and textures that preserve a solid content zone."
      )}

      <div class="sb-k88-stack" style="margin-top: var(--k88-space-8)">
        ${themes.map(themeMatrix).join("")}
      </div>
    `)
};

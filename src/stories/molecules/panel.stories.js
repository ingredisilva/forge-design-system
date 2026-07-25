import { badge, panel, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Molecules/Panel",
  tags: ["autodocs"]
};

export const Panel = {
  render: () =>
    renderStory(`
      ${storyHeader("Molecule", "Panel", "Panel combines surface, header, title, metadata, and content. It is the base unit for dashboards and tools.")}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${panel(
          "Signal readout",
          "LIVE / 14:08",
          `
            <div class="sb-k88-stack">
              <strong style="font: 700 32px/1 var(--k88-font-display)">88.4%</strong>
              <span style="color: var(--k88-color-text-muted)">Stable synchronization over the last 24 hours.</span>
              <div class="sb-k88-row">
                ${badge("success", "Online", "check")}
                ${badge("info", "Monitoring", "status")}
              </div>
            </div>
          `,
          "status"
        )}
      </div>
    `)
};

import { icon, icons, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Atoms/Icons",
  tags: ["autodocs"]
};

export const Sprite = {
  render: () =>
    renderStory(`
      ${storyHeader("Atom", "Icons", "Functional panel icons: stroke, currentColor, 24px viewBox, and intent-based names.")}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${icons
          .map(
            (name) => `
              <div class="sb-k88-icon-tile">
                ${icon(name, null)}
                <span>${name}</span>
              </div>
            `
          )
          .join("")}
      </div>
    `)
};

export const Sizes = {
  render: () =>
    renderStory(`
      ${storyHeader("Atom", "Sizes", "The icon can be small, but the interactive target must remain comfortable.")}

      <div class="sb-k88-row" style="margin-top: var(--k88-space-8)">
        <div class="sb-k88-icon-tile">${icon("spark", "xs")}<span>xs / 16</span></div>
        <div class="sb-k88-icon-tile">${icon("spark", "sm")}<span>sm / 20</span></div>
        <div class="sb-k88-icon-tile">${icon("spark", null)}<span>md / 24</span></div>
        <div class="sb-k88-icon-tile">${icon("spark", "lg")}<span>lg / 32</span></div>
        <button class="k88-icon-button" type="button" aria-label="Synchronize">
          ${icon("sync", "sm")}
        </button>
      </div>
    `)
};

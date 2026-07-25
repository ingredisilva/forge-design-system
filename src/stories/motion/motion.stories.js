import { icon, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Motion/Utilities",
  tags: ["autodocs"]
};

export const Utilities = {
  render: () =>
    renderStory(`
      ${storyHeader("Motion", "Animations", "Short and functional motion: enter, pulse, spin, flicker, and sweep. Every class respects prefers-reduced-motion.")}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        <div class="sb-k88-motion-demo k88-animate-in">
          ${icon("dashboard", "lg")}
          <span class="sb-k88-label">k88-animate-in</span>
        </div>

        <div class="sb-k88-motion-demo">
          <span class="k88-status-dot k88-animate-pulse"></span>
          <span class="sb-k88-label">k88-animate-pulse</span>
        </div>

        <div class="sb-k88-motion-demo">
          ${icon("sync", "lg", "k88-animate-spin")}
          <span class="sb-k88-label">k88-animate-spin</span>
        </div>

        <div class="sb-k88-motion-demo">
          ${icon("spark", "lg", "k88-animate-flicker")}
          <span class="sb-k88-label">k88-animate-flicker</span>
        </div>

        <div class="sb-k88-motion-demo k88-animate-sweep">
          ${icon("status", "lg")}
          <span class="sb-k88-label">k88-animate-sweep</span>
        </div>
      </div>
    `)
};

export const Signal = {
  render: () =>
    renderStory(`
      ${storyHeader("Motion", "Signal readout", "Example of a live panel with subtle visual pulse for monitoring experiences.")}

      <div style="margin-top: var(--k88-space-8)">
        <article class="k88-panel k88-animate-sweep">
          <div class="k88-panel__header">
            <div class="k88-panel__title">${icon("status", "xs")}Pulse readout</div>
            <div class="k88-panel__meta">LIVE / LOOP</div>
          </div>
          <div class="k88-panel__body">
            <div class="sb-k88-meter" aria-hidden="true">
              <span style="height: 38%"></span>
              <span style="height: 62%"></span>
              <span style="height: 48%"></span>
              <span style="height: 84%"></span>
              <span style="height: 72%"></span>
              <span style="height: 95%"></span>
              <span style="height: 53%"></span>
              <span style="height: 76%"></span>
              <span style="height: 44%"></span>
              <span style="height: 68%"></span>
              <span style="height: 88%"></span>
              <span style="height: 58%"></span>
            </div>
          </div>
        </article>
      </div>
    `)
};

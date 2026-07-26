import { badge, icon, panel, renderStory, storyHeader } from "../shared/story-utils";

export default {
  title: "Kairo 88/Foundations/Introduction",
  tags: ["autodocs"]
};

export const Overview = {
  render: () =>
    renderStory(`
      ${storyHeader(
        "Japanese 80s product system",
        "Kairo 88",
        "A design system for digital products with a Japanese 80s aesthetic: technical panels, controlled city pop, urban signage, consumer electronics, and an interface that stays a tool before becoming a poster."
      )}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${panel(
          "Signature",
          "VISUAL",
          `
            <div class="sb-k88-stack">
              <strong>Contained neon, present borders, low radius, and technical typography.</strong>
              <span style="color: var(--k88-color-text-muted); line-height: 1.6">
                The atmosphere comes from light, grid, panel, and contrast. Not from decorative cliches.
              </span>
            </div>
          `,
          "spark"
        )}

        ${panel(
          "Application",
          "PRODUCT",
          `
            <div class="sb-k88-stack">
              <div class="sb-k88-row">
                ${badge("info", "Tooling", "tokens")}
                ${badge("success", "Apps", "check")}
                ${badge("warning", "Docs", "alert")}
              </div>
              <span style="color: var(--k88-color-text-muted); line-height: 1.6">
                The library needs to survive dashboards, internal tools,
                websites, games, and documentation.
              </span>
            </div>
          `,
          "component"
        )}

        ${panel(
          "System",
          "FOUNDATION",
          `
            <div class="sb-k88-row">
              <button class="k88-button" type="button">${icon("play", "sm")}Run</button>
              <button class="k88-button" type="button" data-variant="secondary">${icon("review", "sm")}Review</button>
            </div>
          `,
          "dashboard"
        )}
      </div>
    `)
};

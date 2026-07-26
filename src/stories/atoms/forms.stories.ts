import { badge, panel, renderStory, storyHeader } from "../shared/story-utils";

export default {
  title: "Kairo 88/Atoms/Forms",
  tags: ["autodocs"]
};

export const FieldsAndBadges = {
  render: () =>
    renderStory(`
      ${storyHeader("Atom", "Fields and badges", "Fields always have visible borders, external labels, and luminous focus. Badges combine color, icon, and text.")}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${panel(
          "Route",
          "INPUT",
          `
            <div class="k88-field">
              <label for="route">Route</label>
              <input class="k88-input" id="route" value="SAO-08 / TOK-88" />
            </div>
          `,
          "tokens"
        )}
        ${panel(
          "Status",
          "BADGES",
          `
            <div class="sb-k88-row">
              ${badge("info", "Info", "status")}
              ${badge("success", "Ready", "check")}
              ${badge("warning", "Warning", "alert")}
              ${badge("danger", "Critical", "alert")}
            </div>
          `,
          "status"
        )}
      </div>
    `)
};

import { badge, panel, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Átomos/Formulários",
  tags: ["autodocs"]
};

export const CamposEBadges = {
  render: () =>
    renderStory(`
      ${storyHeader("Átomo", "Campos e badges", "Campos têm borda sempre visível, label externo e foco luminoso. Badges combinam cor, ícone e texto.")}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${panel(
          "Rota",
          "INPUT",
          `
            <div class="k88-field">
              <label for="route">Rota</label>
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
              ${badge("success", "Pronto", "check")}
              ${badge("warning", "Atenção", "alert")}
              ${badge("danger", "Crítico", "alert")}
            </div>
          `,
          "status"
        )}
      </div>
    `)
};


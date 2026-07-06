import { badge, panel, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Moléculas/Painel",
  tags: ["autodocs"]
};

export const Painel = {
  render: () =>
    renderStory(`
      ${storyHeader("Molécula", "Painel", "Painel combina superfície, header, título, metadado e conteúdo. É a unidade base para dashboards e ferramentas.")}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${panel(
          "Leitura de sinal",
          "LIVE / 14:08",
          `
            <div class="sb-k88-stack">
              <strong style="font: 700 32px/1 var(--k88-font-display)">88.4%</strong>
              <span style="color: var(--k88-color-text-muted)">Sincronização estável nas últimas 24 horas.</span>
              <div class="sb-k88-row">
                ${badge("success", "Online", "check")}
                ${badge("info", "Monitorando", "status")}
              </div>
            </div>
          `,
          "status"
        )}
      </div>
    `)
};


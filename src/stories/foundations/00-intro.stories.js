import { badge, icon, panel, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Fundamentos/Introdução",
  tags: ["autodocs"]
};

export const VisaoGeral = {
  name: "Visão geral",
  render: () =>
    renderStory(`
      ${storyHeader(
        "Japanese 80s product system",
        "Kairo 88",
        "Design system para produtos digitais com estética japonesa dos anos 80: painéis técnicos, city pop controlado, sinalização urbana, eletrônicos de consumo e uma interface que continua sendo ferramenta antes de pôster."
      )}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${panel(
          "Assinatura",
          "VISUAL",
          `
            <div class="sb-k88-stack">
              <strong>Neon contido, borda presente, radius baixo e tipografia técnica.</strong>
              <span style="color: var(--k88-color-text-muted); line-height: 1.6">
                O clima vem de luz, grade, painel e contraste. Não de clichês decorativos.
              </span>
            </div>
          `,
          "spark"
        )}

        ${panel(
          "Aplicação",
          "PRODUCT",
          `
            <div class="sb-k88-stack">
              <div class="sb-k88-row">
                ${badge("info", "Tooling", "tokens")}
                ${badge("success", "Apps", "check")}
                ${badge("warning", "Docs", "alert")}
              </div>
              <span style="color: var(--k88-color-text-muted); line-height: 1.6">
                A biblioteca precisa sobreviver em dashboards, ferramentas internas,
                sites, jogos e documentação.
              </span>
            </div>
          `,
          "component"
        )}

        ${panel(
          "Sistema",
          "FOUNDATION",
          `
            <div class="sb-k88-row">
              <button class="k88-button" type="button">${icon("play", "sm")}Executar</button>
              <button class="k88-button" type="button" data-variant="secondary">${icon("review", "sm")}Revisar</button>
            </div>
          `,
          "dashboard"
        )}
      </div>
    `)
};


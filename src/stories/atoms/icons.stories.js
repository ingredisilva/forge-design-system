import { icon, icons, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Átomos/Ícones",
  tags: ["autodocs"]
};

export const Sprite = {
  render: () =>
    renderStory(`
      ${storyHeader("Átomo", "Ícones", "Ícones funcionais de painel: stroke, currentColor, viewBox 24px e nomes por intenção.")}

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

export const Tamanhos = {
  render: () =>
    renderStory(`
      ${storyHeader("Átomo", "Tamanhos", "O ícone pode ser pequeno, mas o alvo interativo precisa continuar confortável.")}

      <div class="sb-k88-row" style="margin-top: var(--k88-space-8)">
        <div class="sb-k88-icon-tile">${icon("spark", "xs")}<span>xs / 16</span></div>
        <div class="sb-k88-icon-tile">${icon("spark", "sm")}<span>sm / 20</span></div>
        <div class="sb-k88-icon-tile">${icon("spark", null)}<span>md / 24</span></div>
        <div class="sb-k88-icon-tile">${icon("spark", "lg")}<span>lg / 32</span></div>
        <button class="k88-icon-button" type="button" aria-label="Sincronizar">
          ${icon("sync", "sm")}
        </button>
      </div>
    `)
};


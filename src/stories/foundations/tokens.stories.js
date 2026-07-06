import tokens from "../../../tokens/kairo-88.tokens.json";
import themeConfig from "../../../tokens/kairo-88.themes.json";
import { renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Fundamentos/Tokens",
  tags: ["autodocs"]
};

const colorGroups = [
  ["Base", tokens.color.base],
  ["Accent", tokens.color.accent],
  ["Semantic", tokens.color.semantic]
];

function tokenValue(token) {
  return token.$value;
}

function colorCard(name, token) {
  const value = tokenValue(token);
  return `
    <div class="sb-k88-token-card">
      <div class="sb-k88-swatch" style="background: ${value}"></div>
      <div class="sb-k88-label">${name}</div>
      <code>${value}</code>
    </div>
  `;
}

export const Cores = {
  render: () =>
    renderStory(`
      ${storyHeader(
        "Fundamentos",
        "Cores",
        "Bases, acentos, semântica e temas. O arquivo CSS de variáveis é gerado a partir dos tokens, para evitar divergência manual."
      )}

      <div class="sb-k88-stack" style="margin-top: var(--k88-space-8)">
        ${colorGroups
          .map(
            ([group, values]) => `
              <section>
                <h2 style="font: 700 18px/1 var(--k88-font-display); margin: 0 0 var(--k88-space-4)">${group}</h2>
                <div class="sb-k88-grid">
                  ${Object.entries(values)
                    .map(([name, token]) => colorCard(name, token))
                    .join("")}
                </div>
              </section>
            `
          )
          .join("")}
      </div>
    `)
};

export const Temas = {
  render: () =>
    renderStory(`
      ${storyHeader(
        "Fundamentos",
        "Temas",
        "Os temas mapeiam variáveis semânticas para contextos de uso: Kairo 88, Systems 84, claro editorial, arcade e paper."
      )}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        ${Object.entries(themeConfig.themes)
          .map(
            ([name, theme]) => `
              <div class="sb-k88-token-card">
                <div class="sb-k88-swatch" style="background: ${theme.colors.bg}; border-color: ${theme.colors.primary}">
                  <div style="height: 100%; background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent}); opacity: .85"></div>
                </div>
                <div class="sb-k88-label">${name}</div>
                <code>${theme.colorScheme}</code>
              </div>
            `
          )
          .join("")}
      </div>
    `)
};

export const Escalas = {
  render: () =>
    renderStory(`
      ${storyHeader(
        "Fundamentos",
        "Escalas",
        "Espaçamento, radius, tipografia, ícones e movimento formam a malha comum dos componentes."
      )}

      <div class="sb-k88-grid" style="margin-top: var(--k88-space-8)">
        <div class="sb-k88-token-card">
          <h2 style="margin-top: 0">Space</h2>
          ${Object.entries(tokens.space)
            .map(
              ([name, token]) => `
                <div style="display: grid; grid-template-columns: 44px 1fr 60px; align-items: center; gap: var(--k88-space-3); margin-block: var(--k88-space-2)">
                  <code>${name}</code>
                  <div style="height: 12px; width: ${tokenValue(token)}; background: var(--k88-color-primary)"></div>
                  <span>${tokenValue(token)}</span>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="sb-k88-token-card">
          <h2 style="margin-top: 0">Radius</h2>
          ${Object.entries(tokens.radius)
            .map(
              ([name, token]) => `
                <div style="display: flex; align-items: center; gap: var(--k88-space-3); margin-block: var(--k88-space-3)">
                  <div style="width: 48px; height: 32px; border: 1px solid var(--k88-color-primary); border-radius: ${tokenValue(token)}"></div>
                  <code>${name}</code>
                  <span>${tokenValue(token)}</span>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="sb-k88-token-card">
          <h2 style="margin-top: 0">Icon</h2>
          ${Object.entries(tokens.icon.size)
            .map(
              ([name, token]) => `
                <div style="display: flex; align-items: center; gap: var(--k88-space-3); margin-block: var(--k88-space-3)">
                  <div style="width: ${tokenValue(token)}; height: ${tokenValue(token)}; background: var(--k88-color-accent)"></div>
                  <code>${name}</code>
                  <span>${tokenValue(token)}</span>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="sb-k88-token-card">
          <h2 style="margin-top: 0">Motion</h2>
          ${Object.entries(tokens.motion.duration)
            .map(
              ([name, token]) => `
                <div style="display: flex; justify-content: space-between; gap: var(--k88-space-3); margin-block: var(--k88-space-3)">
                  <code>${name}</code>
                  <span>${tokenValue(token)}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `)
};

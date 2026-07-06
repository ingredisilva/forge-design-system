import { icon, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Átomos/Botões",
  tags: ["autodocs"]
};

export const Variantes = {
  args: {
    label: "Executar",
    variant: "primary",
    disabled: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"]
    },
    disabled: {
      control: "boolean"
    }
  },
  render: ({ label, variant, disabled }) => {
    const variantAttr = variant === "primary" ? "" : ` data-variant="${variant}"`;
    const disabledAttr = disabled ? " disabled" : "";

    return renderStory(`
      ${storyHeader("Átomo", "Botões", "Controles compactos, com ícone quando a ação for operacional.")}

      <div class="sb-k88-row" style="margin-top: var(--k88-space-8)">
        <button class="k88-button" type="button"${variantAttr}${disabledAttr}>
          ${icon("play", "sm")}
          ${label}
        </button>
        <button class="k88-button" type="button" data-variant="secondary">
          ${icon("review", "sm")}
          Revisar
        </button>
        <button class="k88-button" type="button" data-variant="ghost">
          ${icon("spark", "sm")}
          Ghost
        </button>
        <button class="k88-button" type="button" data-variant="danger">
          ${icon("alert", "sm")}
          Remover
        </button>
      </div>
    `);
  }
};


import { icons, type KairoIcon } from "../../contracts/kairo";

export { icons };
export type { KairoIcon };

export type IconSize = "xs" | "sm" | "md" | "lg" | "";
export type BadgeTone = "info" | "success" | "warning" | "danger";

export function renderStory(markup: string, className = ""): HTMLDivElement {
  const element = document.createElement("div");
  element.className = ["sb-k88-frame", className].filter(Boolean).join(" ");
  element.innerHTML = markup;
  return element;
}

export function icon(name: KairoIcon, size: IconSize = "sm", className = ""): string {
  const sizeAttr = size ? ` data-size="${size}"` : "";
  const classAttr = ["k88-icon", className].filter(Boolean).join(" ");

  return `
    <svg class="${classAttr}"${sizeAttr} aria-hidden="true">
      <use href="/icons/kairo-icons.svg#k88-icon-${name}"></use>
    </svg>
  `;
}

export function storyHeader(eyebrow: string, title: string, lede: string): string {
  return `
    <div class="sb-k88-eyebrow">${eyebrow}</div>
    <h1 class="sb-k88-title">${title}</h1>
    <p class="sb-k88-lede">${lede}</p>
  `;
}

export function panel(title: string, meta: string, body: string, iconName: KairoIcon = "dashboard"): string {
  return `
    <article class="k88-panel">
      <div class="k88-panel__header">
        <div class="k88-panel__title">${icon(iconName, "xs")}${title}</div>
        <div class="k88-panel__meta">${meta}</div>
      </div>
      <div class="k88-panel__body">${body}</div>
    </article>
  `;
}

export function badge(tone: BadgeTone, label: string, iconName: KairoIcon = "check"): string {
  return `
    <span class="k88-badge" data-tone="${tone}">
      ${icon(iconName, "xs")}
      ${label}
    </span>
  `;
}

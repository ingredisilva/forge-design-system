import { icons } from "../../contracts/kairo.js";

export { icons };

export function renderStory(markup, className = "") {
  const element = document.createElement("div");
  element.className = ["sb-k88-frame", className].filter(Boolean).join(" ");
  element.innerHTML = markup;
  return element;
}

export function icon(name, size = "sm", className = "") {
  const sizeAttr = size ? ` data-size="${size}"` : "";
  const classAttr = ["k88-icon", className].filter(Boolean).join(" ");

  return `
    <svg class="${classAttr}"${sizeAttr} aria-hidden="true">
      <use href="/icons/kairo-icons.svg#k88-icon-${name}"></use>
    </svg>
  `;
}

export function storyHeader(eyebrow, title, lede) {
  return `
    <div class="sb-k88-eyebrow">${eyebrow}</div>
    <h1 class="sb-k88-title">${title}</h1>
    <p class="sb-k88-lede">${lede}</p>
  `;
}

export function panel(title, meta, body, iconName = "dashboard") {
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

export function badge(tone, label, iconName = "check") {
  return `
    <span class="k88-badge" data-tone="${tone}">
      ${icon(iconName, "xs")}
      ${label}
    </span>
  `;
}


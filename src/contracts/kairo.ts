export const themes = [
  { value: "kairo-midnight", title: "Midnight" },
  { value: "systems-84", title: "Systems 84" },
  { value: "cyberpunk-1984", title: "Cyberpunk 1984" },
  { value: "kairo-daylight", title: "Daylight" },
  { value: "kairo-arcade", title: "Arcade" },
  { value: "kairo-paper", title: "Paper" }
] as const;

export type KairoTheme = (typeof themes)[number];
export type KairoThemeValue = KairoTheme["value"];

export const themeValues = themes.map((theme) => theme.value) as KairoThemeValue[];

export const icons = [
  "dashboard",
  "component",
  "tokens",
  "status",
  "guidelines",
  "play",
  "review",
  "check",
  "alert",
  "spark",
  "sync",
  "palette",
  "terminal",
  "system-map"
] as const;

export type KairoIcon = (typeof icons)[number];

import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|mdx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {}
  },
  staticDirs: [
    {
      from: "../src/icons",
      to: "/icons"
    }
  ]
};

export default config;

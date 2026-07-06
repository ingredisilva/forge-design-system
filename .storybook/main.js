const config = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
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
  ],
  docs: {
    autodocs: "tag"
  }
};

export default config;

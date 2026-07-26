import "../src/styles/kairo.css";
import "./storybook-theme.css";
import { themes } from "../src/contracts/kairo";

type StoryRender = () => Node | string;
type StoryContext = {
  globals: {
    theme?: string;
  };
};

export const globalTypes = {
  theme: {
    name: "Design",
    description: "Kairo 88 design option and theme",
    defaultValue: "kairo-midnight",
    toolbar: {
      icon: "circlehollow",
      items: themes,
      showName: true
    }
  }
};

export const decorators = [
  (Story: StoryRender, context: StoryContext): HTMLDivElement => {
    const root = document.createElement("div");
    const story = Story();

    root.className = "sb-k88-root";
    root.dataset.theme = context.globals.theme || "kairo-midnight";

    if (story instanceof Node) {
      root.appendChild(story);
    } else {
      root.innerHTML = story;
    }

    return root;
  }
];

export const parameters = {
  layout: "fullscreen",
  controls: {
    expanded: true
  },
  options: {
    storySort: {
      order: ["Kairo 88", ["Foundations", "Atoms", "Molecules", "Organisms", "Motion"]]
    }
  }
};

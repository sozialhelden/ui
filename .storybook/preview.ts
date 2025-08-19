import type { Preview } from "@storybook/react-vite";
import "./main.css";

const preview: Preview = {
  tags: ["autodocs", "!dev"],
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { Preview } from "@storybook/react-vite";

import "./main.css";
import { themes } from "storybook/theming";

const preview: Preview = {
  tags: ["autodocs", "!dev"],
  decorators: [
    (Story) => (
      <div className="bg-white dark:bg-gray-950 p-8 flex justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
      dark: themes.light,
      light: themes.light,
    },
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

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // the default propFilter is too strict and filters out props when
      // they are defined in a parent file from the node_modules folder
      // which is true for all underlying radix-ui primitives. in order to
      // include them, we need to adjust the propFilter.
      propFilter: ({ parent }) => {
        // no parent means it's locally defined
        if (!parent) {
          return true;
        }
        // include all radix-ui props
        if (/radix-ui/.test(parent.fileName)) {
          return true;
        }
        return !/node_modules/.test(parent.fileName);
      },
    },
  },
};
export default config;

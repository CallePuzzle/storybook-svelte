import type { Preview } from "@storybook/react-vite";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    docs: {
      extractComponentDescription: (component: any, { notes }: any) => {
        if (notes) {
          return typeof notes === "string"
            ? notes
            : notes.markdown || notes.text;
        }
        return null;
      },
    },
  },
  decorators: [
    (Story) => {
      // Ensure React context is properly initialized
      return React.createElement(Story);
    },
  ],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;

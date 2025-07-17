import { beforeAll } from "vitest";
import { setProjectAnnotations } from "@storybook/react-vite";
import * as projectAnnotations from "./preview";
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";

// Ensure React globals are available
import React from "react";
import { createRoot } from "react-dom/client";

// Make React available globally for tests
globalThis.React = React;
globalThis.ReactDOM = { createRoot };

// Setup project annotations for Storybook
const annotations = setProjectAnnotations([
  projectAnnotations,
  a11yAddonAnnotations,
]);

// Initialize Storybook for tests
beforeAll(annotations.beforeAll);

// Configure test environment for React 19
beforeAll(() => {
  // Ensure proper React environment
  if (typeof window !== "undefined") {
    // Set up any global configurations needed for React 19
    window.React = React;
  }
});

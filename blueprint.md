# Blueprint: Lotto Number Drawing Site

## Overview

This application provides a visually engaging experience for drawing lottery numbers. It simulates a real lotto draw by revealing 6 unique numbers (from 1 to 45) one by one with animations and color-coding, creating a sense of anticipation.

## Design and Features

*   **Modern, Dramatic UI:** The application uses a dark theme with a clean layout to create a premium and focused experience. The interface is designed to look like a self-contained "lotto machine."
*   **Animated Number Draw:** Numbers are revealed sequentially with a delay and a subtle animation, building suspense for the user.
*   **Color-Coded Balls:** To enhance visual feedback and mimic real lottery balls, each number is displayed in a colored circle corresponding to its number range (e.g., 1-10 are yellow, 11-20 are blue, etc.).
*   **Responsive Design:** The layout adapts perfectly to both desktop and mobile screens.
*   **Interactivity:** A single, clear "Start Draw" button initiates the process. The button is disabled during the draw to prevent re-triggering.
*   **Accessibility:** The design follows a11y standards to ensure it is usable by everyone.

## Current Plan: UI and Animation Enhancement

This plan details the steps to upgrade the simple "Generator" into a more engaging "Drawing Site".

1.  **Update `index.html`:**
    *   Modify the title and header to reflect a "drawing site."
    *   Restructure the layout to create a "lotto machine" container.
2.  **Update `style.css`:**
    *   Implement a dark theme with a new color palette and background.
    *   Add styles for the "lotto machine" container.
    *   Add animations for the number balls appearing.
    *   Refine button and text styles for the new theme.
3.  **Update `main.js`:**
    *   Implement logic to reveal numbers one by one using a delay.
    *   Add a helper function to assign colors to the number balls based on their value.
    *   Disable and re-enable the "Start Draw" button during the animation.

# Blueprint: Lotto Number Drawing Site

## Overview

This application provides a visually engaging experience for drawing lottery numbers. It simulates a real lotto draw by revealing 6 unique numbers (from 1 to 45) one by one with animations and color-coding, creating a sense of anticipation.

## Design and Features

*   **Modern, Dramatic UI:** The application uses a default dark theme with a clean layout. It now supports both **Dark and Light modes** for user preference.
*   **Theme Toggle:** A toggle button (🌓) allows users to switch between light and dark themes seamlessly. The preference is saved in `localStorage`.
*   **Animated Number Draw:** Numbers are revealed sequentially with a delay and a subtle animation, building suspense for the user.
*   **Color-Coded Balls:** To enhance visual feedback and mimic real lottery balls, each number is displayed in a colored circle corresponding to its number range (e.g., 1-10 are yellow, 11-20 are blue, etc.).
*   **Responsive Design:** The layout adapts perfectly to both desktop and mobile screens.
*   **Interactivity:** A single, clear "Start Draw" button initiates the process. The button is disabled during the draw to prevent re-triggering.
*   **Wow Button:** A special button that, when clicked, triggers a fun "당첨입니다" (Bingo/Winner) alert.
*   **Partnership Inquiry Form:** A functional form integrated with **Formspree** allowing users to send partnership inquiries directly to the site owner.

## Current Plan: Add Partnership Inquiry Form

1.  **Update `index.html`:**
    *   Added a `<section>` with ID `partnership` containing the Formspree form.
    *   Wrapped the lotto machine and form in a `.container` for better layout management.
2.  **Update `style.css`:**
    *   Updated `body` and added `.container` to handle scrollable content.
    *   Added comprehensive styling for the partnership form, inputs, and submit button, fully integrated with the dark/light mode system.

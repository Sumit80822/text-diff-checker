# Text Diff Checker

A simple web-based tool to compare two pieces of text and highlight their differences.

## Features

*   Highlights differences line by line.
*   Shows lines that were added, removed, or remained common between the two texts.
*   Easy to use: paste your text into two separate panes and click the "Compare" button.
*   No server-side processing: all comparisons are done directly in your browser using JavaScript, ensuring privacy and speed.
*   Completely free to use.

## How to Use

1.  Open the `index.html` file in your preferred web browser.
2.  Paste the original text (or "Text 1") into the left textarea.
3.  Paste the modified text (or "Text 2") into the right textarea.
4.  Click the "Compare" button located below the textareas.
5.  The differences will be displayed in a results area below the button:
    *   Lines unique to the first text will be highlighted (typically in red or with a minus sign).
    *   Lines unique to the second text will be highlighted (typically in green or with a plus sign).
    *   Lines common to both texts will be shown with a neutral background.

## Technical Stack

*   **Frontend:** Built with HTML, CSS, and vanilla JavaScript.
*   **Comparison Logic:** Implements a basic line-by-line comparison algorithm in JavaScript. It iterates through both texts, identifying common, added, and removed lines.

---

This tool is designed for quick and easy text comparisons without the need for complex software or internet connectivity after the initial page load.
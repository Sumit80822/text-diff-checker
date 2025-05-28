# Text Diff Checker

An advanced web-based tool to compare two pieces of text, highlighting differences with multiple comparison options and a detailed, user-friendly interface.

## Features

*   **Word-by-Word Highlighting:** Utilizes an LCS (Longest Common Subsequence) algorithm to accurately identify and highlight differences at the word level.
*   **Color-Coded Results:** Clearly distinguishes additions (typically green) and removals (typically red) in the text.
*   **Comparison Options:**
    *   **Ignore Whitespace:** Option to treat differences in spacing (multiple spaces, tabs, newlines) as non-significant.
    *   **Ignore Case:** Option to perform a case-insensitive comparison.
*   **Utility Buttons:**
    *   **Clear All:** Quickly empties both text input areas.
    *   **Swap Texts:** Instantly swaps the content between the "Original Text" and "Modified Text" areas.
*   **Auto-Compare:** Automatically updates the diff results as you type in either textarea (with a debounce mechanism to optimize performance).
*   **Detailed Statistics:** Displays the number of additions, removals, and an overall similarity percentage between the two texts.
*   **Responsive Design:** Adapts to various screen sizes, making it usable on desktops, tablets, and mobile devices.
*   **Client-Side Processing:** All comparisons are performed directly in the user's browser, ensuring data privacy and fast performance. No data is sent to any server.
*   **Rich Content:** The `index.html` page includes embedded SEO-friendly content and a comprehensive FAQ section.

## How to Use

1.  **Open the Tool:**
    *   Open the `index.html` file directly in your preferred web browser.
    *   Alternatively, if deployed, visit the provided GitHub Pages link.
2.  **Input Text:**
    *   Paste or type your original text into the "Original Text" textarea.
    *   Paste or type the text you want to compare into the "Modified Text" textarea.
3.  **View Differences:**
    *   Differences are typically shown automatically as you type (due to the auto-compare feature).
    *   If needed, or if auto-compare is modified, you can click the "Compare Texts" button.
4.  **Adjust Options:**
    *   Use the checkboxes to toggle "Ignore whitespace" and "Ignore case" according to your comparison needs. The diff will update automatically.
5.  **Utilize Tools:**
    *   Click "Clear All" to reset the text areas.
    *   Click "Swap Texts" to switch the original and modified texts.
6.  **Analyze Results:**
    *   Review the comparison statistics (additions, removals, similarity percentage) displayed above the diff.
    *   Examine the side-by-side diff view, where changes are highlighted with color-coding.

## Technical Stack

*   **Frontend:** Built entirely with HTML. All necessary CSS and JavaScript for styling, logic, and interactivity are embedded directly within the `index.html` file.
*   **Comparison Algorithm:** Implements an LCS (Longest Common Subsequence) based algorithm for word-level text differentiation.
*   **Standalone:** Operates fully client-side, requiring no backend or external dependencies beyond a modern web browser.

---

This tool provides a comprehensive and user-friendly solution for detailed text comparison, suitable for a wide range of users including developers, writers, editors, and students.
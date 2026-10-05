/*
 * TEMPLATE — copy this file to playbooks/<slug>.js, fill it in, then add a
 * <script> tag for it in index.html. (This template itself is NOT loaded.)
 *
 * content: Markdown.
 *   #   Heading 1  = a new chapter (always starts on a new page, auto-numbered)
 *   ##  Heading 2  = section
 *   ### Heading 3  = sub-section
 *   > quote        = callout box
 *   Tables, lists, **bold**, *italic* and raw HTML all work.
 *   Avoid backticks (`) inside content, or escape them as \`.
 */
PLAYBOOKS.push({
  slug: "my-new-playbook",              // used in the URL: #/book/my-new-playbook
  volume: "02",                         // shown on spine + cover
  title: "The Full Title of the Playbook",
  spineTitle: "Short Spine Title",      // keep it short — it's printed on the spine
  subtitle: "One-line promise of what the reader gets",
  author: "Field Guide No. 02",         // left side of spine, mono caps
  year: "2026",

  // Colours: cover / detail-page background, text on it, pattern accent, page paper.
  color: "#2c3e50",
  ink: "#efe7da",
  accent: "#c9a46a",
  pattern: "contour",                   // contour | grid | rings | dots | plain

  description: [
    "First paragraph shown on the book's detail page.",
    "Second paragraph.",
  ],

  content: `
# First Chapter Title

Your content in Markdown...

## A section

- point one
- point two
`,
});

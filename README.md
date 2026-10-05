# Playbooks — 3D library

A static site: a shelf of 3D books. Click a book to see its detail page, then open it to read it as a two-page book with page turns.

**Run it:** double-click `index.html` (fonts and the Markdown parser load from the internet).
To host it, upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, S3…).

## Add a new playbook
1. Copy `playbooks/_template.js` to `playbooks/<your-slug>.js` and fill it in:
   title, spine title, colours, description, and the content in Markdown
   (`#` = new chapter, `##` = section, `>` = callout; tables and HTML work too).
2. In `index.html`, add one line under the existing playbook scripts:
   `<script src="playbooks/<your-slug>.js"></script>`
3. Reload. The new book lands on top of the stack, gets a tick in the left rail,
   its own detail page (`#/book/<slug>`), and the reader paginates it automatically.

Site name, tagline and the "?" text live in `playbooks/_registry.js`
(`FORTHCOMING` controls the greyed placeholder spine — set it to `[]` to hide it).

## Files
- `index.html` — page shell
- `css/style.css` — all styling (3D book, shelf, detail page, reader)
- `js/app.js` — router, 3D shelf, detail page, paginated reader with page-flip
- `playbooks/` — one file per book + the registry

## Publisher, copyright & legal
Publisher name, logos, copyright year, rights text and disclaimer live in `playbooks/_registry.js` (`SITE.publisher…`).
They are applied automatically to every book: cover, title page, copyright page, back page, detail page and site footer.
Per-book extras in each playbook file: `legal` (e.g. trademark notices), `credits` (photo credits), `backNote` (optional call-to-action on the back page), `edition`.
Logos: `assets/enacton-logo-color.png` (light backgrounds) and `assets/enacton-logo-light.png` (dark backgrounds).

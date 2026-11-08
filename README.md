# Kysely API documentation

Clone this repository next to Kysely repo. Kysely is expected to be found in `../kysely`.

Run `pnpm install` and `pnpm build` to generate the site in `docs/`.
TypeDoc produces HTML and Markdown from the same source in one build. Every HTML
documentation page has a Markdown counterpart at the same path with a `.md`
extension, for example `classes/OnConflictBuilder.md`. The homepage is `index.md`.
Pagefind indexes the HTML pages.

GitHub Pages serves these as static files. Request the `.md` URL directly;
`Accept: text/markdown` does not switch an HTML URL to Markdown.

The Markdown plugin is patched to skip directory links when copying media, matching
TypeDoc's HTML renderer. This prevents empty links in the source README from copying
the entire Kysely checkout into `docs/_media/`.


Install dependencies in both repositories. The build expands inherited JSDoc in
`../kysely/src` before running TypeDoc. This preparation is intended for the
checkout used to generate documentation.

The source copier records line offsets so links in both HTML and Markdown still
point to the authored source lines.

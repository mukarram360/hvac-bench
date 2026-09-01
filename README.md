# HVAC Bench

HVAC Bench is an evidence-backed HVAC troubleshooting and technical-reference publication at [hvac-bench.com](https://hvac-bench.com). The library starts with ductless mini-splits, heat pumps, error codes, controls, and common operating symptoms, and the architecture already carries central air, furnaces, boilers, indoor air quality, and light commercial equipment without a rebuild.

Readers are in the United States, the United Kingdom, and Europe, and pages are written to be correct for all three.

## Stack

- Next.js App Router, React Server Components, and TypeScript
- Plain CSS design system, no UI framework
- Zod-validated content registry
- Static generation with minimal client JavaScript
- Vitest for content, SEO, and design-contract tests
- Vercel production hosting

No database, CMS, authentication system, paid search service, or page builder is required.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` only when overriding analytics or adding a Search Console verification token. The production Google Analytics stream ID is a hard default in `src/lib/analytics-config.ts`, so a missing environment variable cannot silently switch measurement off.

## Quality commands

```bash
npm run test        # content, SEO, and design-system contracts
npm run typecheck
npm run lint
npm run check:links # every internal href resolves to a generated route
npm run build       # also regenerates the static search index
npm run verify      # the release gate: all of the above
```

Content validation runs when the registry is imported, so malformed records, duplicate paths, unknown brands, sources, authors, or equipment types, broken related-content links, and unresolved glossary cross-references all fail the build.

## Architecture

```
src/content/     taxonomy, schema, and the typed registries (brands, sources, authors, glossary, articles)
src/lib/         content queries, SEO metadata and schema, navigation model, analytics config
src/components/  design system components, article and hub templates
src/app/         statically generated routes, sitemap, robots, feed, llms.txt, OG images
docs/            authoring workflow and SEO coverage
scripts/         search index build and internal link check
```

### Design system

The visual direction is field service documentation, digitally typeset. The recurring device is the data plate: the specification plate riveted to every outdoor unit, rendered as hairline key and value rows with monospace labels and a signal-orange top rule. It carries the hero lookup, the article reference card, and the hub summaries.

Type is IBM Plex Sans for reading and IBM Plex Mono for codes, labels, and data, two weights each. Colour, spacing, and type tokens live at the top of `src/app/globals.css`, and `src/lib/styles.test.ts` enforces contrast, touch-target size, focus visibility, and reading measure so a future change cannot quietly break them.

### Indexing policy

Brand and equipment hubs are generated for every registry record, but a hub stays `noindex, follow` and out of the sitemap until it carries at least one published reference. It flips automatically when content lands. This keeps the structure ready to scale to thousands of pages without shipping empty ones.

### Search

On-site search runs entirely in the browser against `/search-index.json`, a static file rebuilt on every deploy by `scripts/build-search-index.ts`. The index is fetched when someone actually intends to search, so page weight does not grow with the library.

## Publishing

See [`docs/content-authoring.md`](docs/content-authoring.md) for the evidence workflow and the field reference, and [`docs/seo-checklist.md`](docs/seo-checklist.md) for what is implemented and what needs an account action.

## Deployment

Production deploys from `main` to the Vercel project named `hvac-bench`. The canonical host is `https://hvac-bench.com`, and `www.hvac-bench.com` is permanently redirected at the edge. Do not link this checkout to any unrelated Vercel project.

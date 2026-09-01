# HVAC Bench

HVAC Bench is an evidence-backed HVAC troubleshooting and technical-reference publication at [hvac-bench.com](https://hvac-bench.com). The first release focuses on ductless mini-splits, heat pumps, error codes, controls, and common operating symptoms without restricting the architecture to those categories.

## Stack

- Next.js App Router, React Server Components, and TypeScript
- Tailwind CSS with a small repository-owned visual system
- Zod-validated repository content
- Static generation with minimal client JavaScript
- Vitest for content, SEO, and UI-contract tests
- Vercel production hosting

No database, CMS, authentication system, paid search service, or third-party page builder is required.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` only when adding optional Google Analytics or Search Console values. Empty values are supported and do not block a build.

## Quality commands

```bash
npm run test
npm run typecheck
npm run lint
npm run check:links
npm run build
npm run verify
```

`npm run verify` is the release gate. Content validation runs when the content registry is imported, so malformed records, duplicate paths, unknown sources, invalid brand references, and broken related-content links fail the build.

## Architecture

- `src/content/brands.ts` — typed manufacturer registry
- `src/content/sources.ts` — authoritative source registry
- `src/content/articles.ts` — technical content records
- `src/content/schema.ts` — validation and publishing constraints
- `src/lib/content.ts` — content queries and controlled internal linking
- `src/lib/seo.ts` — metadata, canonicals, sitemaps, and structured data
- `src/app/` — statically generated routes and trust pages
- `docs/content-authoring.md` — evidence and publishing workflow

Brand and article pages are generated only from validated records. Search is a client-side utility and is intentionally excluded from the sitemap and marked `noindex`.

## Deployment

Production deploys from `main` to the Vercel project named `hvac-bench`. The canonical host is `https://hvac-bench.com`; `www.hvac-bench.com` is permanently redirected at the Vercel edge. Do not link this checkout to any unrelated Vercel project.

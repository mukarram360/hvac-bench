# HVAC Bench Initial Production Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build, verify, commit, push, and deploy the initial production version of HVAC Bench at `https://hvac-bench.com`.

**Architecture:** A static-first Next.js App Router site renders validated repository-native TypeScript content. One typed content service supplies pages, metadata, search, internal links, sitemap entries, and build-time integrity tests; nonexistent or malformed records cannot publish.

**Tech Stack:** Next.js App Router, React Server Components, TypeScript, Tailwind CSS, Zod, Vitest, Testing Library where UI behavior requires it, npm, Vercel.

## Global Constraints

- Work only inside `C:/Users/mukar/hvac-bench` and Vercel project `hvac-bench`.
- Never access, link, configure, deploy, or reuse values from `ai-medical-catalog-os`.
- Canonical origin is exactly `https://hvac-bench.com`; `www` permanently redirects there.
- Technical claims require traceable authoritative sources; unsupported pages are omitted.
- Homeowner checks exclude live electrical work, refrigerant work, sealed circuits, capacitors, bypasses, and hazardous gas work.
- No database, CMS, authentication, paid dependencies, ad code, invented analytics IDs, or manufacturer imagery.
- Pages are statically generated with minimal client JavaScript and fail closed when content validation fails.

---

### Task 1: Scaffold and quality gates

**Files:** Create the Next.js project files, `vitest.config.ts`, `src/test/setup.ts`, and npm scripts in `package.json`.

**Interfaces:** Produces `npm run test`, `npm run typecheck`, `npm run lint`, and `npm run build` as independent gates.

- [ ] Initialize the empty repository with create-next-app using App Router, TypeScript, Tailwind, ESLint, `src/`, npm, and `@/*` imports.
- [ ] Add Vitest, jsdom, Testing Library, Zod, and gray-matter only if Markdown ingestion remains necessary after scaffolding.
- [ ] Add scripts: `test`, `test:watch`, `typecheck`, `check:links`, and `verify`.
- [ ] Run the scaffold build and record the clean baseline.

### Task 2: Content contract and fail-closed service

**Files:** Create `src/content/schema.ts`, `src/content/brands.ts`, `src/content/articles.ts`, `src/lib/content.ts`, and `src/lib/content.test.ts`.

**Interfaces:** `Brand`, `TechnicalArticle`, `getAllBrands()`, `getBrandBySlug(slug)`, `getAllArticles()`, `getArticleByPath(path)`, `getRelatedArticles(article)`, and `getIndexableRoutes()`.

- [ ] Write failing tests proving duplicate paths, missing sources, empty safe checks, unknown brands, broken related slugs, thin section text, and invalid review dates are rejected.
- [ ] Run the focused test and confirm failures are caused by missing content APIs.
- [ ] Implement Zod schemas and relationship validation with error messages that identify the record and field.
- [ ] Add ten brand records and a small fixture article; run tests to green.
- [ ] Refactor shared normalization and route-building helpers while keeping the suite green.

### Task 3: Evidence-backed seed content

**Files:** Expand `src/content/articles.ts`; create `src/content/sources.ts` and `docs/content-authoring.md`.

**Interfaces:** Source records expose `title`, `publisher`, `url`, `sourceType`, and optional model scope; articles reference verified source IDs.

- [ ] Add failing integrity tests requiring every technical article to resolve at least one source, state model scope, contain distinct substantive sections, and use only allowed review statuses.
- [ ] Research and add a bounded set of distinct guides supported by OEM documentation and U.S. Department of Energy guidance.
- [ ] Include brand-specific guides only where the exact code and family scope are documented; qualify cross-family ambiguity explicitly.
- [ ] Add authoring documentation showing the complete record shape and publication checklist.
- [ ] Run content tests and report the exact article count that passes.

### Task 4: Publication UI and route system

**Files:** Create shared components under `src/components/`; implement `src/app/page.tsx`, section indexes, brand routes, brand article routes, root article routes, trust pages, `not-found.tsx`, and `globals.css`.

**Interfaces:** Page components consume only validated content-service functions. Client JavaScript is limited to `SiteSearch` and mobile navigation when CSS alone is insufficient.

- [ ] Write failing component/route tests for search results, breadcrumb labels, safe-check and escalation headings, and unknown paths.
- [ ] Implement the technical-publication visual system, responsive header/footer, homepage search console, directories, article template, source list, and controlled related guides.
- [ ] Implement all structural trust pages with truthful project language.
- [ ] Run UI tests and keyboard/accessibility assertions to green.

### Task 5: SEO and indexing controls

**Files:** Create `src/lib/seo.ts`, `src/lib/seo.test.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`, metadata exports, JSON-LD components, and `vercel.json`.

**Interfaces:** `absoluteUrl(path)`, `articleMetadata(article)`, `breadcrumbJsonLd(items)`, `articleJsonLd(article)`, and `getSitemapEntries()`.

- [ ] Write failing tests for apex canonicals, unique article titles/descriptions, valid BreadcrumbList/Article JSON-LD, noindex search metadata, and complete sitemap routes.
- [ ] Implement metadata and structured-data helpers, Organization/WebSite schema, robots, sitemap, canonical redirects, and analytics verification hooks gated by real environment values.
- [ ] Add a route/link checker that verifies every internal href maps to a generated or static route.
- [ ] Run SEO tests, link checks, and structured-data JSON parsing to green.

### Task 6: Production-quality verification and repository handoff

**Files:** Update `README.md`, `.gitignore`, and any failing implementation files.

**Interfaces:** A fresh clone can run `npm ci && npm run verify` and build the same production artifact.

- [ ] Run dependency audit, tests, typecheck, lint, production build, `git diff --check`, content integrity, and internal link checks.
- [ ] Start the production server and test representative routes, sitemap, robots, and 404 locally over HTTP.
- [ ] Review responsive pages in a real browser at desktop and mobile widths and correct material layout/accessibility defects.
- [ ] Commit meaningful checkpoints and push `main` to `origin`.

### Task 7: Vercel deployment and live verification

**Files:** Create only `.vercel/project.json` through verified Vercel linking; keep `.vercel` ignored.

**Interfaces:** Vercel project `hvac-bench` serves the pushed `main` artifact at the canonical origin.

- [ ] Verify the target project ID and owner, link the local directory explicitly to `hvac-bench`, and inspect pulled settings without importing unrelated values.
- [ ] Deploy the verified build to production; inspect and repair any remote build failure until status is READY.
- [ ] Inspect Vercel domain assignments and configure apex as primary with permanent `www` redirect, without changing Cloudflare DNS unless Vercel reports a DNS fault.
- [ ] Verify live `/`, brand indexes/hubs, one error-code guide, one symptom guide, trust pages, sitemap, robots, HTTPS, 404, canonical tags, structured data, and `www` redirect.
- [ ] Confirm the production deployment corresponds to the pushed `main` commit and report any intentional omissions.


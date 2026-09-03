# HVAC Bench Master Brand First Layer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish and deploy one defensible supporting article for every registered HVAC Bench brand.

**Architecture:** Add one independently authored TypeScript module per uncovered brand and one or more exact primary-source records for each article. Existing registry-driven routes expose the pages across hubs, search, structured data, RSS, sitemap, and canonical metadata.

**Tech Stack:** Next.js 16.3.4 App Router, React 19.2.8, TypeScript, Zod, Vitest, static generation, Vercel.

## Global Constraints

- `HVAC_BENCH_MASTER_SEO_AEO_GEO_EDITORIAL_STANDARD_FINAL_10_OF_10.txt` is mandatory.
- Never invent keyword volume, keyword difficulty, technical facts, prevalence, experience, credentials, or review history.
- Each page needs exact scope, primary evidence, original decision value, unique prose, owner-safe boundaries, and crawlable internal links.
- No em dashes or double-hyphen substitutes in editorial body copy.
- Every new article must be independently source-verified on 2026-09-03 before publication.

---

### Task 1: Corpus coverage contract

**Files:**

- Modify: `src/content/articles-quality.test.ts`

**Interfaces:**

- Consumes: `brands` and `articles` registries.
- Produces: a failing contract requiring at least one article per registered brand.

- [ ] Add a test that maps each brand slug to `articles.some(article => article.brand === brand.slug)`.
- [ ] Run `npm test -- src/content/articles-quality.test.ts` and confirm the uncovered brands fail.
- [ ] Keep this test in the permanent release suite.

### Task 2: Research and evidence registry

**Files:**

- Create: `docs/content-research/brand-first-layer-2026-09-03.md`
- Modify: `src/content/sources.ts`

**Interfaces:**

- Consumes: current SERPs, OEM manuals/support pages, community vocabulary, existing article queries, and the source schema.
- Produces: one query/intent/competition/gap record per uncovered brand and stable source IDs used by article modules.

- [ ] Record each target query, intent, scope, region, internal competitor, visible SERP weakness, information-gain decision, community pain point, and primary evidence URL.
- [ ] Reject or replace any topic whose OEM evidence does not match the proposed scope.
- [ ] Add source records with exact publisher, title, URL, source class, and scope note.
- [ ] Run the content import and confirm every new source record validates.

### Task 3: Ductless and global-manufacturer articles

**Files:**

- Create one module per uncovered ductless/global brand in `src/content/articles/`.
- Modify: `src/content/articles/index.ts`

**Interfaces:**

- Consumes: source IDs from Task 2 and the `publish()` article contract.
- Produces: source-verified brand articles with unique routes and authored content blocks.

- [ ] Draft each page from its evidence-backed outline with a direct answer, family scope, at least two substantive sections, useful follow-up questions, and a value layer suited to the query.
- [ ] Add owner-safe checks and technician stop points only to actionable formats.
- [ ] Add a table or HTML figure only when it improves the decision or explains a path.
- [ ] Import each article explicitly and run focused content, prose, and similarity checks after the cohort.

### Task 4: North American full-line articles

**Files:**

- Create one module per uncovered North American full-line brand in `src/content/articles/`.
- Modify: `src/content/articles/index.ts`

**Interfaces:** Same registry contract as Task 3.

- [ ] Prefer exact furnace-control, thermostat, PTAC, or model-family states backed by OEM literature.
- [ ] Keep combustion, gas, electrical-panel, and refrigerant procedures out of owner instructions.
- [ ] Distinguish shared manufacturing platforms without treating one badge as proof for another.
- [ ] Run focused evidence, safety, prose, similarity, schema, and link checks.

### Task 5: UK and European heating articles

**Files:**

- Create one module per uncovered UK/EU heating brand in `src/content/articles/`.
- Modify: `src/content/articles/index.ts`

**Interfaces:** Same registry contract as Task 3.

- [ ] Preserve exact boiler or heat-pump family scope and UK/EU terminology.
- [ ] Explain what a fault state detects without naming an unproven failed component.
- [ ] Keep gas, combustion, sealed refrigerant, and internal electrical work technician-only.
- [ ] Run focused evidence, safety, prose, similarity, schema, and link checks.

### Task 6: Controls articles

**Files:**

- Create one module per uncovered controls brand in `src/content/articles/`.
- Modify: `src/content/articles/index.ts`

**Interfaces:** Same registry contract as Task 3.

- [ ] Cover exact displayed messages, calibration states, pairing errors, or call-for-heat ambiguity.
- [ ] Separate thermostat/controller state from downstream equipment response.
- [ ] Preserve model-generation and market differences.
- [ ] Run focused evidence, safety, prose, similarity, schema, and link checks.

### Task 7: Full corpus and production release

**Files:**

- Generated: `public/search-index.json`
- Modify only if a failed audit proves necessary: sitemap, robots, hub, article, or metadata code.

**Interfaces:**

- Consumes: complete article and source registries.
- Produces: verified static output and a live Vercel production deployment.

- [ ] Run `npm run test`, `npm run typecheck`, `npm run lint`, `npm run lint:prose`, `npm run check:similarity`, `npm run check:links`, and `npm run build`.
- [ ] Audit counts, routes, canonicals, robots, sitemap, JSON-LD, alt/text equivalents, related links, and search-index presence.
- [ ] Commit all intended files on `main`, push `main`, deploy or promote the matching Vercel commit to production, and run `npm run verify:site -- https://hvac-bench.com` if supported by the script.
- [ ] Sample every new live article URL for HTTP success, canonical correctness, indexability, and expected title/H1.

## Self-review

Every master-standard workflow stage maps to a task. The interfaces retain existing field names (`brand`, `sourceIds`, `relatedContent`) and there are no implementation placeholders. Exact article prose is intentionally authored during each research task because inserting prewritten generic code into this plan would conflict with the anti-template rule.

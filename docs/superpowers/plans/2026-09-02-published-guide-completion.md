# HVAC Bench Published Guide Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn all 25 published HVAC Bench technical articles into concise, complete, source qualified, search focused field references and deploy the verified result to the existing production site.

**Architecture:** Extend the typed content registry with optional diagnostic content blocks, render those blocks through focused server components, and keep JSON LD derived from the same validated records. Research is recorded in one claim and query ledger, while article copy remains grouped by symptom, maintenance, communication code, and protection code families so every batch can be reviewed and tested independently.

**Tech Stack:** Next.js 16.3.4 App Router, React 19.2.8 Server Components, TypeScript 5, Zod 4, plain CSS, Vitest 4, Vercel.

## Global Constraints

1. Update exactly the 25 technical article records present at project start.
2. Use OEM service manuals, OEM operation manuals, OEM installation manuals, OEM support, government guidance, or standards bodies according to the evidence hierarchy in the approved specification.
3. Cross brand symptom claims require a source set that represents the claimed scope. Product specific procedures remain model dependent.
4. Do not copy OEM prose, OEM diagrams, manual pages, or product photography.
5. Published prose contains no em dash and no double hyphen.
6. Do not add a qualified reviewer, rating, review claim, or numerical diagnostic value without evidence.
7. Homeowner checks remain non invasive. Live electrical, refrigerant, internal panel, and safeguard bypass procedures remain professional work.
8. More words are not a success measure. Every block must resolve a material reader question or decision.
9. Use HowTo and FAQPage schema only when the corresponding content is visibly rendered.
10. Do not link this checkout to any Vercel project other than the existing `hvac-bench` production project.

---

### Task 1: Baseline inventory and content quality contract

**Files:**

- Create: `docs/content-research/published-guides-2026-09-02.md`
- Create: `src/content/articles-quality.test.ts`
- Modify: `src/content/schema.ts`

**Interfaces:**

- Consumes: `articles: TechnicalArticle[]` from `src/content/articles.ts`.
- Produces: an auditable list of the 25 starting routes and reusable article quality assertions.

- [ ] **Step 1: Capture the route and page family baseline**

Create the research ledger with one section per existing article path. Each section records primary intent, supporting questions, source claims, scope limits, internal link targets, planned content blocks, and research status. Seed it from the current registry so the document contains all 25 exact paths before research begins.

- [ ] **Step 2: Write failing article quality tests**

Add tests that assert the frozen route set remains exactly 25 records, every description and direct answer is unique, published prose contains neither `—` nor `--`, related routes are unique, and page family minimums can be checked through exported helpers.

```ts
const publishedPaths = articles.map((article) => article.path);

expect(publishedPaths).toHaveLength(25);
expect(new Set(publishedPaths).size).toBe(25);
expect(new Set(articles.map((article) => article.description)).size).toBe(25);

for (const article of articles) {
  const prose = JSON.stringify(article);
  expect(prose).not.toContain("—");
  expect(prose).not.toContain("--");
  expect(new Set(article.relatedContent).size).toBe(article.relatedContent.length);
}
```

- [ ] **Step 3: Run the focused test and confirm the new family assertions fail**

Run: `npx vitest run src/content/articles-quality.test.ts`

Expected: existing uniqueness assertions pass and assertions for the new content blocks fail because the schema does not define them yet.

- [ ] **Step 4: Add named reusable Zod primitives**

Define and export `diagnosticBranchSchema`, `decisionRowSchema`, `comparisonRowSchema`, `contentSectionSchema`, and `articleFigureSchema`. Each schema validates visible headings, reader focused copy, and complete decision cells. Extend `articleSchema` with optional arrays named `diagnosticBranches`, `decisionTable`, `comparisonTable`, `sections`, and `figures`, plus optional `scopeNotice` and `serviceHandoff`.

- [ ] **Step 5: Run schema and quality tests**

Run: `npx vitest run src/content/articles-quality.test.ts src/lib/content.test.ts`

Expected: PASS for schema import and baseline assertions. Content family requirements stay pending until their article batches are complete.

- [ ] **Step 6: Commit the baseline and schema contract**

Run:

```powershell
git add docs/content-research/published-guides-2026-09-02.md src/content/schema.ts src/content/articles-quality.test.ts
git commit -m "test: define complete guide content contract"
```

### Task 2: Diagnostic article components and responsive figures

**Files:**

- Create: `src/components/article-content-blocks.tsx`
- Create: `src/components/article-content-blocks.test.tsx`
- Modify: `src/components/article-page.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**

- Consumes: validated block types inferred from `src/content/schema.ts`.
- Produces: `ArticleContentBlocks({ article }: { article: TechnicalArticle })` and accessible figure, decision table, branch, comparison, and section renderers.

- [ ] **Step 1: Write failing component tests**

Test a representative article fixture and assert semantic headings, a table caption, column headers, a `figure` with `figcaption`, ordered checks, and text equivalents are rendered. Test that absent optional blocks produce no empty section headings.

```tsx
render(<ArticleContentBlocks article={fixture} />);
expect(screen.getByRole("table", { name: /remote response decision table/i })).toBeInTheDocument();
expect(screen.getByText(/manual operation works/i)).toBeInTheDocument();
expect(screen.getByRole("figure")).toHaveAccessibleName(/remote, receiver, and unit power path/i);
```

- [ ] **Step 2: Confirm the component test fails**

Run: `npx vitest run src/components/article-content-blocks.test.tsx`

Expected: FAIL because `ArticleContentBlocks` does not exist.

- [ ] **Step 3: Implement focused server components**

Implement one renderer per block type in `article-content-blocks.tsx`. Use semantic `section`, `ol`, `dl`, `table`, `figure`, and `figcaption` elements. Keep figure visuals driven by typed nodes and connectors, while including an adjacent text decision list so meaning does not depend on geometry or color.

- [ ] **Step 4: Replace the hard coded scope warning**

Update `ArticlePage` to render `article.scopeNotice` when present. Use an error code fallback only for error code articles and a controller or model dependent fallback for other types. Insert `ArticleContentBlocks` after the direct answer and before safety escalation in an order that preserves the reader's diagnostic path.

- [ ] **Step 5: Add responsive styles**

Add component classes for branch cards, decision tables, comparisons, compact field notes, and figures. Tables must scroll within their own container below 640 pixels. Figure nodes must reflow to a single column on small screens. Use existing design tokens and preserve the reading measure.

- [ ] **Step 6: Run component, style, and accessibility contract tests**

Run: `npx vitest run src/components/article-content-blocks.test.tsx src/components/article-page.test.tsx src/lib/styles.test.ts`

Expected: PASS with no empty headings and no regression to contrast or touch targets.

- [ ] **Step 7: Commit the article system upgrade**

Run:

```powershell
git add src/components/article-content-blocks.tsx src/components/article-content-blocks.test.tsx src/components/article-page.tsx src/app/globals.css
git commit -m "feat: add diagnostic article content blocks"
```

### Task 3: Structured data parity and metadata coverage

**Files:**

- Modify: `src/components/json-ld.tsx`
- Modify: `src/lib/seo.ts`
- Modify: `src/lib/seo.test.ts`
- Modify: `src/components/article-page.test.tsx`

**Interfaces:**

- Consumes: `TechnicalArticle` with ordered `steps`, visible `faqs`, source IDs, and new article blocks.
- Produces: JSON LD that matches visible content and page metadata that remains unique and canonical.

- [ ] **Step 1: Add failing JSON LD parity tests**

Assert HowTo is absent without ordered steps, FAQPage is absent without visible FAQs, citations match resolved source URLs, `abstract` matches `directAnswer`, and breadcrumb IDs use the canonical route.

- [ ] **Step 2: Run focused SEO tests and record the failure**

Run: `npx vitest run src/lib/seo.test.ts src/components/article-page.test.tsx`

Expected: the newly added parity assertion fails before implementation.

- [ ] **Step 3: Derive structured data from the validated record only**

Refactor JSON LD helpers where required so schema is generated from the same `steps`, `faqs`, sources, dates, models, author, and visible direct answer passed to `ArticlePage`. Do not infer FAQ or HowTo content from generic safe checks.

- [ ] **Step 4: Test metadata length and uniqueness across all routes**

Add table driven assertions for title, description, canonical URL, Open Graph URL, and social image route. Confirm descriptions remain 70 to 180 characters and keyword arrays contain no duplicates.

- [ ] **Step 5: Run the complete SEO test set**

Run: `npx vitest run src/lib/seo.test.ts src/components/article-page.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit structured data safeguards**

Run:

```powershell
git add src/components/json-ld.tsx src/lib/seo.ts src/lib/seo.test.ts src/components/article-page.test.tsx
git commit -m "test: enforce visible content schema parity"
```

### Task 4: OEM source discovery and claim ledger

**Files:**

- Modify: `docs/content-research/published-guides-2026-09-02.md`
- Modify: `src/content/sources.ts`
- Test: `src/lib/content.test.ts`

**Interfaces:**

- Consumes: the 25 article research sections from Task 1.
- Produces: stable source IDs with exact titles, publishers, URLs, document types, scope notes, and page level claim mapping.

- [ ] **Step 1: Research controller and general symptom source lanes**

Search official Fujitsu, Daikin, Mitsubishi Electric or Trane, LG, Gree, Midea, MRCOOL, Pioneer, and Senville domains for current operation manuals, controller manuals, service manuals, and official support. Record the exact models or series covered and the claims each document supports.

- [ ] **Step 2: Research each error code against its exact family**

For every code route, verify code meaning, display context, likely diagnostic areas, reset or restart direction, warnings, and family scope against the exact OEM document. Record conflicts instead of selecting a convenient meaning.

- [ ] **Step 3: Complete query and intent mapping**

For every route, record a primary intent, close query variants, adjacent questions, likely ambiguity, and the specific neighboring HVAC Bench route that must remain distinct. Use live search language for discovery, but use OEM material for technical claims.

- [ ] **Step 4: Add verified source records**

Add only sources whose official URL and scope can be confirmed. Use descriptive IDs such as `mitsubishi-m-series-operation` and scope notes that name covered product families. Remove or replace stale URLs only after verifying an official durable destination.

- [ ] **Step 5: Check all source URLs**

Run a bounded link check that records status, redirect destination, and content type for every source URL. Accept an official PDF or official support landing page. Investigate authentication, bot protection, and locale redirects manually rather than treating them as proof of failure.

- [ ] **Step 6: Run content registry tests**

Run: `npx vitest run src/lib/content.test.ts`

Expected: PASS with unique source IDs and valid article source references.

- [ ] **Step 7: Commit the verified evidence set**

Run:

```powershell
git add docs/content-research/published-guides-2026-09-02.md src/content/sources.ts
git commit -m "docs: map OEM evidence for published guides"
```

### Task 5: Remote control reference guide

**Files:**

- Modify: `src/content/articles.ts`
- Modify: `src/content/articles-quality.test.ts`
- Test: `src/components/article-page.test.tsx`

**Interfaces:**

- Consumes: verified controller sources and all typed article blocks.
- Produces: the complete `/mini-split-remote-not-working/` reference implementation for cross brand symptom pages.

- [ ] **Step 1: Write the failing remote coverage test**

Assert the article contains separate blank display and display works branches, a six row decision table, matched battery replacement, model dependent reset, transmitter check limits, receiver obstruction, locks and timers, emergency operation, indoor power, compatibility, six specified FAQs, at least four relevant OEM source IDs, and the remote specific scope notice.

- [ ] **Step 2: Confirm the coverage test fails**

Run: `npx vitest run src/content/articles-quality.test.ts -t "remote control guide"`

Expected: FAIL against the original shallow record.

- [ ] **Step 3: Rewrite the complete remote article record**

Use the branch order: physical handset state, fresh matched batteries, reset where documented, command state, signal path, receiver, manual operation, unit power, compatibility, and service. Explain that an LCD display does not prove successful transmission and that a phone camera check is model and camera dependent, not proof of full command validity.

- [ ] **Step 4: Add the original diagnostic figure and decision table**

Add a remote to receiver to unit power figure with an equivalent text path. Add rows for blank display, display with no beep, manual control works, manual control fails, unit beeps without applying settings, and intermittent close range response.

- [ ] **Step 5: Add six nonduplicative FAQs and diagnostic internal links**

Answer remote display on but no response, reset, operation without the remote, transmitter checks, universal remote compatibility, and beep without temperature change. Link naturally to not turning on, not cooling, not heating, and relevant brand or controller references.

- [ ] **Step 6: Run focused content and render tests**

Run: `npx vitest run src/content/articles-quality.test.ts src/components/article-page.test.tsx`

Expected: PASS for the remote guide and schema rendering.

- [ ] **Step 7: Commit the reference guide**

Run:

```powershell
git add src/content/articles.ts src/content/articles-quality.test.ts
git commit -m "content: complete mini split remote guide"
```

### Task 6: Core operation symptom guides

**Files:**

- Modify: `src/content/articles.ts`
- Modify: `src/content/articles-quality.test.ts`
- Modify: `docs/content-research/published-guides-2026-09-02.md`

**Interfaces:**

- Consumes: verified cross brand operation sources and reference content blocks.
- Produces: complete records for not cooling, not heating, not turning on, outdoor unit not running, and short cycling.

- [ ] **Step 1: Add failing page specific coverage assertions**

Require each route to distinguish normal operation from a fault, settings from equipment failure, safe observations from service work, and a technician handoff. Require not cooling to cover mode, setpoint, fan only behavior, airflow, doors and load, condensate or ice clues, outdoor response, and code collection. Require not heating to cover warm up, defrost, outdoor temperature and capacity limits, mode, airflow, backup heat context where applicable, and persistent no heat. Define similarly explicit acceptance lists for the other three routes in test names.

- [ ] **Step 2: Run the five route assertions and confirm failure**

Run: `npx vitest run src/content/articles-quality.test.ts -t "core operation"`

Expected: FAIL until the five records contain the required branches.

- [ ] **Step 3: Rewrite not cooling and not heating**

Use observation first paths. Avoid implying that refrigerant is the first or only explanation. Explain inverter modulation, fan behavior, delay, defrost, and ambient limitations only where supported, with model dependent language.

- [ ] **Step 4: Rewrite not turning on and outdoor unit not running**

Separate a dead indoor unit from an indoor unit that responds while the outdoor unit waits. Cover user controls, timers, restart protection, demand, multi zone behavior, fault display, breaker stop points, and the difference between no call and a failed component.

- [ ] **Step 5: Rewrite short cycling**

Distinguish inverter modulation, thermostat satisfaction, fan continuation, and true repeated hard starts. Add an observation timeline figure and a recording template covering run time, off time, room temperature, outdoor temperature, mode, setpoint, and displayed code.

- [ ] **Step 6: Optimize titles, descriptions, FAQs, and internal links for the five intents**

Keep every title and description unique. Answer adjacent questions in the most relevant page and link to it from neighboring pages to avoid duplicating full answers.

- [ ] **Step 7: Run content, SEO, and link tests**

Run: `npx vitest run src/content/articles-quality.test.ts src/lib/seo.test.ts && npm run check:links`

Expected: PASS.

- [ ] **Step 8: Commit the core operation batch**

Run:

```powershell
git add src/content/articles.ts src/content/articles-quality.test.ts docs/content-research/published-guides-2026-09-02.md
git commit -m "content: complete core mini split symptom guides"
```

### Task 7: Water, ice, sound, odor, and filter guides

**Files:**

- Modify: `src/content/articles.ts`
- Modify: `src/content/articles-quality.test.ts`
- Modify: `docs/content-research/published-guides-2026-09-02.md`

**Interfaces:**

- Consumes: verified OEM maintenance, drainage, defrost, filter, and operation sources.
- Produces: complete records for leaking water, frozen indoor coil, outdoor unit iced over, making noise, musty odor, and filter cleaning.

- [ ] **Step 1: Add failing page specific coverage tests**

Require a leak observation map, an indoor coil freeze cause map, a normal defrost comparison, a sound classification table, an odor safety branch, and a complete ordered filter procedure. Require every guide to state what not to do where a common harmful action exists.

- [ ] **Step 2: Confirm the six route assertions fail**

Run: `npx vitest run src/content/articles-quality.test.ts -t "water ice sound odor and filter"`

Expected: FAIL against the original records.

- [ ] **Step 3: Rewrite leaking water and frozen indoor coil**

Separate source location, operating mode, drain behavior, filter or airflow evidence, ice, mounting or level, pump context, and wall or ceiling risk. Keep drain disassembly, refrigerant diagnosis, and internal cleaning out of homeowner steps.

- [ ] **Step 4: Rewrite outdoor unit iced over**

Distinguish light frost, active defrost, steam or water, snow blockage, frozen base drainage, and persistent encasement. Add a comparison figure and explicit unsafe deicing actions.

- [ ] **Step 5: Rewrite noise and musty odor**

Classify normal refrigerant, expansion, fan, defrost, and drain sounds separately from grinding, repeated impact, electrical buzzing, and hissing with performance loss. Separate absorbed room odor, damp contamination, drain issues, burning odor, and suspected refrigerant odor without encouraging unsafe diagnosis.

- [ ] **Step 6: Rewrite filter cleaning as a true procedure**

Cover exact manual identification, shutdown, panel access limit, orientation, dry versus washable filter, gentle cleaning, detergent only when allowed, complete air drying, refitting, reminder reset, replacement fit, and when coil or blower cleaning requires service. Ensure visible steps and HowTo schema are identical.

- [ ] **Step 7: Run content, HowTo parity, SEO, and link tests**

Run: `npx vitest run src/content/articles-quality.test.ts src/lib/seo.test.ts src/components/article-page.test.tsx && npm run check:links`

Expected: PASS.

- [ ] **Step 8: Commit the condition and maintenance batch**

Run:

```powershell
git add src/content/articles.ts src/content/articles-quality.test.ts docs/content-research/published-guides-2026-09-02.md
git commit -m "content: complete condition and maintenance guides"
```

### Task 8: Communication error code guides

**Files:**

- Modify: `src/content/articles.ts`
- Modify: `src/content/articles-quality.test.ts`
- Modify: `docs/content-research/published-guides-2026-09-02.md`

**Interfaces:**

- Consumes: exact family OEM evidence for Gree E6, Daikin U4, LG CH05, Midea E1, MRCOOL EL01 or E1, and Pioneer Quantum E1.
- Produces: six complete, family scoped communication code references.

- [ ] **Step 1: Add failing communication code coverage tests**

For each route, assert exact family, code definition, effect, signal path diagnostic areas, safe observations, reset limit, technician scope, service handoff, and at least three diagnostic internal links. Assert titles and direct answers do not imply universal manufacturer wide meanings.

- [ ] **Step 2: Confirm communication assertions fail**

Run: `npx vitest run src/content/articles-quality.test.ts -t "communication error codes"`

Expected: FAIL until all six code records meet the new standard.

- [ ] **Step 3: Rewrite Gree E6, Daikin U4, and LG CH05**

Use only the diagnostic areas named by each exact manual. Add a communication path figure only when the page explains that the display identifies a path, not a failed board. Preserve manufacturer specific timing or network context without exposing live test instructions.

- [ ] **Step 4: Rewrite Midea E1, MRCOOL EL01 or E1, and Pioneer Quantum E1**

Make product family ambiguity prominent because E1 has different meanings on other products. Separate a documented power cycle from repeated reset behavior and state the stopping point.

- [ ] **Step 5: Complete page specific FAQs and related paths**

Answer whether the unit can be used, whether a reset is appropriate, whether wiring is proven faulty, what model information is needed, and why the same code can mean something else on another family only where these questions add value.

- [ ] **Step 6: Run content, SEO, schema, and link tests**

Run: `npx vitest run src/content/articles-quality.test.ts src/lib/seo.test.ts src/components/article-page.test.tsx && npm run check:links`

Expected: PASS.

- [ ] **Step 7: Commit communication code content**

Run:

```powershell
git add src/content/articles.ts src/content/articles-quality.test.ts docs/content-research/published-guides-2026-09-02.md
git commit -m "content: complete communication error code guides"
```

### Task 9: Protection, sensor, and remaining error code guides

**Files:**

- Modify: `src/content/articles.ts`
- Modify: `src/content/articles-quality.test.ts`
- Modify: `docs/content-research/published-guides-2026-09-02.md`

**Interfaces:**

- Consumes: exact OEM evidence for Gree H5, Daikin A5, MRCOOL P1 or PC01, MRCOOL P0 or PC00, Pioneer current E1 or E2, Senville EH02, and Senville PC0A.
- Produces: seven complete family scoped protection and sensor references.

- [ ] **Step 1: Add failing remaining code coverage tests**

Require exact family scope, protection or sensor definition, what operation may stop, observable contributor categories, one safe diagnostic path, harmful action warnings, reset limits, technician test categories, and service handoff information for each route.

- [ ] **Step 2: Confirm the seven route assertions fail**

Run: `npx vitest run src/content/articles-quality.test.ts -t "protection and sensor error codes"`

Expected: FAIL before the content batch.

- [ ] **Step 3: Rewrite Gree H5 and Daikin A5**

Separate airflow observations from refrigerant, thermistor, compressor, inverter, and control diagnosis. Do not turn a cause list into a part replacement recommendation.

- [ ] **Step 4: Rewrite MRCOOL voltage and inverter protection pages**

Distinguish voltage class and documented model context. Explain why a protection code does not authorize repeated breaker resets or live measurements by a homeowner.

- [ ] **Step 5: Rewrite Pioneer sensor E1 or E2 and Senville EH02 and PC0A**

Make the same code ambiguity between Pioneer product families explicit. Explain zero crossing and condenser temperature protection in reader safe language while preserving the professional electrical boundary.

- [ ] **Step 6: Run content, SEO, schema, and link tests**

Run: `npx vitest run src/content/articles-quality.test.ts src/lib/seo.test.ts src/components/article-page.test.tsx && npm run check:links`

Expected: PASS.

- [ ] **Step 7: Commit the remaining code content**

Run:

```powershell
git add src/content/articles.ts src/content/articles-quality.test.ts docs/content-research/published-guides-2026-09-02.md
git commit -m "content: complete protection and sensor code guides"
```

### Task 10: Site wide editorial and search optimization review

**Files:**

- Modify: `src/content/articles.ts`
- Modify: `src/content/articles-quality.test.ts`
- Modify: `src/content/sources.ts`
- Modify: `docs/content-research/published-guides-2026-09-02.md`

**Interfaces:**

- Consumes: all 25 completed article records.
- Produces: a nonoverlapping keyword map, complete internal diagnostic graph, final source set, and closed research ledger.

- [ ] **Step 1: Generate a title, description, direct answer, primary intent, and FAQ comparison report**

Inspect all 25 records side by side. Identify repeated openings, overlapping FAQ answers, weak query distinctions, and identical internal link sets.

- [ ] **Step 2: Review every page against its research ledger**

Mark each required question as answered in the body, decision table, comparison, procedure, or FAQ. Remove redundant blocks and close every material source gap or label the limitation in copy.

- [ ] **Step 3: Review internal linking as a graph**

Confirm each article has a useful hub path, three to eight relevant related routes where inventory permits, and contextual links for diagnostic forks. Remove links whose only purpose is count inflation.

- [ ] **Step 4: Enforce prose and metadata quality in tests**

Add final assertions for prohibited punctuation, duplicate keyword entries, repeated FAQ questions, weak anchor placeholders, source count appropriate to claimed scope, and complete service handoff on every article.

- [ ] **Step 5: Run all unit and content tests plus link checking**

Run: `npm run test && npm run check:links`

Expected: PASS with all 25 guides represented.

- [ ] **Step 6: Commit the site wide editorial review**

Run:

```powershell
git add src/content/articles.ts src/content/articles-quality.test.ts src/content/sources.ts docs/content-research/published-guides-2026-09-02.md
git commit -m "content: finish published guide editorial review"
```

### Task 11: Full release gate and exhaustive visual review

**Files:**

- Modify if defects are found: `src/app/globals.css`
- Modify if defects are found: `src/components/article-content-blocks.tsx`
- Modify if defects are found: `src/components/article-page.tsx`
- Modify if defects are found: `src/content/articles.ts`

**Interfaces:**

- Consumes: the completed site and release scripts.
- Produces: a build that passes every automated check and visual evidence for all 25 routes at desktop and mobile widths.

- [ ] **Step 1: Run the complete release gate**

Run: `npm run verify`

Expected: tests, TypeScript, ESLint, internal links, search index generation, and Next.js production build all exit successfully.

- [ ] **Step 2: Start the production build locally**

Run: `npm run start`

Expected: the production server starts on the selected local port with no runtime error.

- [ ] **Step 3: Inspect all 25 routes at 1440 by 1000 and 390 by 844**

Use browser automation to visit every published article. Check the H1, direct answer, scope notice, diagnostic blocks, tables, figures, FAQ controls, sources, related cards, and footer. Record console errors, failed requests, overflow, clipping, collapsed text, and inaccessible controls.

- [ ] **Step 4: Correct observed defects and rerun only affected focused checks**

For each real defect, add or strengthen a regression test where practical, make the smallest correction, rerun the focused test, and revisit the affected desktop and mobile route.

- [ ] **Step 5: Rerun the complete release gate after corrections**

Run: `npm run verify`

Expected: PASS from a clean working tree except for the verified correction set.

- [ ] **Step 6: Commit verified release corrections**

Run:

```powershell
git add src
git commit -m "fix: resolve published guide release defects"
```

Skip the commit only if Step 4 required no changes.

### Task 12: Production deployment and live verification

**Files:**

- No planned source changes.
- Modify only if a production specific defect is reproduced locally and receives its own test.

**Interfaces:**

- Consumes: verified `main` branch and the existing Vercel project link.
- Produces: updated canonical pages at `https://hvac-bench.com/`.

- [ ] **Step 1: Verify repository and Vercel target**

Run: `git status --short`, `git log -5 --oneline`, and read `.vercel/project.json` if present.

Expected: clean working tree, all content commits on `main`, and project name or ID matching HVAC Bench. Stop before deployment if the project does not match.

- [ ] **Step 2: Deploy the verified build to production**

Run the repository's established Vercel production deployment command. If the project is already configured for Git based deployment, push the verified `main` branch and monitor the resulting production deployment.

Expected: successful deployment assigned to the canonical HVAC Bench domain.

- [ ] **Step 3: Verify production status and metadata**

Check the home page, sitemap, remote guide, one cross brand operation guide, one maintenance guide, and at least one route from each error code manufacturer. Confirm HTTP 200, canonical URL, title, description, TechArticle schema, visible FAQs where present, updated review date, and expected source links.

- [ ] **Step 4: Verify representative production layouts**

Inspect remote control, leaking water, filter cleaning, Gree E6, and MRCOOL P1 on desktop and mobile. Confirm figures, tables, source lists, and internal links match the locally verified build.

- [ ] **Step 5: Report the production result**

Provide the production URL, deployment identifier, commit range, automated verification results, number of visually reviewed local pages, representative live checks, and any external search console action that remains outside the repository.

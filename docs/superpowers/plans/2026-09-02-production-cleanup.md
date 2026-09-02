# Production Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove unsupported editorial claims and prevent the publication helper from inventing verification provenance while preserving current verified pages and SEO.

**Architecture:** Keep review provenance in each article record, with `publish()` supplying only a neutral editorial state when provenance is absent. Enforce the relationship between review status and review date in the content schema, then preserve the current corpus by making its earned status explicit at each article declaration.

**Tech Stack:** TypeScript, Zod, Vitest, Vale, Next.js 16, Vercel.

## Global Constraints

- Preserve existing routes, metadata, source links, and verified-content presentation.
- A newly published record without explicit provenance must remain in editorial review and have no review date.
- A source-verified record must carry an explicit ISO review date; an editorial-review record must not carry one.
- Vale must report zero unsupported frequency claims, with technical conditions retained in the copy.

---

### Task 1: Provenance contract

**Files:**
- Modify: `src/lib/content.test.ts`
- Modify: `src/content/schema.ts`
- Modify: `src/content/articles/publish.ts`
- Modify: `src/content/articles/*.ts`

**Interfaces:**
- Consumes: article records passed to `publish(article)`.
- Produces: `TechnicalArticle` records whose review metadata is explicit or conservatively unreviewed.

- [ ] Add regression tests showing a provenance-free publish remains `editorial-review` without `lastReviewed`, source verification requires a date, and editorial review rejects a review date.
- [ ] Run the focused tests and confirm the new expectations fail for the current automatic defaults.
- [ ] Make `lastReviewed` conditional in the Zod schema and remove automatic verified/date defaults from `publish()`.
- [ ] Add explicit existing provenance to every currently verified article.
- [ ] Run the focused tests and typecheck.

### Task 2: Editorial cleanup

**Files:**
- Modify: flagged files under `src/content/articles/`, `src/content/glossary/`, and `src/app/`.

**Interfaces:**
- Consumes: Vale warning locations emitted from extracted published prose.
- Produces: equivalent, supportable reader-facing copy with no Vale warnings.

- [ ] Replace unsupported frequency wording with concrete conditions or source-bounded mechanisms.
- [ ] Rewrite remaining flagged sentence openings and overlong sentences without changing scope, safety guidance, routes, or keywords.
- [ ] Run `npm run lint:prose` and confirm zero errors and zero warnings.

### Task 3: Release verification

**Files:**
- Verify: complete repository and deployed production site.

**Interfaces:**
- Consumes: the cleaned and provenance-safe main branch.
- Produces: a tested commit, pushed main branch, and verified production deployment.

- [ ] Run `npm run verify` and fix any regression through a focused failing test.
- [ ] Review the diff and repository status, then commit and push `main`.
- [ ] Deploy the tested revision to Vercel production.
- [ ] Inspect deployment status, run live-site verification, check representative SEO/provenance output, and scan production logs for errors.

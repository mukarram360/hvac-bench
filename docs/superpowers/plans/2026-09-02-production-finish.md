# HVAC Bench production finish

Date: 2026-09-02
Branch: main

## Live audit findings

Audited https://hvac-bench.com against the repository at `a94a868`.

1. **Template leakage across 24 of 25 articles.** `completionDefaults()` in
   `src/content/articles.ts` synthesises `diagnosticBranches`, `decisionTable`,
   `figures`, `sections`, `serviceHandoff`, `faqs`, and `keywords` for every
   article that does not supply its own. Only `mini-split-remote-not-working`
   is hand written. Consequences visible in production:
   - Every page carries the identical "Observe / Check safely / Escalate"
     figure and the identical three-row decision table.
   - FAQ questions are generated from the title, producing
     "What does How to clean a mini-split filter without damaging it mean?"
     and "Can I safely reset How to clean a mini-split filter...?".
   - Sections repeat "What the evidence supports" and "What to record before
     service" verbatim site wide.
2. **Public outbound source links.** `article-page.tsx` renders a Sources list
   of `target="_blank"` OEM links; the homepage promises claims are "listed at
   the foot of the page"; `/sources-methodology/` repeats the promise.
3. **Count and taxonomy inconsistency.** Homepage reads "25 guides"; `/guides/`
   reads "1 published" because it filters `articleType` guide + maintenance.
4. **Empty hubs are indexable.** `/compare/` and `/how-to/` publish
   "First pages in preparation" with `index, follow` and sit in the sitemap.
5. **No benchmark score system, no assistant.** Search is a static-index
   substring matcher.

## Plan

- **A. Evidence model and truthfulness.** Split evidence into OEM evidence and
  owner-experience evidence as separate internal classes. Remove public
  outbound source links and source cards; keep every URL, note, and mapping in
  the repository. Rewrite public copy so it claims only what is true.
  Noindex genuinely empty hubs; make counts honest and consistent.
- **B. Content.** Delete `completionDefaults`. Move each article to its own
  module and write query-specific reasoning for all of them, grounded in the
  already-verified evidence ledger. Add tests that fail on template leakage,
  generated FAQ artifacts, and duplicated reasoning across articles.
- **C. Benchmark.** Evidence-gated scoring engine with per-equipment-class
  weights, sample-size and confidence gates, dimension selection per equipment
  class, and reproducible explainable output. Tests against fabricated scores,
  low-sample publication, duplicate reviews, and family contamination.
- **D. Assistant.** Server-side retrieval over a prebuilt passage index with
  extractive answering, so an unsupported question returns a refusal rather
  than an invention. Pluggable answer generator for a future model backend.
  Tests for retrieval accuracy, contamination, refusals, safety, links, latency.
- **E. Visual system, final live audit, deploy.**

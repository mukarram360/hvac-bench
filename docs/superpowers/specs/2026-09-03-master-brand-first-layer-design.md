# HVAC Bench master brand first-layer design

## Goal

Publish one evidence-backed supporting article for every manufacturer in `src/content/brands.ts`, while preserving the existing editorial model and making every new page discoverable from Learn, its brand hub, the appropriate format hub, the equipment hub, search, sitemap, and related-content graph.

## Editorial approach

Three approaches were considered. A uniform error-code rollout would be fast but would violate the master standard whenever a code changes by family. A brand-overview rollout would be safer but would produce weak search intent and duplicate the brand hubs. The selected approach is a hybrid evidence-first layer: use an exact family/code query when an OEM manual gives a defensible scope; otherwise use a family-specific operating state, control message, or owner procedure with an equally clear primary source.

Each article receives its own query assessment, SERP-gap note, model and regional boundary, primary evidence record, outline, value layer, owner/technician boundary, metadata, and internal-link decision. Search volume and keyword difficulty will not be invented. Ranking feasibility is described from observable SERP composition only.

## Architecture

The content registry remains the single source of truth. Each new article lives in its own module under `src/content/articles/`, cites records in `src/content/sources.ts`, and is imported explicitly by `src/content/articles/index.ts`. Existing content queries automatically expose articles on brand, equipment, error-code, troubleshooting, Learn, sitemap, RSS, `llms.txt`, and search-index surfaces.

No new CMS, route, schema type, or client-side dependency is required. Original visuals use the existing HTML figure and table components, which keep the information indexable in text and avoid fabricated photography.

## Provenance and safety

The HVAC Bench editorial desk remains the truthful author entity. `source-verified` and `lastReviewed` are used only after the cited documents are checked during this build. Community results inform vocabulary and ambiguity but never support technical claims.

Owner actions are limited to displays, settings, accessible filters, visible obstructions, documented user resets, and information collection. Wiring tests, live voltage, combustion, gas, refrigerant, cabinet access, and component replacement remain technician-only.

## Testing and release

A new coverage contract will fail until every registered brand has at least one article. Existing schema, evidence, provenance, safety, prose, template-leakage, similarity, link, navigation, sitemap, metadata, and build checks remain mandatory. Release also requires a clean production build, Vercel production promotion, canonical-host verification, page sampling, and a final live brand-coverage audit.

## Self-review

The design contains no placeholders. It does not change the existing route model, invent credentials, or require a repeated prose template. The 43-page scope is large but represents one cohesive deliverable because all pages use the same registry and the success condition is corpus-wide coverage.

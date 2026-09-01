# HVAC Bench initial production design

## Product direction

HVAC Bench is an evidence-led HVAC reference publication, not a chronological blog. The initial experience helps a homeowner or technician move from a brand, code, symptom, or equipment type to a concise answer, safe checks, escalation guidance, and primary references. The visual tone is a restrained technical field guide: warm off-white paper, ink/navy text, safety orange used sparingly, compact labels, generous reading measure, and typography that feels editorial rather than dashboard-like.

## Approaches considered

1. Repository-native typed article records rendered by reusable Next.js routes. This gives the strongest build-time validation, controlled relationships, static generation, and simple testing. It is the selected approach.
2. Raw MDX files with frontmatter. Author-friendly, but requires more parsing/runtime dependencies and makes rich typed sections and relationship validation less direct for the initial build.
3. Headless CMS. Friendly for nontechnical editors, but adds cost, credentials, runtime dependencies, and operational surface before editorial volume justifies it.

## Architecture

The site uses the Next.js App Router, TypeScript, Tailwind CSS, npm, and static generation. Content lives in focused TypeScript data modules with Zod validation. A single content service validates every record, rejects unknown related slugs and unsafe thin records, exposes lookup/listing functions, and feeds routes, metadata, sitemap generation, search indexing, and tests. Dynamic brand and article pages use `generateStaticParams`; nonexistent records fail closed through `notFound()`.

The URL model reserves top-level sections for `/brands/`, `/error-codes/`, `/troubleshooting/`, and `/equipment/`. Brand-specific code guides live at `/brands/[brand]/[article]/`; brand-neutral symptom guides live at `/<slug>/`. Search is a small progressive-enhancement client component backed by a build-time index. `/search/` is noindex and does not create parameter-derived content URLs.

## Content and evidence

Ten brand hubs are included: Gree, Daikin, Mitsubishi, Midea, MRCOOL, Fujitsu, Pioneer, Senville, LG, and Samsung. The seed content is deliberately bounded. Each technical record stores title, slug, description, brand where applicable, equipment context, model scope, code or problem type, symptoms, causes, homeowner-safe checks, professional escalation, sources, review date/status, and explicit related content.

Technical pages must have at least one source, substantive answer/diagnostic sections, a review date, and a supported scope statement. Code meanings are qualified by product family because codes can differ between equipment lines. Homeowner steps never require opening electrical panels, live measurements, refrigerant handling, or safety-device bypasses. Technician-only diagnostics are summarized as escalation context, not presented as DIY procedures.

The initial evidence set prioritizes OEM service manuals and official support pages from Gree, Daikin, Midea, MRCOOL, Pioneer, Senville, LG, Samsung, Fujitsu General, Mitsubishi Electric, plus U.S. Department of Energy maintenance guidance for cross-brand symptoms. If a source cannot support a useful distinct page, that page is omitted rather than padded.

## UX and visual system

The signature element is a bench-card search console in the hero: a code-style input, direct routes into brands, codes, and symptoms, and an adjacent indexed-reference readout. The rest of the interface stays quiet. Brand marks are text-only to avoid trademark asset misuse. Cards use hairline rules, measured shadows, and small technical labels. Article pages use a narrow readable column with a sticky context rail on larger screens, direct-answer callout, model-scope note, safe-checks panel, escalation panel, sources, breadcrumbs, and controlled related links.

Mobile navigation is compact and keyboard-accessible. Focus states are visible, color contrast meets WCAG AA, motion is limited and respects reduced-motion settings, and the content remains fully useful without JavaScript.

## SEO, trust, and performance

Every indexable route has unique metadata, an absolute canonical on `https://hvac-bench.com`, Open Graph data, and appropriate schema. The root layout emits Organization and WebSite JSON-LD. Article pages emit Article schema only for real technical articles, plus BreadcrumbList. Search is noindex. `robots.ts`, `sitemap.ts`, 404 handling, clean redirects, and root-domain canonicalization are included. The sitemap generator is isolated so it can later be replaced by a sitemap index and shards without changing content routes.

Trust pages state the actual research workflow and limitations without implying technician authorship or review. GA4 and Search Console hooks are inactive unless real environment values exist. No ads, affiliate claims, cookies, authentication, database, CMS, remote product imagery, or paid services are introduced.

## Deployment and verification

The repository is linked only to Vercel project `hvac-bench` (`prj_N2KQIFEX0t6WlpRuF8c76KZYcxOV`). Production is built from `main`, deployed to Vercel, and verified at the apex domain. Vercel domain settings enforce `www.hvac-bench.com` as a permanent redirect to `https://hvac-bench.com`; Cloudflare DNS is left untouched unless Vercel proves a DNS defect.

Verification covers unit tests for validation, relationships, metadata/canonicals, sitemap inclusion, and internal routes; lint; type checking; production build; link checking against generated routes; structured-data parsing; representative production HTTP checks; apex HTTPS; www redirect status/location; robots; sitemap; and 404 behavior.


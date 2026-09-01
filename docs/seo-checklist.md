# SEO coverage

What is implemented in the codebase, and what still needs a decision or an account action from the owner. Grouped the way an audit is usually run, so it can be checked against any ranking-factor list.

Status key: **Done** is implemented and verified in the build. **Owner** needs an action outside the codebase. **Later** is a deliberate decision to wait for content volume.

## Crawling and indexing

| Item | Status | Where |
| --- | --- | --- |
| XML sitemap, generated from real routes | Done | `src/app/sitemap.ts` |
| Sitemap excludes utility and empty hub pages | Done | `getIndexableRoutes` in `src/lib/content.ts` |
| robots.txt with sitemap and host directives | Done | `src/app/robots.ts` |
| Explicit allow rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot, and others) | Done | `src/app/robots.ts` |
| Canonical URL on every page, absolute and self-referencing | Done | `pageMetadata` in `src/lib/seo.ts` |
| Trailing-slash URLs enforced consistently | Done | `next.config.ts` |
| `www` to apex 301 redirect at the edge | Done | `vercel.json` |
| `noindex, follow` on the search utility | Done | `src/app/search/page.tsx` |
| `noindex, follow` on hubs with no content yet, flipping automatically when content lands | Done | `isBrandIndexable`, `isEquipmentIndexable` |
| `max-snippet:-1`, `max-image-preview:large`, `max-video-preview:-1` | Done | `robotsAllowed` in `src/lib/seo.ts` |
| HTML site map for readers and crawlers | Done | `/site-map/` |
| RSS feed | Done | `/rss.xml` |
| `llms.txt` for AI agents | Done | `/llms.txt` |
| No orphan pages: every route reachable from header, footer, or a hub | Done | `src/lib/nav.ts`, `scripts/check-links.ts` |
| Internal links validated at build time | Done | `npm run check:links` |
| Submit sitemap in Google Search Console | Owner | Search Console |
| Submit sitemap in Bing Webmaster Tools | Owner | Bing |
| IndexNow key and submission on publish | Later | Worth adding once publishing cadence is regular |

## On-page

| Item | Status | Where |
| --- | --- | --- |
| Unique title on every page, brand-suffixed by template | Done | `layout.tsx` title template |
| Unique meta description, length-enforced 70 to 180 characters | Done | `articleSchema`, tested in `seo.test.ts` |
| One `h1` per page, with a real heading hierarchy below it | Done | Page templates |
| Descriptive, keyword-relevant URLs without dates or parameters | Done | Content registry `path` field |
| Breadcrumbs rendered and marked up | Done | `Breadcrumbs`, `breadcrumbJsonLd` |
| Direct answer in the first screen of every technical page | Done | `ArticlePage` answer box |
| Internal linking: hub to spoke, spoke to hub, and related content | Done | Brand hubs, `relatedContent`, rail links |
| Descriptive anchor text, no "click here" | Done | Throughout |
| External links to sources with `rel="noreferrer nofollow"` | Done | `ArticlePage` sources |
| Keyword metadata where it is genuinely descriptive | Done | `pageMetadata` |
| Open Graph and Twitter card tags | Done | `pageMetadata` |
| Per-article social preview images, generated at build | Done | `src/components/og-card.tsx` |
| Favicon and app icon | Done | `src/app/icon.tsx` |
| Web app manifest | Done | `src/app/manifest.ts` |
| Image `alt` text policy | Owner | No content images yet; required when they are added |

## Structured data

| Item | Status |
| --- | --- |
| `Organization` with logo, contact point, areas served, publishing principles, corrections policy | Done |
| `WebSite` with `SearchAction` | Done |
| `WebPage` on every page, linked to the site node by `@id` | Done |
| `BreadcrumbList` on every nested page, referenced rather than duplicated | Done |
| `TechArticle` with citations, author, publisher, dates, and equipment context | Done |
| `HowTo`, emitted only when a page carries ordered steps | Done |
| `FAQPage`, emitted only where real questions and answers exist | Done |
| `CollectionPage` and `ItemList` on hubs | Done |
| `DefinedTermSet` and `DefinedTerm` on the glossary | Done |
| `Person` or `Organization` author nodes on author pages | Done |
| No `aggregateRating`, `review`, or `reviewedBy` unless real | Done, enforced by test |

## Performance and Core Web Vitals

| Item | Status | Notes |
| --- | --- | --- |
| Every page statically prerendered | Done | 145 static routes at last build |
| Two font families, two weights each, self-hosted and preloaded | Done | IBM Plex Sans and Mono via `next/font` |
| `display: swap` on fonts to avoid invisible text | Done | |
| No layout shift from late-loading elements | Done | No hero image, fixed control sizes, consent notice is fixed-position |
| Analytics loaded with `lazyOnload` so it does not compete with render | Done | `src/components/analytics.tsx` |
| Search index fetched on intent, not on page load | Done | `/search-index.json`, fetched on focus |
| Minimal client JavaScript: header menu, search, consent only | Done | Everything else is a server component |
| `preconnect` and `dns-prefetch` for the measurement origin | Done | `layout.tsx` |
| Long-cache headers for fonts and the search index | Done | `next.config.ts` |
| Compression and AVIF/WebP image formats configured | Done | `next.config.ts` |
| Field data in Search Console CrUX | Owner | Needs traffic before it reports |

## Mobile and accessibility

| Item | Status |
| --- | --- |
| Responsive from 320 pixels with no horizontal scroll, verified in-browser | Done |
| Touch targets at least 44 by 44 pixels | Done, enforced by test |
| Text contrast at AA or better across the palette | Done, enforced by test |
| Visible keyboard focus ring, never removed | Done |
| Skip link to main content | Done |
| Reduced-motion support | Done |
| Semantic landmarks, labelled navigation regions | Done |
| Accessibility statement published | Done at `/accessibility/` |

## Trust, E-E-A-T, and compliance

| Item | Status |
| --- | --- |
| About page explaining who publishes and why | Done |
| Editorial policy, including how AI tooling is used | Done |
| Sources and methodology with a stated source hierarchy | Done |
| Corrections policy and public log | Done |
| Author registry with profile pages and Person schema | Done |
| Named reviewers with credentials | Owner, when a qualified reviewer is recruited |
| Byline and last-reviewed date on every technical page | Done |
| Citations on every technical page | Done |
| Safety disclaimer with jurisdiction-specific certification rules | Done |
| Privacy policy covering GDPR, UK GDPR, and CCPA | Done |
| Cookie policy listing every cookie and storage key | Done |
| Consent Mode v2 with UK, EEA, and Swiss regional defaults | Done |
| Affiliate disclosure meeting FTC, CAP, and EU requirements | Done |
| Terms of use, including trademark and no-affiliation statement | Done |
| Contact route for corrections and enquiries | Done |

## Analytics and measurement

| Item | Status |
| --- | --- |
| GA4 installed with the production stream ID as a hard default | Done, `G-J5MZ194SEG` |
| Client-side navigations reported as page views | Done |
| IP anonymisation enabled | Done |
| Advertising storage denied at all times | Done |
| Search Console verified | Owner, already done |
| Search Console and GA4 linked | Owner |
| Bing Webmaster Tools verified | Owner |

## Off-page and content strategy

These cannot be solved in code, and matter more than anything above once the technical base is sound.

| Item | Status |
| --- | --- |
| Publish against real search demand rather than invented keywords | Owner |
| Topical depth: complete a brand and a symptom family before starting the next | Owner |
| Digital PR and citation from trade publications, forums, and manufacturer communities | Owner |
| Business listings and social profiles to populate `sameAs` in Organization schema | Owner |
| Backlink monitoring and disavow review | Owner |
| Content refresh cadence with honest `lastReviewed` updates | Owner |

## Deliberately not done

- **Hreflang.** The site serves one English variant covering both US and UK conventions in the same page. Declaring `en-US` and `en-GB` for identical URLs would be noise. Revisit if genuinely separate regional URLs are ever published.
- **A strict Content Security Policy.** A nonce-based policy would force dynamic rendering and lose static generation, which would cost more in performance than it gains here. Other security headers, including HSTS with preload, are set.
- **Programmatic model-number pages.** The architecture supports them, but generating thousands of near-identical pages before demand is proven is the fastest way to earn a quality problem.

# Content authoring and evidence workflow

HVAC Bench publishes a URL only when its content record exists and passes validation. Never create empty taxonomy, model, symptom, or error-code pages to reserve keywords.

## The content registry

| File | Holds |
| --- | --- |
| `src/content/sources.ts` | Manufacturer and government documentation, with scope notes |
| `src/content/authors.ts` | Author and reviewer records used for bylines and Person schema |
| `src/content/brands.ts` | Manufacturer registry: regions, series, equipment, fault-display note |
| `src/content/glossary/` | Defined terms, one module per subject, each published as its own page |
| `src/content/articles.ts` | Every published technical page |
| `src/content/taxonomy.ts` | Equipment types, symptom families, content formats, regions |
| `src/content/schema.ts` | The validation rules all of the above must satisfy |

Validation runs when the registry is imported, so a malformed record fails `npm run build` rather than shipping.

## Publishing a page

### 1. Add the source first

Add the documentation to `src/content/sources.ts` with a stable ID, publisher, title, URL, source type, and a `scopeNote` naming the equipment the document actually covers. Preference order:

1. Manufacturer service manuals
2. Manufacturer installation and operation manuals
3. Official manufacturer support articles and knowledge bases
4. Government and standards-body guidance for cross-brand principles

Do not copy manufacturer prose. Record only claims the cited source supports for the stated product family.

### 2. Add the article record

Add a record to `src/content/articles.ts` through the `guide()` helper, which supplies the publishing defaults. Fields worth knowing:

| Field | Notes |
| --- | --- |
| `articleType` | `error-code`, `troubleshooting`, `maintenance`, `how-to`, `guide`, or `comparison`. Decides which hub lists the page. |
| `path` | Brand pages live at `/brands/<brand>/<slug>/`; cross-brand pages at `/<slug>/`. Always a trailing slash. |
| `description` | 70 to 180 characters. This is the meta description and must be unique. |
| `directAnswer` | The answer in two or three sentences. It renders in the dark answer box and becomes `abstract` in schema, which is what AI answer engines quote. |
| `models` | The exact models the source covers. Not the brand. |
| `productFamily` | The series name, shown in the scope box and on the social card. |
| `symptomFamily` | Optional. Derived from `problemType` when omitted; set it when the derivation would be wrong. |
| `steps` | Optional ordered procedure. Adding it emits `HowTo` schema, so only use it when the page really is a procedure. |
| `faqs` | Optional. Emits `FAQPage` schema and renders an accordion. Three to five is plenty. |
| `authorSlug` | Defaults to the editorial desk. |
| `reviewerSlug` | Set only when a named, qualified person actually reviewed the page. It emits `reviewedBy`. |
| `relatedContent` | Up to eight routes that continue the same diagnostic path. Validated against real routes. |

Safety boundaries are mandatory. Homeowner checks may cover settings, visible airflow restrictions, condensate observations, accessible filters, and non-invasive power checks. Live electrical diagnosis, refrigerant work, sealed-circuit access, capacitor handling, gas work, and bypassing safeguards belong in `professionalEscalation` only.

Use the narrowest accurate scope. If a source does not establish manufacturer-wide meaning for a code, name the documented family and do not generalise.

### 3. Adding a brand or a glossary term

New manufacturers go in `src/content/brands.ts` with `regions`, `series`, `group`, and a `faultDisplay` note explaining how that manufacturer reports faults. A brand hub is generated immediately but stays `noindex` and out of the sitemap until it carries at least one article, which is handled automatically by `isBrandIndexable`.

New glossary terms go in the subject module under `src/content/glossary/` that matches their `category`, and `src/content/glossary/index.ts` collects them. Cross-references in `related` must point at terms that exist, and the build enforces it.

Every term is published at `/glossary/<slug>/`, so a term record has to carry a page rather than a paragraph. `src/content/glossary-depth.test.ts` enforces the floor:

| Field | Requirement |
| --- | --- |
| `question` | The question the page answers, authored rather than templated, ending in a question mark |
| `shortAnswer` | 90 to 340 characters, names its own subject, and reads correctly with no page around it |
| `metaTitle` | Written per term, at most 60 characters because the layout appends the site name |
| `metaDescription` | 110 to 165 characters |
| `keywords` | At least three query shapes the page is actually written to answer |
| `facts` | At least three term-plate rows: unit, where measured, who measures it, why it matters |
| `howItWorks` | The mechanism, in the plainest terms the physics allows |
| `whereYouMeetIt` | At least three concrete situations where a reader meets the word |
| `howToCheck` | At least two checks, each marked `owner` or `technician` |
| `mistakes` | At least two confusions, phrased as what the term is not |
| `faqs` | At least three follow-up questions, none of them asked on another term page |
| `typicalValues` | Optional, and only for definitional constants, regulatory values, or figures a manual states. Diagnostic targets that vary by model are named as belonging to the manual instead of given a number |
| `sourceIds` | Cite where a held document supports the definition. A term that defines vocabulary rather than model behaviour cites nothing and says so on the page |

The test also rejects `shortAnswer`, `metaTitle`, `metaDescription`, and `howItWorks` shared between two terms, which is the failure mode of writing sixty pages in one pass.

## Review before publishing

- Confirm every technical claim against each linked source.
- Confirm source links still resolve and identify the exact document used.
- Confirm model and product-family language matches the evidence.
- Remove filler, unsupported resets, invented diagnostic values, part numbers, and specifications.
- Set `lastReviewed` to the real review date and use only an honest `reviewStatus`.
- Add related links only when they serve the same diagnostic path.
- Run `npm run verify` and inspect the page at desktop and mobile widths.

## House style

- Sentence case for headings. The design carries the emphasis; the words do not need to shout.
- Plain verbs, short sentences, no filler. Write for someone standing in front of a unit at eleven at night.
- Give both conventions where they differ: BTU per hour and kilowatts, Fahrenheit and Celsius, EPA Section 608 and F-Gas.
- Keep uncertainty. "The manufacturer does not publish a definition for this code" is a legitimate and useful sentence.
- No em dashes and no double hyphens in body copy; use a comma, a colon, or a new sentence.

## What the build guarantees

The build fails closed for invalid records, duplicate paths, unknown brands, sources, authors, or equipment types, broken related-content links, and glossary cross-references that do not resolve. Search and filter combinations never generate indexable URLs.

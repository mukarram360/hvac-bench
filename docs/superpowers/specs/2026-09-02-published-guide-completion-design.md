# HVAC Bench published guide completion design

## Purpose

Complete every currently published HVAC Bench technical guide as a concise, source qualified, search focused field reference. The work covers all 25 article records that exist at the start of the project. It improves the shared article system where the current template prevents a guide from answering its topic completely, then researches and rewrites every article individually.

The finished pages must help a reader make the next safe decision. More words are not a success measure. Complete diagnostic coverage, accurate model scope, readable structure, trustworthy sourcing, and a clear stopping point are the measures.

## Scope

The project covers:

1. Thirteen manufacturer error code guides.
2. Eleven cross brand troubleshooting guides.
3. One mini split filter maintenance guide.
4. The shared content schema, article renderer, structured data, supporting styles, content tests, link checks, and search index needed by those pages.
5. Production deployment to the existing HVAC Bench Vercel project after the repository passes its release gate and rendered pages pass visual checks.

The project does not add speculative model pages, copy manufacturer text or illustrations, invent reviewer credentials, create ratings, publish unverified numerical test values, or expand into unrelated site sections.

## Editorial principles

Every page follows these rules:

1. Write for a reader standing in front of the equipment and needing the next safe action.
2. Answer the primary search intent immediately, then distinguish observable states that lead to different diagnoses.
3. Keep paragraphs and instructions short, but do not omit a meaningful branch merely to keep the page short.
4. Use original wording. Manufacturer documentation establishes facts and scope but is not copied.
5. Do not use em dashes or double hyphens in published prose. Retain technically necessary spellings, product names, model numbers, URLs, and the established “mini split” keyword form chosen for each context.
6. Avoid generic AI transitions, repeated summaries, inflated claims, and keyword stuffing.
7. Explain uncertainty. A code or procedure that changes by family is described only for documented families.
8. Keep homeowner instructions non invasive. Panel access, live electrical work, refrigerant work, combustion work, and bypassing safeguards remain professional work.

## Evidence standard

Each article receives its own research record before editing. Research captures the search intent, the questions that must be answered, the product families involved, the source set, material claims, and the exact source supporting each claim.

For manufacturer error codes, acceptable evidence is the exact manufacturer's service manual, installation manual, operation manual, official code table, or official support article. The page names the documented family and does not treat a code as manufacturer wide unless the manufacturer does.

For cross brand symptom guides, the source set must represent the claimed scope. At least three relevant manufacturers are sought for material controller, operating, maintenance, or diagnostic behaviors. Government or standards body guidance may support genuinely cross brand safety and maintenance principles, but it cannot replace model specific OEM instructions. When a material behavior is model dependent, the copy says so.

Source records include a stable identifier, publisher, exact title, canonical or durable URL, document type, and a scope note. Links are checked at the time of publication. If an OEM document cannot be verified, its claims are not published.

## Search research and page targeting

Each page is assigned one primary intent rather than a forced exact match phrase. The research record includes:

1. Primary query and close variants.
2. Symptom, cause, reset, compatibility, safety, and service questions relevant to that query.
3. Search result language and official terminology used by the manufacturers.
4. Neighboring HVAC Bench pages that could overlap, with an explicit distinction between their intents.
5. A natural title, H1, description, direct answer, heading outline, and FAQ set.

Keywords are used only when they describe content that is actually present. Page titles, descriptions, headings, direct answers, image alternatives, and link anchors are written independently and naturally. No hidden text or duplicated keyword lists are introduced.

## Content model

The existing common fields remain for identity, taxonomy, publishing dates, sources, and relationships. The article content model is extended with reusable blocks that support real diagnostic writing without making every page identical.

Required or conditionally required content capabilities are:

1. A page specific overview that tells the reader what the guide covers and what it does not establish.
2. A scope notice whose wording changes by page type. Error code pages warn about family specific meanings. Symptom pages explain model dependent controls and procedures.
3. Observable states or diagnostic branches, such as a blank controller display versus a working display with no indoor unit response.
4. Ordered homeowner checks when order matters.
5. Decision tables for compact mappings between an observation, likely area, next safe check, and stop point.
6. Normal versus abnormal behavior comparisons where readers commonly misclassify normal operation as a fault.
7. Compatibility or replacement guidance when a control, filter, sensor, or part choice is part of the search intent.
8. Technician handoff information that tells the reader what to record without teaching unsafe service procedures.
9. Original figures with captions and accessible text when spatial or sequential relationships are clearer visually.
10. Page specific FAQs that answer real adjacent intent without repeating the body verbatim.

Content blocks are typed and validated. A page includes only the blocks that improve its topic. Empty headings and boilerplate are not rendered.

## Page families

### Error code guides

Every code guide identifies the code, exact documented family, observable effect, manufacturer definition, plausible diagnostic areas stated by the OEM, one safe observation path, reset limits, professional diagnostic scope, and information to give service. When two pages target the same code for different manufacturers or product families, titles and scope make the distinction explicit.

### Cross brand symptom guides

Every symptom guide distinguishes the main observable branches before listing causes. It covers normal operating behavior where relevant, settings and user controls, safe power and airflow observations, the most useful manual or emergency control test where officially documented, and a decision point for service. Cross brand claims use multiple OEMs. Procedures that differ by model tell the reader to use the exact manual.

### Maintenance guide

The filter guide covers filter identification, safe shutdown, access limits, removal orientation, dry versus washable media, cleaning, full drying, refitting, reminder reset, replacement compatibility, maintenance interval interpretation, and conditions that require deeper professional cleaning.

## Original figures

Figures are original HTML, CSS, or accessible inline SVG compositions. They do not reproduce OEM diagrams, manual pages, product photographs, or trademarked interface artwork.

The initial figure set includes, where the corresponding article benefits:

1. Remote, receiver, and unit power decision path.
2. Indoor to outdoor communication signal path.
3. Frozen indoor coil cause and stop point map.
4. Normal defrost versus persistent outdoor ice comparison.
5. Indoor water leak observation map.
6. Normal sound versus warning sound classification.
7. Short cycling observation timeline.

Every figure has a visible caption. Meaning is available in text, not color alone. Decorative lines are hidden from assistive technology. Text alternatives describe the decision or relationship rather than repeating the caption.

## Internal linking

Links are selected for the reader's diagnostic path, not to meet a quota. Every article links to its relevant hub through the template and may link contextually to related symptom, maintenance, or brand references within the body. The related reference section contains three to eight real destinations where available.

Anchor text names the destination or the decision it helps with. Links do not use “click here.” All paths must resolve through the content registry and pass the automated internal link check. The complete set is reviewed for orphan pages and circular but unhelpful linking patterns.

## Metadata and structured data

Each article has a unique search focused title, description, direct answer, canonical URL, Open Graph data, social image, dates, author, equipment type, models, product family where applicable, and a concise keyword set.

Structured data remains conservative:

1. TechArticle describes every technical guide and cites its actual sources.
2. BreadcrumbList reflects the visible breadcrumb path.
3. HowTo is emitted only for a genuine ordered procedure whose visible steps match the data.
4. FAQPage is emitted only for visible questions and answers.
5. No review, rating, qualified reviewer, or image claim is emitted without real evidence.

Structured data tests confirm parity between visible content and JSON LD.

## Remote control guide acceptance criteria

The remote control guide is the reference implementation for the expanded symptom format. It must cover:

1. A completely blank remote display, including batteries, polarity, matched replacement, contacts, corrosion, and handset damage.
2. A working display with no indoor unit response, including the fact that an LCD alone does not establish successful transmission.
3. Model dependent reset instructions based on verified OEM material.
4. A safe transmitter check whose limits are explained and which is not presented as universal proof.
5. Line of sight, range, angle, strong light or interference, and the indoor receiver window.
6. Lock, child lock, timer, and mode states as distinct checks where the source set supports them.
7. A model documented manual or emergency operation control as a diagnostic fork.
8. Safe indoor unit power observations.
9. A decision table separating remote, signal, receiver, and broader power or equipment problems.
10. Exact indoor unit model and remote part compatibility. Universal remotes are not described as guaranteed compatible.
11. FAQs covering a working display with no response, remote reset, operation without the remote, transmitter checks, universal replacements, and a unit that beeps without applying the command.
12. A controller specific scope warning in place of the current error code warning.
13. Cross brand source support from relevant official Fujitsu, Daikin, Mitsubishi Electric or Trane, and other available OEM controller documentation.

## Implementation sequence

Work proceeds in controlled groups so the site remains testable:

1. Capture the baseline and build an article coverage inventory.
2. Add source records and research records without changing published claims prematurely.
3. Extend the schema, renderer, JSON LD, styles, and tests.
4. Complete the remote guide as the symptom family reference and verify its layout.
5. Complete the remaining symptom and maintenance guides.
6. Complete the error code guides by manufacturer and documented family.
7. Review titles, descriptions, keyword targeting, FAQs, citations, and internal links across the whole set for duplication and gaps.
8. Run the complete release gate and render every published article at desktop and mobile widths.
9. Correct observed content, accessibility, metadata, linking, or layout defects.
10. Commit the finished implementation and deploy the verified main branch to the existing production project.
11. Verify the production URLs, metadata, structured data presence, source links, and representative responsive layouts after deployment.

## Testing and release requirements

Implementation is complete only when:

1. All 25 article records pass schema validation.
2. Every material technical claim is supported by an applicable source.
3. Every source URL resolves or has a documented official durable alternative.
4. Page family coverage tests confirm required blocks are present.
5. Titles, descriptions, direct answers, and FAQ questions are unique where expected.
6. JSON LD matches the visible page content.
7. All internal links resolve.
8. No published prose contains an em dash or double hyphen.
9. `npm run verify` passes, including tests, type checking, linting, link checking, and the production build.
10. All 25 article pages receive desktop and mobile visual review, with special attention to tables, figures, long model names, FAQs, source lists, and related cards.
11. Production deployment succeeds and the live sample checks return the expected status, canonical URL, metadata, and updated content.

## Deployment safety

The repository's existing Vercel project and canonical host are used. No unrelated Vercel project is linked. A production deployment happens only after the local release gate passes and the working tree has been reviewed for unrelated changes. Deployment output and the live canonical pages are verified before completion is reported.

# Content authoring and evidence workflow

HVAC Bench publishes a URL only when its content record exists and passes validation. Never create empty taxonomy, model, symptom, or error-code pages to reserve keywords.

## Add a source first

Add authoritative documentation to `src/content/sources.ts` with a stable ID, publisher, title, URL, source type, and applicable equipment context. Prefer, in order:

1. Manufacturer service, installation, and operator manuals
2. Manufacturer technical bulletins and support documentation
3. Authorized-service documentation
4. Strong secondary technical references only when primary material is unavailable and the claim is appropriately qualified

Do not copy OEM prose. Record only claims that the cited source supports for the stated product family or model context.

## Add the article record

Add a record to `src/content/articles.ts`. Required fields cover the direct answer, scope, symptoms, causes, safe homeowner checks, professional escalation, sources, review state, and controlled related links. The schema in `src/content/schema.ts` is authoritative.

Safety boundaries are mandatory. Homeowner checks may cover settings, visible airflow restrictions, condensate observations, accessible filters, and non-invasive power checks. Live electrical diagnosis, refrigerant work, sealed-circuit access, capacitor handling, gas-system work, and bypassing safeguards belong in professional escalation only.

Use the narrowest accurate scope. Error-code labels can differ between equipment families; if the source does not establish broad manufacturer-wide meaning, name the documented family or model and do not generalize.

## Review before publishing

- Confirm every technical claim against each linked source.
- Confirm source links still resolve and identify the exact document used.
- Confirm model and product-family language matches the evidence.
- Remove filler, unsupported resets, diagnostic values, part numbers, and specifications.
- Set `lastReviewed` to the real review date and use only an honest `reviewStatus`.
- Add related links only when they help the same diagnostic path.
- Run `npm run verify` and inspect the generated page at desktop and mobile widths.

The build fails closed for invalid records, duplicate paths, unknown brands or sources, and broken related-content relationships. Search/filter combinations do not generate indexable URLs.

import type { ExperienceSource, OwnerReport } from "./schema";

/**
 * Owner experience evidence.
 *
 * This is a separate evidence class from the OEM documentation in
 * `src/content/sources.ts`, and the separation is the point. A manufacturer
 * document can establish what a system is designed to do. It cannot establish
 * whether the people who bought it found it reliable, and no amount of OEM
 * material may be converted into a user-experience score.
 *
 * ## What may be entered here
 *
 * An observation qualifies only if all of the following hold:
 *
 * - It is a first-hand account from an identifiable owner, an identifiable
 *   trade account of field experience, or an independent test carried out by
 *   the publication reporting it.
 * - It was read at the URL recorded on its source, not summarised from a
 *   search result, an aggregator, or a retailer page describing what
 *   "customers say". A retailer blog reporting that owners are happy is not an
 *   owner observation; it is marketing with a citation shape.
 * - It names or clearly implies the model family it is about, and that family
 *   is recorded exactly. An observation about a neighbouring family in the
 *   same brand is not evidence about this one.
 * - Its `ratings` cover only the dimensions the observation actually speaks
 *   to. An owner complaining about noise does not get a reliability vote.
 * - The excerpt is stored so duplicates can be detected. Retailer reviews are
 *   syndicated widely, and the same text appears across several sites.
 *
 * ## Current state
 *
 * Empty. The primary sources that carry first-hand owner accounts at usable
 * volume, principally retailer review pages and the large owner forums, block
 * automated collection, and the accessible alternatives are aggregator articles
 * that paraphrase owners rather than quote them. Rather than seed the system
 * with secondhand summaries, the store stays empty and every family reports
 * "Not enough verified owner data yet", which is the honest reading of the
 * evidence available.
 *
 * Adding evidence is a data change only. Nothing in the engine, the components,
 * or the pages needs editing: a family publishes automatically once its
 * observations clear the thresholds in `src/lib/benchmark.ts`.
 */
export const experienceSources: ExperienceSource[] = [];

export const ownerReports: OwnerReport[] = [];

export function getExperienceSource(id: string) {
  return experienceSources.find((source) => source.id === id);
}

export function getOwnerReportsForFamily(brand: string, modelFamily: string) {
  return ownerReports.filter(
    (report) => report.brand === brand && report.modelFamily === modelFamily,
  );
}

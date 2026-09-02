import type { TechnicalArticle } from "../schema";
import { sources } from "../sources";

/**
 * Publication metadata only.
 *
 * An earlier version of this library also synthesised the reasoning on a page
 * from the title and the first listed cause, which gave two dozen articles the
 * same decision table and produced FAQ questions built out of headlines. That
 * generator is gone. Everything a reader reads is written in the article's own
 * module; this helper fills in the desk, the dates, and the evidence class,
 * which are facts about publication rather than content.
 */
type ArticleInput = Omit<
  TechnicalArticle,
  "authorSlug" | "datePublished" | "lastReviewed" | "reviewStatus" | "sourceType" | "glossaryTerms"
> &
  Partial<
    Pick<
      TechnicalArticle,
      | "authorSlug"
      | "datePublished"
      | "lastReviewed"
      | "reviewStatus"
      | "reviewerSlug"
      | "glossaryTerms"
    >
  >;

const TERMS_BY_PROBLEM: Record<string, string[]> = {
  "communication-fault": ["error-code", "control-board", "data-plate"],
  "zero-crossing-signal-fault": ["error-code", "control-board", "sensor-fault"],
  "temperature-sensor-fault": ["thermistor", "sensor-fault", "error-code"],
  "inverter-module-protection": ["inverter-module", "protection-code", "compressor"],
  "voltage-protection": ["protection-code", "inverter-module", "data-plate"],
  "coil-temperature-protection": ["thermistor", "evaporator-coil", "protection-code"],
  "condenser-high-temperature-protection": ["condenser-coil", "thermistor", "protection-code"],
  "not-cooling": ["evaporator-coil", "air-filter", "refrigerant"],
  "not-heating": ["heat-pump", "defrost-cycle", "reversing-valve"],
  "water-leak": ["condensate-drain", "float-switch", "evaporator-coil"],
  "remote-not-working": ["thermostat", "control-board", "data-plate"],
  "not-turning-on": ["contactor", "control-board", "error-code"],
  "frozen-indoor-coil": ["frozen-coil", "air-filter", "refrigerant-charge"],
  "outdoor-unit-iced-over": ["defrost-cycle", "condenser-coil", "heat-pump"],
  "outdoor-unit-not-running": ["compressor", "contactor", "inverter-module"],
  "abnormal-noise": ["blower-motor", "compressor", "line-set"],
  "musty-odor": ["evaporator-coil", "condensate-drain", "air-filter"],
  "short-cycling": ["short-cycling", "inverter-compressor", "thermostat"],
  "filter-maintenance": ["air-filter", "evaporator-coil", "static-pressure"],
};

const EXTRA_LINKS_BY_PROBLEM: Record<string, string[]> = {
  "not-cooling": ["/how-mini-splits-work/", "/btu-sizing-explained/", "/seer2-explained/"],
  "not-heating": ["/how-heat-pump-defrost-works/", "/heat-pump-operating-temperatures/"],
  "water-leak": ["/how-to-check-mini-split-condensate-drain/"],
  "remote-not-working": ["/how-to-check-mini-split-remote/", "/how-to-find-mini-split-model-number/"],
  "not-turning-on": ["/how-to-reset-mini-split-safely/", "/how-to-document-hvac-fault-for-service/"],
  "frozen-indoor-coil": ["/how-mini-splits-work/", "/hvac-refrigerants-explained/"],
  "outdoor-unit-iced-over": ["/how-heat-pump-defrost-works/", "/how-to-tell-if-mini-split-is-in-defrost/"],
  "outdoor-unit-not-running": ["/inverter-technology-explained/"],
  "abnormal-noise": ["/mini-split-lifespan/"],
  "musty-odor": ["/how-to-check-mini-split-condensate-drain/"],
  "short-cycling": ["/inverter-technology-explained/", "/btu-sizing-explained/"],
  "filter-maintenance": ["/how-to-prepare-mini-split-for-winter/", "/mini-split-lifespan/"],
  "communication-fault": ["/how-to-document-hvac-fault-for-service/", "/how-to-reset-mini-split-safely/"],
  "temperature-sensor-fault": ["/how-to-document-hvac-fault-for-service/"],
  "inverter-module-protection": ["/inverter-technology-explained/"],
  "voltage-protection": ["/how-to-read-hvac-data-plate/"],
};

/** The evidence class is read from the cited records, never restated by hand. */
function sourceTypeFor(sourceIds: string[]): TechnicalArticle["sourceType"] {
  const cited = sourceIds
    .map((id) => sources.find((source) => source.id === id))
    .filter((source) => source !== undefined);

  if (cited.length === 0) {
    throw new Error(`No evidence record found for ${sourceIds.join(", ")}`);
  }

  const classes = new Set(cited.map((source) => source.sourceType));
  if (classes.size > 1) return "mixed-primary-sources";
  return [...classes][0] as TechnicalArticle["sourceType"];
}

export function publish(article: ArticleInput): TechnicalArticle {
  return {
    authorSlug: "hvac-bench-editorial",
    datePublished: "2026-09-01",
    lastReviewed: "2026-09-02",
    reviewStatus: "source-verified",
    sourceType: sourceTypeFor(article.sourceIds),
    glossaryTerms: article.glossaryTerms ?? TERMS_BY_PROBLEM[article.problemType] ?? [],
    ...article,
    relatedContent: [
      ...new Set([
        ...article.relatedContent,
        ...(EXTRA_LINKS_BY_PROBLEM[article.problemType] ?? []),
      ]),
    ].slice(0, 8),
  };
}

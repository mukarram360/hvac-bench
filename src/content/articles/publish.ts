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
  "authorSlug" | "datePublished" | "lastReviewed" | "reviewStatus" | "sourceType"
> &
  Partial<
    Pick<
      TechnicalArticle,
      | "authorSlug"
      | "datePublished"
      | "lastReviewed"
      | "reviewStatus"
      | "reviewerSlug"
    >
  >;

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
    ...article,
  };
}

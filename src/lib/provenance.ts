import type { TechnicalArticle } from "@/content/schema";

export function allArticlesSourceVerified(
  articles: Pick<TechnicalArticle, "reviewStatus">[],
) {
  return (
    articles.length > 0 &&
    articles.every((article) => article.reviewStatus === "source-verified")
  );
}

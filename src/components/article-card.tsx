import Link from "next/link";

import type { TechnicalArticle } from "@/content/schema";

export function ArticleCard({ article }: { article: TechnicalArticle }) {
  return (
    <article className="card">
      <div className="card-meta">
        <span>{article.errorCode ?? article.articleType.replaceAll("-", " ")}</span>
        <span>{article.brand ?? article.equipmentType.replaceAll("-", " ")}</span>
      </div>
      <h3>
        <Link href={article.path}>{article.title}</Link>
      </h3>
      <p>{article.description}</p>
      <Link className="link-arrow" href={article.path}>
        Open the guide
      </Link>
    </article>
  );
}

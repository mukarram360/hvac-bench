import Link from "next/link";
import type { TechnicalArticle } from "@/content/schema";

export function ArticleCard({ article }: { article: TechnicalArticle }) {
  return (
    <article className="article-card">
      <div className="card-kicker">
        <span>{article.errorCode ?? article.articleType.replace("-", " ")}</span>
        <span>{article.brand ?? article.equipmentType.replaceAll("-", " ")}</span>
      </div>
      <h3><Link href={article.path}>{article.title}</Link></h3>
      <p>{article.description}</p>
      <Link className="text-link" href={article.path}>Open guide →</Link>
    </article>
  );
}

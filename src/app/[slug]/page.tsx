import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/article-page";
import { JsonLd } from "@/components/json-ld";
import { getAllArticles, getArticleByPath } from "@/lib/content";
import {
  articleMetadata,
  articleStructuredData,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles()
    .filter((article) => !article.brand)
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleByPath(`/${slug}/`);
  return article ? articleMetadata(article) : {};
}

export default async function RootArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleByPath(`/${slug}/`);
  if (!article || article.brand) notFound();

  const format = article.articleType === "maintenance" ? "how-to" : article.articleType;
  const parent = {
    troubleshooting: { name: "Troubleshooting", path: "/troubleshooting/" },
    "how-to": { name: "How-to", path: "/how-to/" },
    guide: { name: "Guides", path: "/guides/" },
    comparison: { name: "Comparisons", path: "/compare/" },
    "error-code": { name: "Error codes", path: "/error-codes/" },
  }[format];
  const breadcrumbs = [
    { name: "Home", path: "/" },
    parent,
    { name: article.title, path: article.path },
  ];

  return (
    <>
      <ArticlePage article={article} />
      <JsonLd data={articleStructuredData(article, breadcrumbs)} />
    </>
  );
}

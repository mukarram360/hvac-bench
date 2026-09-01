import { articleOgImage, ogSize } from "@/components/og-card";
import { getAllArticles, getArticleByPath } from "@/lib/content";

export const alt = "HVAC Bench technical reference";
export const size = ogSize;
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles()
    .filter((article) => article.brand)
    .map((article) => ({ brand: article.brand!, slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ brand: string; slug: string }>;
}) {
  const { brand, slug } = await params;
  const article = getArticleByPath(`/brands/${brand}/${slug}/`);
  if (!article) throw new Error(`Unknown article: /brands/${brand}/${slug}/`);
  return articleOgImage(article);
}

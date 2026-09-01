import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/article-page";
import { JsonLd } from "@/components/json-ld";
import { getAllArticles, getArticleByPath, getBrandBySlug } from "@/lib/content";
import {
  articleJsonLd,
  articleMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles()
    .filter((article) => article.brand)
    .map((article) => ({ brand: article.brand!, slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; slug: string }>;
}): Promise<Metadata> {
  const { brand, slug } = await params;
  const article = getArticleByPath(`/brands/${brand}/${slug}/`);
  return article ? articleMetadata(article) : {};
}

export default async function BrandArticle({
  params,
}: {
  params: Promise<{ brand: string; slug: string }>;
}) {
  const { brand: brandSlug, slug } = await params;
  const article = getArticleByPath(`/brands/${brandSlug}/${slug}/`);
  if (!article) notFound();

  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Brands", path: "/brands/" },
    { name: brand.name, path: `/brands/${brand.slug}/` },
    { name: article.errorCode ?? article.title, path: article.path },
  ];

  const howTo = howToJsonLd(article);

  return (
    <>
      <ArticlePage article={article} />
      <JsonLd
        data={[
          webPageJsonLd({
            title: article.title,
            description: article.description,
            path: article.path,
            breadcrumbs,
          }),
          breadcrumbJsonLd(breadcrumbs),
          articleJsonLd(article),
          ...(howTo ? [howTo] : []),
          ...(article.faqs.length > 0 ? [faqJsonLd(article.faqs, article.path)] : []),
        ]}
      />
    </>
  );
}

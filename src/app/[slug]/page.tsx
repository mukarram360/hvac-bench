import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { JsonLd } from "@/components/json-ld";
import { getAllArticles, getArticleByPath } from "@/lib/content";
import { articleJsonLd, articleMetadata, breadcrumbJsonLd } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return getAllArticles().filter((article) => !article.brand).map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = getArticleByPath(`/${slug}/`); return article ? articleMetadata(article) : {}; }
export default async function RootArticle({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = getArticleByPath(`/${slug}/`); if (!article || article.brand) notFound(); const crumbs = [{ name: "Home", path: "/" }, { name: "Troubleshooting", path: "/troubleshooting/" }, { name: article.title, path: article.path }]; return <><ArticlePage article={article} /><JsonLd data={[breadcrumbJsonLd(crumbs), articleJsonLd(article)]} /></>; }


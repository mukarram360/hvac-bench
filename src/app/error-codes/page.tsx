import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { DirectoryHero } from "@/components/directory-hero";
import { getAllArticles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata({ title: "HVAC error-code directory", description: "Manufacturer- and model-scoped HVAC error-code explanations with safe checks, technician escalation guidance, and primary references.", path: "/error-codes/" });
export default function ErrorCodesPage() { const articles = getAllArticles().filter((article) => article.articleType === "error-code"); return <main id="main-content" className="directory-page"><DirectoryHero eyebrow="Code desk" title="HVAC error codes" description="Start with the brand and full model number. The same letters can mean different faults on different equipment families, so every guide states its scope." path="/error-codes/" /><div className="code-index">{articles.map((article) => <ArticleCard article={article} key={article.path} />)}</div></main>; }


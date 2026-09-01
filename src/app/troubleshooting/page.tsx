import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { DirectoryHero } from "@/components/directory-hero";
import { getAllArticles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata({ title: "HVAC troubleshooting guides", description: "Practical, safety-bounded HVAC troubleshooting organized by symptoms, settings, airflow, operation, and the point to call a technician.", path: "/troubleshooting/" });
export default function TroubleshootingPage() { const articles = getAllArticles().filter((article) => article.articleType !== "error-code"); return <main id="main-content" className="directory-page"><DirectoryHero eyebrow="Symptom index" title="Troubleshooting" description="Start with what you can see, hear, or feel. Each path begins with low-risk checks and stops before electrical, refrigerant, or internal equipment work." path="/troubleshooting/" /><div className="card-grid directory-cards">{articles.map((article) => <ArticleCard article={article} key={article.path} />)}</div></main>; }


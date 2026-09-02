import { getAllArticles } from "@/lib/content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * A feed keeps the library discoverable to readers who follow it, and gives
 * aggregators and answer engines a dated, machine-readable list of what is
 * published without crawling the whole site.
 */
export function GET() {
  const articles = [...getAllArticles()].sort((first, second) =>
    (second.lastReviewed ?? second.datePublished ?? "").localeCompare(
      first.lastReviewed ?? first.datePublished ?? "",
    ),
  );

  const items = articles
    .map((article) => {
      const url = absoluteUrl(article.path);
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.articleType.replaceAll("-", " "))}</category>
      ${article.datePublished ?? article.lastReviewed ? `<pubDate>${new Date(`${article.datePublished ?? article.lastReviewed}T00:00:00Z`).toUTCString()}</pubDate>` : ""}
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

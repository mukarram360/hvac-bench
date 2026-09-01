import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

/**
 * Search crawlers and AI answer engines are both welcome. Being quotable by an
 * assistant is now part of being findable, and a reference site has nothing to
 * gain by hiding from the systems people ask questions of.
 *
 * Only the client-side search utility is disallowed, because query URLs are
 * infinite and none of them are pages.
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/", disallow: ["/search/"] };

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "Bingbot", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Perplexity-User", ...allowAll },
      { userAgent: "Applebot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "CCBot", ...allowAll },
      { userAgent: "Amazonbot", ...allowAll },
      { userAgent: "meta-externalagent", ...allowAll },
      { userAgent: "DuckAssistBot", ...allowAll },
      { userAgent: "cohere-ai", ...allowAll },
      { userAgent: "YouBot", ...allowAll },
      { userAgent: "MistralAI-User", ...allowAll },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

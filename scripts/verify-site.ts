import { articles } from "../src/content/articles";
import { sources } from "../src/content/sources";

const PUBLIC_ORIGIN = "https://hvac-bench.com";
const baseUrl = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const requiredPaths = [
  "/",
  "/ask/",
  "/benchmark/",
  ...articles.map((article) => article.path),
];

const articlePaths = new Set(articles.map((article) => article.path));
const oemUrls = sources.map((source) => source.url);
const failures: string[] = [];

function expect(condition: unknown, message: string) {
  if (!condition) failures.push(message);
}

async function read(path: string) {
  const response = await fetch(`${baseUrl}${path}`, { redirect: "follow" });
  const body = await response.text();
  return { response, body };
}

function sitemapPaths(xml: string) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
    const url = new URL(match[1]);
    return url.pathname;
  });
}

function visibleText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function verifyPages() {
  const sitemap = await read("/sitemap.xml");
  expect(sitemap.response.status === 200, `sitemap returned ${sitemap.response.status}`);
  const paths = sitemapPaths(sitemap.body);
  expect(paths.length > 0, "sitemap contains no routes");
  expect(new Set(paths).size === paths.length, "sitemap contains duplicate routes");

  const allPaths = [...new Set([...paths, ...requiredPaths])];
  const pages = await Promise.all(allPaths.map(async (path) => ({ path, ...(await read(path)) })));

  for (const { path, response, body } of pages) {
    expect(response.status === 200, `${path} returned ${response.status}`);
    expect(
      body.includes(`<link rel="canonical" href="${PUBLIC_ORIGIN}${path}"`),
      `${path} has a missing or incorrect canonical`,
    );
    expect(!/href="[^"]*(?:quote|dealer|installer|booking|local-pro)/i.test(body), `${path} exposes a service CTA link`);
    expect(!/\bdealer\b|\bbooking\b|\blocal[- ]pro\b/i.test(visibleText(body)), `${path} exposes a service-marketplace claim`);
    expect(!body.includes("Observe,Check safely,Escalate"), `${path} exposes the generic diagnostic figure`);
    expect(!/What does How to |Can I safely reset How to /i.test(body), `${path} exposes a generated FAQ artifact`);

    for (const url of oemUrls) {
      expect(!body.includes(url), `${path} exposes internal OEM URL ${url}`);
    }

    if (path === "/" || path === "/benchmark/" || articlePaths.has(path)) {
      expect(body.includes("application/ld+json"), `${path} has no JSON-LD`);
    }
  }

  for (const article of articles) {
    const page = pages.find((candidate) => candidate.path === article.path);
    expect(page !== undefined, `${article.path} was not crawled`);
    if (!page) continue;

    const text = visibleText(page.body);
    const bespokeMarkers = [
      article.title,
      article.directAnswer,
      ...(article.sections ?? []).map((section) => section.title),
      ...(article.figures ?? []).map((figure) => figure.title),
      ...(article.decisionTable ? [article.decisionTable.caption] : []),
      ...(article.comparisonTable ? [article.comparisonTable.caption] : []),
      ...article.faqs.map((faq) => faq.question),
    ];

    for (const marker of bespokeMarkers) {
      expect(text.includes(marker), `${article.path} is missing current bespoke marker: ${marker}`);
    }
  }

  for (const path of requiredPaths) {
    expect(pages.some((page) => page.path === path && page.response.status === 200), `${path} was not verified`);
  }

  for (const path of ["/search/", "/compare/"]) {
    const { response, body } = await read(path);
    expect(response.status === 200, `${path} returned ${response.status}`);
    expect(/<meta name="robots" content="[^"]*noindex/i.test(body), `${path} should be noindex`);
  }

  const robots = await read("/robots.txt");
  expect(robots.response.status === 200, `robots.txt returned ${robots.response.status}`);
  expect(robots.body.includes(`Sitemap: ${PUBLIC_ORIGIN}/sitemap.xml`), "robots.txt does not name the canonical sitemap");

  return { sitemapRoutes: paths.length, pagesChecked: allPaths.length };
}

async function ask(question: string) {
  const started = performance.now();
  const response = await fetch(`${baseUrl}/api/assistant`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });
  const result = await response.json();
  return { response, result, durationMs: Math.round((performance.now() - started) * 10) / 10 };
}

async function verifyAssistant() {
  const exact = await ask("what does Gree E6 mean");
  expect(exact.response.status === 200, `assistant exact match returned ${exact.response.status}`);
  expect(exact.result.links?.[0]?.path === "/brands/gree/e6-error-code/", "assistant missed exact Gree E6 match");

  const contamination = await ask("Gree U4 error code");
  expect(
    !contamination.result.links?.some((link: { path: string }) => link.path.startsWith("/brands/daikin/")),
    "assistant crossed from named Gree equipment into Daikin content",
  );

  const ambiguous = await ask("what does E1 mean");
  expect(ambiguous.result.needsModel === true, "assistant did not ask for brand/model on ambiguous E1");

  const symptom = await ask("my mini split is leaking water");
  expect(symptom.result.links?.[0]?.path === "/mini-split-leaking-water/", "assistant missed the leaking-water guide");

  const unsupported = await ask("find the best installer near me and get a quote");
  expect(unsupported.result.answered === false, "assistant answered an unsupported installer/quote request");
  expect(unsupported.result.links?.length === 0, "assistant linked an unsupported installer/quote request");

  const unsafe = await ask("how do I recharge refrigerant myself");
  expect(unsafe.result.safetyBlocked === true, "assistant did not block a refrigerant procedure");

  const timings = [exact, contamination, ambiguous, symptom, unsupported, unsafe].map(
    (entry) => entry.durationMs,
  );
  expect(Math.max(...timings) < 5_000, `assistant request exceeded 5 seconds: ${Math.max(...timings)}ms`);

  return { assistantRequests: timings.length, slowestAssistantMs: Math.max(...timings) };
}

async function main() {
  const summary = {
    baseUrl,
    ...(await verifyPages()),
    ...(await verifyAssistant()),
    failures,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (failures.length > 0) process.exitCode = 1;
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});

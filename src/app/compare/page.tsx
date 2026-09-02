import type { Metadata } from "next";

import { FormatHub } from "@/components/format-hub";
import { getArticlesForHub, isHubIndexable } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const PATH = "/compare/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC comparisons: like-for-like, on the record",
  description:
    "Comparisons of HVAC systems, brands, and technologies built from published specifications and documented behaviour, with the criteria stated before the verdict.",
  path: PATH,
  noIndex: !isHubIndexable(PATH),
  keywords: ["mini split comparison", "heat pump vs furnace", "hvac brand comparison"],
});

export default function ComparePage() {
  const articles = getArticlesForHub(PATH);

  return (
    <FormatHub
      eyebrow="Comparisons"
      title="Comparisons"
      description="Equipment decisions made against stated criteria: what each option is designed for, what the published specifications say, what the documentation reveals about serviceability, and which reader each option actually suits."
      path={PATH}
      articles={articles}
      promises={[
        {
          heading: "Criteria before conclusion",
          copy: "The comparison names what it is measuring — capacity, low-temperature performance, controls, parts availability — before it ranks anything.",
        },
        {
          heading: "Specifications, not impressions",
          copy: "Figures come from published data sheets and manuals, with the test standard named, because a US SEER2 number and a European SCOP number are not the same measurement.",
        },
        {
          heading: "Commercial relationships disclosed",
          copy: "Where a link earns a commission, the page says so plainly. Comparisons are not reordered for commercial reasons, and the affiliate disclosure explains the arrangement in full.",
        },
      ]}
      emptyHeading="Comparisons start once the reference library supports them"
      emptyCopy="A useful comparison depends on knowing how each system fails, not only how it is advertised. These pages publish after the underlying equipment references are in place."
    />
  );
}

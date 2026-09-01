import type { Metadata } from "next";

import { FormatHub } from "@/components/format-hub";
import { getArticlesByType } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const PATH = "/guides/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC guides: how systems behave and why",
  description:
    "Longer-form explanations of how mini-splits, heat pumps, and controls actually behave, written so a symptom makes sense before you start replacing parts.",
  path: PATH,
  keywords: ["hvac guides", "how heat pumps work", "mini split maintenance guide"],
});

export default function GuidesPage() {
  const articles = [
    ...getArticlesByType("guide"),
    ...getArticlesByType("maintenance"),
  ];

  return (
    <FormatHub
      eyebrow="Reference library"
      title="Guides"
      description="Background that makes a diagnosis possible: what a system is supposed to do, which behaviours are normal, what maintenance actually changes, and how the same symptom differs between a ductless head in Texas and an air-to-water heat pump in Yorkshire."
      path={PATH}
      articles={articles}
      promises={[
        {
          heading: "Normal before abnormal",
          copy: "A guide states what correct operation looks like first. Steam off an outdoor unit in December and a pause in heating are expected, and knowing that prevents an unnecessary call-out.",
        },
        {
          heading: "US and UK conventions",
          copy: "Capacity in BTU and kilowatts, temperatures in Fahrenheit and Celsius, and terminology from both markets, so the page reads correctly wherever the system is installed.",
        },
        {
          heading: "Sourced, not remembered",
          copy: "Manufacturer documentation and government guidance are cited on the page. Where the sources disagree or stay silent, the guide says so instead of filling the gap.",
        },
      ]}
      emptyHeading="The first guides are being written"
      emptyCopy="Guides publish once their sources are verified. Until then, the symptom guides carry the practical checks and the glossary covers the vocabulary those guides will assume."
    />
  );
}

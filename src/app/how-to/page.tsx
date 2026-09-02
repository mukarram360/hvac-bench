import type { Metadata } from "next";

import { FormatHub } from "@/components/format-hub";
import { getArticlesForHub, isHubIndexable } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const PATH = "/how-to/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC how-to: step-by-step with the limits marked",
  description:
    "Step-by-step procedures for the maintenance and checks an owner can safely carry out, with the point where the job becomes technician work stated before you start.",
  path: PATH,
  noIndex: !isHubIndexable(PATH),
  keywords: ["how to clean mini split filter", "hvac how to", "mini split maintenance steps"],
});

export default function HowToPage() {
  const articles = getArticlesForHub(PATH);

  return (
    <FormatHub
      eyebrow="Procedures"
      title="How-to"
      description="Ordered steps for tasks that are genuinely safe to do without a licence, written against the manufacturer instructions for the equipment involved. Anything requiring isolation, gauges, or refrigerant handling is named as such and stops here. The section grows one procedure at a time, in the order the evidence supports."
      path={PATH}
      articles={articles}
      promises={[
        {
          heading: "The stop point comes first",
          copy: "Every procedure opens with what it does not cover. You know before step one whether this is a task for you or a task for a technician.",
        },
        {
          heading: "Tools and time stated",
          copy: "What you need and roughly how long it takes, so nothing is half-dismantled when you discover a part is missing.",
        },
        {
          heading: "Steps you can follow one-handed",
          copy: "Short, ordered, and written for someone holding a torch. No paragraph hides a second instruction inside it.",
        },
      ]}
      emptyHeading="Procedures are in preparation"
      emptyCopy="How-to pages publish only when each step can be traced to manufacturer instructions for the equipment involved. The symptom references carry the practical checks in the meantime."
    />
  );
}

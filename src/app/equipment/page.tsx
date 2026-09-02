import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHead } from "@/components/page-head";
import { getEquipmentTypesInUse } from "@/lib/content";
import { breadcrumbJsonLd, collectionPageJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/equipment/";

export const metadata: Metadata = pageMetadata({
  title: "HVAC equipment types explained",
  description:
    "Mini-splits, heat pumps, ducted systems, air handlers, boilers, controls, and light commercial equipment: what each type is, how it behaves, and where its faults begin.",
  path: PATH,
  keywords: ["hvac equipment types", "types of heat pump", "ductless vs ducted", "hvac system types"],
});

export default function EquipmentPage() {
  const equipment = getEquipmentTypesInUse();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Equipment", path: PATH },
  ];

  return (
    <main id="main-content">
      <JsonLd
        data={[
          collectionPageJsonLd({
            title: "HVAC equipment types",
            description: "Equipment categories covered by HVAC Bench.",
            path: PATH,
            items: equipment.map((type) => ({ name: type.label, path: `/equipment/${type.slug}/` })),
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <PageHead
        eyebrow="Equipment map"
        title="Equipment types"
        description="HVAC covers a wide range of hardware, and a symptom means different things depending on which of it you own. These pages define each category and link to the references that apply to it."
        breadcrumbs={breadcrumbs}
        meta={[`${equipment.length} categories`, "US and UK terminology", "Expanding by demand"]}
      />

      <div className="container page-tail">
        <div className="grid grid-2">
          {equipment.map((type) => (
            <Link className="card" key={type.slug} href={`/equipment/${type.slug}/`}>
              <div className="card-meta">
                <span>{type.brandCount} brands</span>
                <span>{type.articleCount > 0 ? `${type.articleCount} published` : "In progress"}</span>
              </div>
              <h3>{type.label}</h3>
              <p>{type.summary}</p>
              <span className="link-arrow">Open category</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

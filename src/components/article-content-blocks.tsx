import { Fragment, type ReactNode } from "react";

import type { TechnicalArticle } from "@/content/schema";

function idFor(prefix: string, value: string) {
  return `${prefix}-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function DiagnosticTable({
  table,
  className,
}: {
  table: NonNullable<TechnicalArticle["decisionTable"]>;
  className: string;
}) {
  return (
    <section className="article-section">
      <div
        className="diagnostic-table-wrap"
        role="region"
        aria-label={table.caption}
        tabIndex={0}
      >
        <table className={className}>
          <caption>{table.caption}</caption>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th key={cell} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={cell}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

type BlockName = NonNullable<TechnicalArticle["layout"]>[number];

/**
 * The order used by a page that does not state one. It suits a diagnostic
 * article, which is what most of the library is: narrow the symptom, then
 * explain, then hand over.
 */
const DEFAULT_LAYOUT: BlockName[] = [
  "branches",
  "figures",
  "decisionTable",
  "comparisonTable",
  "sections",
  "steps",
  "serviceHandoff",
];

export function ArticleContentBlocks({ article }: { article: TechnicalArticle }) {
  const blocks: Record<BlockName, ReactNode> = {
    branches: article.diagnosticBranches && (
      <section className="article-section" aria-labelledby="diagnostic-paths-title">
        <h2 id="diagnostic-paths-title">
          {article.articleType === "comparison" ? "Where the choice actually turns" : "Diagnostic paths"}
        </h2>
        <div className="diagnostic-branches">
          {article.diagnosticBranches.map((branch) => (
            <article className="diagnostic-branch" key={branch.title}>
              <h3>{branch.title}</h3>
              <p>{branch.observation}</p>
              <p className="diagnostic-action">{branch.action}</p>
            </article>
          ))}
        </div>
      </section>
    ),

    figures: article.figures?.map((figure) => {
      const titleId = idFor("figure-title", figure.title);
      return (
        <figure className="signal-figure" aria-labelledby={titleId} key={figure.title}>
          <figcaption id={titleId}>{figure.title}</figcaption>
          <p>{figure.description}</p>
          <ol className="signal-path">
            {figure.nodes.map((node) => (
              <li key={node.label}>
                <strong>{node.label}</strong>
                <span>{node.detail}</span>
              </li>
            ))}
          </ol>
        </figure>
      );
    }),

    decisionTable: article.decisionTable && (
      <DiagnosticTable table={article.decisionTable} className="diagnostic-table" />
    ),

    comparisonTable: article.comparisonTable && (
      <DiagnosticTable
        table={article.comparisonTable}
        className="diagnostic-table comparison-table"
      />
    ),

    sections: article.sections?.map((section) => (
      <section className="article-section" key={section.title}>
        <h2>{section.title}</h2>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    )),

    steps: article.steps && article.steps.length > 0 && (
      <section className="article-section">
        <h2>Procedure</h2>
        <ol className="check-list">
          {article.steps.map((step, index) => (
            <li key={step.name} id={`step-${index + 1}`}>
              <strong>{step.name}.</strong> {step.text}
            </li>
          ))}
        </ol>
      </section>
    ),

    serviceHandoff: article.serviceHandoff && (
      <section className="callout callout-note service-handoff">
        <span className="eyebrow">Service handoff</span>
        <h2>What to give the technician</h2>
        <p>{article.serviceHandoff}</p>
      </section>
    ),
  };

  // A stated layout is honoured exactly; anything it leaves out still renders,
  // in the default order, so an omission drops a block down the page rather
  // than off it.
  const stated = article.layout ?? [];
  const order = [...stated, ...DEFAULT_LAYOUT.filter((name) => !stated.includes(name))];

  return (
    <>
      {order.map((name) => (
        <Fragment key={name}>{blocks[name]}</Fragment>
      ))}
    </>
  );
}

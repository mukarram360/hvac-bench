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
      <div className="diagnostic-table-wrap">
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

export function ArticleContentBlocks({ article }: { article: TechnicalArticle }) {
  return (
    <>
      {article.diagnosticBranches && (
        <section className="article-section" aria-labelledby="diagnostic-paths-title">
          <h2 id="diagnostic-paths-title">Diagnostic paths</h2>
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
      )}

      {article.figures?.map((figure) => {
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
      })}

      {article.decisionTable && (
        <DiagnosticTable table={article.decisionTable} className="diagnostic-table" />
      )}

      {article.comparisonTable && (
        <DiagnosticTable table={article.comparisonTable} className="diagnostic-table comparison-table" />
      )}

      {article.sections?.map((section) => (
        <section className="article-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      {article.serviceHandoff && (
        <section className="callout callout-note service-handoff">
          <span className="eyebrow">Service handoff</span>
          <h2>What to give the technician</h2>
          <p>{article.serviceHandoff}</p>
        </section>
      )}
    </>
  );
}

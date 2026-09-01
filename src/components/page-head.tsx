import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs";

/**
 * The standard opening block for every hub and directory page: where you are,
 * what this page covers, and the record count that proves it is not empty.
 */
export function PageHead({
  eyebrow,
  title,
  description,
  breadcrumbs,
  meta,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  meta?: string[];
  aside?: React.ReactNode;
}) {
  return (
    <header className="container page-head">
      <Breadcrumbs items={breadcrumbs} />
      <div className="page-head-grid">
        <div className="page-head-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {meta && meta.length > 0 && (
            <div className="page-meta">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}
        </div>
        {aside}
      </div>
    </header>
  );
}

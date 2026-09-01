import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <span className="not-found-code" aria-hidden="true">
        404
      </span>
      <div>
        <span className="eyebrow">Page not found</span>
        <h1>That page is not on the bench</h1>
        <p>
          The address may be incomplete, or the reference may not exist yet. Pages here publish only
          when their sources can be named, so a missing page usually means the documentation has not
          been verified rather than that the link is broken.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/search/">
            Search the index
          </Link>
          <Link className="btn btn-secondary" href="/error-codes/">
            Error codes
          </Link>
          <Link className="btn btn-secondary" href="/troubleshooting/">
            Symptoms
          </Link>
        </div>
      </div>
    </main>
  );
}

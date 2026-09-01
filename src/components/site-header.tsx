import Link from "next/link";

const nav = [
  ["Brands", "/brands/"],
  ["Error codes", "/error-codes/"],
  ["Troubleshooting", "/troubleshooting/"],
  ["Equipment", "/equipment/"],
] as const;

function NavLinks() {
  return nav.map(([label, path]) => (
    <Link key={path} href={path}>
      {label}
    </Link>
  ));
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="HVAC Bench home">
          <span className="wordmark-mark" aria-hidden="true">HB</span>
          <span>
            HVAC <strong>Bench</strong>
            <small>Codes · Diagnostics · Troubleshooting</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLinks />
          <Link className="nav-search" href="/search/">Search</Link>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <NavLinks />
            <Link href="/search/">Search</Link>
            <Link href="/about/">About</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}


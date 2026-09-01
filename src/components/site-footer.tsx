import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">HVAC Bench</div>
          <p>Technical HVAC information, translated from authoritative documentation with model scope and safety limits intact.</p>
        </div>
        <div>
          <h2>Reference</h2>
          <Link href="/brands/">Brands</Link>
          <Link href="/error-codes/">Error codes</Link>
          <Link href="/troubleshooting/">Troubleshooting</Link>
          <Link href="/equipment/">Equipment</Link>
        </div>
        <div>
          <h2>Standards</h2>
          <Link href="/editorial-policy/">Editorial policy</Link>
          <Link href="/sources-methodology/">Sources &amp; methodology</Link>
          <Link href="/safety-disclaimer/">Safety disclaimer</Link>
          <Link href="/about/">About</Link>
        </div>
        <div>
          <h2>Site</h2>
          <Link href="/contact/">Contact</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} HVAC Bench</span>
        <span>Information, not a substitute for qualified onsite diagnosis.</span>
      </div>
    </footer>
  );
}


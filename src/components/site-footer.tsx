import Link from "next/link";

import { footerNav } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            HB
          </span>
          <p>
            HVAC Bench translates manufacturer service documentation into plain language, keeps the
            product scope visible, and marks the point where a check stops being a homeowner task.
            Covering systems installed across the United States, United Kingdom, and Europe.
          </p>
        </div>
        {footerNav.map((column) => (
          <nav className="footer-col" key={column.heading} aria-label={column.heading}>
            <h2>{column.heading}</h2>
            {column.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} HVAC Bench</span>
        <p>
          Reference information only. It does not replace a qualified onsite diagnosis, and it is not
          an instruction to work on equipment you are not trained or certified to service.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import type { NavGroup } from "@/lib/nav";

function Caret() {
  return (
    <svg className="nav-caret" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="m10.6 10.6 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader({ groups }: { groups: NavGroup[] }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* Navigation closes the menu it was started from, rather than watching the
     route and closing after the fact. */
  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
  }, []);

  useEffect(() => {
    if (!openMenu) return;

    function onPointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link className="brand-lockup" href="/">
          <span className="brand-mark" aria-hidden="true">
            HB
          </span>
          <span>
            <span className="brand-name">
              HVAC <b>Bench</b>
            </span>
            <span className="brand-tag">Codes · Diagnostics</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary" ref={navRef}>
          <ul className="nav-list">
            {groups.map((group) =>
              group.columns?.length ? (
                <li key={group.label}>
                  <button
                    type="button"
                    className="nav-link"
                    aria-expanded={openMenu === group.label}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)}
                  >
                    {group.label}
                    <Caret />
                  </button>
                  {openMenu === group.label && (
                    <div className={group.label === "Learn" ? "nav-panel nav-panel-right" : "nav-panel"}>
                      <div className="nav-panel-grid">
                        {group.columns.map((column) => (
                          <div key={column.heading}>
                            <h3>{column.heading}</h3>
                            {column.links.map((link) => (
                              <Link
                                className="nav-panel-link"
                                key={link.href + link.label}
                                href={link.href}
                                onClick={closeAll}
                              >
                                <strong>{link.label}</strong>
                                {link.description && <span>{link.description}</span>}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      {group.footerLink && (
                        <div className="nav-panel-foot">
                          <Link className="link-arrow" href={group.footerLink.href} onClick={closeAll}>
                            {group.footerLink.label}
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ) : (
                <li key={group.label}>
                  <Link className="nav-link" href={group.href}>
                    {group.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Link className="header-search" href="/search/">
          <SearchIcon />
          Search codes and symptoms
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className="menu-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {drawerOpen ? "Close" : "Menu"}
        </button>
      </div>

      {drawerOpen && (
        <div className="mobile-drawer" id="mobile-drawer">
          <div className="container drawer-inner">
            {groups.map((group) =>
              group.columns?.length ? (
                <details className="drawer-group" key={group.label}>
                  <summary>{group.label}</summary>
                  <div className="drawer-links">
                    {group.columns.flatMap((column) => column.links).map((link) => (
                      <Link key={link.href + link.label} href={link.href} onClick={closeAll}>
                        {link.label}
                      </Link>
                    ))}
                    {group.footerLink && (
                      <Link href={group.footerLink.href} onClick={closeAll}>
                        {group.footerLink.label}
                      </Link>
                    )}
                  </div>
                </details>
              ) : (
                <Link className="drawer-flat" key={group.label} href={group.href} onClick={closeAll}>
                  {group.label}
                </Link>
              ),
            )}
            <Link className="drawer-flat" href="/glossary/" onClick={closeAll}>
              Glossary
            </Link>
            <Link className="drawer-flat" href="/about/" onClick={closeAll}>
              About
            </Link>
            <Link className="btn btn-primary btn-block drawer-cta" href="/search/" onClick={closeAll}>
              <SearchIcon size={16} />
              Search codes and symptoms
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

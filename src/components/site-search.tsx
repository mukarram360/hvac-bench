"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

export type SearchEntry = {
  title: string;
  path: string;
  description: string;
  label: string;
  terms: string;
};

/**
 * The index is a static file rather than part of the page payload, so the
 * homepage does not grow as the library does. It is fetched the first time
 * someone actually intends to search.
 */
let indexPromise: Promise<SearchEntry[]> | null = null;

function loadIndex() {
  if (!indexPromise) {
    indexPromise = fetch("/search-index.json")
      .then((response) => (response.ok ? response.json() : []))
      .catch(() => [] as SearchEntry[]);
  }
  return indexPromise;
}

function score(entry: SearchEntry, query: string) {
  const title = entry.title.toLowerCase();
  if (title.startsWith(query)) return 0;
  if (title.includes(query)) return 1;
  if (entry.label.toLowerCase().includes(query)) return 2;
  if (entry.terms.includes(query)) return 3;
  return entry.description.toLowerCase().includes(query) ? 4 : 5;
}

export function SiteSearch({
  quickLinks = [],
  variant = "console",
  initialQuery = "",
  autoFocus = false,
}: {
  quickLinks?: SearchEntry[];
  variant?: "console" | "page";
  initialQuery?: string;
  autoFocus?: boolean;
}) {
  const isPage = variant === "page";
  const [query, setQuery] = useState(initialQuery);
  const [entries, setEntries] = useState<SearchEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const ensureIndex = useCallback(() => {
    if (loaded) return;
    loadIndex().then((data) => {
      setEntries(data);
      setLoaded(true);
    });
  }, [loaded]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    const pool = entries.length ? entries : quickLinks;
    return pool
      .map((entry) => ({ entry, rank: score(entry, normalized) }))
      .filter((match) => match.rank < 5)
      .sort((first, second) => first.rank - second.rank)
      .slice(0, isPage ? 40 : 6)
      .map((match) => match.entry);
  }, [entries, isPage, query, quickLinks]);

  const showQuickLinks = !query.trim();
  const visible = showQuickLinks ? quickLinks.slice(0, isPage ? 12 : 4) : results;

  return (
    <div className={isPage ? "lookup lookup-page" : "lookup"}>
      <label htmlFor={isPage ? "site-search" : "hero-search"}>
        Search by error code, brand, or symptom
      </label>
      <div className="lookup-field">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.5" />
          <path d="m10.6 10.6 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          id={isPage ? "site-search" : "hero-search"}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={ensureIndex}
          onPointerDown={ensureIndex}
          placeholder="Try E6, U4, or leaking water"
          autoComplete="off"
          enterKeyHint="search"
          autoFocus={autoFocus}
        />
      </div>

      <p className="lookup-status" aria-live="polite">
        {showQuickLinks
          ? isPage
            ? "Start typing, or pick a common starting point"
            : "Common starting points"
          : `${results.length} ${results.length === 1 ? "match" : "matches"}`}
      </p>

      <ul className="lookup-results">
        {visible.map((entry) => (
          <li key={entry.path + entry.title}>
            <Link href={entry.path}>
              <span>
                <strong>{entry.title}</strong>
                <small>{entry.description}</small>
              </span>
              <em>{entry.label}</em>
            </Link>
          </li>
        ))}
        {!showQuickLinks && results.length === 0 && (
          <li className="lookup-empty">
            No published page matches that yet. Try the brand name, a shorter code, or a symptom such
            as &ldquo;not cooling&rdquo;.
          </li>
        )}
      </ul>
    </div>
  );
}

/**
 * The search page variant, which accepts a query in the URL so a result can be
 * linked to or shared.
 */
export function SearchPanel({ quickLinks }: { quickLinks: SearchEntry[] }) {
  const params = useSearchParams();
  return (
    <SiteSearch
      quickLinks={quickLinks}
      variant="page"
      initialQuery={params.get("q") ?? ""}
      autoFocus
    />
  );
}

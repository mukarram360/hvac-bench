"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type SearchEntry = {
  title: string;
  path: string;
  description: string;
  label: string;
  terms: string;
};

export function SiteSearch({ entries, compact = false }: { entries: SearchEntry[]; compact?: boolean }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return compact ? entries.slice(0, 5) : entries;
    return entries.filter((entry) => `${entry.title} ${entry.description} ${entry.terms}`.toLowerCase().includes(normalized)).slice(0, compact ? 7 : 30);
  }, [compact, entries, query]);

  return (
    <div className={compact ? "search-console compact" : "search-console"}>
      <label htmlFor={compact ? "hero-search" : "directory-search"}>Search by brand, error code, or symptom</label>
      <div className="search-input-wrap">
        <span aria-hidden="true">LOOKUP</span>
        <input
          id={compact ? "hero-search" : "directory-search"}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “Gree E6” or “leaking water”"
          autoComplete="off"
        />
      </div>
      <div className="search-status" aria-live="polite">
        {query ? `${results.length} matching guides` : compact ? "Popular starting points" : `${entries.length} published references`}
      </div>
      <ul className="search-results">
        {results.map((entry) => (
          <li key={entry.path}>
            <Link href={entry.path}>
              <span><strong>{entry.title}</strong><small>{entry.description}</small></span>
              <em>{entry.label}</em>
            </Link>
          </li>
        ))}
        {results.length === 0 && (
          <li className="search-empty">No published guide matches yet. Try the model brand, a shorter code, or a symptom such as “not cooling.”</li>
        )}
      </ul>
    </div>
  );
}


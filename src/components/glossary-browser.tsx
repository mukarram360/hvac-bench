"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { GlossaryTerm } from "@/content/schema";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Subject = { slug: string; label: string; count: number };
type BrowserTerm = Pick<
  GlossaryTerm,
  "term" | "slug" | "category" | "aliases" | "shortAnswer" | "definition"
>;

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function GlossaryBrowser({
  terms,
  subjects,
}: {
  terms: BrowserTerm[];
  subjects: Subject[];
}) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("all");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredTerms = useMemo(
    () =>
      terms.filter((term) => {
        if (subject !== "all" && term.category !== subject) return false;
        if (!normalizedQuery) return true;
        const searchable = [
          term.term,
          ...term.aliases,
          term.shortAnswer ?? "",
          term.definition,
        ]
          .join(" ")
          .toLowerCase();
        return searchable.includes(normalizedQuery);
      }),
    [normalizedQuery, subject, terms],
  );

  const groups = useMemo(() => {
    const byLetter = new Map<string, BrowserTerm[]>();
    for (const term of filteredTerms) {
      const letter = term.term.charAt(0).toUpperCase();
      byLetter.set(letter, [...(byLetter.get(letter) ?? []), term]);
    }
    return [...byLetter.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filteredTerms]);
  const activeLetters = new Set(groups.map(([letter]) => letter));
  const activeSubject = subjects.find((item) => item.slug === subject)?.label;

  function reset() {
    setQuery("");
    setSubject("all");
  }

  return (
    <section className="glossary-browser" aria-labelledby="glossary-index-title">
      <div className="glossary-browser-head">
        <div>
          <span className="eyebrow">Field index</span>
          <h2 id="glossary-index-title">Find the term in front of you</h2>
          <p>Search a name, abbreviation, or phrase from a manual, then open the full definition.</p>
        </div>

        <form className="glossary-search" role="search" aria-label="Search HVAC terms" onSubmit={(event) => event.preventDefault()}>
          <label className="visually-hidden" htmlFor="glossary-search-input">Search glossary terms</label>
          <SearchIcon />
          <input
            id="glossary-search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “superheat”, “C-wire”, or “defrost”"
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search field">Clear</button>
          )}
        </form>
      </div>

      <div className="glossary-subject-filter" aria-label="Filter glossary by subject">
        <button type="button" className={subject === "all" ? "is-active" : ""} aria-pressed={subject === "all"} onClick={() => setSubject("all")}>
          All terms <small>{terms.length}</small>
        </button>
        {subjects.map((item) => (
          <button type="button" key={item.slug} className={subject === item.slug ? "is-active" : ""} aria-pressed={subject === item.slug} onClick={() => setSubject(item.slug)}>
            {item.label} <small>{item.count}</small>
          </button>
        ))}
      </div>

      <div className="glossary-index-shell">
        <nav className="glossary-alpha-window" aria-label="Browse glossary by letter">
          <span className="glossary-alpha-label">A–Z</span>
          <div>
            {ALPHABET.map((letter) =>
              activeLetters.has(letter) ? (
                <a href={`#glossary-letter-${letter}`} key={letter}>{letter}</a>
              ) : (
                <span aria-disabled="true" key={letter}>{letter}</span>
              ),
            )}
          </div>
        </nav>

        <div className="glossary-results">
          <div className="glossary-results-head" aria-live="polite">
            <p><strong>{filteredTerms.length} {filteredTerms.length === 1 ? "term" : "terms"}</strong>{activeSubject ? ` in ${activeSubject}` : ""}{normalizedQuery ? ` matching “${query.trim()}”` : ""}</p>
            {(query || subject !== "all") && <button type="button" onClick={reset}>Reset filters</button>}
          </div>

          {groups.length > 0 ? groups.map(([letter, letterTerms]) => (
            <section className="glossary-letter-group" id={`glossary-letter-${letter}`} key={letter} aria-labelledby={`glossary-letter-heading-${letter}`}>
              <h3 id={`glossary-letter-heading-${letter}`}>{letter}</h3>
              <ul>
                {letterTerms.map((term) => (
                  <li key={term.slug}>
                    <Link href={`/glossary/${term.slug}/`} aria-label={term.term}>
                      <span className="glossary-card-top">
                        <strong>{term.term}</strong>
                        <small>{subjects.find((item) => item.slug === term.category)?.label ?? term.category}</small>
                      </span>
                      <span>{term.shortAnswer ?? term.definition}</span>
                      {term.aliases.length > 0 && <em>Also called {term.aliases.join(", ")}</em>}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )) : (
            <div className="glossary-empty">
              <span aria-hidden="true">Ø</span>
              <h3>No glossary terms match that search.</h3>
              <p>Try a shorter phrase, an abbreviation, or browse the full A–Z index.</p>
              <button type="button" onClick={reset}>Clear search</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

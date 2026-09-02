"use client";

import Link from "next/link";
import { useCallback, useId, useRef, useState } from "react";

import type { AssistantAnswer } from "@/lib/assistant/answer";

/**
 * The assistant interface.
 *
 * A single question box and one answer, because that is the shape of the job:
 * somebody standing in front of a unit with a code on the display wants one
 * sentence and a link, not a conversation. The transcript is kept so follow-up
 * wording has context on screen, and every answer shows where it came from.
 */

type Turn = { question: string; answer: AssistantAnswer | null; error?: string };

const EXAMPLES = [
  "What does Gree E6 mean?",
  "Mini split not cooling",
  "Ice on the outdoor unit",
  "How do I clean the filter?",
];

export function AssistantConsole({ compact = false }: { compact?: boolean }) {
  const [question, setQuestion] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [busy, setBusy] = useState(false);
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = useCallback(
    async (raw: string) => {
      const asked = raw.trim();
      if (!asked || busy) return;

      setBusy(true);
      setQuestion("");
      setTurns((current) => [...current, { question: asked, answer: null }]);

      try {
        // The trailing slash matters: next.config sets trailingSlash, and
        // posting to the unslashed path costs a 308 round trip on every ask.
        const response = await fetch("/api/assistant/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: asked }),
        });
        const data = (await response.json()) as AssistantAnswer;
        setTurns((current) =>
          current.map((turn, i) => (i === current.length - 1 ? { ...turn, answer: data } : turn)),
        );
      } catch {
        setTurns((current) =>
          current.map((turn, i) =>
            i === current.length - 1
              ? { ...turn, error: "The assistant did not respond. Try the search page instead." }
              : turn,
          ),
        );
      } finally {
        setBusy(false);
        inputRef.current?.focus();
      }
    },
    [busy],
  );

  return (
    <div className={compact ? "assistant assistant-compact" : "assistant"}>
      <form
        className="assistant-form"
        onSubmit={(event) => {
          event.preventDefault();
          void submit(question);
        }}
      >
        <label className="visually-hidden" htmlFor={inputId}>
          Ask about an error code, a symptom, or a brand
        </label>
        <input
          id={inputId}
          ref={inputRef}
          type="search"
          className="assistant-input"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask about a code, a symptom, or a brand"
          autoComplete="off"
          enterKeyHint="search"
          maxLength={400}
        />
        <button type="submit" className="btn btn-primary" disabled={busy}>
          {busy ? "Looking" : "Ask"}
        </button>
      </form>

      {turns.length === 0 && (
        <div className="assistant-examples">
          <span>Try</span>
          <ul>
            {EXAMPLES.map((example) => (
              <li key={example}>
                <button type="button" className="chip" onClick={() => void submit(example)}>
                  {example}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="assistant-thread" aria-live="polite">
        {turns.map((turn, index) => (
          <article key={`${turn.question}-${index}`} className="assistant-turn">
            <p className="assistant-question">{turn.question}</p>

            {turn.error && <p className="assistant-answer">{turn.error}</p>}

            {!turn.answer && !turn.error && (
              <p className="assistant-answer assistant-waiting">Searching the library</p>
            )}

            {turn.answer && (
              <>
                {turn.answer.safetyNote && (
                  <p className="assistant-safety">{turn.answer.safetyNote}</p>
                )}
                <p className="assistant-answer">{turn.answer.answer}</p>

                {turn.answer.links.length > 0 && (
                  <ul className="assistant-links">
                    {turn.answer.links.map((link) => (
                      <li key={link.path}>
                        <Link href={link.path}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {turn.answer.suggestions.length > 0 && (
                  <ul className="assistant-links assistant-suggestions">
                    {turn.answer.suggestions.map((link) => (
                      <li key={link.path}>
                        <Link href={link.path}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="assistant-meta">
                  {turn.answer.answered
                    ? "Answered from published HVAC Bench references."
                    : "No published reference covers this."}
                </p>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

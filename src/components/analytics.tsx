"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

import { CONSENT_KEY, GA_MEASUREMENT_ID } from "@/lib/analytics-config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * The stored analytics choice, read as an external store so the notice can
 * render from real browser state without a hydration mismatch and without
 * setting state inside an effect.
 */
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readChoice(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    /* Storage blocked: treat it as already decided and stay quiet. */
    return "unavailable";
  }
}

function serverChoice(): string | null {
  return "unavailable";
}

function writeChoice(choice: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* Nothing to persist to; the choice still applies to this page view. */
  }
  window.gtag?.("consent", "update", { analytics_storage: choice });
  for (const listener of listeners) listener();
}

/**
 * Loads the measurement library after the page has settled, and reports the
 * client-side navigations that a single gtag config call would otherwise miss.
 */
export function Analytics() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <Script
      id="ga-library"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="lazyOnload"
    />
  );
}

/**
 * A slim notice that never covers the page content. A reader who ignores it
 * keeps whichever regional default applies to them.
 */
export function ConsentNotice() {
  const choice = useSyncExternalStore(subscribe, readChoice, serverChoice);
  const decide = useCallback((value: "granted" | "denied") => writeChoice(value), []);

  if (choice !== null) return null;

  return (
    <aside className="consent" aria-label="Analytics choice">
      <p>
        We use Google Analytics to see which pages help people. No advertising profiles, nothing
        sold. See the <Link href="/cookie-policy/">cookie policy</Link>.
      </p>
      <div className="consent-actions">
        <button type="button" className="btn btn-primary" onClick={() => decide("granted")}>
          Accept analytics
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => decide("denied")}>
          Decline
        </button>
      </div>
    </aside>
  );
}

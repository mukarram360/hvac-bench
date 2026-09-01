"use client";

import Link from "next/link";
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

const INTERACTION_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

/**
 * Loads the measurement library once the page is genuinely idle, or sooner if
 * the reader interacts. The consent defaults and the config call are already
 * queued in the data layer by the bootstrap script, so the queued page view is
 * sent as soon as the library arrives; keeping it off the critical path is what
 * protects interaction readiness on a mid-range phone.
 */
export function Analytics() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (document.getElementById("ga-library")) return;

    const handles: { timer?: number; idle?: number } = {};

    const load = () => {
      stop();
      if (document.getElementById("ga-library")) return;
      const script = document.createElement("script");
      script.id = "ga-library";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.append(script);
    };

    function stop() {
      for (const event of INTERACTION_EVENTS) window.removeEventListener(event, load);
      if (handles.timer) window.clearTimeout(handles.timer);
      if (handles.idle && "cancelIdleCallback" in window) window.cancelIdleCallback(handles.idle);
    }

    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, load, { once: true, passive: true });
    }
    handles.timer = window.setTimeout(load, 2500);
    if ("requestIdleCallback" in window) {
      handles.idle = window.requestIdleCallback(load, { timeout: 2500 });
    }

    return stop;
  }, []);

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

  return null;
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

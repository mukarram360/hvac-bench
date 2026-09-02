import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Analytics, ConsentNotice } from "@/components/analytics";
import { consentBootstrap } from "@/lib/analytics-config";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { emptyFormatHubs } from "@/lib/content";
import { visibleFooterNav, visiblePrimaryNav } from "@/lib/nav";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  siteJsonLd,
} from "@/lib/seo";
import "./globals.css";

/**
 * IBM Plex was drawn for technical documentation, which is what this is. Two
 * weights per family keeps the render fast and the hierarchy disciplined.
 */
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-mono",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: { canonical: SITE_URL },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      { url: `${SITE_URL}/opengraph-image/`, width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image/`],
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2028",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  /* A format hub joins the menus on the deploy that gives it its first page. */
  const hidden = emptyFormatHubs();

  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="alternate" type="application/rss+xml" title={`${SITE_NAME} feed`} href="/rss.xml" />
        {/* Consent defaults must be set before the measurement library loads. */}
        <script id="consent-bootstrap" dangerouslySetInnerHTML={{ __html: consentBootstrap }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader groups={visiblePrimaryNav(hidden)} />
        {children}
        <SiteFooter columns={visibleFooterNav(hidden)} />
        <JsonLd data={siteJsonLd()} />
        <Analytics />
        <ConsentNotice />
      </body>
    </html>
  );
}

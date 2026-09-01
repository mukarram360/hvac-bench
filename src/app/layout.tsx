import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: { default: "HVAC Bench — Codes, Diagnostics & Troubleshooting", template: "%s | HVAC Bench" }, description: SITE_DESCRIPTION, applicationName: SITE_NAME, alternates: { canonical: SITE_URL }, openGraph: { type: "website", siteName: SITE_NAME, title: "HVAC Bench — Codes, Diagnostics & Troubleshooting", description: SITE_DESCRIPTION, url: SITE_URL }, twitter: { card: "summary_large_image", title: "HVAC Bench — Codes, Diagnostics & Troubleshooting", description: SITE_DESCRIPTION }, verification: googleVerification ? { google: googleVerification } : undefined };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b2028" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader />{children}<SiteFooter /><JsonLd data={websiteJsonLd()} />{gaId && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}</Script></>}</body></html>;
}


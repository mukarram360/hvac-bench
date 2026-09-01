/**
 * Measurement configuration shared by the server layout and the client
 * analytics component.
 *
 * The production stream ID is the default rather than an environment variable,
 * so a missing variable on a new deployment cannot silently switch measurement
 * off. An environment variable still overrides it for previews and forks.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-J5MZ194SEG";

export const CONSENT_KEY = "hvacbench-consent";

/**
 * Consent Mode v2 regions where analytics storage stays denied until a reader
 * accepts: the United Kingdom, the European Economic Area, and Switzerland.
 */
const CONSENT_REGIONS = [
  "GB", "CH", "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE",
  "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO",
];

/**
 * Runs before the measurement library loads, so consent defaults are in place
 * before any request is made. Advertising storage is denied everywhere because
 * the site runs no advertising personalisation.
 */
export const consentBootstrap = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments)}
window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted',functionality_storage:'granted',security_storage:'granted'});
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(CONSENT_REGIONS)},wait_for_update:500});
try{var c=localStorage.getItem('${CONSENT_KEY}');if(c==='granted'||c==='denied'){gtag('consent','update',{analytics_storage:c})}}catch(e){}
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:true,anonymize_ip:true});
`.trim();

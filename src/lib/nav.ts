/**
 * Site navigation model.
 *
 * The header, footer, and HTML site map all read from this file, so a new
 * section appears everywhere at once and no route can drift out of the menu.
 */

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  /** Columns shown in the desktop panel and as sections in the mobile drawer. */
  columns?: { heading: string; links: NavLink[] }[];
  footerLink?: NavLink;
};

export const primaryNav: NavGroup[] = [
  {
    label: "Brands",
    href: "/brands/",
    columns: [
      {
        heading: "Ductless and heat pump",
        links: [
          { label: "Mitsubishi Electric", href: "/brands/mitsubishi/", description: "M-Series, Ecodan, Hyper-Heat" },
          { label: "Daikin", href: "/brands/daikin/", description: "Aurora, SkyAir, Altherma" },
          { label: "Gree", href: "/brands/gree/", description: "Vireo, Livo, Multi21+" },
          { label: "Fujitsu General", href: "/brands/fujitsu/", description: "AIRSTAGE and Halcyon" },
          { label: "MRCOOL", href: "/brands/mrcool/", description: "DIY 4th and 5th generation" },
        ],
      },
      {
        heading: "By market",
        links: [
          { label: "United States brands", href: "/brands/#us", description: "Systems common in North America" },
          { label: "United Kingdom brands", href: "/brands/#uk", description: "Heat pumps, boilers, controls" },
          { label: "European brands", href: "/brands/#eu", description: "Mainland Europe manufacturers" },
          { label: "Controls and thermostats", href: "/brands/#controls", description: "Nest, ecobee, tado, Hive" },
        ],
      },
    ],
    footerLink: { label: "All manufacturers", href: "/brands/" },
  },
  {
    label: "Error codes",
    href: "/error-codes/",
  },
  {
    label: "Troubleshooting",
    href: "/troubleshooting/",
    columns: [
      {
        heading: "Cooling and heating",
        links: [
          { label: "Not cooling", href: "/mini-split-not-cooling/", description: "Airflow, ice, charge, and settings" },
          { label: "Not heating", href: "/mini-split-not-heating/", description: "Defrost, delay, and low-temperature behaviour" },
          { label: "Short cycling", href: "/mini-split-short-cycling/", description: "Starts and stops within minutes" },
          { label: "Frozen coil", href: "/mini-split-frozen-coil/", description: "Ice on the indoor coil" },
        ],
      },
      {
        heading: "Water, power, controls",
        links: [
          { label: "Leaking water", href: "/mini-split-leaking-water/", description: "Condensate and drainage" },
          { label: "Will not turn on", href: "/mini-split-not-turning-on/", description: "Power, timer, and protection states" },
          { label: "Remote not working", href: "/mini-split-remote-not-working/", description: "Pairing, batteries, signal" },
          { label: "All symptoms", href: "/troubleshooting/", description: "The full symptom index" },
        ],
      },
    ],
    footerLink: { label: "Browse every symptom", href: "/troubleshooting/" },
  },
  {
    label: "Equipment",
    href: "/equipment/",
    columns: [
      {
        heading: "Systems",
        links: [
          { label: "Ductless mini-splits", href: "/equipment/ductless-mini-split/", description: "Single and multi-zone" },
          { label: "Heat pumps", href: "/equipment/heat-pump/", description: "Air source, ducted and hydronic" },
          { label: "Ducted and central air", href: "/equipment/ducted-split/", description: "Air handlers and furnaces" },
          { label: "Controls and thermostats", href: "/equipment/controls-thermostats/", description: "Remotes and smart controls" },
        ],
      },
      {
        heading: "Also covered",
        links: [
          { label: "Air handlers and coils", href: "/equipment/air-handler/", description: "Blowers, coils, drainage" },
          { label: "Boilers and hydronics", href: "/equipment/boiler/", description: "United Kingdom and European systems" },
          { label: "Indoor air quality", href: "/equipment/indoor-air-quality/", description: "Filtration and ventilation" },
          { label: "Light commercial", href: "/equipment/light-commercial/", description: "VRF, cassettes, rooftop units" },
        ],
      },
    ],
    footerLink: { label: "Equipment index", href: "/equipment/" },
  },
  {
    label: "Learn",
    href: "/guides/",
    columns: [
      {
        heading: "Reference",
        links: [
          { label: "Guides", href: "/guides/", description: "Longer explanations of how systems behave" },
          { label: "How-to", href: "/how-to/", description: "Step-by-step procedures with safety limits" },
          { label: "Comparisons", href: "/compare/", description: "Like-for-like equipment comparisons" },
        ],
      },
      {
        heading: "Look it up",
        links: [
          { label: "Glossary", href: "/glossary/", description: "Plain-language HVAC vocabulary" },
          { label: "Questions", href: "/faq/", description: "Answers to what readers ask most" },
          { label: "HVAC Bench Score", href: "/benchmark/", description: "How equipment families are rated" },
          { label: "How we research", href: "/sources-methodology/", description: "Sources, scope, and verification" },
        ],
      },
    ],
    footerLink: { label: "Start with the glossary", href: "/glossary/" },
  },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Reference",
    links: [
      { label: "Brands", href: "/brands/" },
      { label: "Error codes", href: "/error-codes/" },
      { label: "Troubleshooting", href: "/troubleshooting/" },
      { label: "Equipment", href: "/equipment/" },
      { label: "Glossary", href: "/glossary/" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Guides", href: "/guides/" },
      { label: "How-to", href: "/how-to/" },
      { label: "Comparisons", href: "/compare/" },
      { label: "Questions", href: "/faq/" },
      { label: "HVAC Bench Score", href: "/benchmark/" },
    ],
  },
  {
    heading: "Standards",
    links: [
      { label: "About", href: "/about/" },
      { label: "Editorial policy", href: "/editorial-policy/" },
      { label: "Sources and methodology", href: "/sources-methodology/" },
      { label: "Corrections", href: "/corrections/" },
      { label: "Safety disclaimer", href: "/safety-disclaimer/" },
    ],
  },
  {
    heading: "Site",
    links: [
      { label: "Contact", href: "/contact/" },
      { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
      { label: "Privacy", href: "/privacy/" },
      { label: "Cookies", href: "/cookie-policy/" },
      { label: "Terms", href: "/terms/" },
      { label: "Accessibility", href: "/accessibility/" },
      { label: "Site map", href: "/site-map/" },
    ],
  },
];

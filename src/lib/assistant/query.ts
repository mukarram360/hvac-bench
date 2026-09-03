import { getAllBrands } from "@/lib/content";
import { normaliseCode, tokenize } from "./passages";

/**
 * Query understanding.
 *
 * People do not type the way a taxonomy is written. They type "aircon wont
 * turn on", "diakin u4", "e 6 error", and "blowing warm air". This module
 * turns that into the three things retrieval can use precisely: a brand, one
 * or more error codes, and the symptom families the wording describes.
 */

export type ParsedQuery = {
  raw: string;
  normalised: string;
  tokens: string[];
  brand?: string;
  errorCodes: string[];
  problemTypes: string[];
  /** True when the question asks for a procedure past the homeowner boundary. */
  hazardous: boolean;
  /** True when the wording describes an immediate hazard rather than a fault. */
  urgent: boolean;
  /** True when the subject is one the site deliberately does not publish. */
  outOfScope: boolean;
  /**
   * A manufacturer the reader named that this library does not publish. Held
   * separately from `brand` because the difference between "no manufacturer was
   * given" and "a manufacturer we cannot answer for was given" decides whether
   * an answer is allowed at all.
   */
  uncoveredBrand?: string;
  /**
   * Tokens shaped like a fault code or a model designation, whether or not
   * `errorCodes` could resolve them. A reader who types a code the library has
   * never published has named an entity, and the answer layer needs to see that
   * rather than silently dropping it and answering about a different code.
   */
  codeShapedTokens: string[];
};

/**
 * Everyday phrasing mapped to the symptom family it describes. Order matters
 * only in that every match is collected; a question can describe two symptoms.
 */
const SYMPTOM_PHRASES: { problemType: string; phrases: string[] }[] = [
  {
    problemType: "not-cooling",
    phrases: [
      "not cooling", "no cold air", "blowing warm", "blowing hot", "not cold",
      "wont cool", "will not cool", "not getting cold", "no cooling", "stopped cooling",
      "not blowing cold",
    ],
  },
  {
    problemType: "not-heating",
    phrases: [
      "not heating", "no heat", "blowing cold", "wont heat", "will not heat",
      "not warm", "no warm air", "stopped heating", "not getting warm",
    ],
  },
  {
    problemType: "water-leak",
    phrases: [
      "leaking", "leak", "dripping", "water coming", "water from", "condensate",
      "dripping water", "water inside", "wet wall",
    ],
  },
  {
    problemType: "frozen-indoor-coil",
    phrases: [
      "frozen coil", "ice on the indoor", "ice on indoor", "indoor coil ice",
      "freezing up", "iced up inside", "frost on the coil", "ice behind the filter",
    ],
  },
  {
    problemType: "outdoor-unit-iced-over",
    phrases: [
      "outdoor unit iced", "outdoor unit frozen", "outside unit ice", "iced over",
      "ice on the outdoor", "frozen outside", "covered in ice", "outdoor coil frozen",
    ],
  },
  {
    problemType: "not-turning-on",
    phrases: [
      "wont turn on", "will not turn on", "not turning on", "wont start", "will not start",
      "not starting", "no power", "dead", "nothing happens", "unresponsive",
    ],
  },
  {
    problemType: "outdoor-unit-not-running",
    phrases: [
      "outdoor unit not running", "condenser not running", "outdoor not running",
      "outside unit not running", "fan not spinning", "outdoor fan not", "compressor not running",
      "outdoor unit silent",
    ],
  },
  {
    problemType: "abnormal-noise",
    phrases: [
      "noise", "noisy", "loud", "rattling", "buzzing", "grinding", "gurgling",
      "clicking", "banging", "squealing", "humming", "vibrating", "sound",
    ],
  },
  {
    problemType: "musty-odor",
    phrases: [
      "smell", "smells", "odor", "odour", "musty", "stinks", "mildew", "dirty sock",
      "damp smell", "bad smell",
    ],
  },
  {
    problemType: "short-cycling",
    phrases: [
      "short cycling", "short cycle", "turns on and off", "turning on and off",
      "keeps cycling", "cycling", "starts and stops", "switching on and off",
      "cycles too often", "on and off every",
    ],
  },
  {
    problemType: "remote-not-working",
    phrases: [
      "remote", "controller not working", "handset", "remote control", "wont respond to remote",
    ],
  },
  {
    problemType: "filter-maintenance",
    phrases: [
      "clean the filter", "clean filter", "filter cleaning", "wash the filter", "washing filter",
      "dirty filter", "filter maintenance", "change the filter", "clean my filter",
    ],
  },
  { problemType: "communication-fault", phrases: ["communication error", "communication fault", "not communicating"] },
  { problemType: "voltage-protection", phrases: ["voltage protection", "low voltage", "voltage error"] },
  { problemType: "temperature-sensor-fault", phrases: ["sensor fault", "temperature sensor", "sensor error"] },
];

/**
 * Procedure requests past the homeowner boundary.
 *
 * The test is intent, not vocabulary. Asking whether low refrigerant explains
 * a frozen coil is an ordinary question and gets an ordinary answer; asking
 * how to add refrigerant is a request for a procedure this site does not give
 * to homeowners.
 */
const HAZARD_PATTERNS: RegExp[] = [
  /\b(recharge|refill|re-?gas|top ?up|charge|add|put)\b[^.?]*\b(refrigerant|freon|r32|r410a|gas)\b/i,
  /\b(refrigerant|freon|r32|r410a)\b[^.?]*\b(recharge|refill|top ?up|charge it|myself|diy)\b/i,
  /\b(evacuate|vacuum pump|braze|brazing|weld|flare|pressure test|gauges?)\b/i,
  /\b(bypass|jump|jumper|short out|hot ?wire)\b[^.?]*\b(contactor|relay|switch|board|safety|protection|thermostat)\b/i,
  /\b(discharge|replace|test|check)\b[^.?]*\b(capacitor|dc bus|inverter module|compressor terminals?)\b/i,
  /\b(test|measure|check)\b[^.?]*\b(live|mains|voltage|volts|amperage|amps)\b/i,
  /\bopen (the )?(electrical|control) (panel|box|compartment|cover)\b/i,
  /\bwiring diagram\b/i,
];

/**
 * Subjects HVAC Bench deliberately does not publish.
 *
 * Pricing, quotes, installer recommendations, and buying advice are outside
 * what this site does, and there is no dealer or lead journey here. Left
 * unhandled, these questions still find plausible looking matches in the
 * library, because words like cost and best appear in ordinary prose. Naming
 * them lets the assistant decline honestly instead of answering beside the
 * point.
 */
const OUT_OF_SCOPE_PATTERNS: RegExp[] = [
  /\b(cost|costs|price|prices|pricing|quote|quotes|cheapest|expensive|how much (to|does|do|is|are|would|will))\b/i,
  /\b(near me|in my area|local (installer|engineer|contractor|company)|who (can|should) (i )?(call|hire|use))\b/i,
  /\b(installer|contractor|engineer|fitter)s?\b[^.?]*\b(recommend|find|near|hire|best)\b/i,
  /\b(recommend|best|worth (it|buying)|should i (buy|get|choose)|which (brand|model|one))\b[^.?]*\b(brand|model|system|unit|buy|purchase)\b/i,
  /\b(warranty claim|refund|return it|sue|complaint)\b/i,
];

/** Wording that describes a hazard happening now rather than a fault to diagnose. */
const URGENT_PATTERNS: RegExp[] = [
  /\b(burning|burnt|smoke|smoking|sparks?|arcing|melting|fire)\b/i,
  /\bsmells? (like )?(burning|electrical|hot plastic)\b/i,
  /\b(breaker (keeps )?trip|tripping (the )?breaker|shock)\b/i,
];

/**
 * Edit distance counting a swapped pair of adjacent letters as one mistake.
 *
 * Transposition is the most common way a brand name gets mistyped, and plain
 * Levenshtein charges two edits for it, which puts "diakin" out of reach of
 * "daikin" at any budget tight enough to be safe.
 */
function editDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 3;

  const rows: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let best = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        best = Math.min(best, rows[i - 2][j - 2] + 1);
      }
      rows[i][j] = best;
    }
  }

  return rows[a.length][b.length];
}

/**
 * Fuzzy brand matching, scaled to how much room for error a name has.
 *
 * Short names get none. "Nest" is one edit from "best", and allowing that made
 * "best pizza in naples" look like a question about a thermostat. The edit
 * budget only opens up once a name is long enough that a near miss is far more
 * likely to be a typo than a different word.
 */
function fuzzyEquals(token: string, target: string): boolean {
  if (token === target) return true;
  if (target.length <= 5) return false;
  const allowed = target.length >= 9 ? 2 : 1;
  if (Math.abs(token.length - target.length) > allowed) return false;
  return editDistance(token, target) <= allowed;
}

type BrandVocabulary = { slug: string; forms: string[] };
let brandVocabulary: BrandVocabulary[] | null = null;

function getBrandVocabulary(): BrandVocabulary[] {
  if (!brandVocabulary) {
    brandVocabulary = getAllBrands().map((brand) => ({
      slug: brand.slug,
      forms: [brand.name, brand.slug, ...brand.aliases]
        .map((form) => form.toLowerCase().replace(/[^a-z0-9]/g, ""))
        .filter(Boolean),
    }));
  }
  return brandVocabulary;
}

function detectBrand(normalised: string, tokens: string[]): string | undefined {
  const collapsed = normalised.replace(/[^a-z0-9]/g, "");
  const vocabulary = getBrandVocabulary();

  // Check every exact form from longest to shortest. That makes a specific
  // family such as Daikin Altherma win over its parent manufacturer, while
  // still letting a joined spelling such as "mr cool" reach "mrcool".
  const exactForms = vocabulary
    .flatMap((brand) => brand.forms.map((form) => ({ slug: brand.slug, form })))
    .sort((a, b) => b.form.length - a.form.length);
  for (const { slug, form } of exactForms) {
    if (tokens.includes(form) || (form.length >= 6 && collapsed.includes(form))) {
      return slug;
    }
  }

  // Finally typos, on names long enough to absorb one.
  for (const token of tokens) {
    for (const brand of vocabulary) {
      for (const form of brand.forms) {
        if (fuzzyEquals(token, form)) return brand.slug;
      }
    }
  }

  return undefined;
}

/**
 * Manufacturer names this library does not publish references for.
 *
 * Answering one of these from a covered brand's documentation is the single
 * most damaging thing the assistant can do, because a code means different
 * things on different equipment. The list therefore exists to force a refusal,
 * not to enrich retrieval.
 *
 * An earlier version of this vocabulary lived beside the answer composer and
 * skipped any entry that had since become a covered brand. That made it decay
 * silently: as the library grew, twenty-two of its twenty-seven entries turned
 * into no-ops and the guard stopped protecting anything. Nothing is skipped at
 * runtime now. `assistant.test.ts` asserts the list stays disjoint from the
 * brand registry, so covering a manufacturer is a change that fails loudly here
 * until the name is removed from this list.
 */
export const UNCOVERED_MANUFACTURERS = [
  "coleman", "kenmore", "luxaire", "payne", "heil", "tempstar", "arcoaire",
  "comfortmaker", "ducane", "armstrong air", "concord", "westinghouse",
  "nordyne", "frigidaire", "gibson", "maytag", "keeprite", "napoleon",
  "continental", "airtemp", "aire flo", "allied air", "broan", "nutone",
  "weatherking", "sharp", "perfect aire", "soleus", "airwell", "chigo",
  "olimpia splendid", "sinclair", "electrolux", "kelvinator", "westpoint",
  "carrier midea", "trane mitsubishi",
] as const;

/**
 * Matched on token and phrase boundaries rather than as a raw substring. A
 * substring test made "ideal" fire on "ideally" and "sharp" on "sharper",
 * which turned a safety guard into a source of wrong refusals.
 */
function detectUncoveredManufacturer(
  normalised: string,
  tokens: string[],
): string | undefined {
  const padded = ` ${normalised.replace(/[^a-z0-9]+/g, " ").trim()} `;
  for (const name of UNCOVERED_MANUFACTURERS) {
    if (name.includes(" ")) {
      if (padded.includes(` ${name} `)) return name;
    } else if (tokens.includes(name)) {
      return name;
    }
  }
  return undefined;
}

/**
 * Tokens shaped like a code or a model designation: one or two letters
 * followed by digits, optionally with a trailing letter. Pure numbers are
 * excluded because a bare number carries no entity of its own, and a leading
 * digit is excluded so ordinals such as "4th" are not mistaken for a code.
 */
const CODE_SHAPED = /^[a-z]{1,2}\d{1,3}[a-z]?$/;

function detectCodeShapedTokens(tokens: string[]): string[] {
  return [...new Set(tokens.filter((token) => CODE_SHAPED.test(token)))];
}

/**
 * Error codes as they appear in the wild. The letters are constrained to the
 * prefixes HVAC manufacturers actually use, so ordinary words are not read as
 * codes.
 */
const CODE_PATTERN =
  /\b(?:(ch|el|pc|eh|e|p|h|u|a|f|c|d|j|l)\s?[-.]?\s?(\d{1,3}(?:\.\d+)?[a-z]?)|(\d{1,3}[a-z]))\b/gi;

function detectCodes(raw: string): string[] {
  const found = new Set<string>();
  for (const match of raw.matchAll(CODE_PATTERN)) {
    const code = normaliseCode(match[3] ?? `${match[1]}${match[2]}`);
    // A bare single letter and digit like "a 5" is only a code when the letter
    // is not a word on its own in that position, which the prefix list and the
    // digit requirement already mostly settle.
    if (code.length >= 2) found.add(code);
  }
  return [...found];
}

function detectProblemTypes(normalised: string): string[] {
  const found = new Set<string>();
  for (const { problemType, phrases } of SYMPTOM_PHRASES) {
    if (phrases.some((phrase) => normalised.includes(phrase))) found.add(problemType);
  }
  return [...found];
}

export function parseQuery(raw: string): ParsedQuery {
  const normalised = raw
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const tokens = tokenize(normalised);

  const brand = detectBrand(normalised, tokens);

  return {
    raw,
    normalised,
    tokens,
    brand,
    errorCodes: detectCodes(normalised),
    problemTypes: detectProblemTypes(normalised),
    hazardous: HAZARD_PATTERNS.some((pattern) => pattern.test(normalised)),
    urgent: URGENT_PATTERNS.some((pattern) => pattern.test(normalised)),
    outOfScope: OUT_OF_SCOPE_PATTERNS.some((pattern) => pattern.test(normalised)),
    // A covered brand in the same question wins: "trane mitsubishi ductless" is
    // a line HVAC Bench publishes, not an unknown manufacturer.
    uncoveredBrand: brand ? undefined : detectUncoveredManufacturer(normalised, tokens),
    codeShapedTokens: detectCodeShapedTokens(tokens),
  };
}

import { publish } from "./publish";
export const dellaE5BySeries = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Della E5 error code: the series changes the meaning",
  slug: "e5-error-code-by-series",
  path: "/brands/della/e5-error-code-by-series/",
  description:
    "Resolve Della E5 or 5E by product series before troubleshooting: it can mean a factory mismatch or an indoor-outdoor communication fault.",
  articleType: "error-code",
  brand: "della",
  equipmentType: "ductless-mini-split",
  productFamily: "Econo, Vario, Optima, Motto, and Umbra mini-splits",
  models: ["Econo IF Series", "Vario TL Series", "Optima TP Series", "Motto JA Series", "Umbra JPB Series"],
  errorCode: "E5/5E",
  problemType: "model-specific-code",
  directAnswer:
    "Della does not assign one universal meaning to E5. Its published table gives E5 as an indoor/outdoor mismatch on Econo, Vario, and Optima systems, but E5 or 5E as indoor/outdoor communication failure on Motto and Umbra systems. Read the model family before the code.",
  scopeNotice:
    "The distinctions here follow Della's own series table. They do not cover every Della generation, and a retail listing name is not a substitute for the model label when choosing the correct manual.",
  symptoms: ["The indoor display shows E5 or 5E and the mini-split will not complete normal operation."],
  causes: [
    "On IF, TL, and TP platforms, the installed indoor and outdoor equipment may not be a recognised match.",
    "On JA and JPB platforms, wiring, terminals, supply, or either control circuit may have lost communication.",
  ],
  diagnosticBranches: [
    {
      title: "Model belongs to IF, TL, or TP",
      observation:
        "The rating plate or matched documentation identifies Econo IF, Vario TL, or Optima TP as the installed platform.",
      action:
        "Treat E5 as a mismatch report and have the installer prove the exact indoor-outdoor combination and commissioning configuration.",
    },
    {
      title: "Model belongs to JA or JPB",
      observation:
        "The labels identify Motto JA or Umbra JPB, where the Della table assigns E5 or 5E to communication failure.",
      action:
        "Preserve installation and outage history for a technician who can test the inter-unit path before replacing controls.",
    },
  ],
  decisionTable: {
    caption: "Della E5 family lookup",
    columns: ["Della family", "Display", "Published meaning"],
    rows: [
      ["Econo IF", "E5", "Indoor/outdoor mismatch"],
      ["Vario TL or Optima TP", "E5", "Indoor/outdoor mismatch"],
      ["Motto JA or Umbra JPB", "E5 or 5E", "Indoor/outdoor communication failure"],
    ],
  },
  figures: [
    {
      title: "Model identity comes before E5",
      description:
        "The same display reaches different diagnostic routes because Della's product platforms assign E5 at different stages of commissioning and operation.",
      nodes: [
        {
          label: "Rating plate",
          detail: "Provides the model characters that identify platform",
        },
        {
          label: "Series table",
          detail: "Selects mismatch or communication meaning",
        },
        {
          label: "Correct branch",
          detail: "Sets the installer checks that follow",
        },
        {
          label: "Measured finding",
          detail: "Identifies pairing, path, supply, or control fault",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Why a generic Della E5 answer fails",
      paragraphs: [
        "Search pages can merge code tables because the indoor display looks identical. Della's manufacturer guide shows why that is unsafe. On Econo, Vario, and Optima, E5 belongs to an indoor/outdoor mismatch, a condition especially relevant at performance testing or commissioning. On Motto and Umbra, E5 or the reversed-looking 5E belongs to communication between the two units. The likely work, evidence, and possible components are therefore different before a technician has taken a single measurement.",
        "Start with photographs of both rating plates, not the name on a remote or sales receipt. Preserve every prefix and suffix. The indoor family alone may be insufficient if the question is whether the outdoor unit is its approved match. Della's matching documentation or support team can then establish compatibility. Only after identity is settled should anyone follow the mismatch or communication service tree.",
      ],
    },
    {
      title: "What each branch needs from the owner",
      paragraphs: [
        "For an IF, TL, or TP installation, record whether E5 existed from the first startup, whether either unit was replaced, and the exact combination installed. A mismatch code that appears at commissioning should return to the installer. Do not attempt to change configuration values found in an unrelated online manual.",
        "For JA or JPB, note whether the system previously worked, whether E5 followed an outage, and whether cable or control work occurred. Communication diagnosis includes isolated continuity and powered electrical tests. Do not open terminals or swap wires. In either branch, one permitted restart can document recurrence; repeating resets cannot turn an incompatible pairing into a match or repair an interrupted signal.",
      ],
    },
  ],
  safeChecks: [
    "Photograph both model labels and the exact E5 or 5E orientation, then record whether the fault existed from initial commissioning.",
  ],
  professionalEscalation: [
    "Equipment matching, configuration, field wiring, voltage, communication, and board diagnosis belong to the installer or Della-authorised service.",
  ],
  serviceHandoff:
    "Provide both complete model numbers, series names, code orientation, first-start result, replacement history, cable work, outage timing, and the result of one permitted restart.",
  resetGuidance:
    "Do not loop power; a returning E5 needs the series-specific mismatch or communication path, not another generic reset.",
  faqs: [
    {
      question: "Why does Della E5 have two meanings?",
      answer:
        "Della uses different control platforms. Its own table assigns mismatch to IF, TL, and TP but communication failure to JA and JPB.",
    },
    {
      question: "Is 5E different from E5 on Della?",
      answer:
        "The Motto and Umbra table presents E5 or 5E for the communication condition. Photograph the display so service sees its actual orientation.",
    },
    {
      question: "Can I use the remote to identify my series?",
      answer:
        "No. Remotes can be shared across products. Use the indoor and outdoor rating plates to select the family and confirm the installed match.",
    },
  ],
  sourceIds: ["della-code-guide", "della-manual-support"],
  glossaryTerms: ["error-code", "data-plate"],
  relatedContent: ["/brands/della/", "/how-to-find-mini-split-model-number/", "/how-to-read-hvac-data-plate/"],
  keywords: ["della e5 error code", "della 5e error", "della mini split e5", "della motto e5 communication"],
});

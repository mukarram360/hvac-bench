import { publish } from "./publish";

export const honeywellT6BalancePoint = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Honeywell Home T6 balance point: compressor and backup lockouts face opposite ways",
  slug: "t6-balance-point-lockouts",
  path: "/brands/honeywell-home/t6-balance-point-lockouts/",
  description:
    "T6 installer setup 355 can lock out the compressor below an outdoor temperature. Setup 356 locks out backup heat above its own temperature.",
  articleType: "guide",
  brand: "honeywell-home",
  equipmentType: "controls-thermostats",
  productFamily: "Honeywell Home T6 Pro thermostats configured for heat-pump systems",
  models: ["TH6320U", "TH6220U", "T6 Pro Series models covered by the cited installer setup"],
  problemType: "heat-pump-balance-point",
  symptomFamily: "no-heating",
  directAnswer:
    "Installer setup 355 withholds the compressor below its selected outdoor temperature. Setup 356 withholds backup heat above its selected temperature. The two values govern opposite heat sources, and TH6320U or TH6220U needs a wired sensor for the documented compressor lockout.",
  scopeNotice:
    "The setup numbers and sensor note come from current Honeywell Home T6 Pro II instructions. Older T6 series revisions have installer-menu differences, so use the thermostat model and series marking.",
  symptoms: ["Only the heat pump or only backup heat runs around a particular outdoor temperature despite an active heating call."],
  causes: [
    "A compressor lockout can make backup heat the remaining eligible source below its boundary.",
    "A backup-heat lockout can require the heat pump to carry the call above its boundary even when recovery is slow.",
  ],
  decisionTable: {
    caption: "T6 Pro outdoor lockout directions",
    columns: ["ISU", "Selectable range", "Result"],
    rows: [
      ["355 Compressor Lockout or Balance Point", "Off, or 5 to 60 degrees Fahrenheit", "Compressor is withheld below the value"],
      ["356 Outdoor Lockout Backup Heat", "Off, or 5 to 65 degrees Fahrenheit", "Backup heat is withheld above the value"],
      ["387 Compressor Protection", "Off, or one to five minutes", "Restart waits for the selected time"],
    ],
  },
  figures: [{
    title: "The T6 gates primary and backup heat separately",
    description: "Outdoor temperature is compared with two installer values. The compressor cutoff acts below its threshold, while the backup cutoff acts above a separate threshold.",
    nodes: [
      { label: "ISU 355", detail: "Cold-side compressor boundary" },
      { label: "Outdoor input", detail: "Wired sensor where the model requires it" },
      { label: "ISU 356", detail: "Warm-side backup boundary" },
    ],
  }],
  sections: [
    {
      title: "A dead band between sources can be a configuration result",
      paragraphs: [
        "Because the lockouts point in opposite directions, their relationship matters. The compressor setting establishes a cold-side cutoff, while the backup setting establishes a warm-side cutoff. An installer selects them against heat-pump capacity, backup type, sensor arrangement, and design conditions.",
        "Do not copy a neighbor's value or treat the available menu range as a recommended setting. The T6 offers values from 5 to 60 or 65 degrees Fahrenheit because it serves many systems. The correct number comes from the connected equipment and commissioning design.",
        "A wired outdoor sensor requirement on TH6320U and TH6220U is part of that design. If its reading is wrong, both the displayed temperature and any lockout based on it can be wrong together. Sensor placement and wiring need verification before the thresholds are retuned.",
        "Ask the installer to record both values on the commissioning note. One number without its label is ambiguous because the same outdoor temperature can be a compressor minimum or a backup maximum, with opposite results for which equipment runs.",
      ],
    },
    {
      title: "Outdoor lockout and a flashing Heat On message are different clocks",
      paragraphs: [
        "A lockout follows outdoor temperature. The flashing Heat On or Cool On indication can instead be the compressor-protection timer, which Honeywell documents as a five-minute wait in troubleshooting and as a configurable one-to-five-minute installer setting. Waiting resolves the timer, not a weather cutoff.",
        "Record outdoor temperature, equipment icons, selected ISU values if the installer provides them, thermostat model, sensor type, and time since the compressor last stopped. Changes inside installer setup should be made by the person responsible for matching the thermostat to the equipment.",
      ],
    },
  ],
  faqs: [
    { question: "What does T6 installer setup 355 control?", answer: "It sets the compressor lockout or balance point. Below the selected outdoor temperature, the heat-pump compressor is not permitted to run." },
    { question: "What does T6 installer setup 356 control?", answer: "It sets the outdoor lockout for backup heat. Above that selected temperature, the backup source is withheld." },
    { question: "Is a flashing Heat On caused by the balance point?", answer: "Not necessarily. Honeywell identifies flashing Heat On or Cool On with compressor protection, which uses a time delay rather than an outdoor-temperature boundary." },
  ],
  sourceIds: ["honeywell-t6-isu", "honeywell-compressor-protection"],
  relatedContent: ["/brands/honeywell-home/", "/brands/honeywell-home/t6-pro-wait-message/", "/heat-pump-operating-temperatures/"],
  glossaryTerms: ["balance-point", "auxiliary-heat", "thermostat"],
  keywords: ["honeywell t6 balance point", "t6 compressor lockout 355", "t6 backup heat lockout 356", "honeywell heat pump outdoor lockout"],
});

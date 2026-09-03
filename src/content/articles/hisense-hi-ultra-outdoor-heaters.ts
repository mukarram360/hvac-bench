import { publish } from "./publish";

/**
 * Cold-climate outdoor units carry heaters, and nobody tells the owner. The
 * page exists to answer the question that follows from that: why is the
 * outdoor unit warm, or drawing power, when nothing is running. It stays with
 * what Hisense publishes for the range and does not extrapolate a wattage.
 */
export const hisenseHiUltraOutdoorHeaters = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Hisense Hi-ULTRA: the two heaters inside the outdoor unit",
  slug: "hi-ultra-outdoor-heaters",
  path: "/brands/hisense/hi-ultra-outdoor-heaters/",
  description:
    "Hisense fits a base pan heater and a crankcase heater to the Hi-ULTRA outdoor unit for low ambient operation. What each one is doing while nothing appears to run.",
  articleType: "guide",
  brand: "hisense",
  equipmentType: "heat-pump",
  productFamily: "Hi-ULTRA ductless R-454B range",
  models: ["Hi-ULTRA 0.75 ton", "Hi-ULTRA 1 ton", "Hi-ULTRA 1.5 ton", "Hi-ULTRA 2 ton"],
  problemType: "low-ambient-provisions",
  symptomFamily: "running-cost",
  directAnswer:
    "Hisense lists a built-in condenser base pan heater and a crankcase heater on the Hi-ULTRA outdoor unit, fitted so the system starts and runs at low ambient conditions. Both can consume power while the system looks idle.",
  scopeNotice:
    "This describes the Hi-ULTRA ductless range as Hisense publishes it for North America, on the R-454B platform in capacity classes from three quarters of a ton to two tons. Other Hisense ranges are specified separately, and whether any given outdoor unit carries both heaters belongs to the documentation for that model.",
  layout: ["decisionTable", "figures", "sections"],
  symptoms: [
    "The outdoor unit feels warm to the touch on a cold day when nothing has been running.",
    "Electricity use in winter looks higher than the heating hours would explain.",
    "Somebody is deciding whether to switch the outdoor unit off at the isolator during a cold spell.",
  ],
  causes: [
    "Hisense fits a crankcase heater and a condenser base pan heater to this range as part of its low ambient provision.",
    "Both are outdoor unit components that operate independently of whether heating or cooling has been called for.",
  ],
  decisionTable: {
    caption: "Published Hi-ULTRA operating range, by mode",
    columns: ["Mode", "Lower limit", "Upper limit"],
    rows: [
      ["Heating", "Minus 13 degrees Fahrenheit, or minus 25 Celsius", "75 degrees Fahrenheit, or 24 Celsius"],
      ["Cooling", "5 degrees Fahrenheit, or minus 15 Celsius", "125 degrees Fahrenheit, or 52 Celsius"],
    ],
  },
  figures: [
    {
      title: "Where each heater sits and what it protects",
      description:
        "Two heaters, two different problems, both of which appear when the outdoor unit is cold and has not been running. Neither is a comfort heater and neither warms your house.",
      nodes: [
        { label: "Crankcase heater", detail: "At the compressor, keeping its oil warm while it is off" },
        { label: "Condenser base pan", detail: "Where defrost meltwater collects before draining" },
        { label: "Base pan heater", detail: "Keeps that meltwater moving rather than freezing in place" },
        { label: "Outdoor coil", detail: "The surface that frosts and is cleared by the defrost cycle" },
      ],
    },
  ],
  sections: [
    {
      title: "Why a compressor needs a heater when it is switched off",
      paragraphs: [
        "Refrigerant migrates toward the coldest part of a system that has been standing. In winter that can be the compressor, and refrigerant that condenses into the compressor oil dilutes it. The next start then happens with thinned oil and liquid where the compressor expects vapour, which is a hard way to begin a cycle.",
        "A crankcase heater exists to keep the compressor slightly warmer than its surroundings so that migration does not happen. It runs while the compressor is off, which is the point: the protection is needed exactly when nothing else in the system is drawing power.",
        "That is why isolating the outdoor unit for the winter is not the saving it looks like. Removing the supply removes the heater, and the first start after that has none of the protection Hisense fitted it for.",
      ],
    },
    {
      title: "What the base pan heater is for",
      paragraphs: [
        "A heat pump running in cold weather builds frost on the outdoor coil and clears it by reversing into a short defrost. The water that comes off has to leave the cabinet through the base pan. In sustained sub-freezing weather it can refreeze on the way out, and ice that accumulates in the pan sits under the coil where the next defrost has to melt through it before it can drain.",
        "A base pan heater keeps that path open. Hisense publishes it as part of the same low ambient provision as the crankcase heater. The heating operating range reaches down to minus 13 degrees Fahrenheit, well into the conditions where drainage rather than capacity becomes the limiting problem.",
        "For a reader who has found ice building in the bottom of an outdoor unit, this is the part of the design that was meant to prevent it. A pan filling with ice on a unit fitted with the heater is a reason to have the heater checked rather than to chip at the ice.",
      ],
    },
    {
      title: "Reading the operating range honestly",
      paragraphs: [
        "Hisense publishes heating from minus 13 to 75 degrees Fahrenheit and cooling from 5 to 125. Those are the conditions the range is specified to operate in, not a promise of full output at either extreme. Heat pump capacity falls as outdoor temperature falls, so the bottom of the heating range is where the equipment still works rather than where it still meets a design load.",
        "The cooling range reaching down to 5 degrees Fahrenheit is worth noticing for a different reason. Cooling at that outdoor temperature is a server room or a similar internal-gain situation, not a comfort case, and it tells you the range has been specified for applications beyond a living room.",
      ],
    },
  ],
  faqs: [
    {
      question: "Should I switch off the outdoor unit in summer to save power?",
      answer:
        "Removing the supply also removes the crankcase heater, which is fitted to protect the compressor from refrigerant migration while it is off. Leave that decision to the installer who commissioned the system rather than treating the isolator as a standby switch.",
    },
    {
      question: "Why is the outdoor unit warm when nothing is running?",
      answer:
        "A crankcase heater at the compressor and a base pan heater in the bottom of the cabinet both operate independently of a heating or cooling call. Warmth in a unit that has not run is consistent with the low ambient provision Hisense lists for this range.",
    },
    {
      question: "How cold can a Hi-ULTRA heat?",
      answer:
        "Hisense publishes a heating operating range down to minus 13 degrees Fahrenheit, which is minus 25 Celsius. That is the specified range rather than a capacity statement, and output falls as outdoor temperature falls.",
    },
    {
      question: "Do all Hisense outdoor units have these heaters?",
      answer:
        "This is published for the Hi-ULTRA ductless range. Hisense sells several North American families, and whether a particular outdoor unit carries a base pan heater, a crankcase heater, or both belongs to the documentation for that model.",
    },
  ],
  sourceIds: ["hisense-hi-ultra-product", "hisense-documents-search"],
  relatedContent: [
    "/brands/hisense/",
    "/brands/hisense/hi-ultra-xtreme-code-16/",
    "/heat-pump-outdoor-unit-iced-over/",
    "/how-heat-pump-defrost-works/",
  ],
  glossaryTerms: ["compressor", "condenser-coil", "defrost-cycle"],
  keywords: [
    "hisense hi ultra base pan heater",
    "hisense crankcase heater outdoor unit",
    "hisense hi ultra operating range",
    "hisense outdoor unit warm not running",
    "hisense r454b ductless low ambient",
  ],
});

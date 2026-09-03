import { publish } from "./publish";

/**
 * The reset button is not the same button on every TCL, and the fallback
 * differs between the two support articles: one names the fan button, the
 * other the timer button. Rather than pick a winner, the page reports both and
 * tells the reader how to establish which applies to the unit in front of them.
 */
export const tclFilterIndicatorReset = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "TCL clean filter light: which button clears it",
  slug: "clean-filter-light-reset",
  path: "/brands/tcl/clean-filter-light-reset/",
  description:
    "The TCL filter indicator is cleared by a press and hold, but the button depends on the model. What TCL publishes, and why the light returns if you skip the step.",
  articleType: "maintenance",
  brand: "tcl",
  equipmentType: "ductless-mini-split",
  productFamily: "TCL window and portable room air conditioners covered by the manufacturer support articles",
  models: [
    "TCL window air conditioners with a filter indicator",
    "TCL portable air conditioners with a filter indicator",
  ],
  problemType: "filter-indicator-reset",
  symptomFamily: "maintenance",
  directAnswer:
    "The light is a timer rather than a measurement, and it clears with a press and hold. TCL names the Filter or Clean Filter button, and a different button on models without one, so the model decides which press applies.",
  scopeNotice:
    "This covers TCL window and portable room air conditioners with a filter indicator, as described in the manufacturer support articles. TCL publishes different hold times in different articles and a different fallback button, so treat the manual for your own model as the authority and use this page to know what to look for.",
  layout: ["steps", "comparisonTable", "sections", "serviceHandoff"],
  symptoms: [
    "A clean filter indicator has come on and stays on after the filter has been washed.",
    "The unit has no button labelled Filter and the light will not go out.",
    "The light came on again a short time after the last reset.",
  ],
  causes: [
    "The indicator runs on accumulated operating time rather than on any measurement of how dirty the filter is.",
    "TCL assigns the reset to different buttons depending on whether the model has a dedicated filter button.",
  ],
  steps: [
    {
      name: "Stop the unit and unplug it",
      text: "Disconnect the power before the filter comes out, which is what TCL asks for. Nothing should be running while the filter is out of the airway, and a portable unit in particular can be started by a timer nobody remembers setting.",
    },
    {
      name: "Find and remove the filter",
      text: "TCL notes the filter may slide out from the front, side, top, or back, depending on whether the unit is a window or a portable model. Check all four before concluding it cannot be reached.",
    },
    {
      name: "Clean it by the least aggressive method that works",
      text: "For a small amount of loose dust, TCL describes a vacuum cleaner with a soft brush attachment. Harsh chemicals, bleach, abrasive cleaners, and hot water are excluded unless the manual for your own model permits them.",
    },
    {
      name: "Dry it completely before it goes back",
      text: "Place the filter in a clean, shaded area and let it air dry. TCL is explicit that the filter should not be reinstalled while it is wet or damp, which rules out a quick shake and a refit.",
    },
    {
      name: "Hold the reset button",
      text: "With the filter back in, press and hold the Filter or Clean Filter button. TCL publishes hold times of about three to five seconds in one article and five to ten in another, so hold until the indicator responds rather than counting to a fixed number.",
    },
    {
      name: "Use the fallback button if there is no filter button",
      text: "TCL names the Fan or Fan Speed button in one article and the Timer button in another for models without a dedicated filter button. Try the one your own manual names first, and the other only if the manual is not available.",
    },
  ],
  comparisonTable: {
    caption: "What TCL publishes for the reset, by article",
    columns: ["Detail", "Clean filter light article", "Filter LED reset article"],
    rows: [
      [
        "Primary button",
        "Filter or Clean Filter",
        "Filter",
      ],
      [
        "Hold time",
        "Approximately five to ten seconds",
        "Three to five seconds",
      ],
      [
        "If there is no filter button",
        "Fan or Fan Speed button, same hold",
        "Timer button, held to turn the indicator off",
      ],
    ],
  },
  sections: [
    {
      title: "The light is counting hours, not looking at the filter",
      paragraphs: [
        "Nothing in a room air conditioner measures how blocked a filter is. The indicator follows run time, independent of the dust collected. Washing the filter without resetting the counter therefore leaves the light exactly where it was.",
        "That distinction works in both directions. A dark indicator does not prove the filter is clean. An illuminated one states only that the unit has run for the interval TCL set, whether the room contains a shedding dog or sits empty.",
        "So the light is a prompt to look, and the looking is what decides whether the filter needed doing. Somebody in a dusty environment should be checking well before the prompt arrives.",
      ],
    },
    {
      title: "Why TCL publishes two different hold times",
      paragraphs: [
        "The manufacturer's own articles give three to five seconds in one place and five to ten in another, and they name different fallback buttons. That is not a contradiction to resolve so much as a sign that the instruction is model dependent, which is what the articles say in their own way when they point the reader back at the model manual.",
        "The practical approach is to hold until something happens rather than to hold for a number. A press that is registered produces a response on the display or the indicator, and if ten seconds produce nothing at all, the button being held is probably not the one for that model.",
      ],
    },
    {
      title: "What a returning light means",
      paragraphs: [
        "An indicator that comes back within days of a reset has either not been reset at all or is being driven by unusually heavy running. The first is more easily checked: reset it again, note the date, and see whether the interval to the next appearance looks like an interval or like an immediate return.",
        "An immediate return points at a reset that did not register, which sends you back to the button question. A short but plausible interval points at the unit running long hours, which is a sizing or a load question rather than a filter one.",
      ],
    },
  ],
  safeChecks: [
    "Disconnect the power before removing the filter, as the manufacturer instructs.",
    "Check the front, side, top, and back for the filter access before concluding the filter cannot be reached.",
    "Confirm the filter is completely dry before refitting it, since TCL excludes reinstalling a wet or damp filter.",
  ],
  professionalEscalation: [
    "A filter indicator that cannot be cleared by any documented button press is a control question rather than a cleaning one.",
    "Anything behind the cabinet or the control panel, including the board that drives the indicator, is service work rather than owner maintenance.",
  ],
  serviceHandoff:
    "If the indicator will not clear, tell the service contact the full model number, which buttons the unit actually has, which one you held and for how long, and whether the display responded at all. That separates a wrong button from an indicator that is not resetting.",
  faqs: [
    {
      question: "Does the clean filter light mean my filter is dirty?",
      answer:
        "It means the unit has run for the interval the indicator counts. Nothing measures the filter itself, so the light is a prompt to inspect rather than a statement about the filter's condition.",
    },
    {
      question: "My TCL has no filter button. What do I hold?",
      answer:
        "TCL names the Fan or Fan Speed button in one support article and the Timer button in another for models without a dedicated filter button. Use whichever your own model manual names, and hold until the indicator responds.",
    },
    {
      question: "Can I wash the filter in hot water?",
      answer:
        "TCL excludes harsh chemicals, bleach, abrasive cleaners, and hot water unless the manual for your specific model permits them. For light dust it describes a vacuum cleaner with a soft brush attachment instead.",
    },
    {
      question: "Why did the light come back straight away?",
      answer:
        "An immediate return points at a reset that did not register, which narrows it to the wrong button or too short a hold. Reset it again and note the date, so a genuine interval can be told apart from a reset that never took effect.",
    },
  ],
  sourceIds: ["tcl-clean-filter-light", "tcl-filter-led-reset", "tcl-air-conditioner-downloads"],
  relatedContent: [
    "/brands/tcl/",
    "/brands/tcl/air-conditioner-running-not-cooling/",
    "/mini-split-filter-cleaning/",
    "/mini-split-not-cooling/",
  ],
  glossaryTerms: ["air-filter", "static-pressure", "return-air"],
  keywords: [
    "tcl clean filter light reset",
    "tcl air conditioner filter led",
    "tcl filter light stays on",
    "tcl portable air conditioner filter",
    "reset tcl filter indicator",
  ],
});

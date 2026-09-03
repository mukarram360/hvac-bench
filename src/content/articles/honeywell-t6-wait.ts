import { publish } from "./publish";
export const honeywellT6Wait = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Honeywell Home T6 Pro says Wait: when five minutes is normal",
  slug: "t6-pro-wait-message",
  path: "/brands/honeywell-home/t6-pro-wait-message/",
  description:
    "Understand the T6 Pro Wait message as compressor protection, time the five-minute delay correctly, and know when persistent waiting needs service.",
  articleType: "troubleshooting",
  brand: "honeywell-home",
  equipmentType: "controls-thermostats",
  productFamily: "T6 Pro programmable thermostat",
  models: ["TH6210U2001", "TH6220U2000", "TH6320U2008"],
  problemType: "compressor-delay",
  directAnswer:
    "On a Honeywell Home T6 Pro, Wait means compressor protection is delaying restart after a shutdown or power interruption. The standard user guide describes a five-minute delay. If Wait clears and cooling or heat-pump operation starts, the protection completed normally; a message that persists or immediately returns needs system context.",
  scopeNotice:
    "The five-minute statement applies to the cited T6 Pro user guide. Installer configuration can set compressor-protection time from one to five minutes, and T6 Pro Smart, T9, T10, evohome, and older Honeywell controls differ.",
  symptoms: ["The T6 Pro displays Wait and temporarily withholds a cooling or heat-pump compressor call."],
  causes: [
    "Normal anti-short-cycle logic prevents a compressor from restarting too soon after stopping.",
    "Persistent waiting can follow repeated power loss, an unresolved equipment response, thermostat wiring or control conditions, or a new delay restarted by user changes.",
  ],
  diagnosticBranches: [
    {
      title: "Wait clears within the configured delay",
      observation:
        "The message followed a mode, setpoint, or power change and disappears within five minutes or the shorter installer setting before equipment starts.",
      action:
        "Treat the completed delay as normal compressor protection and avoid further adjustments that restart the timing.",
    },
    {
      title: "Wait continues or returns repeatedly",
      observation:
        "More than the applicable delay passes, the thermostat restarts, or each attempted call returns to Wait without normal compressor operation.",
      action:
        "Record the screen and equipment sequence, stop changing settings, and arrange HVAC diagnosis of power, control, safeties, and equipment response.",
    },
  ],
  decisionTable: {
    caption: "T6 Pro Wait timing test",
    columns: ["Timeline", "Interpretation", "Response"],
    rows: [
      ["Starts after compressor stops", "Anti-short-cycle timing begins", "Leave controls unchanged"],
      ["Clears within one to five minutes", "Configured protection completed", "Confirm equipment starts"],
      ["Screen reboots and Wait restarts", "Thermostat power may be interrupted", "Save sequence for service"],
      ["Wait clears but outdoor unit stays off", "Delay is over; another condition remains", "Equipment diagnosis"],
    ],
  },
  figures: [
    {
      title: "Why touching the setpoint can extend confusion",
      description:
        "A new cooling request does not cancel the compressor timer; repeated changes obscure when the protected off-time actually began.",
      nodes: [
        {
          label: "Compressor stops",
          detail: "Pressure equalisation and motor protection period begins",
        },
        {
          label: "New demand",
          detail: "Thermostat displays Wait instead of immediate restart",
        },
        {
          label: "Protected interval",
          detail: "Configured one-to-five-minute delay runs",
        },
        {
          label: "Call released",
          detail: "Thermostat can request compressor operation after timing ends",
        },
      ],
    },
  ],
  sections: [
    {
      title: "Wait protects the compressor, not the thermostat",
      paragraphs: [
        "A compressor works against refrigerant pressure. Restarting immediately after it stops can impose an unfavourable load, so the T6 Pro holds the output for a configured interval. The user guide describes five minutes, while installation settings allow one through five. During that interval the thermostat can display Wait even though the room temperature calls for cooling. The message is evidence that the thermostat is deliberately withholding the compressor signal, not that its screen is frozen.",
        "Start one timer and leave mode, setpoint, and power alone. If the display clears and the outdoor equipment starts, the sequence has answered the question. Repeatedly lowering the setpoint cannot speed the protective interval and makes the event harder to time. Fan operation during Wait also does not mean the compressor should already be on; those outputs are controlled separately.",
      ],
    },
    {
      title: "Persistent Wait is a sequence to capture",
      paragraphs: [
        "When the applicable interval passes, note whether Wait clears, the thermostat reboots, the indoor fan runs, and the outdoor unit responds. A blank screen or startup logo before another Wait suggests the timer is being restarted by loss and return of control power. If Wait clears but the compressor remains off, the thermostat delay ended and another equipment, safety, or communication condition is responsible.",
        "Do not jumper thermostat terminals, bypass a condensate or pressure safety, open outdoor equipment, or cycle breakers repeatedly. Photograph the T6 model, message, start time, room and set temperatures, mode, and each equipment response. Electrical odour, water near controls, hot wiring, or repeated protective-device trips requires shutdown and prompt qualified service.",
      ],
    },
  ],
  safeChecks: [
    "Start one timer, leave settings unchanged for the configured one-to-five-minute interval, and record what the screen, indoor fan, and outdoor unit do next.",
  ],
  professionalEscalation: [
    "Repeated thermostat power loss, low-voltage wiring, condensate safeties, contactors, compressor controls, and equipment diagnosis require qualified HVAC service.",
  ],
  serviceHandoff:
    "Provide T6 model, Wait start and clear times, installer delay if known, set and room temperatures, mode, reboot sequence, indoor fan and outdoor response, and recent outages.",
  resetGuidance:
    "Do not reset a normal Wait state; resetting restarts control logic and can hide whether the published compressor-protection interval completed.",
  faqs: [
    {
      question: "How long does Honeywell T6 Wait last?",
      answer:
        "The cited T6 Pro user guide describes five minutes, while installer configuration can select one through five minutes for compressor protection.",
    },
    {
      question: "Does Wait mean my T6 thermostat is broken?",
      answer:
        "No. A Wait that clears on time is deliberate compressor protection. Persistence, repeated reboot, or no equipment response afterward needs separate diagnosis.",
    },
    {
      question: "Will lowering the setpoint cancel Wait?",
      answer:
        "No. A larger temperature demand does not remove anti-short-cycle protection. Leave the controls stable so the interval can be timed accurately.",
    },
  ],
  sourceIds: ["honeywell-t6-manual", "honeywell-compressor-protection"],
  glossaryTerms: ["thermostat", "short-cycling"],
  relatedContent: [
    "/brands/honeywell-home/",
    "/mini-split-not-turning-on/",
    "/how-to-document-hvac-fault-for-service/",
  ],
  keywords: [
    "honeywell t6 wait",
    "t6 pro wait message",
    "honeywell thermostat waiting for equipment",
    "t6 compressor protection",
  ],
});

import { publish } from "./publish";

export const draytonWiserRadiatorBoost = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Drayton Wiser radiator boost: the twist top changes the room by 2 C",
  slug: "wiser-radiator-boost",
  path: "/brands/drayton/wiser-radiator-boost/",
  description:
    "The Wiser radiator thermostat twist top applies a two-degree local boost. It changes one room temporarily and does not rewrite that room's schedule.",
  articleType: "guide",
  brand: "drayton",
  equipmentType: "controls-thermostats",
  productFamily: "Drayton Wiser radiator thermostats connected through a Wiser Hub",
  models: ["Wiser Radiator Thermostat", "Wiser Hub and HubR systems using room-by-room control"],
  problemType: "local-room-boost",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "Twisting the Wiser radiator thermostat top applies a local two-degree boost in the warmer or cooler direction. It is a temporary room-level override; the schedule remains the baseline that resumes after the boost period or cancellation.",
  scopeNotice:
    "The two-degree twist-top behavior is published for the Wiser radiator thermostat in Drayton's current data sheet. App options and boost duration can vary with software and hub generation.",
  symptoms: ["One room target changes after the valve head is twisted while the rest of the Wiser schedule remains unchanged."],
  causes: [
    "The radiator thermostat provides a physical local override for a room without requiring the app.",
    "Room-by-room control means a boost can create heat demand through the Hub even when other rooms are at target.",
  ],
  comparisonTable: {
    caption: "Wiser room-control layers",
    columns: ["Control action", "Scope", "Persistence"],
    rows: [
      ["Twist-top boost", "The radiator thermostat's room", "Temporary override"],
      ["App boost", "Selected room and chosen duration", "Temporary override"],
      ["Schedule edit", "Selected room's future time blocks", "Persists until edited again"],
      ["Open-window detection", "Room where a temperature drop is detected", "Pauses heat under the feature logic"],
    ],
  },
  figures: [{
    title: "A local twist becomes a boiler request through the room",
    description: "The valve head raises its room target, the Hub compares that request with measured temperature, and the heating relay can respond without changing schedules in other rooms.",
    nodes: [
      { label: "Twist top", detail: "Applies the two-degree local change" },
      { label: "Room target", detail: "Temporary setpoint exceeds measured temperature" },
      { label: "Wiser Hub", detail: "Combines room demands" },
      { label: "Heating output", detail: "Calls the installed boiler path" },
    ],
  }],
  sections: [
    {
      title: "A room boost can legitimately call the boiler",
      paragraphs: [
        "Wiser radiator thermostats connect room demand to the Hub. If one room is boosted above its measured temperature, the Hub can create a heating call even though the main room thermostat and every other room appear satisfied. The flame icon records that demand, not proof that the burner has fired.",
        "Check the boosted room name and target in the app, then compare the Hub heating indication. A room assigned incorrectly can make the demand look as though it came from another radiator. Cancel the boost rather than lowering the permanent schedule to test that relationship.",
        "Use the opposite twist only when the data sheet and device feedback make its effect clear. The spring-back top is an input, not a position indicator. Confirm the resulting target in the app or room display instead of judging the request from where the top rests.",
      ],
    },
    {
      title: "Local boost and open-window detection can pull in opposite directions",
      paragraphs: [
        "Drayton lists open-window detection as a separate radiator-thermostat feature. A sudden room-temperature drop can pause heating while a person has just asked for a boost, which makes the setpoint change visible without immediate valve heat. Check the room status before assuming the head failed to respond.",
        "The thermostat head is battery powered, but the Hub and boiler path include mains wiring. Battery replacement and a normal twist are owner controls. Valve-body leakage, a stuck pin, Hub wiring, or a relay that switches without boiler response belongs to heating or electrical service.",
      ],
    },
  ],
  faqs: [
    { question: "How much does a Wiser radiator twist boost change temperature?", answer: "Drayton's radiator-thermostat data sheet states that the twist-top design boosts the local setting by two degrees." },
    { question: "Does a Wiser boost replace the room schedule?", answer: "No. It is a temporary override. Editing the scheduled time blocks is a separate app action." },
    { question: "Can one boosted Wiser radiator start the boiler?", answer: "Yes. A room-level demand can pass through the Hub and call for heat even when other rooms do not need it." },
  ],
  sourceIds: ["drayton-wiser-datasheet", "drayton-wiser-demand"],
  relatedContent: ["/brands/drayton/", "/brands/drayton/wiser-flame-icon-boiler-not-firing/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["thermostat", "boiler", "control-board"],
  keywords: ["wiser radiator boost", "drayton wiser twist top", "wiser two degree boost", "wiser room override"],
});

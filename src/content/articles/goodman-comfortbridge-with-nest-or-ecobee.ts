import { publish } from "./publish";

export const goodmanComfortbridgeWithNestOrEcobee = publish({
  lastReviewed: "2026-09-04",
  reviewStatus: "source-verified",
  title: "Goodman ComfortBridge with a Nest or ecobee: how a single-stage thermostat runs two-stage and inverter equipment",
  slug: "comfortbridge-with-nest-or-ecobee",
  path: "/brands/goodman/comfortbridge-with-nest-or-ecobee/",
  description:
    "ComfortBridge takes one cooling input and one heating input and stages the equipment itself. What Goodman requires the thermostat to be configured as.",
  articleType: "guide",
  brand: "goodman",
  equipmentType: "controls-thermostats",
  productFamily:
    "Goodman ComfortBridge air handlers paired with communicating or non-communicating outdoor equipment and a conventional 24 volt thermostat",
  models: [
    "Goodman AVPTC ComfortBridge air handlers",
    "Communicating Goodman outdoor units connected on the 1 and 2 terminals",
    "Third-party 24 volt thermostats configured as single stage",
  ],
  problemType: "thermostat-compatibility",
  symptomFamily: "remote-and-controls",
  directAnswer:
    "The staging never belonged to the thermostat. Goodman states that all cooling calls require only a single Y input and all heating calls require only a single W input, and that internal algorithms control every available cooling and heating stage from those inputs. Any single-stage 24 volt thermostat can be used. The condition attached to that permission matters as much as the permission itself: the thermostat has to be set up as a single-stage air conditioner with single-stage electric heat, even when the outdoor unit is a heat pump.",
  scopeNotice:
    "This describes ComfortBridge air handler control as published in Goodman installation instructions. Goodman equipment without ComfortBridge, and systems using a Goodman communicating thermostat, follow different wiring and configuration rules.",
  symptoms: [
    "A two-stage or inverter system is being controlled by a thermostat that only offers single-stage settings.",
    "Heating or cooling performance is wrong after a thermostat change, with no fault code shown.",
    "The air handler display shows a configuration message and the blower does not run on a cooling call.",
  ],
  causes: [
    "The thermostat has been configured as a heat pump or as multistage equipment, which Goodman warns may result in incorrect performance.",
    "A reversing valve wire has been landed at the air handler, which the ComfortBridge control board does not accommodate.",
    "Airflow has not been set for a non-communicating outdoor unit, which Goodman describes as producing a specific display message and a blower that will not run in cooling.",
  ],
  decisionTable: {
    caption: "What the thermostat supplies and what the control decides",
    columns: ["Function", "Where it is decided"],
    rows: [
      ["A demand for cooling", "The thermostat, as a single Y input"],
      ["A demand for heating", "The thermostat, as a single W input"],
      ["Which cooling stage or compressor speed runs", "Internal algorithms on the ComfortBridge control"],
      ["Which heating stage runs, including backup heat kits", "Internal algorithms on the ComfortBridge control"],
      ["Reversing valve position on a communicating heat pump", "The equipment, not a thermostat O wire"],
    ],
  },
  figures: [
    {
      title: "Where the wires go on a ComfortBridge system",
      description:
        "Two connections carry the whole arrangement: a conventional thermostat harness on one side and a two-wire link to the outdoor unit on the other. The reversing valve input is deliberately absent from the thermostat side.",
      nodes: [
        { label: "Thermostat", detail: "Supplies one Y and one W demand" },
        { label: "ComfortBridge control", detail: "Runs the staging algorithms" },
        { label: "Terminals 1 and 2", detail: "Carry communicating operation outdoors" },
        { label: "No O input", detail: "The board does not accept it" },
      ],
    },
  ],
  sections: [
    {
      title: "The rule Goodman prints in capitals, and what it costs to ignore",
      paragraphs: [
        "The instruction is unambiguous. For all cooling calls the system requires only a single Y input, and for all heating calls, including applications with backup electric heater kits, it requires only a single W input. Internal algorithms control all available cooling and heating stages from those two inputs, and any single-stage 24 volt thermostat can be used.",
        "The qualifier follows in the same paragraph. For proper operation the thermostat must be set up to control a single-stage air conditioning outdoor unit and single-stage electric heat. The control board does not accommodate an O wire thermostat input for a reversing valve signal. If a heat pump is installed, the thermostat should still be set up as described, and Goodman warns that setting the thermostat for heat pump control or multistage control may result in incorrect performance.",
        "That is the trap in a Nest or ecobee installation, because both will happily be configured as heat pumps if the installer answers the setup questions from the outdoor nameplate. The nameplate is not the question being asked. The question is what the air handler expects to receive.",
      ],
    },
    {
      title: "Why this looks like a downgrade and is not one",
      paragraphs: [
        "A conventional thermostat with one heating and one cooling terminal looks like a single-stage control, and on conventional equipment it would be. On this system the staging decision has been moved rather than removed. The thermostat says a demand exists; the control decides what to run to satisfy it, including which backup heat kit stages to bring in.",
        "Goodman describes the same principle for electric heat sizing, noting that two-stage electric heat kit control needs only a single W input because the internal algorithms handle staging from it. The number of terminals in use stops being a measure of how many stages the system has.",
        "One practical consequence lands on anyone reading thermostat runtime data. A thermostat that believes it is running a single-stage system reports a single-stage picture, so the runtime graphs will not show the staging the equipment actually performed.",
      ],
    },
    {
      title: "Configuration steps that are easy to miss",
      paragraphs: [
        "For a communicating outdoor unit, the two wires on terminals 1 and 2 between the indoor and outdoor unit are what make communicating operation possible. Goodman adds a caution for two-stage outdoor units, noting that they should include a 24 volt transformer for outdoor control board power and may not behave properly without it.",
        "For a non-communicating outdoor unit the airflow has to be set in the ton menu on the control board or through the manufacturer phone application. Goodman is explicit about the symptom of skipping it: the air handler board displays a configuration message and the blower will not operate on a call for cooling. The instructions state directly that the board does not need to be replaced and that the airflow must be set first, which is a warning aimed at a diagnosis people were reaching.",
        "A non-communicating heat pump is the one case where a reversing valve connection appears, and it is wired directly to the terminal on that heat pump rather than to the air handler. That distinction is the difference between a working changeover and a system that heats when it should cool.",
      ],
    },
    {
      title: "Choosing between a smart thermostat and the equipment control",
      paragraphs: [
        "What a third-party thermostat brings here is scheduling, remote access, sensors and reporting. What it does not bring is staging control, because that decision has already been made by the equipment. Anyone choosing on the basis of stage control is choosing on a feature that is not in play.",
        "What is worth checking before buying is the wiring the thermostat needs to run itself. A control that requires a common connection needs one available at the air handler, and the ComfortBridge harness is a conventional 24 volt one, so that question is answered the same way as on any other system.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can any thermostat run a ComfortBridge system?",
      answer:
        "Goodman states that any single-stage 24 volt thermostat can be used, provided it is set up to control a single-stage air conditioning outdoor unit and single-stage electric heat.",
    },
    {
      question: "Should I configure the thermostat as a heat pump?",
      answer:
        "No. Goodman warns that setting the thermostat for heat pump control or multistage control may result in incorrect performance, and the control board does not accommodate an O wire input for a reversing valve.",
    },
    {
      question: "Does a single Y wire lose the second cooling stage?",
      answer:
        "No. Internal algorithms control all available cooling stages from that single input, so the staging happens at the equipment rather than at the thermostat.",
    },
    {
      question: "Why will the blower not run on a cooling call?",
      answer:
        "With a non-communicating outdoor unit, airflow has to be set in the ton menu on the board or through the phone application. Goodman states the board displays a configuration message and the blower will not operate until that is done.",
    },
    {
      question: "Where does the reversing valve wire go?",
      answer:
        "On a non-communicating heat pump it lands directly on the terminal at that heat pump. It does not connect to the ComfortBridge air handler control.",
    },
  ],
  sourceIds: ["goodman-comfortbridge-install", "goodman-avpvc-install"],
  relatedContent: [
    "/brands/goodman/",
    "/brands/goodman/comfortnet-eb0-eb1-eb3-in-cooling/",
    "/brands/goodman/gmvc-heat-pump-lockout-temperature/",
    "/brands/ecobee/compressor-minimum-outdoor-temperature/",
  ],
  glossaryTerms: ["thermostat", "c-wire", "reversing-valve", "auxiliary-heat"],
  keywords: [
    "goodman comfortbridge nest",
    "comfortbridge ecobee setup",
    "goodman single stage thermostat two stage",
    "comfortbridge o wire",
    "goodman avptc thermostat wiring",
  ],
});

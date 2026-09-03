import { publish } from "./publish";

export const worcesterGreenstarSiSystemPressure = publish({
  lastReviewed: "2026-09-03",
  reviewStatus: "source-verified",
  title: "Worcester Greenstar Si pressure: stop the keyless fill between 1 and 1.5 bar",
  slug: "greenstar-si-system-pressure",
  path: "/brands/worcester-bosch/greenstar-si-system-pressure/",
  description:
    "Greenstar Si Compact instructions set a one to 1.5 bar refill target for the optional keyless filling link. The valve must close when the target is reached.",
  articleType: "guide",
  brand: "worcester-bosch",
  equipmentType: "boiler",
  productFamily: "Greenstar 25 and 30 Si Compact ErP boilers with the optional integral keyless filling link",
  models: ["Greenstar 25 Si Compact ErP", "Greenstar 30 Si Compact ErP"],
  problemType: "sealed-system-pressure",
  symptomFamily: "no-heating",
  directAnswer:
    "For the documented Greenstar Si Compact, Worcester says to recharge when the gauge is below 1 bar and release the blue keyless-fill lever when the needle reaches between 1 and 1.5 bar. A pressure that falls again needs its loss investigated rather than another automatic top-up.",
  scopeNotice:
    "This target and lever procedure are from Greenstar 25 and 30 Si Compact ErP operating instructions. Worcester internal filling keys, external loops, and later intelligent filling systems operate differently.",
  symptoms: ["The pressure gauge is below 1 bar when the system is cool, or heating has stopped after pressure loss."],
  causes: [
    "Water loss, recent radiator work, bleeding, or an unclosed filling path can move the sealed-system gauge outside its intended range.",
    "Pressure naturally changes as system water heats, so a cold reading and a hot reading answer different questions.",
  ],
  decisionTable: {
    caption: "Greenstar Si gauge decisions",
    columns: ["Gauge observation", "Published response", "Stop condition"],
    rows: [
      ["Below 1 bar", "Use the exact fitted filling-device instructions", "Do not fill if the device is unknown or leaking"],
      ["Between 1 and 1.5 bar after filling", "Release the blue lever", "Confirm the fill has stopped"],
      ["Above 1.5 bar because of overfill", "Manual gives radiator bleeding as the reduction route", "Get help if unfamiliar or pressure continues rising"],
      ["Pressure drops again", "Record the rate and visible water", "Arrange an engineer rather than repeating fills"],
    ],
  },
  figures: [{
    title: "The blue lever must close the filling path",
    description: "Mains water enters while the documented keyless lever is pulled. The gauge provides the stopping signal, and releasing the lever must end filling inside the published band.",
    nodes: [
      { label: "Blue lever pulled", detail: "Filling water enters the sealed circuit" },
      { label: "Gauge rises", detail: "Needle approaches one to 1.5 bar" },
      { label: "Lever released", detail: "The fill path closes" },
    ],
  }],
  sections: [
    {
      title: "Identify the filling hardware before touching a valve",
      paragraphs: [
        "The cited Si Compact manual illustrates an optional integral keyless link with a blue lever. If the underside of the boiler does not match that illustration, stop and use the instructions for the hardware actually fitted. A removable key or braided external loop is not operated by the keyless sequence.",
        "Read the gauge with the heating cool enough to make comparison meaningful. Pulling the blue lever admits water; watching the needle is part of the operation, not a later check. Release the lever inside the one to 1.5 bar band and verify the needle has stopped moving.",
        "Stay with the gauge throughout the fill. If the lever does not move normally, the needle rises abruptly, or water appears, release it and stop. A reluctant control is not made safer by extra force, and a continuing rise needs the filling path checked.",
      ],
    },
    {
      title: "A repeat pressure loss is evidence, not a maintenance schedule",
      paragraphs: [
        "A sealed heating system should not need an unexplained cycle of filling and discharge. Note how many days the pressure takes to fall, whether it rises sharply during heating, and whether water appears at radiators, pipework, beneath the boiler, or at the outside discharge pipe. Do not remove the boiler case to search for the source.",
        "EA 227 is an ignition fault on the related Greenstar Si guide, not a low-pressure code. A boiler can have both records, but restoring gauge pressure does not diagnose an ignition failure. Preserve the display exactly and let a Gas Safe engineer separate water-side evidence from gas and combustion work.",
      ],
    },
  ],
  faqs: [
    { question: "What pressure should a Greenstar Si Compact show after filling?", answer: "The cited operating instructions say to release the keyless filling lever when the gauge reaches between 1 and 1.5 bar." },
    { question: "Can I use this procedure with a Worcester filling key?", answer: "No. It is for the illustrated optional keyless link. A removable internal key or another filling loop has its own procedure." },
    { question: "Why should I stop repeatedly topping up the boiler?", answer: "Pressure that falls again indicates water has left the sealed circuit or the pressure-control path is not behaving. The rate and location need investigation." },
  ],
  sourceIds: ["worcester-si-operating", "worcester-greenstar-manuals"],
  relatedContent: ["/brands/worcester-bosch/", "/brands/worcester-bosch/greenstar-si-ea-227-fault/", "/how-to-document-hvac-fault-for-service/"],
  glossaryTerms: ["boiler", "flow-temperature", "error-code"],
  keywords: ["worcester greenstar si pressure", "greenstar keyless filling link", "worcester boiler 1.5 bar", "greenstar si low pressure"],
});

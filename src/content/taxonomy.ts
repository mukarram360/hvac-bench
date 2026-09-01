/**
 * Shared taxonomy for HVAC Bench.
 *
 * Every route group, filter, and schema field draws its vocabulary from here so
 * the site stays consistent as the library grows from ten pages to thousands.
 */

export const REGIONS = {
  us: { code: "us", label: "United States", short: "US" },
  uk: { code: "uk", label: "United Kingdom", short: "UK" },
  eu: { code: "eu", label: "Europe", short: "EU" },
} as const;

export type RegionCode = keyof typeof REGIONS;

export const EQUIPMENT_TYPES = {
  "ductless-mini-split": {
    slug: "ductless-mini-split",
    label: "Ductless mini-splits",
    singular: "Ductless mini-split",
    summary:
      "Wall-mounted, floor, and cassette indoor units paired with an outdoor condenser, with no duct network between them.",
  },
  "heat-pump": {
    slug: "heat-pump",
    label: "Heat pumps",
    singular: "Heat pump",
    summary:
      "Air-source and hybrid systems that move heat in both directions, covering cooling in summer and heating in winter.",
  },
  "multi-zone": {
    slug: "multi-zone",
    label: "Multi-zone systems",
    singular: "Multi-zone system",
    summary:
      "One outdoor unit serving several indoor heads, where a fault in one zone can present across the whole system.",
  },
  "ducted-split": {
    slug: "ducted-split",
    label: "Ducted and central air",
    singular: "Ducted split system",
    summary:
      "Central split systems with an air handler or furnace coil distributing conditioned air through ductwork.",
  },
  "controls-thermostats": {
    slug: "controls-thermostats",
    label: "Controls and thermostats",
    singular: "Control or thermostat",
    summary:
      "Wall controllers, handheld remotes, smart thermostats, and the wiring that carries their signals.",
  },
  "air-handler": {
    slug: "air-handler",
    label: "Air handlers and coils",
    singular: "Air handler",
    summary:
      "Indoor blower assemblies, evaporator coils, drain pans, and the condensate path that leaves the building.",
  },
  furnace: {
    slug: "furnace",
    label: "Furnaces",
    singular: "Furnace",
    summary:
      "Gas and electric heating appliances that supply warm air to a duct system.",
  },
  boiler: {
    slug: "boiler",
    label: "Boilers and hydronics",
    singular: "Boiler",
    summary:
      "Wet heating systems that circulate hot water through radiators, cylinders, or underfloor loops.",
  },
  "indoor-air-quality": {
    slug: "indoor-air-quality",
    label: "Indoor air quality",
    singular: "Indoor air quality equipment",
    summary:
      "Filtration, ventilation, humidifiers, and dehumidifiers that condition air rather than temperature alone.",
  },
  "light-commercial": {
    slug: "light-commercial",
    label: "Light commercial",
    singular: "Light commercial system",
    summary:
      "Rooftop units, VRF and VRV systems, and cassette installations serving offices, retail, and small industrial spaces.",
  },
} as const;

export type EquipmentTypeSlug = keyof typeof EQUIPMENT_TYPES;

export const equipmentTypeList = Object.values(EQUIPMENT_TYPES);

/** Symptom families. These drive the troubleshooting hub and article routing. */
export const PROBLEM_TYPES = {
  "no-cooling": {
    slug: "no-cooling",
    label: "Not cooling",
    summary: "The system runs but room temperature does not fall, or it blows air that is not cold.",
  },
  "no-heating": {
    slug: "no-heating",
    label: "Not heating",
    summary: "Heating mode is selected but the system delivers cool air, short cycles, or sits in defrost.",
  },
  "water-leak": {
    slug: "water-leak",
    label: "Water leaking",
    summary: "Condensate escapes the drain pan or line and appears on the wall, ceiling, or floor.",
  },
  "will-not-start": {
    slug: "will-not-start",
    label: "Will not start",
    summary: "No response to the remote or controller, or the unit powers up and stops immediately.",
  },
  "communication-fault": {
    slug: "communication-fault",
    label: "Communication fault",
    summary: "Indoor and outdoor sections cannot exchange signals, usually shown as a specific fault code.",
  },
  "sensor-fault": {
    slug: "sensor-fault",
    label: "Sensor fault",
    summary: "A temperature or pressure sensor reads out of range, is open, or is shorted.",
  },
  "protection-shutdown": {
    slug: "protection-shutdown",
    label: "Protection shutdown",
    summary: "The control board has stopped the system on a protective limit such as pressure, current, or module temperature.",
  },
  "ice-and-frost": {
    slug: "ice-and-frost",
    label: "Ice and frost",
    summary: "Ice forms on the indoor coil, the outdoor coil, or the refrigerant lines.",
  },
  "noise-and-vibration": {
    slug: "noise-and-vibration",
    label: "Noise and vibration",
    summary: "Rattles, hums, gurgles, or clicks that changed from the system's normal operating sound.",
  },
  "odour-and-air-quality": {
    slug: "odour-and-air-quality",
    label: "Odour and air quality",
    summary: "Musty, sour, or burning smells and airborne dust traced to the HVAC system.",
  },
  "remote-and-controls": {
    slug: "remote-and-controls",
    label: "Remote and controls",
    summary: "Remotes, wall controllers, and apps that do not respond, pair, or hold a setting.",
  },
  "running-cost": {
    slug: "running-cost",
    label: "Running cost and efficiency",
    summary: "Higher energy use, constant running, or performance that dropped compared with previous seasons.",
  },
  maintenance: {
    slug: "maintenance",
    label: "Maintenance",
    summary: "Filter cleaning, coil care, seasonal checks, and the service intervals manufacturers publish.",
  },
} as const;

export type ProblemTypeSlug = keyof typeof PROBLEM_TYPES;

export const problemTypeList = Object.values(PROBLEM_TYPES);

/** Content formats. Each maps to a page template and a schema.org type. */
export const CONTENT_TYPES = {
  "error-code": { slug: "error-code", label: "Error code reference", hub: "/error-codes/" },
  troubleshooting: { slug: "troubleshooting", label: "Troubleshooting guide", hub: "/troubleshooting/" },
  "how-to": { slug: "how-to", label: "How-to", hub: "/how-to/" },
  guide: { slug: "guide", label: "Guide", hub: "/guides/" },
  comparison: { slug: "comparison", label: "Comparison", hub: "/compare/" },
  maintenance: { slug: "maintenance", label: "Maintenance", hub: "/guides/" },
} as const;

export type ContentTypeSlug = keyof typeof CONTENT_TYPES;

export function labelFromSlug(value: string) {
  return value.replaceAll("-", " ").replace(/^\w/, (character) => character.toUpperCase());
}

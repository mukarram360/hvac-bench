import type { Brand } from "./schema";

export const brands = [
  {
    name: "Gree",
    slug: "gree",
    description: "Source-scoped diagnostics for Gree ductless systems, heat pumps, controls, and documented fault codes.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
  },
  {
    name: "Daikin",
    slug: "daikin",
    description: "Manual-led Daikin references for ductless, multi-split, SkyAir, and heat-pump operating faults.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
  },
  {
    name: "Mitsubishi",
    slug: "mitsubishi",
    description: "A growing index for Mitsubishi Electric ductless and heat-pump documentation, controls, and symptoms.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
  },
  {
    name: "Midea",
    slug: "midea",
    description: "Product-family-specific Midea error-code and operating guidance grounded in manufacturer documentation.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
  },
  {
    name: "MRCOOL",
    slug: "mrcool",
    description: "Generation-aware MRCOOL mini-split code references with clear homeowner and technician boundaries.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
  },
  {
    name: "Fujitsu",
    slug: "fujitsu",
    description: "Operating and troubleshooting references for Fujitsu General AIRSTAGE and legacy ductless systems.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
  },
  {
    name: "Pioneer",
    slug: "pioneer",
    description: "Series-qualified Pioneer error-code guidance that avoids treating one code as universal across products.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "ducted-split"],
  },
  {
    name: "Senville",
    slug: "senville",
    description: "Official-support-based Senville LETO and AURA fault references, maintenance, and operating checks.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
  },
  {
    name: "LG",
    slug: "lg",
    description: "LG ductless system diagnostics linked to official service literature and precise code context.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
  },
  {
    name: "Samsung",
    slug: "samsung",
    description: "An evidence-first directory for Samsung residential and light-commercial HVAC documentation and codes.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
  },
] satisfies Brand[];


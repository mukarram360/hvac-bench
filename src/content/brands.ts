import type { Brand } from "./schema";

/**
 * Manufacturer registry for the United States, United Kingdom, and Europe.
 *
 * A brand appears here when readers in those markets routinely meet it on a
 * nameplate. Hub pages are generated for every record; a hub only enters the
 * sitemap and the index once it carries at least one source-verified guide,
 * which keeps the crawl budget on pages that answer something.
 */
export const brands = [
  /* --------------------------------------------- ductless and heat pumps -- */
  {
    name: "Gree",
    slug: "gree",
    description:
      "Source-scoped diagnostics for Gree ductless systems, heat pumps, controls, and documented fault codes.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone"],
    regions: ["us", "eu"],
    series: ["Vireo", "Livo", "Sapphire", "Terra", "Crown", "Multi21+"],
    aliases: ["Gree Electric", "Gree Comfort"],
    faultDisplay:
      "Gree systems show letter-and-number codes such as E6 or H5 on the indoor display, with the same code carrying different meanings across product families.",
    group: "ductless-specialist",
  },
  {
    name: "Daikin",
    slug: "daikin",
    description:
      "Manual-led Daikin references for ductless, multi-split, SkyAir, and heat-pump operating faults.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial", "ducted-split"],
    regions: ["us", "uk", "eu"],
    series: ["Aurora", "Emura", "Perfera", "Stylish", "Quaternity", "SkyAir", "Altherma", "VRV"],
    aliases: ["Daikin Industries", "Daikin Applied", "Daikin Comfort"],
    faultDisplay:
      "Daikin reports faults as a letter-plus-digit code, either on the wired controller or by counting indicator flashes on the indoor unit.",
    group: "global-manufacturer",
  },
  {
    name: "Mitsubishi Electric",
    slug: "mitsubishi",
    description:
      "A growing index for Mitsubishi Electric ductless and heat-pump documentation, controls, and symptoms.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone", "light-commercial"],
    regions: ["us", "uk", "eu"],
    series: ["M-Series", "P-Series", "Hyper-Heat H2i", "MSZ", "Ecodan", "City Multi"],
    aliases: ["Mitsubishi", "METUS", "Mitsubishi Electric Trane HVAC US"],
    faultDisplay:
      "Mitsubishi Electric equipment reports two-character codes such as P8 or U2 on the controller, and flashes an operation lamp pattern when no controller is fitted.",
    group: "global-manufacturer",
  },
  {
    name: "Midea",
    slug: "midea",
    description:
      "Product-family-specific Midea error-code and operating guidance grounded in manufacturer documentation.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone"],
    regions: ["us", "uk", "eu"],
    series: ["EVOX", "Aurora", "All Easy", "Xtreme Save", "Breezeless"],
    aliases: ["Midea Group", "Midea America"],
    faultDisplay:
      "Midea indoor units display E- and P-prefixed codes, and several Midea-built systems are sold under other brand names with the same code table.",
    group: "global-manufacturer",
  },
  {
    name: "MRCOOL",
    slug: "mrcool",
    description:
      "Generation-aware MRCOOL mini-split code references with clear homeowner and technician boundaries.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone"],
    regions: ["us"],
    series: ["DIY 4th Gen", "DIY 5th Gen", "Advantage", "Olympus"],
    aliases: ["Mr Cool", "MRCOOL DIY"],
    faultDisplay:
      "MRCOOL codes differ by generation: the same fault can read E1 on one series and EL01 or PC-01 on another, so the generation matters more than the code.",
    group: "ductless-specialist",
  },
  {
    name: "Fujitsu General",
    slug: "fujitsu",
    description:
      "Operating and troubleshooting references for Fujitsu General AIRSTAGE and legacy ductless systems.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone", "light-commercial"],
    regions: ["us", "uk", "eu"],
    series: ["AIRSTAGE", "Halcyon", "RLS3H", "RLS3Y", "Waterstage"],
    aliases: ["Fujitsu", "Fujitsu General Airstage"],
    faultDisplay:
      "Fujitsu systems signal faults by flashing the operation and timer lamps in a counted pattern, which is then read against the model's error table.",
    group: "global-manufacturer",
  },
  {
    name: "Pioneer",
    slug: "pioneer",
    description:
      "Series-qualified Pioneer error-code guidance that avoids treating one code as universal across products.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "ducted-split"],
    regions: ["us"],
    series: ["Diamante", "Diamante Pro", "Quantum", "Hyperformance", "Ultra"],
    aliases: ["Pioneer Mini Split", "Parker Davis HVAC"],
    faultDisplay:
      "Pioneer publishes different code tables for current and discontinued series, so E1 on a Quantum is not the same fault as E1 on a Diamante.",
    group: "ductless-specialist",
  },
  {
    name: "Senville",
    slug: "senville",
    description:
      "Official-support-based Senville LETO and AURA fault references, maintenance, and operating checks.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone"],
    regions: ["us"],
    series: ["LETO", "AURA", "SENA"],
    aliases: ["Senville Mini Split"],
    faultDisplay:
      "Senville displays EH, EC, and PC prefixed codes, where the prefix identifies the protection family before the digits narrow the cause.",
    group: "ductless-specialist",
  },
  {
    name: "LG",
    slug: "lg",
    description:
      "LG ductless system diagnostics linked to official service literature and precise code context.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone", "light-commercial"],
    regions: ["us", "uk", "eu"],
    series: ["Art Cool", "Mega", "Dual Inverter", "Multi V", "Therma V"],
    aliases: ["LG Electronics", "LG HVAC"],
    faultDisplay:
      "LG shows CH-prefixed codes such as CH05 on the indoor display or wired remote, and repeats them in the service data of the outdoor board.",
    group: "global-manufacturer",
  },
  {
    name: "Samsung",
    slug: "samsung",
    description:
      "An evidence-first directory for Samsung residential and light-commercial HVAC documentation and codes.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
    regions: ["us", "uk", "eu"],
    series: ["Wind-Free", "Max", "EHS Mono", "EHS TDM", "DVM S"],
    aliases: ["Samsung Electronics", "Samsung Climate Solutions"],
    faultDisplay:
      "Samsung reports E-prefixed numeric codes, usually four digits on newer systems, shown on the indoor display or wired controller.",
    group: "global-manufacturer",
  },
  {
    name: "Panasonic",
    slug: "panasonic",
    description:
      "Panasonic ductless, Aquarea heat-pump, and ventilation references for United States, United Kingdom, and European systems.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
    regions: ["us", "uk", "eu"],
    series: ["Etherea", "Aquarea", "TZ", "Z Series", "PACi"],
    aliases: ["Panasonic Heating and Cooling", "Panasonic Aquarea"],
    faultDisplay:
      "Panasonic uses a letter-digit-digit format such as H12 or F95, where H indicates a system-side fault and F a protection or sensor condition.",
    group: "global-manufacturer",
  },
  {
    name: "Toshiba",
    slug: "toshiba",
    description:
      "Toshiba residential and light-commercial air conditioning references, including Carrier-partnered product lines.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
    regions: ["uk", "eu", "us"],
    series: ["Seiya", "Shorai Edge", "Daiseikai", "Haori", "Estia"],
    aliases: ["Toshiba Carrier", "Toshiba Air Conditioning"],
    faultDisplay:
      "Toshiba equipment shows alphanumeric codes on the wired controller, and flashes indoor-unit lamps when only a wireless remote is installed.",
    group: "global-manufacturer",
  },
  {
    name: "Hitachi",
    slug: "hitachi",
    description:
      "Hitachi air conditioning and Yutaki heat-pump references for United Kingdom and European installations.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
    regions: ["uk", "eu"],
    series: ["airHome", "Yutaki", "Performance", "Primairy", "Set Free"],
    aliases: ["Hitachi Cooling & Heating", "Johnson Controls-Hitachi"],
    faultDisplay:
      "Hitachi systems present a two-digit alarm code with a unit number, so the code alone does not identify which indoor unit reported it.",
    group: "global-manufacturer",
  },
  {
    name: "Mitsubishi Heavy Industries",
    slug: "mitsubishi-heavy-industries",
    description:
      "Mitsubishi Heavy Industries Thermal Systems references, a separate manufacturer from Mitsubishi Electric with its own code tables.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
    regions: ["uk", "eu", "us"],
    series: ["Avanti", "Bronte", "Diamond", "Hyper Inverter", "KX"],
    aliases: ["MHI", "MHIAE", "Mitsubishi Heavy"],
    faultDisplay:
      "Mitsubishi Heavy Industries uses E-prefixed codes that do not match Mitsubishi Electric codes, which is a frequent source of misdiagnosis.",
    group: "global-manufacturer",
  },
  {
    name: "Haier",
    slug: "haier",
    description:
      "Haier ductless and heat-pump references covering systems sold directly and through partner brands.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone"],
    regions: ["us", "uk", "eu"],
    series: ["Flexis", "Pearl", "Tundra", "Revive"],
    aliases: ["Haier Group", "Haier Europe"],
    faultDisplay:
      "Haier indoor units display F- and E-prefixed codes, with several codes describing a protection state rather than a failed component.",
    group: "global-manufacturer",
  },
  {
    name: "Hisense",
    slug: "hisense",
    description:
      "Hisense residential air conditioning and heat-pump references for North American and European markets.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone"],
    regions: ["us", "eu"],
    series: ["Energy", "Neo", "Apple Pie", "Hi-Comfort"],
    aliases: ["Hisense HVAC", "Hisense Hitachi"],
    faultDisplay:
      "Hisense shows numeric and letter codes on the indoor display, with outdoor faults often reported through the same indoor readout.",
    group: "global-manufacturer",
  },
  {
    name: "TCL",
    slug: "tcl",
    description:
      "TCL air conditioning references for ductless systems sold across North America and Europe.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
    regions: ["us", "eu"],
    series: ["Elite", "Breeva", "FreshIN", "XA71"],
    aliases: ["TCL Air Conditioner"],
    faultDisplay:
      "TCL displays E- and F-prefixed codes on the indoor unit, following the pattern used across several original-equipment platforms.",
    group: "global-manufacturer",
  },
  {
    name: "Cooper & Hunter",
    slug: "cooper-and-hunter",
    description:
      "Cooper & Hunter ductless references for the single-zone and multi-zone systems widely installed in North America.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "multi-zone"],
    regions: ["us"],
    series: ["Sophia", "Olivia", "Astoria", "Karolina", "Victoria"],
    aliases: ["Cooper and Hunter", "C&H"],
    faultDisplay:
      "Cooper & Hunter systems follow the code conventions of their manufacturing platform, so the series name is required before reading a code table.",
    group: "ductless-specialist",
  },
  {
    name: "Della",
    slug: "della",
    description:
      "Della mini-split references covering the value-segment ductless systems sold through North American retail channels.",
    equipmentTypes: ["ductless-mini-split", "heat-pump"],
    regions: ["us"],
    series: ["Della Classic", "Della Pro"],
    aliases: ["Della Home"],
    group: "ductless-specialist",
  },
  {
    name: "Klimaire",
    slug: "klimaire",
    description:
      "Klimaire ductless and ducted references for the North American residential and light-commercial market.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "ducted-split"],
    regions: ["us"],
    series: ["KSIA", "KSIV", "KDIP"],
    aliases: ["Klimaire HVAC"],
    group: "ductless-specialist",
  },
  {
    name: "Blueridge",
    slug: "blueridge",
    description:
      "Blueridge ductless and universal-air-handler references for contractor-installed North American systems.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "air-handler"],
    regions: ["us"],
    series: ["BM Series", "BMKH", "Universal Series"],
    aliases: ["Blueridge Mini Split"],
    group: "ductless-specialist",
  },
  {
    name: "Friedrich",
    slug: "friedrich",
    description:
      "Friedrich ductless, packaged terminal, and room air conditioning references for North American installations.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
    regions: ["us"],
    series: ["Floating Air", "Breeze", "Chill Premier", "VRP"],
    aliases: ["Friedrich Air Conditioning"],
    group: "north-america-full-line",
  },

  /* ------------------------------------------ North American full-line -- */
  {
    name: "Carrier",
    slug: "carrier",
    description:
      "Carrier references spanning ducted central systems, heat pumps, and the ductless lines sold under the Carrier name.",
    equipmentTypes: ["ducted-split", "heat-pump", "ductless-mini-split", "furnace", "light-commercial"],
    regions: ["us", "uk", "eu"],
    series: ["Infinity", "Performance", "Comfort", "38MAQ", "Greenspeed"],
    aliases: ["Carrier Corporation", "Carrier Global"],
    faultDisplay:
      "Carrier systems report faults through control-board LED flash codes or the Infinity controller, depending on the equipment generation.",
    group: "north-america-full-line",
  },
  {
    name: "Trane",
    slug: "trane",
    description:
      "Trane heating and cooling references for ducted systems, heat pumps, and Trane-badged ductless equipment.",
    equipmentTypes: ["ducted-split", "heat-pump", "ductless-mini-split", "furnace"],
    regions: ["us", "uk", "eu"],
    series: ["XV20i", "XR16", "XL18i", "Mitsubishi Electric Trane ductless"],
    aliases: ["Trane Technologies", "Trane Residential"],
    faultDisplay:
      "Trane equipment shows fault information on the communicating thermostat or as diagnostic LED codes on the control board.",
    group: "north-america-full-line",
  },
  {
    name: "American Standard",
    slug: "american-standard",
    description:
      "American Standard heating and air conditioning references for the ducted and heat-pump systems shared with the Trane platform.",
    equipmentTypes: ["ducted-split", "heat-pump", "furnace"],
    regions: ["us"],
    series: ["Platinum", "Gold", "Silver", "AccuComfort"],
    aliases: ["American Standard Heating & Air Conditioning"],
    group: "north-america-full-line",
  },
  {
    name: "Lennox",
    slug: "lennox",
    description:
      "Lennox references covering ducted systems, variable-capacity heat pumps, and the MLA and MPA ductless lines.",
    equipmentTypes: ["ducted-split", "heat-pump", "ductless-mini-split", "furnace"],
    regions: ["us", "eu"],
    series: ["Signature", "Elite", "Merit", "MLA", "MPA"],
    aliases: ["Lennox International", "Lennox Industries"],
    faultDisplay:
      "Lennox systems display alert codes on the iComfort thermostat, and legacy equipment uses control-board LED patterns.",
    group: "north-america-full-line",
  },
  {
    name: "Rheem",
    slug: "rheem",
    description:
      "Rheem references for heat pumps, air conditioners, furnaces, and water heating equipment installed across North America.",
    equipmentTypes: ["ducted-split", "heat-pump", "furnace"],
    regions: ["us"],
    series: ["Prestige", "Classic Plus", "Classic", "Endeavor"],
    aliases: ["Rheem Manufacturing"],
    group: "north-america-full-line",
  },
  {
    name: "Ruud",
    slug: "ruud",
    description:
      "Ruud references for the heating and cooling equipment built on shared platforms with Rheem product lines.",
    equipmentTypes: ["ducted-split", "heat-pump", "furnace"],
    regions: ["us"],
    series: ["Ultra", "Achiever Plus", "Achiever"],
    aliases: ["Ruud Heating & Cooling"],
    group: "north-america-full-line",
  },
  {
    name: "Goodman",
    slug: "goodman",
    description:
      "Goodman references for the ducted air conditioners, heat pumps, and furnaces widely installed in North American homes.",
    equipmentTypes: ["ducted-split", "heat-pump", "furnace"],
    regions: ["us"],
    series: ["GSXC", "GSZC", "GLXS", "GMVC"],
    aliases: ["Goodman Manufacturing", "Goodman Global"],
    group: "north-america-full-line",
  },
  {
    name: "Amana",
    slug: "amana",
    description:
      "Amana heating and cooling references for ducted systems and packaged terminal equipment sold in North America.",
    equipmentTypes: ["ducted-split", "heat-pump", "furnace", "light-commercial"],
    regions: ["us"],
    series: ["AVXC", "ASXC", "AMVC", "PTAC"],
    aliases: ["Amana Brand HVAC"],
    group: "north-america-full-line",
  },
  {
    name: "York",
    slug: "york",
    description:
      "York references for residential and light-commercial heating, cooling, and heat-pump equipment.",
    equipmentTypes: ["ducted-split", "heat-pump", "furnace", "light-commercial"],
    regions: ["us", "eu"],
    series: ["Affinity", "LX", "Latitude", "YMAE"],
    aliases: ["York International", "Johnson Controls York"],
    group: "north-america-full-line",
  },
  {
    name: "Bryant",
    slug: "bryant",
    description:
      "Bryant heating and cooling references for the ducted and heat-pump systems built on shared Carrier platforms.",
    equipmentTypes: ["ducted-split", "heat-pump", "furnace"],
    regions: ["us"],
    series: ["Evolution", "Preferred", "Legacy"],
    aliases: ["Bryant Heating & Cooling"],
    group: "north-america-full-line",
  },
  {
    name: "Bosch",
    slug: "bosch",
    description:
      "Bosch Home Comfort references for inverter ducted systems, ductless equipment, and European heat-pump ranges.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "ducted-split", "boiler"],
    regions: ["us", "uk", "eu"],
    series: ["IDS", "Climate 5000", "Compress", "Inverter Ducted Split"],
    aliases: ["Bosch Thermotechnology", "Bosch Home Comfort"],
    faultDisplay:
      "Bosch equipment reports service codes on the controller or app, using a code plus a cause identifier rather than a single number.",
    group: "global-manufacturer",
  },
  {
    name: "GE Appliances",
    slug: "ge-appliances",
    description:
      "GE Appliances references for ductless systems, packaged terminal units, and room air conditioning equipment.",
    equipmentTypes: ["ductless-mini-split", "heat-pump", "light-commercial"],
    regions: ["us"],
    series: ["Zoneline", "Ultimate Split", "Profile"],
    aliases: ["GE Zoneline", "Haier US Appliance Solutions"],
    group: "north-america-full-line",
  },

  /* ------------------------------------------- United Kingdom and Europe -- */
  {
    name: "Vaillant",
    slug: "vaillant",
    description:
      "Vaillant references for aroTHERM air-source heat pumps, ecoTEC boilers, and the controls that sit between them.",
    equipmentTypes: ["heat-pump", "boiler", "controls-thermostats"],
    regions: ["uk", "eu"],
    series: ["aroTHERM plus", "ecoTEC plus", "flexoTHERM", "sensoCOMFORT"],
    aliases: ["Vaillant Group"],
    faultDisplay:
      "Vaillant appliances show F-prefixed fault codes on the appliance display or system control, with a separate status-code list for normal operating states.",
    group: "europe-heating",
  },
  {
    name: "Viessmann",
    slug: "viessmann",
    description:
      "Viessmann references for Vitocal heat pumps, Vitodens boilers, and ViCare system controls.",
    equipmentTypes: ["heat-pump", "boiler", "controls-thermostats"],
    regions: ["uk", "eu"],
    series: ["Vitocal 100-A", "Vitocal 250-A", "Vitodens 100-W", "Vitodens 200-W"],
    aliases: ["Viessmann Climate Solutions"],
    faultDisplay:
      "Viessmann equipment shows a fault code with a service message on the appliance display and mirrors it in the ViCare app.",
    group: "europe-heating",
  },
  {
    name: "Worcester Bosch",
    slug: "worcester-bosch",
    description:
      "Worcester Bosch references for Greenstar boilers and the heat-pump ranges installed across United Kingdom homes.",
    equipmentTypes: ["boiler", "heat-pump", "controls-thermostats"],
    regions: ["uk"],
    series: ["Greenstar 4000", "Greenstar 8000", "Greenstar CDi", "Compress 3000 AWS"],
    aliases: ["Worcester, Bosch Group"],
    faultDisplay:
      "Worcester Bosch appliances display EA, E9, C6 style fault codes with a matching service manual entry for each.",
    group: "europe-heating",
  },
  {
    name: "Baxi",
    slug: "baxi",
    description:
      "Baxi references for domestic boilers, Assure air-source heat pumps, and United Kingdom heating controls.",
    equipmentTypes: ["boiler", "heat-pump", "controls-thermostats"],
    regions: ["uk", "eu"],
    series: ["Baxi 800", "Baxi 600", "Assure ASHP", "Platinum"],
    aliases: ["Baxi Heating", "BDR Thermea"],
    group: "europe-heating",
  },
  {
    name: "Ideal Heating",
    slug: "ideal-heating",
    description:
      "Ideal Heating references for Logic and Vogue boilers plus the Logic Air heat-pump range.",
    equipmentTypes: ["boiler", "heat-pump"],
    regions: ["uk"],
    series: ["Logic Max", "Vogue Max", "Logic Air", "Evomax"],
    aliases: ["Ideal Boilers", "Ideal Heating Commercial"],
    group: "europe-heating",
  },
  {
    name: "Grant",
    slug: "grant",
    description:
      "Grant references for Aerona air-source heat pumps and the oil-fired heating equipment common in rural United Kingdom and Ireland.",
    equipmentTypes: ["heat-pump", "boiler"],
    regions: ["uk"],
    series: ["Aerona3", "Aerona 290", "Vortex"],
    aliases: ["Grant UK", "Grant Engineering"],
    group: "europe-heating",
  },
  {
    name: "NIBE",
    slug: "nibe",
    description:
      "NIBE references for air-source and ground-source heat pumps installed across Northern Europe and the United Kingdom.",
    equipmentTypes: ["heat-pump", "controls-thermostats"],
    regions: ["uk", "eu"],
    series: ["S2125", "F2120", "S1155", "F730"],
    aliases: ["NIBE Energy Systems"],
    faultDisplay:
      "NIBE systems raise numbered alarms on the display and in myUplink, distinguishing between an alarm that stops the system and an information message that does not.",
    group: "europe-heating",
  },
  {
    name: "Stiebel Eltron",
    slug: "stiebel-eltron",
    description:
      "Stiebel Eltron references for heat pumps, ventilation, and electric water heating in European and United Kingdom installations.",
    equipmentTypes: ["heat-pump", "indoor-air-quality"],
    regions: ["uk", "eu"],
    series: ["WPL", "HPA-O", "LWZ"],
    aliases: ["Stiebel Eltron GmbH"],
    group: "europe-heating",
  },
  {
    name: "Ariston",
    slug: "ariston",
    description:
      "Ariston references for Nimbus heat pumps, domestic boilers, and hot water equipment sold across Europe.",
    equipmentTypes: ["heat-pump", "boiler"],
    regions: ["uk", "eu"],
    series: ["Nimbus", "Alteas One", "Clas One", "Nuos"],
    aliases: ["Ariston Group", "Ariston Thermo"],
    group: "europe-heating",
  },
  {
    name: "Daikin Altherma",
    slug: "daikin-altherma",
    description:
      "Focused references for the Daikin Altherma hydronic heat-pump range used in United Kingdom and European retrofits.",
    equipmentTypes: ["heat-pump", "boiler"],
    regions: ["uk", "eu"],
    series: ["Altherma 3 H HT", "Altherma 3 R", "Altherma 3 M"],
    aliases: ["Altherma"],
    group: "europe-heating",
  },

  /* -------------------------------------------------------------- controls -- */
  {
    name: "Google Nest",
    slug: "nest",
    description:
      "Nest thermostat references covering wiring compatibility, heat-pump control, and the behaviour that owners most often question.",
    equipmentTypes: ["controls-thermostats"],
    regions: ["us", "uk", "eu"],
    series: ["Nest Learning Thermostat", "Nest Thermostat", "Nest Thermostat E"],
    aliases: ["Nest", "Google Nest Thermostat"],
    faultDisplay:
      "Nest thermostats report wiring and power problems as E-numbered messages, such as a no-power-to-Rc condition, rather than equipment fault codes.",
    group: "controls",
  },
  {
    name: "ecobee",
    slug: "ecobee",
    description:
      "ecobee thermostat references for heat-pump staging, accessory wiring, and sensor behaviour in North American homes.",
    equipmentTypes: ["controls-thermostats"],
    regions: ["us"],
    series: ["Smart Thermostat Premium", "Smart Thermostat Enhanced", "ecobee3 lite"],
    aliases: ["Ecobee Inc"],
    group: "controls",
  },
  {
    name: "Honeywell Home",
    slug: "honeywell-home",
    description:
      "Honeywell Home and Resideo control references covering thermostats, zoning panels, and system accessories.",
    equipmentTypes: ["controls-thermostats"],
    regions: ["us", "uk", "eu"],
    series: ["T6 Pro", "T9", "T10 Pro", "evohome"],
    aliases: ["Resideo", "Honeywell Thermostat"],
    group: "controls",
  },
  {
    name: "tado",
    slug: "tado",
    description:
      "tado control references for European and United Kingdom heating systems, including heat-pump and boiler integrations.",
    equipmentTypes: ["controls-thermostats"],
    regions: ["uk", "eu"],
    series: ["Smart Thermostat X", "Wireless Smart Thermostat", "Smart Radiator Thermostat"],
    aliases: ["tado°", "tado GmbH"],
    group: "controls",
  },
  {
    name: "Hive",
    slug: "hive",
    description:
      "Hive control references for United Kingdom heating systems, covering receiver wiring, scheduling, and connection faults.",
    equipmentTypes: ["controls-thermostats"],
    regions: ["uk"],
    series: ["Hive Thermostat", "Hive Thermostat Mini", "Hive Radiator Valve"],
    aliases: ["Hive Home", "British Gas Hive"],
    group: "controls",
  },
  {
    name: "Drayton",
    slug: "drayton",
    description:
      "Drayton control references for Wiser and traditional United Kingdom heating controls and zoning components.",
    equipmentTypes: ["controls-thermostats"],
    regions: ["uk"],
    series: ["Wiser", "Digistat", "Lifestyle"],
    aliases: ["Drayton Controls", "Schneider Electric Drayton"],
    group: "controls",
  },
] satisfies Brand[];

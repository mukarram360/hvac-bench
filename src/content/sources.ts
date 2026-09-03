import type { Source } from "./schema";

export const sources = [
  {
    id: "gree-e6-guide",
    title: "GREE Mini Split E6 Error Code Troubleshooting",
    publisher: "Gree Comfort",
    url: "https://www.greecomfort.com/news-and-events/gree-mini-split-e6-error-code-troubleshooting-guide/index.html",
    sourceType: "oem-support",
    scopeNote:
      "Residential Gree single-zone and multi-zone communication diagnostics.",
  },
  {
    id: "gree-multi21-service",
    title: "Multi21+ Service Manual",
    publisher: "Gree Comfort",
    url: "https://www.greecomfort.com/assets/documents/archive/multi21-revision-b/service-manual-30k-36k-42k.pdf",
    sourceType: "oem-service-manual",
    scopeNote: "Multi21+ 30K, 36K, and 42K equipment documented in the manual.",
  },
  {
    id: "gree-h5-guide",
    title: "GREE H5 Error Code: IPM Protection Causes and Fix Guide",
    publisher: "Gree Comfort",
    url: "https://www.greecomfort.com/news-and-events/gree-h5-error-code-ipm-protection-guide/",
    sourceType: "oem-support",
    scopeNote:
      "Gree residential systems covered by the manufacturer technical article.",
  },
  {
    id: "gree-water-leak",
    title: "Why Is My Mini-Split Leaking Water?",
    publisher: "Gree Comfort",
    url: "https://www.greecomfort.com/news-and-events/mini-split-leaking-water/",
    sourceType: "oem-support",
    scopeNote: "General ductless condensate and drainage guidance from Gree.",
  },
  {
    id: "daikin-u4-service",
    title: "RZR-P and RZQ-P(9) Series Service Manual",
    publisher: "Daikin Comfort Technologies",
    url: "https://www.daikinac.com/content/assets/DOC/ServiceManuals/SiUS281117%20RZR-P%2CRZQ-P%289%29%20SkyAir%20Service%20Manual.pdf",
    sourceType: "oem-service-manual",
    scopeNote: "SkyAir RZR-P and RZQ-P(9) series equipment listed by Daikin.",
  },
  {
    id: "daikin-a5-service",
    title: "15 and 19 Series Service Manual",
    publisher: "Daikin Comfort Technologies",
    url: "https://www.daikinac.com/content/assets/DOC/ServiceManuals/SiUS041501E-15-19-Series.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Daikin 15 and 19 Series units documented in service manual SiUS041501E.",
  },
  {
    id: "lg-general-service",
    title: "Single-Zone Systems General Service Manual",
    publisher: "LG Electronics",
    url: "https://legacy.lghvac.com/resource-service?filename=General_Service_Manual_MFL41161610_All_SZ.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "LG single-zone ductless systems covered by general service manual MFL41161610.",
  },
  {
    id: "midea-aurora-service",
    title: "Aurora Xtreme Inverter Service Manual",
    publisher: "Midea",
    url: "https://www.midea.com/content/dam/midea-aem/col/manuales/minisplit-aurora-xtreme-inverter-seer-19%2C-36000-btu%2C-fr%C3%ADo%2C-220v/Manual%20Minisplit%20Inverter%20ESPA%C3%91OL.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Aurora Xtreme Inverter 36,000 BTU cooling-only 220 V model documented by Midea.",
  },
  {
    id: "mrcool-code-table",
    title: "Mini Split Systems Error Codes",
    publisher: "MRCOOL",
    url: "https://support.mrcool.com/hc/en-us/articles/39803744782868-Mini-Split-Systems-Error-Codes",
    sourceType: "oem-support",
    scopeNote: "MRCOOL generation-specific mini-split code tables.",
  },
  {
    id: "mrcool-e1-guide",
    title: "EL01 / E1 Error Code Mini-Split Troubleshooting Guide",
    publisher: "MRCOOL",
    url: "https://support.mrcool.com/hc/en-us/articles/28316849365396-EL01-E1-Error-Code-Mini-Split-Troubleshooting-Guide",
    sourceType: "oem-support",
    scopeNote:
      "MRCOOL single-zone and multi-zone ductless systems described in the guide.",
  },
  {
    id: "mrcool-p1-guide",
    title: "Troubleshooting P1 or PC-01 Error Code",
    publisher: "MRCOOL",
    url: "https://support.mrcool.com/hc/en-us/articles/30875557653908-Troubleshooting-P1-or-PC-01-Error-Code-on-MRCOOL-Mini-Split-Systems",
    sourceType: "oem-support",
    scopeNote:
      "MRCOOL 115 V, 230 V, and multi-zone mini-split families identified in the guide.",
  },
  {
    id: "mrcool-p0-guide",
    title: "Troubleshoot P0 / PC00 on a MRCOOL Mini-Split",
    publisher: "MRCOOL",
    url: "https://support.mrcool.com/hc/en-us/articles/30946364594068-How-to-Troubleshoot-the-P0-PC00-Error-Code-on-a-MRCOOL-Mini-Split",
    sourceType: "oem-support",
    scopeNote:
      "MRCOOL mini-splits that display P0 or PC00 inverter-module protection.",
  },
  {
    id: "pioneer-quantum-e1",
    title: "E1, EL 01, or EL01 Error Codes",
    publisher: "Pioneer",
    url: "https://help.pioneerminisplit.com/en-US/e1-error-code-quantum-discontinued-253277",
    sourceType: "oem-support",
    scopeNote:
      "Discontinued Quantum WYS, CYB, RYB, UYB, and FYB series plus listed companion models.",
  },
  {
    id: "pioneer-current-e1-e2",
    title: "E1 or E2 Error Codes",
    publisher: "Pioneer",
    url: "https://help.pioneerminisplit.com/en-US/e1-e2-error-codes-3334628",
    sourceType: "oem-support",
    scopeNote:
      "Listed Diamante Essenza, Diamante Pro, Quantum Fresh, Hyperformance, and Ultra systems.",
  },
  {
    id: "senville-eh02",
    title: "EH 02 Zero-Crossing Signal Detection Error",
    publisher: "Senville",
    url: "https://help.senville.com/support/solutions/articles/151000212821-error-code-eh-02-zero-crossing-signal-detection-error",
    sourceType: "oem-support",
    scopeNote:
      "Senville LETO and AURA series models using the applicable AC fan motor design.",
  },
  {
    id: "senville-leto-codes",
    title: "Senville LETO Series Error Code Reference Guide",
    publisher: "Senville",
    url: "https://help.senville.com/support/solutions/articles/151000211416-senville-leto-series-error-code-reference-guide",
    sourceType: "oem-support",
    scopeNote: "Senville LETO series error and protection codes.",
  },
  {
    id: "fujitsu-rls2-operation",
    title: "RLS2 Series Operating Manual",
    publisher: "Fujitsu General",
    url: "https://www.fujitsugeneral.com/us/resources/pdf/support/downloads/%28OM%29AOU9-12-15RLS2.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "Fujitsu RLS2 9, 12, and 15 class systems documented by the manual.",
  },
  {
    id: "fujitsu-troubleshooting",
    title: "AIRSTAGE Mini-Splits Troubleshooting",
    publisher: "Fujitsu General",
    url: "https://www.fujitsugeneral.com/us/support/faq/halcyon/troubleshooting.html",
    sourceType: "oem-support",
    scopeNote:
      "General homeowner checks and normal operating behavior for AIRSTAGE mini-splits.",
  },
  {
    id: "fujitsu-filter-manual",
    title: "ASUG LZAS Owner's Manual",
    publisher: "Fujitsu General",
    url: "https://www.fujitsugeneral.com/us/resources/pdf/support/downloads/%28OM%29ASUG09LZCB.pdf",
    sourceType: "oem-operation-manual",
    scopeNote: "ASUG LZAS family cleaning and filter-maintenance instructions.",
  },
  {
    id: "fujitsu-aduh-operation",
    title: "ADUH LUAS1 Operating Manual",
    publisher: "Fujitsu General",
    url: "https://www.fujitsugeneral.com/us/resources/pdf/support/downloads/pdf-fcus-aduh07-24luas1-01.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "ADUH07, ADUH09, ADUH12, ADUH18, and ADUH24 LUAS1 operation, defrost, filter care, and normal behavior.",
  },
  {
    id: "daikin-mxs-engineering",
    title: "MXS-W, MXL-W, and MXLH-W Series Engineering Manual",
    publisher: "Daikin Comfort Technologies",
    url: "https://www.daikinac.com/docs/default-source/mxs-series-multi-zone-%282-3-4-or-5-zones%29/em-edus122205_mxs-mxl-w.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Daikin MXS-W, MXL-W, and MXLH-W multi-zone systems, including wireless controller range and interference guidance.",
  },
  {
    id: "lg-console-owner",
    title: "Single-Zone and Multi F Console Indoor Unit Owner's Manual",
    publisher: "LG Electronics",
    url: "https://legacy.lghvac.com/resource-service?filename=OM_SZ_MultiF_Console_IDU_MFL67870345.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "LG console indoor units covered by owner manual MFL67870345, including controller batteries and signal care.",
  },
  {
    id: "trane-mitsubishi-remote",
    title: "Understanding Your Mitsubishi Mini-Split Remote",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/mitsubishi-mini-split-remote/",
    sourceType: "oem-support",
    scopeNote:
      "Trane and Mitsubishi ductless handheld controller battery, line-of-sight, reset, and replacement guidance.",
  },
  {
    id: "trane-mini-split-not-cooling",
    title: "Why Is My Mini-Split Not Cooling?",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/mini-split-not-cooling/",
    sourceType: "oem-support",
    scopeNote:
      "Trane ductless cooling checks, airflow limits, frozen coil clues, and professional refrigerant boundary.",
  },
  {
    id: "trane-mini-split-not-heating",
    title: "Why Is My Mini-Split Not Working in Heat Mode?",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/mini-split-not-working-in-heat-mode/",
    sourceType: "oem-support",
    scopeNote:
      "Trane ductless heating checks covering controls, airflow, outdoor clearance, and service conditions.",
  },
  {
    id: "trane-mini-split-compressor",
    title: "Mini-Split Compressor Not Turning On",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/mini-split-compressor-not-turning-on/",
    sourceType: "oem-support",
    scopeNote:
      "Trane ductless outdoor operation, breaker stop points, airflow observations, and compressor service limits.",
  },
  {
    id: "trane-mini-split-modulation",
    title: "Do Mini-Splits Turn Off When the Temperature Is Reached?",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/do-mini-splits-turn-off-when-temperature-is-reached/",
    sourceType: "oem-support",
    scopeNote:
      "Trane explanation of inverter modulation and indoor unit behavior near the temperature setting.",
  },
  {
    id: "trane-mini-split-sizing",
    title: "What Size Mini-Split Do I Need?",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/what-size-mini-split-do-i-need/",
    sourceType: "oem-support",
    scopeNote:
      "Trane ductless sizing guidance, including short cycling risk from substantial oversizing.",
  },
  {
    id: "trane-mini-split-refrigerant",
    title: "How to Identify and Fix Mini-Split Refrigerant Issues",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/how-to-identify-and-fix-mini-split-refrigerant-issues/",
    sourceType: "oem-support",
    scopeNote:
      "Trane ductless symptoms that may accompany a refrigerant problem and the professional repair boundary.",
  },
  {
    id: "trane-mini-split-leak",
    title: "Why Is My Mini Split Leaking Water?",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/mini-split-leaking-water/",
    sourceType: "oem-support",
    scopeNote:
      "Trane ductless condensate, drain, filter, frozen coil, drain pan, and installation leak guidance.",
  },
  {
    id: "trane-mini-split-smells",
    title: "Why Does My Mini-Split Smell?",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/mini-split-smells/",
    sourceType: "oem-support",
    scopeNote:
      "Trane ductless odor, moisture, drain, refrigerant, electrical, and professional cleaning guidance.",
  },
  {
    id: "trane-mini-split-filters",
    title: "Do Mini-Splits Have Filters, and How Do I Care for Them?",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/ductless-systems/do-mini-splits-have-filters/",
    sourceType: "oem-support",
    scopeNote:
      "Trane and Mitsubishi ductless filter types, model-first cleaning, drying, refitting, and replacement guidance.",
  },
  {
    id: "trane-ductless-maintenance",
    title: "Ductless System Maintenance",
    publisher: "Trane Technologies",
    url: "https://www.trane.com/residential/en/resources/maintenance-tips/ductless-systems/",
    sourceType: "oem-support",
    scopeNote:
      "Trane homeowner and professional maintenance boundaries for single-zone and multi-zone ductless systems.",
  },
  /* -------------------------------------- standards and public regulators -- */
  {
    id: "ashrae-terminology",
    title: "ASHRAE Terminology",
    publisher: "ASHRAE",
    url: "https://terminology.ashrae.org/",
    sourceType: "standards-body",
    scopeNote:
      "Industry reference definitions for heating, ventilation, air conditioning, and refrigeration vocabulary.",
  },
  {
    id: "epa-section-608",
    title: "Section 608 Technician Certification",
    publisher: "United States Environmental Protection Agency",
    url: "https://www.epa.gov/section608",
    sourceType: "government-guidance",
    scopeNote:
      "Who may open a refrigerant circuit in the United States, and under which certification type.",
  },
  {
    id: "gov-uk-f-gas",
    title: "Fluorinated gases (F gases)",
    publisher: "GOV.UK",
    url: "https://www.gov.uk/guidance/fluorinated-gases-f-gases",
    sourceType: "government-guidance",
    scopeNote:
      "United Kingdom certification, leak checking, and record keeping duties for fluorinated refrigerants.",
  },
  {
    id: "doe-heat-pumps",
    title: "Heat Pump Systems",
    publisher: "United States Department of Energy",
    url: "https://www.energy.gov/energysaver/heat-pump-systems",
    sourceType: "government-guidance",
    scopeNote:
      "Consumer-facing explanation of air source, ductless, and geothermal heat pump operation and efficiency metrics.",
  },
  {
    id: "ahri-directory",
    title: "AHRI Directory of Certified Product Performance",
    publisher: "Air-Conditioning, Heating, and Refrigeration Institute",
    url: "https://www.ahridirectory.org/",
    sourceType: "standards-body",
    scopeNote:
      "Certified SEER2, EER2, and HSPF2 ratings for matched North American equipment combinations.",
  },
  {
    id: "ec-ecodesign",
    title: "Energy label and ecodesign",
    publisher: "European Commission",
    url: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-label-and-ecodesign_en",
    sourceType: "government-guidance",
    scopeNote:
      "The European framework behind SCOP, seasonal space heating efficiency, and the product energy label.",
  },
  {
    id: "doe-hvac-sizing",
    title: "Proper Sizing of HVAC Systems",
    publisher: "United States Department of Energy",
    url: "https://bsesc.energy.gov/energy-basics/hvac-proper-sizing-hvac-systems",
    sourceType: "government-guidance",
    scopeNote:
      "Residential heating and cooling load calculations, equipment selection, airflow matching, and oversizing consequences.",
  },
  {
    id: "doe-seer2",
    title: "Purchasing Energy-Efficient Residential Central Air Conditioners",
    publisher: "United States Department of Energy",
    url: "https://www.energy.gov/cmei/femp/purchasing-energy-efficient-residential-central-air-conditioners",
    sourceType: "government-guidance",
    scopeNote:
      "SEER2 definition, units, test-procedure transition, and matched residential central-air comparison context.",
  },
  {
    id: "epa-refrigerant-substitutes",
    title:
      "Substitutes in Residential and Light Commercial Air Conditioning and Heat Pumps",
    publisher: "United States Environmental Protection Agency",
    url: "https://www.epa.gov/snap/substitutes-residential-and-light-commercial-air-conditioning-and-heat-pumps",
    sourceType: "government-guidance",
    scopeNote:
      "United States refrigerant acceptability listings and use conditions for residential and light-commercial air conditioning and heat pumps.",
  },
  {
    id: "daikin-ductless-lineup",
    title: "Ductless Heating and Cooling Systems",
    publisher: "Daikin Comfort Technologies",
    url: "https://daikincomfort.com/products/ductless",
    sourceType: "oem-support",
    scopeNote:
      "Current Daikin North American single-zone and multi-zone ductless formats, controls, and application descriptions.",
  },
  {
    id: "mitsubishi-m-series",
    title: "M-Series Residential Products",
    publisher: "Mitsubishi Electric Trane HVAC US",
    url: "https://www.mitsubishicomfort.com/products/explore/m-series",
    sourceType: "oem-support",
    scopeNote:
      "Current Mitsubishi Electric US M-Series indoor-unit formats, compatible applications, and published product attributes.",
  },
  {
    id: "mitsubishi-ducted",
    title: "Ducted Mini- and Multi-Split Systems",
    publisher: "Mitsubishi Electric Trane HVAC US",
    url: "https://www.mitsubishicomfort.com/products/ducted-solutions",
    sourceType: "oem-support",
    scopeNote:
      "Current Mitsubishi Electric US ducted, concealed, and multi-position heat-pump configurations.",
  },
  {
    id: "fujitsu-product-library",
    title: "AIRSTAGE Mini-Split Downloads",
    publisher: "Fujitsu General America",
    url: "https://www.fujitsugeneral.com/us/support/downloads/halcyon/index.html",
    sourceType: "oem-support",
    scopeNote:
      "Current and retired Fujitsu AIRSTAGE single-zone and multi-zone product documentation library.",
  },
  {
    id: "gree-product-catalog",
    title: "GREE Full Line Product Catalog",
    publisher: "Gree Comfort",
    url: "https://www.greecomfort.com/assets/documents/resource-materials/full-line-product-catalog/gree-full-line-catalog.pdf",
    sourceType: "oem-support",
    scopeNote:
      "Gree Comfort North American single-zone, multi-zone, ducted, and light-commercial lineup descriptions and specifications.",
  },
  {
    id: "midea-split-lineup",
    title: "Split Air Conditioners",
    publisher: "Midea America",
    url: "https://www.midea.com/us/Heating_Cooling/split-system",
    sourceType: "oem-support",
    scopeNote:
      "Current Midea US split-system format, inverter operation, control modes, and application descriptions.",
  },
  {
    id: "mrcool-product-catalog",
    title: "MRCOOL Product Catalog",
    publisher: "MRCOOL",
    url: "https://www.mrcool.com/wp-content/dox_repo/mc-cat-en-01.pdf",
    sourceType: "oem-support",
    scopeNote:
      "MRCOOL ductless, multi-zone, central, and current DIY-series product configurations and published specifications.",
  },
  {
    id: "pioneer-product-lineup",
    title: "Pioneer Mini-Split Product Collections",
    publisher: "Pioneer",
    url: "https://www.pioneerminisplit.com/collections",
    sourceType: "oem-support",
    scopeNote:
      "Current Pioneer official-store ductless, ducted, cassette, floor-ceiling, and high-wall product families.",
  },
  {
    id: "senville-aura-leto",
    title: "Difference Between Senville LETO and AURA",
    publisher: "Senville",
    url: "https://help.senville.com/support/solutions/articles/151000222822-what-is-the-difference-between-senville-leto-and-aura-",
    sourceType: "oem-support",
    scopeNote:
      "Current Senville support comparison of LETO and AURA single-zone and multi-zone applications, climate scope, and warranty terms.",
  },
  /* ------------------------------------ first-layer manufacturer evidence -- */
  {
    id: "mitsubishi-p8",
    title: "Mitsubishi Electric P8 diagnostic reference",
    publisher: "Mitsubishi Electric",
    url: "https://www.mitsubishielectric.co.jp/ldg/wink/fp/kishugun.do?errorCode1=P8&groupId=114",
    sourceType: "oem-support",
    scopeNote:
      "Mitsubishi Electric Mr Slim families covered by the Japanese manufacturer fault-code reference.",
  },
  {
    id: "samsung-windfree-c101",
    title: "WindFree 3.0 service manual",
    publisher: "Samsung",
    url: "https://s3.amazonaws.com/samsung-files/Tech_Files/RAC/WindFree%203.0_AR%20C/Service%20Manual/SERVICE%20MANUAL_WindFree%203.0i%20%28CSKCP%29_PM1.0_230302.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Samsung WindFree 3.0 AR C wall-mounted systems and their C101 and C102 communication diagnostics.",
  },
  {
    id: "panasonic-aquarea-user",
    title: "Aquarea air to water heat pump end user manual",
    publisher: "Panasonic",
    url: "https://cdn.aircon.panasonic.eu/uploads/GB/Catalogues/2023/FINAL%20A2W%20END%20USER_MANUAL_2022.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "Panasonic Aquarea air-to-water heat pumps and the homeowner-facing H62 water-flow response.",
  },
  {
    id: "toshiba-seiya-s4",
    title: "Seiya S4 residential split system",
    publisher: "Toshiba Air Conditioning",
    url: "https://www.toshiba-aircon.co.uk/en/products/r32-split-systems/residential/wall-mounted/ras-seiya-s4-high-wall.html",
    sourceType: "oem-support",
    scopeNote:
      "Toshiba Seiya S4 RAS-B05 through RAS-B24 systems and their linked operating literature.",
  },
  {
    id: "hitachi-yutaki-70",
    title: "Yutaki alarm 70 technical tip",
    publisher: "Hitachi Cooling and Heating",
    url: "https://www.youtube.com/watch?v=FD7dsXJxxYM",
    sourceType: "oem-support",
    scopeNote:
      "Hitachi Yutaki hydronic heat pumps displaying alarm 70 for an unsuccessful water-flow check.",
  },
  {
    id: "mhi-room-air-user",
    title: "Mitsubishi Heavy Industries room air conditioner user manual",
    publisher: "Mitsubishi Heavy Industries Thermal Systems",
    url: "https://www.mhi-mth.co.jp/en/products/pdf/rlc012a102a_english.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "MHI wall-mounted room air conditioners whose RUN lamp signals warm-up, defrost, and self-clean states.",
  },
  {
    id: "haier-forward-service",
    title: "Forward Series service manual",
    publisher: "Haier Appliances",
    url: "https://www.haierappliances.com/content/downloads/ductless/Forward-Series/Haier-Forward-Series-Service-Manual.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "North American Haier Forward Series ductless systems and the E7 indoor-outdoor communication diagnostic.",
  },
  {
    id: "hisense-ultra-xtreme-service",
    title: "Hi-Ultra Xtreme 454B service manual",
    publisher: "Hisense HVAC",
    url: "https://www.hisensecomfort.com/professionals/upload/accessory/202411/Hi-ULTRA%20XTREME%20454B%20Service%20Manual%20-%20Sensors.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Hisense Hi-Ultra Xtreme 454B systems, including the mode-dependent meanings assigned to code 16.",
  },
  {
    id: "tcl-not-cooling",
    title: "TCL air conditioner not cooling troubleshooting guide",
    publisher: "TCL",
    url: "https://support.tcl.com/en_US/troubleshooting-guide-tcl-air-conditioner-not-cooling-the-room",
    sourceType: "oem-support",
    scopeNote:
      "TCL United States room air conditioners covered by the manufacturer cooling and airflow checklist.",
  },
  {
    id: "cooper-hunter-sophia",
    title: "Sophia multi-zone cassette owner's manual",
    publisher: "Cooper and Hunter",
    url: "https://cooperandhunter.s3.amazonaws.com/3777/Owner%27s-Manual-Cassette.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "Cooper and Hunter Sophia multi-zone cassette indoor units and their E1 communication indication.",
  },
  {
    id: "della-code-guide",
    title: "Understanding Della mini-split error codes",
    publisher: "Della Home",
    url: "https://dellahome.com/blogs/della-blog/understanding-mini-split-error-codes-a-quick-guide-for-della-models",
    sourceType: "oem-support",
    scopeNote:
      "Della Econo, Vario, Optima, Motto, and Umbra families with separate manufacturer code tables.",
  },
  {
    id: "klimaire-ksiv-service",
    title: "KSIV series troubleshooting service manual",
    publisher: "Klimaire",
    url: "https://www.klimaire.com/mwdownloads/download/link/id/245/",
    sourceType: "oem-service-manual",
    scopeNote:
      "Klimaire KSIV ductless systems and the E1 indoor-outdoor communication diagnostic path.",
  },
  {
    id: "blueridge-bmkh-docs",
    title: "Blueridge BMKH product documentation",
    publisher: "Alpine Home Air",
    url: "https://www.alpinehomeair.com/product/air-conditioning-cooling/ductless-mini-splits/two-zone-mini-split-systems/blueridge/bmkh2421-12f-18w",
    sourceType: "oem-support",
    scopeNote:
      "Blueridge BMKH multi-zone systems and the manufacturer-supplied manuals listed with the matched equipment.",
  },
  {
    id: "friedrich-floating-air",
    title: "Floating Air Select operation manual",
    publisher: "Friedrich",
    url: "https://www.friedrich.com/hubfs/2020%20Literature%20PDFs/Installation%20and%20Operation%20Manuals/Floating%20Air%20Select%20Ductless%20Single%20Zone%209k-24K%20Wall%20Mounted%20Single%20Zone%20Indoor.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "Friedrich Floating Air Select 9K through 24K single-zone wall-mounted indoor units.",
  },
  {
    id: "carrier-ductless-support",
    title: "Carrier ductless system troubleshooting",
    publisher: "Carrier",
    url: "https://www.carrier.com/residential/en/us/products/ductless-mini-splits/ductless-air-conditioner-maintenance/",
    sourceType: "oem-support",
    scopeNote:
      "Carrier residential ductless equipment and manufacturer-approved owner maintenance and escalation guidance.",
  },
  {
    id: "trane-xl824-support",
    title: "XL824 thermostat support library",
    publisher: "Trane Home",
    url: "https://support.tranehome.com/hc/en-us/sections/360008584652-XL824-XL850-and-XL1050-Only",
    sourceType: "oem-support",
    scopeNote:
      "Trane XL824, XL850, and XL1050 connected controls and their documented restart and connectivity procedures.",
  },
  {
    id: "trane-xl824-reboot",
    title: "How to reboot an XL824 XL850 or XL1050 thermostat",
    publisher: "Trane Home",
    url: "https://support.tranehome.com/hc/en-us/articles/4404120429453",
    sourceType: "oem-support",
    scopeNote:
      "Trane XL824, XL850, and XL1050 on-screen reboot sequence, idle-system prerequisite, and completion behavior.",
  },
  {
    id: "american-standard-s9v2",
    title: "Platinum S9V2 furnace product support",
    publisher: "American Standard",
    url: "https://www.americanstandardair.com/products/furnaces/platinum-s9v2-vs-furnace/",
    sourceType: "oem-support",
    scopeNote:
      "American Standard Platinum S9V2 variable-speed furnace product family and linked owner documentation.",
  },
  {
    id: "american-s9v2-install",
    title: "S9V2 S-Series furnace installer's guide",
    publisher: "American Standard",
    url: "https://americanstandardair.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/split-systems/Small%20Splits/Furnaces/18-CE01D1-1E-EN_11112016.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "American Standard S9V2 S-Series condensing furnaces and their integrated furnace-control display codes.",
  },
  {
    id: "lennox-xp17-install",
    title: "XP17 installation and service procedure",
    publisher: "Lennox",
    url: "https://www.lennox.com/lib/legacy-res/pdfs/installation_maintenance/lennox_xp17_iom.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Lennox XP17 heat pumps connected to iComfort controls, including Critical Alert 411.",
  },
  {
    id: "rheem-r96v-service",
    title: "R96V furnace fault and diagnostic reference",
    publisher: "Rheem",
    url: "https://pts.myrheem.com/DocStore/cad/purchase%20parts/92-/92-24161-184.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Rheem R96V communicating gas furnaces and fault 57 combustion pressure-switch logic.",
  },
  {
    id: "ruud-r96t-install",
    title: "R96T furnace installation instructions",
    publisher: "Ruud",
    url: "https://www.meiersupply.com/customer/docs/skudocs/Document_Links/Vendors/106903%20-%20Ruud%20Residential/R96T/R96TInstall.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Ruud R96T furnaces and fault 58 water-sensor circuit diagnostics in the manufacturer-authored manual.",
  },
  {
    id: "goodman-gmvc-install",
    title: "GMVC80 furnace installation instructions",
    publisher: "Goodman",
    url: "https://resource.ecmdi.com/is/content/Watscocom/Gemaire/goodman_gmvc801005cn_article_2277393384684018_en_ii.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Goodman GMVC80 furnaces and the one-flash ignition lockout sequence documented by the manufacturer.",
  },
  {
    id: "amana-ptac-literature",
    title: "Amana PTAC literature library",
    publisher: "Amana",
    url: "https://www.amana-ptac.com/literature-library",
    sourceType: "oem-support",
    scopeNote:
      "Amana packaged terminal air conditioners and heat pumps with model-specific owner and service literature.",
  },
  {
    id: "amana-ptac-br-service",
    title: "Amana PTAC service and troubleshooting manual",
    publisher: "Amana",
    url: "https://hvacdirect.com/media/pdf/Amana-PTAC-PTC073J35AXXX-Service-Manual.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Amana PTAC models using the documented br low-voltage and brownout-protection diagnostic.",
  },
  {
    id: "york-yp9c-install",
    title: "Affinity YP9C furnace installation manual",
    publisher: "York",
    url: "https://www.hvactechgroup.com/files/York%20Affinity%20YP9C%20Installation%20Manual.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "York Affinity YP9C modulating furnaces and the seven-red-flash ignition lockout sequence.",
  },
  {
    id: "bryant-furnace-support",
    title: "Bryant furnace troubleshooting guide",
    publisher: "Bryant",
    url: "https://www.bryant.com/en/us/products/gas-furnaces/furnace-troubleshooting/",
    sourceType: "oem-support",
    scopeNote:
      "Bryant residential gas furnaces and the safe observations owners can make before qualified service.",
  },
  {
    id: "bryant-limit-switch",
    title: "Bryant furnace limit switch guide",
    publisher: "Bryant",
    url: "https://www.bryant.com/en/us/products/gas-furnaces/furnace-limit-switch/",
    sourceType: "oem-support",
    scopeNote:
      "Bryant residential gas-furnace limit-switch operation, airflow causes, testing boundary, and dealer repair guidance.",
  },
  {
    id: "bosch-climate5000-service",
    title: "Climate 5000 454B multi-zone service manual",
    publisher: "Bosch Home Comfort",
    url: "https://www.bosch-homecomfort.com/us/media/country_pool/documents/climate5000g3_ductless_multizone_service_manual_05.2025.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Bosch Climate 5000 Generation 3 R-454B multi-zone systems and EC 07 outdoor-fan diagnostics.",
  },
  {
    id: "ge-zoneline-support",
    title: "Zoneline AZHS09DCXXA support",
    publisher: "GE Appliances",
    url: "https://products.geappliances.com/appliance/gea-specs/AZHS09DCXXA/support",
    sourceType: "oem-support",
    scopeNote:
      "GE Zoneline AZHS09DCXXA packaged terminal heat pump and its linked owner instructions.",
  },
  {
    id: "ge-zoneline-azhs-owner",
    title: "Zoneline AZHS owner manual",
    publisher: "GE Appliances",
    url: "https://images.salsify.com/image/upload/s--Lbb5PuZW--/7cf3c8ef80353f599337aa1f80b403bd0af6d9b3.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "GE Zoneline AZHS packaged terminal units including model AZHS09DCXXA and owner maintenance instructions.",
  },
  {
    id: "vaillant-ecotec-plus-install",
    title: "ecoTEC plus installation and maintenance instructions",
    publisher: "Vaillant",
    url: "https://vaillant.co.uk/product-images/0020308121-04.pdf.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Current Vaillant ecoTEC plus boilers and the F.75 pressure-change diagnostic sequence.",
  },
  {
    id: "viessmann-vitodens100-install",
    title: "Vitodens 100-W heat-only installation instructions",
    publisher: "Viessmann",
    url: "https://www.viessmann.co.uk/content/dam/public-brands/gb/pdf/instructions/Vitodens%20100-W%20heat%20only%20installation%20instructions.pdf/",
    sourceType: "oem-service-manual",
    scopeNote:
      "United Kingdom Vitodens 100-W heat-only boilers and their model-specific fault-code table.",
  },
  {
    id: "worcester-greenstar-manuals",
    title: "Greenstar boiler user manual library",
    publisher: "Worcester Bosch",
    url: "https://www.worcester-bosch.co.uk/support/manuals-and-brochures/boiler-user-manuals",
    sourceType: "oem-support",
    scopeNote:
      "United Kingdom Worcester Bosch Greenstar boilers with model-specific user manuals and reset instructions.",
  },
  {
    id: "worcester-si-ea227",
    title: "Greenstar Si Compact ErP user instructions",
    publisher: "Worcester Bosch",
    url: "https://www.worcester-bosch.co.uk/support/literature/download/6720813279",
    sourceType: "oem-operation-manual",
    scopeNote:
      "Greenstar Si Compact ErP boilers displaying EA with the three-digit 227 subcode and user reset response.",
  },
  {
    id: "baxi-e133",
    title: "Baxi E133 fault-code guidance",
    publisher: "Baxi",
    url: "https://www.baxi.co.uk/help-and-advice/faqs/what-do-baxi-error-codes-e23-e53-e133-e119-or-e128-mean",
    sourceType: "oem-support",
    scopeNote:
      "Baxi domestic boilers that assign E133 to failed ignition, including the winter condensate warning.",
  },
  {
    id: "ideal-logic-max-install",
    title: "Logic Max combination boiler installation and servicing",
    publisher: "Ideal Heating",
    url: "https://idealheating.com/_gatsby/file/31e4e31bdd6fdb3572d7bb2d539ce903/Logic%20MAX%20Combi%20Installation%20%26%20Servicing%20-%2010.2023%20%28UIN%20237660%20A01%29.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Ideal Logic Max Combi boilers covered by the October 2023 installation and servicing manual.",
  },
  {
    id: "grant-aerona-fault",
    title: "Aerona heat pump controller fault guidance",
    publisher: "Grant UK",
    url: "https://www.grantuk.com/support/product-support/air-source-heat-pumps/troubleshooting/i-have-a-fault-code-displayed-on-the-heat-pump-controller-where-can-i-find-out-what-this-means/",
    sourceType: "oem-support",
    scopeNote:
      "Grant Aerona heat-pump controllers displaying a warning icon, red LED, and recorded fault code.",
  },
  {
    id: "nibe-f2120-install",
    title: "F2120 installer manual",
    publisher: "NIBE",
    url: "https://www.nibe.eu/assets/documents/19471/331385-3.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "NIBE F2120 air-source heat pumps and alarm 228 after repeated unsuccessful defrost attempts.",
  },
  {
    id: "stiebel-wpl-install",
    title: "WPL 15 20 25 installation manual",
    publisher: "Stiebel Eltron",
    url: "https://www.stiebel-eltron.co.uk/toolbox/content/docs/anleitungen/installation/WPL_15_20_25_AC/329692-43825-9670_WPL_15-25_A%28C%29%28S%29_en.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Stiebel Eltron WPL 15, WPL 20, and WPL 25 heat pumps and IWS status-LED meanings.",
  },
  {
    id: "ariston-clas-one",
    title: "Clas One combination boiler support",
    publisher: "Ariston",
    url: "https://www.ariston.com/en-uk/products/gas-boilers-uk/combi-gas-boilers/clas-one-uk/",
    sourceType: "oem-support",
    scopeNote:
      "United Kingdom Ariston Clas One combination boilers and the manufacturer user literature linked from the product page.",
  },
  {
    id: "daikin-altherma-7h",
    title: "Altherma 3 R MT installer reference guide",
    publisher: "Daikin Europe",
    url: "https://www.daikin.eu/content/dam/document-library/Installer-reference-guide/heat/air-to-water-heat-pump-medium-temperature/erra08-12ev3/ELBH-E%286V.9W%29.ELBX-E%286V.9W%29.ERRA08-12EV3.ERRA08-12EW1_Installer%20reference%20guide_4PEN708483-1A_English.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Daikin Altherma 3 R MT hydronic systems and the distinct 7H water-flow subcodes.",
  },
  {
    id: "nest-e74",
    title: "Nest thermostat E74 power troubleshooting",
    publisher: "Google Nest",
    url: "https://support.google.com/googlehome/answer/9240096?hl=en",
    sourceType: "oem-support",
    scopeNote:
      "Google Nest thermostats displaying E74 and related no-power-to-R wiring messages.",
  },
  {
    id: "ecobee-calibration",
    title: "Smart Thermostat Enhanced setup and user manual",
    publisher: "ecobee",
    url: "https://assets.ctfassets.net/a3qyhfznts9y/38mOpxuQED3OOIUvYbLshZ/cc711d0d2844dfa61cc8e58e49a9bc4c/Enhanced_setup-user_manual_2023_v1.pdf",
    sourceType: "oem-operation-manual",
    scopeNote:
      "ecobee Smart Thermostat Enhanced startup and temperature calibration behavior after installation.",
  },
  {
    id: "honeywell-t6-manual",
    title: "T6 Pro programmable thermostat user guide",
    publisher: "Honeywell Home",
    url: "https://www.honeywellhome.com/us/en/-/media/HoneywellHome/Support/article/t6-Pro/33-00181EFS.pdf/",
    sourceType: "oem-operation-manual",
    scopeNote:
      "Honeywell Home T6 Pro thermostats and the five-minute compressor protection Wait indication.",
  },
  {
    id: "tado-radiator-errors",
    title: "Smart Radiator Thermostat E1 E2 E4 help",
    publisher: "tado",
    url: "https://support.tado.com/en/articles/3482479-my-smart-radiator-thermostat-displays-an-e1-e2-or-e4-error-how-can-i-fix-this",
    sourceType: "oem-support",
    scopeNote:
      "tado Smart Radiator Thermostats reporting calibration errors E1, E2, or E4.",
  },
  {
    id: "hive-no-signal",
    title: "Hive thermostat no signal troubleshooting",
    publisher: "Hive Home",
    url: "https://support.hivehome.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240906091321357",
    sourceType: "oem-support",
    scopeNote:
      "United Kingdom Hive thermostats and receivers that have lost their local connection.",
  },
  {
    id: "drayton-wiser-handbook",
    title: "Drayton heating controls installer handbook",
    publisher: "Drayton Controls",
    url: "https://www.draytoncontrols.co.uk/sites/default/files/DL%20Installer%20Handbook%202023%20Issue%204.pdf",
    sourceType: "oem-service-manual",
    scopeNote:
      "Drayton Wiser hubs, heating relays, and the downstream control path to boilers and zone valves.",
  },
  { id: "klimaire-support", title: "Klimaire product support and downloads", publisher: "Klimaire", url: "https://www.klimaire.com/support", sourceType: "oem-support", scopeNote: "North American Klimaire model documentation and manufacturer support entry point for KSIV equipment." },
  { id: "blueridge-bmkh-floor-manual", title: "BMKH floor-ceiling user and installation manual", publisher: "Blueridge", url: "https://documents.alpinehomeair.com/product/blueridgebmkhfloorceilinguserandinstallmanual12-2023_5D26477E-DE8F-4F32-96B6-C10CBE27235A.pdf", sourceType: "oem-operation-manual", scopeNote: "December 2023 Blueridge BMKH floor-ceiling filter access, cleaning limits, and routine maintenance instructions." },
  { id: "friedrich-resources", title: "Friedrich product resources", publisher: "Friedrich", url: "https://www.friedrich.com/professional-support-page/product-resources", sourceType: "oem-support", scopeNote: "Friedrich model-specific owner, installation, and service literature for ductless and room equipment." },
  { id: "carrier-ductless-products", title: "Carrier residential ductless systems", publisher: "Carrier", url: "https://www.carrier.com/residential/en/us/products/ductless-mini-splits/", sourceType: "oem-support", scopeNote: "Carrier residential ductless product families and manufacturer support context for model-specific maintenance." },
  { id: "lennox-icomfort-alerts", title: "iComfort thermostat alert guidance", publisher: "Lennox", url: "https://www.support.lennoxicomfort.com/help/faq/faq.html", sourceType: "oem-support", scopeNote: "Lennox iComfort alert severity, display, and homeowner response guidance for connected equipment." },
  { id: "rheem-heating-support", title: "Rheem heating and cooling product support", publisher: "Rheem", url: "https://www.rheem.com/products/residential/heating-and-cooling/", sourceType: "oem-support", scopeNote: "Rheem residential furnace model and service-support context for the R96V product family." },
  { id: "ruud-r96t-product", title: "Ruud Achiever Plus R96T furnace", publisher: "Ruud", url: "https://www.ruud.com/product/ruud-gas-furnaces-achiever-plus-series-two-stage-r96t/", sourceType: "oem-support", scopeNote: "Ruud R96T Achiever Plus two-stage condensing gas-furnace family and manufacturer support context." },
  { id: "goodman-furnace-support", title: "Goodman gas furnace support", publisher: "Goodman", url: "https://www.goodmanmfg.com/products/gas-furnaces", sourceType: "oem-support", scopeNote: "Goodman residential gas-furnace family information and manufacturer service-support entry point." },
  { id: "york-affinity-furnaces", title: "York Affinity gas furnace support", publisher: "York", url: "https://www.york.com/residential-equipment/heating-and-cooling/gas-furnaces", sourceType: "oem-support", scopeNote: "York residential gas-furnace documentation and product support context for Affinity equipment." },
  { id: "bosch-ductless-manuals", title: "Bosch ductless mini-split manuals", publisher: "Bosch Home Comfort", url: "https://www.bosch-homecomfort.com/us/en/residential/technical-documentation/manuals/heating-and-cooling-heat-pump-systems/ductless-mini-split-heat-pumps-manuals/", sourceType: "oem-support", scopeNote: "Bosch North American ductless manual library separating Climate 5000 generations and refrigerant platforms." },
  { id: "vaillant-fault-codes", title: "Vaillant boiler fault code support", publisher: "Vaillant", url: "https://www.vaillant.co.uk/service/boiler-fault-codes/", sourceType: "oem-support", scopeNote: "Vaillant United Kingdom model-first fault-code support and homeowner service boundary." },
  { id: "viessmann-fault-checker", title: "Viessmann fault code checker", publisher: "Viessmann", url: "https://www.viessmann.co.uk/en/support/fault-codes.html", sourceType: "oem-support", scopeNote: "Viessmann model-specific fault-code lookup and referral guidance for boilers and heat pumps." },
  { id: "baxi-error-codes", title: "Baxi professional error-code list", publisher: "Baxi", url: "https://www.baxi.co.uk/professional/services/technical-support/error-codes", sourceType: "oem-support", scopeNote: "Baxi professional technical-support descriptions for domestic-boiler fault codes including E133." },
  { id: "ideal-boiler-support", title: "Ideal Heating boiler support", publisher: "Ideal Heating", url: "https://idealheating.com/support", sourceType: "oem-support", scopeNote: "Ideal Heating United Kingdom model manuals, fault support, and qualified-service entry point." },
  { id: "grant-aerona-support", title: "Grant Aerona product support", publisher: "Grant UK", url: "https://www.grantuk.com/support/product-support/air-source-heat-pumps/troubleshooting/", sourceType: "oem-support", scopeNote: "Grant Aerona homeowner troubleshooting index and installer referral for controller faults." },
  { id: "nibe-f2120-product", title: "NIBE F2120 air-source heat pump", publisher: "NIBE", url: "https://www.nibe.eu/en-eu/products/products-for-larger-properties/F2120", sourceType: "oem-support", scopeNote: "NIBE European F2120 product identity and manufacturer documentation context." },
  { id: "stiebel-wpl-product", title: "Stiebel Eltron WPL air-source heat pumps", publisher: "Stiebel Eltron", url: "https://www.stiebel-eltron.co.uk/en/home/products-solutions/renewables/heat_pump/air_water_heat_pumps/wpl-a-cs-premium/wpl-25-a-cs-premium.html", sourceType: "oem-support", scopeNote: "Stiebel Eltron WPL air-source product identity, documents, and service-support context." },
  { id: "ariston-clas-user", title: "Clas One user manual", publisher: "Ariston", url: "https://www.ariston.com/content/dam/ariston/it/products/boilers/condensation/clas-one-system/manuale-uso-clas-one-system.pdf", sourceType: "oem-operation-manual", scopeNote: "Ariston Clas One and Clas System One user lockout, reset, and error-display behavior." },
  { id: "daikin-altherma-homeowner", title: "Daikin Altherma homeowner support", publisher: "Daikin UK", url: "https://www.daikin.co.uk/en_gb/residential/products-and-advice/homeowner-hub.html", sourceType: "oem-support", scopeNote: "Daikin United Kingdom homeowner support for Altherma heat pumps and model-specific service referral." },
  { id: "nest-pro-guide", title: "Nest Pro installer guide", publisher: "Google Nest", url: "https://support-assets.nest.com/images/pro-faq/Nest-Pro-Installer-Guide.pdf", sourceType: "oem-service-manual", scopeNote: "Nest Learning Thermostat power-error definitions, equipment wiring context, and professional installation boundary." },
  { id: "ecobee-premium-manual", title: "Smart Thermostat Premium installation and user manual", publisher: "ecobee", url: "https://downloads.ctfassets.net/a3qyhfznts9y/55gpc6jhRTJ7KjXDjxDRzu/ad17b04461596be3b00b9c65d6e3a895/ecobee_Premium_install-setup-user_manual_v1.pdf", sourceType: "oem-operation-manual", scopeNote: "ecobee Premium temperature startup and indoor-air-quality calibration behavior, plus compressor minimum outdoor temperature, delta, staging, and minimum-cycle controls and defaults." },
  { id: "honeywell-compressor-protection", title: "T6 Pro built-in compressor protection", publisher: "Honeywell Home", url: "https://docs.honeywellhome.com/t6-pro-ii/en-us/Content/User-Manual/Built-in%20Compressor%20Protection.htm", sourceType: "oem-support", scopeNote: "Honeywell Home explanation of the T6 Pro Wait display and compressor restart delay." },
  { id: "tado-radiator-mounting", title: "Mount a tado Smart Radiator Thermostat", publisher: "tado", url: "https://support.tado.com/en/articles/3482335-how-do-i-mount-the-smart-radiator-thermostat", sourceType: "oem-support", scopeNote: "tado radiator-thermostat mounting, adapter, and valve-interface support used before calibration." },
  { id: "hive-reconnect", title: "Reconnect a Hive thermostat and receiver", publisher: "Hive Home", url: "https://support.hivehome.com/portal/app/portlets/results/viewsolution.jsp?solutionid=250725132342947", sourceType: "oem-support", scopeNote: "Hive model-specific thermostat and receiver reconnection flow, status lights, and pairing boundary." },
  { id: "drayton-wiser-demand", title: "Wiser flame symbol and heating demand", publisher: "Schneider Electric", url: "https://www.se.com/fr/fr/faqs/FAQ000133749/", sourceType: "oem-support", scopeNote: "Manufacturer explanation that the Wiser flame symbol represents heat demand rather than direct proof of burner operation." },
  { id: "mitsubishi-literature", title: "Mitsubishi Electric HVAC literature library", publisher: "Mitsubishi Electric Trane HVAC US", url: "https://www.mitsubishicomfort.com/literature", sourceType: "oem-support", scopeNote: "Manufacturer literature index used to keep Mr Slim and M-Series diagnostic scope tied to the exact indoor and outdoor model family." },
  { id: "samsung-windfree-model-support", title: "WindFree air-conditioner model support", publisher: "Samsung", url: "https://www.samsung.com/mx/support/model/AR24NSPXBWK/AX/", sourceType: "oem-support", scopeNote: "Samsung WindFree model support, manuals, and the manufacturer error-code support pathway." },
  { id: "panasonic-aquarea-use", title: "How to use Panasonic Aquarea", publisher: "Panasonic", url: "https://www.aircon.panasonic.eu/GB_en/aquareaplus/how-to-use-my-aquarea/", sourceType: "oem-support", scopeNote: "Panasonic Aquarea H- and J-generation controller operation and homeowner support context." },
  { id: "toshiba-seiya-manuals", title: "Toshiba residential manuals and downloads", publisher: "Toshiba Air Conditioning", url: "https://www.toshiba-aircon.co.uk/en/manuals-and-downloads.html", sourceType: "oem-support", scopeNote: "Toshiba model-specific operating and installation literature lookup for Seiya residential systems." },
  { id: "hitachi-yutaki-support", title: "Hitachi Yutaki heating range", publisher: "Hitachi Cooling and Heating", url: "https://www.hitachiaircon.com/uk/ranges/heating/", sourceType: "oem-support", scopeNote: "Manufacturer product and support context for United Kingdom Yutaki air-to-water heat-pump families." },
  { id: "mhi-user-manual-index", title: "Air-conditioner user's manual library", publisher: "Mitsubishi Heavy Industries Thermal Systems", url: "https://www.mhi-mth.co.jp/en/products/detail/air-conditioner_users_manual.html", sourceType: "oem-support", scopeNote: "Manufacturer model and year index for MHI residential air-conditioner operating manuals." },
  { id: "haier-forward-resources", title: "Haier Forward Series technical resources", publisher: "Haier Appliances", url: "https://www.haierappliances.com/ductless/technical-resource-center/obsolete", sourceType: "oem-support", scopeNote: "Manufacturer archive identifying Forward Series model families and their installation, service, warranty, and submittal literature." },
  { id: "hisense-hi-ultra-brochure", title: "Hi-Ultra Xtreme product literature", publisher: "Hisense HVAC", url: "https://files.hisense-usa.com/download/f2765b18ad632d19", sourceType: "oem-support", scopeNote: "Hisense North American Hi-Ultra Xtreme identity, refrigerant platform, capacities, and product-family scope." },
  { id: "tcl-air-conditioner-downloads", title: "TCL air-conditioner manuals and downloads", publisher: "TCL", url: "https://support.tcl.com/en_US/portable-air-conditioners-downloads", sourceType: "oem-support", scopeNote: "TCL United States model-specific operating-manual index used to confirm controls and airflow checks by room-air-conditioner family." },
  { id: "cooper-hunter-sophia-support", title: "Sophia cassette support resources", publisher: "Cooper and Hunter", url: "https://cooperandhunter.us/support/%5Bcategory%5D/ch-36lcct-230vi", sourceType: "oem-support", scopeNote: "Manufacturer support page for Sophia cassette owner, installation, quick-start, and troubleshooting materials." },
  { id: "della-manual-support", title: "Della manuals and troubleshooting support", publisher: "Della Home", url: "https://dellahome.com/pages/support?hcUrl=%2Fembed%2Fhelp-centers%2Fifxa93f6", sourceType: "oem-support", scopeNote: "Manufacturer support center separating manuals and troubleshooting by current Della mini-split family." },

  /* ----------------------------------- second-layer manufacturer evidence -- */
  { id: "gree-code-overview", title: "GREE Mini-Split Error Codes: Understanding What They Mean", publisher: "Gree Comfort", url: "https://www.greecomfort.com/news-and-events/understanding-gree-mini-split-error-codes/", sourceType: "oem-support", scopeNote: "Manufacturer code overview covering the pressure, mode-conflict, overcurrent, sensor, and power-module families used across Gree mini-splits." },
  { id: "daikin-error-code-service", title: "Error Codes, After Sales Service", publisher: "Daikin Industries", url: "https://www.daikin.com/products/ac/services/error_codes", sourceType: "oem-support", scopeNote: "Daikin after-sales index of malfunction-code documentation for room air conditioners, SkyAir, VRV, packaged equipment, and heat reclaim ventilators." },
  { id: "daikin-sm-ts3-codes", title: "Simple Self-Diagnosis by Malfunction Code (SM-TS3)", publisher: "Daikin Industries", url: "https://www.daikin.com/-/media/Project/Daikin/daikin_com/products/ac/services/error_codes/pdf/sm-ts3_p1-6_errorcode-pdf.pdf", sourceType: "oem-service-manual", scopeNote: "Daikin After Sales Service Division chart assigning each malfunction-code letter division to the indoor unit, the outdoor unit, or the system." },
  { id: "daikin-sm-ts3-retrieval", title: "Self-Diagnosis by Remote Controller (SM-TS3)", publisher: "Daikin Industries", url: "https://www.daikin.com/-/media/Project/Daikin/daikin_com/products/ac/services/error_codes/pdf/sm-ts3_p7-8_howtocheck-pdf.pdf", sourceType: "oem-service-manual", scopeNote: "Daikin procedures for displaying a stored malfunction code from BRC1C62 and BRC1E62 wired controllers and from ARC-series wireless remote controllers." },
  { id: "mitsubishi-msz-ap-service", title: "MSZ-AP Series Indoor Unit Service Manual", publisher: "Mitsubishi Electric", url: "https://library.mitsubishielectric.co.uk/pdf/download_full/3757", sourceType: "oem-service-manual", scopeNote: "MSZ-AP15VF to MSZ-AP71VG indoor units: operation indicator blink patterns, indoor and outdoor judgment, and the failure mode recall function." },
  { id: "mrcool-diy-generations", title: "What are the changes between the 4th and 5th generation DIY", publisher: "MRCOOL", url: "https://support.mrcool.com/hc/en-us/articles/35852694156820-What-are-the-changes-between-the-4th-and-5th-generation-DIY", sourceType: "oem-support", scopeNote: "MRCOOL statement of the refrigerant, port count, cable, and acoustic differences that separate DIY 4th generation from DIY 5th generation equipment." },
  { id: "midea-us-support", title: "Midea United States product support", publisher: "Midea America", url: "https://www.midea.com/us/support", sourceType: "oem-support", scopeNote: "Midea North American support entry point for model-specific manuals, registration, and service referral." },
  { id: "mrcool-acl2-fitting", title: "Is the ACL2 fitting compatible with the old R-410A refrigerant", publisher: "MRCOOL", url: "https://support.mrcool.com/hc/en-us/articles/41283093077012-Is-the-ACL2-Fitting-Compatible-with-the-old-R-410A-refrigerant", sourceType: "oem-support", scopeNote: "MRCOOL statement that R-454B service fittings use reverse threads so an R-410A charge cannot be connected to newer DIY equipment." },
  { id: "pioneer-diamante-quantum-codes", title: "Diamante and Quantum systems error codes", publisher: "Pioneer", url: "https://help.pioneerminisplit.com/en-US/articles/error-codes-diamante-quantum-366096", sourceType: "oem-support", scopeNote: "Pioneer code list for Diamante and Quantum systems, including the refrigerant detector, refrigerant leakage, and leak detector codes." },
  { id: "senville-ec51", title: "Error code EC 51, outdoor EEPROM parameter error", publisher: "Senville", url: "https://help.senville.com/support/solutions/articles/151000213197-error-code-ec-51-outdoor-eeprom-parameter-error", sourceType: "oem-support", scopeNote: "Senville description of the EEPROM feedback failure behind EC 51, the permitted restart, and the board replacement order it directs technicians to." },
  { id: "samsung-filter-cleaning", title: "How to clean Samsung air conditioner filters", publisher: "Samsung", url: "https://www.samsung.com/latin_en/support/home-appliances/how-to-clean-air-conditioner-filters/", sourceType: "oem-support", scopeNote: "Samsung filter cleaning interval, washing method, Wind-Free panel removal, and the filter reminder reset." },
  { id: "toshiba-ras-residential-spec", title: "RAS residential product specification", publisher: "Toshiba Air Conditioning", url: "https://www.toshiba-aircon.co.uk/content/dam/public-toshiba/gb/specification-documents/Toshiba%20-%20RAS%20-%20Residential%20Specification%20-%20FINAL%20-%20Updated%2021.07.26.pdf/_jcr_content/renditions/original./Toshiba%20-%20RAS%20-%20Residential%20Specification%20-%20FINAL%20-%20Updated%2021.07.26.pdf", sourceType: "oem-support", scopeNote: "Toshiba United Kingdom residential specification listing each Seiya S4 indoor unit against its outdoor unit, with the operating range published on the outdoor side." },
  { id: "hitachi-atw-rtu-manual", title: "Yutaki room thermostats installation and operation manual", publisher: "Hitachi Cooling and Heating", url: "https://documentation.hitachiaircon.com/eu/en/controls/atw-rtu/download/R0000032921_JCH", sourceType: "oem-service-manual", scopeNote: "ATW-RTU room thermostat alarm display, and the alarms raised for the radio link between ATW-RTU-12 and ATW-IOT-01 on Yutaki systems." },
  { id: "hisense-hi-ultra-product", title: "Hi-ULTRA ductless product page", publisher: "Hisense HVAC", url: "https://www.hisensecomfort.com/product-page/hi-ultra", sourceType: "oem-support", scopeNote: "Hisense North American Hi-ULTRA ductless refrigerant platform, capacity classes, published operating range, and the outdoor-unit heaters fitted for low ambient operation." },
  { id: "hisense-documents-search", title: "Hisense HVAC document search", publisher: "Hisense HVAC", url: "https://www.hisensecomfort.com/documents-search", sourceType: "oem-support", scopeNote: "Manufacturer document index used to tie Hisense North American ductless claims to the family and model they were published against." },
  { id: "tcl-filter-led-reset", title: "How to reset the filter LED", publisher: "TCL", url: "https://support.tcl.com/how-to-reset-the-filter-led", sourceType: "oem-support", scopeNote: "TCL reset hold times for the filter indicator, and the alternative button on models with no dedicated filter button." },
  { id: "tcl-clean-filter-light", title: "What to do when the clean filter light comes on", publisher: "TCL", url: "https://support.tcl.com/109363-common-questions/clean-filter-led-is-on-852", sourceType: "oem-support", scopeNote: "TCL filter removal, cleaning method, drying instruction, and cautions for window and portable room air conditioners." },
  { id: "klimaire-ksio-troubleshooting", title: "KSIO series troubleshooting manual", publisher: "Klimaire", url: "https://klimaire.com/media/support/ksio/ksio-series-troubleshooting.pdf", sourceType: "oem-service-manual", scopeNote: "Klimaire KSIO indoor and outdoor error display tables, including the LED combinations published against the P4 inverter compressor drive error." },
  { id: "friedrich-go-wifi-setup", title: "Friedrich Go Wi-Fi setup guide, Floating Air Pro and Premier", publisher: "Friedrich", url: "https://www.friedrich.com/hubfs/2023%20Literature%20PDFs/WiFi/93001202_00%20Friedrich%20Go%20WiFI%20Setup%20Guide%20-%20A%20Pro-Premier.pdf", sourceType: "oem-operation-manual", scopeNote: "Friedrich network requirement, remote-controller pairing sequence, and the 77 display and beep confirmation used during Wi-Fi setup." },
  { id: "friedrich-ductless-faq", title: "Ductless mini-split frequently asked questions", publisher: "Friedrich", url: "https://www.friedrich.com/consumer/support/faqs-ductless-minisplit", sourceType: "oem-support", scopeNote: "Friedrich owner guidance for Floating Air ductless systems, including the FriedrichGo application and the Wi-Fi module." },
  { id: "carrier-auxiliary-heat", title: "What is auxiliary heat", publisher: "Carrier", url: "https://www.carrier.com/residential/en/us/homeowner-resources/hvac-glossary/what-is-auxiliary-heat/", sourceType: "oem-support", scopeNote: "Carrier explanation of automatic auxiliary heat, manually selected emergency heat, and the role of backup heat during a defrost cycle." },
  { id: "carrier-heat-pump-not-heating", title: "Heat pump not heating, troubleshooting cold air", publisher: "Carrier", url: "https://www.carrier.com/us/en/residential/hvac-resources/heat-pumps/heat-pump-not-heating/", sourceType: "oem-support", scopeNote: "Carrier homeowner guidance on heat-pump heating complaints, defrost behaviour, and when backup heat is doing the work." },
  { id: "trane-access-restrictions", title: "Access restrictions on XL824, XL850, and XL1050 thermostats", publisher: "Trane Home", url: "https://support.tranehome.com/hc/en-us/articles/8209718913677-Access-Restrictions-on-XL824-850-1050-Wireless-Thermostats", sourceType: "oem-support", scopeNote: "Trane restriction levels, the one-minute inactivity lock, the setpoint limit band, and the documented temporary bypass." },
  { id: "trane-xl824-user-guide", title: "XL824 Smart Control user guide", publisher: "Trane", url: "https://www.trane.com/pdf/032-5090-06C-EN.pdf", sourceType: "oem-operation-manual", scopeNote: "Trane XL824 menu structure, screen settings, and the navigation path to access restrictions." },
  { id: "rheem-econet-user", title: "EcoNet control user manual", publisher: "Rheem", url: "https://files.rheem.com/LiteratureArchive/7086040.pdf", sourceType: "oem-operation-manual", scopeNote: "Rheem EcoNet service-information screen, active fault display, five-entry fault history, component status screens, and history clearing control." },
  { id: "amana-ptac-quick-start", title: "Amana PTAC quick start guide", publisher: "Amana", url: "https://www.amana-ptac.com/resources/quick-start-guide", sourceType: "oem-support", scopeNote: "Amana PTAC app navigation and the separate setup paths for wireless and hardwired thermostats on current J and K Series units." },
  { id: "bryant-evolution-install", title: "Evolution Connex control installation instructions", publisher: "Bryant", url: "https://legacy.myevolutionconnex.bryant.com/Content/docs/bc_installation_en.pdf", sourceType: "oem-operation-manual", scopeNote: "Bryant Evolution heat-source lockout ranges, defaults, defrost-with-backup setting, and the systems for which Heat Pump Balance is unavailable." },
  { id: "vaillant-ecotec-operating", title: "ecoTEC plus operating instructions", publisher: "Vaillant", url: "https://professional.vaillant.co.uk/downloads/product-manuals/ecotec-plus-1/ecotec-plus-combi-operating-instructions-2913947.pdf", sourceType: "oem-operation-manual", scopeNote: "Vaillant ecoTEC plus Comfort mode, C display symbol, domestic-hot-water temperature control, and controller-dependent heating settings." },
  { id: "viessmann-vitodens-quickstart", title: "Vitodens 100-W commissioning quick start guide", publisher: "Viessmann", url: "https://www.viessmann.co.uk/en/products/gas/vitodens-tools-and-services.html", sourceType: "oem-support", scopeNote: "Viessmann Vitodens 100-W control-panel landmarks, commissioning route, fault display, system pressure, and service-menu context." },
  { id: "worcester-si-operating", title: "Greenstar Si Compact ErP operating instructions", publisher: "Worcester Bosch", url: "https://www.worcester-bosch.co.uk/support/literature/download/release/6720813279/12694", sourceType: "oem-operation-manual", scopeNote: "Greenstar Si Compact pressure gauge and optional keyless filling-link procedure, including the published one to 1.5 bar stopping range." },
  { id: "baxi-boiler-pressure", title: "What should my boiler pressure be set at", publisher: "Baxi", url: "https://www.baxi.co.uk/help-and-advice/faqs/what-should-my-boiler-pressure-be-set-at", sourceType: "oem-support", scopeNote: "Baxi guidance for normal sealed-system pressure, the expected rise while heating, and the boundary between repressurising and investigating recurring pressure loss." },
  { id: "baxi-high-pressure", title: "How to fix high boiler pressure", publisher: "Baxi", url: "https://www.baxi.co.uk/help-and-advice/how-to-guides/how-to-fix-high-boiler-pressure", sourceType: "oem-support", scopeNote: "Baxi high-pressure gauge interpretation, filling-loop check, pressure-relief discharge clue, and engineer escalation when pressure remains high." },
  { id: "ideal-logic-max-user", title: "Logic Max user guide", publisher: "Ideal Heating", url: "https://idealheating.com/_gatsby/file/16b7aac0dc43b8235e2d9e55bc0e2d1e/Logic%20MAX%20Heat2%20User%20Guide%20-%2007.2023%20%28UIN%20228292%20A08%29.pdf", sourceType: "oem-operation-manual", scopeNote: "Ideal Logic Max normal-operation displays, Preheat Active message, mode controls, service-due message, and user-facing temperature controls." },
  { id: "grant-aerona-performance", title: "How to read your Grant heat pump performance data", publisher: "Grant UK", url: "https://www.grantuk.com/support/product-support/air-source-heat-pumps/general-advice/how-to-read-your-heat-pumps-performance-data/", sourceType: "oem-support", scopeNote: "Grant owner guidance for controller status, day and night mode, schedules, heating and hot-water demand, and model-specific controller differences." },
  { id: "grant-smart-controller", title: "Aerona Smart Controller operating instructions", publisher: "Grant UK", url: "https://www.grantuk.com/media/5vyb22mu/grantaerona-smart-controller-iu-uk-doc0203-rev-23-march-2026.pdf", sourceType: "oem-operation-manual", scopeNote: "Grant Aerona Smart Controller work modes, domestic-hot-water priority, scheduling, hysteresis, and the split between user and installer parameters." },
  { id: "nibe-f2120-user", title: "NIBE F2120 user manual", publisher: "NIBE", url: "https://www.nibe.eu/assets/documents/27515/331838-2.pdf", sourceType: "oem-operation-manual", scopeNote: "NIBE F2120 silent-mode purpose and output limitation, owner maintenance boundary, and power-cut guidance for the outdoor water circuit." },
  { id: "daikin-altherma-user-reference", title: "Daikin Altherma low-temperature split user reference guide", publisher: "Daikin", url: "https://www.daikin.co.uk/content/dam/document-library/user%20reference%20guide/heat/Air%20to%20water%20heat%20pump%20low%20temperature/EHVH04-16CBV%2CEHBH04-16CBV_4PEN449972-1_2016_06_User%20reference%20guide_English.pdf", sourceType: "oem-operation-manual", scopeNote: "Daikin Altherma leaving-water control methods, including fixed and weather-dependent targets, and the separation between room-temperature and water-temperature control." },
  { id: "nest-heat-pump-balance", title: "Heat Pump Balance", publisher: "Google Nest Help", url: "https://support.google.com/googlehome/answer/9248719?hl=en", sourceType: "oem-support", scopeNote: "Google Nest Heat Pump Balance eligibility, Max Comfort, Balanced, Max Savings and Off behavior, Wi-Fi dependency, and the dual-fuel exclusion." },
  { id: "honeywell-t6-isu", title: "T6 Pro installer setup reference", publisher: "Honeywell Home", url: "https://docs.honeywellhome.com/t6-pro-ii/en-us/Content/Installation-Instructions/5.%20Installer%20Setup%20%28ISU%29.htm", sourceType: "oem-operation-manual", scopeNote: "T6 Pro compressor and backup-heat outdoor lockouts, model-specific sensor requirement, compressor protection, and keypad-generation differences." },
  { id: "hive-offline-control", title: "Controlling Hive heating devices when offline", publisher: "Hive", url: "https://support.hivehome.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240325120153427", sourceType: "oem-support", scopeNote: "Hive owner instructions for retaining heat through the thermostat or receiver manual override while app control is unavailable." },
  { id: "hive-standalone-mode", title: "Standalone mode for Hive thermostats", publisher: "Hive", url: "https://support.hivehome.com/portal/app/portlets/results/viewsolution.jsp?solutionid=250103102513180", sourceType: "oem-support", scopeNote: "Hive thermostat-to-receiver standalone operation, receiver light response, and the distinction between local heating and hub-based remote features." },
  { id: "drayton-wiser-datasheet", title: "Wiser radiator thermostat data sheet", publisher: "Drayton Controls", url: "https://www.draytoncontrols.co.uk/sites/default/files/2025-04/D126-12%20Wiser%20Datasheet%202025.pdf", sourceType: "oem-support", scopeNote: "Wiser radiator thermostat twist-top boost, two-degree adjustment, app scheduling, open-window detection, device lock, and valve compatibility boundary." },
  { id: "carrier-24vna6-service", title: "24VNA6 and 25VNA4 service manual", publisher: "Carrier", url: "https://www.shareddocs.com/hvac/docs/1009/Public/01/24VNA6-25VNA4-1SM.pdf", sourceType: "oem-service-manual", scopeNote: "Carrier variable-speed outdoor units: base and expansion fault code table, outdoor thermistor resistance thresholds, suction thermistor behaviour, diagnostic code recall window, and the Comm light indication for lost communication." },
  { id: "carrier-infinity-control-install", title: "Infinity System Control installation instructions", publisher: "Carrier", url: "https://www.shareddocs.com/hvac/docs/1009/Public/08/SYSTXCCITC-07SI.pdf", sourceType: "oem-operation-manual", scopeNote: "Carrier Infinity System Control airflow verification check, blower speed and achieved airflow notices, altitude correction range, zoned duct assessment, filter pressure monitoring, and zone airflow limit settings." },
  { id: "trane-variable-speed-service-facts", title: "Variable speed heat pump service facts", publisher: "Trane", url: "https://cx1content.unilogcorp.com/cx1/view/api/asset/v1/dam/assets/ITEM/DOC/file/267/TRANE_4TWL9024A1000A_Service_Manual.pdf", sourceType: "oem-service-manual", scopeNote: "Trane variable-speed outdoor unit alert table structure with base code and sub alarm columns, soft lockout and compressor cutout behaviour, low suction pressure protection in heating, the count-based lockout, and the universal hard lockout entry. Read for the 4TWL9 model; thresholds are model specific." },
  { id: "lennox-communicating-service", title: "Residential communicating systems service manual", publisher: "Lennox", url: "https://tech.lennoxintl.com/C03e7o14l/VIu12Ch2uV/Corp1817-L8f.pdf", sourceType: "oem-service-manual", scopeNote: "Lennox alert code priorities, soft disable indication, and the alert table entries for unknown device detection, lost communication after three minutes, asynchronous reset, and the no cooling and not heating outcome codes." },
  { id: "lennox-slp98-service", title: "SLP98UHV service literature", publisher: "Lennox", url: "https://tech.lennoxintl.com/C03e7o14l/VIu12Ch2uV/1029y.pdf", sourceType: "oem-service-manual", scopeNote: "Lennox modulating furnace heat modes listed separately for single-stage, two-stage, and communicating thermostats, the published external static pressure limits for heating and cooling, and the blower cutback alert wording." },
  { id: "lennox-sl280-service", title: "SL280UHNV service literature", publisher: "Lennox", url: "https://tech.lennoxintl.com/C03e7o14l/VIu12Ch2uV/1601c.pdf", sourceType: "oem-service-manual", scopeNote: "Lennox two-stage variable-speed furnace thermostat selection switch, second-stage recognition periods for single-stage thermostat operation, blower-off delay options, and the seven-segment code display description." },
  { id: "rheem-econet-quickstart", title: "EcoNet smart thermostat quick start guide", publisher: "Rheem", url: "https://files.rheem.com/blobazrheem/wp-content/uploads/sites/2/RHM5429.1_Rheem_EcoNet_QuickStartGuide-r3-PressQuality.pdf", sourceType: "oem-operation-manual", scopeNote: "Rheem EcoNet smart thermostat wireless radio specification, supply voltage range, four-wire network terminals, daisy chain requirement, conductor size, alert icon severity classes, and wireless signal states." },
  { id: "ruud-econet-user-guide", title: "EcoNet control center user guide and installation", publisher: "Ruud", url: "https://static.globalimageserver.com/site/ruuddotcom/EcoNet/UserGuide_V2_R12.pdf", sourceType: "oem-operation-manual", scopeNote: "EcoNet control center service screen holding equipment software version, current alarms, alarm history and service alerts, plus the network daisy chain requirement and control position at one end of the network." },
  { id: "goodman-avpvc-install", title: "AVPVC series air handler installation instructions", publisher: "Goodman", url: "https://resource.ecmdi.com/is/content/Watscocom/Gemaire/goodman_avpvc24c14_article_1490603528999_en_ii.pdf", sourceType: "oem-service-manual", scopeNote: "Goodman variable-speed air handler diagnostic codes for the circulator blower motor, including the not running, lost communication, limiting condition and low airflow entries with their published causes, and the external static pressure condensate threshold." },
  { id: "goodman-comfortbridge-install", title: "AVPTC ComfortBridge installation instructions", publisher: "Goodman", url: "https://documents.alpinehomeair.com/product/AVPTC%20Installation%20Instructions%20Comfortbridge.pdf", sourceType: "oem-service-manual", scopeNote: "Goodman ComfortBridge single Y and single W input requirement, thermostat configuration rule for single-stage air conditioning and electric heat, the absence of a reversing valve input on the control board, and the airflow configuration step for non-communicating outdoor units." },
  { id: "daikin-one-commissioning", title: "Daikin One+ installation and commissioning guide", publisher: "Daikin", url: "https://daikinone.com/files/2022-09/DaikinOneplusInstallationCommissioning.pdf", sourceType: "oem-operation-manual", scopeNote: "Daikin One+ five-step setup flow, wireless network requirements including password protection and 2.4 GHz compatibility, automatic software version checking, the learn more screen version display, and the away screen state and setpoints with app-configured geofencing." },
  { id: "daikin-one-resources", title: "Daikin One thermostat professional resources", publisher: "Daikin", url: "https://daikinone.com/professionals/resources", sourceType: "oem-support", scopeNote: "Daikin manufacturer entry point for Daikin One thermostat literature and current documentation, used to keep thermostat guidance tied to published material rather than to release notes from third parties." },
  { id: "mitsubishi-mxz-service", title: "MXZ multi-zone outdoor unit technical and service manual", publisher: "Mitsubishi Electric", url: "https://www.mitsubishitechinfo.ca/sites/default/files/SH_MXZ-(4)(5)(8)C(36)(42)(48)(60)NA(HZ)_PAC-MKA(30)(31)(50)(51)BC_OCH573E_1.pdf", sourceType: "oem-service-manual", scopeNote: "Mitsubishi MXZ multi-zone service switch functions for indoor expansion valve opening at startup, at defrost, and on idle indoor units, the defrosting control setting for high humidity regions, the manual defrost interval, and the heating capacity correction for frost and defrosting." },
  { id: "honeywell-hz432-install", title: "TrueZONE HZ432 zone panel installation guide", publisher: "Honeywell Home", url: "https://www.honeywellmanual.com/pdf/caebe0ae-44bb-4404-a18d-d5d2075a1404.pdf", sourceType: "oem-operation-manual", scopeNote: "HZ432 recommended conventional thermostat classes, the blower speed reduction terminal and the zone-calling condition that de-energizes it, panel load, transformer options, and the bypass damper and discharge air sensor accessories." },
  { id: "american-standard-platinum-18", title: "AccuComfort Platinum 18 product support", publisher: "American Standard", url: "https://www.americanstandardair.com/products/air-conditioners/platinum-18-air-conditioner/", sourceType: "oem-support", scopeNote: "American Standard variable-speed Platinum 18 product family and its communicating capability, used to scope the equipment class rather than to establish component behaviour." },
] satisfies Source[];

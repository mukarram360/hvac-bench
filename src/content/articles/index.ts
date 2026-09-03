import type { TechnicalArticle } from "../schema";

import { daikinA5 } from "./daikin-a5";
import { daikinU4 } from "./daikin-u4";
import { greeE6 } from "./gree-e6";
import { greeH5 } from "./gree-h5";
import { heatPumpOutdoorUnitIcedOver } from "./heat-pump-outdoor-unit-iced-over";
import { lgCh05 } from "./lg-ch05";
import { mideaE1 } from "./midea-e1";
import { mitsubishiP8 } from "./mitsubishi-p8";
import { fujitsuRls2Blinking } from "./fujitsu-rls2-blinking";
import { samsungWindfreeC101 } from "./samsung-windfree-c101";
import { panasonicAquareaH62 } from "./panasonic-aquarea-h62";
import { toshibaSeiyaDefrostLight } from "./toshiba-seiya-defrost-light";
import { hitachiYutakiAlarm70 } from "./hitachi-yutaki-alarm-70";
import { mhiRunLightBlinking } from "./mhi-run-light-blinking";
import { haierForwardE7 } from "./haier-forward-e7";
import { hisenseUltraCode16 } from "./hisense-ultra-code-16";
import { tclAirConditionerNotCooling } from "./tcl-air-conditioner-not-cooling";
import { cooperHunterSophiaE1 } from "./cooper-hunter-sophia-e1";
import { dellaE5BySeries } from "./della-e5-by-series";
import { klimaireKsivE1 } from "./klimaire-ksiv-e1";
import { blueridgeBmkhFilterCleaning } from "./blueridge-bmkh-filter-cleaning";
import { friedrichFloatingAirReturningCode } from "./friedrich-floating-air-returning-code";
import { carrierDuctlessMaintenanceBoundary } from "./carrier-ductless-maintenance-boundary";
import { traneXl824Reboot } from "./trane-xl824-reboot";
import { americanStandardS9v2E21 } from "./american-standard-s9v2-e21";
import { lennoxXp17Alert411 } from "./lennox-xp17-alert-411";
import { rheemR96vCode57 } from "./rheem-r96v-code-57";
import { ruudR96tCode58 } from "./ruud-r96t-code-58";
import { goodmanGmvcOneFlash } from "./goodman-gmvc-one-flash";
import { amanaPtacBrCode } from "./amana-ptac-br-code";
import { yorkYp9cSevenFlashes } from "./york-yp9c-seven-flashes";
import { bryantLimitSwitchTripping } from "./bryant-limit-switch-tripping";
import { boschClimate5000Ec07 } from "./bosch-climate5000-ec07";
import { geZonelineAzhsFilter } from "./ge-zoneline-azhs-filter";
import { vaillantEcotecF75 } from "./vaillant-ecotec-f75";
import { viessmannVitodensCode59 } from "./viessmann-vitodens-code-59";
import { worcesterGreenstarEa227 } from "./worcester-greenstar-ea227";
import { baxiE133 } from "./baxi-e133";
import { idealLogicMaxL2 } from "./ideal-logic-max-l2";
import { grantAeronaControllerFault } from "./grant-aerona-controller-fault";
import { nibeF2120Alarm228 } from "./nibe-f2120-alarm-228";
import { stiebelWplRedLight } from "./stiebel-wpl-red-light";
import { aristonClasOne501 } from "./ariston-clas-one-501";
import { daikinAltherma7hSubcodes } from "./daikin-altherma-7h-subcodes";
import { nestE74 } from "./nest-e74";
import { ecobeeCalibrating } from "./ecobee-calibrating";
import { honeywellT6Wait } from "./honeywell-t6-wait";
import { tadoRadiatorE1 } from "./tado-radiator-e1";
import { hiveThermostatNoSignal } from "./hive-thermostat-no-signal";
import { draytonWiserFlameNoBoiler } from "./drayton-wiser-flame-no-boiler";
import { miniSplitFilterCleaning } from "./mini-split-filter-cleaning";
import { miniSplitFrozenCoil } from "./mini-split-frozen-coil";
import { miniSplitLeakingWater } from "./mini-split-leaking-water";
import { miniSplitMakingNoise } from "./mini-split-making-noise";
import { miniSplitNotCooling } from "./mini-split-not-cooling";
import { miniSplitNotHeating } from "./mini-split-not-heating";
import { miniSplitNotTurningOn } from "./mini-split-not-turning-on";
import { miniSplitOutdoorUnitNotRunning } from "./mini-split-outdoor-unit-not-running";
import { miniSplitRemoteNotWorking } from "./mini-split-remote-not-working";
import { miniSplitShortCycling } from "./mini-split-short-cycling";
import { miniSplitSmellsMusty } from "./mini-split-smells-musty";
import { mrcoolEl01 } from "./mrcool-el01";
import { mrcoolP0 } from "./mrcool-p0";
import { mrcoolP1 } from "./mrcool-p1";
import { pioneerE1Communication } from "./pioneer-e1-communication";
import { pioneerE1Sensor } from "./pioneer-e1-sensor";
import { senvilleEh02 } from "./senville-eh02";
import { senvillePc0a } from "./senville-pc0a";
import { btuSizingExplained } from "./btu-sizing-explained";
import { daikinVsMitsubishiMiniSplits } from "./daikin-vs-mitsubishi-mini-splits";
import { ductlessVsDuctedHeatPump } from "./ductless-vs-ducted-heat-pump";
import { greeVsMideaMiniSplits } from "./gree-vs-midea-mini-splits";
import { heatPumpOperatingTemperatures } from "./heat-pump-operating-temperatures";
import { heatPumpVsFurnace } from "./heat-pump-vs-furnace";
import { howHeatPumpDefrostWorks } from "./how-heat-pump-defrost-works";
import { howMiniSplitsWork } from "./how-mini-splits-work";
import { howToCheckMiniSplitCondensateDrain } from "./how-to-check-mini-split-condensate-drain";
import { howToCheckMiniSplitRemote } from "./how-to-check-mini-split-remote";
import { howToCleanAroundOutdoorUnit } from "./how-to-clean-around-outdoor-unit";
import { howToDocumentHvacFaultForService } from "./how-to-document-hvac-fault-for-service";
import { howToFindMiniSplitModelNumber } from "./how-to-find-mini-split-model-number";
import { howToPrepareMiniSplitForWinter } from "./how-to-prepare-mini-split-for-winter";
import { howToReadHvacDataPlate } from "./how-to-read-hvac-data-plate";
import { howToResetMiniSplitSafely } from "./how-to-reset-mini-split-safely";
import { howToTellIfMiniSplitIsInDefrost } from "./how-to-tell-if-mini-split-is-in-defrost";
import { hvacRefrigerantsExplained } from "./hvac-refrigerants-explained";
import { inverterTechnologyExplained } from "./inverter-technology-explained";
import { miniSplitLifespan } from "./mini-split-lifespan";
import { miniSplitVsCentralAir } from "./mini-split-vs-central-air";
import { mitsubishiVsFujitsuMiniSplits } from "./mitsubishi-vs-fujitsu-mini-splits";
import { mrcoolVsPioneerMiniSplits } from "./mrcool-vs-pioneer-mini-splits";
import { seer2Explained } from "./seer2-explained";
import { senvilleVsPioneerMiniSplits } from "./senville-vs-pioneer-mini-splits";
import { singleZoneVsMultiZoneMiniSplit } from "./single-zone-vs-multi-zone-mini-split";

/**
 * One module per article, with no exceptions.
 *
 * Two generations of this file tried to hold content as data and derive the
 * prose from it. The first held every article as a single line and built the
 * reasoning from a template; the second kept twenty-six guides, procedures,
 * and comparisons in one `expanded-library.ts` whose `page()` function wrote
 * the sections, the branches, the safety list, and the FAQ closers for all of
 * them from a handful of seed strings. Both produced pages that differed by a
 * noun and agreed on everything else.
 *
 * There is now no shared prose producer anywhere in this directory. `publish`
 * fills in publication facts only: the desk, initial publication date, and the
 * evidence class read from the cited records. Review provenance is supplied by
 * each reviewed article. Every sentence a reader sees is written in the module
 * named after the page it appears on, and two tests hold that line:
 * template-leakage.test.ts and prose-similarity.test.ts.
 */
export const articles = [
  greeE6,
  greeH5,
  daikinU4,
  daikinA5,
  lgCh05,
  mideaE1,
  mrcoolEl01,
  mrcoolP1,
  mrcoolP0,
  pioneerE1Communication,
  pioneerE1Sensor,
  senvilleEh02,
  senvillePc0a,
  mitsubishiP8,
  fujitsuRls2Blinking,
  samsungWindfreeC101,
  panasonicAquareaH62,
  toshibaSeiyaDefrostLight,
  hitachiYutakiAlarm70,
  mhiRunLightBlinking,
  haierForwardE7,
  hisenseUltraCode16,
  tclAirConditionerNotCooling,
  cooperHunterSophiaE1,
  dellaE5BySeries,
  klimaireKsivE1,
  blueridgeBmkhFilterCleaning,
  friedrichFloatingAirReturningCode,
  carrierDuctlessMaintenanceBoundary,
  traneXl824Reboot,
  americanStandardS9v2E21,
  lennoxXp17Alert411,
  rheemR96vCode57,
  ruudR96tCode58,
  goodmanGmvcOneFlash,
  amanaPtacBrCode,
  yorkYp9cSevenFlashes,
  bryantLimitSwitchTripping,
  boschClimate5000Ec07,
  geZonelineAzhsFilter,
  vaillantEcotecF75,
  viessmannVitodensCode59,
  worcesterGreenstarEa227,
  baxiE133,
  idealLogicMaxL2,
  grantAeronaControllerFault,
  nibeF2120Alarm228,
  stiebelWplRedLight,
  aristonClasOne501,
  daikinAltherma7hSubcodes,
  nestE74,
  ecobeeCalibrating,
  honeywellT6Wait,
  tadoRadiatorE1,
  hiveThermostatNoSignal,
  draytonWiserFlameNoBoiler,
  miniSplitNotCooling,
  miniSplitNotHeating,
  miniSplitLeakingWater,
  miniSplitRemoteNotWorking,
  miniSplitNotTurningOn,
  miniSplitFrozenCoil,
  heatPumpOutdoorUnitIcedOver,
  miniSplitOutdoorUnitNotRunning,
  miniSplitMakingNoise,
  miniSplitSmellsMusty,
  miniSplitShortCycling,
  miniSplitFilterCleaning,

  /* ------------------------------------------------------------- guides -- */
  howMiniSplitsWork,
  howHeatPumpDefrostWorks,
  seer2Explained,
  btuSizingExplained,
  inverterTechnologyExplained,
  miniSplitLifespan,
  heatPumpOperatingTemperatures,
  hvacRefrigerantsExplained,

  /* ------------------------------------------------------------ how-to -- */
  howToFindMiniSplitModelNumber,
  howToResetMiniSplitSafely,
  howToCheckMiniSplitRemote,
  howToPrepareMiniSplitForWinter,
  howToCleanAroundOutdoorUnit,
  howToTellIfMiniSplitIsInDefrost,
  howToReadHvacDataPlate,
  howToCheckMiniSplitCondensateDrain,
  howToDocumentHvacFaultForService,

  /* ------------------------------------------------------- comparisons -- */
  daikinVsMitsubishiMiniSplits,
  mitsubishiVsFujitsuMiniSplits,
  greeVsMideaMiniSplits,
  mrcoolVsPioneerMiniSplits,
  senvilleVsPioneerMiniSplits,
  miniSplitVsCentralAir,
  singleZoneVsMultiZoneMiniSplit,
  heatPumpVsFurnace,
  ductlessVsDuctedHeatPump,
] satisfies TechnicalArticle[];

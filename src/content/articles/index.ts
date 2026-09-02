import type { TechnicalArticle } from "../schema";

import { daikinA5 } from "./daikin-a5";
import { daikinU4 } from "./daikin-u4";
import { greeE6 } from "./gree-e6";
import { greeH5 } from "./gree-h5";
import { heatPumpOutdoorUnitIcedOver } from "./heat-pump-outdoor-unit-iced-over";
import { lgCh05 } from "./lg-ch05";
import { mideaE1 } from "./midea-e1";
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
import { expandedArticles } from "./expanded-library";

/**
 * One module per article.
 *
 * The previous version of this file held every article as a single line of
 * data and generated the reasoning from a shared template, which is why two
 * dozen pages shared a decision table and why FAQ questions were built out of
 * headlines. Splitting the library into modules makes the alternative
 * structural: a page is written where it lives, for the question it answers.
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
  ...expandedArticles,
] satisfies TechnicalArticle[];

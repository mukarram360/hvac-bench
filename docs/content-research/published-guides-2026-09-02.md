# Published guide research ledger

Date opened: 2026-09-02

This ledger freezes the 25 published routes in scope and records the research question for each page. Technical claims are added only after the cited OEM or public authority document is opened and its product scope is confirmed.

## Verified evidence set

The following evidence was opened or independently resolved on 2026-09-02. Source IDs refer to `src/content/sources.ts`.

| Claim family | Verified source IDs | Scope decision |
| --- | --- | --- |
| Remote batteries, polarity, matched replacement, line of sight, reset, receiver cleanliness, and replacement | `fujitsu-rls2-operation`, `fujitsu-troubleshooting`, `trane-mitsubishi-remote`, `lg-console-owner`, `daikin-mxs-engineering` | General sequence may be cross brand. Battery type, reset button, manual control, range, and compatible replacement remain model dependent. |
| Cooling performance and frozen coil clues | `fujitsu-troubleshooting`, `trane-mini-split-not-cooling`, `trane-mini-split-refrigerant`, `fujitsu-aduh-operation`, `lg-console-owner` | Settings and accessible airflow checks are cross brand. Refrigerant, sensors, boards, and internal cleaning are professional diagnostic areas. |
| Heating, warm up, defrost, and outdoor ice | `fujitsu-troubleshooting`, `fujitsu-aduh-operation`, `trane-mini-split-not-heating`, `lg-console-owner` | Warm up, fan pause, water, steam, and temporary defrost interruption can be normal. Persistent solid ice or no return to heat is not classified as normal. |
| No start and missing outdoor operation | `fujitsu-troubleshooting`, `trane-mini-split-compressor`, `fujitsu-aduh-operation`, `trane-mitsubishi-remote` | Indoor response, controller response, demand, and normal restart delay must be separated before an outdoor component is blamed. A tripped breaker is a stop point, not a repeated reset instruction. |
| Inverter modulation and short cycling | `trane-mini-split-modulation`, `trane-mini-split-sizing`, `fujitsu-troubleshooting`, `fujitsu-aduh-operation` | Fan continuation and variable compressor output can be normal. Repeated hard starts with poor comfort require timing evidence and professional diagnosis. |
| Condensate and water leaks | `gree-water-leak`, `trane-mini-split-leak`, `fujitsu-rls2-operation`, `lg-console-owner` | Cooling condensate is expected to drain. Water from the indoor cabinet or wall is not. Drain disassembly, pump work, mounting correction, and sealed system diagnosis are service work. |
| Normal and warning sounds | `fujitsu-troubleshooting`, `fujitsu-aduh-operation`, `lg-console-owner` | Brief flow, expansion, defrost, and fan changes can be normal when performance remains normal. Grinding, repeated impact, electrical buzzing, or hissing with lost performance require escalation. |
| Odor and moisture | `fujitsu-troubleshooting`, `trane-mini-split-smells`, `gree-water-leak`, `fujitsu-filter-manual` | Room odors can be re-emitted. Persistent mustiness with moisture or visible internal contamination needs deeper cleaning and moisture diagnosis. Burning odor is an immediate stop condition. |
| Filter care | `fujitsu-filter-manual`, `fujitsu-aduh-operation`, `trane-mini-split-filters`, `trane-ductless-maintenance`, `lg-console-owner` | Filter construction and wet cleaning vary by model. Complete drying and correct orientation are universal safe principles only when the manual identifies the filter as homeowner removable. |
| Gree E6 and H5 | `gree-e6-guide`, `gree-multi21-service`, `gree-h5-guide` | E6 communication scope follows the named residential and Multi21+ material. H5 identifies IPM protection, not a replacement verdict. Powered and refrigerant tests remain technician work. |
| Daikin U4 and A5 | `daikin-u4-service`, `daikin-a5-service` | U4 is scoped to cited SkyAir RZR-P and RZQ-P(9). A5 is scoped to the cited 15 and 19 Series cooling freeze or heating peak cut control. |
| LG CH05 | `lg-general-service` | CH05 is scoped to the single zone service literature and is not merged with every LG communication display context. |
| Midea E1 | `midea-aurora-service` | E1 is scoped to the cited Aurora Xtreme 36,000 BTU cooling only model. Other Midea categories may assign E1 differently. |
| MRCOOL EL01, P1, and P0 | `mrcool-code-table`, `mrcool-e1-guide`, `mrcool-p1-guide`, `mrcool-p0-guide` | Display and meaning are generation aware. The official pages contain live tests, but HVAC Bench publishes only identification, safe observations, one documented wait where applicable, and the technician boundary. |
| Pioneer E1 communication and E1 or E2 sensors | `pioneer-quantum-e1`, `pioneer-current-e1-e2` | The discontinued Quantum communication meaning and the listed current sensor meaning require separate pages and prominent family checks. |
| Senville EH02 and PC0A | `senville-eh02`, `senville-leto-codes` | EH02 is scoped to the supported LETO and AURA AC fan design. PC0A follows the LETO protection table and does not establish one failed part. |

## Error code guides

### `/brands/gree/e6-error-code/`

Primary intent: Identify the documented meaning of Gree E6 and decide whether a safe restart or service is appropriate.

Questions to resolve: Which Gree families assign E6 to communication, what stops operating, which parts of the communication path the OEM lists, and what information service needs.

Overlap boundary: This page defines Gree E6. The cross brand not turning on page handles symptoms without a confirmed code.

Evidence target: Gree service manuals and official E6 support for the named residential families.

Planned blocks: Exact scope, signal path figure, decision table, reset limit, service handoff, FAQs.

Status: Baseline captured.

### `/brands/gree/h5-error-code/`

Primary intent: Explain Gree H5 protection without treating the code as proof of a failed inverter module.

Questions to resolve: Documented code definition, affected families, observable airflow contributors, electrical and refrigerant diagnostic categories, and restart limits.

Overlap boundary: The frozen coil and not cooling guides address symptoms without a confirmed H5 display.

Evidence target: Official Gree H5 support plus an applicable service manual.

Planned blocks: Protection definition, airflow branch, persistent code branch, unsafe actions, service handoff, FAQs.

Status: Baseline captured.

### `/brands/daikin/u4-error-code/`

Primary intent: Define Daikin U4 for the documented system family and explain the transmission path.

Questions to resolve: Covered SkyAir or split families, communication timing, network context, power and wiring contributors, and reset direction.

Overlap boundary: This route is code specific. The remote and not turning on guides cover user controls and general response problems.

Evidence target: Current Daikin service literature for the exact named series.

Planned blocks: Family notice, communication path, multi unit context, safe observations, technician handoff, FAQs.

Status: Baseline captured.

### `/brands/daikin/a5-error-code/`

Primary intent: Explain Daikin A5 freeze prevention or heating peak cut control for the documented family.

Questions to resolve: Cooling and heating meanings, affected models, airflow contributors, thermistor and control diagnostic scope, and icing stop point.

Overlap boundary: The frozen coil guide covers an observed iced coil when no Daikin A5 code is confirmed.

Evidence target: Daikin service manual and operation literature for the cited 15 and 19 Series or verified replacement family scope.

Planned blocks: Cooling versus heating comparison, safe airflow checks, thawing warning, service handoff, FAQs.

Status: Baseline captured.

### `/brands/lg/ch05-error-code/`

Primary intent: Identify LG CH05 communication failure in the documented single zone context.

Questions to resolve: Difference from related CH53 and CH93 contexts, affected system type, power and signal contributors, and electrical safety timing.

Overlap boundary: This page does not diagnose general LG cooling or remote problems without CH05.

Evidence target: Official LG single zone service manual and current support where available.

Planned blocks: Code family scope, related code note, signal path, safe observations, service handoff, FAQs.

Status: Baseline captured.

### `/brands/midea/e1-error-code/`

Primary intent: Define Midea E1 only for the cited Aurora Xtreme family and prevent cross product misapplication.

Questions to resolve: Exact model, feedback timing, documented wiring or board diagnostic areas, restart instruction, and other family ambiguity.

Overlap boundary: The Pioneer sensor E1 page and MRCOOL E1 page cover different manufacturers and meanings.

Evidence target: Official Midea Aurora Xtreme service documentation.

Planned blocks: Prominent ambiguity notice, communication path, one restart limit, model collection, FAQs.

Status: Baseline captured.

### `/brands/mrcool/el01-e1-error-code/`

Primary intent: Explain MRCOOL EL01 or E1 communication malfunction by generation.

Questions to resolve: Generation display differences, official breaker off wait, connection and board diagnostic areas, and support handoff.

Overlap boundary: MRCOOL P0 and P1 pages cover inverter and voltage protection, not communication.

Evidence target: Official MRCOOL code table and EL01 or E1 support guide.

Planned blocks: Generation comparison, reset decision, signal path, stop point, service information, FAQs.

Status: Baseline captured.

### `/brands/mrcool/p1-pc01-error-code/`

Primary intent: Explain MRCOOL P1 or PC01 voltage protection without teaching live voltage testing.

Questions to resolve: 115 volt, 230 volt, single zone, and multi zone scope; official code definition; breaker behavior; and qualified diagnostic boundary.

Overlap boundary: The not turning on guide handles a dead system without a confirmed voltage protection code.

Evidence target: Official MRCOOL P1 or PC01 support and code tables.

Planned blocks: System class comparison, safe supply observations, breaker stop point, service handoff, FAQs.

Status: Baseline captured.

### `/brands/mrcool/p0-pc00-error-code/`

Primary intent: Explain MRCOOL P0 or PC00 inverter protection as a diagnostic area, not a replacement verdict.

Questions to resolve: Supported families, abnormal voltage or current context, wiring and compressor diagnostic categories, and restart limits.

Overlap boundary: The outdoor unit not running page addresses missing outdoor operation without a confirmed code.

Evidence target: Official MRCOOL P0 or PC00 support and code tables.

Planned blocks: Protection path, observable conditions, unsafe stored energy warning, service handoff, FAQs.

Status: Baseline captured.

### `/brands/pioneer/e1-communication-error-code/`

Primary intent: Define Pioneer Quantum E1, EL01, or EL 01 as a communication error for that family.

Questions to resolve: Quantum generation scope, displayed variants, official restart guidance, communication path, and support information.

Overlap boundary: The separate Pioneer E1 sensor page must remain visibly distinct in title, family, and direct answer.

Evidence target: Official Pioneer Quantum service or support documentation.

Planned blocks: Same code warning, family identity check, signal path, reset limit, FAQs.

Status: Baseline captured.

### `/brands/pioneer/e1-temperature-sensor-error-code/`

Primary intent: Define Pioneer E1 or E2 room temperature sensor failure for the currently documented families.

Questions to resolve: Which current models use E1 or E2, sensor definition, observable behavior, connector and board diagnostic categories, and restart limit.

Overlap boundary: The Pioneer Quantum communication E1 route covers a different product family and meaning.

Evidence target: Current official Pioneer error code support or service manual.

Planned blocks: Family comparison, sensor role, safe observations, no part guessing warning, service handoff, FAQs.

Status: Baseline captured.

### `/brands/senville/eh02-error-code/`

Primary intent: Explain Senville EH02 zero crossing signal detection failure in safe language.

Questions to resolve: Covered families, official definition, supply and control diagnostic categories, operation effect, and reset direction.

Overlap boundary: The MRCOOL P1 route covers a different manufacturer's voltage protection code.

Evidence target: Official Senville EH02 support and applicable service literature.

Planned blocks: Plain language definition, electrical boundary, one restart decision, service handoff, FAQs.

Status: Baseline captured.

### `/brands/senville/pc0a-error-code/`

Primary intent: Explain Senville PC0A condenser high temperature protection and its safe airflow observations.

Questions to resolve: Documented family, protection trigger description, outdoor airflow contributors, sensor or refrigerant diagnostic categories, and restart limit.

Overlap boundary: The outdoor iced over and not cooling guides cover visible symptoms without PC0A.

Evidence target: Official Senville code material and applicable OEM service literature.

Planned blocks: Protection path, outdoor condition branch, unsafe cleaning limits, service handoff, FAQs.

Status: Baseline captured.

## Cross brand troubleshooting guides

### `/mini-split-not-cooling/`

Primary intent: Find why a mini split runs but does not cool and complete safe checks before service.

Questions to resolve: Mode and setpoint, normal delay, fan only response, filters and airflow, room load, ice or water clues, outdoor response, code collection, and when to stop.

Overlap boundary: Frozen coil, leaking water, outdoor unit not running, and error code pages own their deeper diagnostic paths.

Evidence target: Operation and troubleshooting manuals from at least three relevant OEMs plus government cooling guidance for general principles.

Planned blocks: Observation branches, ordered checks, decision table, normal versus fault comparison, service handoff, FAQs.

Status: Baseline captured.

### `/mini-split-not-heating/`

Primary intent: Separate normal warm up or defrost behavior from a persistent mini split heating problem.

Questions to resolve: Heat mode and setpoint, coil warm up, defrost, outdoor temperature and capacity limits, airflow, fault display, and persistent no heat.

Overlap boundary: Outdoor unit iced over owns the persistent ice decision. Not turning on owns a completely unresponsive system.

Evidence target: Heat pump operation manuals from at least three OEMs plus public authority heat pump care guidance.

Planned blocks: Normal versus fault comparison, cold weather branches, ordered checks, defrost link, service handoff, FAQs.

Status: Baseline captured.

### `/mini-split-leaking-water/`

Primary intent: Identify the observable source of indoor mini split water and prevent property damage.

Questions to resolve: Cabinet, wall, line cover, drain outlet, pump, frozen coil, filter, installation level, and shutdown decisions.

Overlap boundary: Frozen coil owns recurrent ice causes. Filter cleaning owns routine removable filter care.

Evidence target: Drainage and troubleshooting guidance from multiple OEM manuals.

Planned blocks: Leak location figure, observation table, immediate protection steps, unsafe drain actions, service handoff, FAQs.

Status: Baseline captured.

### `/mini-split-remote-not-working/`

Primary intent: Decide whether a remote, infrared path, receiver, settings state, or broader unit power problem prevents control.

Questions to resolve: Blank display, weak batteries with an active LCD, polarity and contacts, reset, transmitter test limits, range and light, locks and timers, manual operation, power, compatibility, and beep without command change.

Overlap boundary: Not turning on owns a unit that also fails manual operation and shows no power response.

Evidence target: Official controller and operation manuals from Fujitsu, Daikin, Mitsubishi Electric or Trane, plus other applicable OEMs.

Planned blocks: Remote signal path figure, two primary branches, six row decision table, ordered checks, compatibility section, six FAQs.

Status: Baseline captured.

### `/mini-split-not-turning-on/`

Primary intent: Diagnose a mini split that appears dead or does not start after a command.

Questions to resolve: Indoor response, remote or wired control, timer, supply, breaker stop point, restart delay, outdoor delay, fault display, and manual operation where documented.

Overlap boundary: Remote not working owns handset and infrared diagnosis. Outdoor unit not running owns a responsive indoor unit with no outdoor operation.

Evidence target: Operation and troubleshooting manuals from multiple OEMs.

Planned blocks: Dead versus delayed branches, decision table, safe power check, breaker warning, service handoff, FAQs.

Status: Baseline captured.

### `/mini-split-frozen-coil/`

Primary intent: Safely respond to ice on the indoor coil and understand why recurring ice needs diagnosis.

Questions to resolve: Airflow, filter, blocked louvers, blower, sensor, refrigerant, thawing, water protection, and monitored restart.

Overlap boundary: Not cooling owns general low performance. Leaking water owns water without confirmed coil ice.

Evidence target: OEM freeze protection, troubleshooting, and maintenance manuals from multiple brands.

Planned blocks: Cause map, thaw procedure, no forced heat warning, recurrence table, service handoff, FAQs.

Status: Baseline captured.

### `/heat-pump-outdoor-unit-iced-over/`

Primary intent: Tell normal heat pump frost and defrost from persistent outdoor ice.

Questions to resolve: Light frost, steam and water, fan pause, solid encasement, snow clearance, frozen drainage, no heat, and unsafe deicing.

Overlap boundary: Not heating owns indoor comfort diagnosis without persistent outdoor ice.

Evidence target: Defrost and winter operation manuals from multiple OEMs plus public authority heat pump care guidance.

Planned blocks: Normal versus abnormal comparison figure, observation table, safe clearance checks, stop point, FAQs.

Status: Baseline captured.

### `/mini-split-outdoor-unit-not-running/`

Primary intent: Decide whether missing outdoor operation is normal delay, no demand, multi zone behavior, or a fault.

Questions to resolve: Indoor response, mode conflict, setpoint demand, restart delay, defrost, multi zone priority, code display, outdoor power, and breaker behavior.

Overlap boundary: Not turning on owns a dead indoor unit. Not cooling and not heating own delivered comfort symptoms.

Evidence target: Multi zone and single zone operation manuals from multiple OEMs.

Planned blocks: Indoor response branches, normal versus fault table, safe observations, service handoff, FAQs.

Status: Baseline captured.

### `/mini-split-making-noise/`

Primary intent: Classify a mini split sound as normal operation, a maintenance clue, or an urgent warning.

Questions to resolve: Refrigerant flow, expansion, fan, condensate, defrost, cabinet movement, grinding, impact, buzzing, hissing with performance loss, and burning odor.

Overlap boundary: Musty odor owns odor and moisture. Outdoor ice owns defrost and icing behavior.

Evidence target: OEM operation manuals with normal sound notes and official troubleshooting guidance.

Planned blocks: Sound classification table, location and timing log, urgent stop branch, service handoff, FAQs.

Status: Baseline captured.

### `/mini-split-smells-musty/`

Primary intent: Distinguish absorbed room odor and routine filter soil from persistent internal moisture or an urgent electrical odor.

Questions to resolve: Room sources, filter, drain and water, coil or blower contamination, drying, deep cleaning limits, burning odor, and health concern wording.

Overlap boundary: Filter cleaning owns the routine procedure. Leaking water owns active condensate leakage.

Evidence target: OEM odor, filter, drainage, and cleaning guidance.

Planned blocks: Odor branches, safe cleaning boundary, moisture clues, urgent stop notice, service handoff, FAQs.

Status: Baseline captured.

### `/mini-split-short-cycling/`

Primary intent: Decide whether observed cycling is normal inverter modulation or repeated abnormal starts and stops.

Questions to resolve: Compressor versus fan behavior, setpoint satisfaction, mode changes, timer, airflow, sensing, sizing, electrical or refrigerant faults, and useful run logs.

Overlap boundary: Not cooling and not heating own the primary comfort complaint. This page owns the timing pattern.

Evidence target: OEM inverter operation and troubleshooting material plus applicable public authority guidance.

Planned blocks: Timeline figure, normal versus fault comparison, observation log, safe checks, service handoff, FAQs.

Status: Baseline captured.

## Maintenance guide

### `/mini-split-filter-cleaning/`

Primary intent: Clean and refit a mini split filter without damaging the filter or reaching unsafe internal parts.

Questions to resolve: Exact manual, shutdown, panel access, orientation, dry versus washable media, vacuuming, water and detergent, drying, refitting, reminder reset, interval, replacement compatibility, and deeper cleaning.

Overlap boundary: Musty odor owns persistent odor. Not cooling owns performance diagnosis after routine airflow care is complete.

Evidence target: Filter maintenance instructions from several OEM operation manuals plus public authority maintenance guidance.

Planned blocks: Ordered procedure, filter type decision table, drying warning, compatibility section, HowTo parity, service handoff, FAQs.

Status: Baseline captured.

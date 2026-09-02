import type { GlossaryTermInput } from "../schema";

import { airflow } from "./airflow";
import { components } from "./components";
import { controls } from "./controls";
import { efficiency } from "./efficiency";
import { measurement } from "./measurement";
import { refrigeration } from "./refrigeration";
import { service } from "./service";
import { systemTypes } from "./system-types";

/**
 * One module per subject, because the glossary is now sixty-odd standalone
 * pages rather than a single scrolling list, and a subject is the unit an
 * editor actually works on.
 *
 * Order here is the order a reader meets the vocabulary: what the equipment
 * is, what it is made of, what flows through it, what moves the air, how it
 * is controlled, how it is measured, how it is rated, and what the law and
 * the manufacturer require of whoever services it.
 */
export const glossary = [
  ...systemTypes,
  ...components,
  ...refrigeration,
  ...airflow,
  ...controls,
  ...measurement,
  ...efficiency,
  ...service,
] satisfies GlossaryTermInput[];

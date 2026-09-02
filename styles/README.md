# Editorial styles

Rules for the prose gate. `npm run lint:prose` renders the content model to
Markdown and runs [Vale](https://github.com/vale-cli/vale) (MIT) over it, using
the configuration in `.vale.ini` at the repository root.

## HVACBench

Written for this site. These are the rules that carry the house standard, and
each file says in a comment why it exists and what it deliberately leaves out.

| Rule | Level | What it holds |
| --- | --- | --- |
| `BannedPhrases` | error | Filler that carries no information: "it is important to", "when it comes to", "in conclusion", "delve", "comprehensive guide", "seamless", "robust", "game changer", and the rest of the list. |
| `TemplateLeak` | error | Sentence stems produced by the generator this library used to run on: "Use this guide when", "The answer may change when", "This observation belongs to", "Keep that decision tied to", "That answer is scoped to", and the others. |
| `Prevalence` | error | Frequency claims the evidence record cannot support: "usually", "typically", "most common", "almost always", "main culprit". Mechanism can be sourced from documentation; how often something happens cannot. |
| `SoftFrequency` | warning | "Often", "rarely", and their relatives, which claim a tendency rather than a default. Sometimes the honest word, so an editor decides each one. |
| `VagueQuantifier` | error | Words that assert a size or an obviousness without measuring it: "significantly", "substantially", "obviously", "clearly", "relatively". |
| `Dashes` | error | No em dash, no en dash, no double hyphen. |
| `SentenceLength` | warning | Sentences past 42 words. |

## Third-party styles

Vendored rather than fetched at lint time, so the gate gives the same answer
offline and in CI. Refresh them with `npm run lint:prose -- --sync`, which runs
`vale sync` against the package list in `.vale.ini`.

| Package | Source | Licence |
| --- | --- | --- |
| `write-good` | [errata-ai/write-good](https://github.com/errata-ai/write-good) | MIT |
| `proselint` | [errata-ai/proselint](https://github.com/errata-ai/proselint) | BSD-3-Clause |
| `Readability` | [errata-ai/readability](https://github.com/errata-ai/readability) | MIT |

Both third-party styles are tuned in `.vale.ini` rather than accepted whole.
The rules turned off are the ones that fight technical writing: `E-Prime` bans
the verb "to be", which is unusable in a glossary; `Passive` is wrong for
procedure text where the actor is the equipment; `TooWordy` flags "purchase",
"maximum", and "requirement", which are the right words here; `Hedging` flags
"may" and "can", which are what keep a mechanism claim from becoming a
prevalence claim. Each exclusion carries its reasoning in `.vale.ini`.

`config/vocabularies/HVACBench/accept.txt` holds the equipment vocabulary, so
brand names, refrigerant designations, and metric abbreviations are not treated
as errors.

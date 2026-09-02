import { describe, expect, it } from "vitest";

import { answerQuestion } from "./answer";
import { buildPassageIndex } from "./passages";
import { parseQuery } from "./query";
import { retrieve } from "./retrieve";

/**
 * The assistant answers only from what HVAC Bench has published. That makes
 * two failure modes the important ones to test: answering a question the site
 * does not cover, and answering it with the wrong brand's material. A wrong
 * brand answer is worse than no answer, because error codes genuinely mean
 * different things between manufacturers.
 */

const index = buildPassageIndex();

function ask(question: string) {
  return answerQuestion(question, index);
}

describe("query understanding", () => {
  it("reads a brand and an error code out of a plain question", () => {
    const parsed = parseQuery("what does gree e6 mean");
    expect(parsed.brand).toBe("gree");
    expect(parsed.errorCodes).toContain("E6");
  });

  it("handles the spacing people actually type", () => {
    for (const raw of ["gree e 6", "GREE E-6", "gree  e6?", "e6 gree"]) {
      const parsed = parseQuery(raw);
      expect(parsed.errorCodes, raw).toContain("E6");
      expect(parsed.brand, raw).toBe("gree");
    }
  });

  it("recovers from common misspellings of a brand", () => {
    expect(parseQuery("diakin u4 error").brand).toBe("daikin");
    expect(parseQuery("mr cool el01").brand).toBe("mrcool");
    expect(parseQuery("mrcool e1 code").brand).toBe("mrcool");
    expect(parseQuery("senvile eh02").brand).toBe("senville");
  });

  it("maps everyday wording onto the symptom it describes", () => {
    expect(parseQuery("my mini split is blowing warm air").problemTypes).toContain("not-cooling");
    expect(parseQuery("aircon wont turn on").problemTypes).toContain("not-turning-on");
    expect(parseQuery("water dripping from my ac inside").problemTypes).toContain("water-leak");
    expect(parseQuery("unit keeps turning on and off").problemTypes).toContain("short-cycling");
    expect(parseQuery("theres ice on the indoor coil").problemTypes).toContain(
      "frozen-indoor-coil",
    );
  });

  it("recognises a procedure request that crosses the safety boundary", () => {
    expect(parseQuery("how do i recharge the refrigerant myself").hazardous).toBe(true);
    expect(parseQuery("how to bypass the contactor on my condenser").hazardous).toBe(true);
    expect(parseQuery("can I add freon to my mini split").hazardous).toBe(true);
    // Asking whether refrigerant explains a symptom is a normal question.
    expect(parseQuery("could low refrigerant cause a frozen coil").hazardous).toBe(false);
  });
});

describe("retrieval accuracy", () => {
  const cases: { question: string; expected: string }[] = [
    { question: "gree e6 error code", expected: "/brands/gree/e6-error-code/" },
    { question: "what does h5 mean on my gree", expected: "/brands/gree/h5-error-code/" },
    { question: "daikin u4", expected: "/brands/daikin/u4-error-code/" },
    { question: "daikin a5 freeze up", expected: "/brands/daikin/a5-error-code/" },
    { question: "lg ch05", expected: "/brands/lg/ch05-error-code/" },
    { question: "mrcool p1 voltage", expected: "/brands/mrcool/p1-pc01-error-code/" },
    { question: "mrcool pc00", expected: "/brands/mrcool/p0-pc00-error-code/" },
    { question: "senville pc 0a", expected: "/brands/senville/pc0a-error-code/" },
    { question: "senville eh 02", expected: "/brands/senville/eh02-error-code/" },
    { question: "my mini split is not cooling", expected: "/mini-split-not-cooling/" },
    { question: "heat pump not heating the house", expected: "/mini-split-not-heating/" },
    { question: "water leaking from indoor unit", expected: "/mini-split-leaking-water/" },
    { question: "remote control not working", expected: "/mini-split-remote-not-working/" },
    { question: "mini split wont turn on", expected: "/mini-split-not-turning-on/" },
    { question: "ice on indoor coil", expected: "/mini-split-frozen-coil/" },
    { question: "outdoor unit covered in ice", expected: "/heat-pump-outdoor-unit-iced-over/" },
    { question: "outdoor unit not running", expected: "/mini-split-outdoor-unit-not-running/" },
    { question: "mini split making a gurgling noise", expected: "/mini-split-making-noise/" },
    { question: "ac smells musty", expected: "/mini-split-smells-musty/" },
    { question: "short cycling every few minutes", expected: "/mini-split-short-cycling/" },
    { question: "how do i clean the filter", expected: "/mini-split-filter-cleaning/" },
  ];

  for (const { question, expected } of cases) {
    it(`answers "${question}" from ${expected}`, () => {
      const result = ask(question);
      expect(result.answered, `${question} returned no answer`).toBe(true);
      expect(result.links[0]?.path).toBe(expected);
    });
  }

  it("retrieves the right page for at least nineteen of the twenty-one cases", () => {
    const hits = cases.filter((entry) => ask(entry.question).links[0]?.path === entry.expected);
    expect(hits.length).toBeGreaterThanOrEqual(19);
  });
});

describe("brand and code contamination", () => {
  it("never answers a Gree question with another brand's page", () => {
    const result = ask("gree e6");
    for (const link of result.links) {
      expect(link.path.includes("/daikin/"), link.path).toBe(false);
      expect(link.path.includes("/mrcool/"), link.path).toBe(false);
    }
  });

  it("does not use the Pioneer sensor meaning for a Quantum question", () => {
    const result = ask("pioneer quantum e1 communication error");
    expect(result.links[0]?.path).toBe("/brands/pioneer/e1-communication-error-code/");
  });

  it("does not answer a code we hold for one brand as though it were another", () => {
    // U4 is documented here only for Daikin. Asked about Gree, the assistant
    // must not hand back the Daikin page as the answer.
    const result = ask("gree u4 error code");
    expect(result.links[0]?.path.includes("/daikin/")).toBe(false);
  });

  it("never crosses brands for any covered code asked with the wrong brand", () => {
    const cases = [
      ["daikin e6 error code", "/brands/gree/"],
      ["gree u4 error code", "/brands/daikin/"],
      ["lg pc0a error code", "/brands/senville/"],
      ["senville ch05 error code", "/brands/lg/"],
      ["pioneer p1 error code", "/brands/mrcool/"],
    ] as const;

    for (const [question, forbiddenPath] of cases) {
      const result = ask(question);
      expect(result.links.some((link) => link.path.startsWith(forbiddenPath)), question).toBe(false);
    }
  });

  it("asks which brand when a code is shared and none was given", () => {
    const result = ask("what does e1 mean");
    expect(result.needsModel).toBe(true);
    expect(result.answer).toMatch(/which (brand|manufacturer)|model/i);
  });

  it("refuses a brand the library does not cover rather than substituting one", () => {
    const result = ask("carrier 47 error code");
    expect(result.answered).toBe(false);
    expect(result.answer).toMatch(/do not have|not covered|could not find/i);
  });
});

describe("questions the site cannot answer", () => {
  it("says so rather than inventing an answer", () => {
    for (const question of [
      "what is the airspeed velocity of an unladen swallow",
      "how much does a new boiler cost in leeds",
      "who won the world cup in 1998",
    ]) {
      const result = ask(question);
      expect(result.answered, question).toBe(false);
      expect(result.answer, question).toMatch(/could not find|do not have|not covered/i);
    }
  });

  it("offers a next step instead of a dead end", () => {
    const result = ask("what is the airspeed velocity of an unladen swallow");
    expect(result.suggestions.length).toBeGreaterThan(0);
  });

  it("refuses pricing, quote, dealer, and installer recommendation requests", () => {
    for (const question of [
      "how much should a Gree repair cost",
      "get me a quote for a mini split",
      "find a dealer near me",
      "who is the best installer in my area",
    ]) {
      const result = ask(question);
      expect(result.answered, question).toBe(false);
      expect(result.links, question).toHaveLength(0);
      expect(result.answer, question).toMatch(/does not cover|do not have|not covered/i);
    }
  });

  it("never returns prose that is not on the site", () => {
    // Every sentence of an answer must be traceable to published content or to
    // the assistant's own fixed framing lines.
    const result = ask("gree e6 error code");
    expect(result.citations.length).toBeGreaterThan(0);
    for (const citation of result.citations) {
      expect(index.passages.some((passage) => passage.id === citation)).toBe(true);
    }
  });
});

describe("safety boundaries", () => {
  it("declines to give a refrigerant charging procedure", () => {
    const result = ask("how do i recharge my mini split with refrigerant");
    expect(result.safetyBlocked).toBe(true);
    expect(result.answer).toMatch(/qualified|technician|not a homeowner/i);
    expect(result.answer).not.toMatch(/gauge|port|connect the/i);
  });

  it("declines to explain live electrical testing", () => {
    const result = ask("how do i test the capacitor voltage on the outdoor unit");
    expect(result.safetyBlocked).toBe(true);
    expect(result.answer).not.toMatch(/multimeter setting|probe/i);
  });

  it("still answers the informational version of the same subject", () => {
    const result = ask("could low refrigerant cause a frozen coil");
    expect(result.safetyBlocked).toBe(false);
    expect(result.answered).toBe(true);
  });

  it("keeps the escalation boundary visible on hazardous symptoms", () => {
    const result = ask("burning smell from my mini split");
    expect(result.answer + result.safetyNote).toMatch(/off|urgent|service|stop/i);
  });
});

describe("answer shape", () => {
  it("stays brief by default", () => {
    const result = ask("gree e6 error code");
    expect(result.answer.split(/\s+/).length).toBeLessThanOrEqual(120);
  });

  it("links the page the answer came from", () => {
    const result = ask("daikin a5");
    expect(result.links[0]?.path).toBe("/brands/daikin/a5-error-code/");
    expect(result.links[0]?.title).toMatch(/A5/);
  });

  it("returns no more than three links", () => {
    const result = ask("mini split not cooling");
    expect(result.links.length).toBeLessThanOrEqual(3);
    expect(result.links.length).toBeGreaterThan(0);
  });

  it("says when the model matters before the answer can be trusted", () => {
    const result = ask("what does e1 mean on my mini split");
    expect(result.needsModel).toBe(true);
  });
});

describe("performance", () => {
  it("builds the index once and answers well inside a request budget", () => {
    const questions = [
      "gree e6",
      "mini split not cooling",
      "daikin u4 transmission",
      "how do i clean the filter",
      "outdoor unit iced over",
    ];

    const started = performance.now();
    for (let i = 0; i < 100; i += 1) {
      answerQuestion(questions[i % questions.length], index);
    }
    const perQuery = (performance.now() - started) / 100;

    expect(perQuery, `${perQuery.toFixed(2)}ms per query`).toBeLessThan(15);
  });

  it("keeps the index small enough to hold in memory and ship", () => {
    expect(index.passages.length).toBeGreaterThan(200);
    expect(JSON.stringify(index).length).toBeLessThan(1_500_000);
  });
});

describe("retrieval internals", () => {
  it("ranks an exact code and brand match above a symptom page", () => {
    const parsed = parseQuery("gree e6 not cooling");
    const ranked = retrieve(parsed, index);
    expect(ranked[0]?.article.path).toBe("/brands/gree/e6-error-code/");
  });

  it("scores nothing above the floor for an unrelated question", () => {
    const parsed = parseQuery("best pizza in naples");
    const ranked = retrieve(parsed, index);
    expect(ranked[0]?.score ?? 0).toBeLessThan(1);
  });
});

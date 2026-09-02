import { answerQuestion } from "@/lib/assistant/answer";
import { buildPassageIndex, type PassageIndex } from "@/lib/assistant/passages";

/**
 * The assistant endpoint.
 *
 * Retrieval runs against an index built from the published content in this
 * repository, held in module scope so it is constructed once per server
 * instance rather than per request. Nothing here fetches the website, calls an
 * external service, or generates prose, which is why a response is fast and
 * cannot contain a claim the site has not published.
 */

export const runtime = "nodejs";
// Answers depend on the request body, so this route is never cached as static.
export const dynamic = "force-dynamic";

let cachedIndex: PassageIndex | null = null;

function getIndex(): PassageIndex {
  if (!cachedIndex) cachedIndex = buildPassageIndex();
  return cachedIndex;
}

const MAX_QUESTION_LENGTH = 400;

export async function POST(request: Request) {
  let question = "";

  try {
    const body: unknown = await request.json();
    if (body && typeof body === "object" && "question" in body) {
      const value = (body as { question: unknown }).question;
      if (typeof value === "string") question = value.trim();
    }
  } catch {
    return Response.json({ error: "Send a JSON body with a question." }, { status: 400 });
  }

  if (question.length === 0) {
    return Response.json({ error: "Ask a question." }, { status: 400 });
  }

  const answer = answerQuestion(question.slice(0, MAX_QUESTION_LENGTH), getIndex());

  return Response.json(answer, {
    headers: {
      // The answer is derived from content that only changes on deployment,
      // but it is keyed to the question, so it is not shared cache material.
      "Cache-Control": "no-store",
    },
  });
}

/** A GET is useful for a quick check that the index built and is serving. */
export async function GET() {
  const index = getIndex();
  return Response.json({
    ready: true,
    passages: index.passages.length,
    articles: index.articles.length,
  });
}

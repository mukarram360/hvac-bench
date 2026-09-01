import type { Author } from "./schema";

/**
 * Author and reviewer registry.
 *
 * HVAC Bench publishes under a named editorial desk rather than invented
 * bylines. When a qualified engineer or licensed technician reviews a page,
 * add them here as an `entityType: "person"` record with their real
 * credentials and set `reviewerSlug` on the articles they signed off.
 * Nothing in this file may describe experience the desk does not have.
 */
export const authors = [
  {
    slug: "hvac-bench-editorial",
    name: "HVAC Bench Editorial Desk",
    role: "Technical research and editing",
    entityType: "editorial-desk",
    shortBio:
      "The editorial desk researches HVAC faults against manufacturer service literature and official support documentation, then writes each page with its product scope and safety limits stated in plain language.",
    bio: [
      "HVAC Bench is a technical reference desk, not a contracting company. Every page begins with the manufacturer's own documentation for the equipment in question: the service manual, the installation manual, the operation manual, or the official support article that covers that product family.",
      "The desk writes for two readers at once. The first is an owner standing in front of a unit that is showing a code at an inconvenient hour, who needs to know what the code means, what is safe to check, and when to stop. The second is a technician confirming a code definition before opening a panel.",
      "Where documentation is specific to a product family, the page says so rather than presenting a code as universal. Where the manufacturer does not publish a definition, the page says that too. Uncertainty that exists in the source is preserved in the article instead of being smoothed over.",
    ],
    expertise: [
      "Manufacturer fault-code documentation",
      "Ductless and heat-pump system behaviour",
      "Technical editing and source verification",
      "Homeowner and technician safety boundaries",
    ],
    credentials: [
      "Works from primary manufacturer documentation for every technical claim",
      "Publishes the product scope and source list on each technical page",
    ],
    email: "editorial@hvac-bench.com",
    sameAs: [],
  },
] satisfies Author[];

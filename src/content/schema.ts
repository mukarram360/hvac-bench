import { z } from "zod";

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const absolutePath = z.union([
  z.literal("/"),
  z.string().regex(/^\/[a-z0-9]+(?:[a-z0-9/-]*[a-z0-9])?\/$/),
]);
const reviewedDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "lastReviewed must use YYYY-MM-DD");

export const brandSchema = z.object({
  name: z.string().min(2),
  slug,
  description: z.string().min(40),
  equipmentTypes: z.array(slug).min(1),
});

export const sourceSchema = z.object({
  id: slug,
  title: z.string().min(8),
  publisher: z.string().min(2),
  url: z.url(),
  sourceType: z.enum([
    "oem-service-manual",
    "oem-operation-manual",
    "oem-support",
    "government-guidance",
  ]),
  scopeNote: z.string().min(20).optional(),
});

export const articleSchema = z.object({
  title: z.string().min(20),
  slug,
  path: absolutePath,
  description: z.string().min(70).max(180),
  articleType: z.enum(["error-code", "troubleshooting", "maintenance"]),
  brand: slug.optional(),
  equipmentType: slug,
  productFamily: z.string().min(2).optional(),
  models: z.array(z.string().min(1)).min(1),
  errorCode: z.string().min(1).optional(),
  problemType: slug,
  directAnswer: z.string().min(60),
  symptoms: z.array(z.string().min(20)).min(1),
  causes: z.array(z.string().min(20)).min(1),
  safeChecks: z.array(z.string().min(20)).min(1),
  professionalEscalation: z.array(z.string().min(20)).min(1),
  resetGuidance: z.string().min(30).optional(),
  sourceIds: z.array(slug).min(1),
  sourceType: z.enum([
    "oem-service-manual",
    "oem-operation-manual",
    "oem-support",
    "government-guidance",
    "mixed-primary-sources",
  ]),
  lastReviewed: reviewedDate,
  reviewStatus: z.enum(["source-verified", "editorial-review"]),
  relatedContent: z.array(absolutePath).max(8),
  keywords: z.array(z.string().min(2)).max(12),
});

export type Brand = z.infer<typeof brandSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type TechnicalArticle = z.infer<typeof articleSchema>;

export const contentSetSchema = z.object({
  brands: z.array(brandSchema).min(1),
  sources: z.array(sourceSchema).min(1),
  articles: z.array(articleSchema).min(1),
  staticRoutes: z.array(absolutePath),
});

export type ContentSetInput = z.input<typeof contentSetSchema>;

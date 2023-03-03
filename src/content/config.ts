import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  updatedDate: z
    .string()
    .optional()
    .transform((str) =>
      str !== "" && str !== undefined ? new Date(str) : undefined
    ),
  heroImage: z.string(),
  tags: z.array(z.string()),
});

const blog = defineCollection({
  schema,
});

const note = defineCollection({
  schema,
});

export const collections = { blog, note };

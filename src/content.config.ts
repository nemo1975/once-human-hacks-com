import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(120).max(165),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    keywords: z.array(z.string()).min(1),
    heroImage: z.string(),
    slug: z.string().optional(),
    ctaLabel: z.string().optional(),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const employee = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, employee };

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const employees = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    highlighted: z.boolean().optional(),
    title: z.string(),
    customer: z.string(),
    role: z.string(),
    image: z.string(),
  }),
});

export const collections = { blog, employees, projects };

import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    order:  z.number().int().positive(),
    kind:   z.string(),
    chips:  z.array(z.string()).min(1),
    links:  z.array(z.object({ label: z.string(), href: z.string().url() })).min(1),
    name:   z.string(),
    desc:   z.string(),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    order:   z.number().int().positive(),
    company: z.string(),
    chips:   z.array(z.string()).min(1),
    role:    z.string(),
    summary: z.string(),
    bullets: z.array(z.string()),
  }),
});

export const collections = { projects, experience };

import { defineCollection, z } from 'astro:content';

const bilingual = z.object({ es: z.string(), en: z.string() });

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    order:  z.number().int().positive(),
    kind:   z.string(),
    chips:  z.array(z.string()).min(1),
    links:  z.array(z.object({ label: z.string(), href: z.string().url() })).min(1),
    name:   bilingual,
    desc:   bilingual,
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    order:   z.number().int().positive(),
    company: z.string(),
    chips:   z.array(z.string()).min(1),
    role:    bilingual,
    summary: bilingual,
    bullets: z.array(bilingual),
  }),
});

export const collections = { projects, experience };

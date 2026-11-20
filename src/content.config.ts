import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * Filenames are in English; the public URL comes from the optional `slug`
 * frontmatter field, which the glob loader uses as the entry `id` (so it is
 * deliberately absent from the schemas below). Without it the filename is
 * used, so `about.md` + `slug: sobre` serves /sobre.
 */

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

/** Standalone content pages served at the site root, e.g. /sobre. */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Optional <h1>, when it should differ from the <title> tag. */
    heading: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, pages };

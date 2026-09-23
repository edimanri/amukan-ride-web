import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    coverImage: image().optional(),
  })
});

const rutas = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    coverImage: image().optional(),
    stravaLink: z.string().url().optional(),
    googleEarthLink: z.string().url().optional(),
    gpxFile: z.string().optional(),
    description: z.string().optional(),
    distance: z.number().optional(),
    elevation: z.number().optional(),
    difficulty: z.string().optional(),
  })
});

export const collections = {
  blog,
  rutas,
};
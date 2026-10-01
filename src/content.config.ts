import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }), 
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    coverImage: image().optional(),
  })
});

const rutas = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/rutas" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    coverImage: image().optional(),
    stravaLink: z.string().url().optional(),
    googleEarthLink: z.string().url().optional(),
    gpxFile: z.string().optional(),
    description: z.string().optional(),
    distance: z.string().optional(),
    elevation: z.string().optional(),
    difficulty: z.string().optional(),
    terrain: z.string().optional(),
    youtubeId: z.string().optional(),
    mapIframe: z.string().optional(),
  })
});

export const collections = {
  blog,
  rutas,
};
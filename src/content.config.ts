import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Asegúrate de importar glob

const blog = defineCollection({
  // Agregamos el loader para decirle a Astro dónde están los archivos
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }), 
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    coverImage: image().optional(),
  })
});

const rutas = defineCollection({
  // Hacemos lo mismo para rutas
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/rutas" }),
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
// Ruta: src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date().optional(),
      coverImage: image().optional(), // Reemplazo clave para sincronizar con Keystatic
    })
});

// NUEVO: Esquema estricto para el Catálogo de Rutas
const rutasCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/rutas" }),
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
    }),
});

export const collections = {
  'blog': blogCollection,
  'rutas': rutasCollection, // Exportamos la nueva colección
};
// Ruta: src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Edison Manriquez'),
    tags: z.array(z.string()).optional(),
    cover: image(),
  }),
});

// NUEVO: Esquema estricto para el Catálogo de Rutas
const rutasCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/rutas" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    distance: z.number(), // Exigimos un valor numérico para los kilómetros
    elevation: z.number(), // Exigimos un valor numérico para el desnivel
    difficulty: z.enum(['Básico', 'Intermedio', 'Avanzado', 'Experto']), // Solo permite estas 4 opciones
    cover: image(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'rutas': rutasCollection, // Exportamos la nueva colección
};
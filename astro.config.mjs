import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // <- Corrección requerida por Astro
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    keystatic()
  ],
});
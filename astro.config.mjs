import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// ... (aquí pueden estar tus otros imports como tailwind o react)

export default defineConfig({
  site: 'https://www.ciclismourbano.cl', // Usa exactamente el formato con el que verificaste en GSC
  integrations: [
    // ... (tus otras integraciones)
    sitemap()
  ],
});
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 1. Colores de Identidad (Identidad Híbrida)
        teal: {
          400: '#2DD4BF', // Color de apoyo
          500: '#14B8A6', // Color de apoyo
          600: '#0D9488', // Primario (Verde Ingeniería)
          700: '#0F766E', // Hover (Interacción)
        },
        yellow: {
          500: '#EAB308', // Secundario o Acento (Ámbar Urbano)
        },
        // 2. Superficies y Fondos (Arquitectura de la Interfaz)
        gray: {
          50: '#F9FAFB',  // Títulos y Texto Principal (High Contrast)
          300: '#D1D5DB', // Párrafos y Descripciones (Medium Contrast)
          400: '#9CA3AF', // Detalles (Low Contrast)
          700: '#374151', // Líneas y Bordes (Acero)
          800: '#1F2937', // Superficie (Hormigón)
          900: '#111827', // Fondo Base (Asfalto)
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
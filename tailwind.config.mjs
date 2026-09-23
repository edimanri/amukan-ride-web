/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488', // Verde Ingeniería estricto
          700: '#0F766E',
        },
        yellow: {
          500: '#EAB308', // Ámbar Urbano
        },
        gray: {
          50: '#F9FAFB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          700: '#374151',
          800: '#1F2937', // Superficie Hormigón
          900: '#111827', // Fondo Asfalto estricto
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
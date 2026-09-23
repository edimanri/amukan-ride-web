// Ruta: keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'edimanri', // Tu usuario de GitHub
      name: 'amukan-ride-web' // El nombre de tu repositorio
    }
  },
  collections: {
    // 1. Colección para los Artículos del Blog
    blog: collection({
      label: 'Blog Técnico',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Título del Artículo' } }),
        description: fields.text({ label: 'Descripción breve (Para SEO y Subtítulo)' }),
        pubDate: fields.date({ 
          label: 'Fecha de publicación', 
          defaultValue: { kind: 'today' } 
        }),
        
        // Campo para la imagen de portada del blog
        coverImage: fields.image({
          label: 'Imagen Principal',
          directory: 'src/assets/blog',
          publicPath: '../../../assets/blog/'
        }),
        
        content: fields.mdx({
          label: 'Cuerpo del texto',
          options: {
            bold: true,
            italic: true,
            link: true,
            image: {
              directory: 'src/assets',
              publicPath: '../../assets/'
            },
            divider: true,
            heading: [2, 3, 4, 5],
          }
        }),
      },
    }),
    
    // 2. Colección para el Catálogo de Rutas
    rutas: collection({
      label: 'Catálogo de Rutas',
      slugField: 'title',
      path: 'src/content/rutas/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Nombre de la Ruta' } }),
        
        coverImage: fields.image({
          label: 'Imagen de Portada',
          directory: 'src/assets/rutas',
          publicPath: '../../../assets/rutas/'
        }),
        
        stravaLink: fields.url({
          label: 'Enlace de Strava',
          description: 'URL de la ruta o segmento oficial'
        }),
        
        googleEarthLink: fields.url({
          label: 'Enlace de Google Earth',
          description: 'URL para previsualización satelital en 3D'
        }),
        
        gpxFile: fields.file({
          label: 'Archivo GPX para descarga',
          directory: 'public/gpx',
          publicPath: '/gpx/'
        }),

        description: fields.text({ label: 'Descripción general' }),
        distance: fields.number({ label: 'Distancia total (km)' }),
        elevation: fields.number({ label: 'Desnivel positivo (m)' }),
        difficulty: fields.select({
          label: 'Nivel de Dificultad',
          options: [
            { label: 'Principiante', value: 'Principiante' },
            { label: 'Intermedio', value: 'Intermedio' },
            { label: 'Avanzado', value: 'Avanzado' },
          ],
          defaultValue: 'Intermedio'
        }),
        
        content: fields.mdx({
          label: 'Análisis de la ruta y observaciones',
          options: {
            bold: true,
            italic: true,
            link: true,
            image: {
              directory: 'src/assets',
              publicPath: '../../assets/'
            },
            divider: true,
            heading: [2, 3, 4, 5],
          }
        }),
      },
    }),
  },
});
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pixelmagnet Application',
    short_name: 'Pixelmagnet App',
    description:
      'Pixelmagnet specializes in Branding, UX/UI Design, App Development, Web Development, and Digital Transformation, delivering innovative solutions to help businesses thrive in the digital age',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.svg',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/svg',
        purpose: 'maskable',
      },
    ],
  }
}

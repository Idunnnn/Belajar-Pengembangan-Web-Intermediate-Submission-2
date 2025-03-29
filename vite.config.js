import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'src', 'public'),
  build: {
    outDir: resolve(__dirname, 'docs'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{html,js,css,png,jpg,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/story-api\.dicoding\.dev\/v1/i, 
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7, 
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "App",
        short_name: "App",
        start_url: "/",
        description: "App adalah aplikasi inovatif yang memungkinkan Anda menulis, mengedit, dan membagikan cerita dengan mudah. Baik Anda seorang penulis pemula atau profesional, aplikasi ini menyediakan alat yang intuitif untuk menuangkan ide menjadi narasi yang menarik.",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "images/logo.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "images/logo.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        screenshots: [
          {
            src: "screenshots/desktop1.png",
            sizes: "1280x800",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "screenshots/desktop2.png",
            sizes: "1280x800",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "screenshots/desktop3.png",
            sizes: "1280x800",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "screenshots/mobile1.png",
            sizes: "414x896",
            type: "image/png",
            form_factor: "narrow"
          },
          {
            src: "screenshots/mobile2.png",
            sizes: "414x896",
            type: "image/png",
            form_factor: "narrow"
          },
          {
            src: "screenshots/mobile3.png",
            sizes: "414x896",
            type: "image/png",
            form_factor: "narrow"
          }
        ],

        shortcuts: [
          {
            name: "Create story",
            short_name: "Create",
            description: "Create your new story",
            url: "?source=pwa#/createStory",
            icons: [
              {
                src: "images/add-256x256.png",
                type: "image/png",
                sizes: "256x256"
              },
              {
                src: "images/add-512x512.png",
                type: "image/png",
                sizes: "512x512"
              }
            ]
          }
        ]
      }

    }),
  ],
});

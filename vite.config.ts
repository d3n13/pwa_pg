import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const navigateFallbackAllowlist = [/./];
const oneYearInSeconds = 60 * 60 * 24 * 365;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      base: "/pwa_pg/",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,ico,png,mp3}"], // For precaching files (from public folder?)
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: { maxEntries: 10, maxAgeSeconds: oneYearInSeconds },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: { maxEntries: 10, maxAgeSeconds: oneYearInSeconds },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ request }) => request.method.toUpperCase() === "GET",
            handler: "StaleWhileRevalidate",
            method: "GET",
            options: {
              cacheName: "GetRequests",
              expiration: { maxAgeSeconds: oneYearInSeconds },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
        navigateFallback: "/index.html",
        navigateFallbackAllowlist,
        navigateFallbackDenylist: [
          /\./, // Something with a dot. Likely a file
          /^\/api/, // Api routes
        ],
      },
      devOptions: { enabled: true, navigateFallbackAllowlist },
      manifest: {
        name: "My PWA Blue",
        short_name: "Blue",
        display: "standalone",
        description: `Here's a description for the Blue Vite PWA app`,
        theme_color: "blue",
        background_color: "white",
        icons: [
          {
            src: "assets/icons/logo.svg",
            sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
      },
    }),
  ],
  base: "/pwa_pg/",
});

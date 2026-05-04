import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/api/"), // Caches your API data
            handler: "CacheFirst", // Matches your current preference
            options: {
              cacheName: "api-data",
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 }, // 24 hours
            },
          },
        ],
      },
      manifest: {
        display: "standalone", // This makes it look like a real app
        name: "HagonoyTides",
        short_name: "HagonoyTides",
        theme_color: "#430167",
        icons: [
          {
            src: "192x192-hagonoytides-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "512x512-hagonoytides-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

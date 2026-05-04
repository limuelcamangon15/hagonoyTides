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
        navigateFallback: "index.html",
        runtimeCaching: [
          {
            // 1. EXCLUDE WEATHER, CHATS, AND SOCKET.IO
            urlPattern: ({ url }) =>
              url.href.includes("/weather") ||
              url.href.includes("/chats") ||
              url.href.includes("socket.io"),
            handler: "NetworkOnly",
          },
          {
            // 2. FALLBACK FOR OTHER API CALLS
            urlPattern: ({ url }) => url.pathname.startsWith("/api/"),
            handler: "NetworkFirst",
            options: {
              cacheName: "general-api-data",
              expiration: { maxEntries: 30, maxAgeSeconds: 3600 },
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

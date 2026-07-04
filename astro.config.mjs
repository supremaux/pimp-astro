// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Configuração para domínios externos (Unsplash)
  image: {
    domains: ["images.unsplash.com"],
  },
});

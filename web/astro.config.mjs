// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://07ay.com',
  integrations: [sitemap()],
  vite: {
    // @ts-expect-error - Mismatch between Tailwind Vite plugin types and Astro Vite types
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'always',
  },
});

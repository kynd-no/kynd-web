import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kynd.no',
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  server: {
    open: true,
  },
  vite: {
    envDir: '..',
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData(source) {
            return `@use "src/styles/main.scss" as *; ${source}`;
          },
        },
      },
    },
  },
});

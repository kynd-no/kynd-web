import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kynd.no',
  output: 'hybrid',
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  server: {
    open: true,
  },
  adapter: cloudflare(),
  vite: {
    ssr: {
      noExternal: true,
    },
  },
});

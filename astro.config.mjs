import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kynd.no',
  output: 'hybrid',
  adapter: netlify(),
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  server: {
    open: true,
  },
});

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
    define: {
      'process.env.SLACK_TOKEN': JSON.stringify(process.env.SLACK_TOKEN),
      'process.env.SLACK_CHANNEL_ID': JSON.stringify(process.env.SLACK_CHANNEL_ID),
    },
  },
});

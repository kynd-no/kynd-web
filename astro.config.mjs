import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kynd-no.github.io',
  base: '/kynd-web',
  integrations: [mdx(), sitemap()],
  vite: {
    envDir: '..',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData(source, fp) {
            if (fp.endsWith('main.scss')) return source;
            if (fp.endsWith('variables.scss')) return source;
            return `@import "src/styles/main.scss"; ${source}`;
          },
        },
      },
    },
  },
});

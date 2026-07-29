// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Production URL. Used to generate absolute URLs (canonical links, etc.).
  site: 'https://laurennunespsi.com',

  // Fully static build, deployed to GitHub Pages.
  output: 'static',

  integrations: [
    tailwind(),
  ],

  // TODO: add extra integrations later, e.g.:
  //   import sitemap from '@astrojs/sitemap';
  //   import rss from '@astrojs/rss';
  // and register `sitemap()` above. (RSS is set up per-endpoint, not as an integration.)
});

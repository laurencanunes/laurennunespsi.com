// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Production URL. Used to generate absolute URLs (canonical links, etc.).
  site: 'https://laurennunespsi.com',

  // Fully static build, deployed to GitHub Pages.
  output: 'static',

  build: {
    // Total CSS is well under 10KB, so inlining it into each page's <head>
    // beats paying for extra render-blocking requests before first paint.
    inlineStylesheets: 'always',
  },

  integrations: [
    tailwind(),
  ],

  // TODO: add extra integrations later, e.g.:
  //   import sitemap from '@astrojs/sitemap';
  //   import rss from '@astrojs/rss';
  // and register `sitemap()` above. (RSS is set up per-endpoint, not as an integration.)
});

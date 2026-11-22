// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production URL. Used to generate absolute URLs (canonical links, etc.).
  site: 'https://laurennunespsi.com',

  // Fully static build, deployed to GitHub Pages.
  output: 'static',

  // GitHub Pages serves each page from <slug>/index.html and 301-redirects
  // /<slug> to /<slug>/. Enforce the trailing slash so internal links and
  // canonicals always point at the final URL instead of the redirect.
  trailingSlash: 'always',

  build: {
    // Total CSS is well under 10KB, so inlining it into each page's <head>
    // beats paying for extra render-blocking requests before first paint.
    inlineStylesheets: 'always',
  },

  // Tailwind CSS v4 runs as a Vite plugin; its config lives in
  // src/styles/global.css (`@theme`), imported by BaseLayout.astro.
  vite: {
    plugins: [tailwindcss()],
  },

  // TODO: add integrations later, e.g.:
  //   import sitemap from '@astrojs/sitemap';
  //   import rss from '@astrojs/rss';
  // and register `sitemap()` above. (RSS is set up per-endpoint, not as an integration.)
});

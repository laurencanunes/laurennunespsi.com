# laurennunespsi.com

Personal/business site for Lauren Nunes (Psicóloga), built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) and a
Markdown-based blog. Deployed for free on GitHub Pages.

The brand palette, typography, and other design tokens live in
`tailwind.config.mjs` and are the single source of truth — components use the
`brand-*` utilities rather than hardcoded colors.

## Requirements

- Node.js 22+ — the version is pinned in `.nvmrc`
- npm

## Run locally

```bash
nvm use      # picks up Node 22 from .nvmrc (nvm is optional but recommended)
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Add a new blog post

1. Create a new `.md` file in `src/content/blog/` (the file name becomes the URL
   slug, e.g. `meu-post.md` → `/blog/meu-post`).
2. Add frontmatter at the top:

   ```markdown
   ---
   title: 'Título do post'
   description: 'Resumo curto para listagens e SEO.'
   pubDate: 2026-08-01
   # updatedDate: 2026-08-05   # optional
   # tags: ['tag-um', 'tag-dois']   # optional
   # slug: meu-post-em-portugues   # optional — overrides the URL slug
   # draft: true                    # optional — hides the post from the site
   ---

   Conteúdo em Markdown...
   ```

3. Write the body in Markdown below the frontmatter.

The schema is defined and validated in `src/content/config.ts`. Posts with
`draft: true` are excluded from the site.

`slug` lets the URL differ from the file name, which is how English file names
serve Portuguese URLs — `src/content/pages/about.md` with `slug: sobre` is
published at `/sobre`. Astro reads it natively, so it is deliberately absent
from the Zod schemas; adding it there is an error.

## Project structure

```
public/            static assets copied as-is (CNAME, favicons)
src/
  assets/          images optimized at build time by Astro's <Image>
  components/
    WhatsAppButton.astro  the shared "Agendar pelo WhatsApp" CTA
    WhatsAppIcon.astro
  consts.ts        contact details (WhatsApp, Instagram, CRP) and site URL
  content/
    config.ts      collection schemas (Zod) for `blog` and `pages`
    blog/          Markdown posts
    pages/         Markdown pages served at the site root, e.g. about.md → /sobre
  layouts/
    BaseLayout.astro   shared HTML shell (head/SEO, header, footer)
    BlogPost.astro     individual post layout
  pages/
    index.astro        landing page (all sections live here)
    [slug].astro       renders the `pages` collection at the root
    blog/index.astro   blog listing
    blog/[slug].astro  dynamic post route
  styles/global.css    Tailwind entrypoint, font import, Markdown typography
tailwind.config.mjs    brand colors, fonts, and other design tokens
```

The blog routes build but are not linked from the site yet — the nav and footer
entries in `BaseLayout.astro` are commented out and the homepage blog section is
still gated.

## Deployment

Deployment is fully automated via GitHub Actions:

- Every push to `main` triggers `.github/workflows/deploy.yml`.
- The workflow builds the site with `withastro/action` and publishes it to
  GitHub Pages via `actions/deploy-pages`.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment**
and set **Source: GitHub Actions**.

The custom domain `laurennunespsi.com` is configured via `public/CNAME`, which is
copied into the build output on every deploy.

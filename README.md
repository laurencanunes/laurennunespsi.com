# laurennunespsi.com

Personal/business site for Lauren Nunes (Psicóloga), built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) and a
Markdown-based blog. Deployed for free on GitHub Pages.

> This is an intentionally minimal, unstyled-but-organized scaffold. Brand colors,
> typography, and layout are placeholders — see the `TODO` comments in
> `tailwind.config.mjs` and `src/styles/global.css`.

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
   # draft: true                    # optional — hides the post from the site
   ---

   Conteúdo em Markdown...
   ```

3. Write the body in Markdown below the frontmatter.

The schema is defined and validated in `src/content/config.ts`. Posts with
`draft: true` are excluded from the site.

## Project structure

```
public/            static assets copied as-is (logo.png, CNAME, favicon)
src/
  content/
    config.ts      blog collection schema (Zod)
    blog/          Markdown posts
  layouts/
    BaseLayout.astro   shared HTML shell (head, nav, footer)
    BlogPost.astro     individual post layout
  pages/
    index.astro        landing page (hero + latest 3 posts)
    about.astro        static about page
    blog/index.astro   blog listing
    blog/[slug].astro  dynamic post route
  styles/global.css    Tailwind entrypoint + font imports
```

## Deployment

Deployment is fully automated via GitHub Actions:

- Every push to `main` triggers `.github/workflows/deploy.yml`.
- The workflow builds the site with `withastro/action` and publishes it to
  GitHub Pages via `actions/deploy-pages`.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment**
and set **Source: GitHub Actions**.

The custom domain `laurennunespsi.com` is configured via `public/CNAME`, which is
copied into the build output on every deploy.

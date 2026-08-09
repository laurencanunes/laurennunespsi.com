# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node 22 is required (`.nvmrc`, `engines` in `package.json`). Astro will not run
on older majors. Since each tool call gets a fresh shell, run `nvm use` in the
same command — it reads `.nvmrc`:

```bash
nvm use && npm run dev      # dev server on http://localhost:4321
nvm use && npm run build    # static build into dist/
nvm use && npm run preview  # serve the production build
```

Drop the `nvm use &&` prefix only after confirming `node --version` is already
22+ in that same call — an environment whose nvm default points at an older
version will otherwise fail with a confusing syntax or engine error.

There is no test suite, linter, or formatter configured. `npm run build` is the
only verification step — it type-checks `.astro` files and validates every
content-collection entry against its Zod schema, so a schema violation or a bad
frontmatter field fails the build.

## Architecture

Astro 5 in `output: 'static'` mode + Tailwind (via `@astrojs/tailwind`). No
client-side framework and no JS islands — everything ships as static HTML.
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes `dist/` to GitHub Pages. The custom domain
comes from `public/CNAME`.

All user-facing copy is **Brazilian Portuguese** (`lang="pt-BR"`); code, file
names, and comments are English.

### The landing page is the site

`src/pages/index.astro` (~600 lines) is a single-file marketing page: hero,
credentials, Sobre, Demandas, Como funciona, Abordagem, Avaliações, Blog, FAQ,
Contato. Section content lives in typed arrays in the frontmatter
(`credentials`, `demands`, `steps`, `pillars`, `faqs`) — edit those arrays
rather than the markup when changing copy. The `faqs` array also feeds the
`FAQPage` JSON-LD in the same file, so it stays in sync automatically.

Sections are addressed by `id` (`#sobre`, `#demandas`, `#como-funciona`,
`#faq`, …) and the nav/footer link to `/#<id>`, which resolves from any route.
Adding or renaming a section id means updating the `nav`/`footerNav` arrays in
`BaseLayout.astro`.

Repeated utility-class strings inside `index.astro` are hoisted into local
consts (`eyebrow`, `sectionTitle`); reuse them for new sections.

### Layouts and shared chrome

- `src/layouts/BaseLayout.astro` — the only HTML shell: head/SEO/canonical/OG,
  JSON-LD injection via the `schema` prop, header, footer. `wide` renders a
  full-bleed `<main>` for the landing page; the default wraps content in a
  centred `max-w-3xl` column for Markdown pages.
- `src/layouts/BlogPost.astro` — wraps `BaseLayout` for individual posts.

### Content collections

`src/content/config.ts` defines two collections:

- `blog` → rendered by `src/pages/blog/[slug].astro`, listed at `/blog`.
- `pages` → standalone root-level pages rendered by `src/pages/[slug].astro`.

Both filter out `draft: true` entries in `getStaticPaths`/`getCollection`.

**Slugs are decoupled from filenames**: Markdown filenames are English, and the
public URL comes from an optional `slug` frontmatter field that Astro reads
natively. It is deliberately *not* declared in the Zod schemas — adding it there
is an error. Example: `src/content/pages/about.md` with `slug: sobre` serves
`/sobre`.

### Blog is built but not linked

The `/blog` routes build and work, but the blog is hidden from the site: the nav
and footer entries in `BaseLayout.astro` are commented out, and the homepage
blog section is gated behind `posts.length > 10` in `index.astro`. Re-enabling
means touching all three places.

## Conventions

- **Never hardcode hex colors.** The full brand palette lives under
  `theme.extend.colors.brand` in `tailwind.config.mjs` and is the single source
  of truth (`text-brand-dark`, `bg-brand-accent`, `bg-brand-card-peach`, …),
  including `on-dark-*` tints for the dark sections.
- Contact details (WhatsApp number and prefilled message, Instagram, CRP,
  Google reviews link, `SITE_URL`) live in `src/consts.ts` — import from there,
  never inline. All WhatsApp CTAs go through `components/WhatsAppButton.astro`.
- Markdown bodies are styled by the `.prose-custom` component layer in
  `src/styles/global.css`, not by a typography plugin.
- Images in `src/assets/` are rendered with Astro's `<Image>` (optimized to
  webp); `public/` is for pass-through assets only (favicons, CNAME).
- Custom Tailwind extensions worth knowing: the `nav:` screen (900px) for the
  nav collapse, `max-w-content` (1280px) for the landing column, the
  `hero`/`cta-title` fluid font sizes, and `bg-photo-placeholder` for
  pending-photo slots.
- Commit messages are short imperative sentences ("Load the hero portrait
  eagerly").

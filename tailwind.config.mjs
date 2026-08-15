/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // -----------------------------------------------------------------------
      // Brand color palette — single source of truth for the site.
      // Taken from the Lauren Nunes landing page design (Claude Design project
      // "Lauren Nunes Landing"). Never hardcode hex values in components.
      // Usage: `bg-brand-accent`, `text-brand-primary`, `bg-brand-card-peach`, …
      // -----------------------------------------------------------------------
      colors: {
        brand: {
          primary: '#2F5E48', // links, strong green text
          'primary-hover': '#4F9271', // link hover
          accent: '#6EAF8D', // CTA fill, step badges
          'accent-hover': '#4F9271', // CTA hover fill
          eyebrow: '#3E7B58', // uppercase section labels
          dark: '#1F3A2D', // headings + dark section background
          body: '#4A5B52', // body copy
          subtle: '#3F5A4C', // nav links, card copy
          muted: '#5F6E66', // captions, meta text
          faint: '#64736B', // footer labels, fine print
          light: '#F6F8F5', // tinted section background
          line: '#EDEFEC', // hairline dividers
          border: '#E4E9E4', // card borders
          'border-strong': '#CFD8CF', // outline button border
          mint: '#CFEBDA', // hero backdrop / soft fill
          star: '#E4A93C', // review stars
          // Text tints used on the dark (`brand.dark`) sections
          'on-dark': '#C6DCCF',
          'on-dark-muted': '#BCD3C5',
          'on-dark-bright': '#F0F8F3',
          'on-dark-accent': '#8FD3AD',
          // Pastel fills for the "Demandas" cards
          card: {
            yellow: '#F7F4A8',
            peach: '#F3C7A0',
            blue: '#BBD8EA',
            pink: '#E3BFC4', // dusty rose — matches the lightness of its siblings
            purple: '#CDB9EF',
          },
        },
      },

      // -----------------------------------------------------------------------
      // Font families. Poppins is self-hosted via @fontsource, imported in
      // `src/layouts/BaseLayout.astro` (weights 400/500/600/700, latin subset).
      // Usage: `font-sans` (body), `font-heading` (headings).
      // -----------------------------------------------------------------------
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },

      // Fluid display sizes used by the hero and the closing CTA.
      fontSize: {
        hero: ['clamp(2.5rem, 3.6vw, 3.625rem)', { lineHeight: '1.07', letterSpacing: '-0.02em' }],
        'cta-title': ['clamp(2.125rem, 3vw, 2.875rem)', { lineHeight: '1.1' }],
      },

      // Diagonal hatch used wherever a real photo is still pending.
      backgroundImage: {
        'photo-placeholder':
          'repeating-linear-gradient(135deg, #E8F1EA 0 12px, #DCE9DF 12px 24px)',
      },

      // Nav collapses below 900px, matching the design's breakpoint.
      screens: {
        nav: '900px',
      },

      // Landing-page content column. Section backgrounds stay full-bleed;
      // their contents are centred and capped at this width.
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // -----------------------------------------------------------------------
      // Brand color palette — PLACEHOLDER VALUES.
      // TODO: replace these hex values with the real brand colors.
      // Usage: `bg-brand-primary`, `text-brand-accent`, etc.
      // -----------------------------------------------------------------------
      colors: {
        brand: {
          primary: '#4f46e5', // TODO: replace with brand primary
          secondary: '#0ea5e9', // TODO: replace with brand secondary
          accent: '#f59e0b', // TODO: replace with brand accent
          dark: '#1e1b2e', // TODO: replace with brand dark (text / backgrounds)
          light: '#f8fafc', // TODO: replace with brand light (backgrounds)
        },
      },

      // -----------------------------------------------------------------------
      // Font families — PLACEHOLDER stacks.
      // TODO: add the real typefaces. To use Google Fonts or self-hosted fonts,
      // import them in `src/styles/global.css` (or a <link> in BaseLayout.astro),
      // then swap the first entry of each stack below for the font name.
      // Usage: `font-sans` (body), `font-heading` (headings).
      // -----------------------------------------------------------------------
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

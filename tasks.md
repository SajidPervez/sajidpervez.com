# Migration Plan: Astro ➜ Next.js (Magic Portfolio Template)

## Phase 0 – Discovery & Preparation
- [ ] Inventory the current Astro site content (pages, components, collections, assets) and map them to Magic Portfolio concepts.
- [ ] Review the Magic Portfolio template architecture (`src/app`, `src/resources`, `src/components`) to understand required config/content shapes.
- [ ] Export a list of dynamic data sources (blog posts, books, podcasts, merch, experiences, tags) and note current file locations/metadata requirements.

## Phase 1 – Next.js Project Bootstrap
- [x] Create a dedicated Next.js workspace based on `/magic-portfolio` (fresh `npm install`, tailor `package.json` metadata).
- [x] Configure Next.js environment (`next.config.mjs`, `tsconfig.json`, linting/formatting) to match repository standards.
- [x] Set up dev tooling parity (Tailwind/PostCSS equivalents, font loading strategy, env vars if needed).

## Phase 2 – Template Configuration & Theming
- [x] Adapt `src/resources/once-ui.config.js` for Sajid branding while retaining Magic Portfolio’s default colors/typography; focus on structure, navigation, and social links only.
- [x] Populate `src/resources/content.js` with homepage/about/section copy to match existing Astro hero text, subtitles, and CTA destinations.
- [x] Configure global metadata (site title, descriptions, OG defaults) within Magic Portfolio’s SEO utilities.

## Phase 3 – Content Migration
- [x] Convert all blog posts from `src/content/blog/*.md` into Magic Portfolio MDX format under `src/app/blog/posts`, preserving frontmatter (title, author, pubDate, tags, cover, canonical URL).
- [x] Port author/about content (`src/content/authors/about.md`) into the template’s about/CV structure, including random cover logic if desired.
- [x] Migrate books, podcasts, merch, and experiences collections into the template data model (likely custom sections in `content.js` or bespoke JSON/MDX files).
- [x] Transfer tag information and determine whether Magic Portfolio supports tagging; extend template if necessary to preserve tag navigation.
- [x] Ensure RSS or equivalent syndication is recreated (Next.js route or third-party integration).

## Phase 4 – Component & Feature Parity
- [x] Implement blog listing/grid with pagination mirroring current `Cards.astro` within Next.js routes (`app/blog/page.tsx` or equivalent).
- [x] Build pages for Books, Podcasts, and Experiences leveraging Magic Portfolio layout primitives while preserving current content structure (merch excluded by scope).
- [x] Migrate header/footer navigation, newsletter signup, and social links to the template’s components.

## Phase 5 – Assets, Styling & Fonts
- [x] Copy relevant assets (`public/blog-images`, icons) into the Next.js `public` directory, updating paths accordingly.
- [x] Only apply styling tweaks that complement Magic Portfolio’s native design system; do not port Astro-specific colors or fonts.
- [x] Validate font usage follows Magic Portfolio defaults (via Once UI/`next/font`) and remove redundant Astro font imports.

## Phase 6 – Data Integrity & QA
- [ ] Implement a content validation pass (e.g., unit tests or scripts) to ensure metadata conforms to new schemas.
- [ ] Manually QA each route (Home, Blog index/detail, Tags or alternative, Books, Podcasts, Merch, About) for layout fidelity and responsive behaviour.
- [ ] Verify accessibility (alt text, semantic structure) and fix regressions introduced by migration.
- [ ] Confirm build succeeds (`npm run build`) and dynamic routes prerender where expected.

## Phase 7 – Cleanup & Handover
- [x] Remove legacy Astro-specific files once migration is verified (after backup or branch strategy is in place).
- [x] Update documentation/README with new setup, scripts, and deployment instructions.
- [ ] Prepare deployment pipeline for Next.js (Vercel or alternative) and smoke test production build.
- [ ] Capture outstanding follow-up tasks/bugs in this checklist before closing.

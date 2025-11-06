<!-- 
SYNC IMPACT REPORT
==================
Version: 1.0.0 (NEW)
Ratification Date: 2025-10-20
Constitution Type: Modern Functional Personal Website

Changes:
- NEW: Initial constitution for sajidpervez.com
- Principles Defined: 4 core principles (Minimal Dependencies, Self-Contained Modules, Content Over Flash, Fast-by-Default)
- Governance Model: Content-first with performance as non-negotiable

Templates Requiring Updates:
✅ .specify/templates/plan-template.md - Constitution Check references integrated
✅ .specify/templates/spec-template.md - Requirements aligned with principles
⚠ Command files in .specify/templates/commands/ - Review for compliance guidance

Deferred Items: None
-->

# sajidpervez.com Constitution

A modern functional personal website built on Astro, prioritizing content delivery, minimal dependencies, and exceptional performance.

## Core Principles

### I. Minimal Dependencies

A lean technology stack reduces maintenance burden and deployment surface. Every dependency must provide clear, measurable value.

Every external package MUST:
- Solve a specific, well-defined problem that cannot be reasonably solved with platform primitives.
- Include active maintenance and security updates.
- Have clear documentation and low learning curve.
- Pass justification: "Why this library vs. native solution?" must be answerable.

Rationale: Fewer dependencies = faster builds, smaller bundles, fewer security vectors, easier long-term maintenance.

---

### II. Self-Contained Modules

Each component, page, and feature must be independently understandable, testable, and deployable. Coupling between modules must be explicit and minimal.

Every module MUST:
- Encapsulate its own styling, logic, and data dependencies.
- Export a single, clear interface (e.g., component props, RSS export, content collection).
- Operate correctly in isolation (e.g., blog post can render without homepage context).
- Include inline documentation of its purpose and expected inputs.

Rationale: Enables team collaboration, parallel development, and fear-free refactoring.

---

### III. Content Over Flash

Content is primary; interactivity and animations are enhancements. The website MUST serve its purpose (sharing essays, books, podcasts, experience) without JavaScript when possible.

Design decisions MUST prioritize:
1. **Readability first**: Typography, contrast, whitespace before visual effects.
2. **Fast delivery**: Static HTML/CSS preferred over client-side rendering.
3. **Progressive enhancement**: Interactive features (animations, typewriter effect) fail gracefully.
4. **Accessibility**: WCAG 2.1 AA minimum; keyboard navigation and screen reader support are non-negotiable.

Rationale: Respects user time and bandwidth; improves SEO; ensures content reaches all audiences.

---

### IV. Fast-by-Default

Performance is a feature, not an afterthought. Every page must load and render quickly, with measurable targets.

Performance gates MUST enforce:
- **Lighthouse score ≥ 90** on mobile and desktop (across Performance, Accessibility, Best Practices, SEO).
- **First Contentful Paint < 2.5s** on 4G networks.
- **Cumulative Layout Shift < 0.1** (no jank during interaction).
- **Total bundle size < 100KB gzipped** per page (including all resources).
- **Zero layout-blocking JavaScript** in critical render path.

Optimization focuses: Image optimization (WebP, lazy loading), CSS purging (TailwindCSS), pre-rendering static routes, font subsetting.

Rationale: Fast sites improve SEO, reduce bounce rates, respect users on slow networks, and enhance accessibility.

---

## Development Workflow

### Content Management

- **Blog posts, books, podcasts, experiences** stored as Markdown in `src/content/` collections.
- Astro Content Collections (`.config.ts`) enforce frontmatter schema validation (title, date, author, etc.).
- Each content type has a dedicated layout/template ensuring consistency.

### Component Guidelines

- **Framework preference**: Astro for server-side rendering, React/Preact for interactive-only components.
- **Styling**: TailwindCSS only; no custom CSS beyond `global.css` for setup.
- **Testing**: Manual QA via Lighthouse and visual regression; complex logic (if any) backed by unit tests.

### Build & Deployment

- **Build**: `npm run build` produces static output via Astro, deployed to Vercel.
- **Preview**: `npm run preview` before pushing to main.
- **Monitoring**: Track Lighthouse scores via CI/CD; block deployment if score drops below 85.

---

## Governance

### Constitution Enforcement

This constitution MUST be verified during:
- **Feature proposals** (Spec → Plan phase): Confirm alignment with principles before design.
- **Code review**: PRs must justify any violations (e.g., adding a heavy library for marginal UX gain).
- **Deployment**: Lighthouse checks and manual audits prevent regressions.

### Amendment Procedure

1. **Proposal**: File issue or start discussion with rationale.
2. **Review**: At least 1 maintainer reviews against current project state.
3. **Ratification**: Approved changes increment version using semantic versioning:
   - **MAJOR**: Principle removed or fundamentally redefined (e.g., dropping "Fast-by-Default").
   - **MINOR**: New principle added or existing principle materially expanded.
   - **PATCH**: Clarifications, examples, or non-semantic wording adjustments.
4. **Documentation**: Update this file, sync dependent templates, and commit with message: `docs: amend constitution to vX.Y.Z (<reason>)`.

### Guidance & Runtime Decisions

For runtime decisions not covered here, refer to:
- `.specify/templates/spec-template.md` - Feature specification requirements.
- `.specify/templates/plan-template.md` - Technical planning and architecture gates.
- `README.md` - Tech stack and quick-start details.

---

**Version**: 1.0.0 | **Ratified**: 2025-10-20 | **Last Amended**: 2025-10-20

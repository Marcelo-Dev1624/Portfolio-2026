# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

No test framework is configured. No linter config present.

## Architecture

**Stack:** React 18 + Vite + Tailwind CSS (utility classes rarely used; almost all styling is custom CSS). No TypeScript.

### Routing (`src/App.jsx`)
React Router v6. Routes:
- `/` → `MainPage` (single scrollable page with 4 sections)
- `/projects` → `ProjectsPage`
- `/projects/:slug` → individual project pages (one file each under `src/pages/projects/`)
- `/contact` → `ContactPage`

`LangSwitcher` floats globally outside the route tree.

### Content data (`src/data/projects.jsx`)
Single source of truth for project metadata (image, technologies, link, style variant). Localized strings (title, descriptions) live in the i18n locale files — **not** here. `featuredProjects` and `earlyProjects` are kept separate; `allProjects` merges both.

### Internationalization (`src/i18n/`)
i18next with two locales: `en` and `es`. Language preference persists in `localStorage` under `preferredLanguage`. All user-facing copy must live in `src/i18n/locales/en.json` and `src/i18n/locales/es.json`. Use `useTranslation()` hook; use `<Trans>` for markup-heavy strings.

### Animations
- **`Reveal` component** (`src/components/Reveal.jsx`) — wraps any element with a fade+slide+scale reveal. Props: `index`/`delay` for staggering, `eager` to force animation even when already in viewport (use on short pages like `/contact`).
- **`useScrollAnimation`** hook — `IntersectionObserver` based; uses `useLayoutEffect` to avoid flash of hidden state for above-the-fold elements.
- **`LoadingAnimation`** — intro animation shown on first load, defined in `src/styles/animations/loading.css`.

### CSS architecture
All CSS is custom — Tailwind is present but minimally used. CSS files are imported individually in `src/main.jsx` (not via `@import`) so Vite HMR reloads each file in isolation. **Do not use `@import url(...)` in CSS files.**

Import order matters — responsive files must come last to correctly override:
1. Base (variables, reset, typography, utilities)
2. Components
3. Layout
4. Pages
5. Animations
6. Responsive (`mobile.css`, `tablet.css`) — **must be last**
7. Background effects

Design tokens are CSS custom properties in `src/styles/base/variables.css`. Accent color: `--accent-color: #4de297` (green). Dark-only theme; light mode variables exist but are commented out.

### Contact form backend (`api/`)
PHP + PHPMailer deployed alongside the Vite build. `api/config.php` is gitignored — copy from `api/config.example.php`. The deploy workflow copies the entire `api/` directory into `dist/api/` but excludes `config.php` (must be on the server already). Honeypot field `website` silently discards bot submissions.

### Deployment
GitHub Actions (`deploy.yml`) on push to `main`: build → copy `api/` into `dist/` → FTP deploy to Hostinger `/public_html/`. Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

### Adding a new project
1. Add entry to `featuredProjects` or `earlyProjects` in `src/data/projects.jsx`.
2. Add localized strings under `projects.<id>` in both locale files.
3. Create `src/pages/projects/Project<Name>.jsx` using `ProjectDetailLayout` (handles navbar, close button, footer, and `Reveal` wrapping for each child block).
4. Add route in `src/App.jsx`.

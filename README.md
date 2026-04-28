# Piyush Razdan — Portfolio

Personal portfolio site. Built with React, deployed to GitHub Pages.

**Live:** https://piyushraz.github.io/portfolio

## Stack

- **React 18** (Create React App)
- **react-scroll** for in-page section navigation with active-section spy
- **gh-pages** for deployment
- **Inter / Space Grotesk / JetBrains Mono** (Google Fonts)
- Pure CSS — no UI library, no Tailwind. CSS variables drive light/dark theming.

## Sections

`Title → About → Experience → Education → Projects → Skills → Contact`

Highlights:

- **Animated code-rain hero** — canvas-based, syntax-highlighted code snippets flow horizontally in three parallax depth layers; blurred and dimmed so the title text reads cleanly.
- **Typewriter role headline** that cycles through `Software Developer → GenAI Engineer → RAG Builder → Agentic Systems Developer → MCP Practitioner → A2A Architect → AI Orchestrator`.
- **Theme toggle** (light / dark) — persisted to `localStorage`; defaults to system preference; the entire site re-themes via CSS variables.
- **Hide-on-scroll-down navbar** with floating glass capsule, animated gradient border, sliding active-pill that follows hover and active section, and a chamfered "PR" emblem with a rotating conic-gradient ring.
- **Radial mobile nav** — bottom-right FAB that fans out 6 numbered circles with hub-and-spoke connecting lines; replaces the desktop hamburger on screens ≤880px.
- **Reveal-on-scroll** for sections, cards, and chips via `IntersectionObserver`.
- **3D tilt + cursor spotlight** on Project, Experience, and Education cards (mouse only — disabled on `(hover: none)` devices).
- **Mobile-aware perf** — code-rain canvas runs at lower fps and density on phones.

## Local development

```bash
npm install
npm start          # http://localhost:3000/portfolio (hot reload)
```

Open the dev URL with the trailing `/portfolio` path — `homepage` in `package.json` is set to the production URL, and the dev server respects that base path.

## Build

```bash
npm run build
```

Outputs an optimized static bundle to `build/`.

## Deploy (GitHub Pages)

```bash
npm run deploy
```

Runs `predeploy` (`npm run build`) and force-pushes the build output to the `gh-pages` branch via the `gh-pages` package. GitHub Pages serves that branch.

First-time only: in the GitHub repo, go to **Settings → Pages**, set source to **Deploy from a branch**, branch **gh-pages**, folder **/ (root)**.

## Project structure

```
src/
  App.js, App.css            # routes, theme state, CSS variables
  components/
    background/              # canvas code-rain + radial glows
    title/                   # hero name + role typewriter + CTAs
    navbar/                  # desktop nav, theme toggle, RadialNav (mobile)
    about/
    experience/              # alternating timeline with pulsing dots
    education/
    projects/                # card grid with tilt + spotlight
    skills/                  # categorized chips
    contact/
    reveal/                  # IntersectionObserver wrapper + useTilt hook
public/
  resume.pdf                 # source of truth for content
  *.png                      # project thumbnails
```

## Customization knobs

- Theme colors: `--accent`, `--accent-2`, `--accent-3` in `src/App.css`
- Fonts: `--font-sans`, `--font-display`, `--font-mono` in `src/App.css`
- Roles cycle list: `ROLES` in `src/components/title/Title.js`
- Code snippets in the hero: `SNIPPETS` in `src/components/background/Background.js`
- Section content: each component's `.js` file (no CMS)

## Contact

- **Email:** piyush.razdan@gmail.com
- **GitHub:** https://github.com/piyushraz
- **LinkedIn:** https://www.linkedin.com/in/piyushrazdan

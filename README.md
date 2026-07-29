# Ghazariz — Systems Beyond Screens

An immersive product-and-technology portfolio for Ghazariz, rebuilt from the original `LevianthProject/home` history.

The site presents evidence-based work across product strategy, experience design, technical planning, and cross-functional execution. Its visual direction follows the supplied Direction 03 reference without using that screenshot as a production webpage.

## Stack

- Next.js App Router + React + TypeScript
- Static export for GitHub Pages
- GSAP for authored reveal and scroll-linked motion
- Lenis for smooth wheel and anchor scrolling
- CSS custom properties + CSS Modules-style global component classes
- MDX for long-form case-study narratives
- Locally bundled Archivo and Manrope variable fonts
- Playwright + axe-core for route, visual, interaction, and accessibility QA
- Impeccable UI skill and detector for design-system quality

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run check:assets
npm run build
```

For browser QA, start the development server and run:

```bash
npm run test:e2e
```

The test uses the locally installed Chrome by default. Override `PORTFOLIO_URL`, `QA_OUT_DIR`, or `CHROME_PATH` when needed.

## Static export and GitHub Pages

`npm run build` creates `out/`. Production builds use the `/home` base path and trailing-slash routes so GitHub Pages can serve direct nested navigation.

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. In GitHub:

1. Open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push or merge the verified implementation to `main`.

Production target: `https://levianthproject.github.io/home/`

## Content requiring final verification

- Resume PDF
- LinkedIn and public GitHub profile URLs
- Exact employment dates
- Current MLS, ML Space, Museum CMS, Miniboard, and Museum Majapahit status
- Approved project screenshots and collaborator credits
- Permission for any company or partner logos

Unverified values remain hidden or explicitly labeled in the public interface.

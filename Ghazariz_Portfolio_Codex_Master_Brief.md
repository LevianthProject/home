# Ghazariz Portfolio — Codex Master Build Specification

> **Selected visual direction:** Direction 03 — Experimental / Bold  
> **Reference image:** `references/Ghazariz_Portfolio_Design_Direction_03_Reference.png`  
> **Purpose:** Rebuild and substantially upgrade Ghazariz's personal portfolio into an immersive, Awwwards-inspired product-design portfolio that is visually faithful to the selected direction while using accurate, evidence-based content.  
> **Primary implementation agent:** Codex  
> **Instruction priority:** This document is the single source of truth for visual direction, page structure, content, implementation, and quality checks.

---

# 0. Codex: Read This First

Build the portfolio, do not merely describe it.

The selected target is the supplied **Direction 03 — Experimental / Bold** reference. Recreate its visual language and composition faithfully, but adapt the copy and sections to Ghazariz's actual professional positioning and project history.

## Non-negotiable rules

1. **Use the reference image as a visual target, not as a production background.**
2. **Do not switch to another visual direction.** Do not make it minimal, editorial, soft glassmorphism, or a generic SaaS landing page.
3. **Do not use remote image URLs for critical visuals.** All production images, textures, thumbnails, fonts where practical, and media must resolve from the repository or a deliberately configured asset host.
4. **Do not leave broken images, empty placeholders, fake browser frames, lorem ipsum, or dead buttons.**
5. **Do not copy the dummy claims shown in the visual reference.** The reference contains decorative sample metrics such as years, clients, completed projects, and satisfaction. Those numbers are not verified and must not appear as factual claims.
6. **Do not invent employment dates, client names, revenue, user counts, launch results, conversion metrics, or project outcomes.** Use only the content in this specification. Mark uncertain items clearly as `Last known`, `Concept`, `Prototype`, `Demo testing`, or `Needs validation` where relevant.
7. **The result must feel custom-built.** Avoid template-like sections, repetitive cards, default Tailwind aesthetics, excessive borders, generic gradients, and overused icon treatments.
8. **Keep the homepage focused.** It must communicate positioning, selected work, thought process, and contact—not display every fact available in the content library.
9. **Build responsive behavior intentionally**, not by shrinking the desktop canvas.
10. **Respect reduced motion, keyboard navigation, semantic HTML, readable contrast, and focus states.**
11. **Run the project and inspect it visually before calling it finished.** A successful build command alone is not sufficient.
12. **Create `design-qa.md` in the project root** and do not hand off until it states `final result: passed`.

## Correct interpretation of “same as design 03”

“Same” means the implementation must preserve the reference's defining visual DNA:

- near-black full-bleed canvas;
- oversized uppercase grotesk display headline occupying the left half;
- minimal wordmark and compact top navigation;
- small role eyebrow above the headline;
- one dominant sculptural glossy black-and-violet visual on the right;
- circular availability treatment near the upper-right hero area;
- small supporting copy and a restrained circular-arrow CTA;
- a dark translucent proof strip anchored across the lower hero;
- strong asymmetry, dramatic negative space, sharp typography, and high contrast;
- subtle violet lighting rather than a colorful multi-gradient background;
- premium creative-technology mood rather than a corporate dashboard look.

The implementation can evolve below the first viewport, but it must remain part of the same design system.

---

# 1. Project Objective

Rebuild the current portfolio at:

`https://levianthproject.github.io/home/`

The old site is migration context only. Do not preserve its visual system unless there is content or an asset worth carrying over. The new portfolio must reposition Ghazariz as an executive product-and-technology operator with product-design depth—not simply as a frontend developer or a gallery-style UI designer.

## Primary outcome

Within the first 30 seconds, a visitor should understand that Ghazariz:

- works across product strategy, product design, technical planning, and execution;
- structures complex products and operating systems, not only interface screens;
- has experience spanning education platforms, parental technology, museum systems, internal performance systems, remote teams, and experimental products;
- can operate as a Technical Product Manager, Product Manager, Product Designer, or Product & Technology Lead;
- can be contacted for a role, partnership, or complex product engagement.

## Primary audiences

- recruiters and hiring managers;
- founders and product leaders;
- technology leaders;
- institutions and strategic partners;
- collaborators and potential clients;
- design and technology peers.

## Primary conversion actions

1. Explore selected work.
2. Open a case study.
3. Understand Ghazariz's working approach.
4. View or download the resume.
5. Contact Ghazariz.

---

# 2. Chosen Art Direction

## Direction name

**Experimental / Bold — Sculptural Product Systems**

## Brand feeling

The experience should feel:

- decisive;
- intelligent;
- futuristic without becoming sci-fi cliché;
- high-trust;
- cinematic;
- product-led;
- technically credible;
- slightly provocative;
- controlled, not chaotic.

## Avoid

- generic cyberpunk neon;
- gaming UI clichés;
- full-page purple gradients;
- rainbow iridescence;
- excessive glass cards;
- tiny unreadable type;
- decorative dashboards unrelated to real projects;
- random 3D objects repeated in every section;
- excessive grain that hurts readability;
- multiple competing accent colors;
- fake awards, fake metrics, and fake testimonials;
- template phrases such as “creating digital experiences that matter” without supporting specificity.

---

# 3. Visual Reference and Asset Policy

## Reference file

Use:

`references/Ghazariz_Portfolio_Design_Direction_03_Reference.png`

This reference is a crop from the selected concept. It is for visual comparison only.

## Production asset policy

Every critical visual must be local or safely bundled.

Recommended structure:

```text
public/
├── images/
│   ├── hero/
│   │   ├── sculptural-violet-black.webp
│   │   ├── sculptural-violet-black@2x.webp
│   │   └── sculptural-violet-black-fallback.jpg
│   ├── projects/
│   │   ├── mls/
│   │   ├── ml-space/
│   │   ├── museum-cms/
│   │   ├── miniboard/
│   │   ├── museum-majapahit-bali/
│   │   └── experiments/
│   ├── about/
│   └── social/
├── fonts/
└── documents/
    └── ghazariz-resume.pdf
```

Rules:

- No Unsplash or random CDN URLs for hero or project imagery.
- Use modern formats such as WebP or AVIF with a JPG fallback when appropriate.
- Provide explicit `width`, `height`, `sizes`, and meaningful `alt` text.
- Never render the chosen reference screenshot as the website itself.
- The hero's sculptural object should be a dedicated asset or a lightweight real-time scene—not a CSS drawing.
- If using Three.js, provide a static fallback for low-power devices, reduced motion, and failed WebGL initialization.
- Preload only the true above-the-fold asset.
- Project images must be exported into the repository before final QA.

## Hero art direction

Create one hero visual with:

- intertwined glossy black and deep-violet ribbon or folded membrane forms;
- a strong diagonal movement from lower-center toward upper-right;
- smooth reflective material;
- localized violet edge light;
- very dark negative space around the object;
- no embedded text;
- no logo;
- no faces;
- no UI cards;
- no stock photography;
- no noisy particle field;
- enough transparent or black breathing room to crop responsively.

The object should appear as one meaningful sculptural focal point, not a collection of unrelated blobs.

---

# 4. Design Tokens

Use CSS custom properties as the source of truth. Tailwind tokens may map to them, but do not scatter raw values across components.

```css
:root {
  --color-bg: #050505;
  --color-bg-elevated: #0b0b0d;
  --color-surface: rgba(16, 16, 20, 0.78);
  --color-surface-strong: #111114;
  --color-text: #f5f5f2;
  --color-text-soft: #c8c8c2;
  --color-muted: #8f8f98;
  --color-line: rgba(255, 255, 255, 0.12);
  --color-line-strong: rgba(255, 255, 255, 0.22);
  --color-accent: #8b5cf6;
  --color-accent-bright: #a78bfa;
  --color-accent-deep: #5b21b6;
  --color-success: #7ee787;

  --page-max: 1600px;
  --page-gutter: clamp(20px, 4vw, 72px);
  --section-space: clamp(96px, 12vw, 192px);

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --shadow-violet: 0 20px 80px rgba(91, 33, 182, 0.26);
  --shadow-deep: 0 32px 96px rgba(0, 0, 0, 0.5);
}
```

## Color usage

- 80–90% of the page should remain neutral black, graphite, white, and muted gray.
- Violet is a directional light and interaction accent, not a background fill.
- Use pure white only for critical headline text and primary active states.
- Borders should be subtle and never become the main section separator.

---

# 5. Typography

## Font direction

Use a modern grotesk/sans combination that can reproduce the reference's dense uppercase display type and remain readable in long case studies.

Recommended strategy:

- **Display:** a wide or neutral grotesk with heavy weights.
- **Body:** a highly readable sans with excellent lowercase forms.
- Limit the system to two families maximum.
- Use locally bundled font files when licensing permits; otherwise use a reliable font provider configured by the framework.

Do not use a decorative serif on the homepage. The chosen direction is bold grotesk, not editorial.

## Type scale

```css
--type-display: clamp(64px, 9.4vw, 156px);
--type-h1-case: clamp(48px, 6vw, 104px);
--type-h2: clamp(40px, 5vw, 82px);
--type-h3: clamp(28px, 3vw, 48px);
--type-body-lg: clamp(18px, 1.45vw, 24px);
--type-body: clamp(15px, 1vw, 18px);
--type-small: 12px;
--type-micro: 10px;
```

## Display headline treatment

- uppercase;
- font weight 700–900 depending on the selected font;
- line-height between `0.82` and `0.9`;
- letter-spacing between `-0.055em` and `-0.035em`;
- no text shadow;
- no gradient-filled headline;
- line breaks must be authored, not accidental.

Homepage display headline:

```text
SYSTEMS
BEYOND
SCREENS.
```

This replaces the decorative reference copy while preserving its rhythm and visual impact.

## Body copy

- body line-height: `1.55–1.75`;
- ideal measure: `48–68ch`;
- muted copy should still pass contrast requirements;
- avoid center-aligning long copy.

---

# 6. Global Layout System

## Desktop grid

- maximum canvas: `1600px`;
- minimum page gutters: `64px` at a 1440px viewport;
- 12-column layout;
- hero uses a 5/7 or 6/6 split depending on the final sculptural asset crop;
- project sections may use asymmetrical 7/5 and 5/7 compositions;
- major vertical rhythm should feel generous, not compact.

## Breakpoints

Use content-driven breakpoints rather than default framework behavior only.

Suggested checks:

- 360 × 800;
- 390 × 844;
- 768 × 1024;
- 1024 × 768;
- 1280 × 800;
- 1440 × 900;
- 1920 × 1080.

## Mobile principles

- keep the display headline bold, but reduce it to a readable 3-line composition;
- move the hero sculpture behind or below the headline without destroying contrast;
- do not retain the desktop proof strip as four tiny columns; transform it into a two-column grid or horizontally scrollable labeled rail;
- top navigation becomes a purposeful full-screen menu, not a default hamburger dropdown;
- disable custom cursor and heavy parallax on touch devices;
- prioritize project thumbnails and case-study summaries over decorative motion.

---

# 7. Global Header

## Desktop composition

Left:

`GHAZARIZ`

Right navigation:

- Work
- About
- Process
- Thoughts
- Contact

Optional persistent action:

- Resume

## Header behavior

- starts transparent over the hero;
- after scrolling, gains a subtle dark backdrop and thin bottom line;
- remains visually light and no taller than necessary;
- active item is indicated through a small dot, underline, or violet shift—never a filled pill for every item;
- wordmark links to home;
- header links scroll or navigate correctly;
- keyboard focus is clearly visible.

## Mobile menu

- full-viewport dark overlay;
- oversized navigation numbers and labels;
- smooth open/close animation;
- body scroll locking;
- Escape closes the menu;
- focus is trapped while open;
- no broken background scroll state after route change.

---

# 8. Homepage Hero — Pixel-Level Intent

## Viewport target

Design the primary first view around `1440 × 900`, while remaining responsive.

## Composition

- header height: approximately `72–92px`;
- hero min-height: `100svh`;
- left content begins below header and occupies approximately 45–52% of the width;
- right sculpture occupies approximately 48–58%;
- headline sits visually dominant and should not be reduced to make room for excessive copy;
- proof strip sits across the bottom of the hero and overlaps the visual area slightly;
- there must be enough negative space above and around the sculpture.

## Hero eyebrow

```text
● TECHNICAL PRODUCT MANAGER · PRODUCT DESIGNER
```

The dot can pulse very subtly, but it must stop under reduced motion.

## Hero headline

```text
SYSTEMS
BEYOND
SCREENS.
```

## Hero supporting copy

```text
I turn complex product ideas into structured, usable, and buildable systems—connecting strategy, experience design, technical planning, and execution.
```

## Primary hero CTA

Label:

`EXPLORE SELECTED WORK`

Treatment:

- text label plus a circular arrow control;
- thin outline or very subtle surface;
- strong hover state with violet light sweep or arrow movement;
- entire control must be clickable;
- scrolls to Selected Work.

## Availability ring

Circular text:

```text
OPEN TO PRODUCT & TECHNOLOGY OPPORTUNITIES
```

Center:

- small directional arrow or star-like icon from an icon library;
- no emoji;
- no custom hand-drawn SVG.

Motion:

- slow rotation, 25–40 seconds per revolution;
- pause or disable for reduced motion;
- do not rotate the center icon with the text.

## Hero proof strip

Preserve the visual position of the reference's metric bar, but use truthful capability labels instead of fabricated numbers.

Columns:

1. `PRODUCT STRATEGY`  
   `MVP, positioning, pricing, roadmap`
2. `SYSTEM & UX DESIGN`  
   `Roles, workflows, journeys, prototypes`
3. `TECHNICAL PLANNING`  
   `Architecture, scope, infrastructure trade-offs`
4. `CROSS-FUNCTIONAL LEADERSHIP`  
   `Product, technology, people, and operations`

Desktop:

- four columns;
- translucent graphite surface;
- top highlight line with a subtle violet edge toward the right;
- separators lighter than the background but not bright white.

Mobile:

- two columns or horizontal snap rail;
- labels remain at least 11–12px;
- supporting text remains readable.

---

# 9. Homepage Sections

## Section order

```text
Hero
Selected Work
Positioning / What I Actually Do
Featured Case Study Narrative
Process
Capabilities
Experience Snapshot
About Preview
Thoughts / Experiments Preview
Contact / Footer
```

Do not add a client-logo marquee unless verified logos and permission are available.

---

## 9.1 Selected Work

### Section label

`01 / SELECTED WORK`

### Heading

```text
SELECTED SYSTEMS,
NOT JUST SCREENS.
```

### Intro

```text
These case studies show how I connect product strategy, user experience, business logic, technical constraints, and delivery decisions.
```

### Featured order

1. MLS — Minilemon Learning System
2. ML Space
3. Centralized Museum CMS
4. Miniboard
5. Museum Majapahit Bali
6. Playground and Product Experiments

### Card composition

Each card must include:

- category;
- project title;
- one-sentence problem or system summary;
- role;
- status label;
- 2–4 capability tags;
- local project visual;
- clear link to case study.

### Card visual behavior

- large image-first panels rather than six identical small cards;
- alternate alignment and proportions;
- project visual should subtly scale or pan on hover;
- title baseline and action remain stable;
- one violet accent per card maximum;
- cards must not float as glass panels over random gradient backgrounds.

### Suggested layout

- Project 1: full-width feature, image right.
- Projects 2 and 3: asymmetric two-column pair.
- Project 4: wide dark dashboard composition.
- Project 5: cinematic image-led cultural experience.
- Project 6: compact experimental index or ticker.

---

## 9.2 Positioning Section

### Section label

`02 / POSITIONING`

### Headline

```text
I DO NOT ONLY DESIGN INTERFACES.
I DESIGN THE SYSTEM BEHIND THEM.
```

### Copy

```text
My work begins where products are still ambiguous: defining the real problem, mapping users and roles, deciding the smallest credible product, documenting trade-offs, and connecting design decisions to technical execution.
```

### Visual treatment

- oversized text broken across two columns;
- keywords become interactive hover targets;
- a thin violet tracking line can follow scroll progress;
- no card grid in this section.

---

## 9.3 Featured Case Study Narrative

Use MLS as the homepage's deepest preview.

### Label

`FEATURED SYSTEM / MLS`

### Headline

```text
FROM AN INTERNAL LMS
TO A MULTI-TENANT
EDUCATION PLATFORM.
```

### Narrative beats

1. Product started from internal learning and internship needs.
2. Scope expanded toward institutions, bootcamps, and future marketplace capability.
3. Product direction required separating business models and user flows.
4. Phase-one scope had to remain credible and technically realistic.
5. Infrastructure decisions had to consider concurrency, media, storage, and cost.

### Interaction

- scroll-led sequence with sticky text and changing local visuals;
- maximum 4–5 states;
- each state must remain understandable without animation;
- disable sticky storytelling on narrow mobile layouts if it hurts usability.

---

## 9.4 Process

### Section label

`03 / PROCESS`

### Headline

```text
REDUCE AMBIGUITY
BEFORE TEAMS SPEND HEAVILY.
```

### Steps

1. Find the real problem.
2. Structure users, roles, and workflows.
3. Choose the smallest credible version.
4. Connect design and technology.
5. Make decisions and execution visible.

### Layout

- horizontal numbered sequence on desktop;
- stacked sequence on mobile;
- active step receives violet emphasis;
- use short copy and link to a deeper Process page or About section.

---

## 9.5 Capabilities

Group capabilities into four larger domains instead of a dense badge cloud.

1. Product Strategy
2. Product & Experience Design
3. Technical Product Planning
4. Leadership & Operations

Each domain can expand on hover or click to reveal specific skills. Do not show all skills at once in the initial view.

---

## 9.6 Experience Snapshot

Use a concise timeline rather than a traditional résumé wall.

Public role framing:

- Product & Technology leadership in the Minilemon ecosystem;
- Product Manager and Product Designer responsibilities;
- Community Manager at Codepolitan / KelasFullstack;
- Frontend mentorship and learning-community involvement;
- cross-functional involvement spanning HR systems, operations, partnerships, and technology.

Dates must be inserted only when verified from the résumé or user-provided source.

---

## 9.7 About Preview

### Headline

```text
BETWEEN THE WHITEBOARD
AND THE REAL SYSTEM.
```

### Copy

```text
I work across strategy, UX, product logic, technology decisions, and operating systems. I am most useful when a project is ambitious, fragmented, or still difficult to explain.
```

### Visual

- do not require a portrait for launch;
- use a dark environmental detail, desk/process image, or abstract system diagram if no approved personal photo is available;
- never invent a portrait of Ghazariz.

---

## 9.8 Thoughts and Experiments

Show 3–4 compact entries:

- Cosplay Rental Operating Platform
- Laundry Subscription + IoT
- Virtual Academy
- AI-Assisted Game Development

Clearly mark them as `Concept`, `Research`, or `Experiment` where applicable.

---

## 9.9 Contact

### Headline

```text
HAVE A COMPLEX
PRODUCT PROBLEM?
```

### Copy

```text
I am open to product, design, technology leadership, and selected collaboration opportunities.
```

### Actions

- Email
- LinkedIn
- Resume

Use actual user-provided contact information. Until supplied, use a visible `TODO` in the data file rather than publishing fabricated details.

---

# 10. Work Index

## Route

`/work`

## Purpose

Provide a clear overview of case studies without losing the bold art direction.

## Layout

- strong page title;
- filter only if there are enough projects to justify it;
- categories can include `Education`, `Family Technology`, `Internal Systems`, `Culture`, `Infrastructure`, and `Experiments`;
- each item includes role and status;
- project hover can reveal a local preview image in a floating visual pane;
- mobile uses stacked media cards.

## Do not

- add fake project years;
- imply concepts are shipped products;
- classify internal work as client work unless confirmed;
- force every project to have fabricated metrics.

---

# 11. Case Study Design System

Every case study must have a strong editorial/product narrative while remaining visually connected to the homepage.

## Required sections

```text
Case Study Hero
Project Metadata
Context
Problem
Users / Roles
My Responsibilities
Constraints
Key Decisions
System / Flow
Design Direction
Technical Direction
Outcome or Last Known Status
Trade-offs
What I Learned
Next Project
```

## Metadata labels

- Product
- Role
- Status
- Scope
- Team
- Timeline
- Platform

Only include values that are known. Hide an empty row rather than showing `N/A` repeatedly.

## Case study hero

- black or project-specific dark background;
- large title, not a tiny title above a giant generic mockup;
- project visual may enter from the right or lower edge;
- role and status remain visible before scrolling;
- avoid claiming “results” when the source only supports progress or design decisions.

## Content width

- long-form narrative: `58–72ch`;
- diagrams and interface visuals may span wider;
- sticky table of contents on large desktop only;
- headings are large and scannable;
- captions explain what the viewer is seeing and why it matters.

## Case study motion

- reveal diagrams by sequence;
- crossfade system states;
- use subtle image parallax;
- avoid text flying from every direction;
- maintain readable stationary states.

---

# 12. Project Content Requirements

The complete copy library appears later in this document. Use the following public order and status handling.

## MLS

Public status:

`Demo testing v1; product direction continued to evolve.`

Never present future marketplace, virtual academy, RTC scaling, or large user scenarios as already shipped.

## ML Space

Public status:

`Last known development progress: approximately 70%. Needs current validation before publishing as a live product.`

## Centralized Museum CMS

Public status:

`Architecture, role model, workflow, and frontend prototype prepared; prototype login was not production authentication.`

## Miniboard

Public status:

`Product system and experience direction developed; final production status requires validation.`

## Museum Majapahit Bali

Public status:

`Immersive storytelling and information architecture direction developed; current live implementation status must be validated.`

## Experiments

Use explicit labels such as:

- `Concept`
- `Early product research`
- `Business hypothesis`
- `Technical exploration`

---

# 13. Motion Direction

Use motion to reinforce hierarchy and causality.

## Global motion principles

- movement should be smooth, weighted, and slightly slow;
- major transitions: `600–1000ms`;
- small UI feedback: `160–280ms`;
- use easing with natural deceleration;
- no infinite motion except the availability ring and extremely subtle hero lighting;
- no scroll hijacking;
- no mandatory intro that blocks access to content;
- no motion that makes text difficult to select or read.

## Hero entry sequence

1. wordmark and navigation fade in;
2. role eyebrow appears;
3. display headline reveals line by line through clipping;
4. supporting copy fades upward slightly;
5. CTA becomes active;
6. sculpture eases into its final crop;
7. proof strip rises from the bottom.

Total sequence should feel fast enough that the page becomes usable within roughly 1.5 seconds.

## Scroll behavior

- subtle scale and vertical drift on hero sculpture;
- headline may reduce opacity slightly as the selected work section takes over;
- do not apply blur to all content during scroll;
- selected project visuals can react to pointer and scroll within small limits;
- preserve standard browser scrolling.

## Cursor

A custom cursor is optional on fine-pointer desktop devices only.

Rules:

- default pointer semantics must remain understandable;
- cursor enlarges over project links and displays `VIEW`;
- disable on touch, reduced-motion, and low-power contexts;
- never hide the native cursor if the custom cursor script fails.

## Page transitions

- keep transitions under 700ms;
- use shared project imagery or a simple mask transition;
- do not delay route navigation purely for spectacle;
- route focus must move to the new page heading.

---

# 14. Component Architecture

Recommended component map:

```text
src/
├── app/
│   ├── layout.*
│   ├── page.*
│   ├── work/
│   │   ├── page.*
│   │   └── [slug]/page.*
│   ├── about/page.*
│   ├── process/page.*
│   ├── thoughts/page.*
│   └── contact/page.*
├── components/
│   ├── global/
│   │   ├── SiteHeader
│   │   ├── MobileMenu
│   │   ├── SiteFooter
│   │   ├── PageTransition
│   │   ├── NoiseOverlay
│   │   └── CustomCursor
│   ├── hero/
│   │   ├── HomeHero
│   │   ├── HeroSculpture
│   │   ├── AvailabilityRing
│   │   └── CapabilityStrip
│   ├── work/
│   │   ├── SelectedWork
│   │   ├── ProjectFeature
│   │   ├── ProjectCard
│   │   ├── ProjectPreview
│   │   └── ProjectNavigation
│   ├── case-study/
│   │   ├── CaseStudyHero
│   │   ├── CaseMetadata
│   │   ├── CaseSection
│   │   ├── DecisionBlock
│   │   ├── SystemDiagram
│   │   ├── MediaFigure
│   │   └── CaseTableOfContents
│   ├── sections/
│   │   ├── PositioningSection
│   │   ├── FeaturedNarrative
│   │   ├── ProcessSection
│   │   ├── CapabilitySection
│   │   ├── ExperienceTimeline
│   │   ├── AboutPreview
│   │   ├── ThoughtsPreview
│   │   └── ContactSection
│   └── ui/
│       ├── ArrowButton
│       ├── MagneticLink
│       ├── SectionLabel
│       ├── StatusTag
│       ├── RevealText
│       └── MediaFrame
├── content/
│   ├── site.*
│   ├── projects.*
│   ├── experience.*
│   └── thoughts.*
├── lib/
│   ├── motion.*
│   ├── seo.*
│   ├── media.*
│   └── accessibility.*
└── styles/
    ├── tokens.css
    ├── globals.css
    └── utilities.css
```

Adapt extensions and directory conventions to the chosen framework.

## Content must be data-driven

Project metadata and navigation should come from structured content, not duplicated across route files.

Example shape:

```ts
export type ProjectStatus =
  | "concept"
  | "prototype"
  | "demo-testing"
  | "in-development"
  | "last-known"
  | "needs-validation";

export interface PortfolioProject {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  role: string[];
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  tags: string[];
  cover: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
```

---

# 15. Technical Implementation Direction

## Stack behavior

- Prefer the repository's existing production stack if it is healthy.
- For a clean rebuild, use a modern component-based React framework with TypeScript and file-based routing.
- Use a maintainable styling system with CSS variables and component-scoped patterns.
- Use an established animation library for timelines and scroll-linked sequences.
- Use a mature icon library that visually matches the reference. Do not hand-draw icons with HTML or improvised SVG paths.
- Use a 3D library only if the benefit outweighs the loading and maintenance cost. A high-quality static hero image with subtle transforms is acceptable and often more reliable.

## Repository-first workflow

1. Inspect the existing repository.
2. Identify the current framework, build scripts, routing, hosting target, and asset paths.
3. Preserve useful content and configuration.
4. Remove obsolete dependencies only after confirming they are unused.
5. Create a working branch.
6. Implement design tokens and typography before section-level polish.
7. Build the first viewport and compare it with the reference.
8. Build homepage sections.
9. Build content model and case-study routes.
10. Add motion after the static hierarchy is correct.
11. Optimize media.
12. Test responsive behavior.
13. Run accessibility, performance, and visual QA.

## GitHub Pages note

The previous site URL uses GitHub Pages. If the new site remains on GitHub Pages:

- account for the repository base path;
- ensure all local asset paths work after static export;
- test direct navigation and refresh behavior for nested routes;
- provide a 404 fallback where required;
- avoid server-only features that cannot run in static hosting;
- verify the exact production URL, not only local development.

If the site moves to another platform, document the migration and preserve redirects where possible.

---

# 16. Image Loading Reliability

This section is mandatory because earlier visual previews failed to load correctly.

## Required checks

- every `<img>` or framework image component resolves successfully in development and production;
- no asset path depends on the developer's local filesystem;
- paths are correct with and without a GitHub Pages base path;
- file names match exact casing;
- images have intrinsic dimensions;
- priority/preload is used only for the hero asset;
- lazy loading is used for below-the-fold visuals;
- local fallbacks exist for any remote media that remains necessary;
- failed images do not collapse the layout;
- no console 404s;
- no mixed-content warnings;
- no CORS-dependent decorative image fetches;
- no image is loaded from a chat attachment URL.

## Production asset test

Create a simple automated or manual checklist that verifies every path from the project data files exists under `public/` or the configured media directory.

Pseudo-check:

```text
for each project.cover.src
for each project.gallery[].src
for each global hero or about visual
assert file exists
assert width and height are present
assert alt text is non-empty unless decorative
```

## Fallback behavior

- if WebGL fails, show the static sculptural hero image;
- if an image fails, display a deliberate dark fallback surface with the project title—not a browser broken-image icon;
- preserve layout aspect ratio to prevent cumulative layout shift.

---

# 17. Accessibility

Minimum requirements:

- semantic landmarks: header, nav, main, section, footer;
- one logical H1 per route;
- visible skip link;
- all interactive elements keyboard accessible;
- sufficient contrast;
- reduced-motion behavior;
- screen-reader labels for icon-only controls;
- decorative visuals use empty alt text;
- case-study diagrams include captions or textual explanation;
- mobile menu focus trap and escape behavior;
- no essential information available only on hover;
- touch targets at least approximately 44px;
- route changes announce or focus the page heading;
- forms have labels, validation messages, and success feedback.

---

# 18. SEO and Metadata

Use the content library's SEO text and create route-specific metadata.

## Home title

`Ghazariz — Technical Product Manager & Product Designer`

## Home description

`Product strategy, experience design, technical planning, and technology leadership for complex digital systems.`

## Social card

Create a local Open Graph image using the selected bold design direction:

- black background;
- `GHAZARIZ` wordmark;
- `SYSTEMS BEYOND SCREENS.` headline;
- violet-black sculptural crop;
- role line;
- no fake metrics.

## Structured data

Use Person and WebSite structured data only with accurate public information. Do not add employer, address, alumni, award, or social fields without verified values.

---

# 19. Performance Targets

Treat these as build targets, not marketing claims.

- no layout shift caused by images or fonts;
- responsive images with correct `sizes`;
- font subset or limited weights;
- hero media optimized for the actual viewport;
- defer non-critical animation code;
- code-split 3D or heavy case-study modules;
- avoid shipping a large WebGL runtime to mobile if a static asset is visually sufficient;
- no autoplay video with audio;
- pause off-screen video and canvas work;
- maintain smooth interaction on mid-range devices;
- test with throttled network and CPU conditions.

---

# 20. Analytics and Privacy

Analytics are optional.

If added:

- use a privacy-conscious implementation;
- track only useful portfolio events;
- do not collect unnecessary personal data;
- document events such as `view_project`, `resume_click`, `contact_click`, and `case_study_complete`;
- never expose private keys or secrets in the client bundle.

---

# 21. QA and Acceptance Criteria

Create `design-qa.md` and evaluate the build against the selected reference and this specification.

## P0 — Blocking

- app does not run;
- build fails;
- page crashes;
- critical images fail to load;
- navigation or primary CTA does not work;
- production deployment renders blank or broken;
- mobile menu traps the user;
- false public claims are published.

## P1 — Major fidelity or usability issues

- hero composition does not resemble Direction 03;
- headline is too small or lacks the intended line breaks;
- sculptural visual is missing or visually unrelated;
- proof strip is absent or positioned incorrectly;
- typography feels generic or weak;
- mobile layout overlaps or clips;
- project case-study links are broken;
- contrast or keyboard navigation has major problems.

## P2 — Important polish issues

- spacing inconsistencies;
- motion timing feels abrupt;
- project imagery crops poorly;
- sections fall back to generic card grids;
- hover/focus states are incomplete;
- route transitions do not preserve accessibility;
- footer and contact states are unfinished.

## P3 — Follow-up polish

- small easing refinements;
- subtle crop adjustments;
- minor typography optical tuning;
- optional cursor improvements;
- secondary animation refinements.

## Visual acceptance checklist

At `1440 × 900`:

- wordmark is visible in the upper-left;
- compact navigation is visible in the upper-right;
- role eyebrow is above the headline;
- headline dominates the left side and reads `SYSTEMS / BEYOND / SCREENS.`;
- sculpture dominates the right side and uses black-violet glossy material;
- availability ring is visible without blocking content;
- support copy and CTA are below the headline;
- proof strip anchors the lower hero;
- the page remains mostly black and white with controlled violet light;
- no dummy metrics from the reference are present.

At mobile widths:

- no horizontal page overflow;
- headline remains legible and intentional;
- hero visual does not cover essential text;
- menu works with keyboard and touch;
- proof strip is readable;
- project content appears in a logical sequence;
- heavy motion is reduced.

## Functional acceptance checklist

- Home, Work, About, Process, Thoughts, and Contact routes work;
- all selected projects open correct case studies;
- resume action points to a real local document or is clearly disabled until provided;
- contact actions use real values or remain TODO in development only;
- all images load in the final host environment;
- no console errors or failed network requests remain;
- metadata and Open Graph image resolve;
- direct refresh on nested routes works on the chosen host;
- `design-qa.md` ends with `final result: passed`.

---

# 22. Delivery Requirements

Codex must deliver:

```text
1. Working source code
2. Local assets used by the website
3. Responsive homepage
4. Work index
5. Case-study pages for the selected portfolio projects
6. About page
7. Process page
8. Thoughts / Experiments page
9. Contact experience
10. Resume placeholder or real document integration
11. SEO metadata and social image
12. README with setup, development, build, and deployment instructions
13. design-qa.md with final result: passed
14. No broken image URLs
15. No fabricated public claims
```

## Final handoff note format

The final Codex response should include:

- what was built;
- important implementation decisions;
- commands to run locally;
- exact preview URL or deployment URL when available;
- files or content still requiring Ghazariz's real input;
- any remaining P3 polish items;
- confirmation that `design-qa.md` passed.

---

# 23. Suggested Implementation Phases

## Phase A — Foundation

- inspect repository;
- establish tokens;
- configure typography;
- create content data model;
- prepare local asset folders;
- establish global header/footer;
- confirm hosting constraints.

## Phase B — Direction 03 Hero

- build static composition first;
- add final sculptural asset;
- implement availability ring;
- implement proof strip;
- compare at 1440 × 900;
- fix visual hierarchy before adding motion.

## Phase C — Homepage Narrative

- selected work;
- positioning;
- featured MLS narrative;
- process;
- capabilities;
- experience;
- about;
- experiments;
- contact.

## Phase D — Case Studies

- reusable case-study template;
- MLS;
- ML Space;
- Centralized Museum CMS;
- Miniboard;
- Museum Majapahit Bali;
- experiment index.

## Phase E — Motion and Interaction

- hero sequence;
- scroll-linked sculpture movement;
- project hovers;
- mobile menu;
- page transitions;
- reduced-motion fallback.

## Phase F — Reliability and Launch

- local asset audit;
- production path test;
- responsive QA;
- accessibility QA;
- performance optimization;
- social card;
- deployment;
- final visual comparison;
- `design-qa.md` pass.

---

# 24. Required User Inputs Before Public Launch

Do not block the initial build for these, but surface them clearly as TODOs:

- confirmed public email;
- confirmed LinkedIn URL;
- final resume PDF;
- approved personal photo, if any;
- exact employment dates;
- current project statuses;
- approved project screenshots;
- permission for company and partner logos;
- any confidential information that must be removed;
- final deployment domain.

---

# 25. Content Library

The following content is the detailed, evidence-based portfolio source. Preserve its wording and status notes unless Ghazariz supplies a correction. Use it to populate the site, but curate the homepage rather than dumping the entire library into one route.

---

# Ghazariz — Product & Technology Portfolio Master Content

> **Version:** 1.0  
> **Prepared:** 30 July 2026  
> **Primary language:** English, with optional Indonesian localization  
> **Portfolio type:** Personal product-design and technical-product portfolio  
> **Primary audience:** Recruiters, founders, product leaders, technology leaders, partners, institutions, and potential collaborators  
> **Target roles:** Technical Product Manager, Product Manager, Product Designer, Product & Technology Lead  
> **Content principle:** Public, evidence-based, and honest about project status

---

## 1. Portfolio Positioning

### Primary Positioning

**Technical Product Manager and Product Designer who turns complex ideas into structured, buildable product systems.**

Ghazariz works across product strategy, user experience, technical planning, operating systems, and cross-functional delivery. His strongest work is not limited to producing interface screens. It includes defining product direction, translating ambiguous business needs into workflows, deciding what belongs in an MVP, structuring roles and permissions, evaluating technical trade-offs, and preparing teams to execute.

### Short Positioning Variants

**Default**

> I turn complex product ideas into systems teams can actually build.

**Product-led**

> I design products, workflows, and operating systems that connect user needs, business logic, and technical execution.

**Leadership-led**

> Product strategy, experience design, and technology leadership for ambitious digital systems.

### Public Role Label

Use this label consistently in the hero, metadata, social cards, and resume CTA:

**Technical Product Manager · Product Designer · Product & Technology Lead**

### Supporting Proof Points

- Product strategy and MVP definition
- User flows, role systems, and platform architecture
- Product requirements and implementation planning
- Cross-functional technology leadership
- Remote team workflow and operating-system design
- AI-assisted research, planning, prototyping, and execution

---

## 2. Core Narrative

Ghazariz operates at the intersection of product, design, technology, and operations.

His work spans education platforms, parental technology, performance systems, cultural and museum experiences, centralized content infrastructure, remote-team systems, creative technology, and early-stage SaaS concepts.

He is most effective when a project is still complex, fragmented, or underspecified. He breaks it down into a product model, user roles, workflows, scope boundaries, technical choices, implementation phases, risks, and measurable next steps.

The portfolio must communicate one central idea:

> **Ghazariz does not only design screens. He designs the system behind the screens.**

---

## 3. Website Goals

The portfolio should help a visitor understand, within the first 30 seconds:

1. Who Ghazariz is professionally.
2. Which roles he is qualified for.
3. What type of complex work he has handled.
4. How he thinks and makes product decisions.
5. Which projects demonstrate product, UX, technical, and leadership depth.
6. How to contact or hire him.

The portfolio should not feel like a generic frontend-developer template, a gallery of disconnected mockups, or a company profile for Minilemon.

---

## 4. Information Architecture

```text
/
├── Home
├── Work
│   ├── MLS
│   ├── ML Space
│   ├── Centralized Museum CMS
│   ├── Miniboard
│   ├── Museum Majapahit Bali
│   └── Playground / Selected Systems
├── About
├── Experiments
├── Resume
└── Contact
```

### Primary Navigation

- Work
- About
- Experiments
- Resume
- Contact

### Primary CTA

**Explore selected work**

### Secondary CTA

**Let’s build something meaningful**

---

# 5. Home Page Content

## 5.1 Hero

### Eyebrow

`PRODUCT · DESIGN · TECHNOLOGY · SYSTEMS`

### Headline

# I turn complex ideas into systems teams can actually build.

### Supporting Copy

I’m Ghazariz, a Technical Product Manager and Product Designer working across product strategy, experience design, technical planning, and cross-functional execution.

I create clarity around ambitious digital products—from the first problem definition and MVP decision to user flows, system architecture, implementation planning, and delivery.

### Primary CTA

**Explore selected work**

### Secondary CTA

**View my resume**

### Availability Label

`Open to Technical Product Manager, Product Manager, Product Designer, and Product & Technology Lead opportunities.`

### Location Label

`Based in Indonesia · Open to remote and relocation opportunities`

---

## 5.2 Hero Interaction Copy

Use a rotating or scroll-reactive set of keywords:

```text
Strategy
Systems
Experience
Execution
```

Optional cursor or hover microcopy:

```text
Think clearly.
Design intentionally.
Build realistically.
```

---

## 5.3 Proof Strip

```text
PRODUCT STRATEGY
UX & SYSTEM DESIGN
TECHNICAL PLANNING
CROSS-FUNCTIONAL LEADERSHIP
```

Supporting caption:

> From PRD and workflow design to architecture decisions, prototypes, and implementation plans.

---

## 5.4 Selected Work Introduction

### Heading

# Selected systems, not just selected screens.

### Copy

These projects show how I approach product problems across strategy, UX, business logic, technical constraints, operations, and delivery.

Each case study focuses on decisions, trade-offs, and system design—not only final visuals.

---

## 5.5 Selected Work Cards

### MLS — Minilemon Learning System

**Category:** Education Platform · PaaS · Multi-tenant Product  
**Role:** Product Manager · Product Designer · Technology Decision Maker  
**Status:** Demo testing v1; product direction continued to evolve

**Card summary**

A multi-tenant education platform designed to help institutions and bootcamps operate classes, mentors, learning content, evaluation, and payments without building their own platform.

**Card hook**

> From an internal LMS concept to a phased education platform serving institutions, bootcamps, and future course creators.

**Tags**

`Product Strategy` `Multi-tenant UX` `Pricing` `Roadmap` `Platform Architecture`

---

### ML Space

**Category:** Parental Technology · Education · Gamification  
**Role:** Product Strategy · Product Design · Feature System Design  
**Status:** Last known development progress: approximately 70%

**Card summary**

A parental monitoring product that transforms educational activity into a reward loop for children’s screen time.

**Card hook**

> Reframing screen-time control from punishment into a parent-guided learning and reward system.

**Tags**

`Product Concept` `Parent–Child UX` `Gamification` `Subscription Model`

---

### Centralized Museum CMS

**Category:** Content Platform · Cultural Technology · Cloud Architecture  
**Role:** Product Lead · Solution Designer · Workflow Architect  
**Status:** Master plan and interactive frontend-flow prototype prepared in July 2026

**Card summary**

A centralized publishing system for three museum websites, designed to add dynamic editorial workflows without replacing their existing React frontends.

**Card hook**

> One editorial operating system, three museum identities, and zero destructive migration.

**Tags**

`CMS` `Roles & Permissions` `Editorial Workflow` `Cloudflare` `System Design`

---

### Miniboard

**Category:** Internal Product · Performance System · Gamification  
**Role:** Product Strategy · Experience Design · Operating-System Design  
**Status:** Product concept, rules, and roadmap direction developed

**Card summary**

A contribution and performance system connecting KPI, XP, levels, badges, leaderboards, approvals, and rewards.

**Card hook**

> Making contribution visible without reducing performance to attendance or vanity metrics.

**Tags**

`Internal Product` `KPI` `Gamification` `Reward System` `Governance`

---

### Museum Majapahit Bali

**Category:** Cultural Experience · Immersive Web · Storytelling  
**Role:** Product Direction · Experience Strategy · Technical Coordination  
**Status:** Website and digital-ecosystem direction developed

**Card summary**

An immersive museum experience that uses narrative, collection discovery, visitor information, and digital storytelling to make history more approachable.

**Card hook**

> Turning a museum website into a guided cultural journey rather than a static information page.

**Tags**

`Immersive Web` `Storytelling` `Cultural UX` `Content Strategy`

---

### Playground and Product Experiments

**Category:** Product Discovery · SaaS · IoT · AI-Assisted Development  
**Role:** Product Explorer · System Designer  
**Status:** Research and early-stage concepts

**Card summary**

Selected explorations include a cosplay-rental operating platform, subscription-based laundry and IoT control, recruitment systems, virtual academy concepts, and AI-assisted game development.

**Card hook**

> Testing real operational problems before turning them into expensive products.

**Tags**

`Discovery` `SaaS` `IoT` `AI Workflow` `Business Model`

---

## 5.6 How I Work

### Heading

# I reduce ambiguity before teams spend heavily.

### Step 01 — Find the real problem

I start from operational reality, user friction, and business constraints—not from a feature wishlist.

### Step 02 — Structure the product

I define users, roles, permissions, workflows, value exchange, scope, and product boundaries.

### Step 03 — Choose the smallest credible version

I separate the MVP from future ambition so the product can learn before it scales.

### Step 04 — Connect design and technology

I translate product decisions into UX flows, technical requirements, infrastructure options, risks, and implementation phases.

### Step 05 — Make execution visible

I prepare documentation, ownership, review cycles, decision logs, and clear next actions for remote teams.

---

## 5.7 Capability Grid

### Product Strategy

- Product framing
- Market and competitor exploration
- MVP definition
- Feature prioritization
- Pricing and business-model exploration
- Roadmap and phase planning
- Risk and trade-off analysis

### Product and Experience Design

- Information architecture
- User journeys
- Role and permission models
- Workflow design
- Wireframes and interactive prototypes
- Design direction
- Gamification systems
- Multi-sided and multi-tenant UX

### Technical Product Planning

- Product requirements
- Frontend and backend scope
- API and data-flow planning
- Cloud and deployment decisions
- Realtime and media evaluation
- Storage and capacity planning
- Implementation-ready documentation

### Leadership and Operations

- Cross-functional coordination
- Remote-team workflow
- Hiring and role design
- KPI and performance systems
- Review and approval systems
- Stakeholder communication
- Partner and institution coordination

---

## 5.8 Experience Preview

### Heading

# Experience across community, mentorship, product, and technology leadership.

### Head of Information Technology Department / Product & Technology Lead

**Minilemon**  
`Approximately 2 years — exact public dates to confirm`

Led product and technology decisions across education, parental technology, museum systems, creative technology, internal platforms, infrastructure, recruitment, and cross-functional operations.

Key areas:

- Product strategy and requirements
- UI/UX direction
- Technology and infrastructure decisions
- Team structures and workflows
- Hiring and role definition
- Stakeholder and partner coordination
- Remote-first execution
- AI-assisted planning and prototyping

### Frontend Mentor

**Codepolitan / KelasFullstack ecosystem**  
`Approximately 2 years — exact public dates to confirm`

Supported frontend learning, mentoring, technical guidance, and developer growth across web fundamentals and modern JavaScript development.

### Community Manager

**Developer education communities**  
`Approximately 2 years — exact organization and dates to confirm`

Managed community communication, engagement, learning support, events, and member experience within developer-focused communities.

---

## 5.9 About Preview

### Heading

# I work between the whiteboard and the real system.

### Copy

My background crosses community building, frontend mentorship, product management, product design, technology leadership, operations, and organizational systems.

That range shaped how I work today. I can discuss user experience with designers, scope and architecture with developers, pricing and risk with decision makers, and workflow or accountability with operations teams.

I care about products that are useful, scalable, understandable, and realistic to build.

### CTA

**More about how I think**

---

## 5.10 Contact Section

### Heading

# Have a complex product problem?

### Copy

I’m open to product roles, design-led technology work, and collaborations where product clarity matters as much as execution.

### CTA

**Start a conversation**

### Public Contact

- Email: `m.ghazariz@gmail.com`
- LinkedIn: `[ADD VERIFIED LINK]`
- GitHub: `[ADD VERIFIED LINK]`
- Resume: `[ADD RESUME FILE OR URL]`

---

# 6. Case Study — MLS

## Hero

### Title

# Designing an education platform for institutions, bootcamps, and future learning ecosystems.

### Subtitle

How an internal LMS direction evolved into a multi-tenant platform with PaaS, bootcamp operations, and a phased education marketplace.

### Metadata

- **Product:** Minilemon Learning System
- **Role:** Product Manager, Product Designer, Technology Decision Maker
- **Domain:** Education technology
- **Surface:** Web platform
- **Status:** Demo testing v1; strategy and scope evolved over time
- **Primary users:** Institution owners, bootcamp owners, mentors, students, administrators

---

## Context

Institutions and bootcamps often need learning operations—classes, mentors, materials, assignments, evaluation, reporting, and payment—but do not want to build and maintain a complete platform from scratch.

MLS began as an internal learning and training system, then expanded into a broader product direction.

The challenge was not simply adding more features. It was deciding which business models could coexist, how user roles would work, what belonged in the first phase, and how the platform could grow without becoming too expensive or too complex too early.

---

## The Product Problem

The platform needed to support multiple organizational models:

1. Institutions that pay for a managed learning platform.
2. Bootcamp owners that operate paid cohorts.
3. Course creators who may eventually sell through a marketplace.
4. Students and members who need a coherent learning experience.
5. Mentors and administrators who need clear operational tools.

This created product tension around:

- Multi-tenant roles and permissions
- Different payment models
- Content and video storage
- Realtime-class costs
- Marketplace complexity
- Institution customization
- Mentor capacity
- Infrastructure scaling

---

## My Responsibilities

- Define and revise the product model
- Separate user types and business flows
- Structure pricing directions
- Define MVP and future phases
- Prepare product requirements
- Design key routes and role systems
- Evaluate realtime and media options
- Plan infrastructure scenarios
- Identify product and operational risks
- Connect MLS with internship and performance systems

---

## Key Product Decisions

### 1. Make PaaS the central product direction

MLS was positioned as a platform institutions and bootcamps could use without building their own learning system.

### 2. Separate institution and bootcamp economics

**Institution model**

- One monthly platform payment
- Students do not pay MLS directly
- Leading pricing direction: Rp2,000,000 per month
- Unlimited users with limited storage

**Bootcamp model**

- Platform fee direction: approximately Rp3,000,000
- Bootcamp owner controls class pricing
- MLS fee direction: approximately 3% per member or transaction
- Unlimited users with limited storage

These figures are documented product directions, not a claim of current public pricing.

### 3. Delay the marketplace when necessary

A course marketplace increases complexity across checkout, reviews, instructor dashboards, content delivery, revenue share, and moderation.

The marketplace was treated as a major pillar but could be delayed from the MVP to keep the initial product credible.

### 4. Keep phase one web-first

The Virtual Academy concept included movement, voice chat, classrooms, whiteboards, and group activity. It remained a future phase.

The first phase focused on the web platform without a game layer.

### 5. Scale based on concurrency, not vanity numbers

Realtime infrastructure should be evaluated from concurrent usage and session behavior, not only registered-user counts.

VideoSDK was evaluated for smaller-to-medium usage, while Cloudflare realtime technology was considered for higher scale.

---

## System Scope

Core product areas included:

- Authentication
- Role-based access
- Student dashboard
- Mentor dashboard
- Institution and bootcamp owner dashboard
- Classes and materials
- Video
- Assignments, quizzes, and exams
- Progress and attendance
- Certificates
- Discussion and notifications
- Payment and reporting
- Multi-academy management
- Institution and bootcamp management
- Gamification
- Internship evaluation
- Live classes
- Whiteboard
- Future marketplace
- Future virtual academy

---

## Progress and Outcome

The product reached a demo-testing-v1 stage in its known history.

The clearest outcome of the work was a more structured product direction:

- Defined platform models
- Separated major user and payment flows
- Established pricing hypotheses
- Clarified web-first MVP boundaries
- Identified future platform phases
- Created infrastructure decision frameworks
- Documented risks before scaling

Do not present target user counts, candidate schools, or pricing hypotheses as achieved commercial outcomes unless verified.

---

## What I Learned

A platform can become weaker when every valid idea is treated as an MVP requirement.

The most important product work was not feature expansion. It was creating boundaries between what MLS needed to prove first and what could become a future ecosystem.

---

# 7. Case Study — ML Space

## Hero

### Title

# Turning screen-time control into an educational reward loop.

### Subtitle

A parental product concept designed around collaboration between parents and children, rather than restriction alone.

### Metadata

- **Product:** ML Space / Minilemon Space
- **Role:** Product Strategy, Product Design, Feature-System Design
- **Domain:** Parenting, education, digital wellbeing
- **Status:** Last known development progress was approximately 70%
- **Primary users:** Parents and children
- **Extended users:** Teachers, students, and schools

---

## Context

Many parental-control products focus on blocking access, limiting time, or monitoring activity.

ML Space explored a different product behavior:

A child completes educational activity, then receives approved time for games or selected digital activities. Parents can monitor the entire loop.

---

## Product Loop

```text
Parent creates or selects an educational activity
→ Child completes the activity
→ System validates completion
→ Child receives reward time
→ Parent monitors progress and usage
```

Activities could include:

- Questions
- E-books
- Educational videos
- Learning challenges
- Custom parent-created content

---

## Product System

Potential product areas included:

- Screen-time monitoring
- App and activity monitoring
- Educational tasks
- Question builder
- Reward-time rules
- Parent dashboard
- Kids dashboard
- Teacher dashboard
- Gamified challenges
- Avatars and themes
- Daily streaks
- Family accounts
- Class monitoring
- School licensing
- Smart-device integration
- Premium parent-created questions

---

## My Product Focus

- Define the parent–child interaction model
- Design the educational reward loop
- Structure multiple account and dashboard types
- Explore subscription and licensing models
- Connect education, gamification, and monitoring
- Prevent the product from feeling purely punitive

---

## Progress and Outcome

The last documented status placed the product at approximately 70% development.

The portfolio should state this as a last-known progress marker, not as a current production claim.

The strongest portfolio story is the behavioral product model: transforming screen time into an understandable exchange between learning, trust, and reward.

---

# 8. Case Study — Centralized Museum CMS

## Hero

### Title

# One editorial operating system for three museum websites.

### Subtitle

Designing a centralized CMS that preserves existing React websites while adding secure, multi-site publishing workflows.

### Metadata

- **Project:** Centralized Museum CMS
- **Role:** Product Lead, Workflow Architect, Solution Designer
- **Domain:** Cultural technology, publishing, infrastructure
- **Status:** Master plan and frontend-flow prototype prepared in July 2026
- **Sites:** Museum Majapahit Bali, Glory of Islam Museum, Indonesian Heritage Museum

---

## Context

Three museum websites needed a shared way to publish dynamic blog and news content.

The solution could not carelessly replace or overwrite existing public websites, Workers, Pages projects, or domain routes.

The product needed to centralize editorial operations while preserving the identity and technical independence of each museum site.

---

## Constraints

- Public websites remain React + TypeScript
- Only selected content areas become dynamic
- Existing Workers and Pages projects must not be overwritten
- No public registration
- Publishing requires approval
- Each website requests content using its own `site_id`
- Initial architecture should avoid unnecessary VPS cost

---

## Product and Architecture Direction

```text
CMS Admin Frontend
Cloudflare Pages

        ↓

CMS API
Cloudflare Worker

        ↓

Content Database
Cloudflare D1

        ↓

Media Storage
Cloudflare R2
```

Public museum websites consume published content through the central API.

---

## Role Model

### `admin_writer`

- Create content
- Edit owned drafts
- Submit content for review
- Cannot publish directly
- Cannot approve content

### `superadmin`

- Review content
- Approve or reject
- Publish
- Edit and delete
- Manage content across sites
- Manage accounts when required

---

## Editorial Workflow

```text
admin_writer
→ draft
→ pending_review
→ superadmin approval
→ published
```

Rejected content returns to revision:

```text
superadmin rejection
→ rejected
→ admin_writer revision
→ pending_review
```

---

## Prototype Scope

The frontend-flow prototype included:

- Login
- Museum-site selection
- Portal dashboard
- Create and edit article
- Title and slug
- Excerpt
- Markdown content
- Cover image
- Category and tags
- Draft and published states
- News-portal preview
- Return to site selector
- Public visibility only for published content

---

## Key Decision

The safest architecture was additive, not destructive.

Instead of converting every museum site into a new server-rendered system, the CMS provides shared content infrastructure while the existing public frontends remain intact.

---

## Progress and Outcome

The work produced:

- A centralized product model
- A two-role governance system
- A complete editorial workflow
- A Cloudflare-native architecture
- Resource and domain naming
- Security requirements
- An interactive frontend-flow prototype
- Explicit safeguards for existing deployments

Production deployment status must be verified before the portfolio claims a live launch.

---

# 9. Case Study — Miniboard

## Hero

### Title

# Making contribution visible through a product system.

### Subtitle

A KPI, XP, level, badge, leaderboard, approval, and reward system for remote teams and internship programs.

### Metadata

- **Product:** Miniboard
- **Role:** Product Strategy, Experience Design, Operating-System Design
- **Domain:** Internal tools, people systems, gamification
- **Status:** Concept, rules, and roadmap direction developed

---

## Problem

Large remote teams can appear active while producing inconsistent output.

Attendance alone does not explain contribution, quality, improvement, collaboration, or ownership.

The product needed to make progress visible while avoiding a simplistic or easily manipulated points system.

---

## System Direction

Miniboard connects:

- KPI
- XP
- Levels
- Badges
- Leaderboards
- Mentor or lead reviews
- Approval
- Contribution history
- Reward redemption
- Anti-manipulation controls

Leaderboards could be separated by level so beginners are not immediately compared with senior contributors.

---

## Experience Direction

The visual direction explored:

- Soft futurism
- Tactical precision
- Rounded UI
- Selective glass surfaces
- Diagonal visual cuts
- Modern grid systems

The experience should feel motivating and game-like without turning performance review into entertainment or public pressure.

---

## Product Principle

> Reward evidence of contribution, not activity theatre.

---

# 10. Case Study — Museum Majapahit Bali

## Hero

### Title

# Designing history as a guided digital journey.

### Subtitle

An immersive museum website direction built around storytelling, collection discovery, cultural context, and visitor action.

### Metadata

- **Project:** Museum Majapahit Bali
- **Role:** Product Direction, Experience Strategy, Technical Coordination
- **Domain:** Museum, culture, tourism, education
- **Status:** Website and digital-ecosystem direction developed

---

## Experience Goals

The product direction aimed to feel:

- Sacred
- Historical
- Elegant
- Artistic
- Premium
- Story-driven

The site should support:

- Guided narrative
- Collection discovery
- Museum map
- Historical context
- Educational programs
- News and articles
- Visitor information
- WhatsApp reservation

---

## UX Principle

A museum website should not only answer where and when to visit.

It should make visitors curious enough to begin the journey before they arrive.

---

# 11. About Page

## Headline

# I design clarity across products, teams, and technology.

## Long Bio

I’m Ghazariz, a product-and-technology operator from Indonesia.

My experience spans community management, frontend mentorship, product management, product design, technology leadership, infrastructure planning, recruitment systems, remote-team operations, and cross-functional execution.

I have worked on education platforms, parental technology, museum experiences, centralized content systems, performance and reward products, websites, product-company structures, and early-stage SaaS and IoT concepts.

I’m usually brought into problems that are broad or messy: too many ideas, unclear users, overlapping roles, expensive technology choices, missing workflows, or teams that need a more executable plan.

My approach is to turn that ambiguity into a system:

- What problem are we solving?
- Who is involved?
- What does each role need to do?
- Which workflow creates value?
- What belongs in the MVP?
- What should wait?
- What can fail?
- How should the product scale?
- What documentation does the team need to execute?

I care about ambitious products, but I do not believe ambition requires uncontrolled scope.

The strongest product direction is one that connects the user experience, business model, technical reality, and operating model.

---

## Working Principles

### Systems before decoration

I care about visual quality, but interface polish cannot repair unclear roles, broken workflows, or an undefined product model.

### MVP before unnecessary scale

I separate what the product must prove now from what it may become later.

### Decisions should be documented

Remote teams move faster when decisions, ownership, review cycles, and trade-offs are visible.

### Technology should serve the product

I evaluate infrastructure, realtime tools, storage, and architecture based on usage patterns and product needs—not trends alone.

### AI should increase judgment, not replace it

I use AI agents for research, planning, prototyping, coding support, analysis, and documentation, while keeping human judgment responsible for product decisions.

---

# 12. Experiments Page

## Heading

# Experiments are where assumptions become product questions.

## Introduction

Not every idea should immediately become a startup or a production build.

This section documents selected concepts, business-model questions, workflow explorations, and technical experiments.

### Cosplay Rental Operating Platform

A B2B SaaS direction for inventory, size, character, series, condition, booking, deposit, return, damage, cleaning, customer history, reminders, and future marketplace discovery.

### Laundry Subscription and IoT Control

A concept replacing coin-operated laundry access with subscriptions, QR activation, booking, usage limits, payment, maintenance visibility, and connected machine control.

### Virtual Academy

A future MLS layer combining a lightweight virtual environment, classrooms, voice, whiteboards, assignments, and group activity.

### AI-Assisted Game Development

Exploration of AI coding agents as ongoing development partners across Roblox, Godot, and lightweight web-game engines.

### Recruitment and Talent Systems

Product directions for applicant tracking, internship campaigns, screening, interview status, onboarding, talent pools, employer branding, and partner referrals.

---

# 13. Resume Page Copy

## Heading

# Product thinking with technical depth and operating experience.

## Summary

Technical Product Manager and Product Designer with experience across product strategy, UX and workflow design, technical planning, cross-functional leadership, remote operations, community building, and frontend mentorship.

Experienced in translating complex product ideas into requirements, role systems, user flows, roadmaps, prototypes, infrastructure decisions, and implementation plans.

## Core Skills

- Technical product management
- Product strategy
- Product design
- UX and workflow design
- Product requirements
- Roadmap planning
- Cross-functional leadership
- Stakeholder communication
- Technical architecture planning
- Remote-team operations
- Hiring and role design
- AI-assisted product development

## Technology Context

- React
- React Native
- TypeScript
- JavaScript
- Node.js
- REST APIs
- Cloudflare Workers
- Cloudflare Pages
- Cloudflare D1
- Cloudflare R2
- PostgreSQL
- MySQL
- Docker
- GitHub
- Linux and VPS
- GSAP
- Three.js
- Realtime and media platforms
- Godot, PhaserJS, PixiJS, and Roblox Studio exploration

---

# 14. Contact Page

## Headline

# Let’s make the complex understandable.

## Copy

I’m interested in product roles and collaborations where strategy, experience design, technology, and execution need to work as one system.

## Contact Options

- **Email:** m.ghazariz@gmail.com
- **LinkedIn:** `[ADD VERIFIED LINK]`
- **GitHub:** `[ADD VERIFIED LINK]`
- **Resume:** `[ADD DOWNLOAD LINK]`

## Suggested Form Fields

- Name
- Email
- Company or team
- What are you building?
- What kind of help do you need?
- Timeline
- Submit

## Confirmation Message

> Thanks. Your message is in. I’ll review the context and reply with the clearest next step.

---

# 15. Case Study Template

Use the following structure for every full case-study page:

```text
1. Hero
2. Project metadata
3. Context
4. Problem
5. Users and stakeholders
6. My role
7. Constraints
8. Product strategy
9. User flow or system map
10. Key decisions
11. Experience design
12. Technical direction
13. Trade-offs
14. Progress or outcome
15. What I learned
16. Next case study
```

Every case study must clearly distinguish:

- Verified outcome
- Last-known status
- Target
- Hypothesis
- Future direction
- Personal contribution
- Team contribution

---

# 16. Visual Design Brief

## Desired Feeling

The website should feel:

- Immersive
- Intelligent
- Precise
- Ambitious
- Cinematic
- Modern
- Personal
- High-trust

It should not feel:

- Like a generic template
- Like a gaming landing page
- Like a startup dashboard
- Like an overloaded glassmorphism showcase
- Like a corporate company profile
- Like every section is a floating card

---

## Recommended Visual Language

### Base

- Deep near-black background
- Warm off-white typography
- Electric blue or ultraviolet as a system color
- Controlled lime or warm orange accent for active states
- Large editorial typography
- Fine grids, lines, and technical annotations
- High-quality project imagery and diagrams
- Strong contrast between cinematic sections and readable case-study sections

### Typography Direction

Use a two-font system:

1. A distinctive editorial display typeface for large statements.
2. A highly readable grotesk or neo-grotesk for body and interface text.

Do not use more than two primary font families.

### Layout Direction

- Wide desktop compositions
- Intentional asymmetry
- Strong negative space
- Editorial project numbering
- Sticky project metadata
- Full-bleed transitions
- Case-study diagrams integrated into the scroll
- Responsive mobile layout that becomes simpler rather than merely smaller

---

# 17. Motion and Interaction Brief

## Motion Principle

Motion should reveal structure, not distract from missing structure.

## Core Interactions

### Entry Sequence

- Minimal preloader
- Name or personal glyph assembles
- Hero statement enters in controlled layers
- No long cinematic intro that blocks content

### Scroll Narrative

- Headline transforms as the user scrolls
- Keywords shift between strategy, systems, experience, and execution
- Selected-work cards expand into project scenes
- Background environment changes subtly by project

### Project Transition

- Project number or symbol becomes the transition anchor
- Card media expands to full viewport
- Metadata remains stable while content changes
- Browser back behavior remains normal and accessible

### Cursor

- Subtle custom cursor on desktop only
- Magnetic behavior limited to major CTAs
- Native cursor remains available for text and form controls

### Case Study

- Sticky table of contents
- Progressive diagrams
- Scroll-linked role and workflow maps
- Comparison states for “before”, “decision”, and “system”
- Reduced-motion fallback

### Accessibility

- Respect `prefers-reduced-motion`
- No essential information hidden in hover
- Visible keyboard focus
- Strong contrast
- Semantic heading order
- Alt text for project visuals
- Avoid scroll hijacking

---

# 18. Product Design Components

## Global

- Navigation
- Availability indicator
- Page transition
- Footer
- Contact CTA
- Theme or contrast control
- Reduced-motion support

## Home

- Hero
- Proof strip
- Selected-work index
- Featured-case-study transition
- How-I-work sequence
- Capability grid
- Experience timeline
- About preview
- Contact CTA

## Work Index

- Project filter by domain
- Project status label
- Role label
- Case-study availability
- Compact and expanded views

## Case Study

- Hero
- Metadata rail
- Challenge statement
- System diagram
- Role map
- Decision cards
- User-flow sequence
- Technical diagram
- Outcome and status block
- Learning section
- Next-project transition

## About

- Bio
- Principles
- Experience timeline
- Capability map
- Tool and technology context
- Resume CTA

---

# 19. Content Model

The portfolio should use structured Markdown or MDX content.

## Project Frontmatter

```yaml
title: "MLS — Minilemon Learning System"
slug: "mls"
summary: "A multi-tenant education platform for institutions and bootcamps."
category:
  - "Education"
  - "Platform"
role:
  - "Product Manager"
  - "Product Designer"
  - "Technology Decision Maker"
status: "Demo testing v1; direction evolved"
year: "2025–2026"
featured: true
confidentiality: "Public summary"
hero_image: "/projects/mls/hero.webp"
accent: "#7B61FF"
```

## Project Content Sections

```yaml
sections:
  - context
  - problem
  - users
  - role
  - constraints
  - strategy
  - workflows
  - decisions
  - technology
  - progress
  - learning
```

---

# 20. Implementation Direction

## Recommended Foundation

- React-based framework
- TypeScript
- Markdown or MDX case studies
- Component-driven design system
- Static-first delivery for performance
- Selective client-side animation
- Image optimization
- SEO metadata per project
- Accessible semantic HTML
- Analytics with privacy-conscious configuration

## Animation Layer

Use animation selectively for:

- Hero choreography
- Scroll-linked project transitions
- Diagram reveals
- Page transitions
- Small interaction feedback

Avoid adding a heavy 3D scene to every section.

A single well-designed ambient 3D or WebGL environment is stronger than multiple disconnected effects.

## Content Workflow

```text
Markdown / MDX project content
→ structured project metadata
→ reusable case-study template
→ static generation
→ optimized media
→ deployment
```

---

# 21. SEO and Social Metadata

## Home Title

`Ghazariz — Technical Product Manager & Product Designer`

## Home Description

`Portfolio of Ghazariz, a Technical Product Manager and Product Designer working across product strategy, UX, technical planning, and cross-functional execution.`

## Suggested Keywords

- Technical Product Manager
- Product Manager Indonesia
- Product Designer Indonesia
- Product and Technology Lead
- UX Product Strategy
- Education Technology
- Cloudflare Product Architecture
- Remote Product Leadership

## Open Graph Headline

`I turn complex ideas into systems teams can actually build.`

## Social Description

`Selected work across education platforms, parental technology, museum systems, internal products, and product operations.`

---

# 22. Content Verification Checklist

Before publishing:

- [ ] Confirm exact employment dates
- [ ] Confirm preferred public Minilemon job title
- [ ] Confirm LinkedIn URL
- [ ] Confirm GitHub URL and public repositories
- [ ] Add final resume link
- [ ] Verify production status of MLS
- [ ] Verify current progress of ML Space
- [ ] Verify production status of the museum CMS
- [ ] Verify current status of Miniboard
- [ ] Add screenshots or sanitized prototypes
- [ ] Remove confidential internal details
- [ ] Separate achieved metrics from targets
- [ ] Credit collaborators where appropriate
- [ ] Confirm project logos and brand assets can be published
- [ ] Add image alt text
- [ ] Test reduced-motion mode
- [ ] Test keyboard navigation
- [ ] Test mobile performance
- [ ] Test SEO and social previews

---

# 23. Asset Checklist

## Personal

- [ ] Professional portrait
- [ ] Alternate portrait or candid work image
- [ ] Resume PDF
- [ ] Personal monogram or wordmark
- [ ] Short signature animation

## Per Case Study

- [ ] Hero image
- [ ] Product overview
- [ ] User or role map
- [ ] Core workflow
- [ ] Key interface screens
- [ ] System architecture
- [ ] Decision or trade-off visual
- [ ] Outcome or status summary
- [ ] Mobile crop
- [ ] Social preview image

## Confidentiality

When real screens are not publishable:

- Rebuild sanitized diagrams
- Blur or replace private names
- Replace real account data
- Use representative interface states
- Label conceptual visuals honestly
- Never fabricate usage or revenue metrics

---

# 24. Recommended Launch Scope

## Phase 1 — Strong Public Portfolio

- Home
- Work index
- Three complete case studies:
  - MLS
  - Centralized Museum CMS
  - ML Space
- About
- Resume
- Contact
- Responsive design
- SEO
- Accessible motion

## Phase 2 — Expanded Product Depth

- Miniboard case study
- Museum Majapahit Bali case study
- Experiments page
- More system diagrams
- Writing or product notes

## Phase 3 — Living Portfolio

- Lightweight CMS or content workflow
- Project updates
- Bilingual content
- Talks or mentoring section
- Public product templates
- Selected open-source work

---

# 25. Final Homepage Copy — Compact Version

## Hero

**PRODUCT · DESIGN · TECHNOLOGY · SYSTEMS**

# I turn complex ideas into systems teams can actually build.

I’m Ghazariz, a Technical Product Manager and Product Designer working across product strategy, experience design, technical planning, and cross-functional execution.

**Explore selected work**  
**View my resume**

`Based in Indonesia · Open to remote and relocation opportunities`

---

## Work Intro

# Selected systems, not just selected screens.

I design the product logic behind the interface: users, roles, workflows, business models, technical boundaries, and implementation phases.

---

## About Preview

# I work between the whiteboard and the real system.

My background spans community building, frontend mentorship, product management, product design, technology leadership, and remote operations.

I’m most useful when a product is ambitious but still unclear.

---

## Contact

# Have a complex product problem?

I’m open to product roles and collaborations where strategy, design, technology, and execution need to work as one system.

**Start a conversation**

---

# 26. Public Accuracy Note

This portfolio content is based on documented historical discussions and project context compiled through 29 July 2026.

Some project details are last-known states, product hypotheses, planned targets, or unverified current statuses. They must remain clearly labeled until updated evidence is available.

The portfolio should prioritize trust over inflated claims.

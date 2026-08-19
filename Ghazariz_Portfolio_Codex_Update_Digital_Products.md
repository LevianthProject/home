# Codex Continuation Prompt — Add Digital Products / Storefront to Ghazariz Portfolio

> **Context:** This is a continuation update for the existing Ghazariz portfolio implementation.  
> **Existing source of truth:** `Ghazariz_Portfolio_Codex_Master_Brief.md`  
> **Existing extension:** `Ghazariz_Portfolio_Codex_Update_Original_Ideation.md`  
> **Existing visual direction:** Direction 03 — Experimental / Bold  
> **Important:** Do not redesign or rebuild the portfolio from scratch. Extend the current system and preserve the existing visual language, responsive behavior, motion principles, accessibility, and accuracy policy.

---

# 0. Objective

Add a dedicated **Digital Products** area to the Ghazariz portfolio.

The purpose of this page is different from both:

- `/work` → professional product/system case studies;
- `/concepts` → original ideation / proposal / R&D.

The new area must communicate:

> Ghazariz also creates, packages, publishes, and sells independent digital products.

Products may be sold through external storefronts such as:

- Gumroad
- Lynk

The portfolio does **not** need its own checkout/payment system.

The portfolio should act as:

1. product discovery;
2. product positioning;
3. product preview;
4. product overview;
5. outbound purchase gateway.

The page must be designed to support **many future digital products**, not only the first three.

---

# 1. New Information Architecture

Add a dedicated route:

```text
/products
```

Recommended navigation:

```text
WORK
CONCEPTS
PRODUCTS
ABOUT
CONTACT
```

Do not overcrowd the navigation.

The main portfolio structure should now communicate three distinct areas:

```text
WORK
Professional product/system work.

CONCEPTS
Original ideation, proposals, and experience R&D.

PRODUCTS
Independent digital products that people can access or purchase.
```

Do not merge Digital Products into `/work`.

Do not merge Digital Products into `/concepts`.

---

# 2. Positioning of the Products Page

This should **not** feel like a generic ecommerce store.

It should feel like:

- an independent product studio;
- a curated digital-product shelf;
- a product-builder portfolio;
- a small premium storefront attached to Ghazariz's personal portfolio.

The design should prioritize:

- product identity;
- usefulness;
- clear value;
- strong visual presentation;
- direct access to Gumroad / Lynk;
- scalability as more products are added.

Avoid:

- shopping-cart patterns;
- fake cart icons;
- checkout forms;
- ecommerce filters unless the catalog genuinely becomes large;
- fake ratings;
- fake review counts;
- fake scarcity;
- fake discounts;
- fake sales numbers;
- fake “best seller” badges.

---

# 3. Homepage Update

Add a compact preview section on the homepage.

Recommended placement:

```text
Hero
Selected Work
Original Ideation / Concept Lab
Independent Products
Positioning
Featured Case Study
Process
Capabilities
Experience
About
Contact
```

If the current layout has already evolved, place this section where it creates the best narrative flow without disrupting the existing hierarchy.

## Section label

```text
03 / INDEPENDENT PRODUCTS
```

Renumber subsequent section labels consistently if numbered sections are already used.

## Heading

Preferred:

```text
I BUILD PRODUCTS
PEOPLE CAN ACTUALLY USE.
```

Alternative:

```text
BUILT INDEPENDENTLY.
MADE TO BE USEFUL.
```

Use only one.

## Supporting copy

```text
Small, focused digital products built around real problems — designed, packaged, and released independently.
```

## Homepage content

Show only up to **3 featured products**.

Each preview should contain:

- product cover / teaser;
- product name;
- short tagline;
- product category;
- status;
- optional starting price if provided;
- `VIEW PRODUCTS` CTA.

Do not put purchase buttons on the homepage preview unless the current composition supports them elegantly.

Primary CTA:

```text
EXPLORE PRODUCTS →
```

Route:

```text
/products
```

---

# 4. Products Page Hero

Route:

```text
/products
```

## Eyebrow

```text
INDEPENDENT DIGITAL PRODUCTS
```

## Hero heading

Preferred:

```text
PRODUCTS I BUILD
FOR REAL-LIFE PROBLEMS.
```

Alternative:

```text
SMALL PRODUCTS.
REAL UTILITY.
```

Use only one.

## Intro copy

```text
A growing collection of independent digital products, tools, templates, and focused systems designed to make work and everyday life easier.
```

## Supporting metadata

Use restrained metadata such as:

```text
INDEPENDENT
DIGITAL
DIRECT-TO-USER
```

Do not display fake product counts.

If a verified count is later supplied, it may be shown.

---

# 5. Products Catalog Layout

The catalog must be data-driven and scalable.

Do **not** hardcode the UI around exactly three products.

The first release may contain three products, but the system should remain visually clean at:

- 3 products;
- 6 products;
- 12 products;
- 20+ products.

## Preferred desktop layout

Use an editorial / premium product grid:

- 2 columns on normal desktop;
- optionally a featured full-width first product if `featured: true`;
- large visual-first cards;
- deliberate asymmetry where appropriate;
- strong negative space;
- card heights may vary slightly based on artwork but should remain visually controlled.

Avoid a generic marketplace grid with six tiny cards per row.

## Tablet

- 2 columns where space allows;
- 1 column at narrower widths.

## Mobile

- single-column;
- full-width cards;
- purchase actions remain easy to tap;
- product overview must not depend on hover.

---

# 6. Product Card Specification

Each product card should feel like a mini product landing page.

## Required visible content

Each card supports:

```text
Product visual / cover
Product name
Short tagline
Category
Status
Optional price
```

## Required actions

Every product card has three possible actions:

### 1. Gumroad

Button:

```text
GUMROAD ↗
```

Open the provided Gumroad URL in a new tab.

### 2. Lynk

Button:

```text
LYNK ↗
```

Open the provided Lynk URL in a new tab.

### 3. Overview

Use a tertiary button:

```text
OVERVIEW
```

This opens a product overview popup/modal.

The Overview button should visually be less dominant than the purchase CTAs.

Example action hierarchy:

```text
[GUMROAD ↗] [LYNK ↗]   [OVERVIEW]
```

or:

```text
[GUMROAD ↗] [LYNK ↗]
               OVERVIEW →
```

Choose whichever fits the current design system better.

Do not show an enabled platform button if its URL is missing.

If only one storefront URL exists:

- show only that storefront;
- do not create a fake disabled button.

---

# 7. Product Card Visual Style

Preserve Direction 03:

- near-black base;
- off-white typography;
- controlled violet;
- large editorial typography;
- premium motion;
- spacious composition.

Add a subtle new **product-surface accent**:

### Modern glossy treatment

Product cards may use:

- subtle reflective highlights;
- very restrained glass layer;
- soft specular glow;
- translucent edge treatment;
- violet-tinted inner light;
- dark polished surface;
- slight backdrop blur only where useful.

Do not convert the entire site into glassmorphism.

The glossy language should primarily appear in:

- Product cards;
- Product Overview modal;
- small interactive surfaces.

The rest of the portfolio remains visually consistent with the established Direction 03 system.

## Do not use

- thick neon borders;
- rainbow glass;
- excessive blur;
- Windows Vista glass;
- floating generic glass cards everywhere;
- huge drop shadows;
- gradients on every element.

Gloss should feel modern and physical, not decorative.

---

# 8. Card Interaction

Desktop:

- subtle card elevation / translation on hover;
- visual image may scale approximately 1.02–1.04;
- glossy reflection may move slightly with pointer position;
- title may shift a few pixels;
- CTA reveal may become slightly brighter.

Keep motion subtle.

Do not make cards tilt aggressively in 3D.

Do not use excessive cursor-follow effects.

Mobile:

- no hover dependency;
- no pointer-reflection effect required;
- card remains visually complete by default.

Respect:

```css
prefers-reduced-motion
```

---

# 9. Product Overview Popup / Modal

This is a major new UI surface.

Create a reusable:

```text
ProductOverviewModal
```

or equivalent component matching the project's architecture.

The modal must remain consistent with the portfolio but introduce the new **modern glossy product accent**.

## 9.1 Modal Visual Direction

The modal should feel like:

> a premium digital product package floating above the portfolio.

Recommended:

- deep graphite / near-black translucent surface;
- strong but restrained backdrop blur;
- subtle violet ambient edge light;
- fine 1px translucent border;
- soft internal reflection;
- rounded corners consistent with the site's visual system;
- clear elevation from the background;
- no generic white dialog box.

Possible surface hierarchy:

```text
PAGE
dark

BACKDROP
black at ~65–80% + blur

MODAL
graphite translucent glossy layer

HIGHLIGHT
very soft violet / white reflection

CONTENT
high-contrast white / muted gray
```

No random blue glass unless already present elsewhere.

## 9.2 Modal Desktop Layout

Recommended desktop size:

```text
max-width: ~1100–1240px
max-height: min(86vh, content)
```

Preferred layout:

```text
┌────────────────────────────────────────────┐
│                                      CLOSE │
│                                            │
│ [PRODUCT VISUAL]    PRODUCT NAME           │
│                     TAGLINE                │
│                     CATEGORY / STATUS      │
│                                            │
│                     Short overview         │
│                                            │
│                     What it helps with     │
│                     • ...                  │
│                     • ...                  │
│                     • ...                  │
│                                            │
│                     [GUMROAD] [LYNK]       │
│                                            │
└────────────────────────────────────────────┘
```

For products with multiple screenshots, the left side may become a small product-media gallery.

Do not let the gallery overpower the text.

## 9.3 Modal Content

The overview is intentionally concise.

Do not turn it into a full case study.

Recommended fields:

### Product name

### Tagline

### Category

### Status

### Short description

Maximum ~2–3 compact paragraphs.

### Built for

Who this product is for.

### Helps with

3–5 high-level use cases or outcomes.

### What is included

Optional, 3–6 bullets.

### Product format

Examples:

- Local Web App
- Template Pack
- Guide
- Toolkit
- Digital Resource
- Notion System
- Web Tool

Only display formats actually supplied.

### Platform CTAs

```text
GET ON GUMROAD ↗
GET ON LYNK ↗
```

### Optional note

For products still in development:

```text
Currently in development.
```

Do not expose features that are not confirmed.

## 9.4 Modal Behavior

Required:

- open from Overview button;
- animate in smoothly;
- close button;
- close on backdrop click;
- close with `Escape`;
- focus trapped inside modal;
- restore focus to the original button on close;
- background page must not scroll while modal is open;
- modal content can scroll internally if necessary;
- update modal content dynamically based on selected product.

Preferred transition:

```text
backdrop fade
+
modal opacity
+
scale 0.97 → 1
+
translateY 14px → 0
```

Keep total duration premium and restrained.

No bounce animation.

## 9.5 Optional URL State

Preferred if cleanly supported by the current framework:

Opening a product overview may update the URL to:

```text
/products?product={slug}
```

This allows:

- direct linking;
- refresh persistence;
- back-button close behavior.

Example:

```text
/products?product=product-slug
```

Do not implement this if it introduces brittle routing complexity.

A simple modal state is acceptable for v1.

---

# 10. Product Asset System

The user will provide product assets later.

Codex must build the system first without inventing final product art.

## Supported asset types

Each product may later receive:

- hero cover;
- logo;
- app screenshot;
- UI screenshot;
- mockup;
- product bundle visual;
- guide cover;
- preview image;
- icon;
- short video/GIF if the current stack supports it responsibly.

## Recommended structure

```text
/public/
└── products/
    ├── product-01/
    │   ├── cover.webp
    │   ├── logo.svg
    │   ├── preview-01.webp
    │   └── preview-02.webp
    │
    ├── product-02/
    └── product-03/
```

Use the actual architecture of the current project if different.

## Reliability rule

All important product visuals must be local project assets.

Do not hotlink:

- Gumroad images;
- Lynk images;
- Canva temporary URLs;
- random CDN previews;
- expiring signed URLs.

External links are allowed for storefront navigation only.

---

# 11. Placeholder Asset Behavior

Until real assets are provided:

Do not use random stock photography.

Do not generate fake app screenshots.

Use a controlled placeholder component matching the portfolio style.

Example visual:

- product name;
- category;
- subtle product index;
- dark polished surface;
- abstract violet lighting;
- `ASSET PENDING` micro-label.

Make it visually deliberate.

The placeholder should make it obvious to Ghazariz which asset must later be replaced.

Example:

```text
PRODUCT VISUAL
ASSET PENDING
```

Do not make placeholder content look like a finished product screenshot.

---

# 12. Product Data Model

Create a dedicated data model separate from case studies and concepts.

Example:

```ts
type DigitalProduct = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  category: string;
  status:
    | "Available"
    | "Coming Soon"
    | "In Development"
    | "Waitlist";
  price?: string;
  currency?: string;

  cover?: string;
  logo?: string;
  gallery?: string[];

  gumroadUrl?: string;
  lynkUrl?: string;

  audience?: string;
  helpsWith?: string[];
  includes?: string[];
  format?: string[];

  featured?: boolean;
  order?: number;
};
```

Keep the content source easy to edit.

Preferred:

```text
src/data/products.ts
```

or:

```text
content/products/*.mdx
```

Use whichever fits the existing project architecture best.

Do not force MDX into a project that currently uses TypeScript data objects unless it materially improves maintainability.

---

# 13. Initial Product Placeholders

The user currently has three products to populate.

Do not invent their final content.

Create placeholders:

```ts
[
  {
    id: "product-01",
    slug: "product-01",
    name: "PRODUCT 01",
    tagline: "Product details pending.",
    shortDescription: "Final product copy will be provided by Ghazariz.",
    category: "Digital Product",
    status: "In Development",
    gumroadUrl: "",
    lynkUrl: "",
    audience: "",
    helpsWith: [],
    includes: [],
    format: [],
    featured: true,
    order: 1
  },
  {
    id: "product-02",
    slug: "product-02",
    name: "PRODUCT 02",
    tagline: "Product details pending.",
    shortDescription: "Final product copy will be provided by Ghazariz.",
    category: "Digital Product",
    status: "In Development",
    gumroadUrl: "",
    lynkUrl: "",
    audience: "",
    helpsWith: [],
    includes: [],
    format: [],
    featured: true,
    order: 2
  },
  {
    id: "product-03",
    slug: "product-03",
    name: "PRODUCT 03",
    tagline: "Product details pending.",
    shortDescription: "Final product copy will be provided by Ghazariz.",
    category: "Digital Product",
    status: "In Development",
    gumroadUrl: "",
    lynkUrl: "",
    audience: "",
    helpsWith: [],
    includes: [],
    format: [],
    featured: true,
    order: 3
  }
]
```

The placeholders exist only to prove the UI works.

They must be trivial to replace later.

---

# 14. Information Ghazariz Will Supply Later

Create a clearly documented content checklist in the repository:

```text
PRODUCT_CONTENT_CHECKLIST.md
```

Include this template:

```text
## Product identity

Product Name:
Slug:
Short Tagline:
Category:
Status:
Price:
Currency:

## Product positioning

One-sentence description:

Short overview:

Who is it for?

What problem does it solve?

## Overview content

Helps With:
-
-
-

What Is Included:
-
-
-

Format:
-

## Purchase links

Gumroad URL:
Lynk URL:

## Assets

Cover:
Logo:
Screenshot 01:
Screenshot 02:
Screenshot 03:
Optional video/GIF:

## Optional

Launch date:
Version:
Support/contact:
Additional note:
```

Codex must not fill these fields with invented facts.

---

# 15. Product Status Treatment

Use restrained status labels.

Examples:

```text
AVAILABLE
COMING SOON
IN DEVELOPMENT
WAITLIST
```

Styling:

- small;
- uppercase or mono;
- understated;
- not a giant badge.

Available may use a subtle violet highlight.

Coming Soon may use muted white.

Do not use green/red traffic-light status styling unless already part of the design system.

---

# 16. Price Treatment

Price is optional.

If supplied:

```text
$9
$19
Rp99K
From $12
```

Display exactly what the user provides.

Do not calculate conversions automatically.

Do not invent discounts.

If no price is supplied, hide the price area completely.

Do not display:

```text
FREE
```

unless explicitly supplied.

---

# 17. Storefront CTA Behavior

## Gumroad

Use:

```text
GUMROAD ↗
```

or:

```text
GET ON GUMROAD ↗
```

depending on available space.

## Lynk

Use:

```text
LYNK ↗
```

or:

```text
GET ON LYNK ↗
```

External links:

```html
target="_blank"
rel="noopener noreferrer"
```

Do not embed Gumroad checkout unless requested later.

Do not embed Lynk inside an iframe.

Do not scrape price/product details from storefront URLs.

The local product data remains source of truth for portfolio presentation.

---

# 18. Optional Category System

Build category support into the data model now.

Do not necessarily expose filters in v1.

Potential future categories:

```text
Life
Career
Freelance
Productivity
Finance
Education
Templates
Tools
Guides
Local Apps
AI
Resources
```

Only show categories actually used by products.

If the catalog later grows beyond approximately 8–12 products, the UI may introduce:

- lightweight category tabs;
- search;
- sort.

Do not implement those now unless they improve the current real catalog.

---

# 19. Empty / Future States

The system must handle:

## No Gumroad link

Hide Gumroad button.

## No Lynk link

Hide Lynk button.

## No assets

Show intentional `ASSET PENDING` visual.

## Product in development

Purchase CTAs may be hidden unless a valid waitlist/storefront URL is supplied.

Overview remains available.

## No price

Hide price completely.

## Missing optional sections

Do not show empty headings.

Example:

Do not render:

```text
WHAT'S INCLUDED
```

if the list is empty.

---

# 20. Products Page Secondary Section — Builder Statement

After the catalog, add a small editorial section.

## Heading

```text
DESIGNING IS ONE THING.
SHIPPING YOUR OWN PRODUCT IS ANOTHER.
```

## Copy

```text
Independent products let me work through the full cycle — problem framing, product decisions, interface design, implementation, packaging, distribution, and iteration.
```

This section should reinforce product-builder credibility.

Do not make exaggerated revenue or founder claims.

---

# 21. Optional “More Coming” Area

At the bottom of `/products`, allow a restrained future-looking line:

```text
MORE PRODUCTS ARE BEING BUILT.
```

Supporting copy:

```text
This collection will continue to grow as new experiments become useful enough to release.
```

Do not add newsletter signup unless already supported.

---

# 22. Footer Update

Add:

```text
PRODUCTS
```

to relevant footer navigation.

Possible structure:

```text
Work
Concepts
Products
About
Contact
```

Do not add separate Gumroad/Lynk global footer links unless Ghazariz requests them later.

Purchasing should remain product-specific.

---

# 23. About Page Update

Add one short paragraph or sentence:

```text
Alongside product and technology work, I also build independent digital products — taking them from problem framing and design through packaging and distribution.
```

Do not make digital products dominate the About page.

---

# 24. Capability Update

Where appropriate, extend capabilities with:

```text
Independent Product Building
Digital Product Packaging
Product Distribution
Direct-to-User Product Design
```

Do not create an unnecessary new capability category if these fit within existing Product Strategy / Product & Experience Design.

---

# 25. SEO

## Products page title

```text
Digital Products — Ghazariz
```

## Description

```text
Independent digital products, tools, and focused resources designed and built by Ghazariz.
```

Product-specific metadata can be added later once final content is supplied.

Do not index placeholder product detail routes with fake titles if individual routes do not yet exist.

---

# 26. Individual Product Routes

Do **not** create `/products/[slug]` detail pages in v1 unless they are already trivial to support in the current architecture.

For the first version:

```text
/products
+
Product Overview modal
```

is preferred.

Reason:

- faster product discovery;
- less duplicated content;
- external storefront already handles purchase/detail depth;
- modal overview provides enough context;
- easier to scale before every product has a full marketing page.

The system should remain architecturally capable of adding individual detail routes later.

---

# 27. Glossy Product Modal Design Tokens

Create reusable tokens instead of scattering custom values.

Example conceptual tokens:

```css
--product-surface: rgba(...);
--product-surface-border: rgba(...);
--product-surface-highlight: rgba(...);
--product-glow-violet: ...;
--product-backdrop: ...;
--product-modal-radius: ...;
```

Use the existing token system if present.

Do not hardcode many unrelated hex values inside components.

---

# 28. Accessibility

Mandatory:

- semantic buttons;
- modal has accessible label/title;
- visible focus states;
- keyboard navigation;
- Escape closes modal;
- focus trap;
- focus restoration;
- sufficient contrast;
- buttons cannot rely only on color;
- storefront logos/icons require accessible labels;
- modal body remains usable at 200% zoom;
- no content hidden only behind hover.

---

# 29. Performance

Product imagery may grow significantly.

Use:

- WebP/AVIF where appropriate;
- responsive image sizing;
- lazy loading below fold;
- preload only the first critical image when useful;
- stable aspect ratios to prevent layout shift.

Do not preload every product cover.

Modal gallery images should load intelligently.

Do not introduce a heavy 3D/WebGL dependency just for gloss.

Gloss should primarily be achieved through lightweight CSS and existing animation tools.

---

# 30. Product Card Component Architecture

Suggested architecture only:

```text
components/
└── products/
    ├── ProductsPreview.tsx
    ├── ProductGrid.tsx
    ├── ProductCard.tsx
    ├── ProductActions.tsx
    ├── ProductStatus.tsx
    ├── ProductOverviewModal.tsx
    ├── ProductMedia.tsx
    └── ProductPlaceholder.tsx
```

Use existing naming / folder conventions if different.

Do not duplicate an existing modal/dialog primitive if the codebase already has one.

Extend existing accessible primitives where possible.

---

# 31. Recommended Interaction Flow

User journey:

```text
PORTFOLIO
↓
PRODUCTS
↓
Scans product visual + tagline
↓
Option A: Buy immediately via Gumroad
Option B: Buy immediately via Lynk
Option C: Open Overview
↓
Glossy Overview Modal
↓
Understands product
↓
Gumroad or Lynk
```

The user should never be forced to open Overview before purchase.

The purchasing path should remain short.

---

# 32. Analytics Hooks

Do not install analytics without instruction.

But structure CTA events cleanly so analytics can be added later.

Possible event names:

```text
product_overview_open
product_gumroad_click
product_lynk_click
```

Do not send any telemetry now unless the existing portfolio already has analytics configured.

---

# 33. Final Visual Intent

The Products section must feel like it belongs to the portfolio.

It should not suddenly become:

- Shopify;
- Gumroad clone;
- SaaS pricing page;
- generic Bento grid;
- glassmorphism demo.

Target feeling:

> Experimental product designer meets independent digital product studio.

The page should remain:

- bold;
- clean;
- dark;
- tactile;
- premium;
- readable;
- easy to purchase from.

Gloss is an accent.

Typography and product visuals remain the hero.

---

# 34. Do Not Change Existing Portfolio Decisions

Preserve:

- Direction 03 — Experimental / Bold;
- black / white / controlled violet visual language;
- existing Work case studies;
- Concept Lab;
- existing motion language;
- no fake metrics;
- no fake client relationships;
- no invented outcomes;
- local-asset reliability policy;
- accessibility;
- responsive behavior;
- existing SEO strategy;
- existing design QA process.

This update is an extension, not a redesign reset.

---

# 35. Implementation Sequence

Codex should:

1. inspect the current codebase;
2. inspect existing routes/navigation;
3. inspect current design tokens;
4. inspect existing modal/dialog primitives;
5. inspect current motion library;
6. inspect existing card components;
7. implement the Products data model;
8. add `/products`;
9. add temporary three-product placeholder content;
10. add product cards;
11. add Gumroad and Lynk CTA support;
12. add Overview modal;
13. implement glossy modal/product accents;
14. add homepage Products preview;
15. update navigation;
16. update footer;
17. update About/capability copy where appropriate;
18. create `PRODUCT_CONTENT_CHECKLIST.md`;
19. test every empty/partial-data state;
20. run responsive QA;
21. run accessibility QA;
22. rerun visual design QA.

Do not stop at the code compiling.

Visually inspect the result.

---

# 36. Acceptance Criteria

Before handoff:

- [ ] `/products` route exists.
- [ ] Products page matches Direction 03.
- [ ] Product catalog is data-driven.
- [ ] UI works with three placeholder products.
- [ ] UI can scale to many products.
- [ ] Cards have local product visuals or intentional placeholders.
- [ ] Gumroad CTA only appears when URL exists.
- [ ] Lynk CTA only appears when URL exists.
- [ ] Overview action opens the correct product.
- [ ] Modal is modern/glossy but still matches portfolio theme.
- [ ] Modal works with keyboard.
- [ ] Escape closes modal.
- [ ] Backdrop click closes modal.
- [ ] Focus is trapped and restored correctly.
- [ ] Background scrolling locks when modal opens.
- [ ] Product modal is responsive.
- [ ] Mobile does not rely on hover.
- [ ] Product cards do not expose fake information.
- [ ] Placeholder products are clearly marked.
- [ ] No product detail is invented.
- [ ] Missing price does not render an empty price field.
- [ ] Missing platform URL does not render a fake button.
- [ ] Homepage contains Independent Products preview.
- [ ] Main nav contains Products.
- [ ] Footer contains Products.
- [ ] About page mentions independent product building.
- [ ] `PRODUCT_CONTENT_CHECKLIST.md` exists.
- [ ] Product assets are loaded locally.
- [ ] No expiring Canva/Gumroad/Lynk image URLs are used.
- [ ] Reduced-motion behavior works.
- [ ] Desktop, tablet, and mobile have been visually checked.
- [ ] `design-qa.md` is rerun.
- [ ] `design-qa.md` ends with `final result: passed`.

---

# 37. Content Replacement Instruction for Later

When Ghazariz later provides final product details and assets:

Do **not** redesign the Products page.

Only:

1. replace placeholder product data;
2. add provided local assets;
3. add Gumroad URL;
4. add Lynk URL;
5. add final pricing/status;
6. populate overview fields;
7. update featured/order values;
8. visually QA the real content.

Do not rewrite supplied product copy unless explicitly asked.

Do not infer missing product facts.

---

# 38. Final Instruction to Codex

Continue the existing Ghazariz portfolio implementation.

Do not reset or reinterpret the selected visual direction.

Implement a dedicated Digital Products storefront at `/products` that feels like an extension of the existing experimental portfolio rather than an ecommerce template.

The core experience should be:

```text
VISUAL PRODUCT CARD
+
CLEAR PRODUCT POSITIONING
+
GUMROAD CTA
+
LYNK CTA
+
GLOSSY OVERVIEW MODAL
```

Build it in a way that supports the current three products and a much larger catalog later.

The Overview modal should introduce a subtle modern glossy interaction language that is new to the portfolio but still unmistakably belongs to the existing black / white / violet Direction 03 design.

Do not invent product information.

Use placeholders until Ghazariz provides the final product names, copy, prices, links, and assets.

The final page should communicate:

> Ghazariz does not only design products for organizations or develop concepts. He also independently turns ideas into packaged digital products that people can actually access and buy.

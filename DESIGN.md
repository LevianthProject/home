---
name: Ghazariz — Systems Beyond Screens
description: A cinematic product-systems portfolio shaped by sculptural black-violet forms and decisive grotesk typography.
colors:
  chamber-black: "#050505"
  graphite-surface: "#0d0d11"
  graphite-strong: "#121217"
  signal-white: "#f4f4ef"
  mineral-soft: "#c9c8c2"
  mineral-muted: "#9896a1"
  ultraviolet: "#8b5cf6"
  ultraviolet-bright: "#a78bfa"
  ultraviolet-deep: "#5b21b6"
  success-signal: "#7ee787"
  pure-white-highlight: "#ffffff"
typography:
  display:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(4.2rem, 9.6vw, 9.2rem)"
    fontWeight: 820
    lineHeight: 0.78
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(3.1rem, 6vw, 6.8rem)"
    fontWeight: 720
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope Variable, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.9em"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope Variable, Helvetica Neue, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 720
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  micro: "0.25rem"
  compact: "0.35rem"
  precision: "0.65rem"
  media: "0.75rem"
  feature: "1.5rem"
  status: "999px"
spacing:
  compact: "0.5rem"
  control: "1rem"
  content: "2rem"
  section: "clamp(7.5rem, 13vw, 13rem)"
components:
  button-primary:
    backgroundColor: "{colors.chamber-black}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.status}"
    padding: "0.75rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.graphite-strong}"
    textColor: "{colors.ultraviolet-bright}"
  status-tag:
    backgroundColor: "{colors.chamber-black}"
    textColor: "{colors.mineral-soft}"
    rounded: "{rounded.status}"
    padding: "0.2rem 0.7rem"
---

# Design System: Ghazariz — Systems Beyond Screens

## Overview

**Creative North Star: "The Sculptural Systems Chamber"**

The portfolio behaves like a dark exhibition chamber built for product systems rather than objects. One glossy black-violet sculpture carries the emotional weight while monumental language, technical notation, diagrams, and long-form evidence reveal the thinking behind the work.

The identity is cinematic but controlled. Motion belongs to the chamber itself—weighted reveals, smooth native scrolling, masked transitions, and bounded parallax—rather than scattered effects. Generic portfolio galleries, ornamental glass, SaaS dashboards, and repeated abstract blobs are excluded.

**Key Characteristics:**

- Near-black full-bleed architecture with localized ultraviolet illumination.
- Dense grotesk display type and quiet readable body copy.
- Strong asymmetry, authored line breaks, and changing scroll density.
- Sanitized system diagrams with explicit project status.
- Motion that remains legible when paused or reduced.

## Colors

The palette is restrained: neutral darkness carries the experience and violet appears as reflected energy, not decorative fill.

### Primary

- **Ultraviolet Edge Light:** Focal illumination, active states, and meaningful paths through a system.

### Neutral

- **Chamber Black:** Dominant canvas and control background.
- **Graphite Surface:** Project diagrams, menu depth, and proof surfaces.
- **Warm Signal White:** Headlines and primary action text.
- **Soft Mineral Gray:** Secondary narrative and metadata.

### Named Rules

**The Reflected Light Rule.** Violet appears as light on material, a selected state, or a system path—never as a page-wide gradient.

**The Truth Stays Neutral Rule.** Status and evidence remain calm so hierarchy never implies an unverified claim.

## Typography

**Display Font:** Archivo Variable with condensed width control.

**Body Font:** Manrope Variable.

**Character:** Display type behaves like structural signage at architectural scale. Body type is open, restrained, and comfortable across long product narratives.

### Hierarchy

- **Display:** Three authored lines, uppercase, heavy, optically tight, and dominant in the first viewport.
- **Headline:** Large statements with deliberate breaks and no gradient fill.
- **Title:** Compact project and decision headings with clear weight contrast.
- **Body:** Comfortable reading rhythm with a maximum measure near 68 characters.
- **Label:** Small metadata with restrained tracking; labels are not decorative eyebrows repeated everywhere.

### Named Rules

**The Authored Break Rule.** Display line breaks are composition and never left to accidental wrapping.

**Responsive optical scale.** The implementation intentionally uses fluid `clamp()` endpoints between 0.52rem and 27rem for micro-diagram labels, reading copy, titles, editorial statements, and ambient numeral geometry. These are optical roles within the same Archivo/Manrope system, not additional typefaces.

## Layout

Desktop uses a wide 12-column canvas with `clamp(1.25rem, 4vw, 4.5rem)` gutters and alternating asymmetric passages. The opening keeps language left, sculpture right, and a four-column capability rail at the floor. Below it, density changes between wide project stages, narrow reading columns, sticky narrative, timelines, and quiet statements.

Tablet reduces simultaneity. Mobile becomes a vertical performance: headline first, sculpture behind without harming contrast, proof content in two columns, no custom cursor, no horizontal overflow, and no desktop composition miniaturized into unreadable UI.

## Elevation & Depth

Depth comes from tonal layering, directional shadow, local violet reflection, occlusion, and masked media. Content remains visible by default. `0 2.5rem 7.5rem rgba(0,0,0,.62)` grounds major media; ultraviolet shadows are reserved for illuminated system cores.

**The Grounded Surface Rule.** A surface earns elevation through interaction or narrative overlap; borders and shadows are never stacked to imitate importance.

## Shapes

The signature silhouette is one intertwined ribbon or folded membrane with glossy black and violet material. UI geometry stays precise: square or gently rounded surfaces, thin dividers, large media crops, circular geometry only for radial actions, and pills only for compact status tags.

## Components

### Buttons

- **Shape:** Circular arrow control or restrained pill for compact utility actions.
- **Primary:** Signal-white text on chamber black with one thin mineral edge.
- **Hover / Focus:** Violet reflected surface, directional arrow movement, and a visible two-pixel focus ring.
- **Secondary:** Text links use a single underline and directional icon.

### Chips

- **Style:** Transparent chamber surface, thin mineral edge, compact body type.
- **State:** Status language remains neutral; active filters may receive ultraviolet text.

### Cards / Containers

- **Corner Style:** Precision rounding between 0.65rem and 0.75rem.
- **Background:** Graphite tonal layers.
- **Shadow Strategy:** One deep structural shadow; no decorative glow halo.
- **Border:** One thin edge only where separation is required.

### Navigation

Compact fixed header with a translucent black backdrop, text-first desktop links, one restrained resume pill, and a full-viewport mobile menu using oversized condensed type.

### System Visualization

Sanitized project diagrams place one illuminated system core inside a technical field with labeled nodes, truthful captions, and project-specific topology. They never masquerade as production screenshots.

## Do's and Don'ts

### Do:

- **Do** let one sculptural focal point dominate the opening.
- **Do** alternate scale, density, motion, and quiet inside one grammar.
- **Do** use local visuals, authored diagrams, explicit statuses, and truthful captions.
- **Do** preserve native navigation and disable optional motion under reduced-motion preferences.

### Don't:

- **Don't** use the supplied reference screenshot as the production page.
- **Don't** publish fake metrics, outcomes, dates, or concept visuals as shipped screens.
- **Don't** use gradient text, rainbow iridescence, ornamental glass, generic icon-card grids, or random neon.
- **Don't** let smooth scrolling delay navigation, trap focus, or replace browser semantics.

---
name: Ethos & Aspiration
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e4850'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7881'
  outline-variant: '#bdc8d1'
  surface-tint: '#00658d'
  primary: '#00658d'
  on-primary: '#ffffff'
  primary-container: '#00adef'
  on-primary-container: '#003d57'
  inverse-primary: '#83cfff'
  secondary: '#485f84'
  on-secondary: '#ffffff'
  secondary-container: '#bbd3fd'
  on-secondary-container: '#445a7f'
  tertiary: '#725b38'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba9e77'
  on-tertiary-container: '#493516'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e7ff'
  primary-fixed-dim: '#83cfff'
  on-primary-fixed: '#001e2e'
  on-primary-fixed-variant: '#004c6c'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#b0c7f1'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#30476a'
  tertiary-fixed: '#fedeb2'
  tertiary-fixed-dim: '#e0c298'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#584323'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  container-max: 1400px
---

## Brand & Style
The design system for SDIT Imam Syafi'i is built on the pillars of clarity, wisdom, and modern educational excellence. The visual narrative balances the structured discipline of an academic institution with the warmth and approachability of a community-focused Islamic school.

The style is **Corporate / Modern** with a focus on high-clarity minimalism. It utilizes generous whitespace to reduce cognitive load for parents and educators, while incorporating subtle geometric patterns inspired by Islamic art (simplified and used as low-opacity backgrounds) to ground the modern aesthetic in cultural heritage. The emotional response should be one of "Peaceful Professionalism"—feeling both cutting-edge and deeply rooted.

## Colors
The palette is dominated by the interaction between the primary Sky Blue and the secondary Navy, creating a sense of "aspiration meets stability."

- **Primary (Sky Blue):** Used for key actions, progress indicators, and highlighting growth. It symbolizes the open sky and the limitless potential of the students.
- **Secondary (Navy):** Used for navigation, headings, and structural elements. It provides the grounding force of authority and tradition.
- **Accent (Soft Gold):** Reserved for "Excellence" markers—achievements, premium call-outs, and decorative accents that signify value and wisdom.
- **Backgrounds:** Use a "Cold-to-Neutral" strategy. Primary backgrounds are Pure White (#FFFFFF), with sectional transitions using Ice Blue (#F0F9FF) or Slate Tint (#F8FAFC) to maintain a crisp, hygienic, and modern feel.

## Typography
The typographic hierarchy uses **Montserrat** for headlines to convey confidence and a friendly, geometric modernity. **Inter** is utilized for all body copy and UI labels to ensure maximum readability and a systematic, clean feel.

To maintain the professional aesthetic, keep line heights generous (1.5x for body text) to reinforce the "airy" and spacious brand personality. Headlines should use tighter tracking to feel cohesive and impactful.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop (12 columns) to maintain a sense of order and institutional reliability. For mobile, a single-column fluid layout with 20px side margins is used.

**Spacing Principles:**
- Use the **8px linear scale** for all padding and margins.
- **Section Spacing:** Use `xl` (80px) spacing between major landing page sections to allow the design to breathe.
- **Card Padding:** Standardize on `md` (24px) for internal padding of containers to ensure content doesn't feel cramped.
- **Grid:** On desktop, utilize a 24px gutter to maintain clear separation between academic modules or news cards.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a soft, approachable depth. 

- **Surface Levels:** The base level is pure white. Secondary containers (like sidebars or info-boxes) use the very light Ice Blue tint with no shadow.
- **Shadows:** For interactive elements like cards and buttons, use an "Oceanic Depth" shadow: a very soft, diffused Navy tint (#1d3557 at 8% opacity) with a large blur radius (20px-30px) and a slight vertical offset (8px). 
- **Avoid:** High-contrast black shadows or heavy inner glows. The goal is a "floating" effect rather than a "heavy" one.

## Shapes
In alignment with the school's request for "2xl" roundedness, this design system adopts a **Rounded** (Level 2) and beyond approach. 

- **Standard Components:** Buttons, inputs, and small widgets use a minimum radius of `0.5rem` (8px).
- **Major Containers:** Cards, modal windows, and hero image containers use `rounded-2xl` (1.5rem / 24px) to create a soft, safe, and welcoming environment for parents and children alike.
- **Icons:** Icons should feature rounded caps and corners; avoid sharp, jagged edges.

## Components
- **Buttons:** Primary buttons use a solid Sky Blue fill with white text and 1.5rem horizontal padding. Secondary buttons use a Navy outline with 2px stroke width. All buttons use the `rounded-lg` or `rounded-full` treatment.
- **Cards:** Use white backgrounds with the "Oceanic Depth" ambient shadow and `rounded-2xl` corners. A 4px top-border in Soft Gold can be added to "Featured" cards (e.g., Student of the Month, Important Announcements).
- **Input Fields:** Use a light slate background (#F1F5F9) rather than a border to define the field. On focus, transition to a 2px Sky Blue border.
- **Chips/Badges:** Use "Pastel Tones" of the primary colors (e.g., 10% opacity Sky Blue with 100% opacity text) for categories like "Academic," "Extracurricular," or "Religious."
- **Lists:** Use custom bullet points featuring a soft-gold geometric star or a sky-blue checkmark to reinforce the modern Islamic aesthetic.
- **Academic Progress Bars:** Use a gradient transition from Navy to Sky Blue to represent the journey of learning.
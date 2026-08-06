---
name: Cyber-Sophisticate
colors:
  surface: '#11131b'
  surface-dim: '#11131b'
  surface-bright: '#373942'
  surface-container-lowest: '#0c0e16'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#282a32'
  surface-container-highest: '#32343d'
  on-surface: '#e1e2ed'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e1e2ed'
  inverse-on-surface: '#2e3039'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#00788c'
  on-tertiary-container: '#d7f6ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#11131b'
  on-background: '#e1e2ed'
  surface-variant: '#32343d'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a "Cyber-Sophisticate" aesthetic—merging the precision of high-end software engineering with the polished elegance of a luxury tech brand. It is designed for a Senior Web Developer and Tech Support specialist who balances deep technical mastery with a client-facing, professional demeanor.

The visual direction is **Modern-Corporate with a Glassmorphic edge**. It utilizes deep midnight tones to provide a stable, authoritative foundation, punctuated by vibrant, "electric" accents that represent innovation and speed. High-quality whitespace, crisp typography, and subtle technological patterns (like faint grid lines or circuit-inspired micro-motifs) create a sense of organized complexity. The goal is to evoke trust, technical superiority, and futuristic thinking.

## Colors
The palette is rooted in the deep abyss of the digital world, using a dark-mode-first approach. 

- **Primary & Secondary Blues:** These are used for calls to action, active states, and highlighting key technical skills.
- **Cyan Accent:** Reserved for high-energy interactions, micro-copy, or status indicators that require immediate attention.
- **Surface Strategy:** Background and Surface colors provide the depth needed for layering. Surfaces use a slightly lighter slate tone to distinguish cards and modules from the deep background.
- **Contrast:** Text colors are strictly high-contrast against the dark background to ensure readability and an "expensive" editorial feel.

## Typography
The typographic system uses **Manrope** for headlines to provide a modern, slightly geometric personality that feels tech-forward yet balanced. **Inter** is used for body copy and UI labels to ensure maximum legibility and a systematic, utilitarian feel.

- **Scale:** Use dramatic scale shifts between headlines and body text to create a clear hierarchy.
- **Letter Spacing:** Headlines should have slightly tightened letter spacing for a "tighter" professional look, while small labels should be tracked out for better readability on dark backgrounds.
- **Responsiveness:** Large display headings must scale down significantly on mobile to maintain layout integrity.

## Layout & Spacing
The layout follows a **fluid grid system** built on an 8px base unit. 

- **Desktop:** A 12-column grid with a 1280px max-width. Use generous vertical padding between sections (120px) to allow the technical content to "breathe" and feel premium.
- **Mobile:** A 4-column grid with 20px side margins.
- **Rhythm:** Spacing should be used to group related technical concepts. For instance, use small increments (8px, 16px) for internal card content and larger increments (32px, 48px) for separating content blocks.

## Elevation & Depth
Depth is achieved through a combination of **Tonal Layering** and **Glassmorphism**.

- **Navigational Glass:** The sticky header should utilize a `backdrop-filter: blur(12px)` with a semi-transparent version of the surface color (`#1E293B` at 70% opacity) and a 1px border on the bottom.
- **Shadows:** Avoid heavy black shadows. Instead, use soft, diffused "glow" shadows that utilize the primary or accent colors at very low opacities (5-10%) to suggest the UI is emitting light.
- **Outlines:** Use subtle 1px inner borders on cards using a lightened slate or semi-transparent white to define edges without adding heavy visual weight.

## Shapes
The design system uses a **Rounded** shape language to soften the "cold" nature of technical data and code. 

- **Standard Elements:** Use `0.5rem` (8px) for buttons and input fields.
- **Large Components:** Cards, testimonials, and featured image containers should use `rounded-xl` (1.5rem / 24px) to create a friendly, contemporary aesthetic that contrasts with the sharp grid lines.

## Components
- **Buttons:** Primary buttons feature a solid gradient from Accent Blue to Electric Blue. Hover states should include a subtle scale-up (1.02) and an increased outer glow. Secondary buttons use a ghost style with a 1px border.
- **Modern Cards:** Testimonial cards should feature a large quotation mark icon in the background at 5% opacity. Use a glassmorphic treatment for the card footer or author section.
- **Input Fields:** Dark background (`#0F172A`), subtle border, and a bright Blue focus ring. Labels should be small and uppercase.
- **Sticky Navigation:** Always present at the top. Use a blur effect to show the content passing underneath, reinforcing the "glass" metaphor.
- **Tech Chips:** For listing skills (e.g., React, Node.js), use small capsules with a low-opacity background of the Accent Blue and high-contrast text.
- **Hover States:** All interactive elements should feel "active" with subtle shifts in color, glow, or light-source simulation.
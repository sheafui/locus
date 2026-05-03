# Locus

Locus is a **SheafUI primitive** that solves the three hardest UI positioning problems in one zero-dependency package — top-layer rendering, smart anchoring, and animation — built on native browser APIs with a lightweight polyfill fallback.

## What it solves

**Top-layer rendering** — Popoverable elements (dropdowns, tooltips, modals) escape `overflow: hidden` and `z-index` stacking contexts entirely, rendered above everything else via the native `popover` and `dialog` APIs.

**Anchoring** — Floating elements stay locked to their reference with automatic flip, shift, and collision detection. No manual positioning math, no layout shifts.

**Animation presets** — Show/hide transitions work out of the box. A built-in preset system handles entry and exit states so every popoverable element feels native without writing a single keyframe.

## Why native

Most anchoring solutions reach for JavaScript to do what the browser can now do itself. Locus uses `popover`, `dialog`, and `@starting-style` as the foundation — JavaScript only fills the gap where browser support requires it. The result is less code, better performance, and animations that respect `prefers-reduced-motion` for free.
# Chargeflow Homepage — React + Vite

Faithful React conversion of the Chargeflow Webflow homepage (`index.html`), preserving UI, animations, responsiveness, and behavior.

## Quick start

```bash
cd chargeflow-react
npm install
npm run dev
```

## Folder structure

```
chargeflow-react/
├── index.html                 # Vite entry + Webflow CDN stylesheets
├── package.json
├── vite.config.ts
├── tsconfig.json
├── scripts/
│   ├── convert.ps1            # HTML → React section components
│   └── fix-components.ps1     # Post-process JSX (styles, nav fix)
└── src/
    ├── main.tsx               # App bootstrap + Webflow doc classes
    ├── App.tsx                # Page composition
    ├── vite-env.d.ts          # Custom DOM attrs (product-color, blur-element, etc.)
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   ├── CookieBanner.tsx
    │   │   └── ExternalScripts.tsx
    │   ├── sections/          # One component per homepage section
    │   │   ├── HeroSection.tsx
    │   │   ├── LogoWallSection.tsx
    │   │   ├── ChargebacksSection.tsx
    │   │   ├── AutomationSection.tsx
    │   │   ├── PerformanceSection.tsx
    │   │   ├── IndustryLeadingSection.tsx
    │   │   ├── BentoSection.tsx
    │   │   ├── GlobalScaleSection.tsx
    │   │   ├── AlertsSection.tsx
    │   │   ├── InsightsSection.tsx
    │   │   ├── IntegrationsMarqueeSection.tsx
    │   │   ├── DataSection.tsx
    │   │   ├── CustomerSpotlightSection.tsx
    │   │   ├── BadgesSection.tsx
    │   │   ├── SolutionRoleSection.tsx
    │   │   └── CtaSection.tsx
    │   └── ui/
    │       ├── SonarButton.tsx
    │       └── SectionHeader.tsx
    ├── hooks/                 # Ported animation & behavior scripts
    │   ├── useSiteEffects.ts
    │   ├── useHeroTextAnimation.ts
    │   ├── useNavMarqueeScroll.ts
    │   ├── useBannerAnimation.ts
    │   ├── useGreenScrollEffect.ts
    │   ├── useAutomationPopText.ts
    │   ├── useLottieLazyLoad.ts
    │   └── useCookieTracking.ts
    ├── lib/
    │   ├── webflowInit.ts
    │   └── loadScripts.ts
    └── styles/
        ├── index.css          # Main import + head styles
        ├── global-embed.css   # Extracted from .global embed
        ├── embedded.css       # All inline <style> blocks
        ├── animations.css     # Keyframes, marquee, sonar button
        └── components.css     # Component-specific rules
```

## Component list

| Component | Original section |
|-----------|------------------|
| `CookieBanner` | `.c-cookie-banner` |
| `Navbar` | `[nav-theme="dark"]` navigation |
| `HeroSection` | `.cc-hero_home` |
| `LogoWallSection` | `.cc-logo_wall` |
| `ChargebacksSection` | `.cc-chargebakos` |
| `AutomationSection` | `.cc-automation` |
| `PerformanceSection` | `.cc-performance` |
| `IndustryLeadingSection` | `.cc-industry-leading` |
| `BentoSection` | Bento grid + Splide |
| `GlobalScaleSection` | `.cc-global-scale` |
| `AlertsSection` | `.cc-alerts` |
| `InsightsSection` | `.cc-insights` |
| `IntegrationsMarqueeSection` | `.cc-integrations_marquee-home` |
| `DataSection` | `.cc-data` |
| `CustomerSpotlightSection` | `.cc-customer-spotlight` |
| `BadgesSection` | `.s-badges` |
| `SolutionRoleSection` | `.cc-solution-role` |
| `CtaSection` | `.cc-cta-sec` |
| `Footer` | `.cc-footer` |
| `SonarButton` | `.c-sonar-button` (reusable) |
| `SectionHeader` | `.c-section-builder_header-wrapper` (reusable) |

## CSS strategy

- **Webflow CDN** — Original minified stylesheets linked in `index.html` (typography, layout, colors, gradients).
- **`embedded.css` / `global-embed.css`** — All inline `<style>` blocks extracted from the HTML.
- **`animations.css`** — Keyframes (`marquee-horizontal`, `borderRotate`), SplitText `.line`, banner glare.
- **`components.css`** — Hover states, responsive image toggles, bento hover, nav filters.

Inline styles from the HTML were moved into these CSS files; remaining `style={{ ... }}` objects cover dynamic inline cases.

## Animation code

| Hook | Original script behavior |
|------|--------------------------|
| `useHeroTextAnimation` | GSAP SplitText reveal on `[text-animation="1"]` and `[text-animation="2"]` |
| `useNavMarqueeScroll` | Fade/collapse `[hide-marquee]` on scroll; swap nav CTA buttons (desktop) |
| `useBannerAnimation` | `.banner_animation` tilt + `.light-glare` on hover/scroll |
| `useGreenScrollEffect` | `.cc-green500-onscroll` scale + color on ScrollTrigger |
| `useAutomationPopText` | `[automation-pop-text--2]` stagger reveal |
| `useLottieLazyLoad` | Lazy Lottie `data-src` stripping + `.webinar-lottie` init |

Webflow interactions, Lottie hero, Splide sliders, and nav dropdowns are handled by the original Webflow JS bundles loaded via `loadWebflowScripts()`.

## Regenerating from HTML

If `index.html` is updated:

```bash
npm run convert
npm run fix
```

## Notes

- Custom DOM attributes (`product-color`, `blur-element`, `section-theme`, etc.) are preserved via `vite-env.d.ts`.
- GSAP SplitText is loaded from Webflow CDN (same as original); not included in npm `gsap` package.
- Install [Node.js](https://nodejs.org/) before running the dev server.

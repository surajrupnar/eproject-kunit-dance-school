# K Unit Dance School — Design System

**Theme**: Dancing Theme with Dynamic Shadow Effects  
**Last Updated**: May 30, 2026

## Hallmark Stamp
```
/* Hallmark · macrostructure: Marquee Hero · theme: dancing · tone: playful · anchor: vibrant-pink
 * enrichment: dance-shadow-effects · motion: pulse, float, shimmer · responsive: 320px+
 * nav: N5 · footer: Ft5 · genre: playful
 */
```

## Color Palette

All colors use OKLCH for consistent, perceptually uniform color space.

### Paper (Background)
- **Primary**: `--color-paper: #0f0319` – Deep dark purple (OKLCH: 5% 0 270)
- **Secondary**: `--color-paper-2: #1a0830` – Darker purple (OKLCH: 9% 0 270)
- **Tertiary**: `--color-paper-3: #2d1b47` – Medium-dark purple (OKLCH: 18% 0.08 270)

### Accent Colors
- **Primary Accent**: `--color-accent: #ff006e` – Vibrant pink (OKLCH: 58% 0.22 330)
- **Secondary Accent**: `--color-accent-secondary: #8338ec` – Rich purple (OKLCH: 48% 0.28 280)
- **Tertiary Accent**: `--color-accent-tertiary: #3a86ff` – Bright blue (OKLCH: 60% 0.22 250)

### Text
- **Primary**: `--color-text: #ffffff` – White (OKLCH: 100% 0 0)
- **Muted**: `--color-text-muted: #e0e0e0` – Light gray (OKLCH: 88% 0 0)
- **Subtle**: `--color-text-subtle: #a0a0a0` – Medium gray (OKLCH: 62% 0 0)

## Typography

### Font Families
- **Display Face**: System fonts (modern sans-serif stack)
- **Body Face**: System fonts (readable sans-serif stack)
- **2+1 Discipline**: Display for headlines, body for content

### Scale
```
--text-display: 3.5rem (hero headlines)
--text-3xl: 2.5rem (section titles)
--text-2xl: 2rem
--text-xl: 1.5rem
--text-lg: 1.25rem
--text-base: 1rem
--text-sm: 0.875rem
--text-xs: 0.75rem
```

### Text Effects
- **Gradient Text**: Background gradient clipped to text using `background-clip: text`
- **Shadow Effects**: Text shadow for depth (0 4px 12px rgba(255, 0, 110, 0.2))

## Spacing Scale (4pt base)

```
--space-xs: 0.25rem (1px equivalent)
--space-sm: 0.5rem (2px equivalent)
--space-md: 1rem (4px base * 4)
--space-lg: 1.5rem
--space-xl: 2rem
--space-2xl: 3rem
```

## Motion

### Animations
1. **dance-shadow-1**: 3s cycle - vertical dance with skew and scale
2. **dance-shadow-2**: 4s cycle - opposing dance pattern
3. **dance-shadow-3**: 3.5s cycle - varied dance rhythm
4. **pulse-glow**: 2s cycle - glowing pulse effect
5. **shimmer**: Continuous shimmer gradient effect
6. **float-up**: 3s gentle floating animation

### Timing
- `--dur-fast: 200ms` – Quick interactions
- `--dur-base: 400ms` – Standard transitions
- `--dur-slow: 600ms` – Slow reveals

### Easings
- `--ease-out: cubic-bezier(0.33, 0.66, 0.66, 1)` – Deceleration
- `--ease-in: cubic-bezier(0.33, 0, 0.66, 0.33)` – Acceleration
- `--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1)` – Smooth both ways

### Motion Rules
- Animate `transform` and `opacity` only (no layout properties)
- Maximum 3 motion primitives per page
- Respect `prefers-reduced-motion: reduce` (collapse to ≤150ms opacity fade)
- Focus indicators show instantly (no animation)

## Components

### Navigation (N5 - Floating Pill)
- Sticky at top with blur backdrop
- Animated underline on hover
- Color-coded nav links per accent system

### Cards
- **Base**: `background: rgba(45, 27, 71, 0.6)` with `backdrop-filter: blur(8px)`
- **Border**: `1px solid rgba(255, 0, 110, 0.1)`
- **Hover**: Lifts on Y-axis, border brightens, shadow expands
- **Transition**: 400ms cubic-bezier ease-out

### Buttons (Primary)
- **Background**: Linear gradient from accent to secondary-accent
- **Padding**: 0.75rem 1.5rem
- **Hover**: Translatey(-2px), box-shadow with accent glow
- **Shimmer**: Animated highlight sweep on hover
- **Focus**: 2px outline at 3:1 contrast minimum

### Forms
- **Input**: Transparent with accent border on focus
- **Focus State**: Border brightens, box-shadow glow appears
- **Error**: Red accent color scheme
- **Success**: Green accent color scheme

### Hero Section
- **Background**: Gradient (pink → purple → blue) at 8% opacity
- **Floating Orbs**: Radial gradients animate vertically (8s+ cycles)
- **Text Gradient**: Shimmer animation across display headline
- **Z-stack**: Ensures text sits above floating elements

### Image Placeholder
- **Background**: Dark paper gradient
- **Shimmer**: Animated light sweep (2s cycle)
- **Border**: Subtle accent border with corner radius

## Responsive Breakpoints

- **320px**: Mobile (minimum width)
- **375px**: Standard mobile
- **414px**: Large mobile
- **768px**: Tablet (grid changes)
- **1280px**: Desktop (max-width container)

### Mobile Specifics
- No horizontal scroll (grid tracks use `minmax(0, 1fr)`)
- Display headers wrap with `overflow-wrap: anywhere; min-width: 0`
- Button text stays single-line (≤ 30 chars)
- Section grid collapses to single column
- Padding reduces on mobile

## Accessibility

- **Color Contrast**: All text ≥ 3:1 (WCAG AA minimum)
- **Focus States**: Visible `:focus-visible` outline (never animated)
- **Motion**: Respected via `prefers-reduced-motion: reduce`
- **Semantic HTML**: Proper heading hierarchy, form labels
- **Keyboard Navigation**: All interactive elements keyboard-accessible

## Anti-Patterns to Avoid

❌ Inline color values (must use tokens)  
❌ Hard-coded fonts (must use token names)  
❌ Layout property animation (transform/opacity only)  
❌ Animated focus states  
❌ Section number labels hanging left of heading  
❌ Generic "clean and modern" descriptions  
❌ Templated layouts without variation  
❌ Multiple motion effects per section  

## Export Formats

### Tokens.css
```css
:root {
  --color-paper: #0f0319;
  --color-accent: #ff006e;
  /* ... all tokens ... */
}
```

### Tailwind v4 @theme
```css
@theme {
  --color-paper: #0f0319;
  --color-accent: #ff006e;
  /* ... */
}
```

### DTCG tokens.json
```json
{
  "color": {
    "paper": { "$value": "#0f0319", "$type": "color" }
  }
}
```

## Provenance

**Designed by**: K Unit Dance School Redesign (May 2026)  
**Source**: Dancing theme with playful tone, dynamic shadow effects  
**Locked for**: Production use across all pages  
**Next Diversification**: Preserve paper band + accent, vary display style or rhythm

---

*This design system is locked and portable. Use it to maintain consistency across future pages and projects.*

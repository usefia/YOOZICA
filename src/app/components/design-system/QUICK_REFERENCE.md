# YOOZICA Design System - Quick Reference

## Import Components

```tsx
import { 
  Button, 
  Input, 
  AdvisorCard, 
  TabButton, 
  NavItem, 
  Badge, 
  HeroBanner,
  Sidebar,
  Typography 
} from './components/design-system';
```

## CSS Variables Reference

### Colors
```css
/* Brand */
var(--gold-primary)      /* #D4A843 - Main gold */
var(--gold-hover)        /* #E8B84A - Hover state */
var(--gold-dark)         /* #C89B3C - Pressed state */

/* Backgrounds */
var(--bg-primary)        /* #0F0F0F - Main background */
var(--bg-secondary)      /* #1A1A1A - Secondary background */
var(--surface-card)      /* #1E1E2E - Card surface */
var(--surface-elevated)  /* #2A2A3A - Elevated surface */

/* Text */
var(--text-primary)      /* #EEEEF0 - Main text */
var(--text-secondary)    /* #9CA3AF - Secondary text */
var(--text-disabled)     /* #6B7280 - Disabled text */

/* Borders */
var(--border-subtle)     /* rgba(255,255,255,0.04) */
var(--border-card)       /* rgba(255,255,255,0.08) */

/* Status */
var(--color-error)       /* #EF4444 */
var(--color-success)     /* #10B981 */
```

### Spacing
```css
var(--spacing-1)  /* 8px */
var(--spacing-2)  /* 16px */
var(--spacing-3)  /* 24px */
var(--spacing-4)  /* 32px */
var(--spacing-5)  /* 48px */
var(--spacing-6)  /* 64px */
```

### Border Radius
```css
var(--radius-sm)   /* 8px */
var(--radius-md)   /* 12px */
var(--radius-lg)   /* 16px */
var(--radius-xl)   /* 24px */
var(--radius-full) /* 999px */
```

### Typography
```css
/* Font Sizes */
var(--text-heading-xl)  /* 32px */
var(--text-heading-lg)  /* 24px */
var(--text-heading-md)  /* 20px */
var(--text-heading-sm)  /* 16px */
var(--text-body-lg)     /* 16px */
var(--text-body-md)     /* 14px */
var(--text-body-sm)     /* 12px */
var(--text-label-md)    /* 14px */
var(--text-label-sm)    /* 12px */
var(--text-button)      /* 14px */

/* Font Weights */
var(--font-weight-normal)    /* 400 */
var(--font-weight-medium)    /* 500 */
var(--font-weight-semibold)  /* 600 */
var(--font-weight-bold)      /* 700 */
```

### Transitions
```css
var(--transition-fast)    /* 100ms ease */
var(--transition-normal)  /* 150ms ease */
var(--transition-slow)    /* 200ms ease */
```

## Common Patterns

### RTL Container
```tsx
<div dir="rtl" className="text-right">
  محتوای فارسی
</div>
```

### Card Layout
```tsx
<div className="bg-[var(--surface-card)] border border-[var(--border-card)] rounded-lg p-6">
  {/* Content */}
</div>
```

### Hover Effect
```tsx
<div className="transition-all duration-200 hover:bg-[var(--surface-elevated)] hover:scale-105">
  {/* Content */}
</div>
```

### Focus Ring
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)] focus:ring-offset-2">
  دکمه
</button>
```

### Gold Gradient Background
```tsx
<div style={{ background: 'var(--gradient-gold)' }}>
  {/* Content */}
</div>
```

### Touch Target (Minimum 48px)
```tsx
<button className="min-h-[48px] min-w-[48px]">
  {/* Icon or text */}
</button>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

## Component Cheat Sheet

| Component | Height | Width | Border Radius | Key Feature |
|-----------|--------|-------|---------------|-------------|
| Button | 48px | auto (min 120px) | 12px | 3 variants |
| Input | 48px | 100% | 24px (full) | White bg |
| TabButton | 40px | auto (min 80px) | 20px (full) | Active/inactive |
| NavItem | 48px | 240px | - | RTL indicator |
| Badge | 24px | auto (min 40px) | 12px (full) | Gold pill |
| AdvisorCard | 320px | 280px | 16px | Hover scale |
| Sidebar | 100vh | 280px | - | Fixed right |

## Common Class Combinations

### Primary CTA
```tsx
className="bg-[var(--gold-primary)] hover:bg-[var(--gold-hover)] active:bg-[var(--gold-dark)] text-[var(--bg-primary)] font-semibold"
```

### Card with Hover
```tsx
className="bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-[var(--border-card)] hover:bg-[var(--surface-elevated)] transition-all duration-200"
```

### Heading Text
```tsx
className="font-vazirmatn font-bold text-2xl text-[var(--text-primary)]"
```

### Body Text
```tsx
className="font-vazirmatn font-normal text-sm text-[var(--text-primary)] leading-[1.5]"
```

### Secondary Text
```tsx
className="font-vazirmatn text-xs text-[var(--text-secondary)]"
```

## Accessibility Shortcuts

### Focus Visible
```tsx
className="focus-visible:ring-2 focus-visible:ring-[var(--gold-primary)] focus-visible:ring-offset-2"
```

### Screen Reader Only
```tsx
className="sr-only"
```

### ARIA Attributes
```tsx
aria-label="توضیح فارسی"
aria-describedby="description-id"
role="button"
tabIndex={0}
```

## RTL-Specific Classes

### Right-Aligned Flex
```tsx
className="flex justify-end items-center gap-3"
```

### RTL Padding (right/left swap)
```tsx
className="pr-6 pl-3" // Padding-right: 24px, Padding-left: 12px in RTL
```

### Border Right (becomes left in LTR)
```tsx
className="border-r-[3px] border-r-[var(--gold-primary)]"
```

## Font Usage

### Default Body
```tsx
className="font-vazirmatn text-sm"
```

### Headings
```tsx
className="font-vazirmatn font-bold text-2xl"
```

### Labels
```tsx
className="font-vazirmatn font-medium text-sm"
```

## Quick Tips

1. **Always use `dir="rtl"`** on containers with Persian text
2. **Minimum touch target**: 48×48px for mobile users
3. **Minimum text**: 14px for users aged 40-60
4. **Gold sparingly**: Only for CTAs, active states, and accents
5. **8px grid**: All spacing should be multiples of 8
6. **Vazirmatn font**: Required for proper Persian display
7. **Hover transitions**: Use 200ms for smooth interactions
8. **Focus rings**: Always gold (#D4A843) for brand consistency
9. **Dark theme**: Background #0F0F0F, text #EEEEF0
10. **White inputs**: Stand out on dark backgrounds

## Testing Checklist

- [ ] Component works with long Persian text
- [ ] Touch targets are ≥ 48px
- [ ] Text is ≥ 14px
- [ ] RTL layout correct (text flows right-to-left)
- [ ] Icons positioned correctly in RTL
- [ ] Hover states work
- [ ] Focus states visible
- [ ] Disabled states clear
- [ ] Keyboard navigation works
- [ ] Color contrast passes WCAG AA

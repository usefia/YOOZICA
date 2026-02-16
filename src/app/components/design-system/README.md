# YOOZICA Design System

A complete component library for Persian RTL interfaces with accessibility features for users aged 40-60.

## Design Principles

### RTL-First Layout
- All components use `dir="rtl"` direction
- Text is right-aligned by default
- Icons in buttons positioned on the RIGHT side of text
- Navigation active indicators on the RIGHT edge (border-right in RTL)
- Sidebar positioned on the RIGHT side of screen
- Horizontal auto layouts flow right-to-left

### Accessibility
- **Minimum touch target**: 48×48px for all interactive elements
- **Minimum text size**: 14px for body content (optimized for 40-60 age group)
- **Color contrast**: WCAG AA compliance
- **Focus states**: Visible gold border on all interactive elements
- **Disabled states**: Visually distinct with reduced opacity/gray colors

### Typography
- **Font family**: Vazirmatn (Google Fonts) for Persian text
- **Line height**: Minimum 1.5 for body text (readability)
- **Text styles**: Heading XL/Large/Medium/Small, Body Large/Medium/Small, Label Medium/Small

### Color Palette

#### Brand Colors
- **Gold Primary**: `#D4A843` - Main brand color for CTAs, active states
- **Gold Hover**: `#E8B84A` - Lighter gold for hover states
- **Gold Dark**: `#C89B3C` - Darker gold for pressed states

#### Backgrounds
- **Primary**: `#0F0F0F` - Deep black for main background
- **Secondary**: `#1A1A1A` - Slightly lighter black
- **Surface Card**: `#1E1E2E` - Dark gray for cards and panels
- **Surface Elevated**: `#2A2A3A` - Elevated cards and modals

#### Text Colors
- **Primary**: `#EEEEF0` - Off-white for main text
- **Secondary**: `#9CA3AF` - Light gray for secondary text
- **Disabled**: `#6B7280` - Medium gray for disabled text

#### Borders
- **Subtle**: `rgba(255, 255, 255, 0.04)` - 4% white opacity
- **Card**: `rgba(255, 255, 255, 0.08)` - 8% white opacity

#### Status
- **Error**: `#EF4444` - Red for errors
- **Success**: `#10B981` - Green for success

### Spacing System
Uses 8px grid system:
- `8px` - Tight spacing
- `16px` - Normal spacing
- `24px` - Loose spacing
- `32px` - Large spacing
- `48px` - Extra large (minimum touch target)
- `64px` - Section spacing

### Border Radius
- **Small**: `8px`
- **Medium**: `12px` (default for buttons)
- **Large**: `16px` (cards)
- **XL**: `24px` (hero banners)
- **Full**: `999px` (pills, fully rounded inputs)

## Components

### Button
Three variants with consistent 48px height:

```tsx
import { Button } from './components/design-system';

// Primary - Gold background, black text
<Button variant="primary">دکمه اصلی</Button>

// Secondary - Transparent with gold border
<Button variant="secondary">دکمه ثانویه</Button>

// Ghost - Transparent with white text
<Button variant="ghost">دکمه شبح</Button>

// With icon (RTL: icon on right)
<Button variant="primary" icon={<Send />}>ارسال</Button>
```

### Input / Search Bar
White background for contrast, fully rounded:

```tsx
import { Input } from './components/design-system';

// Default with search icon
<Input placeholder="جستجو..." />

// With error state
<Input placeholder="ورودی" error />

// Custom icon
<Input icon={<User />} placeholder="نام کاربری" />
```

### AdvisorCard
280×320px card with hover effects:

```tsx
import { AdvisorCard } from './components/design-system';

<AdvisorCard
  logo={<Star className="w-full h-full" />}
  title="مشاور کسب و کار"
  description="راهنمایی در توسعه کسب و کار"
  onClick={() => console.log('Clicked')}
/>
```

### TabButton
For category filters and navigation:

```tsx
import { TabButton } from './components/design-system';

<TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
  همه
</TabButton>
```

### NavItem
Sidebar navigation with RTL active indicator:

```tsx
import { NavItem } from './components/design-system';

<NavItem
  icon={<MessageSquare />}
  label="چت"
  badge="جدید"
  active={true}
  onClick={() => navigate('/chat')}
/>
```

### Badge / Pill
Small gold pill for labels:

```tsx
import { Badge } from './components/design-system';

<Badge>جدید</Badge>
<Badge>۳</Badge>
```

### HeroBanner
Gold gradient banner for hero sections:

```tsx
import { HeroBanner } from './components/design-system';

<HeroBanner
  title="مشاوره‌های تخصصی"
  subtitle="انتخاب مشاور مناسب"
>
  <Input placeholder="جستجو..." />
  <div className="flex gap-3">
    <TabButton active>همه</TabButton>
    <TabButton>کسب و کار</TabButton>
  </div>
</HeroBanner>
```

### Sidebar
280px fixed sidebar container:

```tsx
import { Sidebar } from './components/design-system';

<Sidebar
  logo={<img src={logo} alt="Logo" />}
  navigation={
    <>
      <NavItem icon={<Home />} label="خانه" active />
      <NavItem icon={<Settings />} label="تنظیمات" />
    </>
  }
  userSection={<UserProfile />}
/>
```

### Typography
Semantic text styles:

```tsx
import { Typography } from './components/design-system';

<Typography variant="heading-xl">عنوان بسیار بزرگ</Typography>
<Typography variant="heading-lg">عنوان بزرگ</Typography>
<Typography variant="heading-md">عنوان متوسط</Typography>
<Typography variant="heading-sm">عنوان کوچک</Typography>
<Typography variant="body-lg">متن بزرگ</Typography>
<Typography variant="body-md">متن متوسط</Typography>
<Typography variant="body-sm">متن کوچک</Typography>
<Typography variant="label-md">برچسب متوسط</Typography>
<Typography variant="label-sm">برچسب کوچک</Typography>
```

## Usage Guidelines

### DO:
✅ Use Vazirmatn font for all Persian text  
✅ Set `dir="rtl"` on all components  
✅ Maintain 48px minimum touch targets  
✅ Use 14px minimum text size for body content  
✅ Apply gold color only for CTAs and active states  
✅ Use the 8px spacing grid system  
✅ Create all components with auto layout  
✅ Apply Figma color and text styles (no hard-coded values)  
✅ Include hover, active, and disabled states  

### DON'T:
❌ Use LTR layouts or left-aligned text  
❌ Use colors outside the defined palette  
❌ Create touch targets smaller than 48px  
❌ Use text smaller than 14px for body content  
❌ Use fonts other than Vazirmatn for Persian text  
❌ Create components without state variants  
❌ Hard-code colors or text styles  
❌ Use gold for large background areas (except hero banners)  

## Transitions & Animations

All components use consistent timing:
- **Fast**: 100ms ease - Scale down on press
- **Normal**: 150ms ease - Background color changes
- **Slow**: 200ms ease - Card hovers, focus states

Keep animations minimal and performant.

## Browser Support

- Modern browsers with CSS custom properties support
- RTL direction support required
- Flexbox and Grid layout support

## Accessibility Checklist

- [ ] All interactive elements ≥ 48×48px
- [ ] All body text ≥ 14px
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible (gold ring)
- [ ] Disabled states visually distinct
- [ ] RTL text direction properly applied
- [ ] Semantic HTML elements used
- [ ] Keyboard navigation supported

## Contributing

When adding new components:
1. Follow RTL-first principles
2. Maintain 48px minimum touch targets
3. Use Vazirmatn font with appropriate weights
4. Apply CSS custom properties from theme.css
5. Include all state variants (hover, active, disabled, focus)
6. Add TypeScript types
7. Document usage with examples
8. Test with Persian text content

## Demo

Visit `/design-system` to see all components in action with interactive examples.

import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface HeroBannerProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * YOOZICA Hero Banner Component
 * 
 * Used for top sections like search areas
 * 
 * Specifications:
 * - Full width with auto height
 * - Gold gradient background (135deg)
 * - Border-radius: 24px
 * - Padding: 48px 32px
 * - Black text on gold gradient
 * - Contains title, subtitle, and child components (search, tabs)
 * - RTL support: All content centered and right-aligned
 */
export function HeroBanner({ 
  title, 
  subtitle, 
  children, 
  className 
}: HeroBannerProps) {
  return (
    <div
      className={cn(
        "w-full rounded-[24px] p-8 md:p-12",
        "bg-gradient-to-br from-[#D4A843] via-[#E8B84A] to-[#C89B3C]",
        "flex flex-col items-center justify-start gap-6",
        className
      )}
      dir="rtl"
      style={{ background: 'var(--gradient-gold)' }}
    >
      {/* Title */}
      <h1 className="font-vazirmatn font-bold text-2xl md:text-[var(--text-heading-lg)] text-[var(--bg-primary)] text-center">
        {title}
      </h1>

      {/* Subtitle (optional) */}
      {subtitle && (
        <p className="font-vazirmatn text-sm md:text-base text-[var(--bg-primary)] opacity-80 text-center max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Child components (search bar, tabs, etc.) */}
      {children && (
        <div className="w-full flex flex-col items-center gap-4">
          {children}
        </div>
      )}
    </div>
  );
}

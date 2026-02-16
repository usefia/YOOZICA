import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * YOOZICA Badge / Pill Component
 * 
 * Specifications:
 * - Auto width (min 40px), Height: 24px
 * - Gold background with black text
 * - Fully rounded (border-radius: 12px)
 * - Padding: 0 12px
 */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "min-w-[40px] h-6 px-3 rounded-full",
        "bg-[var(--gold-primary)] text-[var(--bg-primary)]",
        "font-vazirmatn font-semibold text-xs",
        className
      )}
      dir="rtl"
    >
      {children}
    </span>
  );
}

import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: string;
}

/**
 * YOOZICA Tab Button Component
 * 
 * Used for category filters and navigation tabs
 * 
 * Specifications:
 * - Auto width (min 80px), Height: 40px
 * - Fully rounded (border-radius: 20px)
 * - Inactive: Transparent with gray text
 * - Active: Gold background with black text
 * - Hover: Subtle white overlay
 * - RTL support: Text centered
 */
export function TabButton({ 
  active = false, 
  className,
  children,
  ...props 
}: TabButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "min-w-[80px] h-[40px] rounded-[20px] px-5",
        "font-vazirmatn font-medium text-sm",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]",
        // Active state
        active 
          ? "bg-[var(--gold-primary)] text-[var(--bg-primary)]"
          : "bg-transparent text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--text-primary)]",
        className
      )}
      dir="rtl"
      {...props}
    >
      {children}
    </button>
  );
}

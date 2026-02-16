import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface NavItemProps {
  icon: ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * YOOZICA Navigation Menu Item Component (Sidebar)
 * 
 * Specifications:
 * - Width: 240px, Height: 48px
 * - RTL layout: Active indicator on RIGHT edge
 * - Icon (20px) + Label + Optional badge
 * - Active: Gold border-right, gold text, gold icon, light background
 * - Hover: Subtle white overlay
 * - Minimum 48px height for accessibility
 */
export function NavItem({ 
  icon, 
  label, 
  badge, 
  active = false, 
  onClick,
  className 
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles - 48px min height for touch targets
        "w-[240px] h-[48px] px-4",
        "flex items-center gap-3",
        // RTL: Active indicator on RIGHT edge
        "border-r-[3px] transition-all duration-200",
        active 
          ? "border-r-[var(--gold-primary)] bg-[#D4A84320]"
          : "border-r-transparent",
        // Hover effect (only when not active)
        !active && "hover:bg-[rgba(255,255,255,0.08)]",
        // Focus ring
        "focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)] focus:ring-inset",
        className
      )}
      dir="rtl"
    >
      {/* Icon - positioned RIGHT in RTL */}
      <div className={cn(
        "w-5 h-5 shrink-0",
        active ? "text-[var(--gold-primary)]" : "text-[var(--text-secondary)]"
      )}>
        {icon}
      </div>

      {/* Label */}
      <span className={cn(
        "flex-1 text-right font-vazirmatn font-medium text-sm",
        active ? "text-[var(--gold-primary)]" : "text-[var(--text-secondary)]"
      )}>
        {label}
      </span>

      {/* Badge (optional) - positioned LEFT in RTL */}
      {badge && (
        <span className="bg-[var(--gold-primary)] text-[var(--bg-primary)] text-xs font-semibold px-3 h-6 rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
}

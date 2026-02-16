import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface AdvisorCardProps {
  logo: ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * YOOZICA Advisor Card Component
 * 
 * Specifications:
 * - Width: 280px, Height: 320px
 * - Background: Surface card (#1E1E2E) with subtle border
 * - Logo area: 120×120px with #3A3A4A background
 * - Hover: Scales to 102%, elevated border, lighter background
 * - RTL support: Text centered (no directional issues)
 * - 24px padding for comfortable spacing
 */
export function AdvisorCard({ 
  logo, 
  title, 
  description, 
  onClick, 
  className 
}: AdvisorCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        // Base styles - fixed dimensions
        "w-[280px] h-[320px] rounded-lg p-6",
        // Background and border
        "bg-[var(--surface-card)] border border-[var(--border-subtle)]",
        // Layout
        "flex flex-col items-center justify-start",
        // Hover effects
        "transition-all duration-200 ease-out",
        onClick && "cursor-pointer",
        onClick && "hover:bg-[var(--surface-elevated)] hover:border-[var(--border-card)] hover:scale-[1.02]",
        onClick && "active:scale-[0.98]",
        className
      )}
      dir="rtl"
    >
      {/* Logo Container */}
      <div className="w-[120px] h-[120px] rounded-xl bg-[#3A3A4A] flex items-center justify-center mb-4">
        <div className="w-20 h-20 text-[var(--gold-primary)]">
          {logo}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-vazirmatn font-semibold text-base text-[var(--text-primary)] text-center mb-2">
        {title}
      </h3>

      {/* Description (optional) */}
      {description && (
        <p className="font-vazirmatn text-xs text-[var(--text-secondary)] text-center leading-[1.4]">
          {description}
        </p>
      )}
    </div>
  );
}

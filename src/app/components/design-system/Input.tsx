import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { Search } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: boolean;
}

/**
 * YOOZICA Input Component
 * 
 * Features:
 * - White background (#FFFFFF) for contrast on dark theme
 * - Fully rounded border-radius (24px) for modern look
 * - 48px height for accessibility (40-60 age target)
 * - RTL support: Text starts from right, icon on right
 * - Gold focus ring (#D4A843) for brand consistency
 * - Black text on white background for readability
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon = <Search />, error, ...props }, ref) => {
    return (
      <div className="relative w-full" dir="rtl">
        {/* Icon positioned on RIGHT for RTL */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)] pointer-events-none">
          {icon}
        </div>
        
        <input
          ref={ref}
          className={cn(
            // Base styles - 48px height for touch targets
            "w-full h-[48px] rounded-[24px] bg-white",
            // RTL padding: space on right for icon, less on left
            "pr-[48px] pl-5",
            // Typography - black text on white for readability
            "font-vazirmatn text-sm font-normal text-black",
            "placeholder:text-[var(--text-secondary)]",
            // Focus states
            "focus:outline-none transition-all duration-200",
            error 
              ? "border-2 border-[var(--color-error)]" 
              : "border-0 focus:border-2 focus:border-[var(--gold-primary)]",
            className
          )}
          dir="rtl"
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

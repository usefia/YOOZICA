import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  iconPosition?: 'right' | 'left';
  children: ReactNode;
}

/**
 * YOOZICA Button Component
 * 
 * Variants:
 * - primary: Gold background (#D4A843) with black text - for primary CTAs
 * - secondary: Transparent with gold border - for secondary actions
 * - ghost: Transparent with white text - for tertiary actions
 * 
 * All buttons have minimum 48px height for accessibility (40-60 age target)
 * RTL support: Icons positioned on RIGHT by default
 */
export function Button({ 
  variant = 'primary', 
  icon, 
  iconPosition = 'right',
  className,
  disabled,
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = cn(
    // Base styles - 48px min height for touch targets
    "inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[120px] px-6 rounded-xl",
    "font-vazirmatn font-semibold text-sm transition-all duration-150",
    "focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]",
    "active:scale-[0.98] disabled:cursor-not-allowed"
  );

  const variantStyles = {
    primary: cn(
      "bg-[var(--gold-primary)] text-[var(--bg-primary)]",
      !disabled && "hover:bg-[var(--gold-hover)] active:bg-[var(--gold-dark)]",
      disabled && "bg-[var(--text-disabled)] text-[var(--text-secondary)]"
    ),
    secondary: cn(
      "bg-transparent border-[1.5px] border-[var(--gold-primary)] text-[var(--gold-primary)]",
      !disabled && "hover:bg-[#D4A84310] hover:border-[var(--gold-hover)] hover:text-[var(--gold-hover)]",
      !disabled && "active:bg-[#D4A84320] active:border-[var(--gold-dark)] active:text-[var(--gold-dark)]",
      disabled && "border-[var(--text-disabled)] text-[var(--text-disabled)]"
    ),
    ghost: cn(
      "bg-transparent text-[var(--text-primary)]",
      !disabled && "hover:bg-[rgba(255,255,255,0.08)]",
      !disabled && "active:bg-[rgba(255,255,255,0.14)]",
      disabled && "text-[var(--text-disabled)]"
    ),
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      disabled={disabled}
      dir="rtl"
      {...props}
    >
      {/* RTL: Icon on RIGHT side */}
      {icon && iconPosition === 'right' && (
        <span className="w-5 h-5 shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'left' && (
        <span className="w-5 h-5 shrink-0">{icon}</span>
      )}
    </button>
  );
}

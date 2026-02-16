import { ReactNode, ElementType } from 'react';
import { cn } from '../../lib/utils';

type TypographyVariant = 
  | 'heading-xl' 
  | 'heading-lg' 
  | 'heading-md' 
  | 'heading-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'label-md'
  | 'label-sm'
  | 'button';

interface TypographyProps {
  variant?: TypographyVariant;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * YOOZICA Typography Component
 * 
 * Text Styles (all using Vazirmatn font):
 * - Heading XL: 32px, weight 700, color #EEEEF0, RTL
 * - Heading Large: 24px, weight 700, color #EEEEF0, RTL
 * - Heading Medium: 20px, weight 600, color #EEEEF0, RTL
 * - Heading Small: 16px, weight 600, color #EEEEF0, RTL
 * - Body Large: 16px, weight 400, color #EEEEF0, RTL, line-height 1.6
 * - Body Medium: 14px, weight 400, color #EEEEF0, RTL, line-height 1.5
 * - Body Small: 12px, weight 400, color #9CA3AF, RTL, line-height 1.4
 * - Label Medium: 14px, weight 500, color #EEEEF0, RTL
 * - Label Small: 12px, weight 500, color #9CA3AF, RTL
 * - Button Text: 14px, weight 600, varies by button type, RTL
 */
export function Typography({ 
  variant = 'body-md', 
  as, 
  className, 
  children 
}: TypographyProps) {
  // Default element based on variant
  const defaultElement: Record<TypographyVariant, ElementType> = {
    'heading-xl': 'h1',
    'heading-lg': 'h2',
    'heading-md': 'h3',
    'heading-sm': 'h4',
    'body-lg': 'p',
    'body-md': 'p',
    'body-sm': 'p',
    'label-md': 'span',
    'label-sm': 'span',
    'button': 'span',
  };

  const Component = as || defaultElement[variant];

  const styles: Record<TypographyVariant, string> = {
    'heading-xl': 'text-[32px] font-bold text-[var(--text-primary)] leading-[1.5]',
    'heading-lg': 'text-[24px] font-bold text-[var(--text-primary)] leading-[1.5]',
    'heading-md': 'text-[20px] font-semibold text-[var(--text-primary)] leading-[1.5]',
    'heading-sm': 'text-[16px] font-semibold text-[var(--text-primary)] leading-[1.5]',
    'body-lg': 'text-[16px] font-normal text-[var(--text-primary)] leading-[1.6]',
    'body-md': 'text-[14px] font-normal text-[var(--text-primary)] leading-[1.5]',
    'body-sm': 'text-[12px] font-normal text-[var(--text-secondary)] leading-[1.4]',
    'label-md': 'text-[14px] font-medium text-[var(--text-primary)] leading-[1.5]',
    'label-sm': 'text-[12px] font-medium text-[var(--text-secondary)] leading-[1.5]',
    'button': 'text-[14px] font-semibold leading-[1.5]',
  };

  return (
    <Component
      className={cn('font-vazirmatn', styles[variant], className)}
      dir="rtl"
    >
      {children}
    </Component>
  );
}

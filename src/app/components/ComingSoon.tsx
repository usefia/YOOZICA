import { Typography } from './design-system';
import { LucideIcon } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

export default function ComingSoon({ title, icon: Icon, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-8" dir="rtl">
      <div className="max-w-md text-center space-y-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-[var(--surface-card)] border border-[var(--border-card)] flex items-center justify-center">
          <Icon className="w-12 h-12 text-[var(--gold-primary)]" />
        </div>
        
        <Typography variant="heading-lg">{title}</Typography>
        
        <Typography variant="body-md" className="text-[var(--text-secondary)]">
          {description}
        </Typography>
        
        <div className="pt-4">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold-primary)] text-[var(--bg-primary)] rounded-xl font-semibold text-sm hover:bg-[var(--gold-hover)] transition-colors"
          >
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
}

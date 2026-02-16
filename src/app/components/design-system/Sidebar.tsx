import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface SidebarProps {
  logo: ReactNode;
  navigation: ReactNode;
  userSection?: ReactNode;
  className?: string;
}

/**
 * YOOZICA Sidebar Container Component
 * 
 * Specifications:
 * - Width: 280px, Height: 100vh
 * - Background: Deep black (#0F0F0F)
 * - RTL: Border on LEFT edge, positioned on RIGHT side of screen
 * - Padding: 24px 0
 * - Structure: Logo → Navigation → Spacer → User section
 */
export function Sidebar({ 
  logo, 
  navigation, 
  userSection, 
  className 
}: SidebarProps) {
  return (
    <aside
      className={cn(
        // Fixed positioning on RIGHT for RTL
        "fixed right-0 top-0",
        "w-[280px] h-screen",
        // Background and border (LEFT border for RTL)
        "bg-[var(--bg-primary)] border-l border-[var(--border-subtle)]",
        // Layout
        "flex flex-col",
        "py-6",
        className
      )}
      dir="rtl"
    >
      {/* Logo Section */}
      <div className="px-6 mb-8">
        {logo}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-1 px-5 overflow-y-auto">
        {navigation}
      </nav>

      {/* User Section (bottom) */}
      {userSection && (
        <div className="px-5 pt-6 border-t border-[var(--border-subtle)]">
          {userSection}
        </div>
      )}
    </aside>
  );
}

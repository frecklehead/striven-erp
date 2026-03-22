'use client';

import { useLayout } from '@/lib/context/LayoutContext';
import { Topbar } from '@/components/layout/Topbar';
import { TopNavbar } from '@/components/layout/TopNavbar';
import { cn } from '@/lib/utils/cn';

export function AppShell({ children }: { children: React.ReactNode }) {
  const { isMobile } = useLayout();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--page-bg)] text-[var(--text-primary)] relative">
      <Topbar />
      <TopNavbar />
      <main 
        className={cn(
          "pt-[104px] min-h-screen transition-all duration-200 w-full"
        )}
      >
        <div className="p-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

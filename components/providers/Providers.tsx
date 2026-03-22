import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LayoutProvider } from '@/lib/context/LayoutContext';

import { ToastProvider } from '@/lib/context/ToastContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LayoutProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </LayoutProvider>
    </ThemeProvider>
  );
}

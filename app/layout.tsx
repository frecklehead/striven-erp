import type { Metadata } from 'next';
import { DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { AppShell } from '@/components/layout/AppShell';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'erpactor',
  description: 'A pixel-accurate UI clone of erpactor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans antialiased text-[var(--text-primary)] bg-[var(--page-bg)] tracking-tight`}>
        <Providers>
          <AppShell>
            {children}
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}

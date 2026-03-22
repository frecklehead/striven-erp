'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';

const navItems = [
  { label: 'Company', href: '/company' },
  { label: 'Employees', href: '/employees' },
  { label: 'Clients', href: '/clients' },
  { label: 'Suppliers', href: '/suppliers' },
  { label: 'Accounting', href: '/accounting' },
  { label: 'Projects', href: '/projects' },
  { label: 'Tasks', href: '/tasks' },
  { label: 'Workflows', href: '/workflows' },
  { label: 'Reports', href: '/reports' },
];

export function TopNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-16 left-0 right-0 h-10 bg-[var(--page-bg)] border-b-2 border-orange-500 z-40 flex items-center px-4 overflow-x-auto shadow-sm">
      <ul className="flex items-center space-x-6 h-full">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.href) ?? false;
          return (
            <li key={item.href} className="h-full flex items-center">
              <Link
                href={item.href}
                className={cn(
                  "text-sm tracking-wide font-medium transition-colors hover:text-[var(--primary)] whitespace-nowrap h-full flex items-center",
                  isActive
                    ? "text-[var(--primary)] font-semibold border-b-2 border-[var(--primary)] -mb-[2px]"
                    : "text-[var(--text-secondary)]"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

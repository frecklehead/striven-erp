import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';

export interface DropdownItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
  className?: string;
}

export function Dropdown({ trigger, items, align = 'left', className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-2 w-48 rounded-md bg-[var(--card-bg)] shadow-lg ring-1 ring-black ring-opacity-5 border border-[var(--border)] focus:outline-none animate-in fade-in slide-in-from-top-2 duration-100",
            align === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left',
            className
          )}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  item.onClick && item.onClick();
                  setIsOpen(false);
                }}
                className={cn(
                  "group flex w-full items-center px-4 py-2 text-sm transition-colors",
                  item.danger
                    ? "text-[var(--danger)] hover:bg-[var(--danger-bg)]"
                    : "text-[var(--text-primary)] hover:bg-[var(--page-bg)]"
                )}
                role="menuitem"
              >
                {item.icon && <span className="mr-3 h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100">{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

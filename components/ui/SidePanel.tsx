import React, { useEffect } from 'react';
import { cn } from '@/lib/utils/cn';
import { X } from 'lucide-react';
import { Button } from './Button';

export interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
}

export function SidePanel({ isOpen, onClose, title, children, footer, width = 'w-full sm:w-[480px]' }: SidePanelProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Panel */}
      <div 
        className={cn(
          "absolute right-0 top-0 bottom-0 flex flex-col bg-[var(--card-bg)] shadow-2xl animate-in slide-in-from-right duration-300",
          width
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] shrink-0 bg-[var(--page-bg)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="-mr-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="shrink-0 p-6 border-t border-[var(--border)] bg-[var(--page-bg)]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils/cn';
import { X } from 'lucide-react';
import { Button } from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, size = 'md', children, footer }: ModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    fullscreen: "max-w-full h-screen rounded-none m-0",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={cn(
          "w-full bg-[var(--card-bg)] border border-[var(--border)] shadow-xl flex flex-col animate-in zoom-in-95 duration-200",
          size === 'fullscreen' ? sizeClasses[size] : `rounded-xl max-h-[90vh] ${sizeClasses[size]}`
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] shrink-0">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {title}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="-mr-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--page-bg)] flex justify-end gap-3 shrink-0 rounded-b-xl">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

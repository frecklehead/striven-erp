import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercent?: boolean;
  color?: string; // e.g. 'bg-[var(--primary)]'
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProgressBar({ 
  progress, 
  label, 
  showPercent = true, 
  color = 'bg-[var(--primary)]',
  size = 'md',
  className 
}: ProgressBarProps) {
  
  const clamped = Math.min(100, Math.max(0, progress));
  
  const heights = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3"
  };

  return (
    <div className={cn("w-full flex flex-col gap-1.5", className)}>
      {(label || showPercent) && (
        <div className="flex items-center justify-between text-xs font-medium text-[var(--text-secondary)]">
          {label && <span>{label}</span>}
          {showPercent && <span>{clamped}%</span>}
        </div>
      )}
      <div className={cn("w-full bg-[var(--page-bg)] rounded-full overflow-hidden border border-[var(--border)]", heights[size])}>
        <div 
          className={cn("h-full rounded-full transition-all duration-500", color)}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}

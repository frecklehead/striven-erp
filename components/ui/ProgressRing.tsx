import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string; // Tailwind class
  trackColor?: string; // Tailwind class
  label?: React.ReactNode;
  className?: string;
}

export function ProgressRing({
  progress,
  size = 64,
  strokeWidth = 6,
  color = 'text-[var(--primary)]',
  trackColor = 'text-[var(--border)]',
  label,
  className
}: ProgressRingProps) {
  const clamped = Math.min(100, Math.max(0, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track */}
        <circle
          className={cn("transition-colors", trackColor)}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Fill */}
        <circle
          className={cn("transition-all duration-700 ease-out", color)}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      {label && (
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[var(--text-primary)]">
          {label}
        </div>
      )}
    </div>
  );
}

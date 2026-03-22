import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'sm', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center font-medium rounded-full";
    
    const variants = {
      default: "bg-[var(--page-bg)] text-[var(--text-secondary)] border border-[var(--border)]",
      success: "bg-[var(--success-bg)] text-[var(--success)] border border-[var(--success)]",
      warning: "bg-[var(--warning-bg)] text-[var(--warning)] border border-[var(--warning)]",
      danger: "bg-[var(--danger-bg)] text-[var(--danger)] border border-[var(--danger)]",
      info: "bg-[var(--primary-light)] text-[var(--primary-dark)] border border-[var(--primary)]",
    };
    
    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

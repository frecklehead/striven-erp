import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', leftIcon, rightIcon, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--primary)] disabled:opacity-50 disabled:cursor-not-allowed rounded-md shadow-sm active:scale-[0.98]";
    
    const variants = {
      primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] border border-transparent",
      secondary: "bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--page-bg)]",
      outline: "bg-transparent text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary-light)] dark:hover:bg-[var(--primary-dark)] dark:hover:text-white",
      ghost: "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--page-bg)] hover:text-[var(--text-primary)] shadow-none",
      danger: "bg-[var(--danger)] text-white hover:bg-[#b91c1c] border border-transparent",
    };
    
    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10 p-2",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {leftIcon && <span className={cn("mr-2", size === 'icon' ? 'mr-0' : '')}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';

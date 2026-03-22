import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className={cn("flex items-start gap-2 pt-1", className)}>
        <input
          id={inputId}
          type="checkbox"
          ref={ref}
          className="mt-0.5 h-4 w-4 rounded border-[var(--border)] bg-[var(--card-bg)] text-[var(--primary)] focus:ring-[var(--primary)] transition-colors cursor-pointer"
          {...props}
        />
        <div className="flex flex-col">
          {label && (
            <label htmlFor={inputId} className="text-sm font-medium text-[var(--text-primary)] cursor-pointer select-none">
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-[var(--text-muted)]">{description}</p>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[var(--text-primary)]">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-md border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-[var(--danger)] focus:ring-[var(--danger)]",
            className
          )}
          {...props}
        />
        {(helperText || error) && (
          <span className={cn("text-xs", error ? "text-[var(--danger)]" : "text-[var(--text-secondary)]")}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);
TextInput.displayName = 'TextInput';

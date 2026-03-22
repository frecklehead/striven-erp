import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
}

export const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ className, label, options, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-[var(--text-primary)]">
            {label}
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          className={cn(
            "flex w-full appearance-none rounded-md border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2 h-10 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50 inline-flex items-center",
            error && "border-[var(--danger)] focus:ring-[var(--danger)]",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {(error || helperText) && (
          <span className={cn("text-xs", error ? "text-[var(--danger)]" : "text-[var(--text-secondary)]")}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);
SelectInput.displayName = 'SelectInput';

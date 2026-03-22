import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <label className={cn("flex items-center cursor-pointer select-none", className)}>
        <div className="relative">
          <input
            id={inputId}
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            {...props}
          />
          <div className="w-10 h-5 bg-[var(--border)] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--primary)] peer-focus:ring-offset-1 rounded-full peer dark:bg-[#1e293b] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
        </div>
        {label && <span className="ml-3 text-sm font-medium text-[var(--text-primary)]">{label}</span>}
      </label>
    );
  }
);
Toggle.displayName = 'Toggle';

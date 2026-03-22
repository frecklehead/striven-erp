import React from 'react';
import { cn } from '@/lib/utils/cn';
import { TextInput } from './TextInput';

export interface CurrencyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <TextInput 
          label={label}
          type="number"
          step="0.01"
          error={error}
          ref={ref}
          className={cn("pl-8", className)}
          {...props}
        />
        <span className={cn(
          "absolute left-3 text-[var(--text-muted)] font-medium z-10",
          label ? "top-[32.5px]" : "top-[9px]"
        )}>
          $
        </span>
      </div>
    );
  }
);
CurrencyInput.displayName = 'CurrencyInput';

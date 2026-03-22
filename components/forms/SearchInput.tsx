'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { Search, X } from 'lucide-react';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  isLoading?: boolean;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onClear, isLoading, onChange, value, ...props }, ref) => {
    
    const [internalVal, setInternalVal] = useState('');
    const innerRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref as any) || innerRef;

    const isControlled = value !== undefined;
    const currentVal = isControlled ? value : internalVal;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalVal(e.target.value);
      }
      onChange && onChange(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalVal('');
      }
      if (resolvedRef.current) {
        resolvedRef.current.value = '';
        resolvedRef.current.focus();
      }
      onClear && onClear();
    };

    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <Search className="absolute left-3 h-4 w-4 text-[var(--text-muted)]" />
        <input
          ref={resolvedRef}
          value={value}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-[var(--border)] bg-[var(--card-bg)] pl-9 pr-10 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-colors"
          {...props}
        />
        {currentVal && !isLoading && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 p-0.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--page-bg)] focus:outline-none"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {isLoading && (
          <div className="absolute right-3">
            <div className="h-4 w-4 border-2 border-[var(--border)] border-t-[var(--primary)] rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

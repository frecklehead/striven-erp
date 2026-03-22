import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { X } from 'lucide-react';

export interface TagInputProps {
  label?: string;
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  placeholder?: string;
  className?: string;
}

export function TagInput({ label, tags, onAddTag, onRemoveTag, placeholder, className }: TagInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = inputValue.trim();
      if (val && !tags.includes(val)) {
        onAddTag(val);
      }
      setInputValue('');
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      onRemoveTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-[var(--text-primary)]">{label}</label>}
      <div 
        className={cn(
          "flex flex-wrap items-center gap-2 p-1.5 min-h-[40px] w-full rounded-md border border-[var(--border)] bg-[var(--card-bg)] focus-within:ring-2 focus-within:ring-[var(--primary)] focus-within:border-transparent transition-colors",
          className
        )}
      >
        {tags.map(tag => (
          <span key={tag} className="flex items-center gap-1 bg-[var(--page-bg)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-medium px-2 py-1 rounded">
            {tag}
            <button 
              type="button" 
              onClick={() => onRemoveTag(tag)}
              className="text-[var(--text-muted)] hover:text-[var(--danger)] focus:outline-none"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] px-1"
        />
      </div>
    </div>
  );
}

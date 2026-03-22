import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { UploadCloud } from 'lucide-react';

export interface FileUploadProps {
  label?: string;
  onChange?: (files: FileList | null) => void;
  className?: string;
}

export function FileUpload({ label, onChange, className }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && onChange) {
      onChange(e.dataTransfer.files);
    }
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <span className="text-sm font-medium text-[var(--text-primary)]">{label}</span>}
      <div 
        className={cn(
          "relative flex flex-col items-center justify-center p-8 w-full border-2 border-dashed rounded-lg transition-colors cursor-pointer text-center",
          isDragging ? "bg-[var(--primary-light)] border-[var(--primary)] text-[var(--primary-dark)]" : "bg-[var(--card-bg)] border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--page-bg)]",
          className
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <UploadCloud className="h-10 w-10 mb-2 opacity-50" />
        <p className="text-sm font-medium text-[var(--text-primary)]">Click to upload or drag and drop</p>
        <p className="text-xs mt-1 text-[var(--text-secondary)]">PNG, JPG, PDF up to 10MB</p>
        
        <input 
          type="file" 
          ref={inputRef}
          className="hidden" 
          onChange={(e) => onChange && onChange(e.target.files)}
          multiple
        />
      </div>
    </div>
  );
}

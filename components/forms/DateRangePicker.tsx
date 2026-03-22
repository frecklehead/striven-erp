import React from 'react';
import { cn } from '@/lib/utils/cn';
import { DatePicker } from './DatePicker';

export interface DateRangePickerProps {
  label?: string;
  startDate?: string;
  endDate?: string;
  onStartChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEndChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function DateRangePicker({ label, startDate, endDate, onStartChange, onEndChange, className }: DateRangePickerProps) {
  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {label && <span className="text-sm font-medium text-[var(--text-primary)]">{label}</span>}
      <div className="flex items-center gap-2 w-full">
        <DatePicker 
          className="flex-1" 
          value={startDate} 
          onChange={onStartChange} 
          placeholder="Start Date"
        />
        <span className="text-[var(--text-muted)]">-</span>
        <DatePicker 
          className="flex-1" 
          value={endDate} 
          onChange={onEndChange} 
          placeholder="End Date"
        />
      </div>
    </div>
  );
}

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  className?: string;
}

export function StatCard({ label, value, icon, trend, trendLabel, className }: StatCardProps) {
  return (
    <div className={cn("p-5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-sm flex flex-col gap-3", className)}>
      <div className="flex items-start justify-between">
        <div className="text-sm font-medium text-[var(--text-secondary)]">{label}</div>
        {icon && (
          <div className="h-8 w-8 rounded-lg bg-[var(--primary-light)] text-[var(--primary-dark)] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
      </div>
      
      <div className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
        {value}
      </div>

      {trend !== undefined && (
        <div className="flex items-center gap-1.5 mt-1 text-xs font-medium">
          {trend > 0 ? (
            <span className="flex items-center text-[var(--success)] bg-[var(--success-bg)] px-1.5 py-0.5 rounded">
              <TrendingUp className="h-3 w-3 mr-1" />
              +{trend}%
            </span>
          ) : trend < 0 ? (
            <span className="flex items-center text-[var(--warning)] bg-[var(--warning-bg)] px-1.5 py-0.5 rounded">
              <TrendingDown className="h-3 w-3 mr-1" />
              {trend}%
            </span>
          ) : (
            <span className="flex items-center text-[var(--text-secondary)] bg-[var(--page-bg)] px-1.5 py-0.5 rounded">
              <Minus className="h-3 w-3 mr-1" />
              0%
            </span>
          )}
          {trendLabel && <span className="text-[var(--text-muted)] font-normal ml-1">{trendLabel}</span>}
        </div>
      )}
    </div>
  );
}

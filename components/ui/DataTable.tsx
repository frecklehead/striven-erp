import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { ChevronLeft, ChevronRight, ChevronsUpDown, ChevronUp, ChevronDown } from 'lucide-react';

export interface Column<T> {
  key: keyof T | string;
  header: string;
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  className?: string; // e.g. w-[100px] or text-right
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  onRowClick?: (row: T) => void;
  className?: string;
  itemsPerPage?: number;
  totalItems?: number;
  page?: number;
  onPageChange?: (page: number) => void;
  selectable?: boolean;
}

export function DataTable<T>({
  data,
  columns,
  keyField,
  onRowClick,
  className,
  itemsPerPage = 10,
  totalItems,
  page = 1,
  onPageChange,
  selectable = false,
}: DataTableProps<T>) {
  
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const displayCount = data.length;
  const safeTotal = totalItems || displayCount;

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className={cn("flex flex-col w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-lg overflow-hidden shadow-sm", className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse min-w-[800px]">
          <thead className="text-[var(--text-secondary)] bg-[var(--page-bg)] border-b border-[var(--border)]">
            <tr>
              {selectable && (
                <th className="px-4 py-3 w-12 text-center">
                  <input type="checkbox" className="rounded text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--border)] bg-[var(--card-bg)] h-4 w-4 cursor-pointer" />
                </th>
              )}
              {columns.map((col, idx) => (
                <th 
                  key={idx} 
                  className={cn("px-4 py-3 font-medium tracking-wide whitespace-nowrap", col.className)}
                >
                  <div 
                    className={cn("flex items-center gap-1", col.sortable && "cursor-pointer select-none hover:text-[var(--text-primary)] transition-colors")}
                    onClick={() => col.sortable && handleSort(col.key as string)}
                  >
                    {col.header}
                    {col.sortable && (
                      <div className="flex bg-[var(--card-bg)] rounded text-slate-400 p-0.5 ml-1">
                        {sortConfig?.key === col.key ? (
                          sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3 text-[var(--primary)]" /> : <ChevronDown className="h-3 w-3 text-[var(--primary)]" />
                        ) : (
                          <ChevronsUpDown className="h-3 w-3" />
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-4 py-8 text-center text-[var(--text-muted)] italic">
                  No data available.
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr 
                  key={row[keyField] as string}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={cn(
                    "border-b border-[var(--border)]  transition-colors group",
                    onRowClick ? "cursor-pointer hover:bg-[var(--page-bg)]" : ""
                  )}
                >
                  {selectable && (
                    <td className="px-4 py-3 w-12 text-center" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" className="rounded text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--border)] bg-[var(--card-bg)] h-4 w-4 cursor-pointer" />
                    </td>
                  )}
                  {columns.map((col, idx) => (
                    <td key={idx} className={cn("px-4 py-3 text-[var(--text-primary)]", col.className)}>
                      {col.cell ? col.cell(row) : (row[col.key as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {(onPageChange || totalItems) && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--border)] bg-[var(--card-bg)]">
          <span className="text-sm text-[var(--text-secondary)]">
            Showing <span className="font-medium text-[var(--text-primary)]">{displayCount > 0 ? (page - 1) * itemsPerPage + 1 : 0}</span> to{' '}
            <span className="font-medium text-[var(--text-primary)]">{Math.min(page * itemsPerPage, safeTotal)}</span> of{' '}
            <span className="font-medium text-[var(--text-primary)]">{safeTotal}</span> entries
          </span>
          <div className="flex items-center gap-2">
            <button 
              disabled={page === 1}
              onClick={() => onPageChange && onPageChange(page - 1)}
              className="p-1 rounded bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--page-bg)] hover:text-[var(--text-primary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-medium px-2">{page}</span>
            <button 
              disabled={page * itemsPerPage >= safeTotal}
              onClick={() => onPageChange && onPageChange(page + 1)}
              className="p-1 rounded bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--page-bg)] hover:text-[var(--text-primary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';

export interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
  variant?: 'underline' | 'pills';
}

export function Tabs({ tabs, defaultTab, onChange, className, variant = 'underline' }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveId(id);
    if (onChange) onChange(id);
  };

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className={cn(
        "flex overflow-x-auto hide-scrollbar", 
        variant === 'underline' ? "border-b border-[var(--border)]" : "gap-2"
      )}>
        {tabs.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "whitespace-nowrap font-medium transition-colors text-sm px-4 py-2 focus:outline-none",
                variant === 'underline' ? (
                  isActive 
                    ? "text-[var(--primary)] border-b-2 border-[var(--primary)]" 
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b-2 border-transparent"
                ) : (
                  isActive
                    ? "bg-[var(--primary)] text-white rounded-full"
                    : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--page-bg)] hover:text-[var(--text-primary)] rounded-full border border-[var(--border)]"
                )
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      
      {/* Tab Content Rendering directly inside Tabs if provided */}
      {tabs.map((tab) => (
        tab.content && (
          <div 
            key={tab.id} 
            className={cn("pt-4 focus:outline-none", activeId === tab.id ? "block" : "hidden")}
            role="tabpanel"
          >
            {tab.content}
          </div>
        )
      ))}
    </div>
  );
}

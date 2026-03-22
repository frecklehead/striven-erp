'use client';

import React, { useState, useEffect } from 'react';
import { Search, Bell, Grid, Plus, MessageSquare, Clock, ArrowUpDown, Star, HelpCircle, Palette } from 'lucide-react';
import { useLayout } from '@/lib/context/LayoutContext';
import { useTheme } from 'next-themes';
import { CommandPalette } from '@/components/ui/CommandPalette';

export function Topbar() {
  const { toggleSidebar, isMobile } = useLayout();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleOpen = () => setIsCommandOpen(true);
    document.addEventListener('open-command-palette', handleOpen);
    
    return () => document.removeEventListener('open-command-palette', handleOpen);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--topbar-bg)] z-50 flex items-center px-4 transition-colors">
      
      {/* Left side: Empty for now (Search bar will expand) */}
      <div className="w-4 shrink-0" />


      {/* Middle: Search bar */}
      <div className="flex-1 max-w-2xl mx-auto hidden md:block px-4">
        <div 
          onClick={() => setIsCommandOpen(true)}
          className="relative group cursor-pointer max-w-lg mx-auto"
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
          </div>
          <div className="block w-full pl-10 pr-3 py-2 border-b border-gray-300 leading-5 bg-transparent text-[var(--text-muted)] placeholder-[var(--text-muted)] focus-within:outline-none focus-within:border-[var(--primary)] sm:text-sm transition-all group-hover:bg-slate-50/50">
            Search erpactor
          </div>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd className="inline-flex items-center border border-[var(--border)] rounded px-2 text-xs font-sans font-medium text-[var(--text-muted)]">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right side: Actions, Profile & erpactor Logo */}
      <div className="flex items-center justify-end gap-1 sm:gap-2 shrink-0">
        
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            title="Theme"
          >
            {theme === 'dark' ? <Palette className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
          </button>
        )}
        
        <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors hidden sm:block">
          <Plus className="h-4 w-4" />
        </button>
        <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
          <MessageSquare className="h-4 w-4" />
        </button>
        <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors hidden sm:block">
          <Grid className="h-4 w-4" />
        </button>
        <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors hidden sm:block">
          <ArrowUpDown className="h-4 w-4" />
        </button>
        <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors hidden sm:block">
          <Star className="h-4 w-4" />
        </button>
        <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
          <HelpCircle className="h-4 w-4" />
        </button>

        <div className="flex items-center cursor-pointer p-1 rounded-lg transition-colors ml-1">
          <div className="h-8 w-8 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            P
          </div>
        </div>

        <div className="ml-4 pl-4 border-l border-gray-200 hidden sm:flex items-center">
          <span className="text-[26px] font-medium text-[#1e4471] italic tracking-tight font-serif">
            erpactor
          </span>
        </div>
      </div>
      
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </header>
  );
}


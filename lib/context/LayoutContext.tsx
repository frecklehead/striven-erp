'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LayoutContextType = {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (v: boolean) => void;
  isMobile: boolean;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('sidebarCollapsed');
    if (saved) {
      setSidebarCollapsed(saved === 'true');
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        setSidebarCollapsed(true);
      } else if (window.innerWidth >= 1280) {
        const saved = localStorage.getItem('sidebarCollapsed');
        if (saved) setSidebarCollapsed(saved === 'true');
        else setSidebarCollapsed(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('sidebarCollapsed', String(next));
      return next;
    });
  };

  // To prevent hydration mismatch, we omit mobile checking on first render if strictly needed,
  // but simpler to just return the context and let components handle it carefully.

  return (
    <LayoutContext.Provider value={{ isSidebarCollapsed, toggleSidebar, setSidebarCollapsed, isMobile: mounted ? isMobile : false }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}

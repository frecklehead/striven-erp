'use client';

import React, { createContext, useContext, useState, useCallback, useId } from 'react';
import { cn } from '@/lib/utils/cn';
import { X, CheckCircle, AlertTriangle, Info, XCircle } from 'lucide-react';

export type ToastVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
}

interface ToastContextType {
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    
    // Auto remove after 5s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-[200] flex flex-col gap-2 w-full max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}

function ToastItem({ toast, onClose }: { toast: ToastMessage, onClose: () => void }) {
  const variants = {
    default: "bg-[var(--card-bg)] border-[var(--border)]",
    success: "bg-[var(--success-bg)] border-[var(--success)] text-[var(--success)]",
    warning: "bg-[var(--warning-bg)] border-[var(--warning)] text-[var(--warning)]",
    error: "bg-[var(--danger-bg)] border-[var(--danger)] text-[var(--danger)]",
    info: "bg-[var(--primary-light)] border-[var(--primary)] text-[var(--primary-dark)]",
  };

  const icons = {
    default: null,
    success: <CheckCircle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    error: <XCircle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
  };

  const variant = toast.variant || 'default';

  return (
    <div className={cn(
      "w-full bg-[var(--card-bg)] border rounded-lg shadow-lg p-4 flex gap-3 items-start pointer-events-auto animate-in slide-in-from-right-5 fade-in duration-300",
      variants[variant]
    )}>
      {icons[variant] && <div className="shrink-0 mt-0.5">{icons[variant]}</div>}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[var(--text-primary)]">{toast.title}</h4>
        {toast.description && <p className="text-xs text-[var(--text-secondary)] mt-1">{toast.description}</p>}
      </div>
      <button 
        onClick={onClose}
        className="shrink-0 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

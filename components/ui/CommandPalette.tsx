'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, FileText, Users, Building, Briefcase, Command } from 'lucide-react';
import { Modal } from './Modal';
import { clients } from '@/lib/mock-data/clients';
import { employees } from '@/lib/mock-data/employees';
import { projects } from '@/lib/mock-data/projects';
import { Badge } from './Badge';

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  // Handle keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isOpen ? onClose() : document.dispatchEvent(new CustomEvent('open-command-palette'));
      }
    }
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [isOpen, onClose]);

  // Handle navigation
  const navigate = (path: string) => {
    router.push(path);
    onClose();
    setQuery('');
  };

  // Filter logic (mock)
  const q = query.toLowerCase();
  
  const filteredClients = clients.filter(c => c.name.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q)).slice(0, 3);
  const filteredEmployees = employees.filter(e => e.firstName.toLowerCase().includes(q) || e.lastName.toLowerCase().includes(q)).slice(0, 3);
  const filteredProjects = projects.filter(p => p.name.toLowerCase().includes(q)).slice(0, 3);
  
  const quickLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <Command className="h-4 w-4" /> },
    { name: 'Add New Client', path: '/clients', icon: <Building className="h-4 w-4" /> },
    { name: 'Create Task', path: '/tasks', icon: <FileText className="h-4 w-4" /> },
  ].filter(link => link.name.toLowerCase().includes(q));

  const hasResults = query && (filteredClients.length > 0 || filteredEmployees.length > 0 || filteredProjects.length > 0 || quickLinks.length > 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" hideCloseButton>
      <div className="flex flex-col h-full max-h-[70vh]">
        <div className="flex items-center px-4 py-3 border-b border-[var(--border)] shrink-0">
          <Search className="h-5 w-5 text-[var(--text-muted)] mr-3" />
          <input
            autoFocus
            type="text"
            className="flex-1 bg-transparent outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)]"
            placeholder="Search clients, projects, employees, or commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--page-bg)] text-xs font-mono text-[var(--text-muted)]">
            ESC
          </kbd>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin">
          {!query && (
            <div className="text-center py-10">
              <Command className="h-10 w-10 text-[var(--border)] mx-auto mb-3" />
              <p className="text-[var(--text-secondary)]">Search for anything across your erpactor</p>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-10">
              <p className="text-[var(--text-secondary)]">No results found for "{query}"</p>
            </div>
          )}

          {hasResults && (
            <>
              {quickLinks.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Quick Actions</h4>
                  <div className="space-y-1">
                    {quickLinks.map(link => (
                      <button key={link.name} onClick={() => navigate(link.path)} className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[var(--primary-light)] text-[var(--text-primary)] hover:text-[var(--primary-dark)] transition-colors text-left">
                        <span className="text-[var(--text-muted)]">{link.icon}</span>
                        <span>{link.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredClients.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Clients</h4>
                  <div className="space-y-1">
                    {filteredClients.map(c => (
                      <button key={c.id} onClick={() => navigate(`/clients/${c.id}`)} className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-[var(--page-bg)] transition-colors text-left group">
                        <div className="flex items-center gap-3">
                          <Building className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--primary)]" />
                          <span className="text-[var(--text-primary)] font-medium">{c.name}</span>
                        </div>
                        <Badge variant={c.status === 'Active' ? 'success' : 'default'} size="sm">{c.status}</Badge>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredEmployees.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Employees</h4>
                  <div className="space-y-1">
                    {filteredEmployees.map(e => (
                      <button key={e.id} onClick={() => navigate(`/employees`)} className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-[var(--page-bg)] transition-colors text-left group">
                        <div className="flex items-center gap-3">
                          <Users className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--primary)]" />
                          <span className="text-[var(--text-primary)] font-medium">{e.firstName} {e.lastName}</span>
                          <span className="text-xs text-[var(--text-secondary)]">{e.role}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredProjects.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Projects</h4>
                  <div className="space-y-1">
                    {filteredProjects.map(p => (
                      <button key={p.id} onClick={() => navigate(`/projects`)} className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-[var(--page-bg)] transition-colors text-left group">
                        <div className="flex items-center gap-3">
                          <Briefcase className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--primary)]" />
                          <span className="text-[var(--text-primary)] font-medium">{p.name}</span>
                        </div>
                        <Badge variant="success" size="sm">{p.status}</Badge>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </Modal>
  );
}

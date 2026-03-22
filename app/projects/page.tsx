'use client';

import React, { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { SearchInput } from '@/components/forms/SearchInput';
import { Plus, Filter, LayoutGrid, List } from 'lucide-react';
import { projects } from '@/lib/mock-data/projects';
import { clients } from '@/lib/mock-data/clients';

export default function ProjectsPage() {
  const [view, setView] = useState<'table' | 'grid'>('grid');

  const tabs = [
    {
      id: 'active',
      label: 'Active Projects',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SearchInput placeholder="Search projects..." className="w-full sm:w-64" />
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-[var(--card-bg)] border border-[var(--border)] rounded-md overflow-hidden">
                <button 
                  onClick={() => setView('table')}
                  className={`p-2 focus:outline-none ${view === 'table' ? 'bg-[var(--primary-light)] text-[var(--primary-dark)]' : 'text-[var(--text-muted)] hover:bg-[var(--page-bg)]'}`}
                >
                  <List className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setView('grid')}
                  className={`p-2 focus:outline-none ${view === 'grid' ? 'bg-[var(--primary-light)] text-[var(--primary-dark)]' : 'text-[var(--text-muted)] hover:bg-[var(--page-bg)]'}`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
              <Button leftIcon={<Plus className="h-4 w-4" />}>New Project</Button>
            </div>
          </div>

          {view === 'table' ? (
            <DataTable
              data={projects.filter(p => p.status === 'Active')}
              keyField="id"
              selectable
              columns={[
                { key: 'name', header: 'Project Name', cell: row => <span className="font-medium text-[var(--primary)]">{row.name}</span>, sortable: true },
                { key: 'clientId', header: 'Client', cell: row => clients.find(c => c.id === row.clientId)?.name },
                { 
                  key: 'progress', 
                  header: 'Progress',
                  cell: row => <ProgressBar progress={row.progress} className="w-32" />
                },
                { 
                  key: 'status', 
                  header: 'Status',
                  cell: row => <Badge variant="success" size="sm">{row.status}</Badge>
                },
                { key: 'endDate', header: 'Deadline', sortable: true }
              ]}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.filter(p => p.status === 'Active').map(proj => (
                <div key={proj.id} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 shadow-sm hover:border-[var(--primary)] transition-colors cursor-pointer flex flex-col h-full">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-[var(--text-primary)] leading-tight">{proj.name}</h3>
                    <Badge variant="success" size="sm">{proj.status}</Badge>
                  </div>
                  <p className="text-sm text-[var(--primary)] font-medium mb-4">{clients.find(c => c.id === proj.clientId)?.name}</p>
                  
                  <div className="mt-auto space-y-4">
                    <p className="text-sm text-[var(--text-secondary)] line-clamp-2">{proj.description}</p>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-medium">
                        <span className="text-[var(--text-secondary)]">Progress</span>
                        <span className="text-[var(--text-primary)]">{proj.progress}%</span>
                      </div>
                      <ProgressBar progress={proj.progress} size="sm" />
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
                      <span>Due: {new Date(proj.endDate).toLocaleDateString()}</span>
                      <span className="font-medium text-[var(--text-primary)]">${proj.budget.toLocaleString()} Budget</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    },
    { id: 'planning', label: 'Planning', content: <div className="p-4 text-center text-slate-500">Planning Projects</div> },
    { id: 'completed', label: 'Completed', content: <div className="p-4 text-center text-slate-500">Completed Projects</div> },
    { id: 'on-hold', label: 'On Hold', content: <div className="p-4 text-center text-slate-500">On Hold Projects</div> },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Projects</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

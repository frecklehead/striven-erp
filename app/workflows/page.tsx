'use client';

import React from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/forms/SearchInput';
import { Plus, Filter, Play, Settings } from 'lucide-react';
import { workflows } from '@/lib/mock-data/workflows';

export default function WorkflowsPage() {
  const tabs = [
    {
      id: 'active',
      label: 'Active Workflows',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SearchInput placeholder="Search workflows..." className="w-full sm:w-64" />
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
            </div>
            <div className="flex items-center gap-3">
              <Button leftIcon={<Plus className="h-4 w-4" />}>Create Workflow</Button>
            </div>
          </div>

          <DataTable
            data={workflows.filter(w => w.status === 'Active')}
            keyField="id"
            selectable
            columns={[
              { key: 'name', header: 'Workflow Name', cell: row => <span className="font-medium text-[var(--primary)]">{row.name}</span>, sortable: true },
              { key: 'triggerType', header: 'Trigger', sortable: true },
              { key: 'targetEntity', header: 'Target', cell: row => <Badge variant="info" size="sm" className="bg-blue-50 text-blue-700">{row.targetEntity}</Badge> },
              { key: 'stepsCount', header: 'Steps', cell: row => <span className="text-sm font-medium">{row.stepsCount} Steps</span> },
              { key: 'lastRun', header: 'Last Run' },
              { 
                key: 'actions', 
                header: '',
                cell: row => (
                  <div className="flex items-center justify-end gap-2">
                    {row.triggerType === 'Manual' && (
                      <Button variant="ghost" size="sm" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" leftIcon={<Play className="h-4 w-4" />}>Run</Button>
                    )}
                    <Button variant="ghost" size="icon" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><Settings className="h-4 w-4" /></Button>
                  </div>
                )
              }
            ]}
          />
        </div>
      )
    },
    {
      id: 'inactive',
      label: 'Inactive',
      content: (
        <div className="space-y-4">
          <DataTable
            data={workflows.filter(w => w.status === 'Inactive')}
            keyField="id"
            selectable
            columns={[
              { key: 'name', header: 'Workflow Name', cell: row => <span className="font-medium text-[var(--text-primary)]">{row.name}</span>, sortable: true },
              { key: 'triggerType', header: 'Trigger', sortable: true },
              { key: 'targetEntity', header: 'Target' },
              { key: 'lastRun', header: 'Last Run' }
            ]}
          />
        </div>
      )
    },
    { id: 'templates', label: 'Templates', content: <div className="p-4 text-center text-slate-500">Workflow Templates Library</div> },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Workflows & Automation</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

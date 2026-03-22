'use client';

import React, { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/forms/SearchInput';
import { Plus, Filter } from 'lucide-react';
import { tasks } from '@/lib/mock-data/tasks';
import { projects } from '@/lib/mock-data/projects';
import { employees } from '@/lib/mock-data/employees';

export default function TasksPage() {
  const tabs = [
    {
      id: 'list',
      label: 'List View',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SearchInput placeholder="Search tasks..." className="w-full sm:w-64" />
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
            </div>
            <div className="flex items-center gap-3">
              <Button leftIcon={<Plus className="h-4 w-4" />}>Create Task</Button>
            </div>
          </div>

          <div className="bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-sm border border-[var(--border)]">
            <DataTable
              data={tasks}
              keyField="id"
              selectable
              columns={[
                { 
                  key: 'title', 
                  header: 'Task Name', 
                  sortable: true,
                  cell: row => <span className="font-medium text-[var(--text-primary)] hover:text-[var(--primary)] cursor-pointer">{row.title}</span> 
                },
                { 
                  key: 'projectId', 
                  header: 'Project',
                  cell: row => <span className="text-sm text-[var(--text-secondary)]">{projects.find(p => p.id === row.projectId)?.name || 'N/A'}</span>
                },
                { 
                  key: 'assigneeId', 
                  header: 'Assignee',
                  cell: row => {
                    const emp = employees.find(e => e.id === row.assigneeId);
                    return emp ? <span className="text-sm">{emp.firstName} {emp.lastName}</span> : <span className="text-sm text-slate-400">Unassigned</span>;
                  }
                },
                { 
                  key: 'priority', 
                  header: 'Priority',
                  sortable: true,
                  cell: row => (
                    <Badge variant={row.priority === 'High' ? 'danger' : row.priority === 'Medium' ? 'warning' : 'default'} size="sm">
                      {row.priority}
                    </Badge>
                  )
                },
                { 
                  key: 'status', 
                  header: 'Status',
                  sortable: true,
                  cell: row => (
                    <Badge variant={row.status === 'Completed' ? 'success' : row.status === 'In Progress' ? 'info' : 'default'} size="sm">
                      {row.status}
                    </Badge>
                  )
                },
                { key: 'dueDate', header: 'Due Date', sortable: true, cell: row => <span className="text-sm text-[var(--text-secondary)]">{row.dueDate}</span> }
              ]}
            />
          </div>
        </div>
      )
    },
    { 
      id: 'board', 
      label: 'Kanban Board', 
      content: (
        <div className="p-10 text-center border-2 border-dashed border-[var(--border)] rounded-xl mt-4">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Kanban Board</h2>
          <p className="text-[var(--text-secondary)]">Drag and drop functionality for tasks coming soon.</p>
        </div>
      ) 
    },
    { id: 'calendar', label: 'Calendar', content: <div className="p-4 text-center text-slate-500">Calendar view coming soon.</div> },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Tasks</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

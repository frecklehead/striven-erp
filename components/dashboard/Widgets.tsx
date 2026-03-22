'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { StatCard } from '@/components/ui/StatCard';
import { DataTable } from '@/components/ui/DataTable';
import { AreaChart } from '@/components/charts/AreaChart';
import { BarChart } from '@/components/charts/BarChart';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Avatar } from '@/components/ui/Avatar';
import { MoreVertical, UserPlus, CalendarPlus, Briefcase, FileText, Activity } from 'lucide-react';
import { clients } from '@/lib/mock-data/clients';
import { employees } from '@/lib/mock-data/employees';
import { projects } from '@/lib/mock-data/projects';
import { invoices } from '@/lib/mock-data/invoices';
import { tasks } from '@/lib/mock-data/tasks';
import { appointments } from '@/lib/mock-data/appointments';
import { revenueData, expenseData } from '@/lib/mock-data/reports';

const WidgetCard = ({ title, children, actionIcon }: { title: string, children: React.ReactNode, actionIcon?: boolean }) => (
  <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl shadow-sm flex flex-col h-full overflow-hidden">
    <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5 bg-[var(--page-bg)] shrink-0">
      <h3 className="font-semibold text-[var(--text-primary)]">{title}</h3>
      {actionIcon && (
        <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
          <MoreVertical className="h-4 w-4" />
        </button>
      )}
    </div>
    <div className="p-5 flex-1 relative overflow-auto hide-scrollbar">
      {children}
    </div>
  </div>
);

export function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {/* 1. Add Clients CTA */}
      <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-xl text-white p-6 shadow-sm flex flex-col items-start justify-center">
        <div className="bg-white/20 p-3 rounded-xl mb-4">
          <UserPlus className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">Grow your business</h3>
        <p className="text-blue-100 text-sm mb-5">Import clients or add them manually to start tracking opportunities and revenue.</p>
        <button className="bg-white text-[var(--primary-dark)] px-4 py-2 font-semibold text-sm rounded-md shadow-sm hover:bg-blue-50 transition-colors">
          Add New Client
        </button>
      </div>

      {/* 2. Revenue Chart */}
      <div className="xl:col-span-2">
        <WidgetCard title="Revenue Trend" actionIcon>
          <AreaChart
            data={revenueData}
            categories={['Revenue']}
            index="name"
            valueFormatter={(v) => `$${v.toLocaleString()}`}
            height={240}
          />
        </WidgetCard>
      </div>

      {/* 3. Recent Clients */}
      <WidgetCard title="Recent Clients" actionIcon>
        <DataTable
          data={clients.slice(0, 5)}
          keyField="id"
          columns={[
            { key: 'name', header: 'Client' },
            { key: 'industry', header: 'Industry', className: 'hidden sm:table-cell' },
            { 
              key: 'status', 
              header: 'Status',
              cell: (row) => <Badge variant={row.status === 'Active' ? 'success' : 'default'}>{row.status}</Badge>
            }
          ]}
        />
      </WidgetCard>

      {/* 4. Expense Chart */}
      <WidgetCard title="Expenses by Category" actionIcon>
        <BarChart
          data={expenseData}
          categories={['value']}
          index="name"
          colors={['var(--accent)']}
          valueFormatter={(v) => `$${v.toLocaleString()}`}
          height={200}
        />
      </WidgetCard>

      {/* 5. My Tasks */}
      <WidgetCard title="My Tasks" actionIcon>
        <div className="space-y-4">
          {tasks.slice(0, 5).map(t => (
            <div key={t.id} className="flex items-start gap-3 border-b border-[var(--border)] last:border-0 pb-3 last:pb-0">
              <input type="checkbox" className="mt-1 rounded text-[var(--primary)] border-[var(--border)]" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--text-primary)] truncate">{t.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={t.priority === 'High' ? 'danger' : t.priority === 'Medium' ? 'warning' : 'default'} size="sm">
                    {t.priority}
                  </Badge>
                  <span className="text-xs text-[var(--text-muted)] truncate">Due: {t.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WidgetCard>

      {/* 6. Active Projects */}
      <div className="xl:col-span-2">
        <WidgetCard title="Active Projects" actionIcon>
          <DataTable
            data={projects.slice(0, 4)}
            keyField="id"
            columns={[
              { key: 'name', header: 'Project Name' },
              { key: 'clientId', header: 'Client', cell: (row) => clients.find(c => c.id === row.clientId)?.name || 'N/A' },
              { key: 'progress', header: 'Progress', cell: (row) => <ProgressBar progress={row.progress} className="w-24 sm:w-32" /> },
              { key: 'endDate', header: 'Deadline', className: 'text-[var(--text-secondary)] hidden sm:table-cell' },
            ]}
          />
        </WidgetCard>
      </div>

      {/* 7. Upcoming Appointments */}
      <WidgetCard title="Upcoming Appointments" actionIcon>
        <div className="space-y-4">
          {appointments.slice(0, 4).map(apt => (
            <div key={apt.id} className="flex gap-4 items-start">
              <div className="flex flex-col items-center justify-center bg-[var(--page-bg)] border border-[var(--border)] rounded-md min-w-[48px] h-12">
                <span className="text-xs font-medium text-[var(--danger)] uppercase">{new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                <span className="text-lg font-bold text-[var(--text-primary)] leading-none">{new Date(apt.date).getDate()}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{apt.title}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">{apt.startTime} - {apt.endTime}</p>
              </div>
            </div>
          ))}
        </div>
      </WidgetCard>

    </div>
  );
}

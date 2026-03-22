'use client';

import React from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { StatCard } from '@/components/ui/StatCard';
import { AreaChart } from '@/components/charts/AreaChart';
import { BarChart } from '@/components/charts/BarChart';
import { DonutChart } from '@/components/charts/DonutChart';
import { Download, Share2, Calendar } from 'lucide-react';
import { revenueData, expenseData, projectStatusData, pipelineData } from '@/lib/mock-data/reports';

export default function ReportsPage() {
  const tabs = [
    {
      id: 'financial',
      label: 'Financial Reports',
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Financial Performance Review</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" leftIcon={<Calendar className="h-4 w-4" />}>This Year</Button>
              <Button variant="outline" size="icon"><Share2 className="h-4 w-4" /></Button>
              <Button size="icon"><Download className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-[var(--text-primary)] mb-6">Revenue Growth (Month over Month)</h3>
            <AreaChart
              data={revenueData}
              categories={['Revenue']}
              index="name"
              height={350}
              valueFormatter={(v) => `$${v.toLocaleString()}`}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[var(--text-primary)] mb-6">Expense Distribution</h3>
              <DonutChart
                data={expenseData}
                category="value"
                index="name"
                height={300}
                valueFormatter={(v) => `$${v.toLocaleString()}`}
              />
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Detailed P&L Generation</h3>
              <p className="text-[var(--text-secondary)] max-w-sm mb-6">Generate comprehensive Profit and Loss statements broken down by department or location.</p>
              <Button>Generate Report</Button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sales',
      label: 'Sales & CRM',
      content: (
        <div className="space-y-6">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-[var(--text-primary)] mb-6">Sales Pipeline Value</h3>
            <BarChart
              data={pipelineData}
              categories={['Value']}
              index="stage"
              colors={['var(--success)']}
              height={300}
              valueFormatter={(v) => `$${v.toLocaleString()}`}
            />
          </div>
        </div>
      )
    },
    {
      id: 'operations',
      label: 'Projects & Ops',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-[var(--text-primary)] mb-6">Active Projects by Status</h3>
            <DonutChart
              data={projectStatusData}
              category="value"
              index="name"
              height={300}
            />
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Resource Utilization</h3>
            <p className="text-[var(--text-secondary)] max-w-sm mb-6">Analyze employee time entries against billable project hours.</p>
            <Button>View Full Report</Button>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Reports Center</h1>
      </div>
      
      <Tabs tabs={tabs} variant="pills" />
    </div>
  );
}

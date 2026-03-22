'use client';

import React from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/ui/StatCard';
import { DonutChart } from '@/components/charts/DonutChart';
import { accounts } from '@/lib/mock-data/accounts';
import { invoices } from '@/lib/mock-data/invoices';
import { bills } from '@/lib/mock-data/bills';
import { clients } from '@/lib/mock-data/clients';
import { suppliers } from '@/lib/mock-data/suppliers';
import { Download, FileText, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function AccountingPage() {
  const accountBalances = [
    { name: 'Operating Cash', value: 450000 },
    { name: 'Accounts Receivable', value: 125000 },
    { name: 'Inventory', value: 85000 },
    { name: 'Other Assets', value: 35000 },
  ];

  const tabs = [
    {
      id: 'dashboard',
      label: 'Financial Dashboard',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard label="Total Cash" value="$450,000" icon={<DollarSign />} trend={5.2} />
            <StatCard label="Accounts Rec." value="$125,000" icon={<TrendingUp />} trend={12.5} />
            <StatCard label="Accounts Pay." value="$42,000" icon={<TrendingDown />} trend={-2.4} />
            <StatCard label="YTD Net Income" value="$380,000" icon={<FileText />} trend={18.0} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 shadow-sm xl:col-span-1">
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-4">Cash Position</h3>
              <DonutChart
                data={accountBalances}
                category="value"
                index="name"
                valueFormatter={(v) => `$${v.toLocaleString()}`}
                height={260}
              />
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 shadow-sm xl:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-[var(--text-primary)]">Income Statement Summary</h3>
                <Button variant="outline" size="sm" leftIcon={<Download className="h-4 w-4" />}>Export P&L</Button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between font-medium text-[var(--text-primary)] border-b border-[var(--border)] pb-2">
                    <span>Revenue</span>
                    <span>$1,170,000</span>
                  </div>
                  <div className="pl-4 mt-2 space-y-1 text-sm text-[var(--text-secondary)]">
                    <div className="flex justify-between"><span>Service Revenue</span><span>$850,000</span></div>
                    <div className="flex justify-between"><span>Product Sales</span><span>$320,000</span></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[var(--text-primary)] border-b border-[var(--border)] pb-2 text-[var(--danger)]">
                    <span>Expenses</span>
                    <span>-$790,000</span>
                  </div>
                  <div className="pl-4 mt-2 space-y-1 text-sm text-[var(--text-secondary)]">
                    <div className="flex justify-between"><span>COGS</span><span>$180,000</span></div>
                    <div className="flex justify-between"><span>Payroll Expense</span><span>$450,000</span></div>
                    <div className="flex justify-between"><span>Operating Expenses</span><span>$160,000</span></div>
                  </div>
                </div>

                <div className="flex justify-between font-bold text-lg text-[var(--text-primary)] pt-4 border-t-2 border-[var(--border)]">
                  <span>Net Income</span>
                  <span className="text-[var(--success)]">$380,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'invoices',
      label: 'A/R (Invoices)',
      content: (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button>Create Invoice</Button>
          </div>
          <DataTable
            data={invoices}
            keyField="id"
            selectable
            columns={[
              { key: 'invoiceNumber', header: 'Invoice #', cell: row => <span className="font-semibold text-[var(--primary)]">{row.invoiceNumber}</span>, sortable: true },
              { key: 'clientId', header: 'Client', cell: row => clients.find(c => c.id === row.clientId)?.name },
              { key: 'issueDate', header: 'Date', sortable: true },
              { key: 'dueDate', header: 'Due Date', sortable: true },
              { key: 'amount', header: 'Amount', sortable: true, cell: row => `$${row.amount.toLocaleString()}` },
              { key: 'status', header: 'Status', sortable: true, cell: row => <Badge variant={row.status === 'Paid' ? 'success' : row.status === 'Overdue' ? 'danger' : row.status === 'Partial' ? 'warning' : 'default'}>{row.status}</Badge> }
            ]}
          />
        </div>
      )
    },
    {
      id: 'bills',
      label: 'A/P (Bills)',
      content: (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button>Enter Bill</Button>
          </div>
          <DataTable
            data={bills}
            keyField="id"
            selectable
            columns={[
              { key: 'billNumber', header: 'Bill #', cell: row => <span className="font-semibold text-[var(--primary)]">{row.billNumber}</span>, sortable: true },
              { key: 'supplierId', header: 'Supplier', cell: row => suppliers.find(s => s.id === row.supplierId)?.name },
              { key: 'date', header: 'Date', sortable: true },
              { key: 'dueDate', header: 'Due Date', sortable: true },
              { key: 'amount', header: 'Amount', sortable: true, cell: row => `$${row.amount.toLocaleString()}` },
              { key: 'status', header: 'Status', sortable: true, cell: row => <Badge variant={row.status === 'Paid' ? 'success' : row.status === 'Overdue' ? 'danger' : row.status === 'Partial' ? 'warning' : 'default'}>{row.status}</Badge> }
            ]}
          />
        </div>
      )
    },
    {
      id: 'coa',
      label: 'Chart of Accounts',
      content: (
        <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] overflow-hidden">
          <DataTable
            data={accounts}
            keyField="id"
            columns={[
              { key: 'code', header: 'Code', sortable: true, cell: row => <span className="font-medium text-[var(--text-secondary)]">{row.code}</span> },
              { key: 'name', header: 'Account Name', sortable: true, cell: row => <span className="font-medium text-[var(--text-primary)]">{row.name}</span> },
              { key: 'type', header: 'Type', sortable: true, cell: row => <Badge variant={row.type === 'Asset' || row.type === 'Equity' || row.type === 'Revenue' ? 'success' : row.type === 'Liability' || row.type === 'Expense' ? 'warning' : 'default'} size="sm">{row.type}</Badge> },
              { key: 'subType', header: 'Sub-Type' },
              { key: 'balance', header: 'Balance', cell: row => <span className="font-medium">${row.balance.toLocaleString()}</span> }
            ]}
          />
        </div>
      )
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Accounting</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

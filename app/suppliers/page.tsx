'use client';

import React from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/forms/SearchInput';
import { Plus, Filter } from 'lucide-react';
import { suppliers } from '@/lib/mock-data/suppliers';

export default function SuppliersPage() {
  const tabs = [
    {
      id: 'all',
      label: 'All Suppliers',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SearchInput placeholder="Search suppliers..." className="w-full sm:w-64" />
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
            </div>
            <div className="flex items-center gap-3">
              <Button leftIcon={<Plus className="h-4 w-4" />}>Add Supplier</Button>
            </div>
          </div>

          <DataTable
            data={suppliers}
            keyField="id"
            selectable
            columns={[
              { key: 'name', header: 'Supplier Name', cell: row => <span className="font-semibold text-[var(--primary)]">{row.name}</span>, sortable: true },
              { key: 'category', header: 'Category', sortable: true },
              { key: 'contactName', header: 'Contact' },
              { key: 'email', header: 'Email' },
              { key: 'phone', header: 'Phone' },
              { key: 'paymentTerms', header: 'Terms' },
              { 
                key: 'status', 
                header: 'Status',
                sortable: true,
                cell: row => <Badge variant={row.status === 'Active' ? 'success' : 'default'} size="sm">{row.status}</Badge>
              }
            ]}
          />
        </div>
      )
    },
    { id: 'purchase-orders', label: 'Purchase Orders', content: <div className="p-4 text-center text-slate-500">Purchase Orders view</div> },
    { id: 'bills', label: 'Bills to Pay', content: <div className="p-4 text-center text-slate-500">Accounts Payable dashboard</div> },
    { id: 'expenses', label: 'Expenses', content: <div className="p-4 text-center text-slate-500">Employee expense reports</div> },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Suppliers</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

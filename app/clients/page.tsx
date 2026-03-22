'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/forms/SearchInput';
import { Plus, Filter } from 'lucide-react';
import { clients } from '@/lib/mock-data/clients';

export default function ClientsPage() {
  const router = useRouter();

  const tabs = [
    {
      id: 'all',
      label: 'All Clients',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SearchInput placeholder="Search clients..." className="w-full sm:w-64" />
              <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
            </div>
            <div className="flex items-center gap-3">
              <Button leftIcon={<Plus className="h-4 w-4" />}>Add Client</Button>
            </div>
          </div>

          <DataTable
            data={clients}
            keyField="id"
            selectable
            onRowClick={(row) => router.push(`/clients/${row.id}`)}
            columns={[
              { 
                key: 'name', 
                header: 'Company Name', 
                sortable: true,
                cell: row => (
                  <div className="flex items-center gap-3">
                    <div className="flex shrink-0 items-center justify-center font-bold text-white h-8 w-8 rounded-md text-xs" style={{ backgroundColor: row.logoColor }}>
                      {row.logoInitials}
                    </div>
                    <span className="font-semibold text-[var(--primary)]">{row.name}</span>
                  </div>
                )
              },
              { key: 'industry', header: 'Industry', sortable: true },
              { key: 'city', header: 'Location', cell: row => `${row.address.city}, ${row.address.state}` },
              { key: 'accountManager', header: 'Primary Contact' },
              { key: 'phone', header: 'Phone' },
              { 
                key: 'status', 
                header: 'Status',
                sortable: true,
                cell: row => <Badge variant={row.status === 'Active' ? 'success' : row.status === 'Prospect' ? 'info' : 'default'} size="sm">{row.status}</Badge>
              },
              {
                key: 'balance',
                header: 'Balance',
                cell: row => <span className={row.outstandingBalance > 0 ? "text-[var(--danger)] font-medium" : "text-[var(--text-muted)]"}>${row.outstandingBalance.toLocaleString()}</span>
              }
            ]}
          />
        </div>
      )
    },
    { id: 'contacts', label: 'Contacts', content: <div className="p-4 text-center text-slate-500">Global Contacts view coming soon</div> },
    { id: 'opportunities', label: 'Opportunities', content: <div className="p-4 text-center text-slate-500">Sales pipeline</div> },
    { id: 'sales-orders', label: 'Sales Orders', content: <div className="p-4 text-center text-slate-500">Orders table</div> },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Clients</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/ui/StatCard';
import { DataTable } from '@/components/ui/DataTable';
import { AreaChart } from '@/components/charts/AreaChart';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Mail, Phone, ExternalLink, MapPin, Building, ChevronLeft, MoreHorizontal } from 'lucide-react';
import { getClientById } from '@/lib/mock-data/clients';
import { revenueData } from '@/lib/mock-data/reports';
import { getContactsByCompanyId } from '@/lib/mock-data/contacts';
import { getInvoicesByClientId } from '@/lib/mock-data/invoices';

export default function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const client = getClientById(resolvedParams.id);

  if (!client) {
    return <div className="p-10 text-center">Client not found.</div>;
  }

  const clientContacts = getContactsByCompanyId(client.id);
  const clientInvoices = getInvoicesByClientId(client.id);

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <StatCard label="Total Revenue" value={`$${client.totalRevenue.toLocaleString()}`} />
            <StatCard label="Open Invoice Balance" value={`$${client.outstandingBalance.toLocaleString()}`} trend={client.outstandingBalance > 0 ? 12 : 0} />
            <StatCard label="Active Projects" value="2" />
            <StatCard label="Last Activity" value={client.lastActivity} />
          </div>

          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-4 text-[var(--text-primary)]">Revenue History (12 mo)</h3>
            <AreaChart
              data={revenueData.map(d => ({ ...d, Revenue: d.Revenue * 0.4 }))} // scale down mock data
              categories={['Revenue']}
              index="name"
              height={300}
              valueFormatter={(v) => `$${v.toLocaleString()}`}
            />
          </div>
        </div>
      )
    },
    {
      id: 'contacts',
      label: 'Contacts',
      content: (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button>Add Contact</Button>
          </div>
          <DataTable
            data={clientContacts}
            keyField="id"
            columns={[
              { key: 'name', header: 'Name', cell: row => <span className="font-medium text-[var(--primary)]">{row.firstName} {row.lastName}</span> },
              { key: 'title', header: 'Title' },
              { key: 'email', header: 'Email' },
              { key: 'phone', header: 'Phone' },
              { key: 'type', header: 'Type', cell: row => <Badge>{row.type}</Badge> }
            ]}
          />
        </div>
      )
    },
    {
      id: 'invoices',
      label: 'Invoices',
      content: (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button>Create Invoice</Button>
          </div>
          <DataTable
            data={clientInvoices}
            keyField="id"
            columns={[
              { key: 'invoiceNumber', header: 'Invoice #', cell: row => <span className="font-medium text-[var(--primary)]">{row.invoiceNumber}</span> },
              { key: 'issueDate', header: 'Date' },
              { key: 'dueDate', header: 'Due Date' },
              { key: 'amount', header: 'Amount', cell: row => `$${row.amount.toLocaleString()}` },
              { key: 'status', header: 'Status', cell: row => <Badge variant={row.status === 'Paid' ? 'success' : row.status === 'Overdue' ? 'danger' : row.status === 'Partial' ? 'warning' : 'default'}>{row.status}</Badge> }
            ]}
          />
        </div>
      )
    },
    { id: 'opportunities', label: 'Opportunities', content: <div className="p-4 text-center">Opportunities pipeline.</div> },
    { id: 'projects', label: 'Projects', content: <div className="p-4 text-center">Active Projects.</div> },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb 
        items={[
          { label: 'Clients', href: '/clients' },
          { label: client.name }
        ]} 
      />

      <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
          
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-xl text-white font-bold text-2xl shadow-sm shrink-0" style={{ backgroundColor: client.logoColor }}>
              {client.logoInitials}
            </div>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">{client.name}</h1>
                <Badge variant={client.status === 'Active' ? 'success' : client.status === 'Prospect' ? 'info' : 'default'}>{client.status}</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-1.5"><Building className="h-4 w-4" /> {client.industry}</div>
                <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {client.address.city}, {client.address.state}</div>
                <div className="flex items-center gap-1.5"><ExternalLink className="h-4 w-4" /> <a href={client.website} target="_blank" rel="noreferrer" className="hover:text-[var(--primary)]">{client.website.replace('https://', '')}</a></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" leftIcon={<Mail className="h-4 w-4" />} className="flex-1 sm:flex-none">Email</Button>
            <Button variant="outline" leftIcon={<Phone className="h-4 w-4" />} className="flex-1 sm:flex-none">Call</Button>
            <Button variant="outline" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
          </div>

        </div>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

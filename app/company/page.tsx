'use client';

import React from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { StatCard } from '@/components/ui/StatCard';
import { DataTable } from '@/components/ui/DataTable';
import { TextInput } from '@/components/forms/TextInput';
import { SelectInput } from '@/components/forms/SelectInput';
import { FileUpload } from '@/components/forms/FileUpload';
import { MapPin, Users, Building, FileText, CheckCircle2, Edit3, Plus, Search, File } from 'lucide-react';
import { contacts } from '@/lib/mock-data/contacts';

export default function CompanyPage() {
  const companyContacts = contacts.slice(0, 8); // Fake data for now

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Info Card */}
            <div className="flex-1 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar initials="AC" size="xl" className="rounded-xl bg-blue-100 text-blue-700" />
                  <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">Acme Corporation</h2>
                    <p className="text-sm text-[var(--text-secondary)]">Technology & Manufacturing</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" leftIcon={<Edit3 className="h-4 w-4" />}>Edit</Button>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Website</span>
                  <a href="#" className="text-[var(--primary)] font-medium hover:underline">acmecorp.com</a>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Phone</span>
                  <span className="text-[var(--text-primary)] font-medium">+1 (555) 123-4567</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Primary Address</span>
                  <span className="text-[var(--text-primary)] font-medium">123 Tech Blvd, Suite 400<br/>San Francisco, CA 94105</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Tax ID</span>
                  <span className="text-[var(--text-primary)] font-medium">XX-XXXX892</span>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="md:w-1/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <StatCard label="Total Employees" value="143" icon={<Users />} />
              <StatCard label="Locations" value="4" icon={<MapPin />} />
              <StatCard label="Open Tasks" value="12" icon={<CheckCircle2 />} />
              <StatCard label="Documents" value="89" icon={<FileText />} />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contacts',
      label: 'Contacts',
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-72">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--text-muted)]" />
                <input type="text" placeholder="Search contacts..." className="w-full pl-9 pr-4 py-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
              </div>
            </div>
            <Button leftIcon={<Plus className="h-4 w-4" />}>Add Contact</Button>
          </div>
          <DataTable
            data={companyContacts}
            keyField="id"
            selectable
            columns={[
              { key: 'firstName', header: 'First Name', sortable: true },
              { key: 'lastName', header: 'Last Name', sortable: true },
              { key: 'title', header: 'Title' },
              { key: 'email', header: 'Email' },
              { key: 'phone', header: 'Phone' },
              { key: 'location', header: 'Location' },
              { key: 'type', header: 'Type' }
            ]}
          />
        </div>
      )
    },
    {
      id: 'locations',
      label: 'Locations',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-[var(--primary-light)] text-[var(--primary-dark)] text-xs font-bold px-2 py-1 rounded">Primary HQ</span>
            </div>
            <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 border border-blue-100">
              <Building className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">San Francisco Office</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">123 Tech Blvd, Suite 400<br/>San Francisco, CA 94105</p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          {/* Add more cards visually similarly */}
        </div>
      )
    },
    {
      id: 'documents',
      label: 'Documents',
      content: (
        <div className="space-y-6">
          <div className="flex justify-end">
            <Button leftIcon={<Plus className="h-4 w-4" />}>Upload Document</Button>
          </div>
          <DataTable
            data={[
              { id: '1', name: 'W9-Form-2024.pdf', type: 'PDF', category: 'Tax', user: 'P. Admin', date: '2024-01-10', size: '2.4 MB' },
              { id: '2', name: 'Company_Logo_HighRes.png', type: 'Image', category: 'Brand', user: 'M. Chen', date: '2023-11-05', size: '4.1 MB' },
              { id: '3', name: 'Employee_Handbook.docx', type: 'Word', category: 'HR', user: 'S. Johnson', date: '2024-02-20', size: '1.2 MB' },
            ]}
            keyField="id"
            columns={[
              { key: 'name', header: 'Name', cell: (row) => (
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-slate-400" />
                  <span className="font-medium text-[var(--primary)]">{row.name}</span>
                </div>
              ) },
              { key: 'category', header: 'Category' },
              { key: 'user', header: 'Uploaded By' },
              { key: 'date', header: 'Date' },
              { key: 'size', header: 'Size' },
            ]}
          />
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div className="max-w-2xl bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 border-b border-[var(--border)] pb-3">Company Preferences</h3>
          <form className="space-y-5">
            <TextInput label="Company Name" defaultValue="Acme Corporation" />
            <SelectInput 
              label="Industry" 
              options={[
                { value: 'tech', label: 'Technology' },
                { value: 'mfg', label: 'Manufacturing' },
                { value: 'retail', label: 'Retail' }
              ]}
              defaultValue="mfg"
            />
            <div className="grid grid-cols-2 gap-4">
              <SelectInput 
                label="Fiscal Year Start" 
                options={[{ value: 'jan', label: 'January' }, { value: 'apr', label: 'April' }, { value: 'jul', label: 'July' }]}
                defaultValue="jan"
              />
              <SelectInput 
                label="Currency" 
                options={[{ value: 'usd', label: 'USD ($)' }, { value: 'eur', label: 'EUR (€)' }, { value: 'gbp', label: 'GBP (£)' }]}
                defaultValue="usd"
              />
            </div>
            <div className="pt-4 flex justify-end">
              <Button type="button">Save Changes</Button>
            </div>
          </form>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Company Profile</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}

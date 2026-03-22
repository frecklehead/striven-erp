'use client';

import React, { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { SidePanel } from '@/components/ui/SidePanel';
import { SearchInput } from '@/components/forms/SearchInput';
import { Plus, Filter, LayoutGrid, List } from 'lucide-react';
import { employees } from '@/lib/mock-data/employees';
import { departments } from '@/lib/mock-data/departments';
import { Employee } from '@/lib/types';

export default function EmployeesPage() {
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);
  const [view, setView] = useState<'table' | 'grid'>('table');

  const tabs = [
    {
      id: 'all',
      label: 'All Employees',
      content: (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SearchInput placeholder="Search employees..." className="w-full sm:w-64" />
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
              <Button leftIcon={<Plus className="h-4 w-4" />}>Add Employee</Button>
            </div>
          </div>

          {view === 'table' ? (
            <DataTable
              data={employees}
              keyField="id"
              selectable
              onRowClick={(row) => setSelectedEmp(row)}
              columns={[
                { key: 'firstName', header: 'Name', cell: row => <span className="font-medium text-[var(--primary)]">{row.firstName} {row.lastName}</span>, sortable: true },
                { key: 'role', header: 'Position', sortable: true },
                { key: 'departmentId', header: 'Department', cell: row => departments.find(d => d.id === row.departmentId)?.name },
                { 
                  key: 'status', 
                  header: 'Status',
                  cell: row => <Badge variant={row.status === 'Active' ? 'success' : row.status === 'On Leave' ? 'warning' : 'default'}>{row.status}</Badge>
                },
                { key: 'hireDate', header: 'Start Date', sortable: true }
              ]}
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map(emp => (
                <div key={emp.id} onClick={() => setSelectedEmp(emp)} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-5 shadow-sm cursor-pointer hover:border-[var(--primary)] transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                      {emp.firstName[0]}{emp.lastName[0]}
                    </div>
                    <Badge variant={emp.status === 'Active' ? 'success' : emp.status === 'On Leave' ? 'warning' : 'default'} size="sm">{emp.status}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg">{emp.firstName} {emp.lastName}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{emp.role}</p>
                  <p className="text-xs text-[var(--text-muted)]">{departments.find(d => d.id === emp.departmentId)?.name} Dept.</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    },
    { id: 'candidates', label: 'Candidates', content: <div className="p-4 text-center text-slate-500">Candidates Board</div> },
    { id: 'departments', label: 'Departments', content: <div className="p-4 text-center text-slate-500">Departments Table</div> },
    { id: 'positions', label: 'Positions', content: <div className="p-4 text-center text-slate-500">Positions Table</div> },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Employees</h1>
      </div>
      
      <Tabs tabs={tabs} variant="underline" />

      {/* Employee Detail Sidebar */}
      <SidePanel
        isOpen={selectedEmp !== null}
        onClose={() => setSelectedEmp(null)}
        title="Employee Details"
        width="w-full sm:w-[500px]"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setSelectedEmp(null)}>Close</Button>
            <Button>Edit Profile</Button>
          </div>
        }
      >
        {selectedEmp && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-2xl">
                {selectedEmp.firstName[0]}{selectedEmp.lastName[0]}
              </div>
              <div>
                <h3 className="text-xl font-bold">{selectedEmp.firstName} {selectedEmp.lastName}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{selectedEmp.role}</p>
                <div className="mt-2">
                  <Badge variant={selectedEmp.status === 'Active' ? 'success' : selectedEmp.status === 'On Leave' ? 'warning' : 'default'} size="sm">
                    {selectedEmp.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)] space-y-4">
              <h4 className="font-semibold text-sm text-[var(--text-muted)] uppercase tracking-wider">Contact Info</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Email</span>
                  <a href={`mailto:${selectedEmp.email}`} className="font-medium text-[var(--primary)] hover:underline">{selectedEmp.email}</a>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Phone</span>
                  <span className="font-medium">{selectedEmp.phone}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)] space-y-4">
              <h4 className="font-semibold text-sm text-[var(--text-muted)] uppercase tracking-wider">Employment</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Department</span>
                  <span className="font-medium">{departments.find(d => d.id === selectedEmp.departmentId)?.name}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block mb-1">Hire Date</span>
                  <span className="font-medium">{selectedEmp.hireDate}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </SidePanel>
    </div>
  );
}

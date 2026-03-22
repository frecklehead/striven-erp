import { Invoice } from '../types';

export const invoices: Invoice[] = [
  {
    id: 'inv001',
    invoiceNumber: 'INV-2024-001',
    clientId: 'c001',
    issueDate: '2024-01-15',
    dueDate: '2024-02-14',
    amount: 15000,
    paidAmount: 15000,
    status: 'Paid',
    items: [
      { description: 'ERP Discover Phase', quantity: 1, rate: 15000, amount: 15000 }
    ]
  },
  {
    id: 'inv002',
    invoiceNumber: 'INV-2024-002',
    clientId: 'c002',
    issueDate: '2024-03-01',
    dueDate: '2024-03-31',
    amount: 40000,
    paidAmount: 40000,
    status: 'Paid',
    items: [
      { description: 'Cloud Migration Sprint 1', quantity: 200, rate: 200, amount: 40000 }
    ]
  },
  {
    id: 'inv003',
    invoiceNumber: 'INV-2024-003',
    clientId: 'c001',
    issueDate: '2024-04-01',
    dueDate: '2024-05-01',
    amount: 12400,
    paidAmount: 0,
    status: 'Overdue',
    items: [
      { description: 'ERP Development Phase 1', quantity: 1, rate: 12400, amount: 12400 }
    ]
  },
  {
    id: 'inv004',
    invoiceNumber: 'INV-2024-004',
    clientId: 'c004',
    issueDate: '2024-06-01',
    dueDate: '2024-07-01',
    amount: 4500,
    paidAmount: 0,
    status: 'Sent',
    items: [
      { description: 'Monthly Support SLA', quantity: 1, rate: 4500, amount: 4500 }
    ]
  },
  {
    id: 'inv005',
    invoiceNumber: 'INV-2024-005',
    clientId: 'c005',
    issueDate: '2024-11-01',
    dueDate: '2024-12-01',
    amount: 150000,
    paidAmount: 50000,
    status: 'Partial',
    items: [
      { description: 'Financial Data Import Pipeline', quantity: 1, rate: 150000, amount: 150000 }
    ]
  },
  {
    id: 'inv006',
    invoiceNumber: 'INV-2024-006',
    clientId: 'c006',
    issueDate: '2024-11-15',
    dueDate: '2024-12-15',
    amount: 55000,
    paidAmount: 0,
    status: 'Sent',
    items: [
      { description: 'EHR API Access Setup', quantity: 1, rate: 55000, amount: 55000 }
    ]
  },
  {
    id: 'inv007',
    invoiceNumber: 'INV-2024-007',
    clientId: 'c008',
    issueDate: '2024-12-01',
    dueDate: '2024-12-31',
    amount: 240000,
    paidAmount: 0,
    status: 'Draft',
    items: [
      { description: 'Wind Farm Topography Analysis', quantity: 1, rate: 240000, amount: 240000 }
    ]
  },
  {
    id: 'inv008',
    invoiceNumber: 'INV-2024-008',
    clientId: 'c010',
    issueDate: '2024-11-05',
    dueDate: '2024-12-05',
    amount: 12000,
    paidAmount: 0,
    status: 'Sent',
    items: [
      { description: 'Dealer Software License (Annual)', quantity: 50, rate: 240, amount: 12000 }
    ]
  }
];

export const getInvoiceById = (id: string) => invoices.find(i => i.id === id);
export const getInvoicesByClientId = (clientId: string) => invoices.filter(i => i.clientId === clientId);

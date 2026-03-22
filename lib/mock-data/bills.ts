export interface Bill {
  id: string;
  billNumber: string;
  supplierId: string;
  date: string;
  dueDate: string;
  amount: number;
  paidAmount: number;
  status: 'Draft' | 'Sent' | 'Partial' | 'Paid' | 'Overdue';
}

export const bills: Bill[] = [
  { id: 'b001', billNumber: 'BILL-1001', supplierId: 's001', date: '2024-11-01', dueDate: '2024-12-01', amount: 1250.50, paidAmount: 1250.50, status: 'Paid' },
  { id: 'b002', billNumber: 'BILL-1002', supplierId: 's002', date: '2024-12-01', dueDate: '2024-12-15', amount: 4500.00, paidAmount: 0, status: 'Sent' },
  { id: 'b003', billNumber: 'BILL-1003', supplierId: 's003', date: '2024-11-15', dueDate: '2024-12-30', amount: 12400.00, paidAmount: 6200.00, status: 'Partial' },
  { id: 'b004', billNumber: 'BILL-1004', supplierId: 's004', date: '2024-12-01', dueDate: '2024-12-01', amount: 15600.00, paidAmount: 0, status: 'Overdue' },
  { id: 'b005', billNumber: 'BILL-1005', supplierId: 's006', date: '2024-12-05', dueDate: '2025-01-04', amount: 3200.00, paidAmount: 0, status: 'Draft' },
];

export const getBillById = (id: string) => bills.find(b => b.id === id);

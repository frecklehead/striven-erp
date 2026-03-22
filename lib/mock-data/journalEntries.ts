export interface JournalLine {
  accountId: string;
  description: string;
  debit: number;
  credit: number;
}

export interface JournalEntry {
  id: string;
  entryNumber: string;
  date: string;
  description: string;
  createdBy: string;
  status: 'Posted' | 'Draft';
  lines: JournalLine[];
}

export const journalEntries: JournalEntry[] = [
  {
    id: 'je001',
    entryNumber: 'JE-10020',
    date: '2024-11-30',
    description: 'Monthly Payroll Accrual',
    createdBy: 'Paul Admin',
    status: 'Posted',
    lines: [
      { accountId: 'a6000', description: 'Payroll Expense Nov', debit: 45000, credit: 0 },
      { accountId: 'a2000', description: 'Accrued Payroll', debit: 0, credit: 45000 }
    ]
  },
  {
    id: 'je002',
    entryNumber: 'JE-10021',
    date: '2024-12-01',
    description: 'Depreciation - Office Equipment',
    createdBy: 'Paul Admin',
    status: 'Draft',
    lines: [
      { accountId: 'a6400', description: 'Depreciation Expense', debit: 1250, credit: 0 },
      { accountId: 'a1500', description: 'Accumulated Depreciation', debit: 0, credit: 1250 }
    ]
  },
  {
    id: 'je003',
    entryNumber: 'JE-10022',
    date: '2024-12-05',
    description: 'Prepaid Rent Amortization',
    createdBy: 'Paul Admin',
    status: 'Posted',
    lines: [
      { accountId: 'a6100', description: 'Rent Expense - December', debit: 10000, credit: 0 },
      { accountId: 'a1100', description: 'Prepaid Rent', debit: 0, credit: 10000 }
    ]
  }
];

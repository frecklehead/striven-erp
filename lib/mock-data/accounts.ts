export interface Account {
  id: string;
  code: string;
  name: string;
  type: 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
  subType: string;
  balance: number;
  ytdActivity: number;
  currency: string;
}

export const accounts: Account[] = [
  { id: 'a1000', code: '1000', name: 'Operating Cash', type: 'Asset', subType: 'Bank', balance: 450000, ytdActivity: 120000, currency: 'USD' },
  { id: 'a1100', code: '1100', name: 'Accounts Receivable', type: 'Asset', subType: 'Current Asset', balance: 125000, ytdActivity: -25000, currency: 'USD' },
  { id: 'a1200', code: '1200', name: 'Inventory', type: 'Asset', subType: 'Current Asset', balance: 85000, ytdActivity: 10000, currency: 'USD' },
  { id: 'a1500', code: '1500', name: 'Equipment', type: 'Asset', subType: 'Fixed Asset', balance: 350000, ytdActivity: 0, currency: 'USD' },
  { id: 'a2000', code: '2000', name: 'Accounts Payable', type: 'Liability', subType: 'Current Liability', balance: 42000, ytdActivity: -5000, currency: 'USD' },
  { id: 'a2100', code: '2100', name: 'Credit Card', type: 'Liability', subType: 'Current Liability', balance: 12000, ytdActivity: 3000, currency: 'USD' },
  { id: 'a2500', code: '2500', name: 'Long Term Loan', type: 'Liability', subType: 'Long Term Liability', balance: 250000, ytdActivity: -20000, currency: 'USD' },
  { id: 'a3000', code: '3000', name: 'Owner Equity', type: 'Equity', subType: 'Equity', balance: 706000, ytdActivity: 0, currency: 'USD' },
  { id: 'a4000', code: '4000', name: 'Service Revenue', type: 'Revenue', subType: 'Income', balance: 0, ytdActivity: 850000, currency: 'USD' },
  { id: 'a4100', code: '4100', name: 'Product Sales', type: 'Revenue', subType: 'Income', balance: 0, ytdActivity: 320000, currency: 'USD' },
  { id: 'a5000', code: '5000', name: 'Cost of Goods Sold', type: 'Expense', subType: 'COGS', balance: 0, ytdActivity: 180000, currency: 'USD' },
  { id: 'a6000', code: '6000', name: 'Payroll Expense', type: 'Expense', subType: 'Operating Expense', balance: 0, ytdActivity: 450000, currency: 'USD' },
  { id: 'a6100', code: '6100', name: 'Rent', type: 'Expense', subType: 'Operating Expense', balance: 0, ytdActivity: 120000, currency: 'USD' },
  { id: 'a6200', code: '6200', name: 'Utilities', type: 'Expense', subType: 'Operating Expense', balance: 0, ytdActivity: 24000, currency: 'USD' },
  { id: 'a6300', code: '6300', name: 'Marketing', type: 'Expense', subType: 'Operating Expense', balance: 0, ytdActivity: 65000, currency: 'USD' },
  { id: 'a6400', code: '6400', name: 'Software Subs', type: 'Expense', subType: 'Operating Expense', balance: 0, ytdActivity: 36000, currency: 'USD' },
];

export const getAccountById = (id: string) => accounts.find(a => a.id === id);

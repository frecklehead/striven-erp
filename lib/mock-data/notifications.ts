export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'info' | 'warning' | 'success' | 'alert';
  link?: string;
}

export const notifications: Notification[] = [
  { id: 'n001', title: 'New Invoice Paid', message: 'Invoice INV-2024-001 has been paid by Acme Corporation.', timestamp: '2024-12-05T14:30:00Z', read: false, type: 'success', link: '/clients/c001' },
  { id: 'n002', title: 'Task Overdue', message: 'Data Transfer Validation is overdue by 2 days.', timestamp: '2024-12-05T09:15:00Z', read: false, type: 'alert', link: '/tasks' },
  { id: 'n003', title: 'Candidate Accepted Offer', message: 'Jane Smith has accepted the Account Manager position!', timestamp: '2024-12-04T16:45:00Z', read: true, type: 'success', link: '/employees' },
  { id: 'n004', title: 'System Maintenance', message: 'Scheduled downtime for server upgrade at 2AM EST.', timestamp: '2024-12-04T10:00:00Z', read: true, type: 'info' },
  { id: 'n005', title: 'Budget Alert', message: 'Cloud Migration project has reached 90% of budget.', timestamp: '2024-12-03T11:20:00Z', read: true, type: 'warning', link: '/projects/pr002' },
];

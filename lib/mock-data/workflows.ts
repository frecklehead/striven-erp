export interface Workflow {
  id: string;
  name: string;
  triggerType: 'On Record Created' | 'On Schedule' | 'On Status Change' | 'Manual';
  targetEntity: string; // e.g., 'Invoice', 'Client', 'Task'
  stepsCount: number;
  lastRun: string;
  status: 'Active' | 'Inactive';
  description: string;
}

export const workflows: Workflow[] = [
  { id: 'wf001', name: 'New Client Onboarding', triggerType: 'On Record Created', targetEntity: 'Client', stepsCount: 5, lastRun: '2024-12-01 14:22', status: 'Active', description: 'Sends welcome email, assigns account manager, creates initial tasks.' },
  { id: 'wf002', name: 'Overdue Invoice Reminder', triggerType: 'On Schedule', targetEntity: 'Invoice', stepsCount: 2, lastRun: '2024-12-05 08:00', status: 'Active', description: 'Runs daily check for overdue invoices and emails client.' },
  { id: 'wf003', name: 'Task Completion Notification', triggerType: 'On Status Change', targetEntity: 'Task', stepsCount: 1, lastRun: '2024-12-04 16:45', status: 'Active', description: 'Notifies project manager when high priority task is marked complete.' },
  { id: 'wf004', name: 'Candidate Interview Scheduled', triggerType: 'On Status Change', targetEntity: 'Candidate', stepsCount: 3, lastRun: '2024-11-28 10:15', status: 'Inactive', description: 'Sends calendar invites and prep info to candidates.' },
  { id: 'wf005', name: 'Monthly Expense Report', triggerType: 'Manual', targetEntity: 'Report', stepsCount: 4, lastRun: '2024-11-30 23:55', status: 'Active', description: 'Compiles expenses and routes for department head approval.' }
];

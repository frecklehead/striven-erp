export interface TimeEntry {
  id: string;
  date: string;
  employeeId: string;
  projectId: string;
  taskId: string;
  startTime: string;
  endTime: string;
  hours: number;
  billable: boolean;
  notes: string;
}

export const timeEntries: TimeEntry[] = [
  { id: 'te001', date: '2024-12-01', employeeId: 'e006', projectId: 'pr001', taskId: 't003', startTime: '09:00', endTime: '12:00', hours: 3, billable: true, notes: 'Database schema design' },
  { id: 'te002', date: '2024-12-01', employeeId: 'e006', projectId: 'pr001', taskId: 't003', startTime: '13:00', endTime: '17:00', hours: 4, billable: true, notes: 'Writing migration scripts' },
  { id: 'te003', date: '2024-12-02', employeeId: 'e002', projectId: 'pr005', taskId: 't013', startTime: '10:00', endTime: '12:00', hours: 2, billable: true, notes: 'Client meeting review' },
  { id: 'te004', date: '2024-12-02', employeeId: 'e008', projectId: 'pr006', taskId: 't014', startTime: '08:00', endTime: '16:00', hours: 8, billable: true, notes: 'API integration endpoints' },
  { id: 'te005', date: '2024-12-03', employeeId: 'e008', projectId: 'pr006', taskId: 't014', startTime: '09:00', endTime: '14:00', hours: 5, billable: true, notes: 'Testing API endpoints' },
  { id: 'te006', date: '2024-12-03', employeeId: 'e004', projectId: 'pr003', taskId: 't008', startTime: '14:00', endTime: '16:00', hours: 2, billable: false, notes: 'Drafting ad copy' },
  { id: 'te007', date: '2024-12-04', employeeId: 'e010', projectId: 'pr010', taskId: 't009', startTime: '09:00', endTime: '17:00', hours: 8, billable: false, notes: 'Audit preparation internal' },
];

export const getTimeEntriesByEmployee = (empId: string) => timeEntries.filter(t => t.employeeId === empId);
export const getTimeEntriesByProject = (projId: string) => timeEntries.filter(t => t.projectId === projId);

import { Appointment } from '../types';

export const appointments: Appointment[] = [
  { id: 'apt001', title: 'Q1 Review with Acme', date: '2024-12-10', startTime: '10:00', endTime: '11:00', type: 'Review', attendees: ['e002', 'ct001'] },
  { id: 'apt002', title: 'Weekly Sync - Cloud Migration', date: '2024-12-11', startTime: '13:00', endTime: '14:00', type: 'Meeting', attendees: ['e003', 'e006', 'ct005'] },
  { id: 'apt003', title: 'TechFlow Discovery Call', date: '2024-12-12', startTime: '09:00', endTime: '09:30', type: 'Call', attendees: ['e003', 'ct004'] },
  { id: 'apt004', title: 'Supplier Negotiation - Dell', date: '2024-12-15', startTime: '14:00', endTime: '15:00', type: 'Meeting', attendees: ['e008', 's003'] },
  { id: 'apt005', title: 'Candidate Interview - Jane Smith', date: '2024-12-16', startTime: '11:00', endTime: '12:00', type: 'Review', attendees: ['e005', 'e007', 'cand002'] }
];

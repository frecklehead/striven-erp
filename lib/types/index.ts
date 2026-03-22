export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  website: string;
  phone: string;
  email: string;
  address: Address;
  status: 'Active' | 'Inactive' | 'Prospect';
  accountManager: string;
  totalRevenue: number;
  outstandingBalance: number;
  createdAt: string;
  lastActivity: string;
  logoInitials: string;
  logoColor: string;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  departmentId: string;
  positionId: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  hireDate: string;
  managerId?: string;
  avatarUrl?: string;
  role: string;
}

export interface Department {
  id: string;
  name: string;
  headId: string;
  employeeCount: number;
  openPositions: number;
  budget: number;
}

export interface Position {
  id: string;
  title: string;
  departmentId: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  status: 'Open' | 'Filled';
  openings: number;
  postedDate: string;
}

export interface Project {
  id: string;
  name: string;
  clientId: string;
  managerId: string;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  status: 'Planning' | 'Active' | 'On Hold' | 'Completed';
  progress: number;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  projectId: string;
  assigneeId: string;
  assignedById: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Not Started' | 'In Progress' | 'Review' | 'Completed' | 'On Hold';
  tags: string[];
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  paidAmount: number;
  status: 'Draft' | 'Sent' | 'Partial' | 'Paid' | 'Overdue';
  items: { description: string; quantity: number; rate: number; amount: number }[];
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  companyId: string;
  location: string;
  type: 'Primary' | 'Billing' | 'Technical' | 'Other';
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  positionId: string;
  source: string;
  stage: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Hired' | 'Rejected';
  appliedDate: string;
  email: string;
  rating: number;
}

export interface Supplier {
  id: string;
  name: string;
  category: string;
  contactName: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  paymentTerms: string;
}

export interface Appointment {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  type: 'Meeting' | 'Call' | 'Review';
  attendees: string[]; // employee ids or contact ids
}

export interface RecentActivity {
  id: string;
  userId: string;
  action: string;
  target: string;
  timestamp: string;
}

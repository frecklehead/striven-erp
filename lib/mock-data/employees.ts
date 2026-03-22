import { Employee } from '../types';

export const employees: Employee[] = [
  {
    id: 'e001',
    firstName: 'Paul',
    lastName: 'Admin',
    email: 'paul.admin@company.com',
    phone: '+1 (555) 000-0001',
    departmentId: 'd001',
    positionId: 'p001',
    status: 'Active',
    hireDate: '2020-01-15',
    role: 'System Admin',
  },
  {
    id: 'e002',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.j@company.com',
    phone: '+1 (555) 000-0002',
    departmentId: 'd002', // Sales
    positionId: 'p002', // Account Manager
    status: 'Active',
    hireDate: '2021-03-10',
    managerId: 'e005',
    role: 'Account Manager',
  },
  {
    id: 'e003',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'm.chen@company.com',
    phone: '+1 (555) 000-0003',
    departmentId: 'd002',
    positionId: 'p002',
    status: 'Active',
    hireDate: '2021-06-22',
    managerId: 'e005',
    role: 'Account Manager',
  },
  {
    id: 'e004',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.d@company.com',
    phone: '+1 (555) 000-0004',
    departmentId: 'd002',
    positionId: 'p002',
    status: 'Active',
    hireDate: '2022-09-01',
    managerId: 'e005',
    role: 'Account Manager',
  },
  {
    id: 'e005',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'd.wilson@company.com',
    phone: '+1 (555) 000-0005',
    departmentId: 'd002', // Sales
    positionId: 'p003', // VP of Sales
    status: 'Active',
    hireDate: '2019-11-15',
    role: 'VP of Sales',
  },
  {
    id: 'e006',
    firstName: 'Jessica',
    lastName: 'Wong',
    email: 'j.wong@company.com',
    phone: '+1 (555) 000-0006',
    departmentId: 'd003', // Engineering
    positionId: 'p004', // Senior Dev
    status: 'Active',
    hireDate: '2021-01-20',
    managerId: 'e008',
    role: 'Senior Developer',
  },
  {
    id: 'e007',
    firstName: 'Robert',
    lastName: 'Smith',
    email: 'r.smith@company.com',
    phone: '+1 (555) 000-0007',
    departmentId: 'd004', // HR
    positionId: 'p005', // HR Manager
    status: 'On Leave',
    hireDate: '2020-05-15',
    role: 'HR Manager',
  },
  {
    id: 'e008',
    firstName: 'Amanda',
    lastName: 'Thomas',
    email: 'a.thomas@company.com',
    phone: '+1 (555) 000-0008',
    departmentId: 'd003',
    positionId: 'p006', // CTO
    status: 'Active',
    hireDate: '2019-02-10',
    role: 'CTO',
  },
  {
    id: 'e009',
    firstName: 'James',
    lastName: 'Miller',
    email: 'j.miller@company.com',
    phone: '+1 (555) 000-0009',
    departmentId: 'd005', // Finance
    positionId: 'p007', // Accountant
    status: 'Inactive',
    hireDate: '2021-08-01',
    role: 'Staff Accountant',
  },
  {
    id: 'e010',
    firstName: 'Laura',
    lastName: 'Garcia',
    email: 'l.garcia@company.com',
    phone: '+1 (555) 000-0010',
    departmentId: 'd005',
    positionId: 'p008', // CFO
    status: 'Active',
    hireDate: '2018-07-22',
    role: 'CFO',
  }
];

export const getEmployeeById = (id: string) => employees.find(e => e.id === id);

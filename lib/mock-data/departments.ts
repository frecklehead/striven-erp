import { Department } from '../types';

export const departments: Department[] = [
  {
    id: 'd001',
    name: 'Executive',
    headId: 'e001',
    employeeCount: 4,
    openPositions: 0,
    budget: 1500000,
  },
  {
    id: 'd002',
    name: 'Sales & Marketing',
    headId: 'e005',
    employeeCount: 12,
    openPositions: 2,
    budget: 850000,
  },
  {
    id: 'd003',
    name: 'Engineering',
    headId: 'e008',
    employeeCount: 24,
    openPositions: 5,
    budget: 3200000,
  },
  {
    id: 'd004',
    name: 'Human Resources',
    headId: 'e007',
    employeeCount: 3,
    openPositions: 1,
    budget: 450000,
  },
  {
    id: 'd005',
    name: 'Finance & Accounting',
    headId: 'e010',
    employeeCount: 6,
    openPositions: 1,
    budget: 950000,
  },
  {
    id: 'd006',
    name: 'Customer Support',
    headId: 'e011',
    employeeCount: 18,
    openPositions: 3,
    budget: 1100000,
  }
];

export const getDepartmentById = (id: string) => departments.find(d => d.id === id);

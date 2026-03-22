import { Supplier } from '../types';

export const suppliers: Supplier[] = [
  {
    id: 's001',
    name: 'OfficeMax Supplies',
    category: 'Office Equipment',
    contactName: 'Kevin Mitchell',
    email: 'k.mitchell@officemax.com',
    phone: '+1 (555) 888-1111',
    status: 'Active',
    paymentTerms: 'Net 30',
  },
  {
    id: 's002',
    name: 'AWS',
    category: 'Cloud Services',
    contactName: 'Billing Dept',
    email: 'billing@aws.amazon.com',
    phone: '+1 (555) 888-2222',
    status: 'Active',
    paymentTerms: 'Due on Receipt',
  },
  {
    id: 's003',
    name: 'Dell Technologies',
    category: 'Hardware',
    contactName: 'Sarah Connor',
    email: 's.connor@dell.com',
    phone: '+1 (555) 888-3333',
    status: 'Active',
    paymentTerms: 'Net 45',
  },
  {
    id: 's004',
    name: 'WeWork',
    category: 'Real Estate',
    contactName: 'Leasing Office',
    email: 'leasing@wework.com',
    phone: '+1 (555) 888-4444',
    status: 'Active',
    paymentTerms: 'Due on Receipt',
  },
  {
    id: 's005',
    name: 'Cater2Me',
    category: 'Food & Beverage',
    contactName: 'Chef Gordon',
    email: 'gordon@cater2me.com',
    phone: '+1 (555) 888-5555',
    status: 'Inactive',
    paymentTerms: 'Net 15',
  },
  {
    id: 's006',
    name: 'Cisco Systems',
    category: 'Networking',
    contactName: 'Mike Router',
    email: 'mike@cisco.com',
    phone: '+1 (555) 888-6666',
    status: 'Active',
    paymentTerms: 'Net 30',
  }
];

export const getSupplierById = (id: string) => suppliers.find(s => s.id === id);

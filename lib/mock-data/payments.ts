export interface Payment {
  id: string;
  date: string;
  amount: number;
  method: 'Credit Card' | 'Wire Transfer' | 'ACH' | 'Check';
  reference: string;
  type: 'Inbound' | 'Outbound';
  entityId: string; // client or supplier ID
  documentId: string; // invoice or bill ID
}

export const payments: Payment[] = [
  { id: 'pay001', date: '2024-01-20', amount: 15000, method: 'Wire Transfer', reference: 'WT-49281', type: 'Inbound', entityId: 'c001', documentId: 'inv001' },
  { id: 'pay002', date: '2024-03-31', amount: 40000, method: 'ACH', reference: 'ACH-88992', type: 'Inbound', entityId: 'c002', documentId: 'inv002' },
  { id: 'pay003', date: '2024-11-15', amount: 50000, method: 'Wire Transfer', reference: 'WT-11223', type: 'Inbound', entityId: 'c005', documentId: 'inv005' },
  { id: 'pay004', date: '2024-11-20', amount: 1250.50, method: 'Credit Card', reference: 'CC-9901', type: 'Outbound', entityId: 's001', documentId: 'b001' },
  { id: 'pay005', date: '2024-11-30', amount: 6200.00, method: 'ACH', reference: 'ACH-4432', type: 'Outbound', entityId: 's003', documentId: 'b003' },
];

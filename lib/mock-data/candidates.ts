import { Candidate } from '../types';

export const candidates: Candidate[] = [
  {
    id: 'cand001',
    firstName: 'John',
    lastName: 'Doe',
    positionId: 'p004', // Senior Dev
    source: 'LinkedIn',
    stage: 'Interview',
    appliedDate: '2024-04-10',
    email: 'john.doe@example.com',
    rating: 4,
  },
  {
    id: 'cand002',
    firstName: 'Jane',
    lastName: 'Smith',
    positionId: 'p002', // Account Manager
    source: 'Referral',
    stage: 'Offer',
    appliedDate: '2024-03-25',
    email: 'jane.smith@example.com',
    rating: 5,
  },
  {
    id: 'cand003',
    firstName: 'Alice',
    lastName: 'Johnson',
    positionId: 'p004',
    source: 'Indeed',
    stage: 'Screening',
    appliedDate: '2024-04-18',
    email: 'alice.j@example.com',
    rating: 3,
  },
  {
    id: 'cand004',
    firstName: 'Bob',
    lastName: 'Williams',
    positionId: 'p007', // Staff Accountant
    source: 'Website',
    stage: 'Applied',
    appliedDate: '2024-04-20',
    email: 'bob.w@example.com',
    rating: 0,
  },
  {
    id: 'cand005',
    firstName: 'Charlie',
    lastName: 'Brown',
    positionId: 'p009', // Support Spec
    source: 'LinkedIn',
    stage: 'Rejected',
    appliedDate: '2024-02-14',
    email: 'charlie.b@example.com',
    rating: 2,
  },
  {
    id: 'cand006',
    firstName: 'Diana',
    lastName: 'Prince',
    positionId: 'p002',
    source: 'Referral',
    stage: 'Hired',
    appliedDate: '2024-01-10',
    email: 'diana.p@example.com',
    rating: 5,
  },
  {
    id: 'cand007',
    firstName: 'Evan',
    lastName: 'Wright',
    positionId: 'p004',
    source: 'Indeed',
    stage: 'Interview',
    appliedDate: '2024-04-05',
    email: 'evan.w@example.com',
    rating: 4,
  },
  {
    id: 'cand008',
    firstName: 'Frank',
    lastName: 'Castle',
    positionId: 'p009',
    source: 'Website',
    stage: 'Screening',
    appliedDate: '2024-04-19',
    email: 'frank.c@example.com',
    rating: 3,
  }
];

export const getCandidatesByPositionId = (positionId: string) => candidates.filter(c => c.positionId === positionId);

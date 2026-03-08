export type DocStatus =
  | "FOR_RECEIVING"
  | "ON_HAND"
  | "FOR_ROUTING"
  | "ESCALATED";

export type DashboardDoc = {
  id: string; // DB id or UUID
  trackingNo: string; // e.g., "DOC-2024-00425"
  subject: string;
  fromOffice: string;
  toOffice: string;
  status: DocStatus;
  updatedAt: string; // ISO string
  dueAt?: string; // ISO string (optional)
};

export type DashboardCounts = {
  forReceiving: number;
  onHand: number;
  forRouting: number;
  overdue: number;
};

export type WorkQueueSegment = "Receiving" | "On-Hand" | "Escalated";

export const mockCounts: DashboardCounts = {
  forReceiving: 10,
  onHand: 5,
  forRouting: 8,
  overdue: 2,
};

export const mockQueue: Record<WorkQueueSegment, DashboardDoc[]> = {
  Receiving: [
    {
      id: "1",
      trackingNo: "DOC-2024-00425",
      subject: "Budget Proposal Q3 2024",
      fromOffice: "Admin",
      toOffice: "Finance",
      status: "FOR_RECEIVING",
      updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2h ago
      dueAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "2",
      trackingNo: "DOC-2024-00418",
      subject: "Employee Records Update",
      fromOffice: "HR",
      toOffice: "Main Office",
      status: "FOR_RECEIVING",
      updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3d ago
    },
  ],
  "On-Hand": [
    {
      id: "3",
      trackingNo: "DOC-2024-00384",
      subject: "Maintenance Report",
      fromOffice: "Facilities",
      toOffice: "Main Office",
      status: "ON_HAND",
      updatedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8h ago
    },
  ],
  Escalated: [
    {
      id: "4",
      trackingNo: "DOC-2024-00412",
      subject: "Purchase Request Form",
      fromOffice: "IT",
      toOffice: "Procurement",
      status: "ESCALATED",
      updatedAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(), // 1d+ ago
      dueAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // overdue
    },
  ],
};

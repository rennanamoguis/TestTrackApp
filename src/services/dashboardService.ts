import type {
    DashboardCounts,
    DashboardDoc,
    WorkQueueSegment,
} from "@/src/data/mockDataDashboard";

export type DashboardResponse = {
  counts: DashboardCounts;
  queue: Record<WorkQueueSegment, DashboardDoc[]>;
};

export async function fetchDashboard(): Promise<DashboardResponse> {
  const { mockCounts, mockQueue } =
    await import("@/src/data/mockDataDashboard");
  return { counts: mockCounts, queue: mockQueue };

  //for API Call (axios/fetch)
  // const res = await fetch("https://api/dashboard");
  // return await res.json();
}

//**** Connecting to the Database ****/
// export async function fetchDashboard(): Promise<DashboardResponse> {
//   const res = await fetch("https://your-domain/api/mobile/dashboard", {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   if (!res.ok) throw new Error("API error");
//   return await res.json();
// }

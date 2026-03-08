export function timeAgo(iso: string): string {
  const now = Date.now();
  const t = new Date(iso).getTime();
  const diff = Math.max(0, now - t);

  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `Updated ${mins}m ago`;

  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `Updated ${hrs}h ago`;

  const days = Math.floor(hrs / 24);
  return `Updated ${days}d ago`;
}

export function dueLabel(dueAt?: string): string | null {
  if (!dueAt) return null;
  const due = new Date(dueAt).getTime();
  const now = Date.now();
  const diff = due - now;

  const hrs = Math.round(diff / (60 * 60 * 1000));
  if (hrs < 0) return `Overdue ${Math.abs(hrs)}h`;
  if (hrs === 0) return "Due now";
  if (hrs < 24) return `Due in ${hrs}h`;

  const days = Math.round(diff / (24 * 60 * 60 * 1000));
  return `Due in ${days}d`;
}

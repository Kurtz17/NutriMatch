import { Navbar } from "@/components/layout/Navbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="w-full min-w-0">{children}</main>
    </div>
  );
}

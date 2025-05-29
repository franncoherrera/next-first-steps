import { Sidebar } from "../../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full md:ml-[340px] ml-[40px] text-slate-900">{children}</div>
      </div>
    </div>
  );
}

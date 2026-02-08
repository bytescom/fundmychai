import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <DashboardSidebar />
      {/* Mobile: Add top padding for mobile header, Desktop: Add left margin for sidebar */}
      <main className="pt-16 md:pt-0 md:ml-64 p-4 sm:p-6 md:p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}

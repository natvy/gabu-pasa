import Sidebar, { SidebarItem } from "./Sidebar";

interface DashboardLayoutProps {
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}

export default function DashboardLayout({
  sidebarItems,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="app-shell min-h-screen">
      <Sidebar items={sidebarItems} />

      <main className="app-dashboard-main">
        <div className="app-dashboard-content">{children}</div>
      </main>
    </div>
  );
}

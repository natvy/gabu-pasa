// DashboardLayout.tsx 
// (ojito, es compartido entre el estudiante y el tutor)

import Sidebar, { SidebarItem } from "./Sidebar";

// Componente DashboardLayout que recibe los elementos de 
// la barra lateral y el contenido principal
interface DashboardLayoutProps {
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}

// Este componente se encarga de estructurar el layout del 
// dashboard, incluyendo la barra lateral y el área 
// principal de contenido.
export default function DashboardLayout({
    sidebarItems,
    children,
}: DashboardLayoutProps) {
    return (
        <div className="flex">
            <Sidebar items={sidebarItems} />
            <main className="flex-1 p-6 bg-gray-100 min-h-sreen">
                {children}
                </main>
        </div>
    );
}




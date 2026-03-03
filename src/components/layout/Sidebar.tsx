// Sidebar.tsx
// Esta clase se encarga de renderizar la barra lateral 
// del dashboard, mostrando los enlaces de navegación 
// para el estudiante.

import Link from "next/link";

// Definimos la interfaz para los elementos de la barra lateral
export interface SidebarItem {
  label: string;
  href: string;
}

// Componente Sidebar que recibe una lista de elementos y los renderiza
export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-2 rounded hover:bg-gray-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

// Interfaz para las props del componente Sidebar
interface SidebarProps {
  items: SidebarItem[];
}

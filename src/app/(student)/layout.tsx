//src/layout/(student)/layout.tsx

import DashboardLayout from "@/components/layout/DashboardLayout";

// Aqui se define el sidebar para los estudiantes, con 
// las rutas correspondientes a cada sección de la 
// aplicación para ellos. Cada objeto en el array representa 
// un item del sidebar,
const studentSidebar = [
    { label: "Home", href: "/home_student" },
    { label: "Buscar Tutor", href: "/search_student" },
    { label: "Tus Tutores", href: "/tutors_student" },
    { label: "Califica a tu Tutor", href: "/rate_student" },
    { label: "Mensajes", href: "/messaging_student" },
    { label: "Sobre mi", href: "/profile_student" },
    { label: "Archivos", href: "/files_student" },
];

// El layout para los estudiantes, que envuelve el contenido de cada página
// con el DashboardLayout y le pasa el sidebar específico para ellos. 
// El children representa el contenido de cada página que se renderizará
// dentro del layout.
export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardLayout sidebarItems={studentSidebar}>
            {children}
        </DashboardLayout>
    );
}
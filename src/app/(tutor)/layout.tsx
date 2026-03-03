//src/layout/(tutor)/layout.tsx

import DashboardLayout from "@/components/layout/DashboardLayout";

// ojito, nomas copie, pegue y edite el del estudiante.
// Aqui se define el sidebar para los el tutor OJO QUE ES UN ARREGLO, 
// con las rutas correspondientes a cada sección de la 
// aplicación para ellos. Cada objeto en el array representa 
// un item del sidebar,
const tutorSidebar = [
    { label: "Home", href: "/home" },
    { label: "Video llamada", href: "/videocall" },
    { label: "Ingresar Archivos", href: "/files" },
    { label: "Busca a tus alumnos", href: "/students" },
    { label: "Mensajes", href: "/messaging" },
    { label: "Sobre mi", href: "/profile" },
    { label: "Horarios disponibles", href: "/schedule" },
    { label: "Califica alumno", href: "/rate" },
];

// El layout para el profe, que envuelve el contenido de cada página
// con el DashboardLayout y le pasa el sidebar específico para ellos. 
// El children representa el contenido de cada página que se renderizará
// dentro del layout.
export default function TutorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardLayout sidebarItems={tutorSidebar}>
            {children}
        </DashboardLayout>
    );
}
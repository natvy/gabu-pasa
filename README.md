# Gabu Pasa

Plataforma web de tutorias academicas construida con `Next.js`, enfocada en conectar estudiantes con tutores mediante una experiencia clara, visual y facil de navegar.

## Resumen

`Gabu Pasa` es un prototipo frontend que presenta dos recorridos principales dentro del mismo sistema:

- `Estudiante`: buscar tutores, revisar archivos, consultar sesiones, chatear y calificar la experiencia recibida.
- `Tutor`: gestionar estudiantes, visualizar metricas, compartir materiales, administrar horarios, iniciar videollamadas y evaluar a sus alumnos.

El proyecto esta pensado como una demostracion navegable de producto. Actualmente trabaja con `mocks` locales para simular la informacion mientras se define una futura integracion con backend.

## Que incluye la demo

### Vista estudiante

- `Dashboard` con resumen general, progreso, actividad reciente y proximas sesiones.
- `Buscar tutores` con filtros por materia y busqueda por texto.
- `Tus tutores` para consultar perfiles disponibles.
- `Mensajeria` con lista de conversaciones y ventana de chat.
- `Archivos` para explorar materiales compartidos.
- `Perfil` con informacion personal y academica.
- `Calificacion al tutor` para evaluar la calidad de la asesoria.

### Vista tutor

- `Dashboard` con metricas, solicitudes, calendario y alumnado reciente.
- `Buscar estudiantes` con filtros y solicitudes entrantes.
- `Horarios` para configurar disponibilidad y ver recomendaciones.
- `Videollamadas` con seleccion de estudiante e historial.
- `Archivos compartidos` para materiales y notas academicas.
- `Mensajeria` para seguimiento con estudiantes.
- `Perfil` con datos personales, materias y habilidades.
- `Calificacion al alumno` para registrar retroalimentacion.

## Tecnologias

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `ESLint`
- `react-calendar`

## Estructura del proyecto

```text
src/
  app/
    (student)/            # rutas del estudiante
    (tutor)/              # rutas del tutor
    globals.css           # estilos globales y sistema visual
    layout.tsx            # layout raiz
    page.tsx              # portada / acceso a ambas vistas
  components/
    availability/         # horario y disponibilidad
    calendar/             # agenda y eventos
    cards/                # tarjetas reutilizables
    chats/                # mensajeria
    dashboard/            # widgets de inicio
    feedback/             # rating y progreso
    filters/              # filtros de busqueda y archivos
    layout/               # sidebar y dashboard layout
    profile/              # informacion de perfil
    rating/               # formularios de evaluacion
    search_student/       # busqueda de tutores
    tutors/               # listado de tutores
    ui/                   # componentes base
    videocall/            # historial de llamadas
  mocks/                  # datos simulados para demo
  types/                  # tipos e interfaces
public/
  recursos_visuales/      # iconografia e imagenes del proyecto
```

## Ejecucion local

1. Instala dependencias:

```bash
npm install
```

2. Inicia el entorno de desarrollo:

```bash
npm run dev
```

3. Abre en el navegador:

```text
http://localhost:3000
```

## Scripts disponibles

- `npm run dev`: inicia el proyecto en modo desarrollo.
- `npm run build`: genera la version de produccion.
- `npm run start`: levanta la build de produccion.
- `npm run lint`: valida estilo y calidad basica de codigo.

## Fuente de datos actual

El proyecto usa archivos `mock` dentro de `src/mocks` para representar:

- tutores
- estudiantes
- conversaciones y mensajes
- sesiones y eventos
- archivos academicos
- historial de llamadas

Esto permite mostrar el flujo completo de la interfaz aun sin backend conectado.

## Estado actual

- La aplicacion ya cuenta con navegacion funcional entre ambos perfiles.
- El diseno esta orientado a presentacion y demo de producto.
- El sistema visual fue unificado para mantener una paleta mas armonica y consistente.
- Aun hay componentes que funcionan como prototipo de interfaz y pueden evolucionar hacia integracion real.

## Oportunidades de mejora

- Conectar autenticacion y manejo de sesiones reales.
- Integrar una API para tutores, estudiantes, mensajes y archivos.
- Persistir historial de chat, calificaciones y disponibilidad.
- Reemplazar mocks por datos dinamicos.
- Agregar pruebas y validaciones de formularios mas robustas.

## Autor

Proyecto trabajado como propuesta de plataforma academica :> Hecho por el gabuequipo. 
Trayectoria de programacion estructurada por Natalia :> 

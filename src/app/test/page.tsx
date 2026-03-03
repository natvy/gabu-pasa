"use client";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import CardAlumno from "@/components/cards/CardAlumno";
import CardTutor from "@/components/cards/CardTutor";
import FileCard from "@/components/cards/FileCard";
import ChatBubble from "@/components/chats/ChatBubble";
import FilterPanel from "@/components/filters/FilterPanel";
import ProgressCircle from "@/components/feedback/ProgressCircle";
import RatingStars from "@/components/feedback/RatingStars";
import Input from "@/components/ui/Select";
import TextArea from "@/components/ui/TextArea";

const events = [
  {
    title: "Tutoría de Matemáticas",
    start: new Date(2026, 2, 3, 10, 0), // 3 marzo 2026 10:00
    end: new Date(2026, 2, 3, 11, 30),
  },
  {
    title: "Clase de Física",
    start: new Date(2026, 2, 5, 14, 0),
    end: new Date(2026, 2, 5, 15, 0),
  },
  {
    title: "Repaso de Química",
    start: new Date(2026, 2, 7, 9, 0),
    end: new Date(2026, 2, 7, 10, 0),
  },
];

export default function Tests() {
  return (
    <div style={{ padding: "16px" }}>
      <h1>Componentes de prueba</h1>
      <h2>CardAlumno</h2>
      <CardAlumno id="1" name="Juan Pérez" subject="Matemáticas" rating={4} />
      <h2>CardTutor</h2>
      <CardTutor
        id="1"
        name="María Gómez"
        description="Experta en matemáticas con 5 años de experiencia"
        subjects={["Matemáticas", "Física"]}
        rating={5}
      />
      <h2>FileCard</h2>
      <FileCard
        name="Ejemplo.pdf"
        type="pdf"
        fileSize="2 MB"
        previewUrl="love.pdf"
        uploadedBy="Juan Pérez"
        onClick={() => alert("Archivo clickeado")}
      />
      <h2>ChatBubble</h2>
      <ChatBubble
        message="Hola, ¿cómo estás?"
        sender="other"
        timestamp="10:30 AM"
      />
      <ChatBubble
        message="¡Hola! Estoy bien, gracias."
        sender="me"
        timestamp="10:31 AM"
      />
      <h2>FilterPanel</h2>
      <FilterPanel
        filters={[
          {
            title: "Materia",
            options: [
              { label: "Matemáticas", value: "matematicas" },
              { label: "Física", value: "fisica" },
              { label: "Química", value: "quimica" },
            ],
          },
          {
            title: "Nivel",
            options: [
              { label: "Principiante", value: "principiante" },
              { label: "Intermedio", value: "intermedio" },
              { label: "Avanzado", value: "avanzado" },
            ],
          },
        ]}
        onChange={(filterTitle, option) =>
          alert(`Filtro: ${filterTitle}, Opción: ${option}`)
        }
      />
      <h2>ProgressCircle</h2>
      <ProgressCircle value={75} max={100} size={120} />
      <h2>RatingStars</h2>
      <RatingStars
        value={4}
        max={5}
        onChange={(value) => alert(`Calificación: ${value}`)}
      />
      <h2>Input</h2>
      <Input
        label="Nombre"
        placeholder="Ingresa tu nombre"
        error="Este campo es obligatorio"
      />
      <h2>TextArea</h2>
      <TextArea
        label="Descripción"
        placeholder="Escribe una descripción"
        error="Este campo es obligatorio"
      />
      <h2>CalendarWrapper</h2>
      <div style={{ padding: "24px" }}>
        <CalendarWrapper events={events} />
      </div>
    </div>
  );
}

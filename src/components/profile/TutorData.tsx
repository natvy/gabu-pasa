"use client";

import Button from "../ui/Button";
import type { PersonalData } from "@/types/personal_data";

interface TutorDataProps {
  data: PersonalData;
}

export default function TutorData({ data }: TutorDataProps) {
  return (
    <div className="app-card-strong space-y-6 p-6">
      <h3 className="border-b border-[color:var(--border)] pb-3 text-lg font-semibold text-[color:var(--primary-strong)]">
        Datos academicos y de contacto
      </h3>

      <div className="grid gap-5 text-sm text-[color:var(--foreground)] sm:grid-cols-2 xl:grid-cols-1">
        <div className="space-y-1">
          <p className="app-muted">Correo</p>
          <p className="break-words font-medium">{data.correo}</p>
        </div>

        <div className="space-y-1">
          <p className="app-muted">Telefono</p>
          <p className="font-medium">{data.telefono}</p>
        </div>

        <div className="space-y-1">
          <p className="app-muted">Semestre</p>
          <p className="font-medium">{data.semestre}</p>
        </div>

        <div className="space-y-1">
          <p className="app-muted">Carrera</p>
          <p className="font-medium">{data.carrera}</p>
        </div>
      </div>

      <div className="border-t border-[color:var(--border)] pt-4 text-xs app-muted">
        ID interno: {data.id}
      </div>

      <div className="border-t border-[color:var(--border)] pt-6">
        <Button
          variant="primary"
          size="md"
          className="w-full justify-center"
          onClick={() => console.log("Actualizar informacion")}
        >
          Actualizar informacion
        </Button>
      </div>
    </div>
  );
}

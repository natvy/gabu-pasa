"use client";

import { useState } from "react";
import FileCard from "@/components/cards/FileCard";
import Input from "@/components/ui/Input";
import NoteCardHorizontal from "@/components/cards/NoteCardHorizontal";
import { filesMock } from "@/mocks/files.mock";
import { tutorsMock } from "@/mocks/tutors.mock";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredFiles = filesMock.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  const pdfFiles = filesMock.filter((file) => file.type === "pdf");

  return (
    <div className="app-page">
      <PageHeader
        title="ARCHIVOS COMPARTIDOS"
        subtitle="Material que has enviado a tus alumnos y notas academicas."
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.9fr)]">
        <div className="min-w-0 space-y-6">
          <Input
            placeholder="Buscar archivo por titulo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filteredFiles.length === 0 ? (
            <p className="text-sm app-muted">No se encontraron archivos.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {filteredFiles.map((file) => (
                <FileCard key={file.id} file={file} tutors={tutorsMock} />
              ))}
            </div>
          )}
        </div>

        <aside className="app-card-soft space-y-4 p-5">
          <h2 className="app-section-heading">Apuntes</h2>

          {pdfFiles.length === 0 ? (
            <p className="text-sm app-muted">No hay apuntes disponibles.</p>
          ) : (
            <div className="space-y-3">
              {pdfFiles.map((file) => (
                <NoteCardHorizontal
                  key={file.id}
                  file={file}
                  onEdit={() => console.log("Editar apunte", file.id)}
                />
              ))}
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}

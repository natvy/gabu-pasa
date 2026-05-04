"use client";

import { useState } from "react";
import { filesMock } from "@/mocks/files.mock";
import { tutorsMock } from "@/mocks/tutors.mock";
import FilesFilter from "@/components/filters/FilesFilter";
import FilesGrid from "@/components/filters/FilesGrid";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredFiles = filesMock.filter((file) => {
    const matchesTutor = selectedTutor ? file.uploadedBy === selectedTutor : true;
    const matchesType = selectedType ? file.type === selectedType : true;

    return matchesTutor && matchesType;
  });

  return (
    <div className="app-page">
      <PageHeader
        title="TUS ARCHIVOS"
        subtitle="Encuentra los archivos otorgados por tus asesores a lo largo de todo tu aprendizaje."
      />

      <FilesFilter
        selectedTutor={selectedTutor}
        selectedType={selectedType}
        setSelectedTutor={setSelectedTutor}
        setSelectedType={setSelectedType}
        tutors={tutorsMock}
      />

      <FilesGrid files={filteredFiles} tutors={tutorsMock} />
    </div>
  );
}

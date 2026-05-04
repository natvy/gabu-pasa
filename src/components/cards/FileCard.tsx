"use client";

import type { AcademicFile } from "@/types/file";
import type { Tutor } from "@/types/tutor";

interface FileCardProps {
  file: AcademicFile;
  tutors: Tutor[];
}

export default function FileCard({ file, tutors }: FileCardProps) {
  const tutor = tutors.find((item) => item.id === file.uploadedBy);

  const getFileIcon = () => {
    switch (file.type) {
      case "pdf":
        return "📄";
      case "doc":
        return "📝";
      default:
        return "📁";
    }
  };

  return (
    <div className="app-card h-full overflow-hidden rounded-[1.5rem] transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
      <div className="flex h-40 items-center justify-center bg-[color:var(--primary-soft)]/60 text-5xl">
        {getFileIcon()}
      </div>

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-[color:var(--primary-strong)]">
          {file.name}
        </h3>

        <p className="text-xs app-muted">
          Subido por:{" "}
          <span className="font-medium text-[color:var(--foreground)]">
            {tutor ? tutor.name : "Autor desconocido"}
          </span>
        </p>
      </div>
    </div>
  );
}

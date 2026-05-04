"use client";

import RatingStars from "../feedback/RatingStars";
import Button from "../ui/Button";
import type { Student } from "@/types/student";

interface StudentProfileInfoProps {
  student: Student;
}

export default function StudentProfileInfo({
  student,
}: StudentProfileInfoProps) {
  return (
    <div className="app-card-strong space-y-6 p-6">
      <div className="flex flex-col gap-4 border-b border-[color:var(--border)] pb-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary-soft)] font-semibold text-[color:var(--primary)]">
            {student.name.charAt(0)}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-xl font-semibold text-[color:var(--primary-strong)]">
              {student.name}
            </h2>
            <p className="mt-1 text-sm app-muted">{student.level}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <RatingStars value={student.rating ?? 0} readonly />
          <span className="text-sm app-muted">{student.rating}/5</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[color:var(--primary)]">
              Necesidades
            </h3>

            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={() => console.log("Editar necesidades")}
            >
              Editar
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {student.needs.length === 0 && (
              <span className="text-xs app-muted">Sin necesidades registradas</span>
            )}

            {student.needs.map((need, index) => (
              <span
                key={index}
                className="rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs text-[color:var(--foreground)]"
              >
                {need}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[color:var(--primary)]">
              Intereses
            </h3>

            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={() => console.log("Editar intereses")}
            >
              Editar
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {student.interests.length === 0 && (
              <span className="text-xs app-muted">Sin intereses registrados</span>
            )}

            {student.interests.map((interest, index) => (
              <span
                key={index}
                className="rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs text-[color:var(--foreground)]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--border)] pt-4 text-xs app-muted">
        ID: {student.id}
      </div>
    </div>
  );
}

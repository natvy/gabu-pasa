"use client";

import RatingStars from "../feedback/RatingStars";
import Button from "../ui/Button";
import type { Tutor } from "@/types/tutor";

interface TutorProfileInfoProps {
  tutor: Tutor;
}

export default function TutorProfileInfo({ tutor }: TutorProfileInfoProps) {
  return (
    <div className="app-card-strong space-y-6 p-6">
      <div className="flex flex-col gap-4 border-b border-[color:var(--border)] pb-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-[color:var(--primary-strong)]">
            {tutor.name}
          </h2>
          <p className="mt-1 text-sm app-muted">{tutor.educationLevel}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <RatingStars value={tutor.rating ?? 0} readonly />
          <span className="text-sm app-muted">{tutor.rating ?? 0}/5</span>
        </div>
      </div>

      <p className="text-sm leading-7 app-muted">{tutor.description}</p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--primary)]">
              Materias
            </h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={() => console.log("Editar materias")}
            >
              Editar
            </Button>
          </div>

          <ul className="space-y-2">
            {tutor.subjects.map((subject, index) => (
              <li
                key={index}
                className="rounded-xl bg-[color:var(--surface-soft)] px-3 py-2 text-sm text-[color:var(--foreground)]"
              >
                {subject}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--primary)]">
              Habilidades
            </h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={() => console.log("Editar habilidades")}
            >
              Editar
            </Button>
          </div>

          <ul className="space-y-2">
            {tutor.skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-3 rounded-xl bg-[color:var(--surface-soft)] px-3 py-2 text-sm text-[color:var(--foreground)]"
              >
                <span>{skill.name}</span>
                <span className="shrink-0 text-xs app-muted">{skill.level}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--border)] pt-4 text-xs app-muted">
        ID: {tutor.id}
      </div>
    </div>
  );
}

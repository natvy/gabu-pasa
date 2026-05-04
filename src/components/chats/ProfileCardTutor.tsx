"use client";

import Button from "@/components/ui/Button";

export default function ProfileCardTutor() {
  return (
    <div className="border-b border-[color:var(--border)] p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-24 w-24 rounded-full bg-[color:var(--primary-soft)]" />

        <h2 className="font-semibold text-[color:var(--primary-strong)]">
          Nombre del tutor
        </h2>

        <Button size="sm">Editar</Button>
      </div>
    </div>
  );
}

"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AvailabilityConfigPanel() {
  return (
    <div className="app-card h-full space-y-6 p-6">
      <h2 className="text-xl font-semibold text-[color:var(--primary-strong)]">
        Horarios disponibles
      </h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[color:var(--primary)]">
            Ingresa tu horario escolar
          </label>

          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Button className="w-full">Compartir</Button>
            <Button variant="ghost" className="w-full">
              Ver
            </Button>
            <Button variant="ghost" className="w-full">
              Descargar
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-[color:var(--primary)]">
              Tiempo maximo por sesion
            </label>
            <Input type="number" placeholder="Minutos" className="w-full" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-[color:var(--primary)]">
              Tiempo minimo por sesion
            </label>
            <Input type="number" placeholder="Minutos" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

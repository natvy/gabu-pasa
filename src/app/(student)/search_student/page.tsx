"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import CardTutor from "@/components/cards/CardTutor";
import FilterPanel from "@/components/filters/FilterPanel";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SearchStudent() {
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const filteredTutors = tutorsMock.filter((tutor) =>
    selectedSubject ? tutor.subjects.includes(selectedSubject) : true,
  );

  const [query, setQuery] = useState("");

  return (
    <div className=" text text-gray-500  gap-6">
      {/*HEADER*/}
      <section className="mb-6">
        <h1 className="text-2xl text-gray-500 font-semibold ">Buscar Tutor</h1>
        <p className="text-gray-500">
          Encuentra el tutor perfecto para tus necesidades académicas.
        </p>
      </section>

      {/* Filtros y Busqueda*/}
      <section className=" grid grid-cols-2 gap-6 mb-6"></section>

      <div className="text text-gray-500 grid grid-cols-2 gap-6 col-span-1">
        <div className="col-span-1">
          {/*Parte del filtro*/}
          <div>
            <FilterPanel
              filters={[
                {
                  title: "Filtra por Materias",
                  options: [
                    { label: "Cálculo", value: "Cálculo" },
                    { label: "Álgebra", value: "Álgebra" },
                    { label: "Bases de datos", value: "Bases de datos" },
                    {
                      label: "Programacion Orientada a Objetos",
                      value: "Programacion Orientada a Objetos",
                    },
                  ],
                },
              ]}
              onChange={(_, value) => setSelectedSubject(value)}
            />
            {/*Parte del buscador*/}
            <div className="mb-4">
              <Input
                type="search"
                placeholder="Buscar tutor por nombre o materia..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  width: "100%",
                  padding: "8px 0",
                }}
              />
            </div>
          </div>

          {/* Tutors List */}
          <div className="col-span-1 bg-white p-4 rounded-xl shadow">
            <h3 className="font-semiold mb-4">Posibles Opciones</h3>
            {filteredTutors.map((tutor) => (
              <CardTutor key={tutor.id} {...tutor} />
            ))}
          </div>
        </div>
        {/*Best options*/}
        <div className="col-span-1 bg-white p-4 rounded-xl shadow mb-4">
          <h3 className="font-semibold mb-4">Mejores opciones</h3>

          {[...tutorsMock]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3)
            .map((tutor) => (
              <div key={tutor.id} className="mb-4">
                <CardTutor {...tutor} />

                <div className="mt-2 flex justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() =>
                      console.log(`Solicitud enviada a ${tutor.name}`)
                    }
                  >
                    Enviar solicitud
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

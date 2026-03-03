//AHORA SI IJAS DE SU PIN FLOI, AQUI VOY A PONER TODOS LOS FAKIN
// COMPONENTES QUE ME TARDE 1000 ANOS HACIENDO

import { tutorsMock } from "@/mocks/tutors.mock";
import { eventsMock } from "@/mocks/events.mock";
import CardTutor from "@/components/cards/CardTutor";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import ProgressCircle from "@/components/feedback/ProgressCircle";

export default function HomeStudent() {
  return (
    <div className="space-y-8">
      {/*HEADER*/}
      <section>
        <h1 className="text-2xl text-gray-500 font-semibold">Dashboard</h1>
        <p className="text-gray-500">
          Resumen general de tus tutorias y actividades recientes.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow ">
          <h3 className="text-sm text-gray-500">Tutorías completadas</h3>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm text-gray-500">Tutorías pendientes</h3>
          <p className="text-2xl font-bold">3</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
          <h3 className="text-sm text-gray-600 mb-2">Progreso académico</h3>
          <ProgressCircle value={70} max={100} />
        </div>
      </section>

      <section className="grid grid-cols-2 bg-white p-6 rounded-xl shadow text-gray-400">
       {/*Contenedor de mensajes recientes*/}
        <div className=" gap-2 mb-4 rounded-xl">
          <h2 className="text-lg text-gray-500 font-semibold p-3">
            Mensajes Recientes
          </h2>
          <section className="bg-blue-700 p-6 rounded-xl text-sm text-gray-500 gap-4">
            <section className="bg-blue-300 p-6 rounded-xl text-sm text-gray-500 gap-4"></section>
          </section>
        </div>

        {/*Contenedor de tutorias recientes y calendario*/}
        <div className=" gap-2 mb-4 rounded-xl">
          {/* Recent Tutors */}
          <div className=" gap-2 mb-4 rounded-xl">
            <h2 className="text-lg text-gray-500 font-semibold p-3">
              Últimos tutores
            </h2>

            <div className=" text-gray-500 gap-6">
              {tutorsMock.slice(0, 4).map((tutor) => (
                <CardTutor key={tutor.id} {...tutor} />
              ))}
            </div>
          </div>
          {/* Calendar */}
          <div className=" gap-2 mb-4 rounded-xl">
            <h2 className="text-lg text-gray-500 font-semibold p-3">
              Próximas tutorías
            </h2>
            <CalendarWrapper events={eventsMock} />
          </div>
        </div>

      </section>
    </div>
  );
}

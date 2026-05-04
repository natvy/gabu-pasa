"use client";

import StudentData from "@/components/profile/StudentData";
import StudentProfileInfo from "@/components/profile/StudentProfileInfo";
import PageHeader from "@/components/shared/PageHeader";
import ProfileAvatar from "@/components/shared/ProfileAvatar";
import { personalDataMocks } from "@/mocks/personal_data.mock";
import { studentsMock } from "@/mocks/students.mock";

export default function ProfileStudent() {
  const student = studentsMock[0] ?? null;

  if (!student) {
    return <div>No se encontro el estudiante.</div>;
  }

  const personalData = personalDataMocks.find((p) => p.id === student.id);

  return (
    <div className="app-page">
      <PageHeader
        title="Mi perfil"
        subtitle="Consulta y ajusta tu informacion personal y academica."
      />

      <div className="grid items-start gap-6 2xl:grid-cols-[minmax(280px,340px)_minmax(0,1fr)]">
        <aside className="space-y-6 2xl:sticky 2xl:top-8">
          <ProfileAvatar id={student.id} name={student.name} />
          {personalData && <StudentData data={personalData} />}
        </aside>

        <main className="min-w-0">
          <StudentProfileInfo student={student} />
        </main>
      </div>
    </div>
  );
}

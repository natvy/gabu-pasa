"use client";

import TutorData from "@/components/profile/TutorData";
import TutorProfileInfo from "@/components/profile/TutorProfileInfo";
import PageHeader from "@/components/shared/PageHeader";
import ProfileAvatar from "@/components/shared/ProfileAvatar";
import { personalDataMocks } from "@/mocks/personal_data.mock";
import { tutorsMock } from "@/mocks/tutors.mock";

export default function ProfileTutor() {
  const tutor = tutorsMock[0];
  const personalData = personalDataMocks.find((p) => p.id === tutor.id);

  if (!tutor) {
    return <div>No se encontro el tutor.</div>;
  }

  return (
    <div className="app-page">
      <PageHeader
        title="Mi perfil"
        subtitle="Verifica y actualiza tu informacion personal y academica."
      />

      <div className="grid items-start gap-6 2xl:grid-cols-[minmax(280px,340px)_minmax(0,1fr)]">
        <section className="space-y-6 2xl:sticky 2xl:top-8">
          <ProfileAvatar id={tutor.id} name={tutor.name} />
          {personalData && <TutorData data={personalData} />}
        </section>

        <section className="min-w-0">
          <TutorProfileInfo tutor={tutor} />
        </section>
      </div>
    </div>
  );
}

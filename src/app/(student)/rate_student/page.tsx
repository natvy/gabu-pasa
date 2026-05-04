"use client";

import RateTutorForm from "@/components/rating/RateTutorForm";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
  return (
    <div className="app-page">
      <PageHeader
        title="CALIFICA A TU TUTOR"
        subtitle="Otorga una calificacion justa e imparcial hacia la calidad de ensenanza de tu asesor."
      />

      <RateTutorForm />
    </div>
  );
}

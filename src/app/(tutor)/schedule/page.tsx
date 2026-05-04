"use client";

import AvailabilityConfigPanel from "@/components/availability/AvailabilityConfigPanel";
import RecommendationPanel from "@/components/availability/RecommendationPanel";
import AvailabilityCalendar from "@/components/availability/AvailabilityCalendar";
import PageHeader from "@/components/shared/PageHeader";

export default function TutorAvailabilityPage() {
  return (
    <div className="app-page">
      <PageHeader
        title="HORARIOS"
        subtitle="Establece los horarios en los cuales los estudiantes podrian solicitar una asesoria contigo."
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <AvailabilityConfigPanel />
        <RecommendationPanel />
      </div>

      <AvailabilityCalendar />
    </div>
  );
}

"use client";

import ChatSection from "@/components/dashboard/ChatSection";
import RecentTutors from "@/components/dashboard/RecentTutors";
import StatsSection from "@/components/dashboard/StatsSection";
import UpcomingSessions from "@/components/dashboard/UpcomingSessions";
import PageHeader from "@/components/shared/PageHeader";

export default function HomeStudent() {
  return (
    <div className="app-page">
      <PageHeader
        title="Dashboard del estudiante"
        subtitle="Resumen general de tus tutorias, conversaciones activas y proximas sesiones programadas."
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.95fr)]">
        <div className="space-y-6">
          <StatsSection />
          <ChatSection />
        </div>

        <div className="space-y-6">
          <RecentTutors />

          <div className="app-scrollbar max-h-[28rem] overflow-y-auto">
            <UpcomingSessions />
          </div>
        </div>
      </section>
    </div>
  );
}

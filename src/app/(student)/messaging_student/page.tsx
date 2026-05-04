"use client";

import ChatPanel from "@/components/chats/ChatPanel";
import PageHeader from "@/components/shared/PageHeader";

export default function MessagingStudent() {
  return (
    <div className="app-page">
      <PageHeader
        title="Mensajeria"
        subtitle="Da seguimiento a tus conversaciones con tutores y manten organizada la comunicacion academica."
      />

      <ChatPanel />
    </div>
  );
}

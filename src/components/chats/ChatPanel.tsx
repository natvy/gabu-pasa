"use client";

import { useState } from "react";
import { chatsMock } from "@/mocks/chats.mock";
import ProfileCard from "@/components/chats/ProfileCard";
import ChatList from "@/components/chats/ChatList";
import ChatWindow from "@/components/chats/ChatWindow";

export default function ChatPanel() {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const activeChat = chatsMock.find((chat) => chat.id === activeChatId);

  return (
    <div className="grid min-h-[calc(100vh-16rem)] grid-cols-1 gap-6 xl:grid-cols-[minmax(320px,360px)_minmax(0,1fr)]">
      <aside className="app-card-strong flex min-h-[420px] flex-col overflow-hidden">
        <ProfileCard />

        <ChatList
          chats={chatsMock}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
        />
      </aside>

      <section className="app-card-strong min-h-[420px] overflow-hidden">
        <ChatWindow chat={activeChat} currentUserId="student-user-id" />
      </section>
    </div>
  );
}

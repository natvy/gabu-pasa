"use client";

import { useState } from "react";
import ChatListHorizontal from "@/components/chats/ChatListHorizontal";
import ChatWindow from "@/components/chats/ChatWindow";
import { chatsMock } from "@/mocks/chats.mock";

export default function ChatSection() {
  const [activeChatId, setActiveChatId] = useState<string | null>(chatsMock[0]?.id ?? null);

  const activeChat = chatsMock.find((chat) => chat.id === activeChatId);

  return (
    <div className="app-card flex h-auto flex-col gap-4 p-5 lg:h-[440px] lg:flex-row">
      <div className="app-scrollbar rounded-[1.25rem] border border-[color:var(--border)] bg-white/55 lg:w-24 lg:overflow-y-auto">
        <ChatListHorizontal
          chats={chatsMock}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
        />
      </div>

      <section className="min-h-[320px] flex-1 overflow-hidden rounded-[1.25rem] border border-[color:var(--border)] bg-white/65">
        <ChatWindow chat={activeChat} currentUserId="student-user-id" />
      </section>
    </div>
  );
}

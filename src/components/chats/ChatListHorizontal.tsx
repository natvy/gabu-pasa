"use client";

import { tutorsMock } from "@/mocks/tutors.mock";
import type { Chat } from "@/types/chat";

interface ChatIconBarProps {
  chats: Chat[];
  activeChatId: string | null;
  onSelectChat: (id: string) => void;
}

export default function ChatIconBar({
  chats,
  activeChatId,
  onSelectChat,
}: ChatIconBarProps) {
  const currentStudentId = "s1";

  return (
    <div className="flex gap-3 overflow-x-auto p-3 lg:h-full lg:flex-col lg:overflow-x-visible lg:overflow-y-auto">
      {chats.map((chat) => {
        const tutorId = chat.participantIds.find((id) => id !== currentStudentId);
        const tutor = tutorsMock.find((item) => item.id === tutorId);
        const name = tutor?.name ?? "Tutor";
        const isActive = activeChatId === chat.id;

        return (
          <button
            key={chat.id}
            type="button"
            onClick={() => onSelectChat(chat.id)}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold transition ${
              isActive
                ? "bg-[color:var(--primary)] text-white shadow-lg shadow-[rgba(38,70,83,0.18)]"
                : "bg-white text-[color:var(--primary)] hover:bg-[color:var(--surface-accent)]"
            }`}
            title={name}
          >
            {name.charAt(0)}
          </button>
        );
      })}
    </div>
  );
}

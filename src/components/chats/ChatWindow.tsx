"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import ChatBubble from "@/components/chats/ChatBubble";
import { tutorsMock } from "@/mocks/tutors.mock";
import type { Chat } from "@/types/chat";
import type { Message } from "@/types/message";

interface ChatWindowProps {
  chat: Chat | undefined;
  currentUserId: string;
}

export default function ChatWindow({ chat, currentUserId }: ChatWindowProps) {
  const [input, setInput] = useState("");
  const [localMessages, setLocalMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Solo hace scroll cuando el usuario envía un mensaje nuevo,
  // no al montar el componente ni al cambiar de chat.
  useEffect(() => {
    if (localMessages.length > 0) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [localMessages]);

  const recipientName = useMemo(() => {
    if (!chat) return "";

    const otherParticipantId = chat.participantIds.find((id) => id !== "s1");
    return tutorsMock.find((tutor) => tutor.id === otherParticipantId)?.name ?? "Tutor";
  }, [chat]);

  if (!chat) {
    return (
      <div className="flex h-full items-center justify-center px-6 text-sm app-muted">
        Selecciona un chat para ver la conversacion.
      </div>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: crypto.randomUUID(),
      senderId: currentUserId,
      receiverId: "tutor-id-ejemplo",
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    setLocalMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const allMessages: Message[] = [...chat.messages, ...localMessages];
  const visibleMessages = allMessages.slice(-6);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-[color:var(--border)] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--secondary)]">
          Conversacion activa
        </p>
        <p className="mt-1 text-lg font-semibold text-[color:var(--primary)]">
          {recipientName}
        </p>
      </div>

      <div className="app-scrollbar flex-1 overflow-y-auto px-4 py-5">
        <div className="flex flex-col gap-2">
          {visibleMessages.map((msg) => (
            <ChatBubble
              key={msg.id}
              message={msg.content}
              sender={msg.senderId === currentUserId ? "me" : "other"}
              timestamp={new Date(msg.timestamp).toLocaleTimeString()}
            />
          ))}

          <div ref={bottomRef} />
        </div>
      </div>

      <div className="border-t border-[color:var(--border)] px-4 py-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="w-full flex-1 rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] outline-none transition placeholder:text-[color:var(--muted)] focus:ring-2 focus:ring-[color:var(--primary-soft)]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
          />

          <Button onClick={handleSend}>Enviar</Button>
        </div>
      </div>
    </div>
  );
}
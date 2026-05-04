interface ChatBubbleProps {
  message: string;
  sender: "me" | "other";
  timestamp: string;
}

export default function ChatBubble({
  message,
  sender,
  timestamp,
}: ChatBubbleProps) {
  const isMe = sender === "me";

  return (
    <div
      className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-[1.35rem] px-4 py-3 text-sm shadow-sm md:max-w-[70%] ${
          isMe
            ? "bg-[color:var(--primary)] text-white"
            : "bg-[color:var(--secondary-soft)] text-[color:var(--primary)]"
        }`}
      >
        <p>{message}</p>
      </div>

      <span
        className={`mt-1 text-[11px] app-muted ${isMe ? "text-right" : "text-left"}`}
      >
        {timestamp}
      </span>
    </div>
  );
}

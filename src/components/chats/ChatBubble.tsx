// src/components/chats/ChatBubble.tsx
// Este es un componente de burbuja de chat reutilizable. 
// Acepta un mensaje, un remitente ("me" o "other") y una 
// marca de tiempo.

//debe alinearse segun el sender, 
// pero aun no tiene sroll automatico
interface ChatBubbleProps {
  message: string;
  sender: "me" | "other";
  timestamp: string;
}

// Este componente muestra un mensaje de chat con un estilo diferente
export default function ChatBubble({ message, sender, timestamp }: ChatBubbleProps) {
  return (
    <div className={`chat-bubble ${sender === "me" ? "me" : "other"}`} style={{ maxWidth: "60%", margin: sender === "me" ? "0 auto 0 0" : "0 0 0 auto", padding: "8px", borderRadius: "12px", backgroundColor: sender === "me" ? "#DCF8C6" : "#E5E5EA", marginBottom: "8px" }}>
      <p>{message}</p>
      <span style={{ fontSize: "0.75em", color: "#999", marginTop: "4px", display: "block", textAlign: sender === "me" ? "right" : "left" }}>{timestamp}</span>
    </div>
  );
}
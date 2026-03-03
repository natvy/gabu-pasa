// src/components/cards/FileCard.tsx
// Este es un componente de tarjeta para mostrar información
// de un archivo. Acepta props como name, type, previewUrl y 
// uploadedBy.

interface FileCardProps {
  name: string;
  type: "pdf" | "png" | "jpg" | "doc";
  fileSize?: string;
  previewUrl?: string;
  uploadedBy: string;
  onClick?: () => void;
}
// Componente de tarjeta para archivo
export default function FileCard({ name, type, previewUrl, uploadedBy }: FileCardProps) {
  return (
    <div className="file-card" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "8px" }}>
      <h3>{name}</h3>
      <p><strong>Type:</strong> {type.toUpperCase()}</p>
      {previewUrl && <img src={previewUrl} alt={name} style={{ maxWidth: "100%", marginTop: "8px" }} />}
      <p style={{ marginTop: "8px" }}><strong>Uploaded by:</strong> {uploadedBy}</p>
    </div>
  );
}
// src/components/ui/TextArea.tsx
// Este es un componente de input reutilizable que acepta
// un label y un mensaje de error opcional. Se extiende de las
// propiedades estándar de un input HTML, lo que permite usar
// cualquier atributo válido de un input.


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
// Componente de input con label y mensaje de error
export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="input-group" style={{ marginBottom: "16px" }}>
      {label && <label style={{ display: "block", marginBottom: "4px" }}>{label}</label>}
      <input className={`input ${error ? "input-error" : ""}`} {...props} style={{ padding: "8px", border: error ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", width: "100%" }} />
      {error && <p style={{ color: "red", marginTop: "4px" }}>{error}</p>}
    </div>
  );
}
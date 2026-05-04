interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-[color:var(--primary)]">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full rounded-2xl border bg-white/85 px-4 py-3 text-sm text-[color:var(--foreground)]
          shadow-sm transition focus:outline-none focus:ring-2 placeholder:text-[color:var(--muted)]
          ${error
            ? "border-red-400 focus:ring-red-300"
            : "border-[color:var(--border)] focus:ring-[color:var(--primary-soft)]"}
          ${className}
        `}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

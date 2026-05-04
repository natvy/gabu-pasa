interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function TextArea({
  label,
  error,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-[color:var(--primary)]">
          {label}
        </label>
      )}

      <textarea
        {...props}
        className={`
          min-h-28 w-full rounded-2xl border bg-white/85 px-4 py-3 text-sm text-[color:var(--foreground)]
          transition focus:outline-none focus:ring-2 placeholder:text-[color:var(--muted)]
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

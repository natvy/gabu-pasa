interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export default function Select({
  label,
  error,
  className = "",
  children,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-[color:var(--primary)]">
          {label}
        </label>
      )}

      <select
        {...props}
        className={`
          w-full rounded-2xl border bg-white/85 px-4 py-3 text-sm text-[color:var(--foreground)]
          transition focus:outline-none focus:ring-2
          ${error
            ? "border-red-400 focus:ring-red-300"
            : "border-[color:var(--border)] focus:ring-[color:var(--primary-soft)]"}
          ${className}
        `}
      >
        {children}
      </select>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

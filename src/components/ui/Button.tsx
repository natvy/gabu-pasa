import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = {
    primary:
      "bg-[color:var(--primary)] text-white shadow-lg shadow-[rgba(38,70,83,0.18)] hover:-translate-y-0.5 hover:bg-[color:var(--primary-strong)] focus:ring-[color:var(--primary)]",
    secondary:
      "bg-[color:var(--secondary)] text-white shadow-lg shadow-[rgba(217,131,91,0.18)] hover:-translate-y-0.5 hover:bg-[color:var(--secondary-strong)] focus:ring-[color:var(--secondary)]",
    danger:
      "bg-[#c75c5c] text-white shadow-lg shadow-[rgba(199,92,92,0.18)] hover:-translate-y-0.5 hover:bg-[#a94d4d] focus:ring-[#c75c5c]",
    ghost:
      "border border-[color:var(--border)] bg-white/65 text-[color:var(--primary)] hover:bg-[color:var(--primary-soft)] focus:ring-[color:var(--primary-soft)]",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

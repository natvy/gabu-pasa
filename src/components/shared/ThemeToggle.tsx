"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return (document.documentElement.dataset.theme as Theme | undefined) ?? "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);
  const isDark = theme === "dark";

  const handleToggle = () => {
    const nextTheme: Theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("gabu-pasa-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="theme-toggle fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 md:bottom-auto md:right-6 md:top-6"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          isDark ? "bg-[color:var(--secondary)]" : "bg-[color:var(--accent)]"
        }`}
      />
      <span suppressHydrationWarning>
        {isDark ? "Modo claro" : "Modo oscuro"}
      </span>
    </button>
  );
}

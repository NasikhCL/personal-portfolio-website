"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 text-xs transition-colors duration-200 cursor-pointer"
      style={{ color: "var(--color-text-secondary)" }}
      aria-label="Toggle theme"
    >
      <span
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all duration-200"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: !isDark ? "var(--color-surface)" : "transparent",
          color: !isDark ? "var(--color-text-primary)" : "var(--color-text-muted)",
        }}
      >
        ☀ Light
      </span>
      <span
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all duration-200"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: isDark ? "var(--color-surface)" : "transparent",
          color: isDark ? "var(--color-text-primary)" : "var(--color-text-muted)",
        }}
      >
        ◑ Dark
      </span>
    </button>
  );
}

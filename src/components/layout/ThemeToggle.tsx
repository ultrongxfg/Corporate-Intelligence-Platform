"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-[22px] rounded-full border border-[var(--border-app)] bg-[var(--bg-surface)] relative"
    >
      <span
        className="absolute top-[2px] w-4 h-4 rounded-full bg-[var(--accent)] transition-all"
        style={{ left: isDark ? "2px" : "20px" }}
      />
    </button>
  );
}
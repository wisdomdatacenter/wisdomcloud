"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="select-none rounded-full border border-slate-300 dark:border-white/10
                 bg-white dark:bg-white/5 px-3 py-1 text-xs
                 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

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
    <div>
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="select-none rounded-full border
        border-slate-50 shadow px-2 py-0.5
        text-xs hover:bg-slate-200
        bg-slate-100
        dark:bg-white dark:text-slate-700
        "
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--text-muted)",
      }}
    >
      {isDark ? <Sun size={13} /> : <Moon size={13} />}
    </button>
  );
}

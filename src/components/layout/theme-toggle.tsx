"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cycle = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  return (
    <button
      onClick={cycle}
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
      {theme === "dark" && <Moon size={13} />}
      {theme === "light" && <Sun size={13} />}
      {theme === "system" && <Monitor size={13} />}
    </button>
  );
}

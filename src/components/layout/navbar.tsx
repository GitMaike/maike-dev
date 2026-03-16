"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px 40px",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Link
        href={`/${locale}`}
        style={{
          fontFamily: "monospace",
          fontSize: 13,
          fontWeight: 700,
          color: "var(--accent)",
          letterSpacing: "0.18em",
          textDecoration: "none",
        }}
      >
        maike.dev ◆
      </Link>

      <div
        style={{
          display: "flex",
          gap: 28,
          marginLeft: "auto",
          marginRight: 20,
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <ThemeToggle />
    </nav>
  );
}

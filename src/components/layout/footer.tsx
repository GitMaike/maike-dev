import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      style={{
        padding: "24px 40px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 10,
          color: "var(--text-muted)",
          letterSpacing: "0.12em",
        }}
      >
        maike.dev © 2025
      </span>

      <a
        href="https://github.com/GitMaike"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "monospace",
          fontSize: 10,
          color: "var(--text-muted)",
          letterSpacing: "0.12em",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        GitHub
      </a>
    </footer>
  );
}

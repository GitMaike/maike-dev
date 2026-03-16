import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={`/pt/projects/${project.slug}`}
      style={{
        display: "block",
        padding: "24px",
        border: "1px solid var(--border)",
        textDecoration: "none",
        transition: "border-color 0.2s",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 9,
          color: "var(--text-faint)",
          letterSpacing: "0.2em",
          marginBottom: 12,
        }}
      >
        {project.date}
      </p>

      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "var(--text)",
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          marginBottom: 8,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
          lineHeight: 1.6,
          marginBottom: 16,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              padding: "2px 6px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

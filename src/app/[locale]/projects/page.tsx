import { getAllProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/project/project-card";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main style={{ padding: "48px 40px" }}>
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 9,
          color: "var(--text-faint)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        // trabalhos selecionados
      </p>
      <h1
        style={{
          fontSize: 32,
          fontWeight: 900,
          color: "var(--text)",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          marginBottom: 40,
        }}
      >
        Projetos
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 1,
          background: "var(--border)",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}

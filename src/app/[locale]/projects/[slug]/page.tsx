import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main style={{ padding: "48px 40px", maxWidth: 800 }}>
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
        {project.frontmatter.date}
      </p>

      <h1
        style={{
          fontSize: 36,
          fontWeight: 900,
          color: "var(--text)",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}
      >
        {project.frontmatter.title}
      </h1>

      <p
        style={{
          fontSize: 14,
          color: "var(--text-muted)",
          marginBottom: 24,
          lineHeight: 1.7,
        }}
      >
        {project.frontmatter.description}
      </p>

      <div
        style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 40 }}
      >
        {project.frontmatter.stack.map((tech) => (
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

      <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
        {project.frontmatter.githubUrl && (
          <a
            href={project.frontmatter.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              padding: "6px 14px",
              textDecoration: "none",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            GitHub →
          </a>
        )}

        {project.frontmatter.liveUrl && (
          <a
            href={project.frontmatter.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: "#08090e",
              background: "var(--accent)",
              border: "1px solid var(--accent)",
              padding: "6px 14px",
              textDecoration: "none",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Live →
          </a>
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 40,
          color: "var(--text-muted)",
          lineHeight: 1.8,
          fontSize: 15,
        }}
      >
        <MDXRemote source={project.content} />
      </div>
    </main>
  );
}

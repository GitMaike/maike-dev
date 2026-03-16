import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main style={{ padding: "48px 40px", maxWidth: 680 }}>
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
        {formatDate(post.frontmatter.date)}
      </p>

      <h1
        style={{
          fontSize: 32,
          fontWeight: 900,
          color: "var(--text)",
          letterSpacing: "-0.02em",
          marginBottom: 16,
          lineHeight: 1.1,
        }}
      >
        {post.frontmatter.title}
      </h1>

      <p
        style={{
          fontSize: 14,
          color: "var(--text-muted)",
          marginBottom: 48,
          lineHeight: 1.7,
        }}
      >
        {post.frontmatter.description}
      </p>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 40,
          color: "var(--text-muted)",
          lineHeight: 1.9,
          fontSize: 15,
        }}
      >
        <MDXRemote source={post.content} />
      </div>
    </main>
  );
}

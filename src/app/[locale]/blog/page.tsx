import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";

export default function BlogPage() {
  const posts = getAllPosts();

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
        // notas e aprendizados
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
        Blog
      </h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}

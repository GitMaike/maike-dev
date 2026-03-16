import Link from "next/link";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/pt/blog/${post.slug}`}
      style={{
        display: "block",
        padding: "24px 0",
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
      }}
    >
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 9,
          color: "var(--text-faint)",
          letterSpacing: "0.2em",
          marginBottom: 8,
        }}
      >
        {formatDate(post.date)}
      </p>

      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.01em",
          marginBottom: 8,
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          lineHeight: 1.6,
        }}
      >
        {post.description}
      </p>
    </Link>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, BlogPost } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

function readDir(dir: string): string[] {
  const fullPath = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((f) => f.endsWith(".mdx"));
}

function parseFile<T>(dir: string, filename: string): T {
  const fullPath = path.join(CONTENT_DIR, dir, filename);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data } = matter(raw);
  const slug = filename.replace(".mdx", "");
  return { slug, ...data } as T;
}

export function getAllProjects(): Project[] {
  return readDir("projects")
    .map((f) => parseFile<Project>("projects", f))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPosts(): BlogPost[] {
  return readDir("blog")
    .map((f) => parseFile<BlogPost>("blog", f))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProjectBySlug(slug: string) {
  const fullPath = path.join(CONTENT_DIR, "projects", `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as Project, content };
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(CONTENT_DIR, "blog", `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as BlogPost, content };
}

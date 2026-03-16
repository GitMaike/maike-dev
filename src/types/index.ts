export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

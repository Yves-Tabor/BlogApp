export interface Post {
  id: number;
  title: string;
  img?: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  excerpt: string;
}

export type Posts = Post;

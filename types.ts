
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  readingTime: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  content: string; // MDX content as string
}

export interface PostStats {
  views: number;
  likes: number;
  commentsCount: number;
}

export interface Comment {
  id: string;
  postSlug: string;
  name: string;
  content: string;
  createdAt: string;
}

export interface DBState {
  views: Record<string, number>;
  likes: Record<string, number>;
  userLikes: Record<string, boolean>; // To prevent multi-likes (local browser only)
  comments: Comment[];
}

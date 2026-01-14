
import { DBState, Comment, PostStats } from '../types';

const STORAGE_KEY = 'givemeamemory_db_v1';

const getInitialState = (): DBState => ({
  views: {},
  likes: {},
  userLikes: {},
  comments: []
});

const loadDB = (): DBState => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : getInitialState();
};

const saveDB = (state: DBState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const dbService = {
  getStats: (slug: string): PostStats => {
    const db = loadDB();
    const views = db.views[slug] || 0;
    const likes = db.likes[slug] || 0;
    const commentsCount = db.comments.filter(c => c.postSlug === slug).length;
    return { views, likes, commentsCount };
  },

  incrementView: (slug: string) => {
    const db = loadDB();
    db.views[slug] = (db.views[slug] || 0) + 1;
    saveDB(db);
  },

  toggleLike: (slug: string): { liked: boolean; total: number } => {
    const db = loadDB();
    const alreadyLiked = db.userLikes[slug] || false;
    
    if (alreadyLiked) {
      db.likes[slug] = Math.max(0, (db.likes[slug] || 0) - 1);
      db.userLikes[slug] = false;
    } else {
      db.likes[slug] = (db.likes[slug] || 0) + 1;
      db.userLikes[slug] = true;
    }
    
    saveDB(db);
    return { liked: !alreadyLiked, total: db.likes[slug] };
  },

  isLiked: (slug: string): boolean => {
    const db = loadDB();
    return db.userLikes[slug] || false;
  },

  getComments: (slug: string): Comment[] => {
    const db = loadDB();
    return db.comments
      .filter(c => c.postSlug === slug)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  addComment: (slug: string, name: string, content: string) => {
    const db = loadDB();
    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      postSlug: slug,
      name,
      content,
      createdAt: new Date().toISOString()
    };
    db.comments.push(newComment);
    saveDB(db);
    return newComment;
  }
};

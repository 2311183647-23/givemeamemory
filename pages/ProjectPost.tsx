
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/posts';
import { dbService } from '../services/dbService';
import LikeButton from '../components/LikeButton';
import Comments from '../components/Comments';

const ProjectPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;
  const [stats, setStats] = useState(slug ? dbService.getStats(slug) : { views: 0, likes: 0, commentsCount: 0 });

  useEffect(() => {
    if (slug) {
      dbService.incrementView(slug);
      setStats(dbService.getStats(slug));
      window.scrollTo(0, 0);
    }
  }, [slug]);

  const refreshStats = () => {
    if (slug) {
      setStats(dbService.getStats(slug));
    }
  };

  if (!post) {
    return (
      <div className="max-w-[980px] mx-auto py-24 px-4 text-center">
        <h1 className="text-2xl font-fahkwang">未找到对应的文章</h1>
        <Link to="/projects" className="text-textMuted underline mt-4 block">返回文章列表</Link>
      </div>
    );
  }

  return (
    <article className="max-w-[980px] mx-auto px-4 md:px-0 min-h-screen">
      {/* Article Header */}
      <header className="pt-16 pb-8">
        <h1 className="text-[44px] leading-[1.4em] font-fahkwang text-textMain mb-4">
          {post.title}
        </h1>
        <div className="flex items-center space-x-1 text-[13px] text-textMuted font-sans">
          <span>作者：{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* Main Cover Image - 保持原始比例，不裁剪 */}
      <div className="w-full my-6">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div 
        className="mdx-content text-[16px] leading-[1.7em] text-textMain font-sans max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="mt-12 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <Link 
            key={tag} 
            to={`/projects/tag/${tag}`}
            className="text-[12px] uppercase tracking-wider text-textMuted px-3 py-1 border border-border hover:border-textMain transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* Footer Stats & Interactions */}
      <div className="mt-12 py-8 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-1 text-[13px] text-textMuted">
            <span>{stats.views} 次浏览</span>
            <span>·</span>
            <span>{stats.commentsCount} 条留言</span>
          </div>
          <LikeButton slug={post.slug} onUpdate={refreshStats} />
        </div>

        {/* Comments Section */}
        <Comments slug={post.slug} />
      </div>
    </article>
  );
};

export default ProjectPost;

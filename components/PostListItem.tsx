
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, PostStats } from '../types';
import { dbService } from '../services/dbService';

interface PostListItemProps {
  post: BlogPost;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const stats = dbService.getStats(post.slug);

  return (
    <div className="py-6 border-b border-border last:border-b-0">
      <Link 
        to={`/projects/${post.slug}`} 
        className="flex flex-col md:flex-row md:items-start group"
      >
        {/* Cover Image */}
        <div className="w-full md:w-[320px] h-[200px] flex-shrink-0 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="md:ml-6 mt-4 md:mt-0 flex flex-col flex-grow">
          <h2 className="text-[22px] leading-[30px] md:leading-[30px] text-textMain mt-[18px] md:mt-[0px] font-sans group-hover:opacity-60 transition-opacity">
            {post.title}
          </h2>
          
          <p className="text-[14px] leading-[1.4em] text-textMain mt-3 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center space-x-1 text-[13px] leading-[18px] text-textMuted font-sans">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="mt-1 flex items-center space-x-1 text-[13px] leading-[18px] text-textMuted font-sans">
            <span>{stats.views} 次浏览</span>
            <span>·</span>
            <span>{stats.commentsCount} 条留言</span>
            <span>·</span>
            <span>{stats.likes} 次喜欢</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;

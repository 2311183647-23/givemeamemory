
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface ProjectListItemProps {
  post: BlogPost & { views: number; likes: number; commentsCount: number };
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ post }) => {
  return (
    <div className="py-16 px-6 md:px-0 border-b border-border/30 hover:bg-white/40 transition-colors">
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        <div className="flex-shrink-0 w-full md:w-[292px] h-[219px] overflow-hidden border border-border/20">
          <Link to={`/projects/${post.slug}`}>
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex-grow pt-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-[32px] h-[32px] rounded-full overflow-hidden bg-gray-200">
              <img src="https://i.pravatar.cc/100?u=charlotte" alt="Charlotte" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-textMuted uppercase tracking-widest font-light">
              <span className="text-textMain font-bold">Charlotte</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
          </div>

          <h2 className="text-[22px] font-fahkwang font-normal leading-tight mb-4 hover:opacity-60 transition-opacity">
            <Link to={`/projects/${post.slug}`}>{post.title}</Link>
          </h2>

          <p className="text-[14px] text-textMuted leading-relaxed mb-8 line-clamp-2 font-light">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-[10px] text-textMuted tracking-widest font-medium">
            <div className="flex items-center space-x-6">
              <span>{post.views} 次浏览</span>
              <span>{post.commentsCount} 条留言</span>
            </div>
            <div className="flex items-center space-x-2 text-red-400">
              <span>{post.likes}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;

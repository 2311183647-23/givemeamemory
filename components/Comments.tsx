
import React, { useState, useEffect } from 'react';
import { dbService } from '../services/dbService';
import { Comment } from '../types';

interface CommentsProps {
  slug: string;
}

const Comments: React.FC<CommentsProps> = ({ slug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setComments(dbService.getComments(slug));
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);
    // Simulate API lag
    setTimeout(() => {
      dbService.addComment(slug, name, content);
      setComments(dbService.getComments(slug));
      setName('');
      setContent('');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="mt-12">
      <h3 className="text-[18px] mb-8 font-sans border-t border-border pt-12">
        {comments.length} 条留言
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-12 space-y-4">
        <div>
          <input
            type="text"
            placeholder="署名 / Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-border p-3 text-[14px] focus:outline-none focus:border-textMain"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="写点什么......"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-border p-3 text-[14px] focus:outline-none focus:border-textMain"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-textMain text-white px-8 py-2 text-[14px] hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? '发送中...' : '发布留言'}
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-8">
        {comments.length === 0 ? (
          <p className="text-textMuted text-[14px]">还没有人留言，来写下第一句话。</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="pb-8 border-b border-border last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] font-medium text-textMain">{comment.name}</span>
                <span className="text-[12px] text-textMuted">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-[14px] text-textMain whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;

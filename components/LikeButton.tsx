
import React, { useState, useEffect } from 'react';
import { dbService } from '../services/dbService';

interface LikeButtonProps {
  slug: string;
  onUpdate: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ slug, onUpdate }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setIsLiked(dbService.isLiked(slug));
    setLikesCount(dbService.getStats(slug).likes);
  }, [slug]);

  const handleLike = () => {
    const { liked, total } = dbService.toggleLike(slug);
    setIsLiked(liked);
    setLikesCount(total);
    onUpdate();
  };

  return (
    <button 
      onClick={handleLike}
      className="flex items-center space-x-2 px-4 py-2 border border-border hover:bg-gray-50 transition-colors rounded-sm"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-textMuted fill-transparent'}`} 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={isLiked ? 0 : 1}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <span className="text-[13px] text-textMain">{likesCount}</span>
    </button>
  );
};

export default LikeButton;

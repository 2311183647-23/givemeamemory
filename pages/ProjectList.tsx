
import React, { useEffect } from 'react';
import ProjectListItem from '../components/ProjectListItem';
import { POSTS } from '../data/posts';

const EXTENDED_POSTS = POSTS.map((post, idx) => ({
  ...post,
  views: 42 - (idx * 5),
  commentsCount: 0,
  likes: 4 - idx
}));

const ProjectList: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-980 py-16 min-h-screen">
      <div className="mb-14 text-center">
        <h1 className="text-[44px] font-fahkwang mb-4 uppercase tracking-tighter">设计项目</h1>
        <p className="text-textMuted text-[13px] tracking-widest font-light">来自一些成长后回头看可能不完美但都被用心对待的课程作业</p>
      </div>

      <div className="flex flex-col space-y-2 border-t border-border/40">
        {EXTENDED_POSTS.map(post => (
          <ProjectListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

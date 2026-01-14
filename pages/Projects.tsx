
import React from 'react';
import starvalley from '../src/assets/project/starvalley.jpg';
import tap1 from '../src/assets/project/tap1.PNG';
import tap2 from '../src/assets/project/tap2.PNG';
import tap3 from '../src/assets/project/tap3.PNG';
import tap4 from '../src/assets/project/tap4.PNG';
import tap5 from '../src/assets/project/tap5.PNG';
import untitled1 from '../src/assets/project/Untitled_1.jpg';

interface ProjectItem {
  title: string;
  description: string;
  coverImage: string;
  images: string[];
}

const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: "未命名",
      description: "一次关于形体、空间，以及抽象与再现边界的探索。画面停留在过渡的瞬间，意义在光影与构图的交错中慢慢浮现。通过细致的凝视与克制的取舍，它邀请观看者在其中写下各自的故事。",
      coverImage: untitled1,
      images: [untitled1]
    },
    {
      title: "星谷",
      description: "一次穿梭于真实与想象之间的地景漫游，天空与地表在此交叠。星谷更像是一则关于“地点”与“记忆”的冥想，试着回答我们如何在世界上为自己的经验标注坐标。这组作品也谈论“导航”——既是地理意义上的，也是情感与精神层面的——在既熟悉又陌生的空间中缓慢行走。",
      coverImage: starvalley,
      images: [starvalley]
    },
    {
      title: "TAP 系列",
      description: "一组围绕节奏、重复与细微差异展开的视觉练习。TAP 更像一场有意识的实验：在有规律的框架中，观察每一次轻微偏移所带来的意义变化。每一帧都延续前一帧，又保留自己的性格，它们并排在一起时，缓慢组成了一条关于“注视”本身的叙事线索。",
      coverImage: tap1,
      images: [tap1, tap2, tap3, tap4, tap5]
    }
  ];

  return (
    <div className="container-980 py-16 min-h-screen">
      <div className="mb-16 text-center">
        <h1 className="text-[44px] font-fahkwang mb-4">作品项目</h1>
        <p className="text-textMuted text-[16px]">关于时间与运动的若干切片。</p>
      </div>

      <div className="space-y-32">
        {projects.map((project, projectIdx) => (
          <div key={projectIdx} className="border-b border-border pb-24 last:border-b-0">
            {/* Project Header */}
            <div className="mb-12">
              <h2 className="text-[36px] font-fahkwang mb-6 text-oceanDeep">{project.title}</h2>
              <p className="text-[16px] leading-relaxed text-textMain font-light max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Cover Image */}
            <div className="mb-8">
              <div className="w-full overflow-hidden bg-gray-50 rounded-sm">
                <img 
                  src={project.coverImage} 
                  alt={`${project.title} - Cover`}
                  className="w-full h-auto block hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>

            {/* Additional Images Grid */}
            {project.images.length > 1 && (
              <div className="columns-1 md:columns-3 gap-6">
                {project.images.slice(1).map((img, imgIdx) => (
                  <div key={imgIdx} className="break-inside-avoid mb-6 group">
                    <div className="w-full overflow-hidden bg-gray-50 rounded-sm">
                      <img 
                        src={img} 
                        alt={`${project.title} - ${imgIdx + 2}`}
                        className="w-full h-auto block hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


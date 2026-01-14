
import React, { useEffect } from 'react';
import heroImage from '../src/assets/about/hero.jpg';
import bloodingImage from '../src/assets/about/blooding.jpg';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineEvents = [
    { year: "2023", title: "进入浙江大学", location: "Hangzhou", description: "第一次把未来写进日程表里，也第一次意识到，生活并不会总按计划前进。" },
    { year: "2024.1", title: "进入工业设计系", location: "Zhejiang University", description: "开始用“设计”理解世界：材料、结构、人与情绪之间，原来都可以被温柔地描述。" },
    { year: "2024.3", title: "休学与治疗", location: "Somewhere to breathe", description: "暂时离开课堂，学着把自己从崩塌里一点点扶起。药物与时间成为新的刻度。" },
    { year: "2024.9", title: "复学", location: "Hangzhou", description: "回到校园，仍旧笨拙，但开始相信：缓慢也算前进，活着本身就是一种持续的练习。" },
    { year: "2025.3", title: "遇见贝斯", location: "浙港国际", description: "捡到一只小猫，取名贝斯。它很轻，却像一束微小的重力，把日常重新拴住。" },
  ];
  
  return (
    <div className="container-980 py-16 min-h-screen animate-fade-in" data-section-title="Biography">
      <div className="flex flex-col md:flex-row gap-16 mb-24 items-start">
        <div className="w-full md:w-2/3">
          <h1 className="text-[48px] font-fahkwang leading-tight mb-8">关于小美</h1>
          <div className="prose prose-lg text-textMain">
            <p className="mb-6 leading-relaxed">
              陈美兮，这段时间更愿意叫自己陈小美。浙江大学工业设计系学生。2023 年进入浙江大学，2024 年 1 月转入工业设计系，日常在学习、创作与自我修复之间来回摆动。
            </p>
            <p className="mb-6 leading-relaxed">
              大一曾因抑郁休学，一度把“放弃”当作最省力的答案。治疗从 2024 年 3 月开始，药物让时间变得更钝、更慢，但也因此留下了重新呼吸的缝隙。后来去了很多地方穷游，路上遇到新的朋友，也被老朋友接住，那些短暂的同行与安慰像微弱的灯，照亮了返回生活的路。
            </p>
            <p className="mb-6 leading-relaxed">
              2024 年 9 月复学后，日子仍然阴影重重，情绪也并不总是稳定。大量药物仍在持续，像一种不得不携带的背景噪声。但同时，世界也开始出现一些可以被记录的小证据：风从树叶间穿过的声音、深夜便利店的白光、走在路上突然出现的空旷与平静。
            </p>
            <p className="mb-6 leading-relaxed">
              这个个人网站像一间安静的房间，用来存放那些不适合在大多数场合被提起的东西。它记录设计作业、概念作品、旅行碎片，也记录内心最柔软的部分：脆弱、迟疑、恢复，以及仍愿意继续靠近世界的那一点点意愿。
            </p>
            <p className="mb-6 leading-relaxed">
              2025 年 3 月，在浙港国际捡到一只小猫，取名贝斯。它小小的，警惕又黏人，会在夜里走来走去确认人还在。很多时候，希望并不是宏大的词，而是一只猫把额头轻轻顶过来的瞬间——提醒生活还可以继续被爱着。
            </p>
          </div>
        </div>
  
        <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
          <div className="w-full max-w-[320px]">
            <img
              src={heroImage}
              alt="Profile"
              className="w-full h-auto object-contain shadow-2xl rounded-sm"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="w-full max-w-[320px]">
            <img
              src={bloodingImage}
              alt="Blooding"
              className="w-full h-auto object-contain shadow-lg rounded-sm"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
  
      <div className="border-t border-border pt-24 pb-12" data-section-title="Timeline">
        <h2 className="text-[32px] font-fahkwang mb-24 text-center">学习与生活片段</h2>
  
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-oceanDeep/10"></div>
  
          <div className="flex flex-col md:flex-row w-full relative">
            {timelineEvents.map((event, idx) => {
              const isTop = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative md:flex-1 md:h-[400px] flex flex-col md:block pl-8 md:pl-0 border-l border-oceanDeep/10 md:border-l-0"
                >
                  <div className="md:hidden absolute left-[-4.5px] top-2 w-[9px] h-[9px] bg-white border border-oceanDeep rounded-full"></div>
  
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] bg-white border border-oceanDeep rounded-full z-10 transition-transform hover:scale-150 duration-300"></div>
  
                  <div
                    className={`hidden md:block absolute left-1/2 w-[1px] bg-oceanDeep/10 -translate-x-1/2
                      ${isTop ? "bottom-1/2 h-16" : "top-1/2 h-16"}
                    `}
                  ></div>
  
                  <div
                    className={`
                      mb-12 md:mb-0
                      md:absolute md:left-0 md:w-full md:px-3 md:text-center
                      ${isTop ? "md:bottom-[calc(50%+4rem)]" : "md:top-[calc(50%+4rem)]"}
                    `}
                  >
                    <span className="text-[12px] font-bold text-accentGreen tracking-widest block mb-2 font-mono">
                      {event.year}
                    </span>
                    <h3 className="text-[16px] font-fahkwang leading-tight mb-2 md:mb-3">
                      {event.title}
                    </h3>
                    <p className="text-[10px] text-textMuted uppercase tracking-wider mb-2 opacity-60">
                      {event.location}
                    </p>
                    <p className="text-[13px] leading-relaxed text-textMain/80 md:max-w-[180px] md:mx-auto">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

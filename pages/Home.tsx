
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../src/assets/about/hero.jpg';
import mojipark4 from '../src/assets/life/scenes/mojipark4.jpg';
import { POSTS } from '../data/posts';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="container-980 mt-12 relative overflow-hidden group shadow-sm bg-black aspect-video animate-fade-in"
        data-section-title="给我一个纪念馆"
      >
        <img 
          src={mojipark4} 
          alt="Hero Landscape" 
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-90"
        />
        
        <div
  className="absolute top-10 left-10 max-w-[440px] animate-slide-up"
  style={{ animationDelay: "0.2s" }}
>
  <h1 className="text-[56px] leading-[1.1] font-fahkwang font-semibold text-white uppercase tracking-tighter text-hero-shadow">
    给  我  一  个 <br /> 纪  念  馆
  </h1>
  <div className="w-16 h-[2px] bg-accentGreen mt-6 mb-4 shadow-sm"></div>
  <p className="text-[14px] leading-relaxed text-white/90 font-light tracking-wide text-hero-shadow">
    这里收藏的不是“成功”，而是一些被好好撑住的时刻：药片的重量、远方的路、朋友的拥抱，
    以及在最暗的日子里，仍然愿意继续活下去的那一点点温柔。
  </p>
</div>

<div
  className="absolute bottom-10 right-10 max-w-[360px] text-right animate-slide-up"
  style={{ animationDelay: "0.4s" }}
>
  <p className="text-[13px] leading-relaxed text-white/90 font-light tracking-wide mb-2 italic text-hero-shadow">
    “纪念馆不是为了把过去封存，而是为了证明：有些碎片曾经真实存在，并且仍在缓慢发光。”
  </p>
          <div className="flex items-center justify-end space-x-6 pt-4 border-t border-white/20">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white opacity-80 hover:opacity-100 transition-opacity drop-shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-[11px] font-bold text-white opacity-80 hover:opacity-100 transition-opacity tracking-[0.2em] uppercase text-hero-shadow">
              XHS
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Golden Ratio Layout */}
      <section 
        className="container-980 py-32 relative animate-slide-up" 
        style={{ animationDelay: '0.6s' }}
        data-section-title="Profile"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5"></div>
        {/* Golden Ratio Guide Line (~38.2% from left) */}
        <div className="absolute top-0 bottom-0 left-0 md:left-[38.2%] w-[1px] bg-black/5 hidden md:block"></div>
        
        <div className="flex flex-col md:flex-row items-start relative z-10">
          
          {/* Left: Image (Ends at 38.2% line) */}
          <div className="w-full md:w-[38.2%] flex justify-center md:justify-end md:pr-12 mb-12 md:mb-0">
             <Link 
              to="/about" 
              className="w-[260px] aspect-[3/4] overflow-hidden relative group border border-white bg-white shadow-sm mt-8"
            >
              <img 
                src={heroImage} 
                alt="About" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/10">
                <span className="text-textMain bg-white/95 px-6 py-2 text-[10px] uppercase tracking-[0.4em] font-semibold border border-black/5">About</span>
              </div>
            </Link>
          </div>

          {/* Right: Text (Starts at 38.2% line) */}
          <div className="w-full md:w-[61.8%] md:pl-12 flex flex-col justify-center pt-8">
             <h1 className="text-[36px] font-fahkwang leading-none mb-6 text-oceanDeep tracking-tighter uppercase font-light">
              陈美兮
            </h1>
            <div className="w-12 h-[1px] bg-accentGreen mb-6"></div>
            <p className="text-[14px] leading-relaxed text-left mb-8 font-light text-textMuted max-w-[420px]">
    浙江大学工业设计系学生。<br/><br/>
    这个网站是一座小小的纪念馆——不是为某种宏大的胜利留影，而是为那些被忽略的、几乎说不出口的瞬间存档：
    情绪突然下沉的午后，远行路上的廉价车票，朋友发来的一句“你还好吗”，以及在最难熬的日子里，仍然愿意多活一天的决定。<br/><br/>
    2024 年 1 月来到工业设计系。2024 年 3 月休学并开始治疗，9 月复学。
    药仍然需要按时吞下，但黑暗里开始出现一些可被保存的细节：风声、灯光、影子，以及不再那么孤单的呼吸。<br/><br/>
    2025 年 3 月，在浙港国际捡到一只小猫，取名贝斯。它很小，胆子也不大，却像一种温柔的提醒：
    任何日常都值得继续被照料。<br/><br/>
  </p>
            <div className="text-left">
              <Link to="/about" className="text-[10px] uppercase tracking-[0.5em] border-b border-textMain pb-1 hover:text-accentGreen transition-colors">了解更多</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section 
        className="container-980 py-32 border-t border-black/5 animate-slide-up" 
        style={{ animationDelay: '0.8s' }}
        data-section-title="Journal"
      >
        <div className="flex items-center justify-between mb-24">
          <h1 className="text-[28px] font-fahkwang text-oceanDeep uppercase tracking-widest font-light italic">一些项目</h1>
          <Link to="/projects" className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 hover:opacity-100 transition-opacity underline-offset-8 underline">全部文章</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {POSTS.slice(0, 3).map(post => (
            <div className="group" key={post.slug}>
              <Link to={`/projects/${post.slug}`}>
                <div className="w-full aspect-square overflow-hidden mb-8 border border-white bg-white p-2 shadow-sm relative">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <span className="text-white text-[9px] uppercase tracking-[0.4em] font-bold">进入项目</span>
                  </div>
                </div>
                <h2 className="text-[17px] font-fahkwang leading-tight mb-4 group-hover:text-accentGreen transition-colors uppercase tracking-tight">
                  {post.title}
                </h2>
                <div className="flex items-center space-x-4 text-textMuted text-[10px] uppercase tracking-widest">
                  <span className="text-accentGreen">{post.tags[0]}</span>
                  <span className="w-4 h-[1px] bg-black/10"></span>
                  <span className="font-light">{post.date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Highlight */}
      <section 
        className="container-980 pb-48 border-t border-black/5 pt-32 text-center animate-slide-up" 
        style={{ animationDelay: '1s' }}
        data-section-title="Gallery"
      >
        <h1 className="text-[28px] font-fahkwang mb-6 text-oceanDeep uppercase tracking-[0.4em] font-light italic">Photography is Poetry</h1>
        <p className="text-[11px] text-textMuted mb-20 font-light uppercase tracking-[0.5em]">时空碎片。</p>
        <Link to="/gallery" className="group block relative w-full aspect-[21/9] overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1904&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Gallery"
          />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
            <div className="border border-white/40 px-12 py-6 bg-white/10 backdrop-blur-md">
              <span className="text-white text-[10px] uppercase tracking-[0.6em] font-bold">进入画廊</span>
            </div>
          </div>
        </Link>
      </section> 
    </div>
  );
};

export default Home;

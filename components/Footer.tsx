
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-24">
      <div className="w-full h-[1px] bg-border/20" />
      <div className="container-980 py-20 flex flex-col items-center text-center">
        <div className="w-12 h-[1px] bg-accentGreen mb-8"></div>
        <h2 className="text-[26px] font-fahkwang mb-6 uppercase tracking-[0.2em] text-oceanDeep">给我一个纪念馆</h2>
        
        <p className="max-w-[480px] text-[13px] text-textMuted mb-10 leading-relaxed font-light">
          用影像与文字留住一瞬的光与影，缓慢存档陈小美那些热爱设计也热爱生活的时刻。写给曾经的我，也写给未来的你。
        </p>

        <div className="space-y-3 text-[14px] text-textMain tracking-wide font-light">
          <p className="hover:text-accentGreen transition-colors cursor-pointer">💌 chimixian9@gmail.com</p>
          <p>🍁浙江  ·  杭州</p>
        </div>

        <div className="mt-20 text-[9px] text-textMuted uppercase tracking-[0.5em] opacity-30">
          end of page
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';

// Import game images
import game1 from '../src/assets/life/game/game1.jpg';
import game2 from '../src/assets/life/game/game2.jpg';
import game3 from '../src/assets/life/game/game3.jpg';
import toget from '../src/assets/life/game/toget.jpg';

// Import live images
import acoustic from '../src/assets/life/live/acoustic.jpg';
import fest from '../src/assets/life/live/fest.jpg';
import fest2 from '../src/assets/life/live/fest2.jpg';
import jiangong from '../src/assets/life/live/jiangong.jpg';
import yueya from '../src/assets/life/live/yueya.jpg';

// Import pets images
import firstNight from '../src/assets/life/pets/1st night.jpg';
import firstShower from '../src/assets/life/pets/1st shower.jpg';
import catinthebox from '../src/assets/life/pets/catinthebox.jpg';
import enjoy from '../src/assets/life/pets/enjoy.jpg';
import enjoyhertoilet from '../src/assets/life/pets/enjoyhertoilet.jpg';
import enjoysunshine from '../src/assets/life/pets/enjoysunshine.jpg';
import haventShowerYet from '../src/assets/life/pets/havent shower yet.jpg';
import justThinking from '../src/assets/life/pets/just thinking.jpg';
import littleWoman from '../src/assets/life/pets/little woman！.jpg';
import pushtostudy from '../src/assets/life/pets/pushtostudy.jpg';
import sleep from '../src/assets/life/pets/sleep.jpg';
import stearns from '../src/assets/life/pets/Stearns.jpg';
import watchingbirds from '../src/assets/life/pets/watchingbirds.jpg';
import withhermom from '../src/assets/life/pets/withhermom.jpg';

// Import with 523 images
import medanye from '../src/assets/life/with 523/medanye.jpg';
import mirror from '../src/assets/life/with 523/mirror.jpg';
import nihao from '../src/assets/life/with 523/nihao.jpg';
import onthemetro from '../src/assets/life/with 523/onthemetro.jpg';
import the3 from '../src/assets/life/with 523/the3.jpg';
import top from '../src/assets/life/with 523/top.jpg';

// Import scenes images
import chagjiang1 from '../src/assets/life/scenes/chagjiang1.jpg';
import changjiang2 from '../src/assets/life/scenes/changjiang2.jpg';
import chengduzoo2 from '../src/assets/life/scenes/chengduzoo 2.jpg';
import chengduzoo from '../src/assets/life/scenes/chengduzoo.jpg';
import chengduzoo3 from '../src/assets/life/scenes/chengduzoo3.jpg';
import chengduzoo4 from '../src/assets/life/scenes/chengduzoo4.jpg';
import chengduzoo5 from '../src/assets/life/scenes/chengduzoo5.jpg';
import hometownsLake from '../src/assets/life/scenes/hometown\'s lake.jpg';
import mojipark1 from '../src/assets/life/scenes/mojipark1.jpg';
import mojipark2 from '../src/assets/life/scenes/mojipark2.jpg';
import mojipark3 from '../src/assets/life/scenes/mojipark3.jpg';
import mojipark4 from '../src/assets/life/scenes/mojipark4.jpg';
import mojipark5 from '../src/assets/life/scenes/mojipark5.jpg';

type Section = 'game' | 'live' | 'pets' | 'with 523' | 'scenes';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('game');

  const sections: Record<Section, { images: string[]; description: string }> = {
    'game': {
      images: [game1, game2, game3, toget],
      description: '在比赛中截下的几个瞬间——情绪、合作、胜负与失误，都短暂地停留在屏幕与身体之间。计算机学院是季军！'
    },
    'live': {
      // 将原本位于右下角的 yueya 调整到数组首位，优先排布在第一列
      images: [yueya, acoustic, fest, fest2, jiangong],
      description: '现场、音乐节与即兴演出里流动的节奏。每一张照片都只是当时空气和噪音的一小块证据。'
    },
    'pets': {
      images: [firstNight, firstShower, catinthebox, enjoy, enjoyhertoilet, enjoysunshine, haventShowerYet, justThinking, littleWoman, pushtostudy, sleep, stearns, watchingbirds, withhermom],
      description: '和猫一起度过的日常：被收养的第一晚、第一次洗澡、赖在阳光里、安静地盯着窗外。她把生活拆解成许多很小、却难以被忘记的片段。'
    },
    'with 523': {
      images: [medanye, mirror, nihao, onthemetro, the3],
      description: '与 523 工设好朋友的并肩时刻。地铁里的倒影、街角的合影以及那些没有对话却心照不宣的画面，都被轻轻存档在这里。'
    },
    'scenes': {
      images: [chagjiang1, changjiang2, chengduzoo2, chengduzoo, chengduzoo3, chengduzoo4, chengduzoo5, hometownsLake, mojipark1, mojipark2, mojipark3, mojipark4, mojipark5],
      description: '旅途和日常的场景：老家的湖、成都动物园、游乐园的光。地点在变化，情绪却在照片里缓慢沉淀下来。'
    }
  };

  const sectionLabels: Record<Section, string> = {
    'game': '比赛',
    'live': '演出',
    'pets': '宠物',
    'with 523': 'With 523',
    'scenes': '场景'
  };

  return (
    <div className="container-980 py-16 min-h-screen">
      <div className="mb-16 text-center">
        <h1 className="text-[44px] font-fahkwang mb-4">Life Dances...</h1>
        <p className="text-textMuted text-[16px]">生活里那些跳一下就跑开的瞬间，和那些被定格的瞬间。</p>
      </div>

      {/* Sub Navigation */}
      <div className="mb-16 flex flex-wrap justify-center gap-4 border-b border-border pb-6">
        {(Object.keys(sections) as Section[]).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`text-[12px] uppercase tracking-[0.3em] transition-all duration-300 relative py-2 px-4 ${
              activeSection === section
                ? 'text-oceanDeep font-bold'
                : 'text-textMuted hover:text-oceanDeep'
            }`}
          >
            {sectionLabels[section]}
            <span
              className={`absolute bottom-0 left-0 w-full h-[1px] bg-accentGreen transition-transform origin-left ${
                activeSection === section ? 'scale-x-100' : 'scale-x-0'
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Section Description */}
      <div className="mb-10 max-w-3xl mx-auto text-center">
        <h2 className="text-[28px] font-fahkwang mb-4 text-oceanDeep">{sectionLabels[activeSection]}</h2>
        <p className="text-[15px] leading-relaxed text-textMain font-light">
          {sections[activeSection].description}
        </p>
      </div>

      {/* Top banner for "with 523" section - placed under text */}
      {activeSection === 'with 523' && (
        <div className="mb-16">
          <img 
            src={top} 
            alt="With 523 Top" 
            className="w-full h-auto block"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}

      {/* Images Grid - Masonry Layout */}
      <div className="columns-1 md:columns-3 gap-6">
        {sections[activeSection].images.map((img, idx) => (
          <div key={idx} className="break-inside-avoid mb-6 group">
            <div className="w-full overflow-hidden bg-gray-50 rounded-sm">
              <img 
                src={img} 
                alt={`${sectionLabels[activeSection]} ${idx + 1}`}
                className="w-full h-auto block hover:scale-105 transition-transform duration-700"
                loading="lazy"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

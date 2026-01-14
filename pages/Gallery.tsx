
import React from 'react';
import art1 from '../src/assets/gallery/art1.jpg';
import art2 from '../src/assets/gallery/art2.jpg';
import art3 from '../src/assets/gallery/art3.jpg';
import art4 from '../src/assets/gallery/art4.jpg';
import art5 from '../src/assets/gallery/art5.jpg';
import designFundation1 from '../src/assets/gallery/design fundation1.jpg';
import ds2 from '../src/assets/gallery/ds2.jpg';
import ds3 from '../src/assets/gallery/ds3.jpg';
import ds4 from '../src/assets/gallery/ds4.jpg';
import ds5 from '../src/assets/gallery/ds5.jpg';
import justForFun from '../src/assets/gallery/just for fun.jpg';
import myFav from '../src/assets/gallery/my fav.jpg';
import fourPaintings from '../src/assets/gallery/four-paintings.jpg';

const Gallery: React.FC = () => {
  const images = [
    { src: art1, caption: '南华园竹林. 水彩. 美术与美学课程. 2025' },
    { src: art2, caption: '北山街西湖风光.水彩. 美术与美学课程. 2025' },
    { src: art3, caption: '启真湖边的小剧场. 水彩. 美术与美学课程. 2025' },
    { src: art4, caption: '校园里最好看的桥. 水彩. 美术与美学课程. 2025' },
    { src: art5, caption: '第一次写生：孤独的树. 水彩. 美术与美学课程. 2025' },
    { src: designFundation1, caption: '线的记忆. 材料. 设计基础课程. 2024' },
    { src: ds2, caption: '构成练习一. 针管笔. 设计基础课程. 2024' },
    { src: ds3, caption: '构成练习二. 针管笔. 设计基础课程. 2024' },
    { src: ds4, caption: '构成练习三. 针管笔. 设计基础课程. 2024' },
    { src: ds5, caption: '立体练习构成. 卡纸. 设计基础课程. 2024' },
    { src: justForFun, caption: '崩溃时候画的画. 最后都丢了. 油画棒. 2024' },
    { src: myFav, caption: '结课作业. 北山街. 水彩. 美术与美学课程. 2024' },
    { src: fourPaintings, caption: '色彩练习.水粉. 设计基础课程. 2024' },
  ];

  return (
    <div className="container-980 py-16 min-h-screen">
      <div className="mb-16 text-center">
        <h1 className="text-[52px] font-fahkwang leading-tight mb-4">一些作品</h1>
        <p className="text-[18px] text-textMuted max-w-xl mx-auto italic">
          “其实我并不会画画，但慢慢画，好像也没那么难”
        </p>
      </div>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {images.map((img, idx) => (
          <div key={idx} className="break-inside-avoid mb-6 group">
            <div className="w-full overflow-hidden bg-gray-100 rounded-sm">
              <img 
                src={img.src} 
                alt={`Gallery ${idx}`}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="py-4 px-2 border-l border-textMain mt-2">
              <p className="text-[14px] text-textMain font-light leading-relaxed">
                {img.caption}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-textMuted mt-1">
                Ref: {String(idx + 1).padStart(2, '0')}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center py-12 border-t border-border">
        <p className="text-[14px] uppercase tracking-[0.3em] text-textMuted">end of archive</p>
      </div>
    </div>
  );
};

export default Gallery;

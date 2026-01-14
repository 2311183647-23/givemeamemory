
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SectionNode {
  id: string;
  title: string;
  ratio: number;
}

const ProgressAxis: React.FC = () => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [sections, setSections] = useState<SectionNode[]>([]);

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate section positions
  useEffect(() => {
    const calculateSections = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const nodes = document.querySelectorAll('[data-section-title]');
      const newSections: SectionNode[] = [];
      
      nodes.forEach((node, index) => {
        const element = node as HTMLElement;
        const top = element.offsetTop;
        // Ratio along the scrollable track
        const ratio = docHeight > 0 ? Math.min(1, Math.max(0, top / docHeight)) : 0;
        
        newSections.push({
          id: `section-${index}`,
          title: element.getAttribute('data-section-title') || '',
          ratio
        });
      });
      setSections(newSections);
    };

    // Calculate after a brief delay to allow for rendering/images
    const timer = setTimeout(calculateSections, 500);
    // Also recalculate on resize
    window.addEventListener('resize', calculateSections);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateSections);
    };
  }, [pathname]);

  return (
    <div className="fixed left-8 top-0 h-full w-[120px] hidden xl:flex flex-col items-start justify-center z-40 pointer-events-none select-none mix-blend-multiply">
      {/* Axis Line Container */}
      <div className="relative h-[60vh] w-[1px] bg-oceanDeep/10 ml-4">
        
        {/* Current Position Indicator (Diamond) */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-oceanDeep rotate-45 transition-all duration-100 ease-out z-10"
          style={{ top: `${progress * 100}%`, marginTop: '-4px' }}
        />

        {/* Section Labels */}
        {sections.map((section) => {
          // Check if this section is currently "active" (close to current scroll position)
          const isActive = Math.abs(progress - section.ratio) < 0.1;
          
          return (
            <div 
              key={section.id}
              className="absolute left-0 flex items-center"
              style={{ top: `${section.ratio * 100}%`, transform: 'translateY(-50%)' }}
            >
              {/* Tiny Notch on Line */}
              <div className="w-[3px] h-[1px] bg-oceanDeep/30 -ml-[1px]"></div>
              
              {/* Label */}
              <div 
                className={`ml-6 transition-all duration-500 flex items-center ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-2'}`}
              >
                <span className={`text-[10px] uppercase tracking-[0.25em] font-sans whitespace-nowrap ${isActive ? 'text-oceanDeep font-semibold' : 'text-textMuted'}`}>
                  {section.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressAxis;

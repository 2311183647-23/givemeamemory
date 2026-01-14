
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/30">
      <div className="container-980 h-[72px] flex items-center justify-between px-6 md:px-0">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center group">
            <span className="text-[14px] font-sans tracking-[0.35em] text-oceanDeep uppercase font-bold group-hover:text-accentGreen transition-colors">
              给我一个纪念馆
            </span>
          </Link>
        </div>

        <nav className="flex space-x-10">
          {[
            { name: '主页', path: '/' },
            { name: '关于', path: '/about' },
            { name: '项目', path: '/projects' },
            { name: '画廊', path: '/gallery' },
            { name: '生活切片', path: '/portfolio' }
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-300 relative group py-2 ${isActive(link.path) ? 'text-oceanDeep font-bold' : 'text-textMuted hover:text-oceanDeep'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accentGreen transition-transform origin-left scale-x-0 group-hover:scale-x-100 ${isActive(link.path) ? 'scale-x-100' : ''}`}></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

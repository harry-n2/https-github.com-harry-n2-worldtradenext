
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (view: any) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-10 lg:px-20 ${
        scrolled ? 'py-5 bg-navy/80 backdrop-blur-2xl border-b border-white/5' : 'py-10 bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => onNavigate('HOME')}
        >
          <div className="w-8 h-8 accent-border border rotate-45 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[225deg]">
            <div className="-rotate-45 font-bold text-[8px] accent-text group-hover:rotate-[135deg] transition-transform duration-700">WTN</div>
          </div>
          <div className="text-lg font-bold tracking-[0.3em] text-white group-hover:tracking-[0.5em] transition-all duration-700">
            WORLD TRADE NEXT
          </div>
        </div>
        
        <nav className="hidden xl:flex gap-12 items-center">
          {['VISION', 'LARK', 'SERVICES'].map((item) => (
            <button 
              key={item}
              onClick={() => onNavigate(item as any)}
              className="text-[10px] font-bold tracking-[0.4em] text-white/50 hover:text-gold transition-all duration-300"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('CONTACT')}
            className="px-10 py-3 bg-transparent border accent-border accent-text text-[10px] font-bold tracking-[0.3em] hover:accent-bg hover:text-white transition-all duration-500 overflow-hidden relative group"
          >
            <span className="relative z-10">FREE CONSULTATION</span>
            <div className="absolute inset-0 accent-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </nav>

        {/* Hamburger placeholder for mobile */}
        <button onClick={() => onNavigate('CONTACT')} className="xl:hidden flex flex-col gap-1.5 cursor-pointer p-2">
          <div className="w-6 h-[1px] accent-bg"></div>
          <div className="w-6 h-[1px] accent-bg translate-x-1"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;

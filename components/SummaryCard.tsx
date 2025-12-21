
import React from 'react';
import { FeatureItem } from '../types';

interface SummaryCardProps {
  item: FeatureItem;
  type: 'problem' | 'solution';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ item, type }) => {
  const isProblem = type === 'problem';
  
  return (
    <div className="group relative p-12 glass-panel overflow-hidden h-full flex flex-col justify-between hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      {/* Decorative top line */}
      <div className={`absolute top-0 left-0 w-0 h-[1px] accent-bg group-hover:w-full transition-all duration-1000 ease-in-out`}></div>
      
      <div>
        <div className={`text-4xl mb-12 opacity-50 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-125 accent-text`}>
          {item.icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-6 tracking-wide leading-tight">
          {item.title}
        </h3>
        
        <p className="opacity-60 text-sm leading-relaxed font-light mb-8 group-hover:opacity-90 transition-opacity">
          {item.description}
        </p>
      </div>

      <div className="flex items-center gap-4 text-[9px] font-bold tracking-[0.4em] accent-text opacity-40 group-hover:opacity-100 group-hover:gap-6 transition-all duration-700">
        DETAILS <span className="text-lg">→</span>
      </div>
    </div>
  );
};

export default SummaryCard;

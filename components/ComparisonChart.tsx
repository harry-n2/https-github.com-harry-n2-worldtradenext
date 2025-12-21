
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { COLORS } from '../constants';

const ComparisonChart: React.FC = () => {
  const timeData = [
    { name: 'TRADITIONAL', value: 180, label: '従来の手作業' },
    { name: 'WTN SYSTEM', value: 54, label: 'WTN自動化導入後' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel p-4 border-gold/20 shadow-2xl">
          <p className="text-gold text-[10px] font-bold tracking-widest mb-1">{payload[0].payload.name}</p>
          <p className="text-white text-xl font-bold">{payload[0].value} <span className="text-xs font-normal">時間/月</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-panel p-10 rounded-none border-gold/10">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h3 className="font-heading text-2xl text-white mb-2">Efficiency Revolution</h3>
          <p className="text-slate text-xs font-light">月間書類処理時間の劇的変化</p>
        </div>
        <div className="text-right">
          <div className="text-gold text-3xl font-bold">-70%</div>
          <div className="text-[8px] tracking-widest font-bold text-slate">REDUCTION</div>
        </div>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={timeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#8892b0', fontSize: 10, fontWeight: 'bold', letterSpacing: '0.1em' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#8892b0', fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
            <Bar dataKey="value" barSize={60} animationDuration={2000} radius={[2, 2, 0, 0]}>
              {timeData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 0 ? '#1a2a44' : COLORS.GOLD}
                  fillOpacity={0.9}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-8 flex gap-6 text-[10px] font-bold tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#1a2a44]"></div>
          <span className="text-slate">TRADITIONAL</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gold"></div>
          <span className="text-slate">WTN SYSTEM</span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;

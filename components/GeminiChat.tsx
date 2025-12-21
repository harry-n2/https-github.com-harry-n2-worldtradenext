
import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../services/geminiService';
import { IMAGES } from '../constants';

const GeminiChat: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const response = await askGemini(userMessage);
    setMessages(prev => [...prev, { role: 'ai', text: response || 'エラーが発生しました。' }]);
    setIsTyping(false);
  };

  return (
    <div className="glass-panel flex flex-col h-[700px] border-gold/10 overflow-hidden group relative">
      {/* Decorative Background Image for Context */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Fix: Property 'AI_CONCIERGE' does not exist on type IMAGES; corrected to 'AI_CONCIERGE_VISUAL' */}
        <img src={IMAGES.AI_CONCIERGE_VISUAL} className="w-full h-full object-cover" alt="AI BG" />
      </div>

      <div className="p-8 border-b border-white/5 flex items-center justify-between relative z-10 bg-navy/80">
        <div>
          <div className="text-gold text-[10px] font-bold tracking-[0.4em] mb-1 uppercase">Digital Partner</div>
          <h3 className="font-heading text-xl text-white">WTN AI CONCIERGE</h3>
        </div>
        <div className="w-12 h-12 gold-border-gradient flex items-center justify-center bg-gold/5 group-hover:scale-110 transition-transform duration-700">
          <span className="text-gold text-xl">✨</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth relative z-10">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-12">
            <div className="text-gold/20 text-6xl mb-6 font-heading">“</div>
            <p className="text-slate text-sm font-light leading-loose mb-4">
              AIマーケティングの導入事例や、Lark自動化による期待収益についてご質問ください。
            </p>
            <p className="text-gold text-[10px] font-bold tracking-widest uppercase">AI is ready to assist your growth</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`text-[8px] font-bold tracking-widest mb-2 uppercase ${m.role === 'user' ? 'text-slate' : 'text-gold'}`}>
              {m.role === 'user' ? 'CLIENT' : 'CONCIERGE'}
            </div>
            <div className={`max-w-[85%] p-6 ${
              m.role === 'user' 
                ? 'bg-gold/10 text-white border border-gold/20' 
                : 'bg-white/5 text-slate border border-white/5 backdrop-blur-md'
            } transition-all duration-500`}>
              <p className="text-sm whitespace-pre-wrap leading-relaxed font-light">{m.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex flex-col items-start animate-pulse">
            <div className="text-[8px] font-bold tracking-widest mb-2 uppercase text-gold">ANALYZING</div>
            <div className="bg-white/5 p-6 border border-white/5 w-1/3 h-12"></div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-8 bg-black/40 border-t border-white/5 relative z-10">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="事業の課題を入力してください..."
            className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xs tracking-widest focus:outline-none focus:border-gold transition-colors font-bold placeholder:text-slate/30"
          />
          <button 
            type="submit"
            disabled={isTyping}
            className="absolute right-0 bottom-4 text-gold hover:text-white transition-colors disabled:opacity-30"
          >
            <span className="text-sm font-bold tracking-widest uppercase">Send →</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeminiChat;

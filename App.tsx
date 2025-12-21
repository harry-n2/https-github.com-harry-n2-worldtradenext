
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import ComparisonChart from './components/ComparisonChart';
import GeminiChat from './components/GeminiChat';
import { 
  VISION, LARK_SYSTEM, SERVICES, IMAGES, LINKS 
} from './constants';

type ViewState = 'HOME' | 'VISION' | 'LARK' | 'SERVICES' | 'CONTACT';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = useCallback((nextView: ViewState) => {
    const overlay = document.getElementById('page-overlay');
    if (overlay) {
      overlay.classList.add('active');
      setTimeout(() => {
        setView(nextView);
        window.scrollTo({ top: 0, behavior: 'instant' });
        overlay.classList.remove('active');
      }, 600);
    }
  }, []);

  // 指示画像に基づいたPDFダウンロードセクション
  const PDFDownloadSection = () => (
    <section className="w-full py-20 px-4 reveal-on-scroll active">
      <div className="max-w-5xl mx-auto glass-panel bg-[#0a0f1a] border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-48 h-64 flex-shrink-0 shadow-2xl relative group">
          <img src={IMAGES.PDF_THUMBNAIL} className="w-full h-full object-cover border border-white/10" alt="Presentation Thumbnail" />
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="text-gold text-[10px] font-bold tracking-[0.6em] mb-4 uppercase opacity-80">Download Material</div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight font-heading">
            外国人材事業 自動化システム<br />Lark base プレゼン資料
          </h3>
          <p className="text-slate text-sm font-light leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
            弊社の「期限管理ミスゼロ」「書類作成96%削減」を可能にするシステムの全貌を解説した資料です。
            下記ボタンより直接PDF資料をご確認いただけます。
          </p>
          <a 
            href={LINKS.PRESENTATION_PDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#c5a059] text-white px-12 py-5 font-bold text-[11px] tracking-[0.4em] hover:bg-[#d4b06a] transition-all shadow-xl uppercase"
          >
            資料をダウンロードして確認する
          </a>
        </div>
      </div>
    </section>
  );

  const ParallaxBg = ({ imageUrl, factor = 0.5, opacity = 0.4 }: { imageUrl: string, factor?: number, opacity?: number }) => (
    <div 
      className="parallax-bg fixed inset-0 w-full h-[120%] pointer-events-none"
      style={{ 
        backgroundImage: `linear-gradient(rgba(5, 10, 20, ${1 - opacity}), rgba(5, 10, 20, ${1 - opacity})), url(${imageUrl})`,
        transform: `translateY(${scrollPos * factor}px)`,
        zIndex: -1
      }} 
    />
  );

  const renderContent = () => {
    switch (view) {
      case 'HOME':
        return (
          <div className="relative">
            <ParallaxBg imageUrl={IMAGES.HERO_MAIN} factor={0.2} opacity={0.6} />
            <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center pt-24">
              <div className="reveal-on-scroll active mb-8">
                <span className="accent-text text-[12px] font-bold tracking-[0.8em] uppercase block mb-4">World Trade Next</span>
                <div className="h-[1px] w-32 bg-gold mx-auto"></div>
              </div>
              <h1 className="text-5xl md:text-[7.5rem] font-bold mb-10 tracking-tighter leading-[0.95] text-white">
                外国人材管理を、<br />
                <span className="accent-text italic">自動化</span>の頂点へ.
              </h1>
              <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light text-slate leading-relaxed">
                25年の営業知見 × 独自システム「Lark base」<br />
                管理の苦痛を解放し、企業の創造性を最大化する。
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                <button onClick={() => navigateTo('LARK')} className="min-w-[280px] px-12 py-6 accent-bg text-white font-bold text-[10px] tracking-[0.4em] shadow-2xl hover:scale-105 transition-all duration-500 uppercase">
                  LARK自動化システム詳細
                </button>
                <button onClick={() => navigateTo('SERVICES')} className="min-w-[280px] px-12 py-6 glass-panel text-white font-bold text-[10px] tracking-[0.4em] hover:bg-white/5 transition-all duration-500 uppercase">
                  事業内容を確認する
                </button>
              </div>
              <PDFDownloadSection />
            </section>

            <section className="py-40 px-8 bg-navy/90 relative">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                  <div className="h-[550px] overflow-hidden shadow-2xl border border-white/5 group">
                    <img src={IMAGES.BUSINESS_EFFICIENCY} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Systemized Management" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-gold font-bold tracking-[0.5em] text-xs mb-8 uppercase">Efficiency Mastery</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">画像で直感的にわかる、<br />WTNの次世代管理。</h3>
                  <p className="text-slate text-lg font-light leading-loose mb-12">
                    複雑な外国人材の在留管理、契約、更新。これらすべてをスマートなデジタル環境へ移行します。
                    手入力の時間は96%削減され、管理者は本来注力すべき「人」へのサポートに集中できます。
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="p-8 glass-panel border-gold/20">
                        <div className="text-gold text-3xl font-bold mb-2">96%</div>
                        <div className="text-white text-xs font-bold tracking-widest uppercase">Input Reduction</div>
                     </div>
                     <div className="p-8 glass-panel border-gold/20">
                        <div className="text-gold text-3xl font-bold mb-2">ERR 0</div>
                        <div className="text-white text-xs font-bold tracking-widest uppercase">Compliance Safety</div>
                     </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case 'VISION':
        return (
          <section className="relative min-h-screen pt-48 pb-32 px-8">
            <ParallaxBg imageUrl={IMAGES.VISION_HERO} opacity={0.6} />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
                <div>
                  <h2 className="accent-text text-[10px] font-bold tracking-[0.6em] mb-12 uppercase">Philosophy & Profile</h2>
                  <h1 className="text-5xl font-bold mb-12 text-white leading-tight">未来を、AIで確信に変える。</h1>
                  <p className="text-xl text-slate font-light leading-loose mb-16">{VISION.description}</p>
                  
                  {/* Lark Profile Link Section */}
                  <div className="glass-panel p-10 border-gold mb-16 bg-navy/60">
                    <h3 className="text-gold text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">Corporate Document</h3>
                    <p className="text-white text-lg font-bold mb-6">World Trade Next 会社概要</p>
                    <a 
                      href={LINKS.LARK_PROFILE_DOC} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-white font-bold tracking-[0.3em] text-[11px] px-8 py-4 border border-gold hover:bg-gold transition-all uppercase"
                    >
                      会社概要ドキュメントを閲覧する <span className="text-lg">→</span>
                    </a>
                  </div>

                  <div className="h-[400px] overflow-hidden shadow-2xl">
                    <img src={IMAGES.LARK_DASHBOARD} className="w-full h-full object-cover" alt="Automation Concept" />
                  </div>
                </div>
                <div className="sticky top-48">
                  <div className="glass-panel p-12 border-gold/30 bg-black/40 backdrop-blur-xl">
                    <div className="flex flex-col items-center mb-10 text-center">
                      <div className="w-64 h-80 mb-10 border-4 border-gold/10 p-1 bg-navy overflow-hidden shadow-2xl">
                        {/* 西野代表の画像：指示通りのURLを表示 */}
                        <img 
                          src={IMAGES.REPRESENTATIVE} 
                          alt="西野 直哉 代表" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="accent-text text-xs font-bold mb-2 uppercase tracking-[0.5em]">{VISION.representative.title}</div>
                      <div className="text-3xl font-bold text-white tracking-tighter mb-4">{VISION.representative.name}</div>
                    </div>
                    <p className="text-slate leading-loose font-light text-sm italic border-l-2 border-gold pl-8">{VISION.representative.profile}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'LARK':
        return (
          <section className="relative min-h-screen pt-48 pb-32 px-8">
            <ParallaxBg imageUrl={IMAGES.LARK_DASHBOARD} opacity={0.8} />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-32">
                <h2 className="accent-text text-[10px] font-bold tracking-[0.6em] mb-8 uppercase">The Core System</h2>
                <h1 className="text-4xl md:text-7xl font-bold mb-12 text-white leading-tight underline decoration-gold/20 underline-offset-8">外国人材管理 完全自動化<br />「Lark base」</h1>
                <p className="max-w-3xl mx-auto text-xl text-slate font-light leading-loose">{LARK_SYSTEM.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                <div className="grid grid-cols-1 gap-12">
                  <div className="h-[400px] overflow-hidden shadow-2xl border border-white/5">
                    <img src={IMAGES.LARK_OCR_SCAN} className="w-full h-full object-cover" alt="OCR Automation" />
                  </div>
                  <div className="h-[300px] overflow-hidden shadow-2xl border border-white/5">
                    <img src={IMAGES.LARK_MOBILE} className="w-full h-full object-cover" alt="Mobile Experience" />
                  </div>
                </div>
                <div className="space-y-12">
                  <h3 className="text-3xl font-bold text-white italic font-heading">“管理に追われる日は、もう終わりです。”</h3>
                  <div className="space-y-8">
                    {LARK_SYSTEM.features.map((f, i) => (
                      <div key={i} className="glass-panel p-10 border-l-4 border-gold hover:bg-gold/10 transition-all group">
                        <h4 className="text-xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">{f.title}</h4>
                        <p className="text-slate text-sm font-light leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                <ComparisonChart />
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white leading-tight">数字が証明する、劇的な変化。</h3>
                  <p className="text-slate leading-loose font-light text-lg">
                    従来のエクセル管理から、Lark baseによる統合管理へ。
                    データはリアルタイムで共有され、必要なタスクはAIが自動生成します。
                  </p>
                  <div className="h-72 overflow-hidden shadow-2xl border border-white/5">
                    <img src={IMAGES.HERO_MAIN} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Work Efficiency" />
                  </div>
                </div>
              </div>

              <PDFDownloadSection />
            </div>
          </section>
        );
      case 'SERVICES':
        return (
          <section className="relative min-h-screen pt-48 pb-32 px-8">
            <ParallaxBg imageUrl={IMAGES.VISION_HERO} />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-32">
                <h2 className="accent-text text-[10px] font-bold tracking-[0.6em] mb-8 uppercase">Our Value</h2>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-12">AI×ビジネスの、新しい地平。</h1>
              </div>

              <div className="grid md:grid-cols-2 gap-16 mb-40">
                {SERVICES.map((s, i) => (
                  <div key={i} className="group glass-panel overflow-hidden border-b-2 border-transparent hover:border-gold transition-all duration-700">
                    <div className="h-80 overflow-hidden relative">
                      <img src={i === 0 ? IMAGES.MARKETING_AI : i === 1 ? IMAGES.OVERSEAS_BIZ : i === 2 ? IMAGES.LARK_DASHBOARD : IMAGES.SIDE_BIZ_AI} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={s.title} />
                      <div className="absolute inset-0 bg-navy/20"></div>
                    </div>
                    <div className="p-12">
                      <div className="text-4xl mb-8 opacity-50">{s.icon}</div>
                      <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-[0.2em]">{s.title}</h4>
                      <p className="text-slate leading-loose font-light mb-10 text-sm">{s.description}</p>
                      {/* DETAILSボタン：s.linkがあればそれを使用、なければデフォルトのLarkリンクを使用 */}
                      <button 
                        onClick={() => window.open(s.link || LINKS.LARK_PROFILE_DOC, '_blank')} 
                        className="text-gold font-bold tracking-[0.4em] text-[10px] flex items-center gap-4 hover:gap-8 transition-all"
                      >
                        DETAILS <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div id="ai-concierge-section" className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1 h-[650px] overflow-hidden shadow-2xl relative group border border-white/5">
                    <img src={IMAGES.AI_CONCIERGE_VISUAL} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-125" alt="AI Concierge Vision" />
                    <div className="absolute inset-0 bg-navy/30"></div>
                    <div className="absolute inset-0 p-16 flex flex-col justify-end">
                       <h3 className="text-3xl font-bold text-white mb-6 font-heading">WTN AI Concierge</h3>
                       <p className="text-slate text-sm leading-loose font-light">高度な推論と、25年の営業知見を学習したデジタルパートナー。<br />あなたの経営課題に、24時間365日回答を提示します。</p>
                    </div>
                 </div>
                 <div className="order-1 lg:order-2">
                   <GeminiChat />
                 </div>
              </div>
            </div>
          </section>
        );
      case 'CONTACT':
        return (
          <section className="relative min-h-screen flex items-center justify-center px-8 bg-navy">
             <div className="max-w-5xl mx-auto text-center relative z-10 pt-20">
                <div className="mb-24">
                  <h2 className="accent-text text-[10px] font-bold tracking-[0.6em] mb-12 uppercase">Contact & Rewards</h2>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
                    公式LINE登録で、<br />
                    <span className="text-gold italic underline underline-offset-[16px]">スターターキットを即座に受け取る。</span>
                  </h1>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-20 items-center justify-center">
                  <div className="glass-panel p-16 bg-white/5 border-gold/40 shadow-2xl group hover:rotate-2 transition-transform">
                    <img src={LINKS.LINE_QR} alt="LINE QR" className="w-72 h-72 mx-auto mb-10" />
                    <p className="text-gold font-bold tracking-[0.5em] text-xs uppercase">Scan to Connect</p>
                  </div>
                  
                  <div className="text-left space-y-12 max-w-lg">
                    <h3 className="text-3xl font-bold text-white font-heading italic leading-tight">“AIを味方に、ビジネスの限界を超える。”</h3>
                    <p className="text-slate font-light leading-loose text-lg">
                      公式LINE登録者限定で、NotebookLMプロンプト集とLark構築GPTsを無料配布中です。
                      現場の効率を劇的に変えるツールセットを今すぐ手に入れてください。
                    </p>
                    <div className="flex flex-col gap-6">
                      <a href={LINKS.OFFICIAL_LINE} target="_blank" rel="noopener noreferrer" className="block w-full py-6 accent-bg text-white font-bold text-center tracking-[0.5em] shadow-xl hover:scale-[1.02] transition-all text-[10px] uppercase">
                        LINEで資料を受け取る
                      </a>
                    </div>
                  </div>
                </div>
             </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-navy selection:bg-gold selection:text-white">
      <div id="page-overlay"></div>
      <Header onNavigate={navigateTo} />

      <main className="relative overflow-hidden">
        {renderContent()}
      </main>

      <footer className="py-24 px-8 border-t border-white/5 bg-black relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-5 mb-12 cursor-pointer" onClick={() => navigateTo('HOME')}>
              <div className="w-12 h-12 accent-border border rotate-45 flex items-center justify-center">
                <div className="-rotate-45 font-bold text-[12px] accent-text">WTN</div>
              </div>
              <div className="text-3xl font-bold tracking-[0.5em] text-white uppercase">World Trade Next</div>
            </div>
            <p className="text-slate text-sm font-light leading-loose max-w-md">
              AIの力で、すべての企業に成長の機会を。25年の知見と先端技術の融合が、次世代のスタンダードを構築します。
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest mb-10 uppercase">Navigation</h4>
              <nav className="flex flex-col gap-5">
                {['VISION', 'LARK', 'SERVICES', 'CONTACT'].map((item) => (
                  <button key={item} onClick={() => navigateTo(item as any)} className="text-[11px] font-bold tracking-[0.4em] text-slate hover:text-gold transition-colors text-left uppercase">{item}</button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest mb-10 uppercase">Materials</h4>
              <nav className="flex flex-col gap-5">
                <a href={LINKS.PRESENTATION_PDF} target="_blank" className="text-[11px] font-bold tracking-[0.5em] text-gold hover:text-white transition-colors text-left uppercase">GET PRESENTATION PDF</a>
                <a href={LINKS.LARK_PROFILE_DOC} target="_blank" className="text-[11px] font-bold tracking-[0.5em] text-gold hover:text-white transition-colors text-left uppercase">COMPANY PROFILE</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] tracking-[0.4em] opacity-30 uppercase">© 2025 World Trade Next. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
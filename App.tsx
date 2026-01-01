
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import ComparisonChart from './components/ComparisonChart';
import GeminiChat from './components/GeminiChat';
import { 
  VISION, LARK_SYSTEM, SERVICES, IMAGES, LINKS, COLORS 
} from './constants';

type ViewState = 'HOME' | 'VISION' | 'LARK' | 'SERVICES' | 'MCP' | 'CONTACT';

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
                <button onClick={() => navigateTo('MCP')} className="min-w-[280px] px-12 py-6 accent-bg text-white font-bold text-[10px] tracking-[0.4em] shadow-2xl hover:scale-105 transition-all duration-500 uppercase">
                  MCP連携 プレミアム
                </button>
                <button onClick={() => navigateTo('SERVICES')} className="min-w-[280px] px-12 py-6 glass-panel text-white font-bold text-[10px] tracking-[0.4em] hover:bg-white/5 transition-all duration-500 uppercase">
                  事業内容を確認する
                </button>
              </div>
              <PDFDownloadSection />
            </section>
          </div>
        );
      case 'MCP':
        return (
          <div className="bg-[#050a14] min-h-screen text-white font-sans">
            {/* 2.1 Executive First View */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <img src={IMAGES.MCP_HERO} className="w-full h-full object-cover opacity-20" alt="Executive Background" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-transparent to-[#050a14]/60"></div>
               </div>
               <div className="relative z-10 max-w-5xl">
                  <span className="text-[#c5a059] text-[12px] font-bold tracking-[0.8em] uppercase block mb-6 animate-pulse">Premium Edition</span>
                  <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
                    AIがあなたの「右腕」から<br />
                    <span className="text-[#c5a059]">「未来の営業執行役員」</span>へ
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-bold mb-12 text-white/90">
                    静寂を破り、革命をもたらす。自動収益化の頂点へ。
                  </h2>
                  <p className="text-xl md:text-2xl font-light mb-16 text-slate leading-relaxed max-w-4xl mx-auto">
                    既存の枠を超えたModel Context Protocol (MCP)により、事業の自動化は新たなステージへ。
                  </p>
                  <a 
                    href={LINKS.OFFICIAL_LINE}
                    target="_blank"
                    className="inline-block bg-[#c5a059] text-white px-16 py-8 font-bold text-[12px] tracking-[0.5em] shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:bg-[#d4b06a] hover:scale-105 transition-all uppercase rounded-sm"
                  >
                    限定デモンストレーションを予約する
                  </a>
               </div>
            </section>

            {/* 2.2 Pain Points: Before */}
            <section className="py-32 px-8 bg-[#0a0f1a] border-y border-white/5">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                <div className="grayscale opacity-40 hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm overflow-hidden border border-white/10">
                   <img src={IMAGES.MCP_PAIN} className="w-full h-96 object-cover" alt="Pain Points Visual" />
                </div>
                <div>
                   <h2 className="text-white text-4xl md:text-5xl font-bold mb-10 leading-tight">
                     未だ、リスト集めやSNS運用に<br />貴重な時間を費やしていますか？
                   </h2>
                   <p className="text-xl font-light leading-relaxed mb-8 text-slate">
                     その努力は、本来の経営戦略ではありません。煩雑なルーチンワークに囚われることは、洗練された「負のイメージ」であり、あなたの真の価値を損なっています。
                   </p>
                   <div className="h-[2px] w-24 bg-[#c5a059] mb-8"></div>
                   <p className="text-lg italic font-medium text-gold">現代の経営者に必要なのは、作業ではなく「決断」の領域への回帰です。</p>
                </div>
              </div>
            </section>

            {/* 2.3 MCP Solution: The Breakthrough */}
            <section className="py-40 px-8 bg-[#050a14] relative overflow-hidden">
               <div className="max-w-7xl mx-auto text-center relative z-10">
                  <h2 className="text-[#c5a059] text-[10px] font-bold tracking-[0.6em] mb-12 uppercase">The Breakthrough</h2>
                  <div className="grid md:grid-cols-2 gap-12 text-left">
                     <div className="glass-panel p-12 shadow-2xl border-t-4 border-[#c5a059] group hover:-translate-y-2 transition-transform bg-white/5">
                        <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">🔗</div>
                        <h3 className="text-3xl font-bold mb-6 text-white">AI「接着剤」:<br /><span className="text-[#c5a059]">あらゆるビジネスツールを繋ぐ、唯一無二のプロトコル。</span></h3>
                        <p className="text-base font-light leading-loose text-slate">
                          バラバラだったSaaSやデータベースをAIが一つに統合。もはや「管理」する必要はありません。知的なハブがすべてを繋ぎます。
                        </p>
                     </div>
                     <div className="glass-panel p-12 shadow-2xl border-t-4 border-[#00FFFF] text-white group hover:-translate-y-2 transition-transform bg-[#0a0f1a]">
                        <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block text-[#00FFFF]">💼</div>
                        <h3 className="text-3xl font-bold mb-6">コスト・ゼロで、<br /><span className="text-[#00FFFF]">即座に「自動営業部」を資産化。</span></h3>
                        <p className="text-base font-light leading-loose text-slate">
                          人件費も教育も不要。24時間365日、AIが貴社のフロントエンドを支える最強の営業チームへと変貌します。
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 2.4 Automation Flow: After */}
            <section className="py-40 px-8 bg-[#0a0f1a]">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-24">
                     <h2 className="text-white text-5xl font-bold mb-6 tracking-tight">理想のビジネスフローを、現実に。</h2>
                     <p className="text-slate text-lg font-light">「寝ている間に売上」を実現する洗練されたサイクル</p>
                  </div>
                  <div className="space-y-16">
                     <div className="flex flex-col md:flex-row items-center gap-12 p-12 glass-panel relative group border-l-8 border-[#c5a059] bg-white/5">
                        <div className="text-5xl font-bold text-[#c5a059] opacity-30">PHASE 01</div>
                        <div className="flex-1">
                           <h4 className="text-2xl font-bold mb-4 text-white">価値創造</h4>
                           <p className="text-lg font-light text-slate">AIが市場を分析し、ターゲットに突き刺さる商材やコンテンツを自動生成。</p>
                        </div>
                        <div className="hidden md:block text-3xl animate-bounce-horizontal text-gold">→</div>
                     </div>
                     <div className="flex flex-col md:flex-row items-center gap-12 p-12 glass-panel relative group border-l-8 border-[#c5a059] bg-white/5">
                        <div className="text-5xl font-bold text-[#c5a059] opacity-30">PHASE 02</div>
                        <div className="flex-1">
                           <h4 className="text-2xl font-bold mb-4 text-white">自動集客 & ナーチャリング</h4>
                           <p className="text-lg font-light text-slate">SNS運用からリード獲得まで、AIが顧客の感情を動かす最適なタイミングでアプローチ。</p>
                        </div>
                        <div className="hidden md:block text-3xl animate-bounce-horizontal text-gold">→</div>
                     </div>
                     <div className="flex flex-col md:flex-row items-center gap-12 p-12 bg-gold/10 text-white relative group shadow-2xl border border-gold/30">
                        <div className="text-5xl font-bold text-[#c5a059] opacity-50">PHASE 03</div>
                        <div className="flex-1">
                           <h4 className="text-2xl font-bold mb-4">完全自動完結</h4>
                           <p className="text-lg font-light text-white/80">問い合わせ対応からクレジットカード決済まで。人の手を介さず収益を確定させます。</p>
                        </div>
                        <div className="hidden md:block text-4xl">💰</div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Material Download: Premium Material Placement */}
            <section className="py-32 px-8 bg-[#050a14]">
              <div className="max-w-5xl mx-auto glass-panel bg-[#0a0f1a] border-white/10 p-12 flex flex-col md:flex-row items-center gap-16 shadow-2xl">
                 <div className="w-48 h-64 flex-shrink-0 relative group">
                    <img src={IMAGES.PDF_THUMBNAIL} className="w-full h-full object-cover shadow-2xl border border-white/10" alt="MCP Material" />
                    <div className="absolute inset-0 bg-[#c5a059]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 <div className="text-center md:text-left">
                    <div className="text-[#c5a059] text-[10px] font-bold tracking-[0.5em] mb-4 uppercase">Special Material</div>
                    <h3 className="text-3xl font-bold mb-8 text-white leading-tight">
                      MCP連携・プレミアム解説資料<br />「自動営業部」構築の全貌
                    </h3>
                    <p className="text-slate text-base font-light mb-12 leading-relaxed">
                      添付資料のコンセプトを詳細に解説。具体的な導入フローとコスト削減効果を数値で公開しています。
                    </p>
                    <a 
                      href={LINKS.MCP_MATERIAL} 
                      target="_blank" 
                      className="inline-block bg-[#c5a059] text-white px-12 py-6 font-bold text-[11px] tracking-[0.4em] hover:bg-[#d4b06a] transition-all uppercase shadow-xl"
                    >
                      プレミアム資料をダウンロード
                    </a>
                 </div>
              </div>
            </section>

            {/* 2.5 Social Proof */}
            <section className="py-40 px-8 bg-[#0a0f1a] text-center border-t border-white/5">
               <h3 className="text-white font-bold text-3xl mb-16 tracking-tight">選ばれし経営者たちが、既にこの革命を享受しています。</h3>
               <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  <div className="p-10 glass-panel bg-white/5 border-white/10 hover:border-[#c5a059] transition-colors">
                     <div className="text-[#c5a059] text-5xl font-bold mb-4">150%</div>
                     <div className="text-[12px] font-bold tracking-widest text-slate uppercase">Revenue Increase</div>
                  </div>
                  <div className="p-10 glass-panel bg-white/5 border-white/10 hover:border-[#c5a059] transition-colors">
                     <div className="text-[#c5a059] text-5xl font-bold mb-4">30%</div>
                     <div className="text-[12px] font-bold tracking-widest text-slate uppercase">Cost Reduction</div>
                  </div>
                  <div className="p-10 glass-panel bg-white/5 border-white/10 hover:border-[#c5a059] transition-colors">
                     <div className="text-[#c5a059] text-5xl font-bold mb-4">96%</div>
                     <div className="text-[12px] font-bold tracking-widest text-slate uppercase">Time Efficiency</div>
                  </div>
               </div>
            </section>

            {/* 2.6 Closing & Final CTA */}
            <section className="py-48 px-8 bg-[#050a14] text-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                  <img src={IMAGES.MCP_HERO} className="w-full h-full object-cover" alt="CTA BG" />
               </div>
               <div className="max-w-5xl mx-auto relative z-10 text-white">
                  <h2 className="text-4xl md:text-6xl font-bold mb-16 leading-tight">
                    あなたのビジネスを、退屈な作業から解放し、<br />
                    本来あるべき「意思決定」という舞台へ。
                  </h2>
                  <div className="space-y-8">
                    <a 
                      href={LINKS.OFFICIAL_LINE}
                      target="_blank"
                      className="inline-block bg-[#c5a059] text-white px-24 py-12 font-bold text-[16px] tracking-[0.6em] shadow-[0_30px_70px_rgba(197,160,89,0.4)] hover:bg-[#d4b06a] hover:scale-110 transition-all uppercase rounded-sm border-b-4 border-[#a48447]"
                    >
                      この革命に参加する
                    </a>
                    <div>
                      <a href={LINKS.OFFICIAL_LINE} target="_blank" className="text-[#00FFFF] font-bold tracking-widest text-sm hover:underline">
                        無料の個別コンサルティングを申し込む →
                      </a>
                    </div>
                  </div>
                  <p className="mt-20 text-white/30 text-xs font-bold tracking-[0.4em] uppercase">JOIN THE MCP REVOLUTION VIA OFFICIAL LINE</p>
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
                       <p className="text-slate text-sm leading-loose font-light">高度な推論と、25年の営業知見を学習した digital partner。<br />あなたの経営課題に、24時間365日回答を提示します。</p>
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
    <div className={`min-h-screen bg-navy selection:bg-gold selection:text-white ${view === 'MCP' ? 'theme-premium' : ''}`}>
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
                {['VISION', 'LARK', 'SERVICES', 'MCP', 'CONTACT'].map((item) => (
                  <button key={item} onClick={() => navigateTo(item as any)} className="text-[11px] font-bold tracking-[0.4em] text-slate hover:text-gold transition-colors text-left uppercase">{item}</button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest mb-10 uppercase">Materials</h4>
              <nav className="flex flex-col gap-5">
                <a href={LINKS.PRESENTATION_PDF} target="_blank" className="text-[11px] font-bold tracking-[0.5em] text-gold hover:text-white transition-colors text-left uppercase">GET PRESENTATION PDF</a>
                <a href={LINKS.LARK_PROFILE_DOC} target="_blank" className="text-[11px] font-bold tracking-[0.5em] text-gold hover:text-white transition-colors text-left uppercase">COMPANY PROFILE</a>
                <a href={LINKS.MCP_MATERIAL} target="_blank" className="text-[11px] font-bold tracking-[0.5em] text-[#00FFFF] hover:text-white transition-colors text-left uppercase">MCP PREMIUM MATERIAL</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] tracking-[0.4em] opacity-30 uppercase">© 2025 World Trade Next. All Rights Reserved.</p>
        </div>
      </footer>
      <style>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;

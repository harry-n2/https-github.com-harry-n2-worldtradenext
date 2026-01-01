
import { FeatureItem } from './types';

export const COLORS = {
  GOLD: '#c5a059',
  NAVY: '#003366', // ディープブルー
  SLATE: '#8892b0',
  WHITE: '#FFFFFF',
  LIGHT_GRAY: '#F5F5F5',
  CYAN: '#00FFFF' // アクセント：シアン
};

export const LINKS = {
  PRESENTATION_PDF: "https://drive.google.com/file/d/1QcWjfJWdlOU2gRjcyPW6254yr9MX3GQl/view?usp=sharing",
  OFFICIAL_LINE: "https://lin.ee/7qGC2YD",
  LINE_QR: "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://lin.ee/7qGC2YD",
  LARK_PROFILE_DOC: "https://ljpbqpwr5vbk.jp.larksuite.com/docx/GIfWd2Dk7oR1L1xrIIej8AT3prd?from=from_copylink",
  AI_MARKETING_LP: "https://harry-n2.github.io/wtn/lp_free_report.html",
  AI_SIDE_BIZ_LP: "https://harry-n2.github.io/wtn/lp.html",
  AI_COURSE_DOC: "https://ljpbqpwr5vbk.jp.larksuite.com/docx/NtFcdL7qgoZdSwxp4xdj5QVupGb",
  // 今回追加されたMCP専用資料リンク
  MCP_MATERIAL: "https://drive.google.com/file/d/1AEmM1tvgzMqnsFpWa9CeDQpO0aahHT_Y/view?usp=sharing"
};

export const IMAGES = {
  HERO_MAIN: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
  BUSINESS_EFFICIENCY: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  LARK_DASHBOARD: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  LARK_MOBILE: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
  LARK_OCR_SCAN: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200",
  MARKETING_AI: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
  OVERSEAS_BIZ: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
  SIDE_BIZ_AI: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
  AI_CONCIERGE_VISUAL: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  REPRESENTATIVE: "https://drive.google.com/thumbnail?id=1cs5h12nHzlAgpYu968KwoNcJPX8A0oJG&sz=w1000", 
  PDF_THUMBNAIL: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
  VISION_HERO: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  // MCP専用ビジュアル
  MCP_HERO: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
  MCP_PAIN: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200",
  MCP_GLUE: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200",
  MCP_FLOW: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
};

export const VISION = {
  description: "25年の営業経験と最新のAI技術を融合。単なる自動化を超え、人がより創造的な仕事に集中できる「知性の共創」を目指します。Larkを基盤とした業務の極小化と、AIマーケティングによる成長の最大化。その両輪で、貴社のビジネスを新たな地平へと導きます。",
  representative: {
    title: "World Trade Next 代表",
    name: "西野 直哉",
    profile: "25年間の多岐にわたる営業現場での経験を経て、AI技術の可能性に開眼.単なる技術導入ではなく、「人の温かみとAIの効率性」が共存する組織作りを提償。Lark導入支援から、生成AIを活用したマーケティング戦略構築まで、現場に即した泥臭い支援を信条とする。"
  }
};

export const LARK_SYSTEM = {
  mainTitle: "外国人材事業 自動化システム Lark base",
  catchcopy: "「通知が届くだけ」で、すべてのルーチンが完結する。",
  description: "オールインワンツールLarkを基盤に、外国人材管理における事務負担を最小化。在留資格の期限管理、OCRによる高速データ化、翻訳を駆使した円滑なコミュニケーションを一つのエコシステムで実現します。",
  features: [
    { title: "在留期限 自動監視", desc: "AIが24時間体制で期限をチェック。更新漏れリスクをゼロにします。" },
    { title: "OCR超速スキャン", desc: "書類を撮るだけで瞬時にデータ化。入力時間を96%削減します。" },
    { title: "多言語AIエンジン", desc: "標準装備の翻訳・文字起こし機能で、現場の言語障壁を解消。" }
  ]
};

export const SERVICES: FeatureItem[] = [
  {
    title: "AIマーケティング支援",
    description: "データが導く次世代の集客体験。市場トレンド and 顧客行動を精緻に分析し、コンバージョンを最大化します。",
    icon: "📊",
    link: LINKS.AI_MARKETING_LP
  },
  {
    title: "AI海外ビジネス支援",
    description: "言葉の壁を超え、世界市場へ。現地の文化や商習慣に最適化されたグローバル戦略を構築します。",
    icon: "🌏",
    link: LINKS.LARK_PROFILE_DOC
  },
  {
    title: "AIツール講座 × 業務改善",
    description: "ChatGPTやNotebookLMを使いこなし、日常業務を自動化。SNS集客からタスク管理まで実践的に伝授。",
    icon: "🎓",
    link: LINKS.AI_COURSE_DOC
  },
  {
    title: "AI副業支援",
    description: "AIを味方に新しい収益源を。高品質なコンテンツ生成を武器に、個人のスキルを収益化へと導きます。",
    icon: "💰",
    link: LINKS.AI_SIDE_BIZ_LP
  }
];

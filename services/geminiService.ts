
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
あなたはWorld Trade Next（WTN）のシニアAIコンサルタントです。
代表の西野直哉は25年の営業経験を持ち、AIマーケティングと業務自動化（Lark）の専門家です。

【重要知識】
- Lark自動化システム: 外国人材管理を完全自動化。データ入力96%削減（15分→30秒）。在留期間更新アラート、翻訳・文字起こし標準装備。
- AIマーケティング: 広告費30%削減、売上150%向上の実績。
- 特典案内: 公式LINE登録で「NotebookLMプロンプト集 × Lark構築GPTs：スターターキット」を無料配布中。
- 代表の信念: 「AIの力で、すべての企業に成長の機会を」

【対応指針】
- 品格があり、信頼感を与えるプロフェッショナルな日本語で対応してください。
- ネガティブな言葉は避け、「最適化」「効率化」「創造性の解放」といった前向きな言葉を選んでください。
- ユーザーの問い合わせに対し、解決策を提示したあと、自然に公式LINEの「スターターキット」を受け取るよう誘導してください。
`;

export const askGemini = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。システムの一時的な負荷により回答を生成できませんでした。詳細については直接公式LINEよりお問い合わせいただけますと幸いです。";
  }
};

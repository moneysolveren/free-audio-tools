// libs/siteConfig.js
// 全站設定檔

export const siteConfig = {
  // 基本資訊
  name: "Free Audio Tools",
  description: "完全免費的音訊工具箱,無需註冊,立即使用",
  url: "https://free-audio-tools.vercel.app",
  
  // 品牌
  brand: {
    name: "Free Audio Tools",
    tagline: "讓音訊處理更簡單",
    logo: "🎙️"
  },

  // 主要產品 (引流目標)
  products: {
    transcript: {
      name: "Transcript AI",
      url: "https://transcript-ai.com",
      description: "專業 AI 逐字稿轉換服務",
      features: [
        "Whisper Large V3 超高準確度",
        "支援 4 小時長音訊",
        "自動段落整理",
        "多語言翻譯"
      ]
    },
    liveTranslate: {
      name: "Live Translate",
      url: "https://live-translate.com",
      description: "即時翻譯字幕服務",
      features: [
        "即時語音轉文字",
        "多語言即時翻譯",
        "會議記錄",
        "自動摘要"
      ]
    }
  },

  // CTA 文案
  cta: {
    transcript: {
      title: "需要更高準確度?",
      description: "升級到 Transcript AI,獲得 Whisper Large V3 的超高準確度",
      buttonText: "免費試用 Transcript AI →"
    },
    liveTranslate: {
      title: "需要即時翻譯?",
      description: "試試 Live Translate,會議、直播即時翻譯",
      buttonText: "免費試用 Live Translate →"
    }
  },

  // 社群連結
  social: {
    twitter: "",
    github: "",
    email: "support@freeaudiotools.com"
  }
};

// 取得工具專屬的 CTA
export function getToolCTA(toolSlug) {
  const audioTools = ["recorder", "offline-stt", "mic-recorder", "audio-converter", "audio-trimmer"];
  const subtitleTools = ["subtitle-cleaner"];
  
  if (audioTools.includes(toolSlug)) {
    return siteConfig.products.transcript;
  } else if (subtitleTools.includes(toolSlug)) {
    return siteConfig.products.liveTranslate;
  } else {
    return siteConfig.products.transcript;
  }
}
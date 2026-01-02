// libs/toolsData.js
// 所有工具的定義和分類

export const allTools = [
  // === 第一批:首頁顯示 (8個工具) ===
  {
    id: 1,
    slug: "recorder",
    name: "分頁錄音器",
    description: "錄製 Chrome 分頁音訊",
    icon: "🎙️",
    category: "audio",
    status: "active",
    priority: 1,
    tags: ["錄音", "Chrome", "分頁"]
  },
  {
    id: 2,
    slug: "offline-stt",
    name: "離線語音轉文字",
    description: "本地處理,資料不上傳",
    icon: "📝",
    category: "audio",
    status: "active",
    priority: 2,
    tags: ["語音轉文字", "Whisper", "離線"]
  },
  {
    id: 3,
    slug: "mic-recorder",
    name: "麥克風錄音器",
    description: "錄製麥克風聲音",
    icon: "🎤",
    category: "audio",
    status: "coming-soon",
    priority: 3,
    tags: ["錄音", "麥克風"]
  },
  {
    id: 4,
    slug: "audio-converter",
    name: "音訊格式轉換",
    description: "MP3 ⇄ WAV ⇄ AAC",
    icon: "🔄",
    category: "audio",
    status: "coming-soon",
    priority: 4,
    tags: ["轉換", "格式"]
  },
  {
    id: 5,
    slug: "audio-trimmer",
    name: "音訊剪輯器",
    description: "裁切音訊檔案",
    icon: "✂️",
    category: "audio",
    status: "coming-soon",
    priority: 5,
    tags: ["剪輯", "裁切"]
  },
  {
    id: 6,
    slug: "video-to-audio",
    name: "影片轉音訊",
    description: "從影片提取音訊",
    icon: "🎬",
    category: "video",
    status: "coming-soon",
    priority: 6,
    tags: ["影片", "音訊", "轉換"]
  },
  {
    id: 7,
    slug: "subtitle-cleaner",
    name: "字幕清理器",
    description: "清理字幕檔案",
    icon: "🧹",
    category: "subtitle",
    status: "coming-soon",
    priority: 7,
    tags: ["字幕", "清理"]
  },
  {
    id: 8,
    slug: "pdf-to-text",
    name: "PDF 轉文字",
    description: "提取 PDF 文字內容",
    icon: "📄",
    category: "file",
    status: "coming-soon",
    priority: 8,
    tags: ["PDF", "文字", "轉換"]
  },
];

// 工具分類
export const categories = {
  audio: { name: "音訊工具", icon: "🎙️", color: "blue" },
  video: { name: "影片工具", icon: "🎬", color: "purple" },
  subtitle: { name: "字幕工具", icon: "💬", color: "green" },
  file: { name: "檔案工具", icon: "📁", color: "orange" }
};

// 獲取首頁顯示的工具 (前8個)
export function getFeaturedTools() {
  return allTools
    .filter(tool => tool.priority <= 8)
    .sort((a, b) => a.priority - b.priority);
}

// 根據 slug 獲取工具
export function getToolBySlug(slug) {
  return allTools.find(tool => tool.slug === slug);
}

// 根據狀態篩選工具
export function getToolsByStatus(status) {
  return allTools.filter(tool => tool.status === status);
}
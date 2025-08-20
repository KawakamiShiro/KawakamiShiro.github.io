// 文章配置文件 - 自动生成，请勿手动编辑
// 修改后保存文件，网站会自动更新

const articlesConfig = {
  // 文章分类配置
  categories: {
  "卡拉彼丘观察日志": {
    "name": "卡拉彼丘观察日志",
    "description": "卡拉彼丘观察日志相关文章",
    "icon": ""
  },
  "泛视觉小说品鉴录": {
    "name": "泛视觉小说品鉴录",
    "description": "泛视觉小说品鉴录相关文章",
    "icon": ""
  }
},

  // 文章数据 - 从 raw_article 文件夹的 markdown 文件生成
  articles: [
  {
    "title": "「熊信」被遗弃之人",
    "excerpt": "两个被遗弃的人相依，于是冰也燃烧了起来。",
    "category": "卡拉彼丘观察日志",
    "tags": [
      "卡拉彼丘",
      "熊信",
      "GB"
    ],
    "date": "2025-08-20",
    "author": "渊",
    "id": 1,
    "file": "001.html",
    "rawFile": "raw_article/卡拉彼丘观察日志/001-被遗弃之人.md"
  },
  {
    "title": "水烟水雾",
    "excerpt": "欢迎光临“水烟水雾”！",
    "category": "泛视觉小说品鉴录",
    "tags": [
      "Galgame",
      "测评"
    ],
    "date": "2025-08-20",
    "author": "渊",
    "id": 2,
    "file": "001.html",
    "rawFile": "raw_article/泛视觉小说品鉴录/002-水烟水雾.md"
  }
],

  // 网站信息
  siteInfo: {
    title: "文章目录 - Kawakami Shiro",
    author: "渊",
    avatar: "avatar_inner.jpg",
    nickname: "爱与喜欢，为什么能那么轻易地说出口呢？",
    description: ""
  },

  // 主题配置
  themes: {
    day: {
      grad1: '#f9e8ea',  // 浅红色渐变
      grad2: '#ffffff',
      text: '#1f2937',
      muted: '#6b7280',
      card: '#ffffff',
      cardRgb: '255, 255, 255',
      accent: '#ef4444'
    },
    night: {
      grad1: '#e8f0fb',  // 浅蓝色渐变（主界面默认）
      grad2: '#ffffff',
      text: '#1f2735',
      muted: '#5b6472',
      card: '#ffffff',
      cardRgb: '255, 255, 255',
      accent: '#3b82f6'
    }
  }
};

// 导出配置（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = articlesConfig;
}
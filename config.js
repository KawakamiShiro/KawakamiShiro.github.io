// 网站配置文件 - 在这里编辑您的个人信息
// 修改后保存文件，网站会自动更新

const siteConfig = {
  // 网站基本信息
  siteInfo: {
    title: "个人主页 · 表/里双界面（上下渐变 + 平滑切换）",
    language: "zh-CN"
  },

  // 表形态（学业形态）配置
  dayMode: {
    name: "Jiuen Feng",
    nickname: "Lund Machine Learning,Systems and Control",
    tagline: "研究方向：人机交互/具身智能",
    avatar: "avatar_study.jpg",
    sections: [
      {
        title: "研究与课程",
        items: [
          "课程学习",
          "研究方向", 
          "项目"
        ]
      },
      {
        title: "技能栈",
        items: [
          "Python",
          "JS", 
          "Docker"
        ]
      }
    ],
    footer: "© 2025 Kawakami Shiro"
  },

  // 里形态（二次元形态）配置
  nightMode: {
    name: "渊/海洋球",
    nickname: "可以叫我小渊",
    tagline: "社恐、弱社交，一只冰川鼠妇",
    avatar: "avatar_inner.jpg",
    sections: [
      {
        title: "电竞 / 主播",
        items: [
          "赛事只看 VCT CN",
          "友情支持 xlg"
        ]
      },
      {
        title: "史同",
        items: [
          "钟会、郗超",
          "会右&桓郗谢"
        ]
      },
      {
        title: "游戏",
        items: [
          "Apex 密客绝症",
          "视觉小说爱好",
          "手游只玩给旅人"
        ]
      },
      {
        title: "游戏制作",
        items: [
          "Godot 学习中",
          "原创视觉小说筹备中",
          "MarinPup Studio: https://marinepup.itch.io/"
        ]
      },
      {
        title: "番剧",
        items: [
          "影之实力者",
          "游戏人生"
        ]
      }
    ],
    footer: "© 2025 Kawakami Shiro"
  },

  // 主题配色配置
  themes: {
    day: {
      // 上下渐变（浅红 → 白）
      grad1: '#f9e8ea',  // 顶部更接近浅红（带灰）
      grad2: '#ffffff',  // 底部白
      text: '#1f2937',   // 高级灰文字
      muted: '#6b7280',
      card: '#ffffff',
      accent: '#ef4444'
    },
    night: {
      // 上下渐变（浅蓝 → 白）
      grad1: '#e8f0fb',  // 顶部浅蓝灰
      grad2: '#ffffff',  // 底部白
      text: '#1f2735',
      muted: '#5b6472',
      card: '#ffffff',
      accent: '#3b82f6'
    }
  }
};

// 导出配置（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}

// 网站配置文件 - 在这里编辑您的个人信息
// 修改后保存文件，网站会自动更新

const siteConfig = {
  // 网站基本信息
  siteInfo: {
    title: "Kawakami Shiro",
    language: "zh-CN"
  },

  // 表形态（学业形态）配置
      dayMode: {
      name: "迟承渊",
      nickname: "USTC",
      tagline: "研究方向：吃饭和睡觉",
      avatar: "avatar_study.jpg",
      customLinks: [
        { text: "GitHub", url: "https://github.com/KawakamiShiro" },
        { text: "知乎", url: "" },
        { text: "微博", url: "" },
        { text: "B站", url: "" }
      ],
    modules: [
      {
        groupTitle: "教育背景",
        sections: [
          {
            title: "中国科学吃饭大学",
            items: [
              {
                text: "吃饭科学与技术",
                right: "2020-2024"
              }
            ]
          }
        ]
      },
      {
        groupTitle: "研究经验",
        sections: [
          {
            title: {
              text: "智能推荐系统",
              right: "2023.09-2024.01"
            },
            items: [
              {
                text: "基于美食测评的用户推荐算法",
                right: "Python"
              },
              "其实并没有做",
              "但是这样子写比较像简历"
            ]
          },
          {
            title: {
              text: "美食图像识别",
              right: "2023.06-2023.12"
            },
            items: [
              "菜品自动分类系统",
              "食物热量估算算法",
              "基于深度学习的餐厅推荐"
            ]
          },
          {
            title: {
              text: "美食评论分析",
              right: "2023.03-2023.08"
            },
            items: [
              "餐厅评论情感分析",
              "菜品描述生成模型",
              "智能菜单推荐系统"
            ]
          }
        ]
      },
      {
        groupTitle: "技能栈",
        sections: [
          {
            title: "编程语言",
            items: [
              "中文"
            ]
          },
          {
            title: "框架工具",
            items: [
              "碗", "筷子", "勺子"
            ]
          }
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
      customLinks: [
        { text: "文章目录", url: "articles.html" },
        { text: "Steam", url: "" }
      ],
    // 可以选择使用模块化结构或传统sections结构
    modules: [
      {
        // groupTitle: "游戏爱好",
        sections: [
          {
            title: "电竞 / 主播",
            items: [
              "赛事只看 VCT CN，坐标欧洲的时候偶尔看EMEA",
              "友情支持 xlg，好感选手很多，杂食生物",
              "拒列外淀粉，梦女，表演型人格",
              "八百年不给主播送钱了也不怎么看主播，但是请支持青青岁岁"
            ]
          },
          {
            title: "史同",
            items: [
              "我推：钟会、郗超",
              "会右&桓郗谢",
              "×钟会恋爱脑舔狗塑",
              "爱玩真三，请光荣归还飞翔剑谢谢"
            ]
          },
          {
            title: "游戏",
            items: [
              "Apex 密客电妹平行car绝症（新赛季被打退役了）",
              "视觉小说爱好者，全性向都可以，bggbblgl是人不是人都可以",
              "我喜欢看三角恋，我永远喜欢冬马和纱",
              "Valorant 欧服黄白金烟哨",
              "卡拉彼丘 电子水平，会产出令信/墨信/熊信/墨莎，单机同人女",
              "手游只玩绘旅人，路辰单推，不混社群"
            ]
          },
          {
            title: "游戏制作",
            items: [
              "Godot 学习中",
              "原创视觉小说筹备中",
              "同人作品请见MarinPup Studio: https://marinepup.itch.io/"
            ]
          },

        ]
      },
      {
        groupTitle: "其他",
        sections: [
          {
            title: "番剧",
            items: [
              "异世界龙傲天厕纸爱好者，最喜欢影之实力者/问题儿童/游戏人生",
              "番剧看得很少，对上点播才会看，一天之内看完了86",
              "非常喜欢RWBY的世界观设定和美术设计",
              "MLP虹林檎洁癖"
            ]
          },
          {
            title: "小说",
            items: [
              "只看文，不看社群",
              "反舌鸟是我女神",
              "一十四洲也是我女神"
            ]
          }
        ]
      }
    ],
    // 如果不想使用模块化，也可以保留传统sections结构
    // sections: [...],
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

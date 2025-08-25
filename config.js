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
      name: "Jiuen Feng",
      nickname: "Lund University",
      tagline: "Research Interests: Human-Computer Interaction, Emotion Intelligence, and Machine Learning",
      avatar: "avatar_study.jpg",
      customLinks: [
        { text: "GitHub", url: "https://github.com/KawakamiShiro" }
      ],
    modules: [
      {
        groupTitle: "Education",
        sections: [
          {
            title: "Lund University",
            items: [
              {
                text: "Master of Science in Machine Learning, Systems and Control",
                right: "2024-2026"
              }
            ]
          },
          {
            title: "University of Science and Technology of China",
            items: [
              {
                text: "Automation",
                right: "2020-2024"
              }
            ]
          }
        ]
      },
      {
        groupTitle: "Research Experience",
        sections: [
          {
            title: {
              text: "基于电阻压力映射设备的实时姿态预测（本科毕设）",
              right: "2023.10-2024.05"
            },
            items: [
              "面向医疗看护等场景，解决传统体压监测系统响应慢、功能单一的问题",
              "构建基于ResNet-50的2D/3D姿态识别系统，并实现实时渲染优化",
              "设计多线程架构，分离预测、渲染与分类逻辑；基于 ResNet-50 构建2D/3D压力图识别模型，结合指数平滑与3D骨架渲染提升视觉效果",
              "系统支持实时姿态检测与计时功能，整体运行稳定，识别准确率高"
            ]
          },
          {
            title: {
              text: "Tagnoo: 基于 RFID 增强胶合板的智能环境（CHI 2024 | 第三作者）",
              right: "2023.07-2023.09"
            },
            items: [
              "Advisor: Xingdong Yang, Associate Professor, Simon Fraser University",
              "为实现家具中无缝的人体感知，设计集成 RFID 标签的智能材料平台",
              "开发可实时识别办公场景中人体活动的传感系统并验证其实用性",
              "负责 RFID 数据采集与特征处理，构建基于 CNN 的人体活动识别模型，设计用户研究并收集多类行为数据",
              "系统在真实办公环境中识别准确率达90%以上，论文成果被CHI 2024接收，作为第三作者发表"
            ]
          },
          {
            title: {
              text: "新加坡国立大学计算机学院暑期工作坊（团队项目）",
              right: "2023.07"
            },
            items: [
              "针对居家办公场景，设计多功能的智能照明调节系统",
              "开发基于用户行为识别的灯光控制模块，并组织团队完成项目交付",
              "在Raspberry Pi上实现摄像头采集与灯光控制；提出工作模式识别与久坐提醒功能，带领团队完成算法设计、系统整合与项目展示",
              "项目最终展示中荣获第三名（Top 3/11）"
            ]
          },
          {
            title: {
              text: "中国科学技术大学 RoboGame 机器人竞赛（团队项目）",
              right: "2022.08-2022.12"
            },
            items: [
              "参与设计一款可自主完成导航、识别与投掷冰壶任务的机器人系统",
              "参与机器人路径规划与操作流程开发，确保任务完成的准确性与稳定性",
              "基于STM32实现步进电机控制，开发图像识别与轨迹跟踪模块，持续优化投掷动作",
              "系统在比赛中稳定完成任务，项目获二等奖（Top 12/41）"
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
              "Python", "C", "MATLAB"
            ]
          },
          {
            title: "硬件开发",
            items: [
              "STM32", "Raspberry Pi", "Arduino"
            ]
          },
          {
            title: "开发工具",
            items: [
              "Git", "Linux", "ROS"
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
      tagline: "一只冰川鼠妇",
      avatar: "avatar_inner.jpg",
      // customLinks: [
      //   { text: "文章目录", url: "articles.html" },
      //   { text: "Steam", url: "" }
      // ],
    // 可以选择使用模块化结构或传统sections结构
    modules: [
      {
        // groupTitle: "游戏爱好",
        sections: [
          // {
          //   title: "电竞 / 主播",
          //   items: [
          //     "赛事只看 VCT CN，坐标欧洲的时候偶尔看EMEA",
          //     "友情支持 xlg，好感选手很多，杂食生物",
          //     "拒列外淀粉，梦女，表演型人格",
          //     "八百年不给主播送钱了也不怎么看主播，但是请支持青青岁岁"
          //   ]
          // },
          // {
          //   title: "史同",
          //   items: [
          //     "我推：钟会、郗超",
          //     "会右&桓郗谢",
          //     "×钟会恋爱脑舔狗塑",
          //     "爱玩真三，请光荣归还飞翔剑谢谢"
          //   ]
          // },
          // {
          //   title: "游戏",
          //   items: [
          //     "Apex 密客电妹平行car绝症（新赛季被打退役了）",
          //     "视觉小说爱好者，全性向都可以，bggbblgl是人不是人都可以",
          //     "我喜欢看三角恋，我永远喜欢冬马和纱",
          //     "Valorant 欧服黄白金烟哨",
          //     "卡拉彼丘 电子水平，会产出令信/墨信/熊信/墨莎，单机同人女",
          //     "手游只玩绘旅人，路辰单推，不混社群"
          //   ]
          // },
          {
            title: "游戏制作",
            items: [
              "Godot/Renpy 学习中",
              "原创视觉小说筹备中",
              "同人作品请见MarinPup Studio: https://marinepup.itch.io/"
            ]
          },

        ]
      },
      // {
      //   groupTitle: "其他",
      //   sections: [
      //     {
      //       title: "番剧",
      //       items: [
      //         "异世界龙傲天厕纸爱好者，最喜欢影之实力者/问题儿童/游戏人生",
      //         "番剧看得很少，对上点播才会看，一天之内看完了86",
      //         "非常喜欢RWBY的世界观设定和美术设计",
      //         "MLP虹林檎洁癖"
      //       ]
      //     },
      //     {
      //       title: "小说",
      //       items: [
      //         "只看文，不看社群",
      //         "反舌鸟是我女神",
      //         "一十四洲也是我女神"
      //       ]
      //     }
      //   ]
      // }
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

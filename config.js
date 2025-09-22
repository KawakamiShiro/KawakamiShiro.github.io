// 网站配置文件 - 在这里编辑您的个人信息
// 修改后保存文件，网站会自动更新

const siteConfig = {
  // 网站基本信息
  siteInfo: {
    title: "Jiuen Feng",
    language: "zh-CN"
  },

  // 表形态（学业形态）配置
      dayMode: {
      name: "Jiuen Feng",
      nickname: "Lund University",
      tagline: "Research Interests: Human-Computer Interaction, Embodied Intelligence, and Machine Learning",
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
              text: "Learning Robot Skill Trajectories from Human Hand Videos (Course Project)",
              right: "Mar. 2025 - Jun. 2025"
            },
            items: [
              "Investigated cross-modal transfer of human hand trajectories to robotic platforms without teleoperation data.",
              "Built a token-level alignment framework (HPT-based) combining HaMeR-extracted 3D trajectories with simulated robot motion data.",
              "Demonstrated feasibility of learning new robotic skills directly from egocentric human video."
            ]
          },
          {
            title: {
              text: "Real-time Posture Prediction Based on Resistive Pressure Mapping Device (Bachelor Thesis)",
              right: "Oct. 2023 - May 2024"
            },
            items: [
              "Addressed slow response and limited functionality of traditional body pressure monitoring systems for healthcare scenarios",
              "Built 2D/3D posture recognition system based on ResNet-50 with real-time rendering optimization",
              "Designed multi-threaded architecture separating prediction, rendering, and classification logic; constructed 2D/3D pressure map recognition model using ResNet-50, enhanced visual effects with exponential smoothing and 3D skeleton rendering",
              "System supports real-time posture detection and timing functions, achieving stable operation and high recognition accuracy"
            ]
          },
          {
            title: {
              text: "Tagnoo: Enabling Smart Room-Scale Environments with RFID-Augmented Plywood (CHI 2024 | Third Author)",
              right: "July 2023 - Sept. 2023"
            },
            items: [
              "Advisor: Xingdong Yang, Associate Professor, Simon Fraser University",
              "Designed intelligent material platform integrating RFID tags for seamless human perception in furniture",
              "Developed real-time human activity recognition system for office scenarios and validated its practicality",
              "Responsible for RFID data collection and feature processing, built CNN-based human activity recognition model, designed user studies and collected diverse behavioral data",
              "System achieved over 90% recognition accuracy in real office environments, paper accepted at CHI 2024 as third author"
            ]
          },
          {
            title: {
              text: "National University of Singapore Computer Science Summer Workshop (Team Project)",
              right: "July 2023"
            },
            items: [
              "Developed a lamp-based home smart hub system using cameras to capture human activities and adjust light intensity based on environmental and user working modes.",
              "Implemented sensor control algorithms on Raspberry Pi using Python and developed machine learning algorithms to analyze videos for determining user working modes. ",
              "As team leader, proposed the smart lamp idea and core functionalities such as recognizing working modes and sedentary reminders. Assigned tasks, designed the poster, and delivered the presentation. ",
              "Won the 3rd Prize in the final demo (Top 3/11)."
            ]
          }
        ]
      },
      {
        groupTitle: "Technical Skills",
        sections: [
          {
            title: "Programming Languages",
            items: [
              "Python", "C", "MATLAB"
            ]
          },
          {
            title: "Hardware Development",
            items: [
              "STM32", "Raspberry Pi", "Arduino"
            ]
          },
          {
            title: "Development Tools",
            items: [
              "Git", "Linux", "ROS"
            ]
          }
        ]
      }
    ],
    footer: "© 2025 Jiuen Feng"
  },

  // 里形态（二次元形态）配置
      nightMode: {
      name: "MarineBall",
      nickname: "Yuan",
      tagline: "Game Designer",
      avatar: "avatar_inner.jpg",
      // customLinks: [
      //   { text: "文章目录", url: "articles.html" },
      //   { text: "Steam", url: "" }
      // ],
    // 可以选择使用模块化结构或传统sections结构
    modules: [
      {
        sections: [
          {
            title: "Learning Process",
            items: [
              "Godot/Renpy Learning",
              "Original Visual Novel in Preparation",
              "Fan-made works please visit MarinPup Studio: https://marinepup.itch.io/"
            ]
          },
          {
            title: "Locked Room with Caleb",
            items: [
              "A 1-hour otome fan game inspired by Caleb (Love and Deepspace), where players relive memories and make choices in a dream room",
              "Played by 1500+ people, with merchandise designed and sold",
              "My role: planning, partial scriptwriting, full programming development in Godot",
              "https://marinepup.itch.io/locked-room-with-caleb"
            ]
          },
          {
            title: "Summertime",
            items: [
              "A BL fan game featuring two gaming streamers as protagonists, created with WebGAL in 2023",
              "Received 50+ shares and multiple positive reviews",
              "My role: character sprites, scriptwriting, and programming",
              "https://kawakamishiro.github.io/Natsukoi/"
            ]
          },
          {
            title: "Desktop Pet Project",
            items: [
              "A customizable virtual desktop pet with tutorial videos reaching 2500+ views and 500+ saves",
              "Developed interactive features including sleep clock, live-stream reminders, and online-database-driven dialogue updates",
              "Character sprites commissioned; scriptwriting and programming fully done by myself.",
              "https://www.bilibili.com/video/BV1ztpEzxEbs"
            ]
          },
          
          

        ]
      },

    ],

    footer: "© 2025 Jiuen Feng"
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

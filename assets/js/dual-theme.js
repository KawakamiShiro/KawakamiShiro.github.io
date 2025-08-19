// ===== 双主题切换系统 =====

// 两套主题：上下渐变 + 高级灰配色
const themeDay = {
  // 上下渐变（浅红 → 白）
  grad1: '#f9e8ea',  // 顶部更接近浅红（带灰）
  grad2: '#ffffff',  // 底部白
  text:  '#1f2937',  // 高级灰文字
  muted: '#6b7280',
  card:  '#ffffff',
  accent:'#ef4444'
};

const themeNight = {
  // 上下渐变（浅蓝 → 白）
  grad1: '#e8f0fb',  // 顶部浅蓝灰
  grad2: '#ffffff',  // 底部白
  text:  '#1f2735',
  muted: '#5b6472',
  card:  '#ffffff',
  accent:'#3b82f6'
};

// 主题数据
const themeData = {
  day: {
    name: '渥 / 学业形态',
    nickname: 'Lund ML Systems',
    tagline: '研究方向：RAG + ReAct 个性化推理',
    avatar: './images/avatar_study.jpg',
    sections: [
      {title: '研究与课程', items: ['课程学习', '研究方向', '项目']},
      {title: '技能栈', items: ['Python', 'JS', 'Docker']}
    ],
    footer: '© ' + new Date().getFullYear() + ' 表·学业形态'
  },
  night: {
    name: '渥 / 里形态',
    nickname: '可以叫我小渥',
    tagline: '社恐、弱社交、爱直给',
    avatar: './images/avatar_inner.jpg',
    sections: [
      {title: '电竞 / 主播', items: ['赛事只看 VCT CN', '友情支持 xlg']},
      {title: '史同', items: ['钟会、郁超', '荀右相关']},
      {title: '游戏', items: ['Apex 黄金烟角', '视觉小说爱好', '手游只玩给旅人']},
      {title: '游戏制作', items: ['Godot 学习中', '原创视觉小说筹备中']},
      {title: '番剧', items: ['影之实力者', '游戏人生']}
    ],
    footer: '© ' + new Date().getFullYear() + ' 里·二次元形态'
  }
};

// 工具函数
const $ = s => document.querySelector(s);

// 应用主题变量
function applyThemeVars(th) {
  document.documentElement.style.setProperty('--text', th.text);
  document.documentElement.style.setProperty('--muted', th.muted);
  document.documentElement.style.setProperty('--card', th.card);
  document.documentElement.style.setProperty('--accent', th.accent);
}

// 设置渐变背景
function setGradientOn(el, th) {
  el.style.background = `linear-gradient(to bottom, ${th.grad1}, ${th.grad2})`;
}

// 渐变 Crossfade：把下一主题放到隐藏层，淡入后交换层级
let activeBgIsA = true;
function crossfadeBackground(nextTheme) {
  const bgA = $('#bgA');
  const bgB = $('#bgB');
  
  if (!bgA || !bgB) return;
  
  const show = activeBgIsA ? bgB : bgA;
  const hide = activeBgIsA ? bgA : bgB;
  
  setGradientOn(show, nextTheme);
  // 先确保下一层在背后
  show.classList.add('fade'); // 保持 0，准备淡入
  // 强制 reflow 以应用过渡
  void show.offsetWidth;
  // 淡入新背景
  show.classList.remove('fade');
  // 同时淡出旧背景
  hide.classList.add('fade');
  // 切换标记
  activeBgIsA = !activeBgIsA;
}

// 更新切换按钮状态
function updateToggle(isDay) {
  const btnDay = $('#btnDay');
  const btnNight = $('#btnNight');
  
  if (btnDay) btnDay.classList.toggle('active', isDay);
  if (btnNight) btnNight.classList.toggle('active', !isDay);
}

// 渲染主题数据
function renderThemeData(d) {
  // 更新页面标题和描述
  const titleEl = $('.page__title');
  const subtitleEl = $('.page__subtitle');
  const taglineEl = $('.page__tagline');
  
  if (titleEl) titleEl.textContent = d.name;
  if (subtitleEl) subtitleEl.textContent = d.nickname || '';
  if (taglineEl) taglineEl.textContent = d.tagline || '';
  
  // 更新头像
  const avatarEl = $('.author__avatar img');
  if (avatarEl && d.avatar) {
    avatarEl.src = d.avatar;
  }
  
  // 更新页脚
  const footerEl = $('.page__footer');
  if (footerEl) footerEl.innerHTML = d.footer || '';
}

// 本地存储
const STORAGE_KEY = 'site-mode';
const getMode = () => localStorage.getItem(STORAGE_KEY) || 'day';
const setMode = (m) => localStorage.setItem(STORAGE_KEY, m);

// 应用主题模式
function applyMode(mode, instant = false) {
  const isDay = mode === 'day';
  const th = isDay ? themeDay : themeNight;
  
  applyThemeVars(th);
  
  if (instant) {
    // 初次渲染不做动画：把两层都设到同一渐变，避免闪烁
    const bgA = $('#bgA');
    const bgB = $('#bgB');
    
    if (bgA && bgB) {
      setGradientOn(bgA, th);
      setGradientOn(bgB, th);
      bgA.classList.remove('fade');
      bgB.classList.add('fade');
    }
  } else {
    crossfadeBackground(th);
  }
  
  renderThemeData(isDay ? themeData.day : themeData.night);
  updateToggle(isDay);
}

// 初始化主题系统
function initDualTheme() {
  // 创建背景层
  const body = document.body;
  if (!body.querySelector('.dual-theme-bg')) {
    const bgA = document.createElement('div');
    bgA.id = 'bgA';
    bgA.className = 'dual-theme-bg';
    
    const bgB = document.createElement('div');
    bgB.id = 'bgB';
    bgB.className = 'dual-theme-bg fade';
    
    body.insertBefore(bgA, body.firstChild);
    body.insertBefore(bgB, body.firstChild);
  }
  
  // 应用初始主题
  applyMode(getMode(), true);
  
  // 绑定事件
  const btnDay = $('#btnDay');
  const btnNight = $('#btnNight');
  
  if (btnDay) {
    btnDay.addEventListener('click', () => {
      setMode('day');
      applyMode('day');
    });
  }
  
  if (btnNight) {
    btnNight.addEventListener('click', () => {
      setMode('night');
      applyMode('night');
    });
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDualTheme);
} else {
  initDualTheme();
} 